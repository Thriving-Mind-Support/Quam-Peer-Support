<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* profiles/contrib/social/themes/socialbase/templates/file/image-widget.html.twig */
class __TwigTemplate_8c9db9c38c7cb8f84e91d2d865eacba508fa2d4dcf4df34d1453861251284370 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 15
        echo "
";
        // line 16
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("socialbase/image-widget"), "html", null, true);
        echo "
";
        // line 17
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("image_widget_crop/cropper"), "html", null, true);
        echo "
";
        // line 18
        $context["in_post"] = (is_string($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4 = $this->getAttribute($this->getAttribute(($context["data"] ?? null), "upload", []), "#id", [], "array")) && is_string($__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144 = "edit-field-post-image-0-upload") && ('' === $__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144 || 0 === strpos($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4, $__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144)));
        // line 19
        echo "
";
        // line 20
        if ($this->getAttribute(($context["data"] ?? null), "preview", [])) {
            // line 21
            echo "  <div";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => "image-widget"], "method"), "removeClass", [0 => "clearfix"], "method")), "html", null, true);
            echo ">
    <div class=\"preview\">
      ";
            // line 23
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["data"] ?? null), "preview", [])), "html", null, true);
            echo "
    </div>
    <div class=\"data image-widget-data\">

      ";
            // line 27
            if (($context["in_post"] ?? null)) {
                // line 28
                echo "        ";
                // line 29
                echo "        ";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->withoutFilter($this->sandbox->ensureToStringAllowed(($context["data"] ?? null)), "preview", "image_crop", ("file_" . $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute(($context["data"] ?? null), "fids", []), "#value", [], "array"), 0, [], "array"))), "remove_button"), "html", null, true);
                echo "
      ";
            } else {
                // line 31
                echo "        ";
                // line 32
                echo "        ";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->withoutFilter($this->sandbox->ensureToStringAllowed(($context["data"] ?? null)), "preview", "image_crop"), "html", null, true);
                echo "
      ";
            }
            // line 34
            echo "
    </div>
  </div>

  ";
            // line 38
            if (($context["in_post"] ?? null)) {
                // line 39
                echo "    ";
                // line 40
                echo "    <div class=\"hidden\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["data"] ?? null), "remove_button", [])), "html", null, true);
                echo "</div>
    <button type=\"button\" id=\"post-photo-remove\" class=\"btn--post-remove-image\">
      <svg class=\"btn-icon\">
        <title>";
                // line 43
                echo t("Remove image", array());
                echo "</title>
        <use id=\"btnicon\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#icon-close\"></use>
      </svg>
    </button>

  ";
            } else {
                // line 49
                echo "
    ";
                // line 50
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["data"] ?? null), "image_crop", [])), "html", null, true);
                echo "

  ";
            }
            // line 53
            echo "
";
        } else {
            // line 55
            echo "
  ";
            // line 56
            if (($context["in_post"] ?? null)) {
                // line 57
                echo "
    ";
                // line 59
                echo "    <div";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null), 1 => "hidden"], "method")), "html", null, true);
                echo ">
      ";
                // line 60
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["data"] ?? null)), "html", null, true);
                echo "
    </div>
    <button type=\"button\" id=\"post-photo-add\" class=\"btn btn-default\">
      <svg class=\"btn-icon\" aria-hidden=\"true\">
        <use id=\"btnicon\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#icon-plus\"></use>
      </svg>
      <span>
        ";
                // line 67
                echo t("Add image", array());
                // line 68
                echo "      </span>
    </button>

  ";
            } else {
                // line 72
                echo "
    <div";
                // line 73
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
                echo ">
      ";
                // line 74
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["data"] ?? null)), "html", null, true);
                echo "
    </div>

  ";
            }
            // line 78
            echo "
";
        }
    }

    public function getTemplateName()
    {
        return "profiles/contrib/social/themes/socialbase/templates/file/image-widget.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  165 => 78,  158 => 74,  154 => 73,  151 => 72,  145 => 68,  143 => 67,  133 => 60,  128 => 59,  125 => 57,  123 => 56,  120 => 55,  116 => 53,  110 => 50,  107 => 49,  98 => 43,  91 => 40,  89 => 39,  87 => 38,  81 => 34,  75 => 32,  73 => 31,  67 => 29,  65 => 28,  63 => 27,  56 => 23,  50 => 21,  48 => 20,  45 => 19,  43 => 18,  39 => 17,  35 => 16,  32 => 15,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/social/themes/socialbase/templates/file/image-widget.html.twig", "C:\\wamp64\\www\\social\\social\\html\\profiles\\contrib\\social\\themes\\socialbase\\templates\\file\\image-widget.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = ["set" => 18, "if" => 20, "trans" => 43];
        static $filters = ["escape" => 16, "without" => 29];
        static $functions = ["attach_library" => 16];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'trans'],
                ['escape', 'without'],
                ['attach_library']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
