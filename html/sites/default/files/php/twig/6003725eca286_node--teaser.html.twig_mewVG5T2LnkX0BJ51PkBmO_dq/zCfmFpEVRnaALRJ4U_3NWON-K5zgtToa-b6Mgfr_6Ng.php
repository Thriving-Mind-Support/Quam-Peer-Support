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

/* node--teaser.html.twig */
class __TwigTemplate_984bda117a2c628eef0ee73f419902fcf0e1a927e8094c04bbe685885e52bd0a extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'card_teaser_type' => [$this, 'block_card_teaser_type'],
            'card_image' => [$this, 'block_card_image'],
            'card_title' => [$this, 'block_card_title'],
            'card_body' => [$this, 'block_card_body'],
            'card_actionbar' => [$this, 'block_card_actionbar'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 68
        echo "
";
        // line 69
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("socialbase/teaser"), "html", null, true);
        echo "
";
        // line 70
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("socialbase/page-node"), "html", null, true);
        echo "

";
        // line 73
        $context["classes"] = [0 => "teaser", 1 => ("teaser-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($this->getAttribute(        // line 75
($context["node"] ?? null), "bundle", [])))), 2 => (((        // line 76
($context["view_mode"] ?? null) == "teaser")) ? ("card") : ("")), 3 => (((        // line 77
($context["view_mode"] ?? null) == "activity")) ? ("teaser--stream") : ("")), 4 => (((        // line 78
($context["view_mode"] ?? null) == "activity_comment")) ? ("teaser--stream") : ("")), 5 => (($this->getAttribute(        // line 79
($context["node"] ?? null), "isPromoted", [], "method")) ? ("promoted") : ("")), 6 => (($this->getAttribute(        // line 80
($context["node"] ?? null), "isSticky", [], "method")) ? ("sticky") : ("")), 7 => (( !$this->getAttribute(        // line 81
($context["node"] ?? null), "isPublished", [], "method")) ? ("teaser--unpublished") : ("")), 8 => ((        // line 82
($context["no_image"] ?? null)) ? ("no-image") : (""))];
        // line 85
        echo "
<div";
        // line 86
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
        echo ">
  ";
        // line 87
        if (($context["status_label"] ?? null)) {
            // line 88
            echo "    <div class=\"node--unpublished__label\">
      ";
            // line 89
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["status_label"] ?? null)), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 92
        echo "
  <div class='teaser__image' aria-hidden=\"true\">

    ";
        // line 95
        if (((($context["view_mode"] ?? null) == "teaser") || ($context["no_image"] ?? null))) {
            // line 96
            echo "      ";
            $this->displayBlock('card_teaser_type', $context, $blocks);
            // line 106
            echo "    ";
        }
        // line 107
        echo "
    ";
        // line 108
        $this->displayBlock('card_image', $context, $blocks);
        // line 111
        echo "
  </div>

  <div class='teaser__body'>
    <div class=\"teaser__content\">

      ";
        // line 117
        $this->displayBlock('card_title', $context, $blocks);
        // line 125
        $this->displayBlock('card_body', $context, $blocks);
        // line 158
        echo "    </div>

    <div class=\"card__actionbar\">
      ";
        // line 161
        $this->displayBlock('card_actionbar', $context, $blocks);
        // line 203
        echo "    </div>

  </div>

</div>

";
        // line 209
        if (((($context["view_mode"] ?? null) == "activity") && $this->getAttribute(($context["content"] ?? null), "field_book_comments", []))) {
            // line 210
            echo "  ";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_book_comments", [])), "html", null, true);
            echo "
";
        }
    }

    // line 96
    public function block_card_teaser_type($context, array $blocks = [])
    {
        // line 97
        echo "        <a href=\"";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null)), "html", null, true);
        echo "\" title=\"";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_capitalize_string_filter($this->env, \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["node"] ?? null), "bundle", [])))), "html", null, true);
        echo ": &nbsp;";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_trim_filter(strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed(($context["label"] ?? null))))), "html", null, true);
        echo "\">
          <div class=\"teaser__teaser-type\">
            <svg class=\"teaser__teaser-type-icon\">
              <title>";
        // line 100
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_capitalize_string_filter($this->env, \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["node"] ?? null), "bundle", [])))), "html", null, true);
        echo ": &nbsp;";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_trim_filter(strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed(($context["label"] ?? null))))), "html", null, true);
        echo "</title>
              <use xlink:href=\"#icon-";
        // line 101
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["node"] ?? null), "bundle", []))), "html", null, true);
        echo "\"></use>
            </svg>
          </div>
        </a>
      ";
    }

    // line 108
    public function block_card_image($context, array $blocks = [])
    {
        // line 109
        echo "      ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["node_image"] ?? null)), "html", null, true);
        echo "
    ";
    }

    // line 117
    public function block_card_title($context, array $blocks = [])
    {
        // line 118
        echo "        ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null)), "html", null, true);
        echo "
          <h4";
        // line 119
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_attributes"] ?? null)), "html", null, true);
        echo " class=\"teaser__title\">
            <a href=\"";
        // line 120
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null)), "html", null, true);
        echo "\" rel=\"bookmark\">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null)), "html", null, true);
        echo "</a>
          </h4>
        ";
        // line 122
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null)), "html", null, true);
    }

    // line 125
    public function block_card_body($context, array $blocks = [])
    {
        // line 126
        echo "
        ";
        // line 127
        if (($context["display_submitted"] ?? null)) {
            // line 128
            echo "          ";
            $this->loadTemplate("node--teaser.html.twig", "node--teaser.html.twig", 128, "1533833866")->display($context);
            // line 137
            echo "        ";
        }
        // line 138
        echo "
        ";
        // line 139
        if (($context["topic_type"] ?? null)) {
            // line 140
            echo "          ";
            $this->loadTemplate("node--teaser.html.twig", "node--teaser.html.twig", 140, "390555566")->display($context);
            // line 144
            echo "        ";
        }
        // line 145
        echo "
        ";
        // line 146
        if ($this->getAttribute(($context["content"] ?? null), "group_name", [])) {
            // line 147
            echo "          ";
            $this->loadTemplate("node--teaser.html.twig", "node--teaser.html.twig", 147, "2024015487")->display($context);
            // line 151
            echo "        ";
        }
        // line 152
        echo "
        ";
        // line 153
        $this->loadTemplate("node--teaser.html.twig", "node--teaser.html.twig", 153, "1540997886")->display($context);
        // line 156
        echo "
      ";
    }

    // line 161
    public function block_card_actionbar($context, array $blocks = [])
    {
        // line 162
        echo "
        ";
        // line 163
        if ((($context["visibility_icon"] ?? null) && ($context["visibility_label"] ?? null))) {
            // line 164
            echo "          <div class=\"badge teaser__badge\"
               title=\"";
            // line 165
            echo t("The visibility of this content is set to @visibility_label", array("@visibility_label" => ($context["visibility_label"] ?? null), ));
            echo "\">
            <span class=\"badge__container\">
                <svg class=\"badge__icon\">
                  <use xlink:href=\"#icon-";
            // line 168
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["visibility_icon"] ?? null)), "html", null, true);
            echo "\"></use>
                </svg>
                <span class=\"badge__label text-gray\">";
            // line 170
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_capitalize_string_filter($this->env, $this->sandbox->ensureToStringAllowed(($context["visibility_label"] ?? null))), "html", null, true);
            echo "</span>
            </span>
          </div>
        ";
        }
        // line 174
        echo "

        ";
        // line 176
        if ( !twig_test_empty(($context["likes_count"] ?? null))) {
            // line 177
            echo "          <div class=\"badge teaser__badge\" title=\"";
            echo t("Total amount of likes", array());
            echo "\">
            <span class=\"badge__container\">
              <svg class=\"badge__icon\">
                <use xlink:href=\"#icon-like\"></use>
              </svg>
              <span class=\"badge__label text-gray\">
                ";
            // line 183
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["likes_count"] ?? null)), "html", null, true);
            echo "
              </span>
            </span>
          </div>
        ";
        }
        // line 188
        echo "
        ";
        // line 189
        if ( !twig_test_empty(($context["comment_count"] ?? null))) {
            // line 190
            echo "          <a href=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null)), "html", null, true);
            echo "#section-comments\" class=\"badge badge--pill teaser__badge\">
            <span class=\"badge__container\">
              <svg class=\"badge__icon\">
                <use xlink:href=\"#icon-comment\"></use>
              </svg>
              <span class=\"badge__label text-gray\">";
            // line 195
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["comment_count"] ?? null)), "html", null, true);
            echo "</span>
            </span>
          </a>
        ";
        }
        // line 199
        echo "
        ";
        // line 200
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "links", [])), "html", null, true);
        echo "

      ";
    }

    public function getTemplateName()
    {
        return "node--teaser.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  317 => 200,  314 => 199,  307 => 195,  298 => 190,  296 => 189,  293 => 188,  285 => 183,  275 => 177,  273 => 176,  269 => 174,  262 => 170,  257 => 168,  251 => 165,  248 => 164,  246 => 163,  243 => 162,  240 => 161,  235 => 156,  233 => 153,  230 => 152,  227 => 151,  224 => 147,  222 => 146,  219 => 145,  216 => 144,  213 => 140,  211 => 139,  208 => 138,  205 => 137,  202 => 128,  200 => 127,  197 => 126,  194 => 125,  190 => 122,  183 => 120,  179 => 119,  174 => 118,  171 => 117,  164 => 109,  161 => 108,  152 => 101,  146 => 100,  135 => 97,  132 => 96,  124 => 210,  122 => 209,  114 => 203,  112 => 161,  107 => 158,  105 => 125,  103 => 117,  95 => 111,  93 => 108,  90 => 107,  87 => 106,  84 => 96,  82 => 95,  77 => 92,  71 => 89,  68 => 88,  66 => 87,  62 => 86,  59 => 85,  57 => 82,  56 => 81,  55 => 80,  54 => 79,  53 => 78,  52 => 77,  51 => 76,  50 => 75,  49 => 73,  44 => 70,  40 => 69,  37 => 68,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "node--teaser.html.twig", "profiles/contrib/social/themes/socialbase/templates/node/node--teaser.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = ["set" => 73, "if" => 87, "block" => 96, "embed" => 128, "trans" => 165];
        static $filters = ["escape" => 69, "clean_class" => 75, "capitalize" => 97, "trim" => 97, "striptags" => 97, "render" => 97];
        static $functions = ["attach_library" => 69];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'block', 'embed', 'trans'],
                ['escape', 'clean_class', 'capitalize', 'trim', 'striptags', 'render'],
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


/* node--teaser.html.twig */
class __TwigTemplate_984bda117a2c628eef0ee73f419902fcf0e1a927e8094c04bbe685885e52bd0a___1533833866 extends \Twig\Template
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
        // line 128
        return "node--teaser__field.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("node--teaser__field.html.twig", "node--teaser.html.twig", 128);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 129
    public function block_field_icon($context, array $blocks = [])
    {
        echo "account_circle";
    }

    // line 130
    public function block_field_value($context, array $blocks = [])
    {
        // line 131
        echo "              <div class=\"teaser__published\">
                <div class=\"teaser__published-date\"> ";
        // line 132
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["date"] ?? null)), "html", null, true);
        echo " &bullet; </div>
                <div class=\"teaser__published-author\"> ";
        // line 133
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["author_name"] ?? null)), "html", null, true);
        echo " </div>
              </div>";
    }

    public function getTemplateName()
    {
        return "node--teaser.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  425 => 133,  421 => 132,  418 => 131,  415 => 130,  409 => 129,  399 => 128,  317 => 200,  314 => 199,  307 => 195,  298 => 190,  296 => 189,  293 => 188,  285 => 183,  275 => 177,  273 => 176,  269 => 174,  262 => 170,  257 => 168,  251 => 165,  248 => 164,  246 => 163,  243 => 162,  240 => 161,  235 => 156,  233 => 153,  230 => 152,  227 => 151,  224 => 147,  222 => 146,  219 => 145,  216 => 144,  213 => 140,  211 => 139,  208 => 138,  205 => 137,  202 => 128,  200 => 127,  197 => 126,  194 => 125,  190 => 122,  183 => 120,  179 => 119,  174 => 118,  171 => 117,  164 => 109,  161 => 108,  152 => 101,  146 => 100,  135 => 97,  132 => 96,  124 => 210,  122 => 209,  114 => 203,  112 => 161,  107 => 158,  105 => 125,  103 => 117,  95 => 111,  93 => 108,  90 => 107,  87 => 106,  84 => 96,  82 => 95,  77 => 92,  71 => 89,  68 => 88,  66 => 87,  62 => 86,  59 => 85,  57 => 82,  56 => 81,  55 => 80,  54 => 79,  53 => 78,  52 => 77,  51 => 76,  50 => 75,  49 => 73,  44 => 70,  40 => 69,  37 => 68,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "node--teaser.html.twig", "profiles/contrib/social/themes/socialbase/templates/node/node--teaser.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = [];
        static $filters = ["escape" => 132];
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


/* node--teaser.html.twig */
class __TwigTemplate_984bda117a2c628eef0ee73f419902fcf0e1a927e8094c04bbe685885e52bd0a___390555566 extends \Twig\Template
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
        // line 140
        return "node--teaser__field.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("node--teaser__field.html.twig", "node--teaser.html.twig", 140);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 141
    public function block_field_icon($context, array $blocks = [])
    {
        echo "label";
    }

    // line 142
    public function block_field_value($context, array $blocks = [])
    {
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["topic_type"] ?? null)), "html", null, true);
    }

    public function getTemplateName()
    {
        return "node--teaser.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  522 => 142,  516 => 141,  506 => 140,  425 => 133,  421 => 132,  418 => 131,  415 => 130,  409 => 129,  399 => 128,  317 => 200,  314 => 199,  307 => 195,  298 => 190,  296 => 189,  293 => 188,  285 => 183,  275 => 177,  273 => 176,  269 => 174,  262 => 170,  257 => 168,  251 => 165,  248 => 164,  246 => 163,  243 => 162,  240 => 161,  235 => 156,  233 => 153,  230 => 152,  227 => 151,  224 => 147,  222 => 146,  219 => 145,  216 => 144,  213 => 140,  211 => 139,  208 => 138,  205 => 137,  202 => 128,  200 => 127,  197 => 126,  194 => 125,  190 => 122,  183 => 120,  179 => 119,  174 => 118,  171 => 117,  164 => 109,  161 => 108,  152 => 101,  146 => 100,  135 => 97,  132 => 96,  124 => 210,  122 => 209,  114 => 203,  112 => 161,  107 => 158,  105 => 125,  103 => 117,  95 => 111,  93 => 108,  90 => 107,  87 => 106,  84 => 96,  82 => 95,  77 => 92,  71 => 89,  68 => 88,  66 => 87,  62 => 86,  59 => 85,  57 => 82,  56 => 81,  55 => 80,  54 => 79,  53 => 78,  52 => 77,  51 => 76,  50 => 75,  49 => 73,  44 => 70,  40 => 69,  37 => 68,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "node--teaser.html.twig", "profiles/contrib/social/themes/socialbase/templates/node/node--teaser.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = [];
        static $filters = ["escape" => 142];
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


/* node--teaser.html.twig */
class __TwigTemplate_984bda117a2c628eef0ee73f419902fcf0e1a927e8094c04bbe685885e52bd0a___2024015487 extends \Twig\Template
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
        // line 147
        return "node--teaser__field.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("node--teaser__field.html.twig", "node--teaser.html.twig", 147);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 148
    public function block_field_icon($context, array $blocks = [])
    {
        echo "group";
    }

    // line 149
    public function block_field_value($context, array $blocks = [])
    {
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "group_name", [])), "html", null, true);
    }

    public function getTemplateName()
    {
        return "node--teaser.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  619 => 149,  613 => 148,  603 => 147,  522 => 142,  516 => 141,  506 => 140,  425 => 133,  421 => 132,  418 => 131,  415 => 130,  409 => 129,  399 => 128,  317 => 200,  314 => 199,  307 => 195,  298 => 190,  296 => 189,  293 => 188,  285 => 183,  275 => 177,  273 => 176,  269 => 174,  262 => 170,  257 => 168,  251 => 165,  248 => 164,  246 => 163,  243 => 162,  240 => 161,  235 => 156,  233 => 153,  230 => 152,  227 => 151,  224 => 147,  222 => 146,  219 => 145,  216 => 144,  213 => 140,  211 => 139,  208 => 138,  205 => 137,  202 => 128,  200 => 127,  197 => 126,  194 => 125,  190 => 122,  183 => 120,  179 => 119,  174 => 118,  171 => 117,  164 => 109,  161 => 108,  152 => 101,  146 => 100,  135 => 97,  132 => 96,  124 => 210,  122 => 209,  114 => 203,  112 => 161,  107 => 158,  105 => 125,  103 => 117,  95 => 111,  93 => 108,  90 => 107,  87 => 106,  84 => 96,  82 => 95,  77 => 92,  71 => 89,  68 => 88,  66 => 87,  62 => 86,  59 => 85,  57 => 82,  56 => 81,  55 => 80,  54 => 79,  53 => 78,  52 => 77,  51 => 76,  50 => 75,  49 => 73,  44 => 70,  40 => 69,  37 => 68,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "node--teaser.html.twig", "profiles/contrib/social/themes/socialbase/templates/node/node--teaser.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = [];
        static $filters = ["escape" => 149];
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


/* node--teaser.html.twig */
class __TwigTemplate_984bda117a2c628eef0ee73f419902fcf0e1a927e8094c04bbe685885e52bd0a___1540997886 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'field_body' => [$this, 'block_field_body'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doGetParent(array $context)
    {
        // line 153
        return "node--teaser__body.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("node--teaser__body.html.twig", "node--teaser.html.twig", 153);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 154
    public function block_field_body($context, array $blocks = [])
    {
        echo " ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "body", [])), "html", null, true);
        echo " ";
    }

    public function getTemplateName()
    {
        return "node--teaser.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  709 => 154,  699 => 153,  619 => 149,  613 => 148,  603 => 147,  522 => 142,  516 => 141,  506 => 140,  425 => 133,  421 => 132,  418 => 131,  415 => 130,  409 => 129,  399 => 128,  317 => 200,  314 => 199,  307 => 195,  298 => 190,  296 => 189,  293 => 188,  285 => 183,  275 => 177,  273 => 176,  269 => 174,  262 => 170,  257 => 168,  251 => 165,  248 => 164,  246 => 163,  243 => 162,  240 => 161,  235 => 156,  233 => 153,  230 => 152,  227 => 151,  224 => 147,  222 => 146,  219 => 145,  216 => 144,  213 => 140,  211 => 139,  208 => 138,  205 => 137,  202 => 128,  200 => 127,  197 => 126,  194 => 125,  190 => 122,  183 => 120,  179 => 119,  174 => 118,  171 => 117,  164 => 109,  161 => 108,  152 => 101,  146 => 100,  135 => 97,  132 => 96,  124 => 210,  122 => 209,  114 => 203,  112 => 161,  107 => 158,  105 => 125,  103 => 117,  95 => 111,  93 => 108,  90 => 107,  87 => 106,  84 => 96,  82 => 95,  77 => 92,  71 => 89,  68 => 88,  66 => 87,  62 => 86,  59 => 85,  57 => 82,  56 => 81,  55 => 80,  54 => 79,  53 => 78,  52 => 77,  51 => 76,  50 => 75,  49 => 73,  44 => 70,  40 => 69,  37 => 68,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "node--teaser.html.twig", "profiles/contrib/social/themes/socialbase/templates/node/node--teaser.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = [];
        static $filters = ["escape" => 154];
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
