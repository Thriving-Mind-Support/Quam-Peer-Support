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

/* profiles/contrib/social/themes/socialbase/templates/form/input--form-control.html.twig */
class __TwigTemplate_3077b5f377d5e227c9df380636eeb18f76d0e50ef0765962466769677d4db6b7 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'input' => [$this, 'block_input'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "
";
        // line 24
        $context["classes"] = [0 => "form-control"];
        // line 28
        echo "
";
        // line 29
        ob_start(function () { return ''; });
        // line 30
        echo "  ";
        if (($context["input_group"] ?? null)) {
            // line 31
            echo "    ";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("socialbase/form--input-groups"), "html", null, true);
            echo "

    <div class=\"input-group\">
  ";
        }
        // line 35
        echo "
  ";
        // line 36
        if (($context["prefix"] ?? null)) {
            // line 37
            echo "    ";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["prefix"] ?? null)), "html", null, true);
            echo "
  ";
        }
        // line 39
        echo "
  ";
        // line 40
        $this->displayBlock('input', $context, $blocks);
        // line 43
        echo "
  ";
        // line 44
        if (($context["suffix"] ?? null)) {
            // line 45
            echo "    ";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["suffix"] ?? null)), "html", null, true);
            echo "
  ";
        }
        // line 47
        echo "
  ";
        // line 48
        if (($context["input_group"] ?? null)) {
            // line 49
            echo "    </div>
  ";
        }
        // line 51
        echo "
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    // line 40
    public function block_input($context, array $blocks = [])
    {
        // line 41
        echo "    <input";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
        echo " />
  ";
    }

    public function getTemplateName()
    {
        return "profiles/contrib/social/themes/socialbase/templates/form/input--form-control.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  99 => 41,  96 => 40,  90 => 51,  86 => 49,  84 => 48,  81 => 47,  75 => 45,  73 => 44,  70 => 43,  68 => 40,  65 => 39,  59 => 37,  57 => 36,  54 => 35,  46 => 31,  43 => 30,  41 => 29,  38 => 28,  36 => 24,  33 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/social/themes/socialbase/templates/form/input--form-control.html.twig", "C:\\wamp64\\www\\social\\social\\html\\profiles\\contrib\\social\\themes\\socialbase\\templates\\form\\input--form-control.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = ["set" => 24, "spaceless" => 29, "if" => 30, "block" => 40];
        static $filters = ["escape" => 31];
        static $functions = ["attach_library" => 31];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'spaceless', 'if', 'block'],
                ['escape'],
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
