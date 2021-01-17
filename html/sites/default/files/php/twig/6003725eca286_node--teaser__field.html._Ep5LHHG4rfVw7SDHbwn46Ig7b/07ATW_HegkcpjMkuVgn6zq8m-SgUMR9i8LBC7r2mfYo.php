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

/* node--teaser__field.html.twig */
class __TwigTemplate_e2b2c0196620dfd41d8699964f6bf60072b09e871dbc2895707de73fb79a1436 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'field_icon' => [$this, 'block_field_icon'],
            'field_value' => [$this, 'block_field_value'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<div class=\"teaser__content-line\">
  <svg class=\"teaser__content-type-icon\">
      <use xlink:href=\"#icon-";
        // line 3
        $this->displayBlock('field_icon', $context, $blocks);
        echo "\"></use>
  </svg>
  <div class=\"teaser__content-text\">
    ";
        // line 6
        $this->displayBlock('field_value', $context, $blocks);
        // line 7
        echo "  </div>
</div>
";
    }

    // line 3
    public function block_field_icon($context, array $blocks = [])
    {
        echo "label";
    }

    // line 6
    public function block_field_value($context, array $blocks = [])
    {
        echo " ";
    }

    public function getTemplateName()
    {
        return "node--teaser__field.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  58 => 6,  52 => 3,  46 => 7,  44 => 6,  38 => 3,  34 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "node--teaser__field.html.twig", "profiles/contrib/social/themes/socialbase/templates/node/node--teaser__field.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = ["block" => 3];
        static $filters = [];
        static $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['block'],
                [],
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
