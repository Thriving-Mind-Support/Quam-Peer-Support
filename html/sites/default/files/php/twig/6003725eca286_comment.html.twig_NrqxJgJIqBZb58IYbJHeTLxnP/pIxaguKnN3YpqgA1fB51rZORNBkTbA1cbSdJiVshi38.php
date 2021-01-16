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

/* profiles/contrib/social/themes/socialbase/templates/comment/comment.html.twig */
class __TwigTemplate_d225cbd17f5cee77f1074f404b125bd6faaae2bb24b484a1bdc38b95f7b4c804 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'comment_author' => [$this, 'block_comment_author'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 69
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("socialbase/comment"), "html", null, true);
        echo "
";
        // line 71
        $context["classes"] = [0 => "comment", 1 => "js-comment", 2 => ((        // line 74
($context["status"] ?? null)) ? (("comment-" . $this->sandbox->ensureToStringAllowed(($context["status"] ?? null)))) : (""))];
        // line 77
        echo "
<article";
        // line 78
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
        echo ">
  <div class=\"comment__avatar\"> ";
        // line 79
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["author_picture"] ?? null)), "html", null, true);
        echo " </div>

  <div class=\"comment__content\">
    ";
        // line 82
        $this->displayBlock('comment_author', $context, $blocks);
        // line 91
        echo "    <div class=\"comment__text iframe-container\"> ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null)), "html", null, true);
        echo " </div>
    ";
        // line 92
        if (($context["comment_attachments_count"] ?? null)) {
            // line 93
            echo "      <div class=\"btn-link\"> ";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["comment_attachments_count"] ?? null)), "html", null, true);
            echo " </div>
    ";
        }
        // line 95
        echo "  </div>
</article>
";
    }

    // line 82
    public function block_comment_author($context, array $blocks = [])
    {
        // line 83
        echo "    <div class=\"comment__author\"> ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["author"] ?? null)), "html", null, true);
        echo "
      <span class=\"comment__metadata\">&bullet; ";
        // line 84
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["submitted"] ?? null)), "html", null, true);
        echo " </span>
      <mark class=\"badge badge-default badge--pill hidden\" data-comment-timestamp=\"";
        // line 85
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["new_indicator_timestamp"] ?? null)), "html", null, true);
        echo "\"></mark>
      ";
        // line 86
        if ((($context["status"] ?? null) == "unpublished")) {
            // line 87
            echo "        <span class=\"badge badge-default badge--pill\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t($this->sandbox->ensureToStringAllowed(($context["status"] ?? null))));
            echo "</span>
      ";
        }
        // line 89
        echo "    </div>
    ";
    }

    public function getTemplateName()
    {
        return "profiles/contrib/social/themes/socialbase/templates/comment/comment.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  98 => 89,  92 => 87,  90 => 86,  86 => 85,  82 => 84,  77 => 83,  74 => 82,  68 => 95,  62 => 93,  60 => 92,  55 => 91,  53 => 82,  47 => 79,  43 => 78,  40 => 77,  38 => 74,  37 => 71,  33 => 69,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/social/themes/socialbase/templates/comment/comment.html.twig", "C:\\wamp64\\www\\social\\social\\html\\profiles\\contrib\\social\\themes\\socialbase\\templates\\comment\\comment.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = ["set" => 71, "block" => 82, "if" => 92];
        static $filters = ["escape" => 69, "trans" => 87];
        static $functions = ["attach_library" => 69];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'block', 'if'],
                ['escape', 'trans'],
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
