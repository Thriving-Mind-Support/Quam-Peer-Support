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

/* profiles/contrib/social/themes/socialbase/templates/comment/links--comment.html.twig */
class __TwigTemplate_a527437eda42245cdcf3738a89c3fe4d7904144e50db10b80367f896b1c84321 extends \Twig\Template
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
        // line 35
        echo "
";
        // line 36
        if (($context["links"] ?? null)) {
            // line 37
            if (($context["heading"] ?? null)) {
                // line 38
                if ($this->getAttribute(($context["heading"] ?? null), "level", [])) {
                    // line 39
                    echo "<";
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["heading"] ?? null), "level", [])), "html", null, true);
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["heading"] ?? null), "attributes", [])), "html", null, true);
                    echo ">";
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["heading"] ?? null), "text", [])), "html", null, true);
                    echo "</";
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["heading"] ?? null), "level", [])), "html", null, true);
                    echo ">";
                } else {
                    // line 41
                    echo "<h2";
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["heading"] ?? null), "attributes", [])), "html", null, true);
                    echo ">";
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["heading"] ?? null), "text", [])), "html", null, true);
                    echo "</h2>";
                }
            }
            // line 45
            if ((($this->getAttribute(($context["links"] ?? null), "comment-edit", [], "array") || $this->getAttribute(($context["links"] ?? null), "comment-delete", [], "array")) || $this->getAttribute(($context["links"] ?? null), "report", []))) {
                // line 46
                echo "    <div class=\"comment__actions pull-right\">
      <button type=\"button\" data-toggle=\"dropdown\" aria-expanded=\"false\" aria-haspopup=\"true\" class=\"btn btn-icon-toggle dropdown-toggle\" aria-label=\"";
                // line 47
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("More options"));
                echo "\">
        <svg class=\"btn-icon icon-gray\">
          <use xlink:href=\"#icon-expand_more\"></use>
        </svg>
      </button>
      <ul";
                // line 52
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => "dropdown-menu"], "method")), "html", null, true);
                echo ">";
                // line 53
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(twig_reverse_filter($this->env, ($context["links"] ?? null)));
                foreach ($context['_seq'] as $context["key"] => $context["item"]) {
                    if (($context["key"] != "comment-reply")) {
                        // line 54
                        echo "<li";
                        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($context["item"], "attributes", []), "addClass", [0 => \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($context["key"]))], "method")), "html", null, true);
                        echo ">";
                        // line 55
                        if ($this->getAttribute($context["item"], "link", [])) {
                            // line 56
                            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "link", [])), "html", null, true);
                        } elseif ($this->getAttribute(                        // line 57
$context["item"], "text_attributes", [])) {
                            // line 58
                            echo "<span";
                            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "text_attributes", [])), "html", null, true);
                            echo ">";
                            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "text", [])), "html", null, true);
                            echo "</span>";
                        } else {
                            // line 60
                            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "text", [])), "html", null, true);
                        }
                        // line 62
                        echo "</li>";
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 64
                echo "</ul>
    </div>
  ";
            } else {
                // line 68
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["links"] ?? null));
                foreach ($context['_seq'] as $context["key"] => $context["item"]) {
                    if (($context["key"] != "comment-reply")) {
                        // line 69
                        echo "<li";
                        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($context["item"], "attributes", []), "addClass", [0 => \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($context["key"]))], "method")), "html", null, true);
                        echo ">";
                        // line 70
                        if ($this->getAttribute($context["item"], "link", [])) {
                            // line 71
                            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "link", [])), "html", null, true);
                        } elseif ($this->getAttribute(                        // line 72
$context["item"], "text_attributes", [])) {
                            // line 73
                            echo "<span";
                            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "text_attributes", [])), "html", null, true);
                            echo ">";
                            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "text", [])), "html", null, true);
                            echo "</span>";
                        } else {
                            // line 75
                            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "text", [])), "html", null, true);
                        }
                        // line 77
                        echo "</li>";
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
            }
        }
        // line 83
        echo "
";
        // line 84
        if ($this->getAttribute(($context["links"] ?? null), "comment-reply", [], "array")) {
            // line 85
            echo "
  <div class=\"btn comment__reply-btn\">";
            // line 87
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_reverse_filter($this->env, ($context["links"] ?? null)));
            foreach ($context['_seq'] as $context["key"] => $context["item"]) {
                if (($context["key"] == "comment-reply")) {
                    // line 88
                    if ($this->getAttribute($context["item"], "link", [])) {
                        // line 89
                        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "link", [])), "html", null, true);
                    } elseif ($this->getAttribute(                    // line 90
$context["item"], "text_attributes", [])) {
                        // line 91
                        echo "<span";
                        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "text_attributes", [])), "html", null, true);
                        echo ">";
                        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "text", [])), "html", null, true);
                        echo "</span>";
                    } else {
                        // line 93
                        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "text", [])), "html", null, true);
                    }
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 96
            echo "</div>";
        }
    }

    public function getTemplateName()
    {
        return "profiles/contrib/social/themes/socialbase/templates/comment/links--comment.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  180 => 96,  172 => 93,  165 => 91,  163 => 90,  161 => 89,  159 => 88,  154 => 87,  151 => 85,  149 => 84,  146 => 83,  137 => 77,  134 => 75,  127 => 73,  125 => 72,  123 => 71,  121 => 70,  117 => 69,  112 => 68,  107 => 64,  100 => 62,  97 => 60,  90 => 58,  88 => 57,  86 => 56,  84 => 55,  80 => 54,  75 => 53,  72 => 52,  64 => 47,  61 => 46,  59 => 45,  51 => 41,  41 => 39,  39 => 38,  37 => 37,  35 => 36,  32 => 35,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/social/themes/socialbase/templates/comment/links--comment.html.twig", "C:\\wamp64\\www\\social\\social\\html\\profiles\\contrib\\social\\themes\\socialbase\\templates\\comment\\links--comment.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = ["if" => 36, "for" => 53];
        static $filters = ["escape" => 39, "t" => 47, "reverse" => 53, "clean_class" => 54];
        static $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['if', 'for'],
                ['escape', 't', 'reverse', 'clean_class'],
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
