!function(t,a,s){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.0.1",settings:{index:0,sticky_class:"sticky",custom_back_text:!0,back_text:"Back",is_hover:!0,mobile_show_parent_link:!1,scrolltop:!0},init:function(a,s,e){Foundation.inherit(this,"addCustomRule register_media throttle");var i=this;i.register_media("topbar","foundation-mq-topbar"),this.bindings(s,e),t("[data-topbar]",this.scope).each(function(){var a=t(this),s=a.data("topbar-init");t("section",this),t("> ul",this).first(),a.data("index",0);var e=a.parent();e.hasClass("fixed")||e.hasClass(s.sticky_class)?(i.settings.sticky_class=s.sticky_class,i.settings.stick_topbar=a,a.data("height",e.outerHeight()),a.data("stickyoffset",e.offset().top)):a.data("height",a.outerHeight()),s.assembled||i.assemble(a),s.is_hover?t(".has-dropdown",a).addClass("not-click"):t(".has-dropdown",a).removeClass("not-click"),i.addCustomRule(".f-topbar-fixed { padding-top: "+a.data("height")+"px }"),e.hasClass("fixed")&&t("body").addClass("f-topbar-fixed")})},toggle:function(s){var e=this;if(s)var i=t(s).closest("[data-topbar]");else var i=t("[data-topbar]");var o=i.data("topbar-init"),n=t("section, .section",i);e.breakpoint()&&(e.rtl?(n.css({right:"0%"}),t(">.name",n).css({right:"100%"})):(n.css({left:"0%"}),t(">.name",n).css({left:"100%"})),t("li.moved",n).removeClass("moved"),i.data("index",0),i.toggleClass("expanded").css("height","")),o.scrolltop?i.hasClass("expanded")?i.parent().hasClass("fixed")&&(o.scrolltop?(i.parent().removeClass("fixed"),i.addClass("fixed"),t("body").removeClass("f-topbar-fixed"),a.scrollTo(0,0)):i.parent().removeClass("expanded")):i.hasClass("fixed")&&(i.parent().addClass("fixed"),i.removeClass("fixed"),t("body").addClass("f-topbar-fixed")):(i.parent().hasClass(e.settings.sticky_class)&&i.parent().addClass("fixed"),i.parent().hasClass("fixed")&&(i.hasClass("expanded")?(i.addClass("fixed"),i.parent().addClass("expanded")):(i.removeClass("fixed"),i.parent().removeClass("expanded"),e.update_sticky_positioning())))},timer:null,events:function(){var s=this;t(this.scope).off(".topbar").on("click.fndtn.topbar","[data-topbar] .toggle-topbar",function(t){t.preventDefault(),s.toggle(this)}).on("click.fndtn.topbar","[data-topbar] li.has-dropdown",function(a){var e=t(this),i=t(a.target),o=e.closest("[data-topbar]"),n=o.data("topbar-init");return i.data("revealId")?(s.toggle(),void 0):(s.breakpoint()||(!n.is_hover||Modernizr.touch)&&(a.stopImmediatePropagation(),e.hasClass("hover")?(e.removeClass("hover").find("li").removeClass("hover"),e.parents("li.hover").removeClass("hover")):(e.addClass("hover"),"A"===i[0].nodeName&&i.parent().hasClass("has-dropdown")&&a.preventDefault())),void 0)}).on("click.fndtn.topbar","[data-topbar] .has-dropdown>a",function(a){if(s.breakpoint()){a.preventDefault();var e=t(this),i=e.closest("[data-topbar]"),o=i.find("section, .section"),n=(e.next(".dropdown").outerHeight(),e.closest("li"));i.data("index",i.data("index")+1),n.addClass("moved"),s.rtl?(o.css({right:-(100*i.data("index"))+"%"}),o.find(">.name").css({right:100*i.data("index")+"%"})):(o.css({left:-(100*i.data("index"))+"%"}),o.find(">.name").css({left:100*i.data("index")+"%"})),i.css("height",e.siblings("ul").outerHeight(!0)+i.data("height"))}}),t(a).off(".topbar").on("resize.fndtn.topbar",s.throttle(function(){s.resize.call(s)},50)).trigger("resize"),t("body").off(".topbar").on("click.fndtn.topbar touchstart.fndtn.topbar",function(a){var s=t(a.target).closest("li").closest("li.hover");s.length>0||t("[data-topbar] li").removeClass("hover")}),t(this.scope).on("click.fndtn.topbar","[data-topbar] .has-dropdown .back",function(a){a.preventDefault();var e=t(this),i=e.closest("[data-topbar]"),o=i.find("section, .section"),n=(i.data("topbar-init"),e.closest("li.moved")),d=n.parent();i.data("index",i.data("index")-1),s.rtl?(o.css({right:-(100*i.data("index"))+"%"}),o.find(">.name").css({right:100*i.data("index")+"%"})):(o.css({left:-(100*i.data("index"))+"%"}),o.find(">.name").css({left:100*i.data("index")+"%"})),0===i.data("index")?i.css("height",""):i.css("height",d.outerHeight(!0)+i.data("height")),setTimeout(function(){n.removeClass("moved")},300)})},resize:function(){var a=this;t("[data-topbar]").each(function(){var e=t(this);e.data("topbar-init");var i,o=e.parent("."+a.settings.sticky_class);if(!a.breakpoint()){var n=e.hasClass("expanded");e.css("height","").removeClass("expanded").find("li").removeClass("hover"),n&&a.toggle(e)}o.length>0&&(o.hasClass("fixed")?(o.removeClass("fixed"),i=o.offset().top,t(s.body).hasClass("f-topbar-fixed")&&(i-=e.data("height")),e.data("stickyoffset",i),o.addClass("fixed")):(i=o.offset().top,e.data("stickyoffset",i)))})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},assemble:function(a){var s=a.data("topbar-init"),e=t("section",a);t("> ul",a).first(),e.detach(),t(".has-dropdown>a",e).each(function(){var a=t(this),e=a.siblings(".dropdown"),i=a.attr("href");if(s.mobile_show_parent_link&&i&&i.length>1)var o=t('<li class="title back js-generated"><h5><a href="#"></a></h5></li><li><a class="parent-link js-generated" href="'+i+'">'+a.text()+"</a></li>");else var o=t('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');1==s.custom_back_text?t("h5>a",o).html(s.back_text):t("h5>a",o).html("&laquo; "+a.html()),e.prepend(o)}),e.appendTo(a),this.sticky(),this.assembled(a)},assembled:function(a){a.data("topbar-init",t.extend({},a.data("topbar-init"),{assembled:!0}))},height:function(a){var s=0;return t("> li",a).each(function(){s+=t(this).outerHeight(!0)}),s},sticky:function(){var s=(t(a),this);t(a).on("scroll",function(){s.update_sticky_positioning()})},update_sticky_positioning:function(){var s="."+this.settings.sticky_class,e=t(a);if(t(s).length>0){var i=this.settings.sticky_topbar.data("stickyoffset");t(s).hasClass("expanded")||(e.scrollTop()>i?t(s).hasClass("fixed")||(t(s).addClass("fixed"),t("body").addClass("f-topbar-fixed")):e.scrollTop()<=i&&t(s).hasClass("fixed")&&(t(s).removeClass("fixed"),t("body").removeClass("f-topbar-fixed")))}},off:function(){t(this.scope).off(".fndtn.topbar"),t(a).off(".fndtn.topbar")},reflow:function(){}}}(jQuery,this,this.document);