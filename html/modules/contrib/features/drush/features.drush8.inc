<?php

/**
 * @file
 * Features module drush integration.
 */

use Drupal\features\ConfigurationItem;
use Drupal\features\FeaturesBundleInterface;
use Drupal\features\FeaturesManagerInterface;
use Drupal\features\Plugin\FeaturesGeneration\FeaturesGenerationWrite;
use Drupal\Component\Diff\DiffFormatter;

/**
 * Implements hook_drush_command().
 */
function features_drush_command() {
  $items = [];

  $items['features-status'] = [
    'description' => 'Display current Features settings.',
    'aliases' => ['fs'],
  ];

  $items['features-list-packages'] = [
    'description' => 'Display a list of all existing features and packages available to be generated.  If a package name is provided as an argument, then all of the configuration objects assigned to that package will be listed.',
    'examples' => [
      "drush features-list-packages" => 'Display a list of all existing featurea and packages available to be generated.',
      "drush features-list-packages 'example_article'" => "Display a list of all configuration objects assigned to the 'example_article' package.",
    ],
    'arguments' => [
      'package' => 'The package to list. Optional; if specified, lists all configuration objects assigned to that package. If no package is specified, lists all of the features.',
    ],
    'outputformat' => [
      'default' => 'table',
      'pipe-format' => 'list',
      'field-labels' => [
        'name' => 'Name',
        'machine_name' => 'Machine name',
        'status' => 'Status',
        'version' => 'Version',
        'state' => 'State',
        'object' => 'Configuration object',
      ],
      'output-data-type' => 'format-table',
    ],
    'aliases' => ['fl'],
  ];

  $items['features-import-all'] = [
    'description' => 'Import module config from all installed features.',
    'examples' => [
      "drush features-import-all" => 'Import module config from all installed features.',
    ],
    'aliases' => ['fra', 'fia', 'fim-all'],
  ];

  $items['features-export'] = [
    'description' => "Export the configuration on your site into a custom module.",
    'arguments' => [
      'package' => 'A space delimited list of features to export.',
    ],
    'options' => [
      'add-profile' => 'Package features into an install profile.',
    ],
    'examples' => [
      "drush features-export" => 'Export all available packages.',
      "drush features-export example_article example_page" => "Export the example_article and example_page packages.",
      "drush features-export --add-profile" => "Export all available packages and add them to an install profile.",
    ],
    // Add previous "fu" alias for compatibility.
    'aliases' => ['fex', 'fu', 'fua', 'fu-all'],
  ];

  $items['features-add'] = [
    'description' => "Add a config item to a feature package.",
    'arguments' => [
      'feature' => 'Feature package to export and add config to.',
      'components' => 'Patterns of config to add, see features-components for the format of patterns.',
    ],
    'aliases' => ['fa', 'fe'],
  ];

  $items['features-components'] = [
    'description' => 'List features components.',
    'arguments' => [
      'patterns' => 'The features components type to list. Omit this argument to list all components.',
    ],
    'options' => [
      'exported' => [
        'description' => 'Show only components that have been exported.',
      ],
      'not-exported' => [
        'description' => 'Show only components that have not been exported.',
      ],
    ],
    'aliases' => ['fc'],
  ];

  $items['features-diff'] = [
    'description' => "Show the difference between the active config and the default config stored in a feature package.",
    'arguments' => [
      'feature' => 'The feature in question.',
    ],
    'options' => [
      'ctypes' => 'Comma separated list of component types to limit the output to. Defaults to all types.',
      'lines' => 'Generate diffs with <n> lines of context instead of the usual two.',
    ],
    'aliases' => ['fd'],
  ];

  $items['features-import'] = [
    'description' => "Import a module config into your site.",
    'arguments' => [
      'feature' => 'A space delimited list of features or feature:component pairs to import.',
    ],
    'options' => [
      'force' => "Force import even if config is not overridden.",
    ],
    'examples' => [
      'drush features-import foo:node.type.page foo:taxonomy.vocabulary.tags bar' => 'Import node and taxonomy config of feature "foo". Import all config of feature "bar".',
    ],
    'aliases' => ['fim', 'fr'],
  ];

  foreach ($items as $name => &$item) {
    $item['options']['bundle'] = [
      'description' => 'Use a specific bundle namespace.',
    ];
  }

  return $items;
}

/**
 * Applies global options for Features drush commands.
 *
 * The option --name="bundle_name" sets the bundle namespace.
 *
 * @return \Drupal\features\FeaturesAssignerInterface
*/
function _drush_features_options() {
  /** @var \Drupal\features\FeaturesAssignerInterface $assigner */
  $assigner = \Drupal::service('features_assigner');
  $bundle_name = drush_get_option('bundle');
  if (!empty($bundle_name)) {
    $bundle = $assigner->applyBundle($bundle_name);
    if ($bundle->getMachineName() != $bundle_name) {
      drush_log(dt('Bundle @name not found. Using default.', ['@name' => $bundle_name]), 'warning');
    }
  }
  else {
    $assigner->assignConfigPackages();
  }
  return $assigner;
}

/**
 * Provides Drush command callback for features-status.
 */
function drush_features_status() {
  $args = func_get_args();
  $assigner = _drush_features_options();


  /** @var \Drupal\features\FeaturesManagerInterface $manager */
  $manager = \Drupal::service('features.manager');
  $current_bundle = $assigner->getBundle();
  $export_settings = $manager->getExportSettings();
  $methods = $assigner->getEnabledAssigners();
  if ($current_bundle->isDefault()) {
    drush_print(dt('Current bundle: none'));
  }
  else {
    drush_print(dt('Current bundle: @name (@machine_name)',
      [
        '@name' => $current_bundle->getName(),
        '@machine_name' => $current_bundle->getMachineName(),
      ]));
  }
  drush_print(dt('Export folder: @folder', ['@folder' => $export_settings['folder']]));
  $dt_args = ['@methods' => implode(', ', array_keys($methods))];
  drush_print(dt('The following assignment methods are enabled:'));
  drush_print(dt('  @methods', $dt_args));

  if (!empty($args)) {
    $config = $manager->getConfigCollection();
    if (count($args) > 1) {
      print_r(array_keys($config));
    }
    else {
      print_r($config[$args[0]]);
    }
  }
}

/**
 * Drush command callback for features-list-packages.
 *
 * @param string $package_name
 *   (optional) The package name.
 *
 * @return array|bool
 */
function drush_features_list_packages($package_name = '') {
  $assigner = _drush_features_options();
  $current_bundle = $assigner->getBundle();
  $namespace = $current_bundle->isDefault() ? FeaturesBundleInterface::DEFAULT_BUNDLE : $current_bundle->getMachineName();

  /** @var \Drupal\features\FeaturesManagerInterface $manager */
  $manager = \Drupal::service('features.manager');
  $packages = $manager->getPackages();

  $packages = $manager->filterPackages($packages, $namespace);
  $result = [];

  // If no package was specified, list all packages.
  if (empty($package_name)) {
    drush_hide_output_fields(['object']);
    foreach ($packages as $package) {
      $overrides = $manager->detectOverrides($package);
      $state = $package->getState();
      if (!empty($overrides) && ($package->getStatus() != FeaturesManagerInterface::STATUS_NO_EXPORT)) {
        $state = FeaturesManagerInterface::STATE_OVERRIDDEN;
      }

      $result[$package->getMachineName()] = [
        'name' => $package->getName(),
        'machine_name' => $package->getMachineName(),
        'status' => $manager->statusLabel($package->getStatus()),
        'version' => $package->getVersion(),
        'state' => ($state != FeaturesManagerInterface::STATE_DEFAULT)
          ? $manager->stateLabel($state)
          : '',
      ];
    }
    return $result;
  }
  // If a valid package was listed, list its configuration.
  else {
    foreach ($packages as $package) {
      if ($package->getMachineName() == $package_name) {
        drush_hide_output_fields([
          'machine_name',
          'name',
          'status',
          'version',
          'state',
        ]);
        foreach ($package->getConfig() as $item_name) {
          $result[$item_name] = [
            'object' => $item_name,
          ];
        }
        return $result;
      }
    }

  }

  // If no matching package found, return an error.
  drush_log(dt('Package "@package" not found.', ['@package' => $package_name]), 'warning');
  return FALSE;
}

/**
 * Drush command callback for features-import-all.
 *
 */
function drush_features_import_all() {
  $assigner = _drush_features_options();
  $current_bundle = $assigner->getBundle();
  $namespace = $current_bundle->isDefault() ? FeaturesBundleInterface::DEFAULT_BUNDLE : $current_bundle->getMachineName();

  /** @var \Drupal\features\FeaturesManagerInterface $manager */
  $manager = \Drupal::service('features.manager');
  $packages = $manager->getPackages();
  $packages = $manager->filterPackages($packages, $namespace);
  $overridden = [];

  foreach ($packages as $package) {
    $overrides = $manager->detectOverrides($package);
    $missing = $manager->detectMissing($package);
    if ((!empty($missing) || !empty($overrides)) && ($package->getStatus() == FeaturesManagerInterface::STATUS_INSTALLED)) {
      $overridden[] = $package->getMachineName();
    }
  }

  if (!empty($overridden)) {
    call_user_func_array('drush_features_import', $overridden);
  }
  else {
    drush_log(dt('Current state already matches active config, aborting.'), 'ok');
  }
}

/**
 * Provides Drush command callback for features-export.
 */
function drush_features_export($packages = NULL) {
  $packages = func_get_args();
  $assigner = _drush_features_options();

  /** @var \Drupal\features\FeaturesManagerInterface $manager */
  $manager = \Drupal::service('features.manager');
  /** @var \Drupal\features\FeaturesGeneratorInterface $generator */
  $generator = \Drupal::service('features_generator');

  $current_bundle = $assigner->getBundle();

  if (drush_get_option('add-profile')) {
    if ($current_bundle->isDefault) {
      return drush_set_error('', dt("Must specify a profile name with --name"));
    }
    $current_bundle->setIsProfile(TRUE);
  }

  $all_packages = $manager->getPackages();
  foreach ($packages as $name) {
    if (!isset($all_packages[$name])) {
      return drush_set_error('', dt("The package @name does not exist.", ['@name' => $name]));
    }
  }

  if (empty($packages)) {
    $packages = $all_packages;
    $dt_args = ['@modules' => implode(', ', array_keys($packages))];
    drush_print(dt('The following extensions will be exported: @modules', $dt_args));
    if (!drush_confirm(dt('Do you really want to continue?'))) {
      return drush_user_abort('Aborting.');
    }
  }

  // If any packages exist, confirm before overwriting.
  if ($existing_packages = $manager->listPackageDirectories($packages, $current_bundle)) {
    foreach ($existing_packages as $name => $directory) {
      drush_print(dt("The extension @name already exists at @directory.", ['@name' => $name, '@directory' => $directory]));
    }
    // Apparently, format_plural is not always available.
    if (count($existing_packages) == 1) {
      $message = dt('Would you like to overwrite it?');
    }
    else {
      $message = dt('Would you like to overwrite them?');
    }
    if (!drush_confirm($message)) {
      return drush_user_abort();
    }
  }

  // Use the write generation method.
  $method_id = FeaturesGenerationWrite::METHOD_ID;
  $result = $generator->generatePackages($method_id, $current_bundle, $packages);

  foreach ($result as $message) {
    $type = $message['success'] ? 'success' : 'error';
    drush_log($message['message'], $message['variables'], $type);
  }
}

/**
 * Adds a component to a features module.
 *
 * @param
 *   The selected components.
 */
function drush_features_add() {
  if ($args = func_get_args()) {
    $assigner = _drush_features_options();

    /** @var \Drupal\features\FeaturesManagerInterface $manager */
    $manager = \Drupal::service('features.manager');
    /** @var \Drupal\features\FeaturesGeneratorInterface $generator */
    $generator = \Drupal::service('features_generator');

    $current_bundle = $assigner->getBundle();

    $module = array_shift($args);
    if (empty($args)) {
      return drush_set_error('', 'No components supplied.');
    }
    $components = _drush_features_component_list();
    $options = [
      'exported' => FALSE,
    ];

    $filtered_components = _drush_features_component_filter($components, $args, $options);
    $items = $filtered_components['components'];

    if (empty($items)) {
      return drush_set_error('', 'No components to add.');
    }

    $packages = [$module];
    // If any packages exist, confirm before overwriting.
    if ($existing_packages = $manager->listPackageDirectories($packages)) {
      foreach ($existing_packages as $name => $directory) {
        drush_print(dt("The extension @name already exists at @directory.", ['@name' => $name, '@directory' => $directory]));
      }
      // Apparently, format_plural is not always available.
      if (count($existing_packages) == 1) {
        $message = dt('Would you like to overwrite it?');
      }
      else {
        $message = dt('Would you like to overwrite them?');
      }
      if (!drush_confirm($message)) {
        return drush_user_abort();
      }
    }
    else {
      $package = $manager->initPackage($module, NULL, '', 'module', $current_bundle);
      list($full_name, $path) = $manager->getExportInfo($package, $current_bundle);
      drush_print(dt('Will create a new extension @name in @directory', ['@name' => $full_name, '@directory' => $path]));
      if (!drush_confirm(dt('Do you really want to continue?'))) {
        drush_die('Aborting.');
      }
    }

    $config = _drush_features_build_config($items);

    $manager->assignConfigPackage($module, $config);

    // Use the write generation method.
    $method_id = FeaturesGenerationWrite::METHOD_ID;
    $result = $generator->generatePackages($method_id, $current_bundle, $packages);

    foreach ($result as $message) {
      $type = $message['success'] ? 'success' : 'error';
      drush_log($message['message'], $message['variables'], $type);
    }
  }
  else {
    return drush_set_error('', 'No feature name given.');
  }
}

/**
 * Lists components, with pattern matching.
 */
function drush_features_components() {
  $args = func_get_args();
  _drush_features_options();

  $components = _drush_features_component_list();
  ksort($components);
  // If no args supplied, prompt with a list.
  if (empty($args)) {
    $types = array_keys($components);
    array_unshift($types, 'all');
    $choice = drush_choice($types, 'Enter a number to choose which component type to list.');
    if ($choice === FALSE) {
      return;
    }

    $args = ($choice == 0) ? ['*'] : [$types[$choice]];
  }
  $options = [
    'provided by' => TRUE,
  ];
  if (drush_get_option(['exported', 'e'], NULL)) {
    $options['not exported'] = FALSE;
  }
  elseif (drush_get_option(['not-exported', 'o'], NULL)) {
    $options['exported'] = FALSE;
  }

  $filtered_components = _drush_features_component_filter($components, $args, $options);
  if ($filtered_components) {
    _drush_features_component_print($filtered_components);
  }
}

/**
 * Lists the differences in the package config vs the active store.
 *
 * @param string $package
 *   The machine name of a package.
 */
function drush_features_diff() {
  if (!$args = func_get_args()) {
    drush_print_table(drush_features_list_packages());
    return;
  }

  /** @var \Drupal\features\FeaturesManagerInterface $manager */
  $manager = \Drupal::service('features.manager');
  /** @var \Drupal\features\FeaturesAssignerInterface $assigner */
  $assigner = \Drupal::service('features_assigner');
  $assigner->assignConfigPackages();

  $module = $args[0];
  $filter_ctypes = drush_get_option("ctypes");
  if ($filter_ctypes) {
    $filter_ctypes = explode(',', $filter_ctypes);
  }

  $feature = $manager->loadPackage($module, TRUE);
  if (empty($feature)) {
    drush_log(dt('No such feature is available: @module', ['@module' => $module]), 'error');
    return;
  }

  $lines = drush_get_option('lines');
  $lines = isset($lines) ? $lines : 2;

  $formatter = new DiffFormatter();
  $formatter->leading_context_lines = $lines;
  $formatter->trailing_context_lines = $lines;
  $formatter->show_header = FALSE;

  if (drush_get_context('DRUSH_NOCOLOR')) {
    $red = $green = "%s";
  }
  else {
    $red = "\033[31;40m\033[1m%s\033[0m";
    $green = "\033[0;32;40m\033[1m%s\033[0m";
  }

  $overrides = $manager->detectOverrides($feature);
  $missing = $manager->reorderMissing($manager->detectMissing($feature));
  $overrides = array_merge($overrides, $missing);

  if (empty($overrides)) {
    drush_print(dt('Active config matches stored config for @module.', ['@module' => $module]));
  }
  else {
    /** @var \Drupal\config_update\ConfigDiffInterface $config_diff */
    $config_diff = \Drupal::service('config_update.config_diff');
    /** @var \Drupal\Core\Config\StorageInterface $active_storage */
    $active_storage = \Drupal::service('config.storage');

    // Print key for colors.
    drush_print(dt('Legend: '));
    drush_print(sprintf($red, dt('Code:    drush features-import will replace the active config with the displayed code.')));
    drush_print(sprintf($green, dt('Active:  drush features-export will update the exported feature with the displayed active config')));

    foreach ($overrides as $name) {
      $message = '';
      if (in_array($name, $missing)) {
        $message = sprintf($red, t('(missing from active)'));
        $extension = [];
      }
      else {
        $active = $manager->getActiveStorage()->read($name);
        $extension = $manager->getExtensionStorages()->read($name);
        if (empty($extension)) {
          $extension = [];
          $message = sprintf($green, t('(not exported)'));
        }
        $diff = $config_diff->diff($extension, $active);
        $rows = explode("\n", $formatter->format($diff));
      }
      drush_print();
      drush_print(dt("Config @name @message", ['@name' => $name, '@message' => $message]));
      if (!empty($extension)) {
        foreach ($rows as $row) {
          if (strpos($row, '>') === 0) {
            drush_print(sprintf($green, $row));
          }
          elseif (strpos($row, '<') === 0) {
            drush_print(sprintf($red, $row));
          }
          else {
            drush_print($row);
          }
        }
      }
    }
  }
}

/**
 * Imports module config into the active store.
 *
 * Same as the old "revert" functionality.
 */
function drush_features_import() {
  if ($args = func_get_args()) {
    _drush_features_options();

    // Determine if revert should be forced.
    $force = drush_get_option('force');
    // Determine if -y was supplied. If so, we can filter out needless output
    // from this command.
    $skip_confirmation = drush_get_context('DRUSH_AFFIRMATIVE');

    /** @var \Drupal\features\FeaturesManagerInterface $manager */
    $manager = \Drupal::service('features.manager');

    // Parse list of arguments.
    $modules = [];
    foreach ($args as $arg) {
      $arg = explode(':', $arg);
      $module = array_shift($arg);
      $component = array_shift($arg);

      if (isset($module)) {
        if (empty($component)) {
          // If we received just a feature name, this means that we need all of
          // its components.
          $modules[$module] = TRUE;
        }
        elseif ($modules[$module] !== TRUE) {
          if (!isset($modules[$module])) {
            $modules[$module] = [];
          }
          $modules[$module][] = $component;
        }
      }
    }

    // Process modules.
    foreach ($modules as $module => $components_needed) {

      $dt_args['@module'] = $module;
      /** @var \Drupal\features\Package $feature */
      $feature = $manager->loadPackage($module, TRUE);
      if (empty($feature)) {
        drush_log(dt('No such feature is available: @module', $dt_args), 'error');
        return;
      }

      if ($feature->getStatus() != FeaturesManagerInterface::STATUS_INSTALLED) {
        drush_log(dt('No such feature is installed: @module', $dt_args), 'error');
        return;
      }

      // Forcefully revert all components of a feature.
      if ($force) {
        $components = $feature->getConfigOrig();
      }
      // Only revert components that are detected to be Overridden.
      else {
        $components = $manager->detectOverrides($feature);
        $missing = $manager->reorderMissing($manager->detectMissing($feature));
        // Be sure to import missing components first.
        $components = array_merge($missing, $components);
      }

      if (!empty($components_needed) && is_array($components_needed)) {
        $components = array_intersect($components, $components_needed);
      }

      if (empty($components)) {
        drush_log(dt('Current state already matches active config, aborting.'), 'ok');
      }
      else {
        // Determine which config the user wants to import/revert.
        $config_to_create = [];
        foreach ($components as $component) {
          $dt_args['@component'] = $component;
          $confirmation_message = 'Do you really want to import @module : @component?';
          if ($skip_confirmation || drush_confirm(dt($confirmation_message, $dt_args))) {
            $config_to_create[$component] = '';
          }
        }

        // Perform the import/revert.
        $config_imported = $manager->createConfiguration($config_to_create);

        // List the results.
        foreach ($components as $component) {
          $dt_args['@component'] = $component;
          if (isset($config_imported['new'][$component])) {
            drush_log(dt('Imported @module : @component.', $dt_args), 'ok');
          }
          elseif (isset($config_imported['updated'][$component])) {
            drush_log(dt('Reverted @module : @component.', $dt_args), 'ok');
          }
          elseif (!isset($config_to_create[$component])) {
            drush_log(dt('Skipping @module : @component.', $dt_args), 'ok');
          }
          else {
            drush_log(dt('Error importing @module : @component.', $dt_args), 'error');
          }
        }
      }
    }
  }
  else {
    drush_print_table(drush_features_list_packages());
    return;
  }
}

/**
 * Returns an array of full config names given a array[$type][$component].
 *
 * @param array $items
 *   The items to return data for.
 */
function _drush_features_build_config(array $items) {
  /** @var \Drupal\features\FeaturesManagerInterface $manager */
  $manager = \Drupal::service('features.manager');
  $result = [];
  foreach ($items as $config_type => $item) {
    foreach ($item as $item_name => $title) {
      $result[] = $manager->getFullName($config_type, $item_name);
    }
  }
  return $result;
}

/**
 * Returns a listing of all known components, indexed by source.
 */
function _drush_features_component_list() {
  $result = [];
  /** @var \Drupal\features\FeaturesManagerInterface $manager */
  $manager = \Drupal::service('features.manager');
  $config = $manager->getConfigCollection();
  foreach ($config as $item_name => $item) {
    $result[$item->getType()][$item->getShortName()] = $item->getLabel();
  }
  return $result;
}

/**
 * Filters components by patterns.
 */
function _drush_features_component_filter($all_components, $patterns = [], $options = []) {
  $options += [
    'exported' => TRUE,
    'not exported' => TRUE,
    'provided by' => FALSE,
  ];
  $pool = [];
  // Maps exported components to feature modules.
  $components_map = _drush_features_get_component_map();
  // First filter on exported state.
  foreach ($all_components as $source => $components) {
    foreach ($components as $name => $title) {
      $exported = count($components_map[$source][$name]) > 0;
      if ($exported) {
        if ($options['exported']) {
          $pool[$source][$name] = $title;
        }
      }
      else {
        if ($options['not exported']) {
          $pool[$source][$name] = $title;
        }
      }
    }
  }

  $state_string = '';

  if (!$options['exported']) {
    $state_string = 'unexported';
  }
  elseif (!$options['not exported']) {
    $state_string = 'exported';
  }

  $selected = [];
  foreach ($patterns as $pattern) {
    // Rewrite * to %. Let users use both as wildcard.
    $pattern = strtr($pattern, ['*' => '%']);
    $sources = [];
    list($source_pattern, $component_pattern) = explode(':', $pattern, 2);
    // If source is empty, use a pattern.
    if ($source_pattern == '') {
      $source_pattern = '%';
    }
    if ($component_pattern == '') {
      $component_pattern = '%';
    }

    $preg_source_pattern = strtr(preg_quote($source_pattern, '/'), ['%' => '.*']);
    $preg_component_pattern = strtr(preg_quote($component_pattern, '/'), ['%' => '.*']);
    // If it isn't a pattern, but a simple string, we don't anchor the
    // pattern. This allows for abbreviating. Otherwise, we do, as this seems
    // more natural for patterns.
    if (strpos($source_pattern, '%') !== FALSE) {
      $preg_source_pattern = '^' . $preg_source_pattern . '$';
    }
    if (strpos($component_pattern, '%') !== FALSE) {
      $preg_component_pattern = '^' . $preg_component_pattern . '$';
    }
    $matches = [];

    // Find the sources.
    $all_sources = array_keys($pool);
    $matches = preg_grep('/' . $preg_source_pattern . '/', $all_sources);
    if (count($matches) > 0) {
      // If we have multiple matches and the source string wasn't a
      // pattern, check if one of the matches is equal to the pattern, and
      // use that, or error out.
      if (count($matches) > 1 and $preg_source_pattern[0] != '^') {
        if (in_array($source_pattern, $matches)) {
          $matches = [$source_pattern];
        }
        else {
          return drush_set_error('', dt('Ambiguous source "@source", matches @matches', [
            '@source' => $source_pattern,
            '@matches' => implode(', ', $matches),
          ]));
        }
      }
      // Loose the indexes preg_grep preserved.
      $sources = array_values($matches);
    }
    else {
      return drush_set_error('', dt('No @state sources match "@source"', ['@state' => $state_string, '@source' => $source_pattern]));
    }

    // Now find the components.
    foreach ($sources as $source) {
      // Find the components.
      $all_components = array_keys($pool[$source]);
      // See if there's any matches.
      $matches = preg_grep('/' . $preg_component_pattern . '/', $all_components);
      if (count($matches) > 0) {
        // If we have multiple matches and the components string wasn't a
        // pattern, check if one of the matches is equal to the pattern, and
        // use that, or error out.
        if (count($matches) > 1 and $preg_component_pattern[0] != '^') {
          if (in_array($component_pattern, $matches)) {
            $matches = [$component_pattern];
          }
          else {
            return drush_set_error('', dt('Ambiguous component "@component", matches @matches', [
              '@component' => $component_pattern,
              '@matches' => implode(', ', $matches),
            ]));
          }
        }
        if (!is_array($selected[$source])) {
          $selected[$source] = [];
        }
        $selected[$source] += array_intersect_key($pool[$source], array_flip($matches));
      }
      else {
        // No matches. If the source was a pattern, just carry on, else
        // error out. Allows for patterns like :*field*
        if ($preg_source_pattern[0] != '^') {
          return drush_set_error('', dt('No @state @source components match "@component"', [
            '@state' => $state_string,
            '@component' => $component_pattern,
            '@source' => $source,
          ]));
        }
      }
    }
  }

  // Lastly, provide feature module information on the selected components, if
  // requested.
  $provided_by = [];
  if ($options['provided by'] && $options['exported']) {
    foreach ($selected as $source => $components) {
      foreach ($components as $name => $title) {
        $exported = count($components_map[$source][$name]) > 0;
        if ($exported) {
          $provided_by[$source . ':' . $name] = implode(', ', $components_map[$source][$name]);
        }
      }
    }
  }

  return [
    'components' => $selected,
    'sources' => $provided_by,
  ];
}

/**
 * Provides a component to feature map (port of features_get_component_map).
 */
function _drush_features_get_component_map() {
  $result = [];
  /** @var \Drupal\features\FeaturesManagerInterface $manager */
  $manager = \Drupal::service('features.manager');
  // Recalc full config list without running assignments.
  $config = $manager->getConfigCollection();
  $packages = $manager->getPackages();

  foreach ($config as $item_name => $item) {
    $type = $item->getType();
    $short_name = $item->getShortName();
    $name = $item->getName();
    if (!isset($result[$type][$short_name])) {
      $result[$type][$short_name] = [];
    }
    if (!empty($item->getPackage())) {
      $package = $packages[$item->getPackage()];
      $result[$type][$short_name][] = $package->getMachineName();
    }
  }

  return $result;
}

/**
 * Prints a list of filtered components.
 */
function _drush_features_component_print($filtered_components) {
  $rows = [[dt('Available sources')]];
  foreach ($filtered_components['components'] as $source => $components) {
    foreach ($components as $name => $value) {
      $row = [$source . ':' . $name];
      if (isset($filtered_components['sources'][$source . ':' . $name])) {
        $row[] = dt('Provided by') . ': ' . $filtered_components['sources'][$source . ':' . $name];
      }
      $rows[] = $row;
    }
  }

  drush_print_table($rows, TRUE);
}
