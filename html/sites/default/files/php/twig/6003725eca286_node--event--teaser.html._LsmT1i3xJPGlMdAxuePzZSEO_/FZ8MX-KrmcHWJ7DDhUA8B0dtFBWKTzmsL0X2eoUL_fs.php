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

/* node--event--teaser.html.twig */
class __TwigTemplate_a29fa8fe0d023694c9d9ea18eac1cdb635098c5b1fd9f94746f1c0da78ad81e6 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'card_body' => [$this, 'block_card_body'],
            'card_actionbar' => [$this, 'block_card_actionbar'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "node--teaser.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("node--teaser.html.twig", "node--event--teaser.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_card_body($context, array $blocks = [])
    {
        // line 4
        echo "
  ";
        // line 5
        $this->loadTemplate("node--event--teaser.html.twig", "node--event--teaser.html.twig", 5, "23023117")->display($context);
        // line 9
        echo "
  ";
        // line 10
        if ( !twig_test_empty($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["content"] ?? null), "field_event_location", [])))) {
            // line 11
            echo "    ";
            $this->loadTemplate("node--event--teaser.html.twig", "node--event--teaser.html.twig", 11, "457144609")->display($context);
            // line 15
            echo "  ";
        }
        // line 16
        echo "
  ";
        // line 17
        if (($context["event_type"] ?? null)) {
            // line 18
            echo "    ";
            $this->loadTemplate("node--event--teaser.html.twig", "node--event--teaser.html.twig", 18, "1640740668")->display($context);
            // line 22
            echo "  ";
        }
        // line 23
        echo "
  ";
        // line 24
        if ($this->getAttribute(($context["content"] ?? null), "group_name", [])) {
            // line 25
            echo "    ";
            $this->loadTemplate("node--event--teaser.html.twig", "node--event--teaser.html.twig", 25, "1799674496")->display($context);
            // line 29
            echo "  ";
        }
        // line 30
        echo "
";
    }

    // line 33
    public function block_card_actionbar($context, array $blocks = [])
    {
        // line 34
        echo "
  ";
        // line 35
        if ((($context["visibility_icon"] ?? null) && ($context["visibility_label"] ?? null))) {
            // line 36
            echo "    <div class=\"badge teaser__badge\"
         title=\"";
            // line 37
            echo t("The visibility of this content is set to @visibility_label", array("@visibility_label" => ($context["visibility_label"] ?? null), ));
            echo " \">
      <span class=\"badge__container\">
        <svg class=\"badge__icon\">
          <use xlink:href=\"#icon-";
            // line 40
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["visibility_icon"] ?? null)), "html", null, true);
            echo "\"></use>
        </svg>
        <span class=\"badge__label text-gray\">";
            // line 42
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_capitalize_string_filter($this->env, $this->sandbox->ensureToStringAllowed(($context["visibility_label"] ?? null))), "html", null, true);
            echo "</span>
      </span>
    </div>
  ";
        }
        // line 46
        echo "
  ";
        // line 47
        if ( !twig_test_empty($this->getAttribute(($context["content"] ?? null), "enrollments_count", []))) {
            // line 48
            echo "    <div class=\"badge teaser__badge\" title=\"";
            echo t("Total amount of enrollments", array());
            echo "\">
      <span class=\"badge__container\">
        <svg class=\"badge__icon\">
          <use xlink:href=\"#icon-person\"></use>
        </svg>
        <span class=\"badge__label text-gray\">
          ";
            // line 54
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "enrollments_count", [])), "html", null, true);
            echo "
        </span>
      </span>
    </div>
  ";
        }
        // line 59
        echo "
  ";
        // line 60
        if ($this->getAttribute(($context["content"] ?? null), "ongoing", [])) {
            // line 61
            echo "    <span class=\"badge badge-primary teaser__badge\">
          ";
            // line 62
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "ongoing", [])), "html", null, true);
            echo "
        </span>
  ";
        }
        // line 65
        echo "  ";
        if ($this->getAttribute(($context["content"] ?? null), "enrolled", [])) {
            // line 66
            echo "    <span class=\"badge badge-default teaser__badge\">
      ";
            // line 67
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "enrolled", [])), "html", null, true);
            echo "
    </span>
  ";
        }
        // line 70
        echo "
  ";
        // line 71
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "links", [])), "html", null, true);
        echo "

";
    }

    public function getTemplateName()
    {
        return "node--event--teaser.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  169 => 71,  166 => 70,  160 => 67,  157 => 66,  154 => 65,  148 => 62,  145 => 61,  143 => 60,  140 => 59,  132 => 54,  122 => 48,  120 => 47,  117 => 46,  110 => 42,  105 => 40,  99 => 37,  96 => 36,  94 => 35,  91 => 34,  88 => 33,  83 => 30,  80 => 29,  77 => 25,  75 => 24,  72 => 23,  69 => 22,  66 => 18,  64 => 17,  61 => 16,  58 => 15,  55 => 11,  53 => 10,  50 => 9,  48 => 5,  45 => 4,  42 => 3,  32 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "node--event--teaser.html.twig", "profiles/contrib/social/themes/socialbase/templates/node/event/node--event--teaser.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = ["embed" => 5, "if" => 10, "trans" => 37];
        static $filters = ["render" => 10, "escape" => 37, "capitalize" => 42];
        static $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['embed', 'if', 'trans'],
                ['render', 'escape', 'capitalize'],
                []
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


/* node--event--teaser.html.twig */
class __TwigTemplate_a29fa8fe0d023694c9d9ea18eac1cdb635098c5b1fd9f94746f1c0da78ad81e6___23023117 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'field_icon' => [$this, 'block_field_icon'],
            'field_value' => [$this, 'block_field_value'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doGetParent(array $context)
    {
        // line 5
        return "node--teaser__field.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("node--teaser__field.html.twig", "node--event--teaser.html.twig", 5);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 6
    public function block_field_icon($context, array $blocks = [])
    {
        echo "event";
    }

    // line 7
    public function block_field_value($context, array $blocks = [])
    {
        echo " ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["event_date"] ?? null)), "html", null, true);
    }

    public function getTemplateName()
    {
        return "node--event--teaser.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  267 => 7,  261 => 6,  251 => 5,  169 => 71,  166 => 70,  160 => 67,  157 => 66,  154 => 65,  148 => 62,  145 => 61,  143 => 60,  140 => 59,  132 => 54,  122 => 48,  120 => 47,  117 => 46,  110 => 42,  105 => 40,  99 => 37,  96 => 36,  94 => 35,  91 => 34,  88 => 33,  83 => 30,  80 => 29,  77 => 25,  75 => 24,  72 => 23,  69 => 22,  66 => 18,  64 => 17,  61 => 16,  58 => 15,  55 => 11,  53 => 10,  50 => 9,  48 => 5,  45 => 4,  42 => 3,  32 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "node--event--teaser.html.twig", "profiles/contrib/social/themes/socialbase/templates/node/event/node--event--teaser.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = [];
        static $filters = ["escape" => 7];
        static $functions = [];

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                []
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


/* node--event--teaser.html.twig */
class __TwigTemplate_a29fa8fe0d023694c9d9ea18eac1cdb635098c5b1fd9f94746f1c0da78ad81e6___457144609 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'field_icon' => [$this, 'block_field_icon'],
            'field_value' => [$this, 'block_field_value'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doGetParent(array $context)
    {
        // line 11
        return "node--teaser__field.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("node--teaser__field.html.twig", "node--event--teaser.html.twig", 11);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 12
    public function block_field_icon($context, array $blocks = [])
    {
        echo "location";
    }

    // line 13
    public function block_field_value($context, array $blocks = [])
    {
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_event_location", [])), "html", null, true);
    }

    public function getTemplateName()
    {
        return "node--event--teaser.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  365 => 13,  359 => 12,  349 => 11,  267 => 7,  261 => 6,  251 => 5,  169 => 71,  166 => 70,  160 => 67,  157 => 66,  154 => 65,  148 => 62,  145 => 61,  143 => 60,  140 => 59,  132 => 54,  122 => 48,  120 => 47,  117 => 46,  110 => 42,  105 => 40,  99 => 37,  96 => 36,  94 => 35,  91 => 34,  88 => 33,  83 => 30,  80 => 29,  77 => 25,  75 => 24,  72 => 23,  69 => 22,  66 => 18,  64 => 17,  61 => 16,  58 => 15,  55 => 11,  53 => 10,  50 => 9,  48 => 5,  45 => 4,  42 => 3,  32 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "node--event--teaser.html.twig", "profiles/contrib/social/themes/socialbase/templates/node/event/node--event--teaser.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = [];
        static $filters = ["escape" => 13];
        static $functions = [];

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                []
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


/* node--event--teaser.html.twig */
class __TwigTemplate_a29fa8fe0d023694c9d9ea18eac1cdb635098c5b1fd9f94746f1c0da78ad81e6___1640740668 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'field_icon' => [$this, 'block_field_icon'],
            'field_value' => [$this, 'block_field_value'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doGetParent(array $context)
    {
        // line 18
        return "node--teaser__field.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("node--teaser__field.html.twig", "node--event--teaser.html.twig", 18);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 19
    public function block_field_icon($context, array $blocks = [])
    {
        echo "label";
    }

    // line 20
    public function block_field_value($context, array $blocks = [])
    {
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["event_type"] ?? null)), "html", null, true);
    }

    public function getTemplateName()
    {
        return "node--event--teaser.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  462 => 20,  456 => 19,  446 => 18,  365 => 13,  359 => 12,  349 => 11,  267 => 7,  261 => 6,  251 => 5,  169 => 71,  166 => 70,  160 => 67,  157 => 66,  154 => 65,  148 => 62,  145 => 61,  143 => 60,  140 => 59,  132 => 54,  122 => 48,  120 => 47,  117 => 46,  110 => 42,  105 => 40,  99 => 37,  96 => 36,  94 => 35,  91 => 34,  88 => 33,  83 => 30,  80 => 29,  77 => 25,  75 => 24,  72 => 23,  69 => 22,  66 => 18,  64 => 17,  61 => 16,  58 => 15,  55 => 11,  53 => 10,  50 => 9,  48 => 5,  45 => 4,  42 => 3,  32 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "node--event--teaser.html.twig", "profiles/contrib/social/themes/socialbase/templates/node/event/node--event--teaser.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = [];
        static $filters = ["escape" => 20];
        static $functions = [];

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                []
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


/* node--event--teaser.html.twig */
class __TwigTemplate_a29fa8fe0d023694c9d9ea18eac1cdb635098c5b1fd9f94746f1c0da78ad81e6___1799674496 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'field_icon' => [$this, 'block_field_icon'],
            'field_value' => [$this, 'block_field_value'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doGetParent(array $context)
    {
        // line 25
        return "node--teaser__field.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("node--teaser__field.html.twig", "node--event--teaser.html.twig", 25);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 26
    public function block_field_icon($context, array $blocks = [])
    {
        echo "group";
    }

    // line 27
    public function block_field_value($context, array $blocks = [])
    {
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "group_name", [])), "html", null, true);
    }

    public function getTemplateName()
    {
        return "node--event--teaser.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  559 => 27,  553 => 26,  543 => 25,  462 => 20,  456 => 19,  446 => 18,  365 => 13,  359 => 12,  349 => 11,  267 => 7,  261 => 6,  251 => 5,  169 => 71,  166 => 70,  160 => 67,  157 => 66,  154 => 65,  148 => 62,  145 => 61,  143 => 60,  140 => 59,  132 => 54,  122 => 48,  120 => 47,  117 => 46,  110 => 42,  105 => 40,  99 => 37,  96 => 36,  94 => 35,  91 => 34,  88 => 33,  83 => 30,  80 => 29,  77 => 25,  75 => 24,  72 => 23,  69 => 22,  66 => 18,  64 => 17,  61 => 16,  58 => 15,  55 => 11,  53 => 10,  50 => 9,  48 => 5,  45 => 4,  42 => 3,  32 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "node--event--teaser.html.twig", "profiles/contrib/social/themes/socialbase/templates/node/event/node--event--teaser.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = [];
        static $filters = ["escape" => 27];
        static $functions = [];

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                []
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
