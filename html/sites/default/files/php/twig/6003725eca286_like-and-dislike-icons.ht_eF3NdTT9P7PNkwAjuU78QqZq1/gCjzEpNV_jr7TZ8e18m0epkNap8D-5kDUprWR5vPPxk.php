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

/* profiles/contrib/social/themes/socialbase/templates/like/like-and-dislike-icons.html.twig */
class __TwigTemplate_5a1515728d91b00d9c00336e3ee9c049494f6bab2c672cadf321afa96fe26433 extends \Twig\Template
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
        // line 18
        echo "
<div class=\"vote-widget vote-widget--like-and-dislike\">
  <div class=\"vote__wrapper\">
    <div class=\"vote-like type-";
        // line 21
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["entity_type"] ?? null)), "html", null, true);
        echo "\" id=\"like-container-";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["entity_type"] ?? null)), "html", null, true);
        echo "-";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["entity_id"] ?? null)), "html", null, true);
        echo "\">
      <a ";
        // line 22
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["like_attributes"] ?? null)), "html", null, true);
        echo " >
        <svg class=\"icon-vote\">
          <use xlink:href=\"#icon-like\"></use>
        </svg>
      </a>
    </div>

    <div class=\"vote-dislike type-";
        // line 29
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["entity_type"] ?? null)), "html", null, true);
        echo "\" id=\"dislike-container-";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["entity_type"] ?? null)), "html", null, true);
        echo "-";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["entity_id"] ?? null)), "html", null, true);
        echo "\">
      <a ";
        // line 30
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["dislike_attributes"] ?? null)), "html", null, true);
        echo ">Dislike</a>
      <span class=\"count\">";
        // line 31
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["dislikes"] ?? null)), "html", null, true);
        echo "</span>
    </div>

    <div class=\"vote__count\">
      ";
        // line 35
        if (($context["logged_in"] ?? null)) {
            // line 36
            echo "      <a class=\"use-ajax\" data-dialog-options='{\"title\":\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["modal_title"] ?? null)), "html", null, true);
            echo "\",\"width\":\"auto\"}' data-dialog-type=\"modal\" href=\"/wholiked/";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["entity_type"] ?? null)), "html", null, true);
            echo "/";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["entity_id"] ?? null)), "html", null, true);
            echo "\">
        ";
            // line 37
            echo \Drupal::translation()->formatPlural(abs(($context["likes"] ?? null)), "@likes like", "@likes likes", array("@likes" => ($context["likes"] ?? null), "@likes" => ($context["likes"] ?? null), ));
            // line 38
            echo "      </a>
      ";
        } else {
            // line 40
            echo "        ";
            echo \Drupal::translation()->formatPlural(abs(($context["likes"] ?? null)), "@likes like", "@likes likes", array("@likes" => ($context["likes"] ?? null), "@likes" => ($context["likes"] ?? null), ));
            // line 41
            echo "      ";
        }
        // line 42
        echo "    </div>
  </div>
</div>
";
    }

    public function getTemplateName()
    {
        return "profiles/contrib/social/themes/socialbase/templates/like/like-and-dislike-icons.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  97 => 42,  94 => 41,  91 => 40,  87 => 38,  85 => 37,  76 => 36,  74 => 35,  67 => 31,  63 => 30,  55 => 29,  45 => 22,  37 => 21,  32 => 18,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/social/themes/socialbase/templates/like/like-and-dislike-icons.html.twig", "C:\\wamp64\\www\\social\\social\\html\\profiles\\contrib\\social\\themes\\socialbase\\templates\\like\\like-and-dislike-icons.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = ["if" => 35, "trans" => 37];
        static $filters = ["escape" => 21];
        static $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['if', 'trans'],
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
