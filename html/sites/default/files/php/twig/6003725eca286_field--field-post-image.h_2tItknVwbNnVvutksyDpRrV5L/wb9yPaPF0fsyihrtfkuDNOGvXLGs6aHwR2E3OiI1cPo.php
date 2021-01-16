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

/* profiles/contrib/social/themes/socialbase/templates/field/field--field-post-image.html.twig */
class __TwigTemplate_2213e8614806433fafe2e1178645ac8a7d5024ab9d468dc5eaadcbbf937e4cb4 extends \Twig\Template
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
        // line 41
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("socialbase/photoswipe.image"), "html", null, true);
        echo "

<div class=\"photoswipe-gallery\" itemscope itemtype=\"http://schema.org/ImageGallery\">
  ";
        // line 44
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 45
            echo "    <a href=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, call_user_func_array($this->env->getFunction('file_url')->getCallable(), [$this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "content", []), "#item", [], "array"), "entity", []), "uri", []), "value", []))]), "html", null, true);
            echo "\"
       data-med=\"";
            // line 46
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, call_user_func_array($this->env->getFunction('file_url')->getCallable(), [$this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "content", []), "#item", [], "array"), "entity", []), "uri", []), "value", []))]), "html", null, true);
            echo "\"
       data-med-size=\"";
            // line 47
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "content", []), "#item", [], "array"), "width", [])), "html", null, true);
            echo "x";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "content", []), "#item", [], "array"), "height", [])), "html", null, true);
            echo "\"
       data-size=\"";
            // line 48
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "content", []), "#item", [], "array"), "width", [])), "html", null, true);
            echo "x";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "content", []), "#item", [], "array"), "height", [])), "html", null, true);
            echo "\">
      ";
            // line 49
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "content", [])), "html", null, true);
            echo "
    </a>
  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 52
        echo "</div>
<div class=\"pswp\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">
  <div class=\"pswp__bg\"></div>
  <div class=\"pswp__scroll-wrap\">
    <div class=\"pswp__container\">
      <div class=\"pswp__item\"></div>
      <div class=\"pswp__item\"></div>
      <div class=\"pswp__item\"></div>
    </div>
    <div class=\"pswp__ui pswp__ui--hidden\">
      <div class=\"pswp__top-bar\">
        <div class=\"pswp__counter\"></div>
        <button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"></button>
        <button class=\"pswp__button pswp__button--fs\" title=\"Toggle fullscreen\"></button>
        <button class=\"pswp__button pswp__button--zoom\" title=\"Zoom in/out\"></button>
        <div class=\"pswp__preloader\">
          <div class=\"pswp__preloader__icn\">
            <div class=\"pswp__preloader__cut\">
              <div class=\"pswp__preloader__donut\"></div>
            </div>
          </div>
        </div>
      </div>
      <button class=\"pswp__button pswp__button--arrow--left\" title=\"Previous (arrow left)\"></button>
      <button class=\"pswp__button pswp__button--arrow--right\" title=\"Next (arrow right)\"></button>
      <div class=\"pswp__caption\">
        <div class=\"pswp__caption__center\">
        </div>
      </div>
    </div>
  </div>
</div>
";
    }

    public function getTemplateName()
    {
        return "profiles/contrib/social/themes/socialbase/templates/field/field--field-post-image.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  72 => 52,  63 => 49,  57 => 48,  51 => 47,  47 => 46,  42 => 45,  38 => 44,  32 => 41,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/social/themes/socialbase/templates/field/field--field-post-image.html.twig", "C:\\wamp64\\www\\social\\social\\html\\profiles\\contrib\\social\\themes\\socialbase\\templates\\field\\field--field-post-image.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = ["for" => 44];
        static $filters = ["escape" => 41];
        static $functions = ["attach_library" => 41, "file_url" => 45];

        try {
            $this->sandbox->checkSecurity(
                ['for'],
                ['escape'],
                ['attach_library', 'file_url']
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
