<?php

/**
 * @file
 * Enables modules and site configuration for a social site installation.
 */

use Drupal\search_api\Entity\Index;
use Drupal\social\Installer\Form\ModuleConfigureForm;

/**
 * Implements hook_install_tasks().
 */
function social_install_tasks(&$install_state) {
  $tasks = [];

  // If the user has selected that demo content should be installed then we add
  // this as an extra install step.
  if (\Drupal::state()->get('social_install_demo_content', 0) === 1) {
    $tasks['social_install_demo_content'] = [
      'display_name' => t('Install demo content'),
      'display' => TRUE,
      'type' => 'batch',
    ];
  }

  return $tasks;
}

/**
 * Implements hook_install_tasks_alter().
 *
 * Unfortunately we have to alter the verify requirements.
 * This is because of https://www.drupal.org/node/1253774. The dependencies of
 * dependencies are not tested. So adding requirements to our install profile
 * hook_requirements will not work :(. Also take a look at install.inc function
 * drupal_check_profile() it just checks for all the dependencies of our
 * install profile from the info file. And no actually hook_requirements in
 * there.
 */
function social_install_tasks_alter(&$tasks, $install_state) {
  // Override the core install_verify_requirements task function.
  $tasks['install_verify_requirements']['function'] = 'social_verify_custom_requirements';

  // Allow the user to select optional modules and have Drupal install those for
  // us. To make this work we have to position our optional form right before
  // install_profile_modules.
  $task_keys = array_keys($tasks);
  $insert_before = array_search('install_profile_modules', $task_keys, TRUE);
  $tasks = array_slice($tasks, 0, $insert_before - 1, TRUE) +
    [
      'social_module_configure_form' => [
        'display_name' => t('Select optional modules'),
        'type' => 'form',
        'function' => ModuleConfigureForm::class,
      ],
    ] +
    array_slice($tasks, $insert_before - 1, NULL, TRUE);
}

/**
 * Callback for install_verify_requirements, so that we meet custom requirement.
 *
 * @param array $install_state
 *   The current install state.
 *
 * @return array
 *   All the requirements we need to meet.
 */
function social_verify_custom_requirements(array &$install_state) {
  // Copy pasted from install_verify_requirements().
  // @todo when composer hits remove this.
  // Check the installation requirements for Drupal and this profile.
  $requirements = install_check_requirements($install_state);

  // Verify existence of all required modules.
  $requirements += drupal_verify_profile($install_state);

  // Added a custom check for users to see if the Address libraries are
  // downloaded.
  if (!class_exists('\CommerceGuys\Addressing\Address')) {
    $requirements['addressing_library'] = [
      'title' => t('Address module requirements)'),
      'value' => t('Not installed'),
      'description' => t('The Address module requires the commerceguys/addressing library. <a href=":link" target="_blank">For more information check our readme</a>', [':link' => 'https://www.drupal.org/docs/8/distributions/open-social/installing-and-updating']),
      'severity' => REQUIREMENT_ERROR,
    ];
  }

  if (!class_exists('\Facebook\Facebook')) {
    $requirements['social_auth_facebook'] = [
      'title' => t('Social Auth Facebook module requirements'),
      'value' => t('Not installed'),
      'description' => t('Social Auth Facebook requires Facebook PHP Library. Make sure the library is installed via Composer.'),
      'severity' => REQUIREMENT_ERROR,
    ];
  }

  if (!class_exists('\Google_Client')) {
    $requirements['social_auth_google'] = [
      'title' => t('Social Auth Google module requirements'),
      'value' => t('Not installed'),
      'description' => t('Social Auth Google requires Google_Client PHP Library. Make sure the library is installed via Composer.'),
      'severity' => REQUIREMENT_ERROR,
    ];
  }

  if (!class_exists('\LinkedIn\Client')) {
    $requirements['social_auth_linkedin'] = [
      'title' => t('Social Auth LinkedIn module requirements'),
      'value' => t('Not installed'),
      'description' => t('Social Auth LinkedIn requires LinkedIn PHP Library. Make sure the library is installed via Composer.'),
      'severity' => REQUIREMENT_ERROR,
    ];
  }

  if (!class_exists('\Abraham\TwitterOAuth\TwitterOAuth')) {
    $requirements['social_auth_twitter'] = [
      'title' => t('Social Auth Twitter module requirements'),
      'value' => t('Not installed'),
      'description' => t('Social Auth Twitter requires TwitterOAuth PHP Library. Make sure the library is installed via Composer.'),
      'severity' => REQUIREMENT_ERROR,
    ];
  }

  return install_display_requirements($install_state, $requirements);
}

/**
 * Uses the Social Demo module to install demo content.
 *
 * Will enable the Social Demo module, install the content and then disable the
 * Social Demo module again because it's only a helper to create the content.
 *
 * @param array $install_state
 *   The install state.
 *
 * @return array
 *   Batch settings.
 */
function social_install_demo_content(array &$install_state) {
  // Clear all status messages generated by modules installed in previous steps.
  drupal_get_messages('status', TRUE);

  // There is no content at this point.
  node_access_needs_rebuild(FALSE);

  $batch = [];

  // Enable the social_demo module.
  $batch['operations'][] = [
    '_social_install_module_batch',
    [['social_demo'], 'social_demo'],
  ];

  // Generate demo content.
  $demo_content_types = [
    'file' => t('files'),
    'user' => t('users'),
    'group' => t('groups'),
    'topic' => t('topics'),
    'event' => t('events'),
    'event_enrollment' => t('event enrollments'),
    'post' => t('posts'),
    'comment' => t('comments'),
    'like' => t('likes'),
    // @todo Add 'event_type' if module is enabled.
  ];
  foreach ($demo_content_types as $demo_type => $demo_description) {
    $batch['operations'][] = [
      '_social_add_demo_batch',
      [$demo_type, $demo_description],
    ];
  }

  // Uninstall social_demo.
  $batch['operations'][] = [
    '_social_uninstall_module_batch',
    [['social_demo'], 'social_demo'],
  ];

  $batch['operations'][] = [
    '_social_index_demo_content',
  ];

  return $batch;
}

/**
 * Implements callback_batch_operation().
 *
 * Performs batch installation of modules.
 */
function _social_install_module_batch($module, $module_name, &$context) {
  set_time_limit(0);
  \Drupal::service('module_installer')->install($module);
  $context['results'][] = $module;
  $context['message'] = t('Install %module_name module.', ['%module_name' => $module_name]);
}

/**
 * Implements callback_batch_operation().
 *
 * Performs batch uninstallation of modules.
 */
function _social_uninstall_module_batch($module, $module_name, &$context) {
  set_time_limit(0);
  \Drupal::service('module_installer')->uninstall($module);
  $context['results'][] = $module;
  $context['message'] = t('Uninstalled %module_name module.', ['%module_name' => $module_name]);
}

/**
 * Implements callback_batch_operation().
 *
 * Performs batch demo content generation.
 */
function _social_add_demo_batch($demo_type, $demo_description, &$context) {
  set_time_limit(0);

  $num_created = 0;

  $content_types = [$demo_type];
  $manager = \Drupal::service('plugin.manager.demo_content');
  $plugins = $manager->createInstances($content_types);

  /** @var \Drupal\social_demo\DemoContentInterface $plugin */
  foreach ($plugins as $plugin) {
    $plugin->createContent();
    $num_created = $plugin->count();
  }

  $context['results'][] = $demo_type;
  $context['message'] = t('Generated %num %demo_description.', ['%num' => $num_created, '%demo_description' => $demo_description]);
}

/**
 * Implements callback_batch_operation().
 *
 * Performs a Search API re-indexing now the demo content is present.
 */
function _social_index_demo_content(&$context) {
  $indexes = Index::loadMultiple();
  /** @var \Drupal\search_api\Entity\Index $index */
  foreach ($indexes as $index) {
    $index->reindex();
  }

  $context['results'][] = 'index_search';
  $context['message'] = t('Re-indexed search to include demo content.');
}
