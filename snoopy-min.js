!function(t,e,n){function r(t){t={type:t.type||"GET",url:t.url||"",timeout:t.timeout||5e3,onComplete:t.onComplete||function(){},onError:t.onError||function(){},onSuccess:t.onSuccess||function(){},data:t.data||""};var e=new XMLHttpRequest,n=!1;e.open(t.type,t.url,!0),setTimeout(function(){n=!0},t.timeout),e.onreadystatechange=function(){4!=e.readyState||n||(s(e)?t.onSuccess(o(e,t.type)):t.onError(),t.onComplete(),e=null)},e.send()}function s(t){try{return!t.status&&"file:"==location.protocol||t.status>=200&&t.status<300||304==t.status||navigator.userAgent.indexOf("Safari")>=0&&"undefined"==typeof t.status}catch(e){}return!1}function o(e,n){var r=e.getResponseHeader("content-type"),s=!n&&r&&r.indexOf("xml")>=0;return s="xml"==n||s?e.responseXML:e.responseText,"script"==n&&eval.call(t,s),s}function c(){return{width:t.innerWidth,height:t.innerHeight}}function a(t){return t.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function u(t,e){var r=t.length,s=0;if("number"==typeof e.length)for(var o=e.length;o>s;s++)t[r++]=e[s];else for(;e[s]!==n;)t[r++]=e[s++];return t.length=r,t}function p(){setTimeout(function(){t.scrollTo(0,1)},0)}var h,f,m,d,g=e,y=g.body,v=function(){var t=navigator.userAgent;return t.match(/iPhone/i)||t.match(/iPod/i)||t.match(/iPad/i)?!0:!1}(),b=c();f={NAME:"Snoopy",VERSION:"0.3",START_OFFSET:{top:"0",left:"0"}},h={elem:null,modules_html:"",raw_source:"",gen_source:"",bind_stack:[],position:f.START_OFFSET,init:function(){var t=this.elem=$("<div />");t.attr("id","snpy").addClass("cleanslate"),v&&t.addClass("MobileSafari"),t.style("top",this.position.top,!0),t.style("left",this.position.left,!0),(320==b.width||480==b.width)&&(y.scrollTop=0,p()),this.runTests(),this.getRawSource(),this.getGeneratedSource(),t.html(tim(m.snoopy,{name:f.NAME,modules:this.modules_html,version:f.VERSION,generated_source:this.gen_source})),$(y).append(t),this.setMaxDimensions(),this.bindEvents()},runTests:function(){var t,e=T.run();for(group in e){var n=0;t="<h2>"+e[group].description+'</h2><ul class="tests">';for(test in e[group].results){var r=e[group].results[test];t+='<li class="'+(r?"positive":"negative")+'">',t+='<span class="test_for">'+test+"</span>",t+='<span class="test_result '+(r===!0?"true_no_detail":(!!r).toString())+'">'+(r===!0?"-":r.toString())+"</span></li>",r&&n++}t+="</ul>",this.modules_html+='<div class="module'+(n?"":" empty")+" type_"+group+" output_"+e[group].return_type+'">'+t+"</div>"}},getRawSource:function(){var t=this;r({type:"GET",url:location.href,onSuccess:function(e){t.raw_source=floodlight(floodlight.decode(e)),$("#snpy_rawsource code.html").html(t.raw_source)}})},getGeneratedSource:function(){this.gen_source=floodlight(floodlight.decode(g.documentElement.innerHTML.toString()))},bindEvents:function(e){var n=this,r=this.elem;$("#snpy .close").bind("click",function(){return r.addClass("closed"),!1}),$(t).bind("resize",function(){n.setMaxDimensions()});var s=$("#snpy .menu li"),o=$("#snpy .panel");s.each(function(){$(this).bind("click",function(t){var e=$(this);return s.removeClass("active"),o.removeClass("active"),e.addClass("active"),$($(t.target).attr("href")).addClass("active"),!1})});for(var i,c=-1;i=this.bind_stack[++c];)i()},setMaxDimensions:function(){b=c(),v&&this.elem.style("max-width",b.width-2*parseInt(f.START_OFFSET.left)+"px",!0),320!=b.width&&480!=b.width?$("#snpy pre.source").style("max-height",b.height-180-2*parseInt(f.START_OFFSET.top)+"px",!0):320==b.width?$("#snpy pre.source").style("height","300px",!0):480==b.width&&$("#snpy pre.source").style("height","150px",!0)}},m={snoopy:'<div class="head">    <a class="close" href="#">close</a>    <h1>{{name}}</h1></div><div class="body">    <ul class="menu tabs">        <li class="active"><a href="#snpy_overview">overview</a></li>        <li><a href="#snpy_rawsource">view source</a></li>        <li><a href="#snpy_gensource"><span class="no320">view</span> generated source</a></li>    </ul>    <div class="panels">        <div id="snpy_overview" class="panel active">{{modules}}</div>        <div id="snpy_rawsource" class="panel"><p class="tip MobileSafari">Tip: Use a two fingered drag to scroll the code.</p>        <pre class="source raw"><code class="html">loading source code...</code></pre></div>        <div id="snpy_gensource" class="panel"><p class="tip MobileSafari">Tip: Use a two fingered drag to scroll the code.</p><pre class="source generated"><code class="html">{{generated_source}}</code></pre></div>    </div></div><div class="footer">    <p><a href="https://github.com/allmarkedup/Snoopy">Snoopy <span class="version">v{{version}}</span></a>. Created by <a href="http://allmarkedup.com/">Mark Perkins</a>.</p></div>'};var T=function(t,e,n){function r(t,e){var n=t.match(e);return n?n[1]&&""!=n[1]?n[1]:!0:!1}var s={},o={},i={},c={},a={},u=e.getElementsByTagName("script"),l=e.getElementsByTagName("meta"),p=e.documentElement.outerHTML||e.documentElement.innerHTML,h=e.doctype;l=function(){for(var t,e=[],n=-1;t=l[++n];)t.name&&t.content&&e.push(t);return e}(),u=function(){for(var t,e=[],n=-1;t=u[++n];)t.src&&e.push(u);return e}(),o.pageinfo={description:"Page information",return_type:"detail",tests:{Doctype:[{type:"doctype",test:{HTML5:{name:"html",publicId:""},"HTML 4.01 Strict":{name:"html",publicId:"-//W3C//DTD HTML 4.01//EN"},"HTML 4.01 Transitional":{name:"html",publicId:"-//W3C//DTD HTML 4.01 Transitional//EN"},"XHTML 1.0 Strict":{name:"html",publicId:"-//W3C//DTD XHTML 1.0 Strict//EN"},"XHTML 1.0 Transitional":{name:"html",publicId:"-//W3C//DTD XHTML 1.0 Transitional//EN"},"XHTML 1.0 Frameset":{name:"html",publicId:"-//W3C//DTD XHTML 1.0 Frameset//EN"},"XHTML 1.1":{name:"html",publicId:"-//W3C//DTD XHTML 1.1//EN"},"HTML 2.0":{name:"html",publicId:"-//IETF//DTD HTML 2.0//EN"},"HTML 3.0":{name:"html",publicId:"-//W3C//DTD HTML 3.2 Final//EN"},"XHTML 1.0 Basic":{name:"html",publicId:"-//W3C//DTD XHTML Basic 1.0//EN"}}}],Charset:[{type:"custom",test:function(){return e.characterSet||"None detected"}}]}},o.js_libs={description:"JavaScript Libraries",return_type:"version",tests:{jQuery:[{type:"custom",test:function(){return t.jQuery?t.jQuery.fn.jquery:!1}}],"jQuery UI":[{type:"custom",test:function(){return t.jQuery&&t.jQuery.ui?t.jQuery.ui.version:!1}}],Prototype:[{type:"custom",test:function(){return t.Prototype?t.Prototype.Version:!1}}],Scriptaculous:[{type:"custom",test:function(){return t.Scriptaculous?t.Scriptaculous.Version:!1}}],MooTools:[{type:"custom",test:function(){return t.MooTools?t.MooTools.version:!1}}],Glow:[{type:"custom",test:function(){return t.glow?t.glow.VERSION:!1}}],Dojo:[{type:"custom",test:function(){return t.dojo?t.dojo.version.toString():!1}}],ExtJS:[{type:"custom",test:function(){return t.Ext?t.Ext.version:!1}}],YUI2:[{type:"custom",test:function(){return t.YAHOO?t.YAHOO.VERSION:!1}}],YUI3:[{type:"custom",test:function(){return t.YUI?t.YUI.version:!1}}],"Google Closure":[{type:"custom",test:function(){return!!t.goog}}],Modernizr:[{type:"custom",test:function(){return t.Modernizr?t.Modernizr._version:!1}}],Raphael:[{type:"custom",test:function(){return t.Raphael?t.Raphael.version:!1}}]}},o.cms={description:"Content Management System",return_type:"version",tests:{Wordpress:[{type:"meta",test:{name:"generator",match:/WordPress\s?([\w\d\.\-_]*)/i}},{type:"text",test:/<link rel=["|']stylesheet["|'] [^>]+wp-content/i}],Tumblr:[{type:"custom",test:function(){return t.Tumblr?!0:!1}}],Squarespace:[{type:"custom",test:function(){return t.Squarespace?!0:!1}}],Typepad:[{type:"meta",test:{name:"generator",match:/typepad\.com/i}}],Joomla:[{type:"meta",test:{name:"generator",match:/joomla\!?\s?([\d.]*)/i}}],Blogger:[{type:"meta",test:{name:"generator",match:/blogger/i}}],MovableType:[{type:"meta",test:{name:"generator",match:/Movable Type Pro ([\d.]*)/i}}],Drupal:[{type:"custom",test:function(){return t.Drupal?!0:!1}}],Jekyll:[{type:"meta",test:{name:"generator",match:/Jekyll v([\w\d\.]*)/i}}],Octopress:[{type:"meta",test:{name:"generator",match:/.*Octopress.*/i}}],"Cisco Eos":[{type:"custom",test:function(){return t.eos?!0:!1}},{type:"text",test:/<link rel=["|']stylesheet["|'] [^>]+ciscoeos.com/i}]}},o.analytics={description:"Analytics",return_type:"version",tests:{"Google Analytics":[{type:"custom",test:function(){return!(!t._gat&&!t._gaq)}}],Reinvigorate:[{type:"custom",test:function(){return!!t.reinvigorate}}],Piwik:[{type:"custom",test:function(){return!!t._paq}}],Clicky:[{type:"custom",test:function(){return!!t.clicky}}],"Open Web Analytics":[{type:"custom",test:function(){return!!t.OWA}}],"New Relic":[{type:"custom",test:function(){return!!t.NREUMQ}}],Gauges:[{type:"custom",test:function(){return!!t._gauges}}],Mint:[{type:"custom",test:function(){return!!t.Mint}}]}},o.fonts={description:"Fonts",return_type:"version",tests:{Cufon:[{type:"custom",test:function(){return!!t.Cufon}}],Typekit:[{type:"custom",test:function(){return!!t.Typekit}}],Fontdeck:[{type:"text",test:/<link rel=["|']stylesheet["|'] [^>]+f.fontdeck.com/i}],"Google Webfonts":[{type:"custom",test:function(){return!!t.WebFont}},{type:"text",test:/<link rel=["|']stylesheet["|'] [^>]+fonts.googleapis.com/i}],sIFR:[{type:"custom",test:function(){return t.sIFR?t.sIFR.VERSION:!1}}]}},i.custom=function(t){return t()},i.text=function(t){return r(p,t)},h?i.doctype=function(t){for(subtest in t)if(t.hasOwnProperty(subtest)){var e=t[subtest];if(h.name.toLowerCase()==e.name&&h.publicId==e.publicId)return subtest}return!1}:i.doctype=function(){return"None detected"},u.length?i.script=function(t){for(var e,n=-1;e=u[++n];)return r(e.src,t);return!1}:i.script=function(){return!1},l.length?i.meta=function(t){for(var e,n=-1;e=l[++n];)if(e.name==t.name){var s=r(e.content,t.match);if(s)return s}return!1}:i.meta=function(){return!1};var f=function(t){for(var e,n=-1;e=t[++n];){var r=i[e.type](e.test);if(r!==!1)return r}return!1},m=function(t){for(group in o)if(o.hasOwnProperty(group))for(test in o[group].tests)if(o[group].tests.hasOwnProperty(test)&&t(group,test)===!1)return},d=function(t,e,n){c[t]=c[t]||{},c[t].results=c[t].results||{},c[t].description=o[t].description,c[t].return_type=o[t].return_type,c[t].results[e]=n,a[e.toLowerCase()]=n};return s.results=function(){return c},s.check=function(t){return t=t.toLowerCase(),a[t]!=n?a[t]:(m(function(e,n){return n.toLowerCase()===t?(d(e,n,f(o[e].tests[n])),!1):void 0}),a[t])},s.run=function(){return m(function(t,e){d(t,e,f(o[t].tests[e]))}),s.results()},s}(t,e);!function(t,e,n){"undefined"!=typeof module&&module.exports?module.exports=e():"function"==typeof n.define&&n.define.amd?define(e):n[t]=e()}("tim",function(){var t=function(){"use strict";var t,e="{{",n="}}",r="[a-z0-9_$][\\.a-z0-9_]*",s=new RegExp(e+"\\s*("+r+")\\s*"+n,"gi");return function(e,n){return e.replace(s,function(e,r){for(var s=r.split("."),o=s.length,i=n,c=0;o>c;c++){if(i=i[s[c]],i===t)throw"tim: '"+s[c]+"' not found in "+e;if(c===o-1)return i}})}}();return t},this),function(t,e){function n(t){return"[object Array]"===Object.prototype.toString.call(t)}function r(t,e){return t.replace(f.regex[e],function(t){return f.map[e][t]})}function s(t){for(var e=t.split(""),n=[],r=e.length,s=0;r>s;s+=1)e[s].charCodeAt(0)>127?n.push(e[s]):n.push(String.fromCharCode(e[s].charCodeAt(0)+10240));return n=n.join(""),h[n]=t,n}function o(t){return h[t]||""}function i(t,e){return"«"+s(e)+"·"+s(t)+"·"+s(e)+"»"}function c(t){return t.replace(/\u00ab(.+?)\u00b7(.+?)\u00b7\1\u00bb/g,function(t,e,n){return n=n.replace(/\u00ab[^\u00b7]+\u00b7/g,"").replace(/\u00b7[^\u00bb]+\u00bb/g,""),a(o(n),o(e))})}function a(t,e){return'<span class="'+f.prefix+e+'">'+r(t,"encode")+"</span>"}function u(t,e,r){var s,o,i=0;for(t=n(t)?t:[t],s=t.length;s>i;i+=1)o=p[t[i]],o&&(e=e.replace(o.regex,o.callback));return r===!1?e:c(e)}function l(t,e,n){p[t]={regex:e,callback:n}}var p={},h={},f={prefix:"",spaces:"  ",regex:{encode:/<|>|"|&/g,decode:/&(?:lt|gt|quot|amp);/g},map:{encode:{"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"},decode:{"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&"}}};t.floodlight=function(e){return t.floodlight.html(e)},t.floodlight.options=f,t.floodlight.encode=function(t){return r(t,"encode")},t.floodlight.decode=function(t){return r(t,"decode")},l("whitespace",/\t/g,function(){return f.spaces}),t.floodlight.javascript=function(e){return u(t.floodlight.javascript.filters,e)},function(){var e;this.keywords="var function if else for while break switch case do new null in with void continue delete return this true false throw catch typeof with instanceof".split(" "),this.special="eval window document undefined NaN Infinity parseInt parseFloat encodeURI decodeURI encodeURIComponent decodeURIComponent".split(" "),this.regex={comment:/(\/\/[^\n]*|\/\*(?:[^*\n]|\*+[^\/*])*\*+\/)/g,string:/("(?:(?!")[^\\\n]|\\.)*"|'(?:(?!')[^\\\n]|\\.)*')/g,regexp:/(\/.+\/[mgi]*)(?!\s*\w)/g,"class":/\b([A-Z][a-zA-Z]+)\b/g,number:/\b([0-9]+(?:\.[0-9]+)?)\b/g,keyword:new RegExp("\\b("+t.floodlight.javascript.keywords.join("|")+")\\b","g"),special:new RegExp("\\b("+t.floodlight.javascript.special.join("|")+")\\b","g")},this.filters=["whitespace"];for(e in this.regex)!function(t,e,n){var r="javascript."+e;l(r,t,function(t,n){return i(n,"javascript-"+e)}),n.push(r)}(t.floodlight.javascript.regex[e],e,this.filters)}.call(t.floodlight.javascript),t.floodlight.css=function(e){return u(t.floodlight.css.filters,e)},function(){var t="/[0-9a-f]{1,6}(?:\\r\\n|[ \\n\\r\\t\\f])?|[^\\n\\r\\f0-9a-f]/",e="[_a-z]|[^\\0-\\237]|(?:"+t+")",n="[_a-z0-9-]|[^\\0-\\237]|(?:"+t+")",r="[-]?(?:"+e+")(?:"+n+")*";this.regex={rule:new RegExp("@"+r,"g"),selector:new RegExp(r,"g"),string:new RegExp("(?:\"|')(?:[^\\n\\r\\f\\1]|\\n\\|\\r\\n|\\r|\\f|"+t+")*\\1","g"),number:/[0-9]+|[0-9]*\.[0-9]+/g,block:/\{([^\}]*)\}/g,declaration:new RegExp("("+r+")[^:]*:[\\s\\n]*([^;]*);","g"),comment:/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g},this.filters=["css.comment","css.block"],l("css.block",this.regex.block,function(t,e){var n=u("css.declaration",e,!1);return t.replace(e,n)}),l("css.declaration",this.regex.declaration,function(t,e,n){console.log("%o",n);var r=u(["css.string","css.number"],n,!1);return r===n&&(r=i(n,"css-value")),t.replace(e,i(e,"css-property")).replace(n,r)}),l("css.string",this.regex.string,function(t){return console.log("'%o'",t),i(t,"css-string")}),l("css.number",this.regex.number,function(t){return i(t,"css-number")}),l("css.comment",this.regex.comment,function(t){return i(t,"css-comment")})}.call(t.floodlight.css),t.floodlight.html=function(e){return u(t.floodlight.html.filters,e)},function(){this.regex={tag:/(<\/?)(\w+)([^>]*)(\/?>)/g,attr:/(\w+)(?:\s*=\s*("[^"]*"|'[^']*'|[^>\s]+))?/g,comment:/<!--[^\-]*-->/g,entity:/&[^;]+;/g,script:/<script[^>]*>([^<]*)<\/script>/gi},this.filters=["whitespace","html.script","html.comment","html.tag","html.entity"],l("html.tag",this.regex.tag,function(t,e,n,r,s){var o=u("html.attr",r,!1);return i(e,"html-bracket")+i(n,"html-tag")+o+i(s,"html-bracket")}),l("html.attr",this.regex.attr,function(t,e,n){return i(e,"html-attribute")+(n?"="+i(n,"html-value"):"")}),l("html.comment",this.regex.comment,function(t){return i(t,"html-comment")}),l("html.entity",this.regex.entity,function(t){return i(t,"html-entity")}),l("html.script",this.regex.script,function(e,n){var r=u(t.floodlight.javascript.filters,n,!1);return e.replace(n,r)})}.call(t.floodlight.html)}(this),d=function(t){return new d.fn.init(t)},d.fn=d.prototype={length:0,selector:"",init:function(r){var s,o,i=/^<(\w+)\s*\/?>(?:<\/\1>)?$/;return r?r.nodeType?(this[0]=r,this.length=1,this):r===t?(this[0]=r,this.length=1,this):(o=i.exec(r))?(r=[g.createElement(o[1])],u(this,r),this):/^#[\w+]$/.test(r)?(s=g.getElementById(r),s&&(this.length=1,this[0]=s),this.selector=r,this.context=e,this):/^\w+$/.test(r)?(this.selector=r,this.context=e,r=e.getElementsByTagName(r),u(this,r)):"string"==typeof r?(this.selector=r,this.context=e,r=e.querySelectorAll(r),u(this,r)):(r.selector!==n&&(this.selector=r.selector,this.context=r.context),u(r,this)):this},each:function(t){for(var e=0,n=this.length,r=this[0];n>e&&t.call(r,e,r)!==!1;r=this[++e]);},bind:function(t,e){for(var n=0,r=this.length;r>n;n++)this[n].addEventListener(t,function(t){e.call(this,t)===!1&&(t.preventDefault(),t.stopPropagation())},!1);return this},addClass:function(t){var e=(t||"").split(/\s/);return this.each(function(){for(var t=0,n=e.length;n>t;t++)d(this).hasClass(e[t])||(this.className+=this.className?" "+e[t]:e[t])}),this},removeClass:function(t){var e=(t||"").split(/\s/);return this.each(function(){for(var t=0,n=e.length;n>t;t++)this.className=a(this.className.replace(this.className.match(" "+e[t])?" "+e[t]:e[t],""))}),this},hasClass:function(t){return this[0]?new RegExp("\\b"+t+"\\b").test(this[0].className):!1},attr:function(t,e){return e!==n?(this.each(function(){this.setAttribute(t,e)}),this):this[0]?this[0].getAttribute(t):null},html:function(t){return t!==n?(this.each(function(){this.innerHTML=t}),this):this[0]?this[0].innerHTML:null},append:function(t){return t!==n?(t=t[0]?t[0]:t,this.each(function(){this.appendChild(t)}),this):void 0}},d.fn.init.prototype=d.fn,$=d,function(){function t(t,e){for(var n,r=-1;n=t[++r];)if(e===n.prop)return n.val;return null}function e(t,e,n,r){e=a(e);for(var s,o=-1;s=t[++o];)if(e===s.prop)return t[o].val=n,void(t[o].important=r);t.push({prop:e,val:n,important:r})}function r(t){for(var e,n="",r=-1;e=t[++r];)n+=e.prop+" : "+e.val,e.important&&(n+=" !important"),n+=";";return n}function s(t,e){if("string"==typeof e){var n=e.split(/;/);for(i=0,l=n.length;i<l;i++){var r=a(n[i]);if(""!==r){var s=r.match(o);t.push({prop:a(s[1]),val:a(s[2]),important:!!s[3]})}}}}var o=/([\w-]+)\s*:\s*([^;!]+)\s?(!\s?important?)?\s?[;|$]?/i;$.fn.style=function(o,i,c){if(i!==n)return c=c||!1,this.each(function(){var t=[],n=$(this);s(t,n.attr("style")),e(t,o,i,c),n.attr("style",r(t))});var a=$(this[0]),u=[];return s(u,a.attr("style")),t(u,o)}}(),h.init()}(window,document);