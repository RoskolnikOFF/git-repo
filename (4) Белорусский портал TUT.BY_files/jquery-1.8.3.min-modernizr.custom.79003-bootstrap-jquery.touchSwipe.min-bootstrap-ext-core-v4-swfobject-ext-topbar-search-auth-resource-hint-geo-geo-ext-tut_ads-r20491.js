/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
 /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-borderradius-boxshadow-generatedcontent-cssgradients-csstransitions-input-shiv-mq-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function B(a){j.cssText=a}function C(a,b){return B(n.join(a+";")+(b||""))}function D(a,b){return typeof a===b}function E(a,b){return!!~(""+a).indexOf(b)}function F(a,b){for(var d in a){var e=a[d];if(!E(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function G(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:D(f,"function")?f.bind(d||b):f}return!1}function H(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return D(b,"string")||D(b,"undefined")?F(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),G(e,b,c))}function I(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)t[c[d]]=c[d]in k;return t.list&&(t.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return x("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},z={}.hasOwnProperty,A;!D(z,"undefined")&&!D(z.call,"undefined")?A=function(a,b){return z.call(a,b)}:A=function(a,b){return b in a&&D(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.borderradius=function(){return H("borderRadius")},r.boxshadow=function(){return H("boxShadow")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return B((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),E(j.backgroundImage,"gradient")},r.csstransitions=function(){return H("transition")},r.generatedcontent=function(){var a;return x(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a};for(var J in r)A(r,J)&&(w=J.toLowerCase(),e[w]=r[J](),u.push((e[w]?"":"no-")+w));return e.input||I(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)A(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},B(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=y,e.testProp=function(a){return F([a])},e.testAllProps=H,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/* ===================================================
 * bootstrap-transition.js v2.1.1
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function ($) {
	$(function () {
		"use strict"; // jshint ;_;
		/* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
		 * ======================================================= */
		$.support.transition = (function () {
			var transitionEnd = (function () {
				var el = document.createElement('bootstrap')
					, transEndEventNames = {
							 'WebkitTransition' : 'webkitTransitionEnd'
						,  'MozTransition'    : 'transitionend'
						,  'OTransition'      : 'oTransitionEnd otransitionend'
						,  'transition'       : 'transitionend'
						}
					, name
				for (name in transEndEventNames){
					if (el.style[name] !== undefined) {
						return transEndEventNames[name]
					}
				}
			}())
			return transitionEnd && {
				end: transitionEnd
			}
		})()
	})
}(window.jQuery);
/* =========================================================
 * bootstrap-modal.js v2.1.1
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
!function ($) {
	"use strict"; // jshint ;_;
 /* MODAL CLASS DEFINITION
	* ====================== */
	var Modal = function (element, options) {
		this.options = options
		this.$element = $(element)
			.delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
		this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
	}
	Modal.prototype = {
			constructor: Modal
		, toggle: function () {
				return this[!this.isShown ? 'show' : 'hide']()
			}
		, show: function () {
				var that = this
					, e = $.Event('show')
				this.$element.trigger(e)
				if (this.isShown || e.isDefaultPrevented()) return
				$('body').addClass('modal-open')
				this.isShown = true
				this.escape()
				this.backdrop(function () {
					var transition = $.support.transition && that.$element.hasClass('fade')
					if (!that.$element.parent().length) {
						that.$element.appendTo(document.body) //don't move modals dom position
					}
					that.$element
						.show()
					if (transition) {
						that.$element[0].offsetWidth // force reflow
					}
					that.$element
						.addClass('in')
						.attr('aria-hidden', false)
						.focus()
					that.enforceFocus()
					transition ?
						that.$element.one($.support.transition.end, function () { that.$element.trigger('shown') }) :
						that.$element.trigger('shown')
				})
			}
		, hide: function (e) {
				e && e.preventDefault()
				var that = this
				e = $.Event('hide')
				this.$element.trigger(e)
				if (!this.isShown || e.isDefaultPrevented()) return
				this.isShown = false
				$('body').removeClass('modal-open')
				this.escape()
				$(document).off('focusin.modal')
				this.$element
					.removeClass('in')
					.attr('aria-hidden', true)
				$.support.transition && this.$element.hasClass('fade') ?
					this.hideWithTransition() :
					this.hideModal()
			}
		, enforceFocus: function () {
				var that = this
				$(document).on('focusin.modal', function (e) {
					if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
						that.$element.focus()
					}
				})
			}
		, escape: function () {
				var that = this
				if (this.isShown && this.options.keyboard) {
					this.$element.on('keyup.dismiss.modal', function ( e ) {
						e.which == 27 && that.hide()
					})
				} else if (!this.isShown) {
					this.$element.off('keyup.dismiss.modal')
				}
			}
		, hideWithTransition: function () {
				var that = this
					, timeout = setTimeout(function () {
							that.$element.off($.support.transition.end)
							that.hideModal()
						}, 500)
				this.$element.one($.support.transition.end, function () {
					clearTimeout(timeout)
					that.hideModal()
				})
			}
		, hideModal: function (that) {
				this.$element
					.hide()
					.trigger('hidden')
				this.backdrop()
			}
		, removeBackdrop: function () {
				this.$backdrop.remove()
				this.$backdrop = null
			}
		, backdrop: function (callback) {
				var that = this
					, animate = this.$element.hasClass('fade') ? 'fade' : ''
				if (this.isShown && this.options.backdrop) {
					var doAnimate = $.support.transition && animate
					this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
						.appendTo(document.body)
					if (this.options.backdrop != 'static') {
						this.$backdrop.click($.proxy(this.hide, this))
					}
					if (doAnimate) this.$backdrop[0].offsetWidth // force reflow
					this.$backdrop.addClass('in')
					doAnimate ?
						this.$backdrop.one($.support.transition.end, callback) :
						callback()
				} else if (!this.isShown && this.$backdrop) {
					this.$backdrop.removeClass('in')
					$.support.transition && this.$element.hasClass('fade')?
						this.$backdrop.one($.support.transition.end, $.proxy(this.removeBackdrop, this)) :
						this.removeBackdrop()
				} else if (callback) {
					callback()
				}
			}
	}
 /* MODAL PLUGIN DEFINITION
	* ======================= */
	$.fn.modal = function (option) {
		return this.each(function () {
			var $this = $(this)
				, data = $this.data('modal')
				, options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
			if (!data) $this.data('modal', (data = new Modal(this, options)))
			if (typeof option == 'string') data[option]()
			else if (options.show) data.show()
		})
	}
	$.fn.modal.defaults = {
			backdrop: true
		, keyboard: true
		, show: true
	}
	$.fn.modal.Constructor = Modal
 /* MODAL DATA-API
	* ============== */
/*
	$(function () {
		$('body').on('click.modal.data-api', '[data-toggle="modal"]', function ( e ) {
			var $this = $(this)
				, href = $this.attr('href')
				, $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
				, option = $target.data('modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())
			e.preventDefault()
			$target
				.modal(option)
				.one('hide', function () {
					$this.focus()
				})
		})
	})
*/
}(window.jQuery);
/* ============================================================
 * bootstrap-dropdown.js v2.1.1
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
!function ($) {
	"use strict"; // jshint ;_;
 /* DROPDOWN CLASS DEFINITION
	* ========================= */
	var toggle = '[data-toggle=dropdown]'
		, Dropdown = function (element) {
				var $el = $(element).on('click.dropdown.data-api', this.toggle)
				$('html').on('click.dropdown.data-api', function () {
					$el.parent().removeClass('open')
				})
			}
	Dropdown.prototype = {
		constructor: Dropdown
	, toggle: function (e) {
			var $this = $(this)
				, $parent
				, isActive
			if ($this.is('.disabled, :disabled')) return
			$parent = getParent($this)
			isActive = $parent.hasClass('open')
			clearMenus()
			if (!isActive) {
				$parent.toggleClass('open')
				$this.focus()
			}
			return false
		}
	, keydown: function (e) {
			var $this
				, $items
				, $active
				, $parent
				, isActive
				, index
			if (!/(38|40|27)/.test(e.keyCode)) return
			$this = $(this)
			e.preventDefault()
			e.stopPropagation()
			if ($this.is('.disabled, :disabled')) return
			$parent = getParent($this)
			isActive = $parent.hasClass('open')
			if (!isActive || (isActive && e.keyCode == 27)) return $this.click()
			$items = $('[role=menu] li:not(.divider) a', $parent)
			if (!$items.length) return
			index = $items.index($items.filter(':focus'))
			if (e.keyCode == 38 && index > 0) index--                                        // up
			if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
			if (!~index) index = 0
			$items
				.eq(index)
				.focus()
		}
	}
	function clearMenus() {
		getParent($(toggle))
			.removeClass('open')
	}
	function getParent($this) {
		var selector = $this.attr('data-target')
			, $parent
		if (!selector) {
			selector = $this.attr('href')
			selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
		}
		$parent = $(selector)
		$parent.length || ($parent = $this.parent())
		return $parent
	}
	/* DROPDOWN PLUGIN DEFINITION
	 * ========================== */
	$.fn.dropdown = function (option) {
		return this.each(function () {
			var $this = $(this)
				, data = $this.data('dropdown')
			if (!data) $this.data('dropdown', (data = new Dropdown(this)))
			if (typeof option == 'string') data[option].call($this)
		})
	}
	$.fn.dropdown.Constructor = Dropdown
	/* APPLY TO STANDARD DROPDOWN ELEMENTS
	 * =================================== */
/*
	$(function () {
		$('html')
			.on('click.dropdown.data-api touchstart.dropdown.data-api', clearMenus)
		$('body')
			.on('click.dropdown touchstart.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
			.on('click.dropdown.data-api touchstart.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
			.on('keydown.dropdown.data-api touchstart.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)
	})
*/
}(window.jQuery);
/* =============================================================
 * bootstrap-scrollspy.js v2.1.1
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */
!function ($) {
	"use strict"; // jshint ;_;
 /* SCROLLSPY CLASS DEFINITION
	* ========================== */
	function ScrollSpy(element, options) {
		var process = $.proxy(this.process, this)
			, $element = $(element).is('body') ? $(window) : $(element)
			, href
		this.options = $.extend({}, $.fn.scrollspy.defaults, options)
		this.$scrollElement = $element.on('scroll.scroll-spy.data-api', process)
		this.selector = (this.options.target
			|| ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
			|| '') + ' .nav li > a'
		this.$body = $('body')
		this.refresh()
		this.process()
	}
	ScrollSpy.prototype = {
			constructor: ScrollSpy
		, refresh: function () {
				var self = this
					, $targets
				this.offsets = $([])
				this.targets = $([])
				$targets = this.$body
					.find(this.selector)
					.map(function () {
						var $el = $(this)
							, href = $el.data('target') || $el.attr('href')
							, $href = /^#\w/.test(href) && $(href)
						return ( $href
							&& $href.length
							&& [[ $href.position().top, href ]] ) || null
					})
					.sort(function (a, b) { return a[0] - b[0] })
					.each(function () {
						self.offsets.push(this[0])
						self.targets.push(this[1])
					})
			}
		, process: function () {
				var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
					, scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
					, maxScroll = scrollHeight - this.$scrollElement.height()
					, offsets = this.offsets
					, targets = this.targets
					, activeTarget = this.activeTarget
					, i
				if (scrollTop >= maxScroll) {
					return activeTarget != (i = targets.last()[0])
						&& this.activate ( i )
				}
				for (i = offsets.length; i--;) {
					activeTarget != targets[i]
						&& scrollTop >= offsets[i]
						&& (!offsets[i + 1] || scrollTop <= offsets[i + 1])
						&& this.activate( targets[i] )
				}
			}
		, activate: function (target) {
				var active
					, selector
				this.activeTarget = target
				$(this.selector)
					.parent('.active')
					.removeClass('active')
				selector = this.selector
					+ '[data-target="' + target + '"],'
					+ this.selector + '[href="' + target + '"]'
				active = $(selector)
					.parent('li')
					.addClass('active')
				if (active.parent('.dropdown-menu').length)  {
					active = active.closest('li.dropdown').addClass('active')
				}
				active.trigger('activate')
			}
	}
 /* SCROLLSPY PLUGIN DEFINITION
	* =========================== */
	$.fn.scrollspy = function (option) {
		return this.each(function () {
			var $this = $(this)
				, data = $this.data('scrollspy')
				, options = typeof option == 'object' && option
			if (!data) $this.data('scrollspy', (data = new ScrollSpy(this, options)))
			if (typeof option == 'string') data[option]()
		})
	}
	$.fn.scrollspy.Constructor = ScrollSpy
	$.fn.scrollspy.defaults = {
		offset: 10
	}
 /* SCROLLSPY DATA-API
	* ================== */
/*
	$(window).on('load', function () {
		$('[data-spy="scroll"]').each(function () {
			var $spy = $(this)
			$spy.scrollspy($spy.data())
		})
	})
*/
}(window.jQuery);
/* ========================================================
 * bootstrap-tab.js v2.1.1
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */
!function ($) {
	"use strict"; // jshint ;_;
 /* TAB CLASS DEFINITION
	* ==================== */
	var Tab = function (element) {
		this.element = $(element)
	}
	Tab.prototype = {
		constructor: Tab
	, show: function () {
			var $this = this.element
				, $ul = $this.closest('ul:not(.dropdown-menu)')
				, selector = $this.attr('data-target')
				, previous
				, $target
				, e
			if (!selector) {
				selector = $this.attr('href')
				selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
			}
			if ( $this.parent('li').hasClass('active') ) return
			previous = $ul.find('.active a').last()[0]
			e = $.Event('show', {
				relatedTarget: previous
			})
			$this.trigger(e)
			if (e.isDefaultPrevented()) return
			$target = $(selector)
			this.activate($this.parent('li'), $ul)
			this.activate($target, $target.parent(), function () {
				$this.trigger({
					type: 'shown'
				, relatedTarget: previous
				})
			})
		}
	, activate: function ( element, container, callback) {
			var $active = container.find('> .active')
				, transition = callback
						&& $.support.transition
						&& $active.hasClass('fade')
			function next() {
				$active
					.removeClass('active')
					.find('> .dropdown-menu > .active')
					.removeClass('active')
				element.addClass('active')
				if (transition) {
					element[0].offsetWidth // reflow for transition
					element.addClass('in')
				} else {
					element.removeClass('fade')
				}
				if ( element.parent('.dropdown-menu') ) {
					element.closest('li.dropdown').addClass('active')
				}
				callback && callback()
			}
			transition ?
				$active.one($.support.transition.end, next) :
				next()
			$active.removeClass('in')
		}
	}
 /* TAB PLUGIN DEFINITION
	* ===================== */
	$.fn.tab = function ( option ) {
		return this.each(function () {
			var $this = $(this)
				, data = $this.data('tab')
			if (!data) $this.data('tab', (data = new Tab(this)))
			if (typeof option == 'string') data[option]()
		})
	}
	$.fn.tab.Constructor = Tab
 /* TAB DATA-API
	* ============ */
/*
	$(function () {
		$('body').on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
			e.preventDefault()
			$(this).tab('show')
		})
	})
*/
}(window.jQuery);
/* ===========================================================
 * bootstrap-tooltip.js v2.1.1
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function ($) {
	"use strict"; // jshint ;_;
 /* TOOLTIP PUBLIC CLASS DEFINITION
	* =============================== */
	var Tooltip = function (element, options) {
		this.init('tooltip', element, options)
	}
	Tooltip.prototype = {
		constructor: Tooltip
	, init: function (type, element, options) {
			var eventIn
				, eventOut
			this.type = type
			this.$element = $(element)
			this.options = this.getOptions(options)
			this.enabled = true
			if (this.options.trigger == 'click') {
				this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
			} else if (this.options.trigger != 'manual') {
				eventIn = this.options.trigger == 'hover' ? 'mouseenter' : 'focus'
				eventOut = this.options.trigger == 'hover' ? 'mouseleave' : 'blur'
				this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
				this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
			}
			this.options.selector ?
				(this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
				this.fixTitle()
		}
	, getOptions: function (options) {
			options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())
			if (options.delay && typeof options.delay == 'number') {
				options.delay = {
					show: options.delay
				, hide: options.delay
				}
			}
			return options
		}
	, enter: function (e) {
			var self = $(e.currentTarget)[this.type](this._options).data(this.type)
			if (!self.options.delay || !self.options.delay.show) return self.show()
			clearTimeout(this.timeout)
			self.hoverState = 'in'
			this.timeout = setTimeout(function() {
				if (self.hoverState == 'in') self.show()
			}, self.options.delay.show)
		}
	, leave: function (e) {
			var self = $(e.currentTarget)[this.type](this._options).data(this.type)
			if (this.timeout) clearTimeout(this.timeout)
			if (!self.options.delay || !self.options.delay.hide) return self.hide()
			self.hoverState = 'out'
			this.timeout = setTimeout(function() {
				if (self.hoverState == 'out') self.hide()
			}, self.options.delay.hide)
		}
	, show: function () {
			var $tip
				, inside
				, pos
				, actualWidth
				, actualHeight
				, placement
				, tp
			if (this.hasContent() && this.enabled) {
				$tip = this.tip()
				this.setContent()
				if (this.options.animation) {
					$tip.addClass('fade')
				}
				placement = typeof this.options.placement == 'function' ?
					this.options.placement.call(this, $tip[0], this.$element[0]) :
					this.options.placement
				inside = /in/.test(placement)
				$tip
					.remove()
					.css({ top: 0, left: 0, display: 'block' })
					.appendTo(inside ? this.$element : document.body)
				pos = this.getPosition(inside)
				actualWidth = $tip[0].offsetWidth
				actualHeight = $tip[0].offsetHeight
				switch (inside ? placement.split(' ')[1] : placement) {
					case 'bottom':
						tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
						break
					case 'top':
						tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
						break
					case 'left':
						tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
						break
					case 'right':
						tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
						break
				}
				$tip
					.css(tp)
					.addClass(placement)
					.addClass('in')
			}
		}
	, setContent: function () {
			var $tip = this.tip()
				, title = this.getTitle()
			$tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
			$tip.removeClass('fade in top bottom left right')
		}
	, hide: function () {
			var that = this
				, $tip = this.tip()
			$tip.removeClass('in')
			function removeWithAnimation() {
				var timeout = setTimeout(function () {
					$tip.off($.support.transition.end).remove()
				}, 500)
				$tip.one($.support.transition.end, function () {
					clearTimeout(timeout)
					$tip.remove()
				})
			}
			$.support.transition && this.$tip.hasClass('fade') ?
				removeWithAnimation() :
				$tip.remove()
			return this
		}
	, fixTitle: function () {
			var $e = this.$element
			if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
				$e.attr('data-original-title', $e.attr('title') || '').removeAttr('title')
			}
		}
	, hasContent: function () {
			return this.getTitle()
		}
	, getPosition: function (inside) {
			return $.extend({}, (inside ? {top: 0, left: 0} : this.$element.offset()), {
				width: this.$element[0].offsetWidth
			, height: this.$element[0].offsetHeight
			})
		}
	, getTitle: function () {
			var title
				, $e = this.$element
				, o = this.options
			title = $e.attr('data-original-title')
				|| (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)
			return title
		}
	, tip: function () {
			return this.$tip = this.$tip || $(this.options.template)
		}
	, validate: function () {
			if (!this.$element[0].parentNode) {
				this.hide()
				this.$element = null
				this.options = null
			}
		}
	, enable: function () {
			this.enabled = true
		}
	, disable: function () {
			this.enabled = false
		}
	, toggleEnabled: function () {
			this.enabled = !this.enabled
		}
	, toggle: function () {
			this[this.tip().hasClass('in') ? 'hide' : 'show']()
		}
	, destroy: function () {
			this.hide().$element.off('.' + this.type).removeData(this.type)
		}
	}
 /* TOOLTIP PLUGIN DEFINITION
	* ========================= */
	$.fn.tooltip = function ( option ) {
		return this.each(function () {
			var $this = $(this)
				, data = $this.data('tooltip')
				, options = typeof option == 'object' && option
			if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
			if (typeof option == 'string') data[option]()
		})
	}
	$.fn.tooltip.Constructor = Tooltip
	$.fn.tooltip.defaults = {
		animation: true
	, placement: 'top'
	, selector: false
	, template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
	, trigger: 'hover'
	, title: ''
	, delay: 0
	, html: true
	}
}(window.jQuery);
/* ===========================================================
 * bootstrap-popover.js v2.1.1
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */
!function ($) {
	"use strict"; // jshint ;_;
 /* POPOVER PUBLIC CLASS DEFINITION
	* =============================== */
	var Popover = function (element, options) {
		this.init('popover', element, options)
	}
	/* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
		 ========================================== */
	Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {
		constructor: Popover
	, setContent: function () {
			var $tip = this.tip()
				, title = this.getTitle()
				, content = this.getContent()
			$tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
			$tip.find('.popover-content > *')[this.options.html ? 'html' : 'text'](content)
			$tip.removeClass('fade top bottom left right in')
		}
	, hasContent: function () {
			return this.getTitle() || this.getContent()
		}
	, getContent: function () {
			var content
				, $e = this.$element
				, o = this.options
			content = $e.attr('data-content')
				|| (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)
			return content
		}
	, tip: function () {
			if (!this.$tip) {
				this.$tip = $(this.options.template)
			}
			return this.$tip
		}
	, destroy: function () {
			this.hide().$element.off('.' + this.type).removeData(this.type)
		}
	})
 /* POPOVER PLUGIN DEFINITION
	* ======================= */
	$.fn.popover = function (option) {
		return this.each(function () {
			var $this = $(this)
				, data = $this.data('popover')
				, options = typeof option == 'object' && option
			if (!data) $this.data('popover', (data = new Popover(this, options)))
			if (typeof option == 'string') data[option]()
		})
	}
	$.fn.popover.Constructor = Popover
	$.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
		placement: 'right'
	, trigger: 'click'
	, content: ''
	, template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
	})
}(window.jQuery);
/* ==========================================================
 * bootstrap-affix.js v2.1.1
 * http://twitter.github.com/bootstrap/javascript.html#affix
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function ($) {
	"use strict"; // jshint ;_;
 /* AFFIX CLASS DEFINITION
	* ====================== */
	var Affix = function (element, options) {
		this.options = $.extend({}, $.fn.affix.defaults, options)
		this.$window = $(window).on('scroll.affix.data-api', $.proxy(this.checkPosition, this))
		this.$element = $(element)
		this.checkPosition()
	}
	Affix.prototype.checkPosition = function () {
		if (!this.$element.is(':visible')) return
		var scrollHeight = $(document).height()
			, scrollTop = this.$window.scrollTop()
			, position = this.$element.offset()
			, offset = this.options.offset
			, offsetBottom = offset.bottom
			, offsetTop = offset.top
			, reset = 'affix affix-top affix-bottom'
			, affix
		if (typeof offset != 'object') offsetBottom = offsetTop = offset
		if (typeof offsetTop == 'function') offsetTop = offset.top()
		if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()
		affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ?
			false    : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ?
			'bottom' : offsetTop != null && scrollTop <= offsetTop ?
			'top'    : false
		if (this.affixed === affix) return
		this.affixed = affix
		this.unpin = affix == 'bottom' ? position.top - scrollTop : null
		this.$element.removeClass(reset).addClass('affix' + (affix ? '-' + affix : ''))
	}
 /* AFFIX PLUGIN DEFINITION
	* ======================= */
	$.fn.affix = function (option) {
		return this.each(function () {
			var $this = $(this)
				, data = $this.data('affix')
				, options = typeof option == 'object' && option
			if (!data) $this.data('affix', (data = new Affix(this, options)))
			if (typeof option == 'string') data[option]()
		})
	}
	$.fn.affix.Constructor = Affix
	$.fn.affix.defaults = {
		offset: 0
	}
 /* AFFIX DATA-API
	* ============== */
/*
	$(window).on('load', function () {
		$('[data-spy="affix"]').each(function () {
			var $spy = $(this)
				, data = $spy.data()
			data.offset = data.offset || {}
			data.offsetBottom && (data.offset.bottom = data.offsetBottom)
			data.offsetTop && (data.offset.top = data.offsetTop)
			$spy.affix(data)
		})
	})
*/
}(window.jQuery);
/* ==========================================================
 * bootstrap-alert.js v2.1.1
 * http://twitter.github.com/bootstrap/javascript.html#alerts
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function ($) {
	"use strict"; // jshint ;_;
 /* ALERT CLASS DEFINITION
	* ====================== */
	var dismiss = '[data-dismiss="alert"]'
		, Alert = function (el) {
				$(el).on('click', dismiss, this.close)
			}
	Alert.prototype.close = function (e) {
		var $this = $(this)
			, selector = $this.attr('data-target')
			, $parent
		if (!selector) {
			selector = $this.attr('href')
			selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
		}
		$parent = $(selector)
		e && e.preventDefault()
		$parent.length || ($parent = $this.hasClass('alert') ? $this : $this.parent())
		$parent.trigger(e = $.Event('close'))
		if (e.isDefaultPrevented()) return
		$parent.removeClass('in')
		function removeElement() {
			$parent
				.trigger('closed')
				.remove()
		}
		$.support.transition && $parent.hasClass('fade') ?
			$parent.on($.support.transition.end, removeElement) :
			removeElement()
	}
 /* ALERT PLUGIN DEFINITION
	* ======================= */
	$.fn.alert = function (option) {
		return this.each(function () {
			var $this = $(this)
				, data = $this.data('alert')
			if (!data) $this.data('alert', (data = new Alert(this)))
			if (typeof option == 'string') data[option].call($this)
		})
	}
	$.fn.alert.Constructor = Alert
 /* ALERT DATA-API
	* ============== */
/*
	$(function () {
		$('body').on('click.alert.data-api', dismiss, Alert.prototype.close)
	})
*/
}(window.jQuery);
/* ============================================================
 * bootstrap-button.js v2.1.1
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
!function ($) {
	"use strict"; // jshint ;_;
 /* BUTTON PUBLIC CLASS DEFINITION
	* ============================== */
	var Button = function (element, options) {
		this.$element = $(element)
		this.options = $.extend({}, $.fn.button.defaults, options)
	}
	Button.prototype.setState = function (state) {
		var d = 'disabled'
			, $el = this.$element
			, data = $el.data()
			, val = $el.is('input') ? 'val' : 'html'
		state = state + 'Text'
		data.resetText || $el.data('resetText', $el[val]())
		$el[val](data[state] || this.options[state])
		// push to event loop to allow forms to submit
		setTimeout(function () {
			state == 'loadingText' ?
				$el.addClass(d).attr(d, d) :
				$el.removeClass(d).removeAttr(d)
		}, 0)
	}
	Button.prototype.toggle = function () {
		var $parent = this.$element.closest('[data-toggle="buttons-radio"]')
		$parent && $parent
			.find('.active')
			.removeClass('active')
		this.$element.toggleClass('active')
	}
 /* BUTTON PLUGIN DEFINITION
	* ======================== */
	$.fn.button = function (option) {
		return this.each(function () {
			var $this = $(this)
				, data = $this.data('button')
				, options = typeof option == 'object' && option
			if (!data) $this.data('button', (data = new Button(this, options)))
			if (option == 'toggle') data.toggle()
			else if (option) data.setState(option)
		})
	}
	$.fn.button.defaults = {
		loadingText: 'loading...'
	}
	$.fn.button.Constructor = Button
 /* BUTTON DATA-API
	* =============== */
/*
	$(function () {
		$('body').on('click.button.data-api', '[data-toggle^=button]', function ( e ) {
			var $btn = $(e.target)
			if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
			$btn.button('toggle')
		})
	})
*/
}(window.jQuery);
/* =============================================================
 * bootstrap-collapse.js v2.1.1
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
!function ($) {
	"use strict"; // jshint ;_;
 /* COLLAPSE PUBLIC CLASS DEFINITION
	* ================================ */
	var Collapse = function (element, options) {
		this.$element = $(element)
		this.options = $.extend({}, $.fn.collapse.defaults, options)
		if (this.options.parent) {
			this.$parent = $(this.options.parent)
		}
		this.options.toggle && this.toggle()
	}
	Collapse.prototype = {
		constructor: Collapse
	, dimension: function () {
			var hasWidth = this.$element.hasClass('width')
			return hasWidth ? 'width' : 'height'
		}
	, show: function () {
			var dimension
				, scroll
				, actives
				, hasData
			if (this.transitioning) return
			dimension = this.dimension()
			scroll = $.camelCase(['scroll', dimension].join('-'))
			actives = this.$parent && this.$parent.find('> .accordion-group > .in')
			if (actives && actives.length) {
				hasData = actives.data('collapse')
				if (hasData && hasData.transitioning) return
				actives.collapse('hide')
				hasData || actives.data('collapse', null)
			}
			this.$element[dimension](0)
			this.transition('addClass', $.Event('show'), 'shown')
			$.support.transition && this.$element[dimension](this.$element[0][scroll])
		}
	, hide: function () {
			var dimension
			if (this.transitioning) return
			dimension = this.dimension()
			this.reset(this.$element[dimension]())
			this.transition('removeClass', $.Event('hide'), 'hidden')
			this.$element[dimension](0)
		}
	, reset: function (size) {
			var dimension = this.dimension()
			this.$element
				.removeClass('collapse')
				[dimension](size || 'auto')
				[0].offsetWidth
			this.$element[size !== null ? 'addClass' : 'removeClass']('collapse')
			return this
		}
	, transition: function (method, startEvent, completeEvent) {
			var that = this
				, complete = function () {
						if (startEvent.type == 'show') that.reset()
						that.transitioning = 0
						that.$element.trigger(completeEvent)
					}
			this.$element.trigger(startEvent)
			if (startEvent.isDefaultPrevented()) return
			this.transitioning = 1
			this.$element[method]('in')
			$.support.transition && this.$element.hasClass('collapse') ?
				this.$element.one($.support.transition.end, complete) :
				complete()
		}
	, toggle: function () {
			this[this.$element.hasClass('in') ? 'hide' : 'show']()
		}
	}
 /* COLLAPSIBLE PLUGIN DEFINITION
	* ============================== */
	$.fn.collapse = function (option) {
		return this.each(function () {
			var $this = $(this)
				, data = $this.data('collapse')
				, options = typeof option == 'object' && option
			if (!data) $this.data('collapse', (data = new Collapse(this, options)))
			if (typeof option == 'string') data[option]()
		})
	}
	$.fn.collapse.defaults = {
		toggle: true
	}
	$.fn.collapse.Constructor = Collapse
 /* COLLAPSIBLE DATA-API
	* ==================== */
/*
	$(function () {
		$('body').on('click.collapse.data-api', '[data-toggle=collapse]', function (e) {
			var $this = $(this), href
				, target = $this.attr('data-target')
					|| e.preventDefault()
					|| (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
				, option = $(target).data('collapse') ? 'toggle' : $this.data()
			$this[$(target).hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
			$(target).collapse(option)
		})
	})
*/
}(window.jQuery);
/* ==========================================================
 * bootstrap-carousel.js v2.1.1
 * http://twitter.github.com/bootstrap/javascript.html#carousel
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function ($) {
	"use strict"; // jshint ;_;
 /* CAROUSEL CLASS DEFINITION
	* ========================= */
	var Carousel = function (element, options) {
		this.$element = $(element)
		this.options = options
		this.options.slide && this.slide(this.options.slide)
		this.options.pause == 'hover' && this.$element
			.on('mouseenter', $.proxy(this.pause, this))
			.on('mouseleave', $.proxy(this.cycle, this))
	}
	Carousel.prototype = {
		cycle: function (e) {
			if (!e) this.paused = false
			this.options.interval
				&& !this.paused
				&& (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
			return this
		}
	, to: function (pos) {
			var $active = this.$element.find('.item.active')
				, children = $active.parent().children()
				, activePos = children.index($active)
				, that = this
			if (pos > (children.length - 1) || pos < 0) return
			if (this.sliding) {
				return this.$element.one('slid', function () {
					that.to(pos)
				})
			}
			if (activePos == pos) {
				return this.pause().cycle()
			}
			return this.slide(pos > activePos ? 'next' : 'prev', $(children[pos]))
		}
	, pause: function (e) {
			if (!e) this.paused = true
			if (this.$element.find('.next, .prev').length && $.support.transition.end) {
				this.$element.trigger($.support.transition.end)
				this.cycle()
			}
			clearInterval(this.interval)
			this.interval = null
			return this
		}
	, next: function () {
			if (this.sliding) return
			return this.slide('next')
		}
	, prev: function () {
			if (this.sliding) return
			return this.slide('prev')
		}
	, slide: function (type, next) {
			var $active = this.$element.find('.item.active')
				, $next = next || $active[type]()
				, isCycling = this.interval
				, direction = type == 'next' ? 'left' : 'right'
				, fallback  = type == 'next' ? 'first' : 'last'
				, that = this
				, e = $.Event('slide', {
						relatedTarget: $next[0]
					})
			this.sliding = true
			isCycling && this.pause()
			$next = $next.length ? $next : this.$element.find('.item')[fallback]()
			if ($next.hasClass('active')) return
			if ($.support.transition && this.$element.hasClass('slide')) {
				this.$element.trigger(e)
				if (e.isDefaultPrevented()) return
				$next.addClass(type)
				$next[0].offsetWidth // force reflow
				$active.addClass(direction)
				$next.addClass(direction)
				this.$element.one($.support.transition.end, function () {
					$next.removeClass([type, direction].join(' ')).addClass('active')
					$active.removeClass(['active', direction].join(' '))
					that.sliding = false
					setTimeout(function () { that.$element.trigger('slid') }, 0)
				})
			} else {
				this.$element.trigger(e)
				if (e.isDefaultPrevented()) return
				$active.removeClass('active')
				$next.addClass('active')
				this.sliding = false
				this.$element.trigger('slid')
			}
			isCycling && this.cycle()
			return this
		}
	}
 /* CAROUSEL PLUGIN DEFINITION
	* ========================== */
	$.fn.carousel = function (option) {
		return this.each(function () {
			var $this = $(this)
				, data = $this.data('carousel')
				, options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option)
				, action = typeof option == 'string' ? option : options.slide
			if (!data) $this.data('carousel', (data = new Carousel(this, options)))
			if (typeof option == 'number') data.to(option)
			else if (action) data[action]()
			else if (options.interval) data.cycle()
		})
	}
	$.fn.carousel.defaults = {
		interval: 5000
	, pause: 'hover'
	}
	$.fn.carousel.Constructor = Carousel
 /* CAROUSEL DATA-API
	* ================= */
/*
	$(function () {
		$('body').on('click.carousel.data-api', '[data-slide]', function ( e ) {
			var $this = $(this), href
				, $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
				, options = !$target.data('modal') && $.extend({}, $target.data(), $this.data())
			$target.carousel(options)
			e.preventDefault()
		})
	})
*/
}(window.jQuery);
/* =============================================================
 * bootstrap-typeahead.js v2.1.1
 * http://twitter.github.com/bootstrap/javascript.html#typeahead
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
!function($){
	"use strict"; // jshint ;_;
 /* TYPEAHEAD PUBLIC CLASS DEFINITION
	* ================================= */
	var Typeahead = function (element, options) {
		this.$element = $(element)
		this.options = $.extend({}, $.fn.typeahead.defaults, options)
		this.matcher = this.options.matcher || this.matcher
		this.sorter = this.options.sorter || this.sorter
		this.highlighter = this.options.highlighter || this.highlighter
		this.updater = this.options.updater || this.updater
		//this.$menu = $(this.options.menu).appendTo('body')
		this.$menu = $(this.options.menu).prependTo('body')
		this.$menu.hover(function(e){
			$(this).toggleClass("hovered");
		})
		this.source = this.options.source
		this.shown = false
		this.listen()
	}
	Typeahead.prototype = {
		constructor: Typeahead
	, select: function (bClose) {
			var val = this.$menu.find('.active').attr('data-value')
			if(bClose!==false) {
				this.$element
					.val(this.updater(val))
					.change()
				return this.hide()
			}
			this.$element.val(this.updater(val));
			return this;
		}
	, updater: function (item) {
			return item
		}
	, show: function () {
			var pos = $.extend({}, this.$element.offset(), {
				height: this.$element[0].offsetHeight
			})
			this.$menu.css({
				top: pos.top + pos.height
			, left: pos.left
			})
			this.$menu.show()
			this.shown = true
			return this
		}
	, hide: function () {
			this.$menu.hide()
			this.shown = false
			return this
		}
	, lookup: function (event) {
			var items
			this.query = this.$element.val()
			if (!this.query || this.query.length < this.options.minLength) {
				return this.shown ? this.hide() : this
			}
			items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source
			return items ? this.process(items) : this
		}
	, process: function (items) {
			var that = this
			items = $.grep(items, function (item) {
				return that.matcher(item)
			})
			items = this.sorter(items)
			if (!items.length) {
				return this.shown ? this.hide() : this
			}
			return this.render(items.slice(0, this.options.items)).show()
		}
	, matcher: function (item) {
			return ~item.toLowerCase().indexOf(this.query.toLowerCase())
		}
	, sorter: function (items) {
			var beginswith = []
				, caseSensitive = []
				, caseInsensitive = []
				, item
			while (item = items.shift()) {
				if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
				else if (~item.indexOf(this.query)) caseSensitive.push(item)
				else caseInsensitive.push(item)
			}
			return beginswith.concat(caseSensitive, caseInsensitive)
		}
	, highlighter: function (item) {
			var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
			return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
				return '<strong>' + match + '</strong>'
			})
		}
	, render: function (items) {
			var that = this
			items = $(items).map(function (i, item) {
				i = $(that.options.item).attr('data-value', item)
				i.find('a').html(that.highlighter(item))
				return i[0]
			})
			/**
			 * #0026134 fix
			 * items.first().addClass('active')
			 */
			this.$menu.html(items)
			return this
		}
	, next: function (event) {
			var active = this.$menu.find('.active').removeClass('active')
				, next = active.next()
			if (!next.length) {
				next = $(this.$menu.find('li')[0])
			}
			next.addClass('active');
			/**
			 * #0026134 fix
			 */
			this.select(false);
		}
	, prev: function (event) {
			var active = this.$menu.find('.active').removeClass('active')
				, prev = active.prev()
			if (!prev.length) {
				prev = this.$menu.find('li').last()
			}
			prev.addClass('active');
			/**
			 * #0026134 fix
			 */
			this.select(false);
		}
	, listen: function () {
			this.$element
				.on('blur',     $.proxy(this.blur, this))
				.on('keypress', $.proxy(this.keypress, this))
				.on('keyup',    $.proxy(this.keyup, this))

			if (this.eventSupported('keydown')) {
				this.$element.on('keydown', $.proxy(this.keydown, this))
			}

			this.$menu
				.on('click', $.proxy(this.click, this))
				.on('mouseenter', 'li', $.proxy(this.mouseenter, this))
		}
	, eventSupported: function(eventName) {
			var isSupported = eventName in this.$element
			if (!isSupported) {
				this.$element.setAttribute(eventName, 'return;')
				isSupported = typeof this.$element[eventName] === 'function'
			}
			return isSupported
		}
	, move: function (e) {
			if (!this.shown) return
			switch(e.keyCode) {
				// #0026134 fix case 13: // enter
				case 13: //enter
					return;
					break;
				case 9: // tab
				case 27: // escape
					e.preventDefault()
					break
				case 38: // up arrow
					e.preventDefault()
					this.prev()
					break
				case 40: // down arrow
					e.preventDefault()
					this.next()
					break
			}
			e.stopPropagation()
		}
	, keydown: function (e) {
            this.suppressKeyPressRepeat = ~($.inArray(e.keyCode, [40,38,9,13,27]) === -1)
			this.move(e)
		}
	, keypress: function (e) {
			if (this.suppressKeyPressRepeat) return
			this.move(e)
		}
	, keyup: function (e) {
			switch(e.keyCode) {
				case 40: // down arrow
				case 38: // up arrow
					break
				/**
				 * #0026134 fix
				 * case 9: // tab
				 * case 13: // enter
				 * 	if (!this.shown) return
				 * 	this.select()
				 * 	break
				 */
				case 9: //tab
				case 13: // enter
					if (this.shown) this.hide();
					return
					break;
				case 27: // escape
					if (!this.shown) return
					this.hide()
					break
				default:
					this.lookup()
			}
			e.stopPropagation()
			e.preventDefault()
	}
	//, blur: function (e) {
	//		var that = this
	//		setTimeout(function () { that.hide() }, 150)
	//	}
	, blur: function (e) {
			var that = this
			e.stopPropagation()
			e.preventDefault()
			setTimeout(function () {
				//if (!that.$menu.is(':hover')) {
				if (!that.$menu.hasClass('hovered')) {
					that.hide();
				}
			},150)
		}
	, click: function (e) {
			e.stopPropagation()
			e.preventDefault()
			this.select()
		}
	, mouseenter: function (e) {
			this.$menu.find('.active').removeClass('active')
			$(e.currentTarget).addClass('active')
		}
	}
	/* TYPEAHEAD PLUGIN DEFINITION
	 * =========================== */
	$.fn.typeahead = function (option) {
		return this.each(function () {
			var $this = $(this)
				, data = $this.data('typeahead')
				, options = typeof option == 'object' && option
			if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
			if (typeof option == 'string') data[option]()
		})
	}
	$.fn.typeahead.defaults = {
		source: []
	, items: 8
	, menu: '<ul class="typeahead dropdown-menu"></ul>'
	, item: '<li><a href="#"></a></li>'
	, minLength: 1
	}
	$.fn.typeahead.Constructor = Typeahead
 /*   TYPEAHEAD DATA-API
	* ================== */
/*
	$(function () {
		$('body').on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
			var $this = $(this)
			if ($this.data('typeahead')) return
			e.preventDefault()
			$this.typeahead($this.data())
		})
	})
*/
}(window.jQuery);
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var p="left",o="right",e="up",x="down",c="in",z="out",m="none",s="auto",l="swipe",t="pinch",A="tap",j="doubletap",b="longtap",y="hold",D="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,B="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipe=function(G){var F=f(this),E=F.data(B);if(E&&typeof G==="string"){if(E[G]){return E[G].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+G+" does not exist on jQuery.swipe")}}else{if(!E&&(typeof G==="object"||!G)){return w.apply(this,arguments)}}return F};f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:z};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:D,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(E){if(E&&(E.allowPageScroll===undefined&&(E.swipe!==undefined||E.swipeStatus!==undefined))){E.allowPageScroll=m}if(E.click!==undefined&&E.tap===undefined){E.tap=E.click}if(!E){E={}}E=f.extend({},f.fn.swipe.defaults,E);return this.each(function(){var G=f(this);var F=G.data(B);if(!F){F=new C(this,E);G.data(B,F)}})}function C(a4,av){var az=(a||d||!av.fallbackToMouseEvents),J=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ay=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",U=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",S=az?null:"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,ab=0,a1=0,aZ=0,G=1,aq=0,aJ=0,M=null;var aR=f(a4);var Z="start";var W=0;var aQ=null;var T=0,a2=0,a5=0,ad=0,N=0;var aW=null,af=null;try{aR.bind(J,aN);aR.bind(aD,a9)}catch(ak){f.error("events not supported "+J+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(J,aN);aR.bind(aD,a9);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(B,null);aR=null};this.option=function(bc,bb){if(av[bc]!==undefined){if(bb===undefined){return av[bc]}else{av[bc]=bb}}else{f.error("Option "+bc+" does not exist on jQuery.swipe.options")}return null};function aN(bd){if(aB()){return}if(f(bd.target).closest(av.excludedElements,aR).length>0){return}var be=bd.originalEvent?bd.originalEvent:bd;var bc,bb=a?be.touches[0]:be;Z=g;if(a){W=be.touches.length}else{bd.preventDefault()}ag=0;aP=null;aJ=null;ab=0;a1=0;aZ=0;G=1;aq=0;aQ=aj();M=aa();R();if(!a||(W===av.fingers||av.fingers===i)||aX()){ai(0,bb);T=at();if(W==2){ai(1,be.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}if(av.swipeStatus||av.pinchStatus){bc=O(be,Z)}}else{bc=false}if(bc===false){Z=q;O(be,Z);return bc}else{if(av.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[be.target]);if(av.hold){bc=av.hold.call(aR,be,be.target)}},this),av.longTapThreshold)}ao(true)}return null}function a3(be){var bh=be.originalEvent?be.originalEvent:be;if(Z===h||Z===q||am()){return}var bd,bc=a?bh.touches[0]:bh;var bf=aH(bc);a2=at();if(a){W=bh.touches.length}if(av.hold){clearTimeout(af)}Z=k;if(W==2){if(a1==0){ai(1,bh.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}else{aH(bh.touches[1]);aZ=au(aQ[0].end,aQ[1].end);aJ=ar(aQ[0].end,aQ[1].end)}G=a7(a1,aZ);aq=Math.abs(a1-aZ)}if((W===av.fingers||av.fingers===i)||!a||aX()){aP=aL(bf.start,bf.end);al(be,aP);ag=aS(bf.start,bf.end);ab=aM();aI(aP,ag);if(av.swipeStatus||av.pinchStatus){bd=O(bh,Z)}if(!av.triggerOnTouchEnd||av.triggerOnTouchLeave){var bb=true;if(av.triggerOnTouchLeave){var bg=aY(this);bb=E(bf.end,bg)}if(!av.triggerOnTouchEnd&&bb){Z=aC(k)}else{if(av.triggerOnTouchLeave&&!bb){Z=aC(h)}}if(Z==q||Z==h){O(bh,Z)}}}else{Z=q;O(bh,Z)}if(bd===false){Z=q;O(bh,Z)}}function L(bb){var bc=bb.originalEvent;if(a){if(bc.touches.length>0){F();return true}}if(am()){W=ad}a2=at();ab=aM();if(ba()||!an()){Z=q;O(bc,Z)}else{if(av.triggerOnTouchEnd||(av.triggerOnTouchEnd==false&&Z===k)){bb.preventDefault();Z=h;O(bc,Z)}else{if(!av.triggerOnTouchEnd&&a6()){Z=h;aF(bc,Z,A)}else{if(Z===k){Z=q;O(bc,Z)}}}}ao(false);return null}function a9(){W=0;a2=0;T=0;a1=0;aZ=0;G=1;R();ao(false)}function K(bb){var bc=bb.originalEvent;if(av.triggerOnTouchLeave){Z=aC(h);O(bc,Z)}}function aK(){aR.unbind(J,aN);aR.unbind(aD,a9);aR.unbind(ay,a3);aR.unbind(U,L);if(S){aR.unbind(S,K)}ao(false)}function aC(bf){var be=bf;var bd=aA();var bc=an();var bb=ba();if(!bd||bb){be=q}else{if(bc&&bf==k&&(!av.triggerOnTouchEnd||av.triggerOnTouchLeave)){be=h}else{if(!bc&&bf==h&&av.triggerOnTouchLeave){be=q}}}return be}function O(bd,bb){var bc=undefined;if((I()||V())||(P()||aX())){if(I()||V()){bc=aF(bd,bb,l)}if((P()||aX())&&bc!==false){bc=aF(bd,bb,t)}}else{if(aG()&&bc!==false){bc=aF(bd,bb,j)}else{if(ap()&&bc!==false){bc=aF(bd,bb,b)}else{if(ah()&&bc!==false){bc=aF(bd,bb,A)}}}}if(bb===q){a9(bd)}if(bb===h){if(a){if(bd.touches.length==0){a9(bd)}}else{a9(bd)}}return bc}function aF(be,bb,bd){var bc=undefined;if(bd==l){aR.trigger("swipeStatus",[bb,aP||null,ag||0,ab||0,W,aQ]);if(av.swipeStatus){bc=av.swipeStatus.call(aR,be,bb,aP||null,ag||0,ab||0,W,aQ);if(bc===false){return false}}if(bb==h&&aV()){aR.trigger("swipe",[aP,ag,ab,W,aQ]);if(av.swipe){bc=av.swipe.call(aR,be,aP,ag,ab,W,aQ);if(bc===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ab,W,aQ]);if(av.swipeLeft){bc=av.swipeLeft.call(aR,be,aP,ag,ab,W,aQ)}break;case o:aR.trigger("swipeRight",[aP,ag,ab,W,aQ]);if(av.swipeRight){bc=av.swipeRight.call(aR,be,aP,ag,ab,W,aQ)}break;case e:aR.trigger("swipeUp",[aP,ag,ab,W,aQ]);if(av.swipeUp){bc=av.swipeUp.call(aR,be,aP,ag,ab,W,aQ)}break;case x:aR.trigger("swipeDown",[aP,ag,ab,W,aQ]);if(av.swipeDown){bc=av.swipeDown.call(aR,be,aP,ag,ab,W,aQ)}break}}}if(bd==t){aR.trigger("pinchStatus",[bb,aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchStatus){bc=av.pinchStatus.call(aR,be,bb,aJ||null,aq||0,ab||0,W,G,aQ);if(bc===false){return false}}if(bb==h&&a8()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchIn){bc=av.pinchIn.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break;case z:aR.trigger("pinchOut",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchOut){bc=av.pinchOut.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break}}}if(bd==A){if(bb===q||bb===h){clearTimeout(aW);clearTimeout(af);if(Y()&&!H()){N=at();aW=setTimeout(f.proxy(function(){N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}},this),av.doubleTapThreshold)}else{N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}}}}else{if(bd==j){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("doubletap",[be.target]);if(av.doubleTap){bc=av.doubleTap.call(aR,be,be.target)}}}else{if(bd==b){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("longtap",[be.target]);if(av.longTap){bc=av.longTap.call(aR,be,be.target)}}}}}return bc}function an(){var bb=true;if(av.threshold!==null){bb=ag>=av.threshold}return bb}function ba(){var bb=false;if(av.cancelThreshold!==null&&aP!==null){bb=(aT(aP)-ag)>=av.cancelThreshold}return bb}function ae(){if(av.pinchThreshold!==null){return aq>=av.pinchThreshold}return true}function aA(){var bb;if(av.maxTimeThreshold){if(ab>=av.maxTimeThreshold){bb=false}else{bb=true}}else{bb=true}return bb}function al(bb,bc){if(av.preventDefaultEvents===false){return}if(av.allowPageScroll===m){bb.preventDefault()}else{var bd=av.allowPageScroll===s;switch(bc){case p:if((av.swipeLeft&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case o:if((av.swipeRight&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case e:if((av.swipeUp&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break;case x:if((av.swipeDown&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break}}}function a8(){var bc=aO();var bb=X();var bd=ae();return bc&&bb&&bd}function aX(){return !!(av.pinchStatus||av.pinchIn||av.pinchOut)}function P(){return !!(a8()&&aX())}function aV(){var be=aA();var bg=an();var bd=aO();var bb=X();var bc=ba();var bf=!bc&&bb&&bd&&bg&&be;return bf}function V(){return !!(av.swipe||av.swipeStatus||av.swipeLeft||av.swipeRight||av.swipeUp||av.swipeDown)}function I(){return !!(aV()&&V())}function aO(){return((W===av.fingers||av.fingers===i)||!a)}function X(){return aQ[0].end.x!==0}function a6(){return !!(av.tap)}function Y(){return !!(av.doubleTap)}function aU(){return !!(av.longTap)}function Q(){if(N==null){return false}var bb=at();return(Y()&&((bb-N)<=av.doubleTapThreshold))}function H(){return Q()}function ax(){return((W===1||!a)&&(isNaN(ag)||ag<av.threshold))}function a0(){return((ab>av.longTapThreshold)&&(ag<r))}function ah(){return !!(ax()&&a6())}function aG(){return !!(Q()&&Y())}function ap(){return !!(a0()&&aU())}function F(){a5=at();ad=event.touches.length+1}function R(){a5=0;ad=0}function am(){var bb=false;if(a5){var bc=at()-a5;if(bc<=av.fingerReleaseThreshold){bb=true}}return bb}function aB(){return !!(aR.data(B+"_intouch")===true)}function ao(bb){if(bb===true){aR.bind(ay,a3);aR.bind(U,L);if(S){aR.bind(S,K)}}else{aR.unbind(ay,a3,false);aR.unbind(U,L,false);if(S){aR.unbind(S,K,false)}}aR.data(B+"_intouch",bb===true)}function ai(bc,bb){var bd=bb.identifier!==undefined?bb.identifier:0;aQ[bc].identifier=bd;aQ[bc].start.x=aQ[bc].end.x=bb.pageX||bb.clientX;aQ[bc].start.y=aQ[bc].end.y=bb.pageY||bb.clientY;return aQ[bc]}function aH(bb){var bd=bb.identifier!==undefined?bb.identifier:0;var bc=ac(bd);bc.end.x=bb.pageX||bb.clientX;bc.end.y=bb.pageY||bb.clientY;return bc}function ac(bc){for(var bb=0;bb<aQ.length;bb++){if(aQ[bb].identifier==bc){return aQ[bb]}}}function aj(){var bb=[];for(var bc=0;bc<=5;bc++){bb.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bb}function aI(bb,bc){bc=Math.max(bc,aT(bb));M[bb].distance=bc}function aT(bb){if(M[bb]){return M[bb].distance}return undefined}function aa(){var bb={};bb[p]=aw(p);bb[o]=aw(o);bb[e]=aw(e);bb[x]=aw(x);return bb}function aw(bb){return{direction:bb,distance:0}}function aM(){return a2-T}function au(be,bd){var bc=Math.abs(be.x-bd.x);var bb=Math.abs(be.y-bd.y);return Math.round(Math.sqrt(bc*bc+bb*bb))}function a7(bb,bc){var bd=(bc/bb)*1;return bd.toFixed(2)}function ar(){if(G<1){return z}else{return c}}function aS(bc,bb){return Math.round(Math.sqrt(Math.pow(bb.x-bc.x,2)+Math.pow(bb.y-bc.y,2)))}function aE(be,bc){var bb=be.x-bc.x;var bg=bc.y-be.y;var bd=Math.atan2(bg,bb);var bf=Math.round(bd*180/Math.PI);if(bf<0){bf=360-Math.abs(bf)}return bf}function aL(bc,bb){var bd=aE(bc,bb);if((bd<=45)&&(bd>=0)){return p}else{if((bd<=360)&&(bd>=315)){return p}else{if((bd>=135)&&(bd<=225)){return o}else{if((bd>45)&&(bd<135)){return x}else{return e}}}}}function at(){var bb=new Date();return bb.getTime()}function aY(bb){bb=f(bb);var bd=bb.offset();var bc={left:bd.left,right:bd.left+bb.outerWidth(),top:bd.top,bottom:bd.top+bb.outerHeight()};return bc}function E(bb,bc){return(bb.x>bc.left&&bb.x<bc.right&&bb.y>bc.top&&bb.y<bc.bottom)}}}));
!
function($) {
	"use strict"; // jshint ;_;
/* TABLETAB CLASS DEFINITION
	 * ==================== */
	var TableTab = function(element) {
		this.element = $(element)
	}
	TableTab.prototype = {
		constructor: TableTab,
		show: function() {
			var $this = this.element,
				$tr = $this.closest('tr:not(.dropdown-menu)'),
				selector = $this.attr('data-target'),
				previous, $target, e
				if (!selector) {
					selector = $this.attr('href')
					selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
				}
				if ($this.parent('td').hasClass('active')) return
				previous = $tr.find('.active a').last()[0]
				e = $.Event('show', {
					relatedTarget: previous
				})
				$this.trigger(e)
				if (e.isDefaultPrevented()) return
				$target = $(selector)
				this.activate($this.parent('td'), $tr)
				this.activate($target, $target.parent(), function() {
					$this.trigger({
						type: 'shown',
						relatedTarget: previous
					})
				})
		},
		activate: function(element, container, callback) {
			var $active = container.find('> .active'),
				transition = callback && $.support.transition && $active.hasClass('fade')

				function next() {
					$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active')
					element.addClass('active')
					if (transition) {
						element[0].offsetWidth // reflow for transition
						element.addClass('in')
					} else {
						element.removeClass('fade')
					}
					if (element.parent('.dropdown-menu')) {
						element.closest('td.dropdown').addClass('active')
					}
					callback && callback()
				}
				transition ? $active.one($.support.transition.end, next) : next()
				$active.removeClass('in')
		}
	}
/* TABLETAB PLUGIN DEFINITION
	* ===================== */
	$.fn.tabletab = function(option) {
		return this.each(function() {
			var $this = $(this),
				data = $this.data('tabletab')
				if (!data) $this.data('tabletab', (data = new TableTab(this)))
				if (typeof option == 'string') data[option]()
		})
	}
	$.fn.tab.Constructor = TableTab
/* TABLETAB DATA-API
	* ============ */
/*
	$(function () {
		$('body').on('click.tabletab.data-api', '[data-toggle="tabletab"], [data-toggle="tablepill"]', function (e) {
			e.preventDefault()
			$(this).tabletab('show')
		})
	})
*/


}(window.jQuery);

/*!
 * bootstrap-select v1.4.2
 * http://silviomoreto.github.io/bootstrap-select/
 *
 * Copyright 2013 bootstrap-select
 * Licensed under the MIT license
 */

!function($) {

	'use strict';

	$.expr[':'].icontains = function(obj, index, meta) {
		return $(obj).text().toUpperCase().indexOf(meta[3].toUpperCase()) >= 0;
	};
	var inited=false;
	var Selectpicker = function(element, options, e) {
		if (e) {
			e.stopPropagation();
			e.preventDefault();
		}
		this.$element = $(element);
		this.$newElement = null;
		this.$button = null;
		this.$menu = null;

		//Merge defaults, options and data-attributes to make our options
		this.options = $.extend({}, $.fn.selectpicker.defaults, this.$element.data(), typeof options == 'object' && options);

		//If we have no title yet, check the attribute 'title' (this is missed by jq as its not a data-attribute
		if (this.options.title === null) {
			this.options.title = this.$element.attr('title');
		}

		//Expose public methods
		this.val = Selectpicker.prototype.val;
		this.render = Selectpicker.prototype.render;
		this.refresh = Selectpicker.prototype.refresh;
		this.setStyle = Selectpicker.prototype.setStyle;
		this.selectAll = Selectpicker.prototype.selectAll;
		this.deselectAll = Selectpicker.prototype.deselectAll;
		this.init();
	};

	Selectpicker.prototype = {

		constructor: Selectpicker,

		init: function() {
			this.$element.hide();
			this.multiple = this.$element.prop('multiple');
			var id = this.$element.attr('id');
			this.$newElement = this.createView();
			this.$element.after(this.$newElement);
			this.$menu = this.$newElement.find('> .dropdown-menu');
			this.$button = this.$newElement.find('> button');
			this.$searchbox = this.$newElement.find('input');

			if (id !== undefined) {
				var that = this;
				this.$button.attr('data-id', id);
				$('label[for="' + id + '"]').click(function(e) {
					e.preventDefault();
					that.$button.focus();
				});
			}

			this.checkDisabled();
			this.clickListener();
			if (this.options.liveSearch) {
				this.liveSearchListener();
			}
			this.render();
			this.liHeight();
			this.setStyle();
			this.setWidth();
			if (this.options.container) {
				this.selectPosition();
			}
			this.$menu.data('this', this);
			this.$newElement.data('this', this);
		},

		createDropdown: function() {
			//If we are multiple, then add the show-tick class by default
			var multiple = this.multiple ? ' show-tick' : '';
			var header = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + '</div>' : '';
			var searchbox = this.options.liveSearch ? '<div class="bootstrap-select-searchbox"><input type="text" class="input-block-level form-control" /></div>' : '';
			var drop =
				'<div class="btn-group bootstrap-select' + multiple + '">' +
					'<button type="button" class="btn dropdown-toggle selectpicker" data-toggle="dropdown">' +
						'<span class="filter-option pull-left"></span>&nbsp;' +
						'<span class="caret"></span>' +
					'</button>' +
					'<div class="dropdown-menu open">' +
						header +
						searchbox +
						'<ul class="dropdown-menu inner selectpicker" role="menu">' +
						'</ul>' +
					'</div>' +
				'</div>';

			return $(drop);
		},

		createView: function() {
			var $drop = this.createDropdown();
			var $li = this.createLi();
			$drop.find('ul').append($li);
			return $drop;
		},

		reloadLi: function() {
			//Remove all children.
			this.destroyLi();
			//Re build
			var $li = this.createLi();
			this.$menu.find('ul').append( $li );
		},

		destroyLi: function() {
			this.$menu.find('li').remove();
		},

		createLi: function() {
			var that = this,
				_liA = [],
				_liHtml = '';

			this.$element.find('option').each(function() {
				var $this = $(this);

				//Get the class and text for the option
				var optionClass = $this.attr('class') || '';
				var inline = $this.attr('style') || '';
				var text =  $this.data('content') ? $this.data('content') : $this.html();
				var subtext = $this.data('subtext') !== undefined ? '<small class="muted text-muted">' + $this.data('subtext') + '</small>' : '';
				var icon = $this.data('icon') !== undefined ? '<i class="' + that.options.iconBase + ' ' + $this.data('icon') + '"></i>&nbsp;' : '';
				if (icon !== '' && ($this.is(':disabled') || $this.parent().is(':disabled'))) {
					icon = '<span>'+icon+'</span>';
				}

				if (!$this.data('content')) {
					//Prepend any icon and append any subtext to the main text.
					text = icon + '<span class="text">' + text + subtext + '</span>';
				}

				if (that.options.hideDisabled && ($this.is(':disabled') || $this.parent().is(':disabled'))) {
					_liA.push('<a style="min-height: 0; padding: 0"></a>');
				} else if ($this.parent().is('optgroup') && $this.data('divider') !== true) {
					if ($this.index() === 0) {
						//Get the opt group label
						var label = $this.parent().attr('label');
						var labelSubtext = $this.parent().data('subtext') !== undefined ? '<small class="muted text-muted">'+$this.parent().data('subtext')+'</small>' : '';
						var labelIcon = $this.parent().data('icon') ? '<i class="'+$this.parent().data('icon')+'"></i>&nbsp;' : '';
						label = labelIcon + '<span class="text">' + label + labelSubtext + '</span>';

						if ($this[0].index !== 0) {
							_liA.push(
								'<div class="div-contain"><div class="divider"></div></div>'+
								'<dt>'+label+'</dt>'+
								that.createA(text, 'opt ' + optionClass, inline )
								);
						} else {
							_liA.push(
								'<dt>'+label+'</dt>'+
								that.createA(text, 'opt ' + optionClass, inline ));
						}
					} else {
						 _liA.push(that.createA(text, 'opt ' + optionClass, inline ));
					}
				} else if ($this.data('divider') === true) {
					_liA.push('<div class="div-contain"><div class="divider"></div></div>');
				} else if ($(this).data('hidden') === true) {
					_liA.push('');
				} else {
					_liA.push(that.createA(text, optionClass, inline ));
				}
			});

			$.each(_liA, function(i, item) {
				_liHtml += '<li rel=' + i + '>' + item + '</li>';
			});

			//If we are not multiple, and we dont have a selected item, and we dont have a title, select the first element so something is set in the button
			if (!this.multiple && this.$element.find('option:selected').length===0 && !this.options.title) {
				this.$element.find('option').eq(0).prop('selected', true).attr('selected', 'selected');
			}

			return $(_liHtml);
		},

		createA: function(text, classes, inline) {
			return '<a tabindex="0" class="'+classes+'" style="'+inline+'">' +
				 text +
				 '<i class="' + this.options.iconBase + ' ' + this.options.tickIcon + ' icon-ok check-mark"></i>' +
				 '</a>';
		},

		render: function() {
			var that = this;

			//Update the LI to match the SELECT
			this.$element.find('option').each(function(index) {
			   that.setDisabled(index, $(this).is(':disabled') || $(this).parent().is(':disabled') );
			   that.setSelected(index, $(this).is(':selected') );
			});

			this.tabIndex();

			var selectedItems = this.$element.find('option:selected').map(function() {
				var $this = $(this);
				var icon = $this.data('icon') && that.options.showIcon ? '<i class="' + that.options.iconBase + ' ' + $this.data('icon') + '"></i>&nbsp;' : '';   // To do ie7 icon bug fix
				var subtext;
				if (that.options.showSubtext && $this.attr('data-subtext') && !that.multiple) {
					subtext = ' <small class="muted text-muted">'+$this.data('subtext') +'</small>';
				} else {
					subtext = '';
				}
				if ($this.data('content') && that.options.showContent) {
					return $this.data('content');
				} else if ($this.attr('title') !== undefined) {
					return $this.attr('title');
				} else {
					return icon + $this.html() + subtext;
				}
			}).toArray();

			//Fixes issue in IE10 occurring when no default option is selected and at least one option is disabled
			//Convert all the values into a comma delimited string
			var title = !this.multiple ? selectedItems[0] : selectedItems.join(this.options.multipleSeparator);

			//If this is multi select, and the selectText type is count, the show 1 of 2 selected etc..
			if (this.multiple && this.options.selectedTextFormat.indexOf('count') > -1) {
				var max = this.options.selectedTextFormat.split('>');
				var notDisabled = this.options.hideDisabled ? ':not([disabled])' : '';
				if ( (max.length>1 && selectedItems.length > max[1]) || (max.length==1 && selectedItems.length>=2)) {
					title = this.options.countSelectedText.replace('{0}', selectedItems.length).replace('{1}', this.$element.find('option:not([data-divider="true"]):not([data-hidden="true"])'+notDisabled).length);
				}
			 }

			//If we dont have a title, then use the default, or if nothing is set at all, use the not selected text
			if (!title) {
				title = this.options.title !== undefined ? this.options.title : this.options.noneSelectedText;
			}

			this.$button.attr('title', $.trim(title));
			this.$newElement.find('.filter-option').html(title);
		},

		setStyle: function(style, status) {
			if (this.$element.attr('class')) {
				this.$newElement.addClass(this.$element.attr('class').replace(/selectpicker|mobile-device/gi, ''));
			}

			var buttonClass = style ? style : this.options.style;

			if (status == 'add') {
				this.$button.addClass(buttonClass);
			} else if (status == 'remove') {
				this.$button.removeClass(buttonClass);
			} else {
				this.$button.removeClass(this.options.style);
				this.$button.addClass(buttonClass);
			}
		},

		liHeight: function() {
			var $selectClone = this.$menu.parent().clone().appendTo('body'),
				$menuClone = $selectClone.addClass('open').find('> .dropdown-menu'),
				liHeight = $menuClone.find('li > a').outerHeight(),
				headerHeight = this.options.header ? $menuClone.find('.popover-title').outerHeight() : 0,
				searchHeight = this.options.liveSearch ? $menuClone.find('.bootstrap-select-searchbox').outerHeight() : 0;
			
			$selectClone.remove();
			
			this.$newElement
				.data('liHeight', liHeight)
				.data('headerHeight', headerHeight)
				.data('searchHeight', searchHeight);
		},

		setSize: function() {
			var that = this,
				menu = this.$menu,
				menuInner = menu.find('.inner'),
				selectHeight = this.$newElement.outerHeight(),
				liHeight = this.$newElement.data('liHeight'),
				headerHeight = this.$newElement.data('headerHeight'),
				searchHeight = this.$newElement.data('searchHeight'),
				divHeight = menu.find('li .divider').outerHeight(true),
				menuPadding = parseInt(menu.css('padding-top')) +
							  parseInt(menu.css('padding-bottom')) +
							  parseInt(menu.css('border-top-width')) +
							  parseInt(menu.css('border-bottom-width')),
				notDisabled = this.options.hideDisabled ? ':not(.disabled)' : '',
				$window = $(window),
				menuExtras = menuPadding + parseInt(menu.css('margin-top')) + parseInt(menu.css('margin-bottom')) + 2,
				menuHeight,
				selectOffsetTop,
				selectOffsetBot,
				posVert = function() {
					selectOffsetTop = that.$newElement.offset().top - $window.scrollTop();
					selectOffsetBot = $window.height() - selectOffsetTop - selectHeight;
				};
				posVert();
				if (this.options.header) menu.css('padding-top', 0);

			if (this.options.size == 'auto') {
				var getSize = function() {
					var minHeight;
					posVert();
					menuHeight = selectOffsetBot - menuExtras;
					if (that.options.dropupAuto) {
						that.$newElement.toggleClass('dropup', (selectOffsetTop > selectOffsetBot) && ((menuHeight - menuExtras) < menu.height()));
					}
					if (that.$newElement.hasClass('dropup')) {
						menuHeight = selectOffsetTop - menuExtras;
					}
					if ((menu.find('li').length + menu.find('dt').length) > 3) {
						minHeight = liHeight*3 + menuExtras - 2;
					} else {
						minHeight = 0;
					}
					menu.css({'max-height' : menuHeight + 'px', 'overflow' : 'hidden', 'min-height' : minHeight + 'px'});
					menuInner.css({'max-height' : menuHeight - headerHeight - searchHeight- menuPadding + 'px', 'overflow-y' : 'auto', 'min-height' : minHeight - menuPadding + 'px'});
				};
				getSize();
				$(window).resize(getSize);
				$(window).scroll(getSize);
			} else if (this.options.size && this.options.size != 'auto' && menu.find('li'+notDisabled).length > this.options.size) {
				var optIndex = menu.find('li'+notDisabled+' > *').filter(':not(.div-contain)').slice(0,this.options.size).last().parent().index();
				var divLength = menu.find('li').slice(0,optIndex + 1).find('.div-contain').length;
				menuHeight = liHeight*this.options.size + divLength*divHeight + menuPadding;
				if (that.options.dropupAuto) {
					this.$newElement.toggleClass('dropup', (selectOffsetTop > selectOffsetBot) && (menuHeight < menu.height()));
				}
				menu.css({'max-height' : menuHeight + headerHeight + searchHeight + 'px', 'overflow' : 'hidden'});
				menuInner.css({'max-height' : menuHeight - menuPadding + 'px', 'overflow-y' : 'auto'});
			}
		},

		setWidth: function() {
			if (this.options.width == 'auto') {
				this.$menu.css('min-width', '0');

				// Get correct width if element hidden
				var selectClone = this.$newElement.clone().appendTo('body');
				var ulWidth = selectClone.find('> .dropdown-menu').css('width');
				selectClone.remove();

				this.$newElement.css('width', ulWidth);
			} else if (this.options.width == 'fit') {
				// Remove inline min-width so width can be changed from 'auto'
				this.$menu.css('min-width', '');
				this.$newElement.css('width', '').addClass('fit-width');
			} else if (this.options.width) {
				// Remove inline min-width so width can be changed from 'auto'
				this.$menu.css('min-width', '');
				this.$newElement.css('width', this.options.width);
			} else {
				// Remove inline min-width/width so width can be changed
				this.$menu.css('min-width', '');
				this.$newElement.css('width', '');
			}
			// Remove fit-width class if width is changed programmatically
			if (this.$newElement.hasClass('fit-width') && this.options.width !== 'fit') {
				this.$newElement.removeClass('fit-width');
			}
		},

		selectPosition: function() {
			var that = this,
				drop = '<div />',
				$drop = $(drop),
				pos,
				actualHeight,
				getPlacement = function($element) {
					$drop.addClass($element.attr('class')).toggleClass('dropup', $element.hasClass('dropup'));
					pos = $element.offset();
					actualHeight = $element.hasClass('dropup') ? 0 : $element[0].offsetHeight;
					$drop.css({'top' : pos.top + actualHeight, 'left' : pos.left, 'width' : $element[0].offsetWidth, 'position' : 'absolute'});
				};
			this.$newElement.on('click', function() {
				getPlacement($(this));
				$drop.appendTo(that.options.container);
				$drop.toggleClass('open', !$(this).hasClass('open'));
				$drop.append(that.$menu);
			});
			$(window).resize(function() {
				getPlacement(that.$newElement);
			});
			$(window).on('scroll', function() {
				getPlacement(that.$newElement);
			});
			$('html').on('click', function(e) {
				if ($(e.target).closest(that.$newElement).length < 1) {
					$drop.removeClass('open');
				}
			});
		},

		mobile: function() {
			this.$element.addClass('mobile-device').appendTo(this.$newElement);
			if (this.options.container) this.$menu.hide();
		},

		refresh: function() {
			this.reloadLi();
			this.render();
			this.setWidth();
			this.setStyle();
			this.checkDisabled();
			this.liHeight();
		},
		
		update: function() {
			this.reloadLi();
			this.setWidth();
			this.setStyle();
			this.checkDisabled();
			this.liHeight();
		},

		setSelected: function(index, selected) {
			this.$menu.find('li').eq(index).toggleClass('selected', selected);
		},

		setDisabled: function(index, disabled) {
			if (disabled) {
				this.$menu.find('li').eq(index).addClass('disabled').find('a').attr('href', '#').attr('tabindex', -1);
			} else {
				this.$menu.find('li').eq(index).removeClass('disabled').find('a').removeAttr('href').attr('tabindex', 0);
			}
		},

		isDisabled: function() {
			return this.$element.is(':disabled');
		},

		checkDisabled: function() {
			var that = this;

			if (this.isDisabled()) {
				this.$button.addClass('disabled').attr('tabindex', -1);
			} else {
				if (this.$button.hasClass('disabled')) {
					this.$button.removeClass('disabled');
				}

				if (this.$button.attr('tabindex') == -1) {
					if (!this.$element.data('tabindex')) this.$button.removeAttr('tabindex');
				}
			}

			this.$button.click(function() {
				return !that.isDisabled();
			});
		},

		tabIndex: function() {
			if (this.$element.is('[tabindex]')) {
				this.$element.data('tabindex', this.$element.attr('tabindex'));
				this.$button.attr('tabindex', this.$element.data('tabindex'));
			}
		},

		clickListener: function() {
			var that = this;

			$('body').on('touchstart.dropdown', '.dropdown-menu', function(e) {
				e.stopPropagation();
			});

			this.$newElement.on('click', function() {
				that.setSize();
				if (!that.options.liveSearch && !that.multiple) {
					setTimeout(function() {
						that.$menu.find('.selected a').focus();
					}, 10);
				}
			});

			this.$menu.on('click', 'li a', function(e) {
				var clickedIndex = $(this).parent().index(),
					prevValue = that.$element.val(),
					prevIndex = that.$element.prop('selectedIndex');

				//Dont close on multi choice menu
				if (that.multiple) {
					e.stopPropagation();
				}

				e.preventDefault();

				//Dont run if we have been disabled
				if (!that.isDisabled() && !$(this).parent().hasClass('disabled')) {
					var $options = that.$element.find('option');
					var $option = $options.eq(clickedIndex);

					//Deselect all others if not multi select box
					if (!that.multiple) {
						$options.prop('selected', false);
						$option.prop('selected', true);
					}
					//Else toggle the one we have chosen if we are multi select.
					else {
						var state = $option.prop('selected');

						$option.prop('selected', !state);
					}

					if (!that.multiple) {
						that.$button.focus();
					} else if (that.options.liveSearch) {
						that.$searchbox.focus();
					}

					// Trigger select 'change'
					if ((prevValue != that.$element.val() && that.multiple) || (prevIndex != that.$element.prop('selectedIndex') && !that.multiple)) {
						that.$element.change();
					}
				}
			});

			this.$menu.on('click', 'li.disabled a, li dt, li .div-contain, .popover-title, .popover-title :not(.close)', function(e) {
				if (e.target == this) {
					e.preventDefault();
					e.stopPropagation();
					if (!that.options.liveSearch) {
						that.$button.focus();
					} else {
						that.$searchbox.focus();
					}
				}
			});
			
			this.$menu.on('click', '.popover-title .close', function() {
				that.$button.focus();
			});

			this.$searchbox.on('click', function(e) {
				e.stopPropagation();
			});

			this.$element.change(function() {
				that.render();
			});
		},

		liveSearchListener: function() {
			var that = this,
				no_results = $('<li class="no-results"></li>');

			this.$newElement.on('click.dropdown.data-api', function() {
				that.$menu.find('.active').removeClass('active');
				if (!!that.$searchbox.val()) {
					that.$searchbox.val('');
					that.$menu.find('li').show();
					if (!!no_results.parent().length) no_results.remove();
				}
				if (!that.multiple) that.$menu.find('.selected').addClass('active');
				setTimeout(function() {
					that.$searchbox.focus();
				}, 10);
			});

			this.$searchbox.on('input propertychange', function() {
				if (that.$searchbox.val()) {
					that.$menu.find('li').show().not(':icontains(' + that.$searchbox.val() + ')').hide();
					
					if (!that.$menu.find('li').filter(':visible:not(.no-results)').length) {
						if (!!no_results.parent().length) no_results.remove();
						no_results.html('No results match "'+ that.$searchbox.val() + '"').show();
						that.$menu.find('li').last().after(no_results);
					} else if (!!no_results.parent().length) {
						no_results.remove();
					}
					
				} else {
					that.$menu.find('li').show();
					if (!!no_results.parent().length) no_results.remove();
				}

				that.$menu.find('li.active').removeClass('active');
				that.$menu.find('li').filter(':visible:not(.divider)').eq(0).addClass('active').find('a').focus();
				$(this).focus();
			});
			
			this.$menu.on('mouseenter', 'a', function(e) {
			  that.$menu.find('.active').removeClass('active');
			  $(e.currentTarget).parent().not('.disabled').addClass('active');
			});
			
			this.$menu.on('mouseleave', 'a', function() {
			  that.$menu.find('.active').removeClass('active');
			});
		},

		val: function(value) {

			if (value !== undefined) {
				this.$element.val( value );

				this.$element.change();
				return this.$element;
			} else {
				return this.$element.val();
			}
		},

		selectAll: function() {
			this.$element.find('option').prop('selected', true).attr('selected', 'selected');
			this.render();
		},

		deselectAll: function() {
			this.$element.find('option').prop('selected', false).removeAttr('selected');
			this.render();
		},

		keydown: function(e) {
			var $this,
				$items,
				$parent,
				index,
				next,
				first,
				last,
				prev,
				nextPrev,
				that,
				prevIndex,
				isActive,
				keyCodeMap = {
					32:' ', 48:'0', 49:'1', 50:'2', 51:'3', 52:'4', 53:'5', 54:'6', 55:'7', 56:'8', 57:'9', 59:';',
					65:'a', 66:'b', 67:'c', 68:'d', 69:'e', 70:'f', 71:'g', 72:'h', 73:'i', 74:'j', 75:'k', 76:'l',
					77:'m', 78:'n', 79:'o', 80:'p', 81:'q', 82:'r', 83:'s', 84:'t', 85:'u', 86:'v', 87:'w', 88:'x',
					89:'y', 90:'z', 96:'0', 97:'1', 98:'2', 99:'3', 100:'4', 101:'5', 102:'6', 103:'7', 104:'8', 105:'9'
				};

			$this = $(this);

			$parent = $this.parent();
			
			if ($this.is('input')) $parent = $this.parent().parent();

			that = $parent.data('this');
			
			if (that.options.liveSearch) $parent = $this.parent().parent();

			if (that.options.container) $parent = that.$menu;

			$items = $('[role=menu] li:not(.divider) a', $parent);
			
			isActive = that.$menu.parent().hasClass('open');
			
			if (that.options.liveSearch) {
				if (/(^9$|27)/.test(e.keyCode) && isActive && that.$menu.find('.active').length === 0) {
					e.preventDefault();
					that.$menu.parent().removeClass('open');
					that.$button.focus();
				}
				$items = $('[role=menu] li:not(.divider):visible', $parent);
				if (!$this.val() && !/(38|40)/.test(e.keyCode)) {
					if ($items.filter('.active').length === 0) {
						$items = that.$newElement.find('li').filter(':icontains(' + keyCodeMap[e.keyCode] + ')');
					}
				}
			}

			if (!$items.length) return;

			if (/(38|40)/.test(e.keyCode)) {
				
				if (!isActive) {
					that.$menu.parent().addClass('open');
				}
				
				index = $items.index($items.filter(':focus'));
				first = $items.parent(':not(.disabled):visible').first().index();
				last = $items.parent(':not(.disabled):visible').last().index();
				next = $items.eq(index).parent().nextAll(':not(.disabled):visible').eq(0).index();
				prev = $items.eq(index).parent().prevAll(':not(.disabled):visible').eq(0).index();
				nextPrev = $items.eq(next).parent().prevAll(':not(.disabled):visible').eq(0).index();
				
				if (that.options.liveSearch) {
					$items.each(function(i) {
						if ($(this).is(':not(.disabled)')) {
							$(this).data('index', i);
						}
					});
					index = $items.index($items.filter('.active'));
					first = $items.filter(':not(.disabled):visible').first().data('index');
					last = $items.filter(':not(.disabled):visible').last().data('index');
					next = $items.eq(index).nextAll(':not(.disabled):visible').eq(0).data('index');
					prev = $items.eq(index).prevAll(':not(.disabled):visible').eq(0).data('index');
					nextPrev = $items.eq(next).prevAll(':not(.disabled):visible').eq(0).data('index');
				}
				
				prevIndex = $this.data('prevIndex');
				
				if (e.keyCode == 38) {
					if (that.options.liveSearch) index -= 1;
					if (index != nextPrev && index > prev) index = prev;
					if (index < first) index = first;
					if (index == prevIndex) index = last;
				}

				if (e.keyCode == 40) {
					if (that.options.liveSearch) index += 1;
					if (index == -1) index = 0;
					if (index != nextPrev && index < next) index = next;
					if (index > last) index = last;
					if (index == prevIndex) index = first;
				}

				$this.data('prevIndex', index);
				
				if (!that.options.liveSearch) {
					$items.eq(index).focus();
				} else {
					e.preventDefault();
					if (!$this.is('.dropdown-toggle')) {
						$items.removeClass('active');
						$items.eq(index).addClass('active').find('a').focus();
						$this.focus();
					}
				}
				
			} else if (!$this.is('input')) {

				var keyIndex = [],
					count,
					prevKey;

				$items.each(function() {
					if ($(this).parent().is(':not(.disabled)')) {
						if ($.trim($(this).text().toLowerCase()).substring(0,1) == keyCodeMap[e.keyCode]) {
							keyIndex.push($(this).parent().index());
						}
					}
				});

				count = $(document).data('keycount');
				count++;
				$(document).data('keycount',count);

				prevKey = $.trim($(':focus').text().toLowerCase()).substring(0,1);

				if (prevKey != keyCodeMap[e.keyCode]) {
					count = 1;
					$(document).data('keycount', count);
				} else if (count >= keyIndex.length) {
					$(document).data('keycount', 0);
					if (count > keyIndex.length) count = 1;
				}

				$items.eq(keyIndex[count - 1]).focus();
			}

			// Select focused option if "Enter", "Spacebar", "Tab" are pressed inside the menu.
			if (/(13|32|^9$)/.test(e.keyCode) && isActive) {
				if (!/(32)/.test(e.keyCode)) e.preventDefault();
				if (!that.options.liveSearch) {
					$(':focus').click();
				} else if (!/(32)/.test(e.keyCode)) {
					that.$menu.find('.active a').click();
					$this.focus();
				}
				$(document).data('keycount',0);
			}
			
			if ((/(^9$|27)/.test(e.keyCode) && isActive && (that.multiple || that.options.liveSearch)) || (/(27)/.test(e.keyCode) && !isActive)) {
				that.$menu.parent().removeClass('open');
				that.$button.focus();
			}

		},

		hide: function() {
			this.$newElement.hide();
		},

		show: function() {
			this.$newElement.show();
		},

		destroy: function() {
			this.$newElement.remove();
			this.$element.remove();
		}
	};
	$.fn.selectpicker = function(option, event) {
	   //get the args of the outer function..
		if (!inited) {
			$(document)
			.data('keycount', 0)
			.on('keydown', '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input', Selectpicker.prototype.keydown)
			.on('keydown.dropdown.data-api touchstart.dropdown.data-api', '.bootstrap-select [role=menu]', $.fn.dropdown.Constructor.prototype.keydown)
			.on('focusin.modal', '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input', function (e) { e.stopPropagation(); });
			inited=true;
		}
	   var args = arguments;
	   var value;
	   var chain = this.each(function() {
			if ($(this).is('select')) {
				var $this = $(this),
					data = $this.data('selectpicker'),
					options = typeof option == 'object' && option;

				if (!data) {
					$this.data('selectpicker', (data = new Selectpicker(this, options, event)));
				} else if (options) {
					for(var i in options) {
					   data.options[i] = options[i];
					}
				}

				if (typeof option == 'string') {
					//Copy the value of option, as once we shift the arguments
					//it also shifts the value of option.
					var property = option;
					if (data[property] instanceof Function) {
						[].shift.apply(args);
						value = data[property].apply(data, args);
					} else {
						value = data.options[property];
					}
				}
			}
		});

		if (value !== undefined) {
			return value;
		} else {
			return chain;
		}
	};

	$.fn.selectpicker.defaults = {
		style: 'btn-default',
		size: 'auto',
		title: null,
		selectedTextFormat : 'values',
		noneSelectedText : 'Ничего не выбрано',
		countSelectedText: 'выбрано {0} из {1}',
		width: false,
		container: false,
		hideDisabled: false,
		showSubtext: false,
		showIcon: true,
		showContent: true,
		dropupAuto: true,
		header: false,
		liveSearch: false,
		multipleSeparator: ', ',
		iconBase: 'b-icon',
		tickIcon: 'icon-success-dark'
	};

}(window.jQuery);
if(!Array.prototype.indexOf){
	Array.prototype.indexOf = function(searchElement /*, fromIndex */ ){
		"use strict";
		if(this == null){
			throw new TypeError();
		}
		var t = Object(this);
		var len = t.length >>> 0;
		if(len === 0){
			return -1;
		}
		var n = 0;
		if(arguments.length > 1){
			n = Number(arguments[1]);
			if(n != n){ // shortcut for verifying if it's NaN
				n = 0;
			} else if(n != 0 && n != Infinity && n != -Infinity){
				n = (n > 0 || -1) * Math.floor(Math.abs(n));
			}
		}
		if(n >= len){
			return -1;
		}
		var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
		for (; k < len; k++){
			if(k in t && t[k] === searchElement){
				return k;
			}
		}
		return -1;
	}
}

if(!Array.prototype.filter){
	Array.prototype.filter = function(fun /*, thisp */ ){
		"use strict";

		if(this == null) throw new TypeError();

		var t = Object(this);
		var len = t.length >>> 0;
		if(typeof fun != "function") throw new TypeError();

		var res = [];
		var thisp = arguments[1];
		for (var i = 0; i < len; i++){
			if(i in t){
				var val = t[i]; // in case fun mutates this
				if(fun.call(thisp, val, i, t)) res.push(val);
			}
		}

		return res;
	};
}
if(!Array.prototype.diff){
	Array.prototype.diff = function(a){
		return this.filter(function(i){ return !(a.indexOf(i) > -1); });
	};
}
if (!String.prototype.trim) {
	(function() {
		var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		String.prototype.trim = function() {
			return this.replace(rtrim, '');
		};
	})();
}
if(!$.fn.reverse) $.fn.reverse=[].reverse;

var runCore=(function(){
	var oHiddenStorage={};
	var core=function(){
		this.bIsInited=false;
		this.vkIsInited=false;
		this.options={
			"host": "/",
			"lang": "rus",
			"time": Math.round((new Date()).getTime()/1000),
			"geotarget": [15800,15800,false],
			"weathertarget": 26850,
			"user": {
				"email": ""
			},
			"rev": {
				"js": "r0",
				"css": "r0"
			},
			"search":"",
			"social_collector": "",
			'reformal': true,
			'wurfl': {"id":"generic_web_browser","browser":"","model":"","os":"","is_bot":false,"is_wireless":false,"is_tablet":false,"width":800,"height":600,"orientation":false,"3gp":false,"mp4":false}
		};
	};
	core.prototype=(function(){
		return {
		/**
		 * Options support
		 */
		"set_option": function(k,v){
			if(!this.options.hasOwnProperty(k))
				return this;
			this.options[k]=v;
			return this;
		},
		"get_option": function(k){
			return this.options.hasOwnProperty(k)?this.options[k]:undefined;
		},
		/**
		 * Params with autoloading support
		 */
		"set_param": function(k,v){
			oHiddenStorage[k]=v;
			return this;
		},
		"get_param": function(k){
			if(oHiddenStorage.hasOwnProperty(k))
				return oHiddenStorage[k];
			if(typeof(this["param_autoload_"+k])=="function")
				this["param_autoload_"+k].call(this);
			if(oHiddenStorage.hasOwnProperty(k))
				return oHiddenStorage[k];
			return undefined;
		},
		/**
		 * i18n
		 */
		"i18n": function(term,voc){
			if(!voc)
				return term;
			var locale=this.get_option("lang");
			if(voc.hasOwnProperty(locale) && voc[locale].hasOwnProperty(term))
				return voc[locale][term];
			if(locale!="rus")
				locale="rus";
			if(voc.hasOwnProperty(locale) && voc[locale].hasOwnProperty(term))
				return voc[locale][term];
			return term;
		},
		/**
		 * Spelling
		 */
		'spellcount': function spellcount(count,one,two,many) {
			var r10,r100,s;
			count=count || 0; one=one || ''; two=two || ''; many=many || two;
			r10=count % 10;
			r100=count % 100;
			if(r10==1 && r100!=11)
				return one;
			if(r10>=2 && r10<=4 && !(r100>=10 && r100<20))
				return two;
			return many;
		},
		/**
		 * Settings support
		 */
		"apply_settings": function(opts,defaults,extend){
			if(opts && typeof(opts)=="object" && defaults && typeof(defaults)=="object")
				for(var k in opts)
					if(opts.hasOwnProperty(k)){
						if(defaults.hasOwnProperty(k)){
							if(typeof(opts[k])=="object")
								this.apply_settings(opts[k],defaults[k],extend)
							else
								defaults[k]=opts[k];
						} else if(extend)
							defaults[k]=opts[k];
					}
		},
		/**
		 * Method overloading
		 */
		"class_method_extend": function(trait){
			var self=this;
			if(!trait)
				return;
			for(var method in trait)
				if(trait.hasOwnProperty(method) && typeof(trait[method]=="function"))
					core.prototype[method]=(function(parent,method){
						if(typeof(parent)!="function")
							return method;
						else
							return function(){
								var args=Array.prototype.slice.call(arguments);
								args.push(parent);
								return method.apply(this,args);
							}
					})(core.prototype[method],trait[method]);
		},
		"class_method": function(trait){
			if(!trait)
				return;
			for(var method in trait)
				if(trait.hasOwnProperty(method) && typeof(trait[method]=="function"))
					core.prototype[method]=trait[method];
		},
		"class_method_remove": function(method){
			if(!method)
				return;
			if(core.prototype.hasOwnProperty(method) && typeof(core.prototype[method]=="function"))
				delete core.prototype[method];
		},
		"init": function(o){
			var self=this;
			if(this.bIsInited)
				return this;
			this.apply_settings(o,this.options);
			this.set_browser_version();
			this.bIsInited=this.validate();
			setTimeout(function(){
				self.init_reformal();
			},500);
			return this;
		},
		"set_browser_version": function(){
			var BrowserDetect = {
				init: function(){
					this.browser = (this.searchString(this.dataBrowser) || "unknown").toString().toLowerCase();
					this.version = (this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "unknown").toString().toLowerCase();
					this.OS = (this.searchString(this.dataOS) || "unknown").toString().toLowerCase();
				},
				searchString: function(data){
					for (var i = 0; i < data.length; i++){
						var dataString = data[i].string;
						var dataProp = data[i].prop;
						this.versionSearchString = data[i].versionSearch || data[i].identity;
						if(dataString){
							if(dataString.indexOf(data[i].subString) != -1) return data[i].identity;
						} else if(dataProp) return data[i].identity;
					}
				},
				searchVersion: function(dataString){
					var index = dataString.indexOf(this.versionSearchString);
					if(index == -1) return;
					return dataString.substring(index + this.versionSearchString.length + 1).split(/[^.0-9]+/)[0];
				},
				dataBrowser: [{
					string: navigator.userAgent,
					subString: "Chrome",
					identity: "Chrome"
				}, {
					string: navigator.userAgent,
					subString: "OmniWeb",
					versionSearch: "OmniWeb/",
					identity: "OmniWeb"
				}, {
					string: navigator.vendor,
					subString: "Apple",
					identity: "Safari",
					versionSearch: "Version"
				}, {
					prop: window.opera,
					identity: "Opera",
					versionSearch: "Version"
				}, {
					string: navigator.vendor,
					subString: "iCab",
					identity: "iCab"
				}, {
					string: navigator.vendor,
					subString: "KDE",
					identity: "Konqueror"
				}, {
					string: navigator.userAgent,
					subString: "Firefox",
					identity: "Firefox"
				}, {
					string: navigator.vendor,
					subString: "Camino",
					identity: "Camino"
				}, { // for newer Netscapes (6+)
					string: navigator.userAgent,
					subString: "Netscape",
					identity: "Netscape"
				}, {
					string: navigator.userAgent,
					subString: "MSIE",
					identity: "Explorer",
					versionSearch: "MSIE"
				}, {
					string: navigator.userAgent,
					subString: "Gecko",
					identity: "Mozilla",
					versionSearch: "rv"
				}, { // for older Netscapes (4-)
					string: navigator.userAgent,
					subString: "Mozilla",
					identity: "Netscape",
					versionSearch: "Mozilla"
				}],
				dataOS: [{
					string: navigator.platform,
					subString: "Win",
					identity: "Windows"
				}, {
					string: navigator.platform,
					subString: "Mac",
					identity: "Mac"
				}, {
					string: navigator.userAgent,
					subString: "iPhone",
					identity: "iPhone/iPod"
				}, {
					string: navigator.platform,
					subString: "Linux",
					identity: "Linux"
				}]
			};
			BrowserDetect.init();
			var sBrowser=BrowserDetect.browser;
			var aVersion=BrowserDetect.version.split(".");
			var sVersion="";
			var aClass=[];
			while(aVersion.length>0){
				aClass.push(sBrowser+"-"+aVersion.join("-"));
				aVersion.pop();
				aVersion.push("x");
				aClass.push(sBrowser+"-"+aVersion.join("-"));
				aVersion.pop();
			}
			(function(o,s){
				if(o.length<1)
					return;
				o[0].className=(o[0].className?o[0].className+" ":"")+s;
			})(document.getElementsByTagName('html'),aClass.join(" "));
		},
		"loadScript": function (url,callback){
			var script = document.createElement("script")
			script.type = "text/javascript";
			script.async = true;
			if(typeof(callback)=="function"){
				if(script.readyState) script.onreadystatechange=function(){
					if(script.readyState=="loaded" || script.readyState=="complete"){
						script.onreadystatechange=null;
						callback();
					}
				}
				else script.onload=callback;
			}
			script.src=url;
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script,s);
		},
		"loadCss": function(url){
			var css = document.createElement("link")
			css.type = "text/css";
			css.rel = "stylesheet";
			tm=Math.round((new Date()).getTime()/60000);
			css.href=url+'?'+tm;
			var s = document.getElementsByTagName('head')[0];
			s.appendChild(css);
		},
		"loadOrtho": function(sHost,sRev){
			var sBaseURL=sHost;
			if(typeof(window.orthography)!=="object")
				this.loadScript("http://news.tut.by/orthography/orthography.js?"+sRev,function(){
					orthography.init(sBaseURL+"orthography/jshttprequest.php");
				});
		},
		"cookie": function(name, value, options){
			if(typeof value != 'undefined'){
				options = options || {};
				if(value === null){
					value = '';
					options.expires = -1;
				}
				var expires = '';
				if(options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)){
					var date;
					if(typeof options.expires == 'number'){
						date = new Date();
						date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
					} else {
						date = options.expires;
					}
					expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
				}
				var path = options.path ? '; path=' + (options.path) : '';
				var domain = options.domain ? '; domain=' + (options.domain) : '';
				var secure = options.secure ? '; secure' : '';
				document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
			} else {
				var cookieValue = null;
				if(document.cookie && document.cookie != ''){
					var cookies = document.cookie.split(';');
					for (var i = 0; i < cookies.length; i++){
						var cookie = cookies[i].replace(/^\s+/g,"").replace(/\s+$/g,"");
						if(cookie.substring(0, name.length + 1) == (name + '=')){
							cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
							break;
						}
					}
				}
				return cookieValue;
			}
		},
		"validate": function(){
			var tm1, tm2;
			if(!window.location.host.toString().match(/^(?:www\.)?tut\.by$/))
				return true;
			if(window.location.search.toString().match(/(?:\?|&)crnd=/))
				return true;
			tm1=parseInt(this.get_option("time"),10);
			if(!isFinite(tm1))
				return true;
			tm2=parseInt(this.cookie("lvutm"),10);
			if(isFinite(tm2)){
				tm1=tm1-tm2;
				tm2=Math.round((new Date()).getTime()/1000);
				if(tm2-tm1<=10)
					return true;
			}
			window.location=(function(sURL){
				var m=sURL.match(/^(.+)((?:#.*)?)$/);
				m[1]=m[1]+(m[1].indexOf("?")>=0?"&":"?")+"crnd="+Math.round(Math.random()*100000);
				m[2]=m[2]?m[2]:"";
				return m[1]+m[2];
			})(window.location.toString());
			return false;
		},
		"XA_sendSocial": function (network,action,target) {
			try {
				if (typeof(window._gaq)=='object' && typeof(window._gaq.push)=='function') {
					_gaq.push(['_trackSocial',network,action,target]);
				}
			} catch(e){};
			try {
				if (typeof(window.ga)=='function') {
					ga('send','social',network,action,target);
				}
			} catch(e){};
		},
		"XA_sendEvent": function (category,action,opt_label,opt_value,opt_noninteraction) {
			var args,i;
			try {
				if (typeof(window._gaq)=='object' && typeof(window._gaq.push)=='function') {
					args=['_trackEvent',category,action];
					for(i=3;i<=arguments.length;i++) args.push(arguments[i]);
					_gaq.push(args);
				}
			} catch(e){};
			try {
				if (typeof(window.ga)=='function') {
					args=['send','event',category,action];
					for(i=3;i<=Math.max(4,arguments.length);i++) args.push(arguments[i]);
					if (arguments.length>4) {
						args.push({
							nonInteraction: opt_noninteraction?1:0
						});
					}
					window.ga.apply(window,args);
				}
			} catch(e){};
		},
		"android_splash": function(){
			var sUserAgent=navigator.userAgent.toString();
			if(!sUserAgent.match(/Android/i))
				return;
			if(sUserAgent.match(/Opera\s+(Mini|Mobi)/i))
				return;
			if(window.location.pathname!=this.get_option("host"))
				return;
			if(this.cookie("asplash"))
				return;
			this.cookie("asplash",1,{
				"expires": 180
			});
			window.location="http://m.tut.by/?android&source="+encodeURIComponent(window.location.href);
			return;
		},
		"setStatHooks": function(sURL,sId){
			var url=sURL;
			$("#"+sId+" a[href][data-hash]").click(function(){
				var sHash=this.getAttribute("data-hash");
				if(sHash.length>0)
					$.get(url+"stat/extlink?"+[
						"src="+encodeURIComponent(window.location),
						"dst="+encodeURIComponent(this.getAttribute("href")),
						"hash="+encodeURIComponent(sHash),
						"text="+encodeURIComponent($(this).text()),
						"uuid="+new Date().getTime()
					].join("&"));
				return true;
			});
		},
		"loadVKSDK": function(){
			var el = document.createElement("script");
				el.type = "text/javascript";
				el.charset = 'utf-8';
				el.src = "http://vk.com/js/api/openapi.js";
				el.async = true;
				document.getElementById("vk_api_transport").appendChild(el);
		},
		"initVKCallback": function(sHost,bDebug){
			if(typeof(VK)!="object"){
				if(bDebug===true)
					console.log('Error initializing VK object!');
				return false;
			}
			VK.init({
				"apiId": 2738307,//2738308,//
				"nameTransportPath":sHost+'exports/xd_receiver.html'
			});
			return true;
		},
		"initVK": function(sHost,bDebug){
			if(this.vkIsInited)
				return;
			var oInstance=this;
			 window.vkAsyncInit = function(){
				if(!oInstance.initVKCallback(sHost,bDebug))
					return;
				oInstance.initVKWidget();
			 };
			oInstance.loadVKSDK();
		},
		"initVKWidget": function(){
			VK.Widgets.Group("vk", {mode: 0, width: "625", height: "410"}, 15591739);
			this.vkIsInited = true;
			return;
		},
		"init_tracking": function(id){
			(function(){ if(this==false) return; (function(){
				for(var fn=function(){
					if(!this.getAttribute("data-utm")) return;
					this.href=(function(a){ return this[0]+=(this[0].indexOf("?")==-1?"?":"&")+a, this; }).call(this.href.split("#"),this.getAttribute("data-utm")).join("#");
					this.removeAttribute("data-utm");
				}, i=this.length-1;i>=0;i--) fn.apply(this.item(i));
			}).apply(this.getElementsByTagName("a")); }).apply(document.getElementById(id.replace(/^#/,'')) || false);
		},
		"init_tristate": function(id){
			(function(){ this && (function(){
				for(var fn=function(){
					if(this.getAttribute("data-url-2")){
						this.href=this.getAttribute("data-url-2");
						this.removeAttribute("data-url-2");
					}
					if(this.getAttribute("data-url-1"))
						this.onclick=function(){
							this.href=this.getAttribute("data-url-1");
							return true;
						};
				}, i=this.length-1;i>=0;i--) fn.apply(this.item(i));
			}).apply(this.getElementsByTagName("a")); }).apply(document.getElementById(id.replace(/^#/,'')));
		},
		"init_custom_popup": (function(){
			var fPopupListener=function(){
				this.oPopup=undefined;
			}
			fPopupListener.prototype=(function(){
				return {
					"activate": function(oPopup){
						if(this.oPopup) this.oPopup.hide();
						this.oPopup=oPopup;
					},
					"click": function(e){
						if(this.oPopup && !this.oPopup.own(e)){
							this.oPopup.hide();
							this.oPopup=undefined;
						}
					}
				};
			})();
			var PopupListener=new fPopupListener();
			$("*").on("click",function(e){
				PopupListener.click(e);
			});
			var fPopup=function(sContext,sClass,o){
				var self=this;
				this.bIsInited=false;
				this.sContext=sContext;
				this.sClass=sClass?sClass:"active";
				this.oCustomEventHandlers={
					"init": undefined,
					"show": undefined,
					"shown": undefined,
					"hide": undefined,
					"hidden": undefined
				};
				this.oEventHandlers={
					"click": function(e){
						var el=$(this);
						$(self.sContext).find("[data-target-popup]").hasClass(self.sClass)?
							self.hide():self.show(el);
						return false;
					},
					"init": function(e,self){
						if(typeof(self.oCustomEventHandlers["init"])=="function")
							self.oCustomEventHandlers["init"].call(this,e,self);
					},
					"show": function(e,self){
						PopupListener.activate(self);
						if(typeof(self.oCustomEventHandlers["show"])=="function")
							self.oCustomEventHandlers["show"].call(this,e,self);
					},
					"shown": function(e,self){
						if(typeof(self.oCustomEventHandlers["shown"])=="function")
							self.oCustomEventHandlers["shown"].call(this,e,self);
					},
					"hide": function(e,self){
						if(typeof(self.oCustomEventHandlers["hide"])=="function")
							self.oCustomEventHandlers["hide"].call(this,e,self);
					},
					"hidden": function(e,self){
						if(typeof(self.oCustomEventHandlers["hidden"])=="function")
							self.oCustomEventHandlers["hidden"].call(this,e,self);
					}
				};
				this.on(o);
				this.init();
			}
			fPopup.prototype=(function(){
				return {
					"init": function(){
						var e=$.Event('init');
						if(!this.bIsInited){
							$(this.sContext).find("[data-target-popup]").add($(this.sContext).filter("[data-target-popup]")).on({
								"click": this.oEventHandlers["click"],
								"init": this.oEventHandlers["init"],
								"show": this.oEventHandlers["show"],
								"shown": this.oEventHandlers["shown"],
								"hide": this.oEventHandlers["hide"],
								"hidden": this.oEventHandlers["hidden"]
							}).trigger(e,[this]);
							this.bIsInited=true;
						} else $(this.sContext).find("[data-target-popup]").add($(this.sContext).filter("[data-target-popup]")).trigger(e,[this]);
						return this;
					},
					"show": function(el){
						if(!el){
							var self=this;
							$(this.sContext).find("[data-target-popup]").add($(this.sContext).filter("[data-target-popup]")).each(function(){
								self.show($(this));
							});
							return this;
						}
						var e;
						var popup=$(this.sContext).find("[data-popup="+el.attr("data-target-popup")+"]").add($(this.sContext).filter("[data-target-popup]"));
						e=$.Event('show',{ target: el, relatedTarget: popup });
						el.trigger(e,[this]);

						el.addClass(this.sClass);
						popup.show();

						e=$.Event('shown',{ target: el, relatedTarget: popup });
						el.trigger(e,[this]);

						el.focusout();
						return this;
					},
					"hide": function(el){
						if(!el){
							var self=this;
							$(this.sContext).find("[data-target-popup]").add($(this.sContext).filter("[data-target-popup]")).each(function(){
								self.hide($(this));
							});
							return this;
						}
						var e;
						var popup=$(this.sContext).find("[data-popup="+el.attr("data-target-popup")+"]").add($(this.sContext).filter("[data-target-popup="+el.attr("data-target-popup")+"]"));

						e=$.Event('hide',{ target: el, relatedTarget: popup });
						el.trigger(e,[this]);

						el.removeClass(this.sClass);
						popup.hide();

						e=$.Event('hidden',{ target: el, relatedTarget: popup });
						el.trigger(e,[this]);

						return this;
					},
					"own": function(e){
						var self=this;
						return (function(x){
							if(x.find(e.target).length>0)
								return true;
							var b=false;
							x.each(function(){
								if($(self.sContext).find("[data-popup="+$(this).attr("data-target-popup")+"]").add($(self.sContext).filter("[data-popup="+$(this).attr("data-target-popup")+"]")).find(e.target).length>0)
									b=true;
							});
							return b;
						})($(this.sContext).find("[data-target-popup]").add($(this.sContext).filter("[data-target-popup]")));
					},
					"on": function(o){
						var self=this;
						if(o && typeof(o)=="object")
							for(var property in o)
								if(o.hasOwnProperty(property) && this.oCustomEventHandlers.hasOwnProperty(property) && typeof(o[property])=="function")
									this.oCustomEventHandlers[property]=o[property];
						return this;
					}
				};
			})();
			return function(sContext,sClass,oEventHandlers){
				return new fPopup(sContext,sClass,oEventHandlers);
			};
		})(),
		"initTopBar": function(sMode,fixed){
			if(sMode==="v4"){
				var oTarget=$("#animated_mainmenu").add("#mainmenu").first();
				//var oFeeds=$('#feeds');
				if(oTarget.length>0){
					if(!fixed) (function(el){
						//var iTop=el.offset().top;
						var iTopMarker = el.parents('.l-outer');
						var iTop=iTopMarker.offset().top;
						var bCheck=false;
						var fSetScroll=function(){
							$(window).on({
								"scroll.floats": function(e){
									var iScrollTop=$(window).scrollTop();
									iTop=iTopMarker.offset().top;
									if(iScrollTop>iTop+5){
										if(!oTarget.hasClass("animated")){
											oTarget.addClass("animated");
											$('#feeds').addClass("animated")
										}
									} else if(oTarget.hasClass("animated")){
										oTarget.removeClass("animated");
										$('#feeds').removeClass("animated");
									}
								},
								'scroll.check': function(e){
									bCheck=true;
								}
							});
						};
						var fCheckScroll=function(){
							bCheck = false;
							$(window).trigger('scroll.check');
							setTimeout(function(){
								if(!bCheck)
									fSetScroll();
							},10);
						};
						setInterval(fCheckScroll,2000);
						fCheckScroll();
					})(oTarget);
					(function(el){
						var fEmbedIframe=function(){
							var docElem = window.document;
							var iframe = docElem.createElement('iframe');
							iframe.style.border = '0px';
							iframe.style.backgroundColor = 'transparent';
							iframe.style.verticalAlign = 'bottom';
							iframe.setAttribute('frameborder', '0');
							iframe.setAttribute('marginwidth', '0');
							iframe.setAttribute('marginheight', '0');
							iframe.setAttribute('hspace', '0');
							iframe.setAttribute('vspace', '0');
							iframe.setAttribute('width', '100%');
							iframe.setAttribute('height','1');
							iframe.setAttribute('scrolling', 'no');
							iframe.setAttribute('allowtransparency', 'true');
							iframe.id='top_bar_helper';

							$(iframe).css({
								"position": "absolute",
								"z-index": -1
							}).prependTo(oTarget);

							if (iframe.contentWindow){
								iframe = iframe.contentWindow;
							}else{
								if (iframe.contentDocument && iframe.contentDocument.document){
									iframe = iframe.contentDocument.document;
								}else{
									iframe = iframe.contentDocument;
								}
							}

							iframe.document.open();
							iframe.document.write('<body onresize="parent.parent.runCore.resize_topBar();"></body>');
							iframe.document.close();
							return true;
						};
						fEmbedIframe();

						var initTail = function(eContext, eTail, eBelt) {
						    eContext = $(eContext);
						    eTail = $(eTail, eContext);
						    eBelt = $(eBelt, eContext);
						    function getScrollBarWidth() {
						        var inner = document.createElement('p');
						        inner.style.width = "100%";
						        inner.style.height = "200px";

						        var outer = document.createElement('div');
						        outer.style.position = "absolute";
						        outer.style.top = "0px";
						        outer.style.left = "0px";
						        outer.style.visibility = "hidden";
						        outer.style.width = "200px";
						        outer.style.height = "150px";
						        outer.style.overflow = "hidden";
						        outer.appendChild(inner);

						        document.body.appendChild(outer);
						        var w1 = inner.offsetWidth;
						        outer.style.overflow = 'scroll';
						        var w2 = inner.offsetWidth;
						        if (w1 == w2) w2 = outer.clientWidth;

						        document.body.removeChild(outer);

						        return (w1 - w2);
						    }

						    function getViewportDimensions() {
						        return {
						            'width': Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
						            'height': Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
						        };
						    }

						    function setTileHeight(elem, elemi, ih) {
						        var iih = ih - parseFloat(elemi.css('padding-top'));

						        elem.css({
						            'height': ih
						        });
						        elemi.css({
						            'height': ih
						        });
						    }

						    function setTileWidth(et, eb) {
						        var iw = et.width();
						        var iiw = iw + getScrollBarWidth();

						        et.css({
						            'overflow': 'hidden'
						        });
						        eb.css({
						            'width': iiw,
						            'display': 'block'
						        });
						    }

						    if (oTarget.attr('data-act') != 'wide') {
								setTileWidth(eTail, eBelt);
								setTileHeight(eTail, eBelt, getViewportDimensions().height);
							}
						}



						$('.topbar-burger').on('click', function(e) {
						    /* From Modernizr */
						    var transitionEvent = (function() {
						        var t;
						        var el = document.createElement('fakeelement');
						        var transitions = {
						            'transition': 'transitionend',
						            'OTransition': 'oTransitionEnd',
						            'MozTransition': 'transitionend',
						            'WebkitTransition': 'webkitTransitionEnd'
						        }

						        for (t in transitions) {
						            if (el.style[t] !== undefined) {
						                return transitions[t];
						            }
						        }
						        return false;
						    })();

						    if (transitionEvent) {
						        $('.b-topbar-more').one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
						            initTail('#mainmenu', '.topbarmore-w', '.topbarmore-c');
						        });
						    } else {
						        initTail('#mainmenu', '.topbarmore-w', '.topbarmore-c');
						    }
						});
						$('.topbar-close').on('click', function(e) {
						    $('.b-topbar-more').toggleClass('active');
						    $('.topbar-burger').removeClass('topbar-more-active');
						    setTimeout(function() {
						        $('.b-topbar-more').hide()
						    }, 100);
						});


					})(oTarget);
					this.resize_topBar();
				}
			}
			return this.init_custom_popup("#mainmenu","topbar-more-active",{
				"show": function(e,popup){
					var iW=0;
					if(sMode!="v4"){
						$('.b-topbar-i li:not(:first)',popup.sContext).each(function(){
							iW+=$(this).outerWidth();
						});
						if(iW)
							e.relatedTarget.width(iW-30);
					}
					e.target.parents("li.topbar-more").addClass(popup.sClass);
				},
				"hide": function(e,popup){
					e.relatedTarget.removeClass('active');

				},
				"shown": function(e,popup){
					setTimeout(function(){
						e.relatedTarget.addClass('active');
					}, 50);
				},
				"hidden": function(e,popup){
					setTimeout(function(){
						e.target.parents("li.topbar-more").removeClass(popup.sClass);
					},50);
				}
			});
		},
		'resize_topBar': function() {
			var auth=$('#authorize');
			var topbar=$('#animated_mainmenu').add('#mainmenu').find('.b-topbar-h');
			var w=topbar.outerWidth()-auth.outerWidth()-$('ul.b-topbar-i li.b-topbar-aside',topbar).outerWidth()-$('ul.b-topbar-i li.topbar-more',topbar).outerWidth();
			var cw=0;
			$('ul.b-topbar-i li',topbar).not('li.b-topbar-aside,li.topbar-more').each(function(){
				var el=$(this);
				var el_w=el.outerWidth();
				if (cw+el_w<=w) {
					el.show();
					cw+=el_w;
				} else {
					el.hide();
				}
			});
		},
		"initPrettyModal": function(sContext){
			if(window.attachEvent && !window.opera){
				$('*[data-modal="static"]').click(function()
				{
					document.body.style.behavior='url(#default#homepage)';
					document.body.setHomePage(location.href);
				});
			}
			else {
				$('*[data-modal="static"]').prettyPhoto({
					theme: 'photoModal',
					animation_speed: 'normal',
					horizontal_padding: 0,
					default_width: 600,
					changepicturecallback: function(e){
						var delta = $('.pp_content').height()/2;
						$('.pp_pic_holder').css({'margin-top':'-'+delta+'px'})
					},
					markup: '<div class="pp_pic_holder"> \
								<div class="pp_content_container"> \
									<div class="pp_content"> \
										<a class="pp_close b-icon icon-close3" href="#">Close</a> \
										<div class="pp_loaderIcon"></div> \
										<div class="pp_fade"> \
											<div id="pp_full_res"></div> \
										</div> \
									</div> \
								</div> \
							</div> \
							<div class="pp_overlay"></div>'
				});
			}
		},
		"initPrettyModalBig": function(sContext){
			if(window.attachEvent && !window.opera){
				$('*[data-modal="static"]').click(function()
				{
					document.body.style.behavior='url(#default#homepage)';
					document.body.setHomePage(location.href);
				});
			}
			else {
				$('*[data-modal="static"]').prettyPhoto({
					theme: 'photoModal',
					animation_speed: 'normal',
					horizontal_padding: 0,
					default_width: 600,
					markup: '<div class="pp_pic_holder"> \
								<div class="pp_content_container"> \
									<div class="pp_content"> \
										<a class="pp_close b-icon icon-close3" href="#">Close</a> \
										<div class="pp_loaderIcon"></div> \
										<div class="pp_fade"> \
											<div id="pp_full_res"></div> \
										</div> \
									</div> \
								</div> \
							</div> \
							<div class="pp_overlay"></div>'
				});
			}
		},
		"init_custom_calendar": function(sContext){
			if(!sContext)
				return undefined;
			var self=this;
			return this.init_custom_popup(sContext,"active",{
				"init": function(e,popup){
					var oContext=$(popup.sContext);
					if(oContext.data("ready"))
						return;
					$("select[name=m],select[name=y]",oContext).on({
						"change": function(e){
							var iMonth=parseInt(this.form["m"].value,10);
							var iYear=parseInt(this.form["y"].value,10);
							var iCity=0;
							if(this.form["city"])
								iCity=parseInt(this.form["city"].value,10);
							setTimeout(function(){
								$.getJSON(self.get_option("host")+"archive/calendar.jsp?jsoncallback=?",{
								"m": iMonth,
								"y": iYear,
								"city": iCity
							},function(json){
								$(sContext).replaceWith(json.html);
								popup.init().show();
							});
							},1);
						}
					});
					oContext.data("ready",true);
				}
			});
		},
		"init_custom_subscribe": function(sContext){
			if(!sContext)
				return undefined;
			var self=this;
			return this.init_custom_popup(sContext,"active",{
				"init": function(e,popup){
					var oContext=$(popup.sContext);
					if(oContext.data("ready"))
						return;
					$(".toggle_s",oContext).on({
						"click": function(e){
							var oContext=$(popup.sContext);
							$(".sbscr_el",oContext).toggleClass("sbscr_off");
							$(".sbscr_el form input[name=email]",oContext).val(
								$(".sbscr_el.sbscr_off form input[name=email]",oContext).val()
							);
						}
					});
					$("form input[name=email]",oContext).val(self.get_option("user").email);
					$("form",oContext).on({
						"submit": function(e){
							if(!this["email"].value.match(/.+@.+/) || this["email"].value.length<6){
								e.preventDefault();
								alert(self.i18n("Электронный адрес введен неправильно",{
									"bel": {
										"Электронный адрес введен неправильно": "Электронны адрас уведзены няправiльна"
									}
								}));
								return false;
							}
							var p=window.open("","result","width=400,height=260");
							p.focus();
							return true;
						}
					});
					oContext.data("ready",true);
				},
				"show": function(e,popup){
					$(popup.sContext).find(".sbscr-content").addClass("sbscr_active");
				},
				"hide": function(e,popup){
					$(popup.sContext).find(".sbscr-content").removeClass("sbscr_active");
				}
			});
		},
		"init_title": (function(){
			var fnMap={
				"default": function(){
					var fTM=(function(){
						var tid=false;
						return function (fn){
							if(tid!==false){
								clearTimeout(tid);
								tid=false;
							}
							if(typeof(fn)=="function")
								tid=setTimeout(function(){
									tid=false;
									fn();
								},200);
						};
					})();
					$("#main-news-tabs a[data-target]").bind({
						"mouseover": function(e){
							var el=$(this);
							fTM();
							if(!el.hasClass('active')) fTM(function(){ el.tab('show'); });
							else fTM();
						},
						"mouseout": function(e){ fTM(); }
					});
					$("#main-news-tabs").bind({ "mouseleave": function(e){ fTM(); } });
				},
				"tiled": function(){
					var oContext=$("#main-news-tabs");
					var x=$('.big_item',oContext).height();
					var y=$('.small_item',oContext).height();
					var news_height=oContext.height();
					var delta = x/news_height;
					var iPValue=0;

					var fRescaleNews = function(){
						var o=$('.grid-main .l-col-2');
						if(o.length<1)
							return;
						var optimal_height=o.height();
						if(optimal_height==iPValue)
							return;

						oContext.height(optimal_height);

						var new_bigHeight = Math.ceil(oContext.height()*delta)-10;
						var new_smallHeight = optimal_height-new_bigHeight-20;

						$('.small_item a',oContext).height(new_smallHeight);
						$('.big_item a',oContext).height(new_bigHeight);

					}
					fRescaleNews();

					setInterval(function(){
						var watch = $(window).width();
						if(watch<=1400){
							if($('.b-main-resources-hot').length > 0){
								$('.addin_block').hide();
							}
						} else {
							$('.addin_block').show();
						}
						fRescaleNews();
					},1000);
				},
				"tiled2": function(){
					var tm=setInterval(function(){
						if($('.grid-main .l-col-2-i').length<1)
							return;
						$("#tail").css({
							"height": Math.max(
								$('.grid-main .l-col-2-i').height(),
								$('.b-topnews .t__figure').height()
							)
						});
						clearInterval(tm);
					},500);
				},
				"tiled3": function(){
					var oContext=$(".b-topnews");
					var bState=false;
					$(".b-more a",oContext).on({
						"click": function(e){
							$('.b-othernews table',oContext).animate({
								"left": bState?"0%":"-=50%"
							},"slow");
							bState=!bState;
							return false;
						}
					});
				}
			};
			return function(mode){
				if(!mode)
					mode="default";
				if(!fnMap.hasOwnProperty(mode))
					return false;
				fnMap[mode]();
				delete fnMap[mode];
				return true;
			};
		})(),
		"init_generic_tabs": function(sContext){
			var oContext=$(sContext);
			if(oContext.length<1 || oContext.data("tabs"))
				return false;
			$("a[data-target]",oContext).on({
				"click": function(e){
					var el=$(this);
					e.preventDefault();
					if(!el.parent("li").hasClass('active'))
						el.tab("show");
				}
			});
			oContext.data("tabs",true);
			return true;
		},
		"init_video": (function(){
			var fInitGallery=function(oContext){
				var self=this;

				var sCurrentPlayer=false;
				var oSettings={
					'theme': 'photoModal',
					'show_title': true,
					'allow_resize': false,
					'counter_separator_label': ' из ',
					'animation_speed': 'fast',
					'opacity': 0.50,
					'horizontal_padding': 0,
					'min_height': 100,
					'changepicturecallback': function(e){},
					'markup': '<div class="pp_pic_holder"> \
						<a class="pp_close b-icon icon-close" href="#">Close</a> \
						<div class="pp_t"><div class="ppt">&nbsp;</div></div> \
						<div class="pp_content_container"> \
							<div class="pp_content"> \
								<div class="pp_loaderIcon"></div> \
								<div class="pp_fade"> \
									<div id="pp_full_res"></div> \
									<div class="pp_details" style="margin-top: 0px !important; height: 0px;"><p class="currentTextHolder"></p></div> \
								</div> \
							</div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',
					'inline_markup': '<div class="pp_inline" style="padding: 0px;">{content}</div>',
					'callback': function(e){ sCurrentPlayer=false; },
					'gallery_markup': ''
				};
				window.uppodEvent=(function(originalUppodEvent){
					var uppodEvent=originalUppodEvent;
					return function(playerID,event){
						if(typeof(uppodEvent)=="function")
							uppodEvent(playerID,event);
						switch(event){
							case "init":
								if(sCurrentPlayer==playerID){
									//setTimeout здесь потому что несмотря на то, что плеер
									//прислал событие init, он все ещё не готов принять яваскрипт команду
									setTimeout(function(){$(".pp_pic_holder [id="+playerID+"]").get(0).sendToUppod("play")},1);
								}
								break;
						}
					};
				})(window.uppodEvent);

				$().prettyPhoto(oSettings);
				$(oContext).filter(function(){
					var el=$(this);
					var id=el.attr("data-rel-video").toString().replace(/^([a-z0-9]+)_container$/,'$1');
					return (typeof(window["deferred_embed_"+id])=="function");
				}).on('click',function(e){
					var el=$(this);
					var id=el.attr("data-rel-video").toString().replace(/^([a-z0-9]+)_container$/,'$1');
					window["deferred_embed_"+id](function(swfEvent){
						if(!swfEvent.success){
							return;
						}
						if(swfEvent.ref && swfEvent.ref.tagName=="DIV")
							return;

						e.preventDefault();
						var sSelector="#"+swfEvent.id.toString().replace("_player","_container");
						sCurrentPlayer=swfEvent.id.toString();
						var oSWF=$(swfEvent.ref);
						$(sSelector).css({
							"width": oSWF.attr("width"),
							"height": oSWF.attr("height")
						});
						oSettings["default_width"]=oSWF.attr("width");
						oSettings["default_height"]=oSWF.attr("height");
						$().prettyPhoto(oSettings);
						if(el.attr("title")){
							$.prettyPhoto.open([sSelector],['<a href="'+el.attr("href").toString().replace(/"/g,"&quot;")+'">'+el.attr("title").toString().replace(/</g,"&lt;").replace(/>/g,"&gt;")+'</a>']);
						} else
							$.prettyPhoto.open([sSelector]);

						self.XA_sendEvent('VideoIcon','Play',el.attr("data-video-source"));
					});
				});
			};
			return function(sContext){
				var self=this;
				if(!window.swfobject || !swfobject.hasFlashPlayerVersion("1.0.0") || $("html").hasClass("explorer-6"))
					return;
				var oContext=$(sContext);
				var xItems=$("a[data-rel-video]");
				if(xItems.length<1)
					return;
				var aJS=[];
				if(typeof($.prettyPhoto)!="function")
					aJS.push("jquery.prettyPhoto");
				if(typeof(window.Uppod)!="function")
					aJS.push("uppod");
				if(aJS.length>0){
					aJS.push(this.get_option("rev").js);
					self.loadScript("http://www.tut.by/scripts/by4/"+aJS.join("~")+".js",function(){
						fInitGallery.call(self,xItems);
					});
				} else fInitGallery.call(self,xItems);
			};
		})(),
		"init_modal": function(el,h,w){
			var H=$(window).height(),
				W=$(window).width(),
				dH=Math.max(20,Math.floor((H-h)/2)),
				dW=Math.max(20,Math.round((W-w)/2));
			if(el.css("position")=="fixed")
				el.css({
					"top": dH,
					"bottom": dH
				});
			else
				el.css({
					"top": dH+$(document).scrollTop(),
					"bottom": dH
				});
			(function(el,h,w,H,W){
				var innerW=Math.ceil(100*Math.min(w,el.width())/W);
				if(el.width()>w) {
					el.css({
						"width": w
					});
					$("div.modal-body",el).css({
						"overflow-x": "auto"
					});
				}
				var el_body=$("div.modal-body",el),
					dy=el_body.outerHeight()-el_body.height();
				$("div.modal-spacer",el).each(function(){
					dy+=$(this).height();
				});
				el_body.css({
					"height": h-$("div.modal-header",el).outerHeight()-dy
				});
			})($("div.modal-content",el),el.height(),W-2*dW,H,W);
			return el;
		},
		'init_reformal': (function(){
			var defaults={
				tab_orientation:'right',
				tab_indent:'50%',
				tab_border_color:'#FFFFFF',
				tab_border_width:2,
				scroll:0.75
			};
			var options={
				'a': {
					project_id:756105,
					project_host:'atutby.reformal.ru',
					tab_bg_color:'#5e5d5d',
					tab_image_url:'http://tab.reformal.ru/0J7RgtC30YvQstGLINC4INC%252F0YDQtdC00LvQvtC20LXQvdC40Y8=/FFFFFF/e389ab7bdf0f03b625a4237cb9f576df/right/1/tab.png'
				},
				'off_auto':{
					project_id:805514,
					project_host:'autotutby.reformal.ru',
					tab_bg_color:'#54504d',
					tab_image_url:'http://tab.reformal.ru/0J%252FQvtC80L7Qs9C4INC90LDQvCDRgdGC0LDRgtGMINC70YPRh9GI0LUh/FFFFFF/fc693d7ddb46e0570bf82d3e773b0c09/right/1/tab.png'
				},
				'off_catalog':{
					project_id:805513,
					project_host:'catalogtut.reformal.ru',
					tab_bg_color:'#3b3838',
					tab_image_url:'http://tab.reformal.ru/0J%252FQvtC80L7Qs9C40YLQtSDQvdCw0Lwg0YHRgtCw0YLRjCDQu9GD0YfRiNC1IQ==/FFFFFF/c12846f22b55035bf0d9e038ca523f10/right/1/tab.png',
					scroll: false
				},
				'off_finance':{
					project_id:804191,
					project_host:'financetut.reformal.ru',
					tab_bg_color:'#b0b0b0',
					tab_image_url:'http://tab.reformal.ru/T9GC0LfRi9Cy0Ysg0Lgg0L%252FRgNC10LTQu9C%252B0LbQtdC90LjRjw==/ffffff/7b6495ee579b5bc4896b8d17b095fc94/right/1/tab.png',
					tab_border_width:1
				},
				'off_lady':{
					project_id:803975,
					project_host:'ladytutby.reformal.ru',
					tab_bg_color:'#f28500',
					tab_image_url:'http://tab.reformal.ru/0J7RgdGC0LDQstGM0YLQtSDQstCw0Ygg0L7RgtC30YvQsiE=/FFFFFF/c44aefbf4006771c67c7db2b5507e2e2/right/1/tab.png'
				},
				'off_maps':{
					project_id:805516,
					project_host:'mapstut.reformal.ru',
					tab_orientation:'bottom-left',
					tab_indent:'10px',
					tab_bg_color:'#574e49',
					tab_image_url:'http://tab.reformal.ru/0J7RgdGC0LDQstGMINC%252B0YLQt9GL0LIh/FFFFFF/5067a7685315c03021b7d9b3be3b5403/bottom-left/1/tab.png',
					scroll:false
				},
				'off_realty':{
					project_id:804012,
					project_host:'realtytutby.reformal.ru',
					tab_bg_color:'#f00000',
					tab_image_url:'http://tab.reformal.ru/T9GC0LfRi9Cy0Ysg0Lgg0L%252FRgNC10LTQu9C%252B0LbQtdC90LjRjw==/FFFFFF/a08a7c60392f68cb33f77d4f56cf8c6f/right/1/tab.png'
				},
				'off_vashdom':{
					project_id:805515,
					project_host:'vashdomtut.reformal.ru',
					tab_bg_color:'#4a4949',
					tab_image_url:'http://tab.reformal.ru/0J%252FQvtC80L7Qs9C4INC90LDQvCDRgdGC0LDRgtGMINC70YPRh9GI0LUh/FFFFFF/fc693d7ddb46e0570bf82d3e773b0c09/right/1/tab.png'
				},
				'kupi':{
					project_id:814267,
					project_host:'kupitutby.reformal.ru',
					tab_bg_color:'#21008f',
					tab_image_url:'http://tab.reformal.ru/0KPQu9GD0YfRiNC4IEtVUEk=/FFFFFF/8a407329f1fa5e86a7f115643d9c0110/right/1/tab.png'
				},
				'off_afisha':{
					project_id:813902,
					project_host:'afishatutby.reformal.ru',
					tab_bg_color:'#828282',
					tab_image_url:'http://tab.reformal.ru/0J%252FQvtC80L7Qs9C40YLQtSDRg9C70YPRh9GI0LjRgtGMINCQ0YTQuNGI0YM=/FFFFFF/0e1ccf986a6f5e2cc3d1cd16a45cd41c/right/1/tab.png'
				}
			};
			var bInited=false;
			return function(opts){
				if (bInited || window.Widget) return false;
				bInited=true;
				if($('html head meta[name="MobileOptimized"]').length>0) return false;

				opts=get_reformal_opts.call(this,opts || {});
				if (opts.project_id) {
					reformalOptions=window.reformalOptions?window.reformalOptions:{};
					this.apply_settings(opts,reformalOptions,true);
					if (window.reformalOptions.scroll!==false) {
						injectCSS('a#reformal_tab { display: none } body.reformal_visible a#reformal_tab { display: block }');
					}
					this.loadScript(('https:' == document.location.protocol ? 'https://' : 'http://') + 'media.reformal.ru/widgets/v3/reformal.js',function(){
						if (window.reformalOptions.scroll!==false) {
							$(document).ready(function(){
								init_scroll_events(window.reformalOptions.scroll);
							});
						}
					});
				}

				return true;
			};
			function get_reformal_opts(opts){
				var k=this.get_option('reformal');
				if (k===false) return opts;
				var x=defaults;
				var y={};
				if(k===true) {
					while (true) {
						k=window.location.pathname.toString().replace(/^\/catalog(?:\/?|\/.*)$/,'catalog');
						if (k==='catalog' && options[k]) break;
						k=window.location.hostname.toString().toLowerCase().split('.').shift();
						if (options[k]) break;
						if (window.location.hostname.toString().match(/\.devel\./)) {
							k=window.location.pathname.toString().toLowerCase().replace(/^\/([^/]+)(?:\/?|\/.*)$/,'$1').split('.').shift();
							if (options[k]) break;
						}
						k=false;
						break;
					}
				}
				if (k!==false && typeof(k)=='string' && options.hasOwnProperty(k)) {
					y=options[k];
				}
				this.apply_settings(y,x,true);
				this.apply_settings(opts,x,true);
				return x;
			}
			function injectCSS(sCSS) {
				var k=document.createElement("style");
				k.setAttribute("type","text/css");
				k.setAttribute("media","screen");
				if (k.styleSheet) k.styleSheet.cssText=sCSS;
				else k.appendChild(document.createTextNode(sCSS));
				document.getElementsByTagName("head")[0].appendChild(k);
			}
			function init_scroll_events(multiplier) {
				var bCheck=false;
				var fSetScroll=function(){
					$(window).on({
						'scroll.reformal': function(e){
							var iDocHeight=$(document).height();
							var iWindowHeight=$(window).height();
							var iScrollTop=$(window).scrollTop();

							if (iDocHeight<=iWindowHeight || iScrollTop>=multiplier*iWindowHeight) {
								$('body').addClass('reformal_visible');
							} else {
								$('body').removeClass('reformal_visible');
							}
						},
						'scroll.check_reformal': function(e){ bCheck=true; }
					});
				};
				var fCheckScroll=function(){
					bCheck=false;
					$(window).trigger('scroll.check_reformal');
					setTimeout(function(){
						if(!bCheck)
							fSetScroll();
					},10);
				};
				setInterval(fCheckScroll,2000);
				fCheckScroll();
			};
		})(),

		"init_titlealts": function(context,stat_host){
			var self=this;
			if(arguments.callee._collector)
				var collector=arguments.callee._collector;
			else{
				var collector=(function(){
					var data={};
					var host=self.options.host;
					return {
						"host":function(h){
							host=h;
						},
						"show":function(id,n){
							data[id]=n;
						},
						"stat_show":function(){
							if(!Object.keys(data).length)
								return;
							$.post(host+"stat/?t=titlealts",{"show":data});
						},
						"stat_click":function(id){
							if(typeof data[id]==undefined)
								return;
							$.get(host+"stat/?t=titlealts&id="+id+"&n="+data[id]);
						}
					};
				})();
				arguments.callee._collector=collector;
				$(document).ready(collector.stat_show);
			}
			if(context==undefined)
				context='._titlealts_';
			if(stat_host!=undefined)
				collector.host(stat_host);
			$('a[data-titlealt]',context).each(function(){
				var data=$(this).attr('data-titlealt');
				if(!data){
					$(this).removeAttr('data-titlealt');
					return;
				}
				try{
					data=$.parseJSON(data);
				}catch(e){
					$(this).removeAttr('data-titlealt');
					return;
				}
				if(!data.titles.length){
					$(this).removeAttr('data-titlealt');
					return;
				}
				var id=data.id;
				var n=Math.floor(Math.random()*data.titles.length);
				if(!data.titles[n]){
					$(this).removeAttr('data-titlealt');
					return;
				}
				$('span._title',this).html(data.titles[n]);
				collector.show(id,n);
				$(this).click(function(){
					collector.stat_click(id);
				}).removeAttr('data-titlealt');
			});
			//$('._titlealts_').removeClass('_titlealts_');
		}
	}; })();
	return new core();
})();

runCore.class_method((function() {
	return {
		'init_picture_marks': (function() {
			function visual_time(self, el, tm1, tm2, i18n) {
				var sec = Math.floor((tm1 - tm2) / 3600);
				var day_change = (new Date(tm1 * 1000)).getDate() != (new Date(tm2 * 1000)).getDate();
				var s;

				if (sec == 0) {
					s = self.i18n('now', i18n)(sec);
				} else if (sec < 4) {
					//s=self.i18n('hour',i18n)(sec);
					s = self.i18n('time', i18n)(sec);
				} else if (sec < 7) {
					s = self.i18n('time', i18n)(sec);
				} else if (sec > 23 && sec < 48) {
					s = self.i18n('yesterday', i18n)(sec);
				} else if (sec > 6 && sec < 24 && day_change) {
					s = self.i18n('yesterday', i18n)(sec);
				} else if (sec >= 48) {
					el.hide();
					return false;
				}
				if (s !== false) {
					el.text(s);
				}
				return true;
			}
			return function(sCtx) {
				var ctx = $(sCtx),
					self = this;
				var i18n = {
					'rus': {
						'now': function() {
							return 'Сейчас';
						},
						'time': function() {
							return false;
						},
						'hour': function(h) {
							return (h > 1 ? h + ' ' : '') + [self.spellcount(h, 'час', 'часа', 'часов'), 'назад'].join(' ');
						},
						'yesterday': function() {
							return 'Вчера';
						}
					},
					'bel': {
						'now': function() {
							return 'Зараз';
						},
						'time': function() {
							return false;
						},
						'hour': function(h) {
							return (h > 1 ? h + ' ' : '') + [self.spellcount(h, 'гадзiна', 'гадзiны', 'гадзiн'), 'таму'].join(' ');
						},
						'yesterday': function() {
							return 'Учора';
						}
					}
				};
				$('[data-ctime][data-visual="time"]').each(function() {
					var el = $(this);
					var tm = parseInt(el.attr('data-ctime'), 10);
					if (!isFinite(tm)) {
						el.hidde();
					} else {
						visual_time(self, el, self.get_option('time'), tm, i18n);
					}
				});
			};
		})(),
		"init_framed": (function() {
			var tm = false;
			$(window).resize(function(e) {
				if (tm === false) {
					tm = setTimeout(function() {
						$('[data-widget="slider"]').trigger($.Event('resize.slider'));
						tm = false;
					}, 1000);
				}
			});
			return function(ctx) {
				ctx = $(ctx);
				var slider = $('[data-widget="slider"]', ctx);
				if (slider.length < 1) {
					return false;
				}
				if (cfg_get(slider, 'state', false)) {
					return function(k, v) {
						return cfg_get(slider, k, v);
					}
				}
				initSlider(slider);
				(function(slider, initialFrameNo) {
					if (!initialFrameNo) {
						return;
					}
					if (initialFrameNo == 'random') {
						cfg_set(slider, 'initialFrame', initialFrameNo);
						return;
					}
					initialFrameNo = parseInt(initialFrameNo, 10);
					if (!isNaN(initialFrameNo) && isFinite(initialFrameNo) && initialFrameNo > 0 && initialFrameNo < frameCount) {
						cfg_set(slider, 'initialFrame', initialFrameNo);
						return;
					}
				})(slider, slider.attr('data-initial-frame'));
				resetSlider(slider);

				slider.on({
					'reset.slider': function(e) {
						var slider = $(this);
						initSlider(slider);
						resetSlider(slider);
					}
				});
				slider.on({
					'resize.slider': function(e) {
						var slider = $(this);
						var frameWidth = cfg_get(slider, 'frameWidth', 1);
						var frameWidthCurrent = calcFrameWidth(slider);
						if (frameWidth != frameWidthCurrent) {
							slider.trigger($.Event('reset.slider'));
						}
					}
				});
				slider.on('click', '[data-role="slider-nav"]', function(e) {
					var slider, nav;
					nav = $(e.currentTarget);
					if (nav.attr('href')) {
						return;
					}
					slider = $(e.delegateTarget);
					e.preventDefault();
					if (cfg_get(slider, 'state') != 'ready') {
						return;
					}
					navAction(slider, nav);
				});
				return function(k, v) {
					return cfg_get(slider, k, v);
				}
			}

			function navAction(slider, nav) {
				var x = nav.attr('data-offset') || ''
				var m = x.toString().match(/^([+-]?)([0-9]+)$/)
				var action;
				var frameNo = cfg_get(slider, 'frameNo', 0);
				var frameWidth = cfg_get(slider, 'frameWidth', 0);
				var items, to_show, to_hide, dx, container, dx_from, dx_to;
				if (m) {
					m[2] = parseInt(m[0], 10);
					if (isNaN(m[2]) || !isFinite(m[2])) {
						return false;
					}
					if (m[1] == '') {
						if (m[2] == frameNo) {
							return false;
						}
						m[2] = m[2] - frameNo;
						m[1] = m[2] > 0 ? '+' : '-';
					}
					cfg_set(slider, 'state', 'moving');
					items = $('.entry-product', slider).not('.entry-sliced');
					to_show = items.slice((frameNo + 1 + m[2]) * frameWidth, (frameNo + 2 + m[2]) * frameWidth);
					dx = items.filter(':visible').first().outerWidth() * frameWidth;
					switch (m[1]) {
						case '+':
							dx_from = 0;
							dx_to = -dx;
							break;
						case '-':
							dx_from = -dx;
							dx_to = 0;
							break;
					}
					to_show.removeAttr('style').first().parent().first().css({
						left: dx_from
					}).animate({
						left: dx_to
					}, {
						duration: 500,
						queue: false,
						complete: function() {
							var frameCount = cfg_get(slider, 'frameCount');
							frameNo += m[2];
							if (frameNo < 0) {
								frameNo = frameCount - 1;
							} else if (frameNo >= frameCount) {
								frameNo = 0;
							}
							cfg_set(slider, 'frameNo', frameNo);
							renderFrame(slider);
							cfg_set(slider, 'state', 'ready');
						}
					});
				}
			}

			function initSlider(slider) {
				cfg_set(slider, 'state', 'ready');
				var items = items = $('.entry-product', slider).not('.entry-cloned,.entry-sliced');
				cfg_set(slider, 'allowedFrameWidth', parse_allowedWidths(slider.attr('data-frame-width') || ''));
				cfg_set(slider, 'frameWidth', calcFrameWidth(slider, items));
				cfg_set(slider, 'frameNo', calcCurrentFrameNo(slider, items));
			}

			function initNavs(slider) {
				if (slider.attr('data-nav-type') !== 'framed') {
					return;
				}
				var nav = $('.b-slider-ctrl', slider);
				if (nav.length < 1) {
					nav = $('<ul class="b-slider-ctrl"></ul>');
					nav.prependTo(slider);
				}
				var frameCount = cfg_get(slider, 'frameCount');
				var navs = [];
				for (var i = 0; i < frameCount; i++) {
					navs.push('<li class="b-slider-ctrl__li"><a class="b-slider-ctrl-frame" data-role="slider-nav" data-offset="' + i + '"></a></li>');
				}
				nav.html(navs.join(''));
			}

			function calcCurrentFrameNo(slider, items) {
				if (!items) {
					items = $('.entry-product', slider).not('.entry-cloned,.entry-sliced');
				}
				return Math.floor(items.index(items.filter(':visible').first()) / cfg_get(slider, 'frameWidth', 1));
			}

			function calcFrameCount(slider, items) {
				if (!items) {
					items = $('.entry-product', slider).not('.entry-cloned,.entry-sliced');
				}
				return Math.ceil(items.length / cfg_get(slider, 'frameWidth', 1));
			}

			function sliceSlider(slider, frameWidth) {
				var items = $('.entry-product', slider);
				var overflow = items.length % frameWidth;
				items = items.removeClass('entry-sliced');
				if (overflow) {
					items = items.slice(-overflow).addClass('entry-sliced').end().not('.entry-sliced');
				}
				cfg_set(slider, 'frameCount', calcFrameCount(slider, items));
				return items;
			}

			function cloneBorderFrames(items, frameWidth) {
				var container = items.first().parent();
				items.slice(0, frameWidth).clone(true).addClass('entry-cloned').removeAttr('id').removeAttr('style').hide().appendTo(container);
				items.slice(-frameWidth).clone(true).addClass('entry-cloned').removeAttr('id').removeAttr('style').hide().prependTo(container);
			}

			function renderFrame(slider) {
				var frameWidth = cfg_get(slider, 'frameWidth', 1);
				var frameNo = cfg_get(slider, 'frameNo', 0);
				var frameCount = cfg_get(slider, 'frameCount', 1);
				var items = $('.entry-product', slider).not('.entry-cloned,.entry-sliced');

				if (frameNo < 0) {
					frameNo = frameCount - 1;
				} else if (frameNo >= frameCount) {
					frameNo = 0;
				}
				var offset = frameNo * frameWidth;
				$('.entry-product.entry-cloned:visible', slider).hide();
				if (offset > 0) {
					items.slice(0, offset).hide();
				};
				items.slice(offset, offset + frameWidth).show();
				items.first().parent().css({
					left: 0
				});
				items.slice(offset + frameWidth, items.length).hide();
				$('a[data-role="slider-nav"][data-offset]', slider).removeClass('active').filter('[data-offset="' + frameNo + '"]').addClass('active');
				if (frameNo == frameCount - 1) {
					var url = slider.attr("data-nav-url");
					if (url) {
						$('[data-role="slider-nav"][data-offset="+1"]', slider).attr('href', url).parents('form').attr({
							action: url,
							target: '_blank'
						});
					}
				} else {
					$('[data-role="slider-nav"][data-offset="+1"][url]', slider).removeAttr('href').parents('form').removeAttr('action').removeAttr('target');
				}
			}

			function resetSlider(slider) {
				$('.entry-product.entry-cloned,.entry-product:empty', slider).remove();
				slider.addClass('forward back');
				var frameWidth = cfg_get(slider, 'frameWidth', 1);
				cloneBorderFrames(sliceSlider(slider, frameWidth), frameWidth);
				var frameCount, initialFrame;
				initialFrame = cfg_get(slider, 'initialFrame', false);
				if (initialFrame !== false) {
					frameCount = cfg_get(slider, 'frameCount', 1);
					if (initialFrame == 'random') {
						initialFrame = Math.floor(Math.random() * frameCount);
					}
					initialFrame = Math.max(0, Math.min(initialFrame, frameCount - 1));
					cfg_set(slider, 'frameNo', initialFrame);
					cfg_set(slider, 'initialFrame', false);
				}
				initNavs(slider);
				renderFrame(slider);
			}

			function cfg_get(slider, k, v) {
				var vv = slider.data('settings:' + k);
				return vv === undefined ? v : vv;
			}

			function cfg_set(slider, k, v) {
				slider.data('settings:' + k, v);
				return v;
			}

			function calcFrameWidth(slider, items) {
				var item = (items || $('.entry-product', slider)).filter(':visible').first();
				var frameWidth = Math.floor(item.parent().width() / item.width());
				var allowedWidth = cfg_get(slider, 'allowedFrameWidth', false);
				if (!$.isArray(allowedWidth) || allowedWidth.length < 1) {
					return frameWidth;
				}
				if (allowedWidth.indexOf(frameWidth) != -1) {
					return frameWidth;
				}
				for (var i = allowedWidths.length - 1; i >= 0; i--) {
					if (allowedWidths[i] <= frameWidth) {
						return allowedWidths[i];
					}
				}
				return 1;
			}

			function parse_allowedWidths(allowedWidths) {
				allowedWidths = allowedWidths.toString().split(',');
				allowedWidths = $.map(allowedWidths, function(v) {
					return parseInt(v, 10);
				}).filter(function(v) {
					return !isNaN(v) && isFinite(v);
				}).sort();
				return allowedWidths.length > 0 ? allowedWidths : false;
			}
			return;
		})(),
		"init_stretchables": (function() {
			var bIsInited = false,
				iTimeOut = false,
				iWidth = 1248,
				aClass = {
					"wide": "widemedia",
					"narrow": "narrowmedia"
				}, w = false,
				body = null,
				html = null;
			var do_work = function() {
				if (iWidth >= Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth)) {
					$(body).removeClass(aClass["wide"]).addClass(aClass["narrow"]);
				} else {
					$(body).addClass(aClass["wide"]).removeClass(aClass["narrow"]);
				}
				iTimeOut = false;
			};
			var fInit = function() {
				if (bIsInited) return true;
				bIsInited = true;
				if (w.matchMedia && w.matchMedia("only all").matches) return true;
				do_work();
				$(window).on('resize', function(e) {
					if (iTimeOut !== false) clearTimeout(iTimeOut);
					iTimeOut = setTimeout(function() {
						do_work();
					}, 1000);
				});
				return true;
			};
			return function(window) {
				if (bIsInited) return true;
				w = window;
				body = window.document.body;
				html = window.document.documentElement;
				return fInit();
			};
		})(),
		"init_asidehelper": (function() {
			var bIsInited, oContainers, oTop, oPd, iScrollTop, iVph, iBottom, oBody, oHtml, sHtml, fInit, bWide, oWideText, sLang;

			bIsInited = false;
			iScrollTop = null;
			iVph = 0;
			iBottom = 0;
			fInit = function() {
				var self = this;
				if (bIsInited) return true;
				bIsInited = true;
				if (bWide) {
					oWideText = oContainers.find('.sh-text');
				}
				$('[data-ctrl]').on('click', oContainers, function(e) {
					e.preventDefault();
					switch ($(this).data('ctrl')) {
						case "top":
							$('html:not(:animated),body:not(:animated)').animate({
								scrollTop: 0
							}, {
								duration: 100,
								easing: "swing"
							});
							self.XA_sendEvent('updown', 'up');
							break;
						case "pd":
							$('html:not(:animated),body:not(:animated)').animate({
								scrollTop: $(document).scrollTop() + iVph
							}, 300);
							self.XA_sendEvent('updown', 'down');
							break;
						case "bottom":
							$('html:not(:animated),body:not(:animated)').animate({
								scrollTop: iBottom
							}, 600);
							break;
						default:
							return true;
					}
					return false;
				});
				setInterval(function() {
					iVph = $(window).height();
					iBottom = Math.max(oBody.scrollHeight, oBody.offsetHeight, oHtml.clientHeight, oHtml.scrollHeight, oHtml.offsetHeight);
					if (iScrollTop != $(document).scrollTop()) {
						if ($(document).scrollTop() > 20) {
							oTop.filter(":hidden").fadeIn('fast');
						} else {
							oTop.filter(":visible").fadeOut('fast');
						}
						if (oPd.length > 0) {
							if (Math.ceil((iBottom - $(document).scrollTop()) / iVph) > 1) {
								oPd.filter(":hidden").fadeIn('fast');
							} else {
								oPd.filter(":visible").fadeOut('fast');
							}
						}
						iScrollTop = $(document).scrollTop();
					}
					if (bWide) {
						if (oContainers.find('.sh-canvas').width() < 60) {
							oWideText.filter(":visible").fadeOut('slow');
						} else {
							oWideText.filter(":hidden").fadeIn('slow');
						}
						if (oContainers.find('.sh-canvas').width() < 17) {
							oContainers.find('.sh-up').filter(":visible").fadeOut('slow');
						} else {
							oContainers.find('.sh-up').filter(":hidden").fadeIn('slow');
						}
					}
				}, 1000);
				return true;
			}

			return function(bool) {
				var self = this;
				if (bIsInited) return true;
				bWide = (typeof(bool) != 'boolean') ? false : bool;
				sLang = (self.get_option("lang") || 'rus') != 'bel' ? 'Наверх' : 'Уверх';
				if (!bWide) {
					sHtml = '<div class="b-asidehelper sh-right"><div class="outer"><ul class="sh-list"><li class="sh-list__li"><a href="#top" class="sh-list__a" title="В начало" data-ctrl="top"><i class="b-icon icon-top"></i></a></li><li class="sh-list__li"><a href="" class="sh-list__a" title="Вниз" data-ctrl="pd"><i class="b-icon icon-pd"></i></a></li></ul></div></div>';
				} else {
					sHtml = '<div class="b-asidehelper sh-left m-wide" data-ctrl="top" title="' + sLang + '" style="display: none;"><div class="sh-canvas"><div class="sh-visual"><div class="sh-up"><div class="sh-up-i"><i class="b-icon icon-scroll-top"></i><div class="sh-text">' + sLang + '</div></div></div></div></div></div>';
				}
				$('body').prepend(sHtml);
				oContainers = $('.b-asidehelper');
				oBody = window.document.body;
				oHtml = window.document.documentElement;
				oTop = oContainers.filter('[data-ctrl="top"]').length > 0 ? oContainers.filter('[data-ctrl="top"]') : oContainers.find('[data-ctrl="top"]');
				oPd = oContainers.filter('[data-ctrl="pd"]').length > 0 ? oContainers.filter('[data-ctrl="pd"]') : oContainers.find('[data-ctrl="pd"]');
				return fInit.call(self);
			}
		})(),
		'init_link_rotator': (function() {
			var inited = {};
			var settings = {
				'http://42.tut.by/': {
					rss: 'http://news.tut.by/rss/r~28.rss',
					ctx: 'div#it_news_block div.project-head div.head-addon',
					ua_hash: 'titul_project_it_widget'
				},
				'http://lady.tut.by/': {
					rss: 'http://news.tut.by/rss/r~29.rss',
					ctx: 'div#lady_news_block div.project-head div.head-addon',
					ua_hash: 'titul_project_lady_widget'
				}
			};

			function rotate_links(items, ctx, ua_hash) {
				var i = Math.floor(Math.random() * items.length);
				var link = $('<a data-ua-hash="' + ua_hash + '"></a>');
				link.attr('href', items[i].link);
				link.html(items[i].title);
				link = $('<div></div>').append(link).html();
				$(ctx).html(link);
			}
			return function(origin) {
				if (inited[origin]) {
					return false;
				}
				inited[origin] = true;
				if (!settings[origin]) {
					return false;
				}
				$.get(settings[origin].rss, function(xml) {
					var items = [];
					$(xml).find('item').each(function() {
						var item = $(this);
						items.push({
							title: $('title', item).text(),
							link: $('link', item).text()
						});
					});
					if (items.length > 0) {
						//setInterval(rotate_links,5000,items,settings[origin].ctx);
						rotate_links(items, settings[origin].ctx, settings[origin].ua_hash);
					}
				}, 'xml');
			};
		})(),
		'init_aside_tabs': (function() {
			var init_state = [false, false];
			var store_get = (function() {
				var axes = 0;
				if ('localStorage' in window && window.localStorage !== null) {
					axes = localStorage.getItem('feed-axes');
					if (!axes || !axes.toString().match(/^1?[01]$/)) {
						axes = 10;
					}
					axes = parseInt(axes, 10);
					if (axes > 9) {
						axes = axes - 10;
						localStorage.setItem('feed-axes', (11 - axes).toString());
					}
				}
				return function(use_default) {
					return use_default ? 0 : axes;
				}
			})();
			var store_set = (function() {
				if ('localStorage' in window && window.localStorage !== null) return function(axes) {
						switch (axes) {
							case 'latest':
								axes = 0;
								break;
							case 'popular':
								axes = 1;
								break;
							default:
								axes = 0;
								break;
						}
						localStorage.setItem('feed-axes', axes.toString());
				};
				return function() {};
			})();
			var title_info = {
				title: document.title,
				count: 0,
				flip: 0,
				data: [],
				tm: 0
			};
			var interval_id = false;
			var ws = false;

			function track_ga_event(A, B, C) {
				var name;
				if (!window.ga) return false;
				var trackers = window.ga.getAll();
				for (var i = 0; i < trackers.length; i++) {
					name = trackers[i].get('name');
					if (name == 't0' || name == 'title2') {
						window.ga(name + '.send', 'event', A, B, C);
					}
				}
				return true;
			}

			var show_updates = function() {
				if (ws === false) {
					return false;
				}
				if (title_info.count) {
					if (interval_id !== false) {
						clearInterval(interval_id);
					}
					$('#feed-notifier').hide().text('');
					$('#feeds .note-count').text('');
					$('#feeds').removeClass('active');
					document.title = title_info.title;
					title_info.count = 0;

					for (var i = title_info.data.length - 1; i >= 0; i--) {
						$(title_info.data[i]).insertBefore('#latest div.news-entry:first');
						$('#latest > div.b-prmplace').each(function(k, v) {
							$(v).prev().insertAfter($(v));
						});
					}
					$('#latest div.news-entry').fadeTo(800, 1);

					title_info.data = [];
					track_ga_event('Timeline', 'Updates', 'Show');
					setTimeout(function() {
						if (ws && ws.readyState == 1) {
							ws.send(JSON.stringify({
								mtime: title_info.tm
							}));
						}
					}, 1);
				}
			};
			var notifier = (function() {
				var retry_count = 5;

				function timeline_agent() {
					var url;
					if (interval_id !== false) {
						clearInterval(interval_id);
					}
					$('#feed-notifier').hide().text('');
					$('#feeds .note-count').text('');
					$('#feeds').removeClass('active');
					document.title = title_info.title;
					try {
						url = 'ws://www.tut.by/wsapi/online/?' + [
								'lang=' + runCore.get_option('lang'),
								'geo=' + (parseInt(runCore.get_option('geotarget')[0], 10) || 15800),
								'mtime=' + $('#latest a[data-tm]:first').attr('data-tm')
						].join('&');
						ws = new WebSocket(url);
					} catch (e) {
						local_message(e);
						return false;
					}
					ws.onmessage = function(e) {
						local_message(e);
						var data, flag;
						try {
							data = JSON.parse(e.data);
							if ($.isArray(data) && data.length > 0) {
								title_info.data = $.map(data, function(v, k) {
									return item2html(v);
								});
								$('#feed-notifier').show().text(data.length);
								$('#feeds .note-count').text(data.length);
								$('#feeds').addClass('active');
								title_info.count = data.length;
								flag = title_info.tm < data[0].tm;
								title_info.tm = data[0].tm;
								title_info.flip = 9;
								if (interval_id !== false) {
									clearInterval(interval_id);
									interval_id = false;
								}
								if (flag) {
									interval_id = setInterval(title_notifier, 750);
									track_ga_event('Timeline', 'Updates', 'Notify');
								}
							}
						} catch (e) {

						}
					}
					ws.onopen = function(e) {
						ws.send(JSON.stringify({
							ua: navigator.userAgent.toString()
						}));
					};
					ws.onerror = local_message;
					ws.onclose = function(e) {
						local_message(e);
						retry_count -= 1;
						if (retry_count > 0) {
							setTimeout(timeline_agent, 5000);
						}
					};

					function local_message(x) {
						if (window.location.hash == '#debug') {
							console.log(x);
						}
					}

					function item2html(item) {
						function html(s) {
							s = s || '';
							return s.toString().replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
						}
						return [
							'<div class="news-entry ni" data-id="' + html(item.id) + '" style="opacity: 0.3;">',
							'<a href="' + html(item.link) + '" class="entry__link" data-tm="' + html(Math.round(item.tm / 1000)) + '" data-ua-hash="news_bytimenew">',
							'<span class="entry-cnt">',
							'<span class="entry-meta">',
							'<span class="entry-time"><span data-ctime="' + html(Math.round(item.tm / 1000)) + '">' + html(item.tm_printable) + '&nbsp;</span></span>',
							'<span class="entry-cat">' + html(item.cat_title) + '</span>',
							'</span>',
							'<span class="entry-head _title">' + html(item.title) + '</span>',
							'<span class="entry-count">&nbsp;' + (item.comment_count > 0 ? html(item.comment_count) : '') + '</span>',
							'</span></a>',
							'</div>'].join('');
					}

					function title_notifier() {
						if (title_info.count < 1) {
							clearInterval(interval_id);
							interval_id = false;
							document.title = title_info.title;
						} else {
							if (title_info.flip & 1) {
								document.title = title_info.title;
							} else {
								document.title = '(' + title_info.count + ') ' + title_info.title;
							}
							title_info.flip = title_info.flip > 0 ? title_info.flip - 1 : 0;
						}
					}
				}
				if ('WebSocket' in window && window.WebSocket !== null && window.JSON) return function() {
						timeline_agent();
						return true;

				};
				return function() {
					return true;
				};
			})();
			return function(phase) {
				if (phase != 0 && phase != 1) {
					return false;
				}
				if (init_state[phase]) {
					return true;
				}
				if (phase == 0) {
					$('html').addClass('feed-axes-' + store_get());
					init_state[phase] = true;
					return true;
				}

				$('#feeds a[data-toggle="tab"]').click(function(e) {
					var axes = $(this).attr('href').toString().replace(/^#+/g, '')
					e.preventDefault();
					$(this).tab("show");
					store_set(axes);
					$('html:not(:animated),body:not(:animated)').animate({
						scrollTop: 0
					}, {
						duration: 100,
						easing: "swing",
						complete: function() {
							if (axes == 'latest') {
								show_updates();
							}
						}
					});
					return false;
				});
				$('#feeds.b-notification').click(function(e) {
					e.preventDefault();
					$('html:not(:animated),body:not(:animated)').animate({
						scrollTop: 0
					}, {
						duration: 100,
						easing: "swing",
						complete: function() {
							show_updates();
						}
					});
				});
				var use_default = $('#async_adrime_tag_beacon').length > 0;

				$('#feeds a[href="#' + ['latest', 'popular'][store_get(use_default)] + '"][data-toggle="tab"]').tab('show');
				$('html').removeClass('feed-axes-' + store_get());
				$('#latest div[data-no="1"]').remove();
				setTimeout(function() {
					$('#latest div.news-entry').clone().appendTo('#latest_news_addon')
				}, 1);
				init_state[phase] = true;
				setTimeout(notifier, 2000);
				return true;
			};
		})()
	}
})());
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
if (typeof(swfobject["embedSWF"]) == "function")
	swfobject["embedSWF"] = (function(f) {
		var embedSWF = f;
		var BASE = 'http://www.tut.by/';
		var sPlayerAddonJSONUrl = window.sPlayerAddonJSONUrl ? window.sPlayerAddonJSONUrl : (BASE + 'player.jsp');
		var aTargetFrame = [{
				"id": "frameid358",
				"re": /(311582|311874|311875|311877|311879|311880)/
			}, {
				"id": "frameid465",
				"re": /(290962|290963|290965|290966|290967|304885|304886|304887|304888|304889|304890|304892|304895)/
			}, {
				"id": "frameid494",
				"re": /(297816|298232|298233|304899|304900|304901|304902|304903|304905|304906|304907|304908|304909)/
			}, {
				"id": "frameid465",
				"re": /(304885|304886|304887|304888|304889|304890|304892|304895)/
			}, {
				"id": "frameid742",
				"re": /(407407|407408|407409)/
			}, {
				"id": "frameid798",
				"re": /(443774|443775|443776|443777|443778|443779|443780|443781|443782)/
			}, //постролл для лиги чемпионов
			{
				"id": "frameid869",
				"re": /(495245|495246|495247|495248|495249|495250|495251|495252|495253|495254|496433|495247|497057|497058)/
			} //прелолл для определённых новостей
		];
		var aPrivateHost = [
				'images.afisha.tut.by',
				'prerol.tut.by',
				'img.tut.by', 'img.tyt.by', 'uploader.tut.by',
				'imgi.tut.by', 'video.tut.by'
		];
		var fValidateArgs = function(a) {
			/**
			 * embedSWF signature
			 * swfobject.embedSWF(
			 * 		0-swfUrl, 1-id, 2-width, 3-height,
			 * 		4-version, 5-expressInstallSwfurl,
			 * 		6-flashvars, 7-params, 8-attributes,
			 * 		9-callbackFn
			 * )
			 */
			var i = a.length;
			if (i < 9)
				return false;
			if (!a[0].toString().match(/\/uppod\/uppod\.swf/))
				return false;
			if (a[1] === null || typeof(a[1]) == "undefined") return false;
			if (a[2] === null || typeof(a[2]) == "undefined") return false;
			if (a[3] === null || typeof(a[3]) == "undefined") return false;
			if (a[6] === null || typeof(a[6]) != "object") return false;
			if (!a[6].st || !a[6].file) return false;
			if (a[7] === null || typeof(a[7]) != "object") return false;
			if (a[8] !== null && typeof(a[8]) == "object" && a[8]["delayedEmbed"] == 1) return false;
			return true;
		};
		var fGetArgs = function(args) {
			var a = [];
			for (var i = 0; i < args.length; i++)
				a.push(args[i]);
			return a;
		};
		
		var customFrameReplacemant  = function(st){
			var s =  window.location.pathname.toString();
			for (var i = aTargetFrame.length - 1; i >= 0; i--)
			if (s.match(aTargetFrame[i].re))
				st = st.replace(/\/frameid406\//, '/' + aTargetFrame[i].id + '/');
			return st;
		}
		
		var fSanitizeArgs = function(a, mode) {
			if (!a[6].st.match(/^https?:\/\/.*\/uppod\//))
				return a;
			(function() {
				var rtmp2http = mode == 'swf' ? function(file) {
						return file;
					} : function(file) {
						var m = file.match(/^rtmp(:\/\/[^\/]+\.tut\.by)((:[0-9]+)?)(\/.*?)((#.*)?)$/);
						if (!m) return file;
						return 'http' + m[1] + (m[2] ? m[2] : ':1935') + m[4].replace(/\/\/+/g, '/').replace(/\/$/, '') + '/playlist.m3u8' + m[5];
					};
				var aOpts = ['mode=' + encodeURIComponent(mode)];
				/**
				 * switch to static styles without any php support if needed
				 */
				if (window.bLiteUppod) {
					this.auto = 'none';
					this.firstframe = 0;
				}
				/**
				 * dual quality players
				 */ (function(file) {
					if (!file) {
						this.file = rtmp2http(this.file);
						aOpts.push('file=' + encodeURIComponent(this.file));
						return false;
					}
					file[1] = rtmp2http(file[1]);
					file[2] = rtmp2http(file[2]);
					this.file = file[1];
					this.id = file[1];
					this.hd = 'LQ,HQ';
					this.hdlinks = file[1] + ',' + file[2];
					aOpts.push('hd=1');
					aOpts.push('file=' + encodeURIComponent(file[1]));
					return true
				}).call(this, this.file.match(/^\[(.+),(.+)\]$/));
				/**
				 * streaming
				 */ (function(format) {
					if (!format) return false;
					switch (format[1]) {
						case 'flv':
							this.stream = 1;
							this.streamsend = 'byte';
							if (mode == 'js') {
								this.broken_format = true;
							}
							break;
						case 'mp4':
							this.stream = 1;
							this.streamsend = 'sec';
							break;
					}
					return true;
				}).call(this, this.file.match(/\.(mp4|flv)(\?|$)/));
				/**
				 * custom frameids
				 */
				if (this.uid) {
					aOpts.push("uid=" + encodeURIComponent(this.uid));
					this.st = customFrameReplacemant(this.st);
					//this.st = (function(st, s, frames) {
					//	for (var i = frames.length - 1; i >= 0; i--)
					//		if (s.match(frames[i].re))
					//			st = st.replace(/\/frameid406\//, '/' + frames[i].id + '/');
					//	return st;
					//})(this.st, window.location.pathname.toString(), aTargetFrame);
				}
				/**
				 * free video detection
				 */ (function(file) {
					var sHost = (function(href) {
						var a = document.createElement('a');
						a.setAttribute("href", href);
						a = a.hostname.toString();
						if (a) return a;
						a = href.match(/:\/\/([^:\/]+)(:|\/|$)/);
						if (a)
							return a[1];
						return false;
					})(file);
					for (var i = aPrivateHost.length - 1; i >= 0; i--)
						if (aPrivateHost[i] == sHost) {
							aOpts.push('free=1');
							break;
						}
				}).call(this, this.file);
				if (aOpts.length > 0) {
					this.st = this.st + (this.st.match(/\?/) ? (mode == 'swf' ? '%26' : '&') : '?') + aOpts.join((mode == 'swf' ? '%26' : '&'));
				}

			}).apply(a[6]);
			return a;
		}
		/*
		 * if clients browser supports flash we would show him flash version of player
		 * else we check if his browser supports html5 tag 'video' and if it does
		 * we are going to show him html5 version of player
		 * naturally, javascript has to be enabled for all of that to happen
		 */
		var uagent = navigator.userAgent.toLowerCase();
		if (!swfobject.hasFlashPlayerVersion("1.0.0") || uagent.search("android ") > -1)
			return function() {
				var a = fGetArgs(arguments);
				if (!fValidateArgs(a))
					return embedSWF.apply(window, a);

				var fEventHandler = (function() {
					var fEventFactory = function(event) {
						var event_name = event;
						return function(e) {
							var id = $(this).find("source[src]").attr("src");
							setTimeout(function() {
								try {
									$.get(BASE + 'stat/video', {
										"state": event_name,
										"file": id
									});
								} catch (e) {};
							}, 1);
						};
					};
					return {
						"start": fEventFactory("began"),
						"end": fEventFactory("finished")
					};
				})();
				a = fSanitizeArgs(a, 'js');
				if ( !! document.createElement("video").canPlayType) {
					if (a[6].broken_format) return undefined;
					(function(el) {
						if (el.length < 1) return;

						/* #30068 */ (function(el) {
							if (el.length < 1) return;
							var iWidth = el.width();
							if (iWidth > 0 && a[2] > iWidth) {
								a[3] = Math.round(a[3] * iWidth / a[2]);
								a[2] = iWidth;
							}
						})(el.parents('div.b-article'));

						el.html("").css({
							"width": a[2],
							"height": a[3]
						}).attr("width", a[2]).attr("height", a[3]).bind(fEventHandler);
						if (a[6].st.match(/^https?:\/\//)) {
							var uppod_opts = {
								m: a[6].m,
								uid: a[1],
								file: a[6].file,
								onReady: initUppodInstance
							};
							if (a[6].poster) {
								uppod_opts.poster = a[6].poster.replace(/\[[\d,]+\]/, '1');
							}
							a[6].st = customFrameReplacemant(a[6].st);
							$.ajax({
								url: a[6].st,
								xhrFields: {
									withCredentials: true
								},
								success: function(data) {
									uppod_opts.st = data;
									new Uppod(uppod_opts);
									
								}
							});
						} else {
							new Uppod(uppod_opts);
						}
						if (a.length > 9 && typeof(a[9]) == "function") a[9]({
								"success": true,
								"id": a[1],
								"ref": el.get(0)
							});

						function initUppodInstance(uppod) {
							(function(dom_element) {
								uppod.custom_data = {
									'seek': false
								};
								dom_element.sendToUppod = sendToUppod.bind(uppod);
								dom_element.addEventListener("play", function() {
									if (uppod.custom_data.seek) {
										setTimeout(function(uppod) {
											uppod.Seek(uppod.custom_data.seek)
											uppod.custom_data.seek = false;
										}, 1000, uppod);
									}
								}, false);
							})(document.getElementById(a[1]));

							function sendToUppod(com) {
								var self = this;
								var method = com.split(':')[0];
								var value = com.split(':')[1] || 0;
								switch (method) {
									case 'seek':
										if (self.getStatus() == 0) {
											self.custom_data.seek = value;
											self.Play();
										} else {
											self.Seek(value);
										}
										break;
									default:
										break;
								}
							};
						}
					})($("#" + a[1]));
				}
				if (a[6].file.match(/[a-z0-9]+\.t[uy]t\.by\//) && !/www\.t[uy]t\.by\//.test(window.location.href.toString()) && (a[1].match(/^swf\d+/))) {
					setTimeout(function() {
						$.getJSON(sPlayerAddonJSONUrl + (sPlayerAddonJSONUrl.match(/\?/) ? '&' : '?') + 'jsoncallback=?', {
							m: a[6].m,
							width: a[2],
							player_id: a[1],
							file: a[6].file
						}, function(json, sStatus) {
							if (typeof(json["html"]) != "undefined") $(json.html).insertAfter($("#" + a[1]));
							if (typeof(json["header"]) != "undefined") $(json.header).insertBefore($("#" + a[1]));
							if (typeof(json["anons"]) != "undefined") $(json.anons).insertAfter($("#" + a[1]));
							if (typeof(json["timeline"]) != "undefined") $(json.timeline).insertAfter($("#" + a[1]));
						});
					}, 1);
				}
				return undefined;
		};

		return function() {
			var a = fGetArgs(arguments);
			if (!fValidateArgs(a))
				return embedSWF.apply(window, a);
			a = fSanitizeArgs(a, 'swf');
			if (!window.bLiteUppod && !a[6].file.match(/unistar\.stream/) &&
			//!a[6].m == 'audio' &&
			a[6].file.indexOf('/livepress') == -1 &&
				a[1].match(/^swf\d+/) &&
				a[6].file.match(/[a-z0-9]+\.t[uy]t\.by\//) && !/www\.t[uy]t\.by\//.test(window.location.href.toString())) {
				setTimeout(function() {
					$.getJSON(sPlayerAddonJSONUrl + "?jsoncallback=?", {
						"m": a[6].m,
						"width": a[2],
						"player_id": a[1],
						"file": a[6].file
					}, function(json, sStatus) {
						if (json !== null && typeof(json) == "object") {
							var o = $("#" + a[1]);
							if (json.header) $(json.header).insertBefore(o);
							if (json.anons) $(json.anons).insertAfter(o);
							if (json.timeline) $(json.timeline).insertAfter(o);
							if (json.html) $(json.html).insertAfter(o);
						}
					});
				}, 1);
			}
			if (!(window.runCore && typeof(window.runCore.ShowDeadCenterDiv) == "function") && a[8].aslink == 1) {
				delete(a[8].aslink);
			}
			if (a[7].id && a[8].aslink == 1) {
				/**
				 * display as link, play video on click in modal window
				 */
				a[6].auto = 'play';
				var oLink = $("<a href=\"#top\" class=\"dotted\" title=\"При нажатии плейер откроется в всплывающем окне\">" + a[6].comment + "</a>");
				var oLinkIcon = $('<img class="niv" alt="" src="//img.tyt.by/i/tr.gif">');
				$('#' + a[7].id).html("").append(oLink).append(oLinkIcon);
				oLink.click(function(e) {
					e.preventDefault();
					$('object,select,input[type="file"]').data("swf_hidden", true).css({
						'visibility': 'hidden'
					});
					$('<div class="pModal_overlay"></div>').css({
						'position': 'absolute',
						'top': '0',
						'left': '0',
						'width': '100%',
						'height': $(document).height(),
						'opacity': '0.8',
						'background': '#000',
						'z-index': '50'
					}).prependTo('body');
					$('<div id="' + a[7].id + '_outer_vbox" class="pModal" style="z-index:60">' +
						'<div id="' + a[7].id + '_vbox" width="' + a[2] + 'px"></div><br />' +
						'<input id="' + a[7].id + '_submit" type="submit" name="close_video" value="Закрыть" class="button" />' +
						'</div>').prependTo('body');
					$('#' + a[7].id + '_submit').click(function(e) {
						e.preventDefault();
						/**
						 * close modal window and remove swfobject
						 */
						swfobject.removeSWF(a[7].id + '_vbox');
						$('#' + a[7].id + "_outer_vbox, .pModal_overlay").remove();
						$('object,select,input[type="file"]').filter(function() {
							var el = $(this);
							if (el.data("swf_hidden")) {
								el.removeData("swf_hidden");
								return true;
							}
							return false;
						}).css({
							'visibility': 'visible'
						});
					});
					/**
					 * set this so we next time embedSWF() is called we dont come here,
					 * we return on top
					 */
					a[8].delayedEmbed = 1;

					if (a.length > 9)
						embedSWF.call(window, a[0], a[7].id + '_vbox', a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9]);
					else
						embedSWF.call(window, a[0], a[7].id + '_vbox', a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
					runCore.ShowDeadCenterDiv(a[2], a[3], a[7].id + "_outer_vbox");
				});
				return undefined;
			} else {
				/**
				 * #30068 выравниваем ширину плеера чтобы не вылазил за границы родительского элемента
				 */
				var oContainer = $("#" + a[1]);
				oParent = oContainer.parents('div.b-article');
				if (oParent.length) {
					var iWidth = oParent.width();
					if (iWidth > 0 && a[2] > iWidth) {
						a[3] = Math.round(a[3] * iWidth / a[2]);
						a[2] = iWidth;
					}
				}
			}
			return embedSWF.apply(window, a);
		};
	})(swfobject["embedSWF"]);
var uppodManager = {
	setType: function(sType) {
		this.uppodType = sType;
	},
	getType: function() {
		return this.uppodType;
	},
	setPrerol: function(bPrerol) {
		this.isPrerol = bPrerol;
	},
	getPrerol: function() {
		return this.isPrerol;
	},
	setPlayerId: function(PlayerId) {
		this.playerId = PlayerId;
	},
	getPlayerId: function() {
		return this.playerId;
	},
	setFile: function(filename) {
		this.file = filename;
	},
	getFile: function() {
		return this.file;
	},
	setStatus: function(stat) {
		this.status = stat;
	},
	getStatus: function() {
		return this.status;
	},
	setTime: function(curtime) {
		this.ctime = curtime;
	},
	getTime: function() {
		return this.ctime;
	}
};

function uppodSend(playerID, com, callback) {
	var oPlayer = document.getElementById(playerID);
	if (oPlayer) {
		var status = typeof(oPlayer.getUppod) == "function" ? oPlayer.getUppod('getstatus') : 1;
		if (status == -1 && com.indexOf('seek') != -1) {
			oPlayer.sendToUppod('play')
			setTimeout(function() {
				oPlayer.sendToUppod(com, (callback ? callback : ''))
			}, 1000);
		} else
			oPlayer.sendToUppod(com, (callback ? callback : ''));
	}
}

function runTimeline(sec, PlayerID) {
	uppodSend(PlayerID, "seek:" + sec, "");
}
runCore.class_method({
"init_topbar": (function() {
	var bInited=false;
	return function() {
		if(!this.bIsInited)
			throw "Core is not initialized";
		if(bInited)
			return true;
		var self=this;
		$("#header a[data-target]").each(function(){
			var el=$(this);
			var sURL=el.attr("data-href").toString();
			if(sURL) {
				if(!sURL.match(/utm_(source|campaign|medium)/)) {
					sURL=sURL.split("#",2);
					sURL[0]+=(sURL[0].match(/\?/)?"&":"?")+"utm_source=www.tut.by&utm_medium=top_menu&utm_campaign=doubleclick";
					sURL=sURL.join("#");
				}
				el.attr("href",sURL);
				el.removeAttr("data-href");
			}
		}).on({
			"click": function(e){
				var el=$(this);
				if(el.parent('li').hasClass('active'))
					return true;
				e.preventDefault();
				el.tab("show");
				return false;
			},
			"show": function(e){
				var el=$(e.target);
				if(!$(el.attr("data-target")).length) {
					$('<div id="'+el.attr("data-target").toString().replace(/^#/,"")+'" class="tab-pane"><div class="b-loader"></div></div>').appendTo("#top-tabs");
					(function(source,selector) {
						setTimeout(function(){
							var bSuccess=false;
							var sHTML="";
							if(selector=="#topbar-tv")
								source=(function(source,sChannelList){
									if(!sChannelList)
										return source;
									sChannelList=sChannelList.split(",").sort().join(",");
									return source.replace(/\/tvset\.html/g,'/tvset'+sChannelList+'.html');
								})(source,self.cookie("tut_tv"));
							$.ajax({
								"url": source,
								"cache": false,
								"async": true,
								"dataType": "html",
								"success": function(html){
									bSuccess=true;
									sHTML=html;
								},
								"complete": function(request){
									if(!bSuccess)
										sHTML='<div class="b-error">Во время загрузки содержимого произошла ошибка: '+request.status+'<br />Попробуйте открыть вкладку позднее.</div>';
									$(selector).html(sHTML);
								}
							});
						},0);
					})(el.attr("data-src"),el.attr("data-target"));
					el.removeAttr("data-src");
				}
			}
		}).parent('li').on({
			"click": function(e){
				var el=$(this);
				if(!el.hasClass('active')) {
					$('a[data-target]',el).tab("show");
				}
			}
		});
		bInited=true;
		return bInited;
	};
})(),
"init_bottom_tabs": (function(){
	var bInited=false;
	return function() {
		if(bInited)
			return bInited;
		$("table.bottom-widgets__table div.table-tabs a[data-target]").removeAttr("href").on({
			"click": function(e){
				var el=$(this);
				if(el.parent('td').hasClass('active'))
					return true;
				e.preventDefault();
				el.tabletab("show");
				return false;
			},
			"show": function(e){
				var el=$(e.target);
				if(!$(el.attr("data-target")).length) {
					$('<div id="'+el.attr("data-target").toString().replace(/^#/,"")+'" class="tab-pane"><div class="b-loader"></div></div>').appendTo(el.parents("td.col").find("div.tab-content"));
					(function(source,selector) {
						setTimeout(function(){
							var bSuccess=false;
							var sHTML="";
							$.ajax({
								"url": source,
								"cache": false,
								"async": true,
								"dataType": "html",
								"success": function(html){
									bSuccess=true;
									sHTML=html;
								},
								"complete": function(request){
									if(!bSuccess)
										sHTML='<div class="b-error">Во время загрузки содержимого произошла ошибка: '+request.status+'<br />Попробуйте открыть вкладку позднее.</div>';
									$(selector).html(sHTML);
								}
							});
						},0);
					})(el.attr("data-src"),el.attr("data-target"));
					el.removeAttr("data-src");
				}
			}
		});
		bInited=true;
		return bInited;
	};
})()
});
runCore.class_method({
"init_search": (function() {
	var oDOMNode=$('<div></div>');
	function decode_entities(html) {
		return oDOMNode.html(html).text();
	}
	var bIsInited=false;
	var fOpenExternalLink = (function() {
		var oParseUrl = function(sURL) {
			var oRes = {
				"url": sURL,
				"params": []
			};
			var m = sURL.match(/^(.*)\?([^#]+)((?:#.*)?)$/);
			if (m) {
				if (!m[1]) m[1] = "";
				if (!m[3]) m[3] = "";
				oRes.url = m[1] + m[3];
				var p;
				m[2] = m[2].split("&");
				for (var i = 0; i < m[2].length; i++)
				oRes.params.push(m[2][i].split("="));
			}
			return oRes;
		}
		return function(sLink) {
			var queryStringList = oParseUrl(sLink);
			for (var i = 0; i < queryStringList["params"].length; i++) {
				if (typeof(queryStringList["params"][i][1]) == "undefined") queryStringList["params"][i][1] = "";
				$("#external-search").append('<input type="hidden" name="' + queryStringList["params"][i][0] + '" value="' + queryStringList["params"][i][1] + '" />');
			}
			$("#external-search").attr({
				"action": queryStringList.url,
				"target": "_blank",
				"method": "get"
			}).submit().attr({
				"action": "./"
			});
			$("#external-search input").remove();
		};
	})();
	var fInitSuggest=function(sInputSelector) {
		$(sInputSelector).typeahead({
			"item": "<li><a></a></li>",
			"items": 10,
			"minLength": 3,
			"source": function (query, process) {
				var that=this;

				if(typeof(that["cache"])!="object") that["cache"]={};
				if(that["cache"][query]!==undefined) {
					process(that["cache"][query]);
				}
				else
					$.ajax({
						mode: "abort",
						port: "autocomplete-str",
						dataType: "jsonp",
						url: 'http://suggest.yandex.ru/suggest-ya.cgi',
						data: {
							"v": 3,
							"limit": 10,
							"part": query,
							"pos": query.length
						},
						success: function(data) {
							var i, l;
							for (i = 0, l = data[1].length; i < l; i++) {
								if (typeof(data[1][i]) == 'object' && data[1][i] instanceof Array) {
									data[1][i][1] = decode_entities(data[1][i][1]);
									data[1][i][2] = decode_entities(data[1][i][2]);
								} else {
									data[1][i] = decode_entities(data[1][i]);
								}
							}
							that["cache"][data[0]] = data[1];
							process(that["cache"][data[0]]);
						}
					});
			},
			"matcher": function (item) { return true; },
			"sorter": function (items) { return items; },
			"highlighter": function (item) {
				var query=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
				var bComplex=(typeof(item)=='object' && item instanceof Array);
				var axes=bComplex?item[1]:item;
				axes=axes.replace(new RegExp('(' + query + ')', 'ig'),function ($1,match) {
					return '<strong>'+match+'</strong>';
				});
				if(bComplex) {
					switch(item[0]) {
						case "nav":
							axes='<strong class="decorate">'+item[2]+'</strong> &mdash; '+axes;
							break;
						case "fact":
							axes=axes +' &mdash; '+item[2];
							break;
					}
				}
				return axes;
			},
			"updater": function (item) {
				var aParts=item.split(",");
				var bSearch=true;
				if(aParts.length>=3) {
					switch(aParts.shift()) {
						case "nav":
							item=aParts[1];
							break;
						case "fact":
							item=aParts.shift();
							break;
						default:
							item=aParts.shift();
							break;
					}
				}
				if(bSearch)
					this.$element.one("change",function() {
						$(this.form).submit();
					});
				return item;
			}
		}).click(function() {
			var el=$(this);
			if(el.val().length>0) el.trigger($.Event('keyup', { keyCode: undefined }));
			if(el.attr('url')) setTimeout(function(){ el.select(); },100);
		});
	};
	var fEmbedIframe=function(oOpts)
	{
		var docElem = window.document;
		var iframe = docElem.createElement('iframe');

		iframe.style.border = '0px';
		iframe.style.backgroundColor = 'transparent';
		iframe.style.verticalAlign = 'bottom';
		iframe.setAttribute('frameborder', '0');
		iframe.setAttribute('marginwidth', '0');
		iframe.setAttribute('marginheight', '0');
		iframe.setAttribute('hspace', '0');
		iframe.setAttribute('vspace', '0');
		iframe.setAttribute('width', '50%');
		iframe.setAttribute('height','1');
		iframe.setAttribute('scrolling', 'no');
		iframe.setAttribute('allowtransparency', 'true');
		iframe.id='search_hold_helper';

		$(iframe).css({
			"position": "absolute",
			"z-index": -1
		}).prependTo("#search div.hold");

		if (iframe.contentWindow){
			iframe = iframe.contentWindow;
		}else{
			if (iframe.contentDocument && iframe.contentDocument.document){
				iframe = iframe.contentDocument.document;
			}else{
				iframe = iframe.contentDocument;
			}
		}

		iframe.document.open();
		iframe.document.write('<body onresize="parent.parent.runCore.resize_search();"></body>');
		iframe.document.close();
		return true;
	}
	return function(aItems,opts) {
		if(bIsInited)
			return bIsInited;
		bIsInited=true;

		var sQueryInputSelector="#search input[name='str']";
		var oQueryInput=$(sQueryInputSelector);
		var oAxes=$("#search input[name=url]");
		var self=this;

		if(oQueryInput.length<=0)
			return bIsInited;

		$("form#search,#search form").submit(function(e){
			if(oQueryInput.attr("url") && (oQueryInput.val()==oQueryInput.attr("placeholder") ||  oQueryInput.val().length<1)) {
				fOpenExternalLink(oQueryInput.attr("url"));
				return false;
			}
			if(oQueryInput.val().toString().length<1)
				return false;
			return true;
		});
		oQueryInput.val(this.get_option("search"));
		if(opts && typeof(opts["suggest"])=="function")
			opts["suggest"](sQueryInputSelector);
		else
			fInitSuggest(sQueryInputSelector);
		oQueryInput.on("focus change keyup",function(e){
			var el=$(this);
			if(el.val().toString().length>0)
				$("input[type=reset]",this.form).css({
					"visibility": "visible"
				});
			else
				$("input[type=reset]",this.form).css({
					"visibility": "hidden"
				});
			(function(el){
				if(el.length>0 && !el.hasClass("extended"))
				{
					el.addClass("extended");
					fEmbedIframe();
					self.resize_search();
				}
			})(el.parents(".b-search"));
		});
		$("#search input[type=reset]").click(function(e){
			setTimeout(function(){
				oQueryInput.trigger($.Event('keyup', { keyCode: undefined }));
			},10);
		});

		var sHint=oQueryInput.attr("placeholder");
		(function(el) {
			if($('html').hasClass('ie6'))
				return;

			$(el).each(function(){
				var select=$(this);
				var startValue = $(this).find('option:selected',this).text();
				select.wrap('<span class="custom_select"></span>').parent().append('<i class="b-icon icon-down"></i><span class="val">'+startValue+'</span>');
				select.on({
					"focus": function(){
						$(this).parent().addClass('focused_select');
					},
					"blur": function(){
						$(this).parent().removeClass('focused_select');
					},
					"change": function(){
						var el=$('option:selected',this);
						var sItemHint=el.attr("data-hint") || sHint;
						val=el.text();
						$(this).parent().find('span').text(val);
						oQueryInput.attr("placeholder",sItemHint);
					},
					"keyup": function(e) {
						if(e.keyCode == 38 || e.keyCode == 40) {
							val = $('option:selected',this).text();
							$(this).parent().find('span').text(val);
						}
					}
				}).css({
					'opacity':'0',
					'height':select.parent().height(),
					'-khtml-appearance':'none'
				});
				oQueryInput.attr("placeholder",$(this).find('option:selected',this).attr("data-hint") || sHint);
			});
		})($("#search .c_sl"));

		if(!aItems || aItems.length<1)
			return bIsInited;

		var A=[];
		var B=[];
		var bHavePlaceholder=Modernizr.input.placeholder;

		$.each(aItems,function(){
			var sItemHint=this.length<4?
				sHint:
				(this[3]?this[3]:sHint);
			switch(this[0]) {
				case "advertisement":
					oQueryInput.val(this[1]).attr({
						"placeholder": this[1],
						"url": this[2]
					});
					if(!bHavePlaceholder)
						oQueryInput.val(this[1]);
					break;
				case "default":
					oQueryInput.attr({
						"placeholder": this[1]
					});
					if(!bHavePlaceholder)
						oQueryInput.val(this[1]);
					break;
				default:
					if(this[2]) {
						A.push((function(id,title,hint) {
							return (function(title,hint) {
								return '<li id="search-'+id+'-target" class="searchtabs__li" data-type="primary"><a class="searchtabs__a" title="'+title+'" data-target="#search-'+id+'-target" data-hint="'+hint+'">'+title+'</a></li>';
							})(title.replace(/"/g,"&quot"),hint.replace(/"/g,"&quot"));
						})(this[0],this[1],sItemHint));
						B.push((function(id,title,hint) {
							return (function(title,hint) {
								return '<li id="search-'+id+'-semitarget" style="display: none;"><a class="searchtabs__a" title="'+title+'" data-target="#search-'+id+'-target" data-hint="'+hint+'">'+title+'</a></li>';
							})(title.replace(/"/g,"&quot"),hint.replace(/"/g,"&quot"));
						})(this[0],this[1],sItemHint));
					} else {
						A.push((function(id,title,hint) {
							return (function(title,hint) {
								return '<li id="search-'+id+'-target" class="searchtabs__li searchtabs-more__li" data-type="secondary"><a class="searchtabs__a" title="'+title+'" data-target="#search-'+id+'-target" data-hint="'+hint+'">'+title+'</a></li>';
							})(title.replace(/"/g,"&quot"),hint.replace(/"/g,"&quot"));
						})(this[0],this[1],sItemHint));
						B.push((function(id,title,hint) {
							return (function(title,hint) {
								return '<li><a class="searchtabs__a" title="'+title+'" data-target="#search-'+id+'-target" data-hint="'+hint+'">'+title+'</a></li>';
							})(title.replace(/"/g,"&quot"),hint.replace(/"/g,"&quot"));
						})(this[0],this[1],sItemHint));
					}
					break;
			}
		});
		$("#search ul.b-search-tabs li.searchtabs__li").not("li.searchtabs-more").remove();
		$("#search ul.searchtabs-popup__ul li.searchtabs__li").remove();
		$(A.join("")).prependTo("#search ul.b-search-tabs");
		$(B.join("")).prependTo("#search ul.searchtabs-popup__ul");

		var elEtc=$("#search li#etc");
		var fTM=(function() {
			var tid=false;
			return function (fn,ttl) {
				if(tid!==false) {
					clearTimeout(tid);
					tid=false;
				}
				if(typeof(fn)=="function")
					tid=setTimeout(function() {
						tid=false;
						fn();
					},ttl | 200);
			};
		})();
		var sHiddenItem=false;

		$("#search a[data-target]").not("a.searchtabs__open").click(function(e){
			var el=$(this);
			e.preventDefault();
			if(!el.parent('li').hasClass('active'))
				el.tab("show");
			return false;
		}).on("show",function(e) {
			var el=$(e.target);
			var sTarget=el.attr("data-target");
			if(elEtc.hasClass('active-searchtabs-more'))
				elEtc.removeClass('active-searchtabs-more');
			if(el.parents('ul').hasClass('searchtabs-popup__ul')) {
				if(!sHiddenItem) {
					sHiddenItem="#"+$("#search ul.b-search-tabs li[data-type=primary]").last().hide().attr("id");
					$("#search "+sHiddenItem.replace("target","semitarget")).show();
				} else if(sHiddenItem==sTarget) {
					$("#search "+sHiddenItem.replace("target","semitarget")).hide();
					$("#search "+sHiddenItem).show();
					$("#search li[data-type=secondary]").addClass('searchtabs-more__li');
					sHiddenItem=false;
				} else
					$("#search li[data-type=secondary]").addClass('searchtabs-more__li');
			}

			$("#search "+sTarget).removeClass('searchtabs-more__li');
			oAxes.val(sTarget.replace(/^#search\-([0-9]+)\-.+$/,"$1"));
			oQueryInput.attr("placeholder",el.attr("data-hint"));
		});
		$("li#search-"+oAxes.val()+"-target a[data-target]").tab("show");


		elEtc.bind({
			"click": function(e) {
				var el=$(this);
				if(!el.hasClass('active-searchtabs-more'))
					fTM(function(){ el.addClass('active-searchtabs-more'); });
			},
			"mouseover": function(e) {
				var el=$(this);
				fTM();
			},
			"mouseout": function(e) {
				var el=$(this);
				fTM(function(){ el.removeClass('active-searchtabs-more'); },300);
			}
		});
		return bIsInited;
	}
})(),
"resize_search": (function(){
	var resize_callback=function() {
		var w1,w2,w,items,holder;

		holder = $("#search div.hold");
		w1=holder.width()-(function(x){
			return isFinite(x)?x:5;
		})(parseInt(holder.data("delta"), 10));
		w2=0;

		items=$("#search ul.b-search-tabs li.searchtabs__li:visible").each(function(){
			w2+=$(this).outerWidth();
		});

		if(w2>w1) {
			items.filter("li[data-type=primary]").not("li.active").reverse().each(function(){
				if(w2>w1) {
					var el=$(this);
					var w=el.outerWidth();
					w2-=w;
					el.addClass("searchtabs-more__li").attr({
						"data-type": "secondary",
						"data-type-old": "primary",
						"data-width": w
					});
					$("#search li.searchtabs-more li#"+el.attr("id").toString().replace("-target","-semitarget")).show();
				}
			});
		}
		else if(w2<w1)
		{
			while(w2<w1) {
				items=$("ul.b-search-tabs li.searchtabs__li[data-type-old]").not("li.active").first();
				if(items.length<1)
					break;
				w=parseInt(items.attr("data-width"),10);
				if(w2+w>=w1)
					break;
				w2+=w;
				items.removeAttr("data-type-old").removeAttr("data-width").attr("data-type","primary").removeClass("searchtabs-more__li");
				$("li.searchtabs-more li#"+items.attr("id").toString().replace("-target","-semitarget")).hide();
			}
		}
	};
	var xTimer=false;
	var tryCount=0;

	if(!$.fn.reverse)
		$.fn.reverse=[].reverse;

	return function() {
		if(tryCount>5) {
			tryCount=0;
			if(xTimer!==false) {
				clearTimeout(xTimer);
				xTimer=false;
			}
			resize_callback();
		} else {
			if(xTimer!==false) {
				clearTimeout(xTimer);
				xTimer=false;
			}
			tryCount+=1;
			setTimeout(function(){
				resize_callback();
				xTimer=false;
				tryCount=0;
			},100);
		}
	}
})()
});

runCore.class_method({
"init_auth_guest": (function() {
	var aIsInited={};
	var AutofillListener=function(el) {
		return function() {
			if(el.val()!=el.data("data-value")) {
				el.trigger("change");
				clearInterval(el.data("tid"));
				el.removeData("tid");
				el.removeData("data-value");
			}
		};
	};
	var hooks={
		"title": [function(oContext,aSelectors) {
			var aFields=$.map(aSelectors,function(v){
				return $(v,oContext);
			});
			var iTm=false;
			var fEventHandler=function(e) {
				var el=$(this);
				if(e && oContext.hasClass("mainauth-error"))
					oContext.removeClass("mainauth-error");
				var bResult=true;
				for(var i=aFields.length-1;i>=0;i--)
					if(aFields[i].val().toString().length==0) {
						bResult=false;
						break;
					}
				if(bResult) {
					oContext
						.removeClass("disable-authform")
						.find("[disabled=disabled]").removeAttr("disabled");
					$("[type=submit]",oContext).removeClass("disabled");
				} else {
					oContext
						.addClass("disable-authform")
						.find("[type=submit]").attr("disabled","disabled");
					$("[type=submit]",oContext).addClass("disabled");
				}
				if(e && el.data("tid")) {
					clearInterval(el.data("tid"));
					el.removeData("tid");
					el.removeData("data-value");
				}
			};
			if(oContext.hasClass("mainauth-error")) {
				(function(login){
					if(login)
						$('input[name=login]',oContext).val(login);
				})(this.cookie('auth_attempt'));
			}
			this.cookie('auth_attempt',null);
			$(aSelectors.join(",")).each(function(){
				var el=$(this);
				el.data("data-value",el.val());
				el.data("tid",setInterval(AutofillListener(el),200));
			}).on("focus change keyup",fEventHandler);
			fEventHandler();
		},function(oContext,aSelectors) {
			var self=this;
			var fTM=(function() {
				var tid=false;
				return function (fn,ttl) {
					if(tid!==false) {
						clearTimeout(tid);
						tid=false;
					}
					if(typeof(fn)=="function")
						tid=setTimeout(function() {
							tid=false;
							fn();
						},ttl | 200);
				};
			})();
			$("div.mainauth-resources",oContext).on({
				"mouseenter": function() { fTM(); },
				"mouseleave": function() {
					var el=$(this);
					fTM(function () { el.removeClass("active-mainauth-resources"); }, 500);
				}
			}).find("a[data-value]").on("click",function(e) {
				e.preventDefault();
				$("input[name=sid]",oContext).val($(this).attr("data-value").toString());
				$("div.mainauth-resources",oContext).removeClass("active-mainauth-resources");
				fTM();
				oContext.submit();
				return false;
			});
			$("a.mainauth-resources-open",oContext).on("click",function(e){
				e.preventDefault();
				if(!oContext.hasClass("disable-authform"))
					$(this).parents("div.mainauth-resources").addClass("active-mainauth-resources");
				return false;
			});
			$("[type=submit]",oContext).parents("form").on({
				"submit": function e() {
					var el=$(this);
					self.cookie('auth_attempt',$('input[name=login]',el).val());
				}
			});
		}],
		"inner":[function(oContext,aSelectors) {
			var aFields=$.map(aSelectors,function(v){
				return $(v,oContext);
			});
			var fEventHandler=function(e) {
				if(e && $(".b-auth_error",oContext).length)
					$(".b-auth_error",oContext).removeClass("b-auth_error");
				var bResult=true;
				for(var i=aFields.length-1;i>=0;i--)
					if(aFields[i].val().toString().length==0) {
						bResult=false;
						break;
					}
				if(bResult) {
					oContext
						.removeClass("disable-authform")
						.find("[disabled=disabled]").removeAttr("disabled");
					$("[type=submit]",oContext).removeClass("disabled");
				} else {
					oContext
						.addClass("disable-authform")
						.find("[type=submit]").attr("disabled","disabled");
					$("[type=submit]",oContext).addClass("disabled");
				}
			};
			$(aSelectors.join(",")).each(function(){
				var el=$(this);
				el.data("data-value",el.val());
				el.data("tid",setInterval(AutofillListener(el),200));
			}).on("focus change keyup",fEventHandler);
			fEventHandler();

			this.init_custom_popup(oContext);
		}],
		"inner-error":[function(oContext,aSelectors) {
			var aFields=$.map(aSelectors,function(v){
				return $(v,oContext);
			});
			var fEventHandler=function(e) {
				if(e && $(".b-auth_error",oContext).length)
					$(".b-auth_error",oContext).removeClass("b-auth_error");
				var bResult=true;
				for(var i=aFields.length-1;i>=0;i--)
					if(aFields[i].val().toString().length==0) {
						bResult=false;
						break;
					}
				if(bResult) {
					oContext
						.removeClass("disable-authform")
						.find("[disabled=disabled]").removeAttr("disabled");
					$("[type=submit]",oContext).removeClass("disabled");
				} else {
					oContext
						.addClass("disable-authform")
						.find("[type=submit]").attr("disabled","disabled");
					$("[type=submit]",oContext).addClass("disabled");
				}
			};
			$(aSelectors.join(",")).each(function(){
				var el=$(this);
				el.data("data-value",el.val());
				el.data("tid",setInterval(AutofillListener(el),200));
			}).on("focus change keyup",fEventHandler);
			fEventHandler();

			this.init_custom_popup(oContext).show();
		}],
		"popup":[function(oContext,aSelectors,opts){
			if(!oContext.length)
				return false;
			opts=opts || {};
			var form_name=(opts!='undefined' && opts=='finance')?'authorize-form-finance':'authorize-form';
			var self = this;
			var oMessage = {
				"rus": {
					"Войти": "Войти",
					"Закрыть": "Закрыть",
					"зарегистрироваться": "зарегистрироваться",
					"Логин": "Логин",
					"Пароль": "Пароль",
					"Запомнить": "Запомнить",
					"Забыли пароль": "Забыли пароль",
					"Войти как пользователь": "Войти как пользователь",
					"или": "или",
					"Неверное имя пользователя или пароль":"Неверное имя пользователя или пароль",
					"Введите имя пользователя и пароль":"Введите имя пользователя и пароль",
					"Не удалось авторизоваться через социальную сеть":"Не удалось авторизоваться через социальную сеть"
				},
				"bel": {
					"Войти": "Увайсці",
					"Закрыть": "Зачыніць",
					"зарегистрироваться": "зарэгістравацца",
					"Логин": "Лагін",
					"Пароль": "Пароль",
					"Запомнить": "Запомніць",
					"Забыли пароль": "Забылі пароль",
					"Войти как пользователь": "Увайсці як карыстальнік",
					"или": "ці",
					"Неверное имя пользователя или пароль":"Няправільнае імя карыстальніка або пароль",
					"Введите имя пользователя и пароль":"Увядзіце імя карыстальніка і пароль",
					"Не удалось авторизоваться через социальную сеть":"Не атрымалася аўтарызавацца праз сацыяльную сетку"
				}
			};
			var sForumUrl = (this.get_param("forum_host") || this.get_option("host"))+"forum/check_auth.php";
			oContext.append('<div id="popupLogin"><span href="#" data-target-popup="'+form_name+'"></span><div class="popupLogin disable-authform hidden" data-popup="'+form_name+'"><a href="#" class="close  b-icon icon-close" title="'+this.i18n("Закрыть",oMessage)+'">'+this.i18n("Закрыть",oMessage)+'</a>'+
				'<div class="left_col"><div class="header"><div class="title">'+this.i18n("Войти",oMessage)+'</div> '+this.i18n("или",oMessage)+' <a href="http://profile.tut.by/newtut.html" title="'+this.i18n("зарегистрироваться",oMessage)+'">'+this.i18n("зарегистрироваться",oMessage)+'</a></div>'+
				'<form method="post" action="https://profile.tut.by/authorize/" accept-charset="utf-8" class="b-auth-content"><input type="hidden" name="login_action" value="login"><input type="text" class="i-p" placeholder="'+this.i18n("Логин",oMessage)+'" name="login">'+
				'<input type="password" name="password" class="i-p" value="" placeholder="'+this.i18n("Пароль",oMessage)+'"><p class="error_text"></p><div class="b-hold"><input type="submit" class="button " value="'+this.i18n("Войти",oMessage)+'">'+
				'<span class="input_wrapper"><input type="checkbox" name="memory" id="memory" value="1" checked="checked"><label for="memory">'+this.i18n("Запомнить",oMessage)+'</label></span></div><a href="http://profile.tut.by/secret.html" class="b-auth-recall" title="'+this.i18n("Забыли пароль",oMessage)+'?">'+this.i18n("Забыли пароль",oMessage)+'?</a>'+
				'</form><h4>'+this.i18n("Войти как пользователь",oMessage)+'</h4><ul class="b-vlist"><li class="b-vlist__li"><a rel="nofollow" href="http://profile.tut.by/externalauth.html?login=facebook&return_url='+sForumUrl+'" data-social-login="fb" target="popup_auth_frame"><i class="b-icon icon-fb"></i>Facebook</a></li>'+
				'<li class="b-vlist__li"><a rel="nofollow" href="http://profile.tut.by/externalauth.html?login=google&return_url='+sForumUrl+'" data-social-login="google" target="popup_auth_frame"><i class="b-icon icon-gplus"></i>Google+</a></li>'+
				'<li class="b-vlist__li"><a rel="nofollow" href="http://profile.tut.by/externalauth.html?login=vk&return_url='+sForumUrl+'" data-social-login="vk" target="popup_auth_frame"><i class="b-icon icon-vk"></i>Вконтакте</a></li></ul></div></div>'+
				'<iframe id="popup_auth_frame" name="popup_auth_frame" class="hidden"></iframe></div>');
			var oPopup = this.init_custom_popup($("#popupLogin",oContext),"hidden",{
				"init":function(e,popup){
					var oPopup = $(popup.sContext);
					$("body").prepend(oPopup);
					$('.close',oPopup).on("click",function(e){
						e.preventDefault();
						popup.hide();
						return false;
					});
					var updateCommentsBlock = function(target){
						if(typeof(XComment)=="object"){
							XComment.load(function(){popup.hide()})
							return;
						}
						var iPage = $("#comments-block [data-current-page]").attr("data-current-page") || 1;
						var data = {
							"id": self.news_id,
							"iPageNo":iPage
						};
						if($("#comments-block").attr("data-mode")=="adaptive")
							data.adaptive = 1;
						$.getJSON((self.get_option("host") || self.get_param("forum_host"))+"forum/get_comments_form.php?jsonp=?",data,function(json,sStatus) {
							if(json.content){
								$('#comments-block').html(json.content);
								if(target.length)
									$("#"+target,'#comments-block').click();
								popup.hide();
							}
						},"jsonp");
					}
					var sUrl = window.location.href;
					var oIframe = oPopup.find("iframe");
					/**
					 * Observe iframe load func
					 */
					$(window).on("message", function (event, data, origin) {
						if (!data) {
							data = event.originalEvent ? event.originalEvent.data : event.data;
						}
						if (!origin) {
							origin = event.originalEvent ? event.originalEvent.origin : event.origin;
						}
						if(!/http[s]?\:\/\/.*tut.by(?:\:[0-9]+)?\/?$/i.test(origin))
							return false;
						if(data == 1){
							updateCommentsBlock(oPopup.find("[data-target-popup]").attr("data-target") || "");
							$(document).off("click",'a.reply');
							$(document).off("auth_error",'.icon-karma-forum');
						}else{
							showError(oPopup,"Не удалось авторизоваться через социальную сеть");
						}
					});

					if(self.initFB(sUrl,{
						"fb":{
							"appId": '154571734754018' // App ID
						}
					})){
						oPopup.find("[data-social-login=fb]").click(function(e) {
							e.preventDefault();
							var elem = $(this);
							FB.login(function(response) {
								if (response.authResponse) {
									oIframe.attr("src",elem.attr("href"));
								} else {
									showError(oPopup,"Не удалось авторизоваться через социальную сеть");
								}
							}, {
								"scope": 'email, user_birthday'
							});
							return false;
						});
					}

					if(self.initVK(sUrl)){
						oPopup.find("[data-social-login=vk]").click(function(e) {
							e.preventDefault();
							var elem = $(this);
							VK.Auth.login(function(response) {
								if (response.session) {
									oIframe.attr("src",elem.attr("href"));
								} else {
									showError(oPopup,"Не удалось авторизоваться через социальную сеть");
								}
							}, 4194304);//4194304 -- email access permissions
							return false;
						});
					}

					if(self.initGPlus(sUrl)){
						oPopup.find("[data-social-login=google]").click(function(e) {
							e.preventDefault();
							var elem = $(this);
							var opts = self.oGPlusSettings.gplus;
							opts.immediate = false;
							gapi.auth.authorize(opts ,function(response) {
								if (response.status.signed_in) {
									oIframe.attr("src",elem.attr("href"));
								} else {
									showError(oPopup,"Не удалось авторизоваться через социальную сеть");
								}
							});
							return false;
						});
					}

					var showError = function(oPopup,sText){
						el = oPopup.find("[data-target-popup]");
						oTarget = oPopup.find("[data-popup="+el.attr("data-target-popup")+"]");
						oTarget.addClass('b-auth_error');
						oTarget.find(".error_text").html(self.i18n(sText,oMessage));
					};
					var oForm = oPopup.find("form");
					oForm.submit(function(e){
						e.preventDefault();
						var el = $(this);
						var trim=function (s) { return s.replace(/(?:^\s+|\s+$)/g,""); };
						var sLogin = trim(el.find("input[name=login]").val());
						var sPassword = trim(el.find("input[name=password]").val());
						if(sPassword.length && sLogin.length)
						{
							self.authorize(sLogin,sPassword,function(data){
								if(data.response.error){
									showError(oPopup,"Неверное имя пользователя или пароль");
								}else{
									updateCommentsBlock(oPopup.find("[data-target-popup]").attr("data-target") || "");
									$(document).off("click",'a.reply');
									$(document).off("auth_error",'.icon-karma-forum');
								}
							});
						}else
							showError(oPopup,"Введите имя пользователя и пароль");
						return false;
					});
				},
				"shown":function(e,popup){
					$("body").prepend('<div class="overlay"></div>');
					var oPopup = $(popup.sContext);
					var el = oPopup.find("[data-target-popup]");
					oPopup.find("[data-popup="+el.attr("data-target-popup")+"]").removeClass('b-auth_error');
					oPopup.find(".error_text").html("");
				},
				"hide":function(e,popup){
					$("body").find(".overlay").remove();
				}
			});
			/**
			 * live event observers
			 */
			$(document).on("auth_error",'.icon-karma-forum',function(e){
				$(oPopup.sContext).find("[data-target-popup]").attr("data-target",$(this).attr("id"));
				oPopup.show();
			});
			/**
			 * Showing auth popup on reply link click with add comments form
			 */
			if(form_name!='authorize-form-finance')
			{
				$(document).on("click",'a.reply',function(e){
				e.preventDefault();
				$(oPopup.sContext).find("[data-target-popup]").attr("data-target",$(this).attr("id"));
				oPopup.show();
				return false;
				});
			}
			else
			{
				oContext.find("*[data-target-popup=authorize-form-finance]").on("click",function(e){
				oPopup.show();
				return false;
				});
			}
		}],
		"adaptive":[function(oContext,aSelectors){
			this.init_custom_popup(oContext);
		}],
		"adaptive-error":[function(oContext,aSelectors){
			this.init_custom_popup(oContext).show();
		}],
		"responsive":[function(oContext,aSelectors,opts){
			var aFields=$.map(aSelectors,function(v){
				return $(v,oContext);
			});
			var fEventHandler=function(e) {
				var bResult=true;
				for(var i=aFields.length-1;i>=0;i--)
					if(aFields[i].val().toString().length==0) {
						aFields[i].parent().removeClass('active');
						bResult=false;
					} else
						aFields[i].parent().addClass('active');
				if(bResult) {
					oContext.find("[disabled=disabled]").removeAttr("disabled");
					$("[type=submit]",oContext).removeClass("disabled");
				} else {
					oContext.find("[type=submit]").attr("disabled","disabled");
					$("[type=submit]",oContext).addClass("disabled");
				}
			};
			var events=this.events();
			oContext.hide();
			opts=opts || {};
			events.on("show_auth",function(){
				events.emit("hide_all_menu",this);
				events.emit("hide_search",this);
				oContext.show();
			},this);
			events.on("hide_auth",function(){
				oContext.hide();
			},this);
			$(opts.activator).on("click",function(e){
				e.preventDefault();
				events.emit("show_auth",this);
			});
			oContext.on('swiperight',function(e){
				events.emit("hide_auth",this);
			});
			$(aSelectors.join(","),oContext).each(function(){
				var el=$(this);
				el.data("data-value",el.val());
				el.data("tid",setInterval(AutofillListener(el),200));
				var wrapper=$("<div class=\"inner_wrapper\"></div>").insertBefore(el);
				wrapper.prepend(el);
				wrapper.prepend("<a href=\"#\" class=\"clear b-icon icon-close_popup\"></a>");
				wrapper.on("click",function(e){
					e.preventDefault();
					var oCtx=$(this),input=$('input',oCtx);
					if(!input.val())
						return false;
					input.val('');
					oCtx.toggleClass('active');
					fEventHandler();
					return false;
				});
			}).on("focus change keyup",fEventHandler);
			fEventHandler();
		}],
		"responsive-error":[function(oContext,aSelectors,opts){
			var events=this.events();
			for(var i=0;i<hooks["responsive"].length;i++)
				hooks["responsive"][i].call(this,oContext,aSelectors);
			this.events().emit("show_auth",this);
		}],
		"responsive-inner":[function(oContext,aSelectors,opts){
			var events=this.events();
			opts=opts || {};
			$(opts.activator).on("click",function(e){
				e.preventDefault();
				events.emit("show_auth",this);
				return false;
			});
		}]
	}
	return function(sContext,sMode,opts) {
		if(!sMode)
			sMode="title";
		if(typeof(aIsInited[sMode])!="undefined" && aIsInited[sMode])
			return aIsInited[sMode];
		var oContext=$(sContext);
		if(hooks.hasOwnProperty(sMode))
			for(var i=0;i<hooks[sMode].length;i++)
				hooks[sMode][i].call(this,oContext,["input[name=login]","input[name=password]"],opts);
		aIsInited[sMode]=true;
		return aIsInited[sMode];
	};
})(),
"init_auth_user": (function() {
	var aIsInited={};
	var hooks={
		"inner":[function(oContext,opts) {
			if (opts && opts.align===false) {
				this.init_custom_popup(oContext);
			} else {
				this.init_custom_popup(oContext).on({
					"show": function(e,popup) {
						$(e.relatedTarget).css({"left": $(e.target).position().left+"px"});
					}
				});
			}
		}],
		"adaptive":[function(oContext){
			this.init_custom_popup(oContext);
		}],
		"responsive":[function(oContext,opts){
			var events=this.events();
			oContext.hide();
			opts=opts || {};
			var events=this.events();
			events.on("show_auth",function(){
				events.emit("hide_all_menu",this);
				events.emit("hide_search",this);
				oContext.show();
			},this);
			events.on("hide_auth",function(){
				oContext.hide();
			},this);
			$(opts.activator).on("click",function(){
				events.emit("show_auth",this);
			});
			oContext.on('swiperight',function(e){
				events.emit("hide_auth",this);
			});
		}],
		"responsive-inner":[function(oContext,opts){
			var events=this.events();
			opts=opts || {};
			$(opts.activator).on("click",function(e){
				e.preventDefault();
				events.emit("show_auth",this);
				return false;
			});
		}]
	};
	return function(sContext,sMode,opts) {
		if(!sMode)
			sMode="title";
		if(typeof(aIsInited[sMode])!="undefined" && aIsInited[sMode])
			return aIsInited[sMode];
		var oContext=$(sContext);
		if(hooks.hasOwnProperty(sMode))
			for(var i=0;i<hooks[sMode].length;i++)
				hooks[sMode][i].call(this,oContext,opts);
		aIsInited[sMode]=true;
		return aIsInited[sMode];
	};
})()
});
runCore.class_method({
"init_resource": (function() {
	var bInited=false;
	return function(sContext){
		if(bInited)
			return bInited;
		var oContext=$(sContext);
		(function(oContext,iWidth){
			var fDistributeByColumns=function (aItems,iColCount)
			{
				var iItemsCount, iColLength, iFixedColNo, aColumns, i, j;
				iItemsCount=aItems.length;
				if(iColCount<=1 || iItemsCount<=iColCount)
					return aItems;
				iColLength=Math.ceil(iItemsCount/iColCount);
				if((iFixedColNo=iColLength*iColCount-iItemsCount))
					iFixedColNo=iColCount-iFixedColNo;
				else
					iFixedColNo=iColCount+1;
				aColumns=[];
				for(i=0,j=0;j==iFixedColNo?iColLength-=1:0,i<iItemsCount;i+=iColLength,j++)
					aColumns.push(aItems.slice(i,i+iColLength));
				return aColumns;
			};
			var oPager=$("ul.navs",oContext);
			$("div.slides",oContext).each(function(iSlideNo){
				var aUL=$("ul",this);
				var aItems=fDistributeByColumns($("li",this),iWidth);
				for(var i=aItems.length-1;i>=0;i--) {
					var aNewUL=$("<ul></ul>");
					$.each(aItems[i],function(k,v){
						$(v).appendTo(aNewUL);
					});
					aNewUL.prependTo(this);
				}
				aUL.remove();
				$(this).attr("id","resource-slide-"+iSlideNo);
				$('<li><a data-target="#resource-slide-'+iSlideNo+'"><span></span></a></li>').appendTo(oPager);
			});
		})(oContext,parseInt($("[data-width]",oContext).attr("data-width").toString(),10));
		(function(oContext){
			var oSlideBand=$("div.main-resources-catalog-area-i",oContext);
			var aPins=$("ul.navs a[data-target]",oContext).on({
				"click": function(e) {
					var el=$(this);
					e.preventDefault();
					el.tab("show");
					return false;
				},
				"show": function(e) {
					oSlideBand.stop().animate({
						"left": (-100*parseInt($(e.target).attr("data-target").toString().replace(/^.*\-([0-9])$/,"$1"),10))+"%"
					});
				}
			}).first().tab("show");
			$("a.ar-r",oContext).on({
				"click": function(e) {
					e.preventDefault();
					$("a[data-target]",(function(a,b){
						return a.length?a:b
					})($("ul.navs li.active",oContext).next("li"),$("ul.navs li",oContext).first())).tab("show");
					return false;
				}
			});
		})(oContext);
		bInited=true;
		return bInited;
	};
})()
});
runCore.class_method({
"init_hints": (function() {
	var oHint = null,
		oHintContent = null,
		oCategoryHint = null,
		oCategoryArrow = null,
		oCategoryContent = null,
		oMonthForm = {
			"rus": ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
			"bel": ["студзеня", "лютага", "сакавіка", "красавiка", "мая", "чэрвеня", "ліпеня", "жніўня", "верасня", "кастрычніка", "лістапада", "снежня"]
		},
		oUpdateMessage = {
			"rus": {
				"Today": "Сегодня",
				"today": "сегодня",
				"Yesterday": "Вчера",
				"yesterday": "вчера",
				"Updated": "Обновлено"
			},
			"bel": {
				"Today": "Сёння",
				"today": "сёння",
				"Yesterday": "Учора",
				"yesterday": "ўчора",
				"Updated": "Абноўлена"
			}
		},
		oHintStorage = {},
		oTmStorage = {};

	var fSelectTm = function(iTm, iUpdateTm) {
		if (!isFinite(iTm)) return [iTm, false];
		return (isFinite(iUpdateTm) && iUpdateTm > iTm) ? [iUpdateTm, true] : [iTm, false];
	};
	var fTm2HumanReadable = function(oTrMap, oMonthTrMap, aTm) {
		var iTm = aTm[0];
		var bUpdated = aTm[1];
		if (!isFinite(iTm)) return "";
		iTm = iTm * 1000;
		var oTm1 = new Date(iTm);
		var oTm2 = new Date();
		var oTm3 = new Date();
		oTm3.setDate(oTm3.getDate() - 1);
		oTm1 = {
			"y": oTm1.getFullYear(),
			"m": oTm1.getMonth(),
			"d": oTm1.getDate(),
			"h": oTm1.getHours(),
			"i": oTm1.getMinutes()
		};
		oTm2 = {
			"y": oTm2.getFullYear(),
			"m": oTm2.getMonth(),
			"d": oTm2.getDate()
		};
		oTm3 = {
			"y": oTm3.getFullYear(),
			"m": oTm3.getMonth(),
			"d": oTm3.getDate()
		};
		var aPart = [oTm1["d"] + " " + oMonthTrMap[oTm1["m"]], oTm1["h"] + (oTm1["i"] > 9 ? ":" : ":0") + oTm1["i"]];
		if (oTm1["y"] == oTm2["y"] && oTm1["m"] == oTm2["m"] && oTm1["d"] == oTm2["d"]) {
			aPart[0] = bUpdated ? oTrMap["Updated"] + ": " + oTrMap["today"] : oTrMap["Today"];
		} else if (oTm1["y"] == oTm3["y"] && oTm1["m"] == oTm3["m"] && oTm1["d"] == oTm3["d"]) {
			aPart[0] = bUpdated ? oTrMap["Updated"] + ": " + oTrMap["yesterday"] : oTrMap["Yesterday"];
		}
		return "<p><b>" + aPart.join(", ") + "</b></p>";
	};
	var fShowHint = function(e, xself, id) {
		var left=Math.min($(window).innerWidth()-315,e.pageX);
		if (xself && id && oHintStorage[id]) {
			var sHTML = fTm2HumanReadable(
			oUpdateMessage[xself.options["lang"]], oMonthForm[xself.options["lang"]], oTmStorage[id]) + oHintStorage[id];
			oHintContent.html(sHTML);
			if (e.pageX && e.pageY) oHint.css({
				"left": left + 10,
				"top": e.pageY + 5
			}).show();
			else
				oHint.show();
		} else oHint.css({
			"left": left + 10,
			"top": e.pageY + 5
		});
	};
	var fInitArticleHints = function(iLastVisit) {
		var xself = this;

		$("*[data-tm]").filter(function() {
			var iTm = parseInt($(this).attr("data-tm"), 10);
			if (!isFinite(iTm)) iTm = 0;
			return (iTm - iLastVisit > 1);
		}).addClass("x");

		var ActionTargets = $("*[data-has-hint=1][data-id]");

		if (ActionTargets.length < 1) return true;

		ActionTargets.each(function() {
			var el = $(this);
			var sId = el.attr("data-id");
			if (!oTmStorage.hasOwnProperty(sId)) oTmStorage[sId] = fSelectTm(parseInt(el.attr("data-tm"), 10), parseInt(el.attr("data-update-tm"), 10));
		});

		oHint = $('<div class="tooltip"><div class="tooltip-inner"></div></div>').prependTo("body");
		oHintContent = $("div.tooltip-inner", oHint);

		ActionTargets.mouseenter(function() {
			var el = $(this);
			var sId = el.attr("data-id");
			if (oHintStorage.hasOwnProperty(sId)) return;
			oHintStorage[sId]=el.attr("data-hint") || false;
			if (oHintStorage[sId]){
				return;
			}

			$.ajax({
				"type": "GET",
				"url": xself.options["host"] + "informer/hint/" + xself.options["lang"] + "/" + sId + ".html",
				"dataType": "html",
				"data": {},
				"success": function(sData, sStatus) {
					if (sStatus == "success") {
						sData = sData.match(/<html>/) ? false : sData.replace(/(^\s+|\s+$)/g, "");
						if (sData) {
							oHintStorage[sId] = "<p>" + sData + "</p>";
							el.filter("*[data-hint-source]").add($("*[data-hint-source]", el)).trigger("ready", [sId]);
						}
					}
				},
				"error": function(XMLHttpRequest, textStatus, errorThrown) {},
				"complete": function(XMLHttpRequest, textStatus) {}
			});
		}).filter("*[data-hint-source]").add($("*[data-hint-source]", ActionTargets)).on("ready", function(e, id) {
			var el = $(this);
			el.data("id", id);
			if (el.data("is-hinted")) fShowHint(e, xself, id);
		}).mouseenter(function(e) {
			var el = $(this);
			if (!el.data("is-hinted")) {
				el.data("is-hinted", true);
				fShowHint(e, xself, el.data("id"));
			}
		}).mouseleave(function(e) {
			var el = $(this);
			if (el.data("is-hinted")) {
				el.data("is-hinted", false);
				oHint.hide();
			}
		}).mousemove(function(e) {
			fShowHint(e);
		});
		return true;
	};
	var fInitRubricHints = function() {
		var xself = this;

		var ActionTargets = $("a[data-rubric-ad]").filter(function() {
			return $(this).attr("data-rubric-ad").toString().length > 0 && this.className.match(/\b(r\d+|rGT\d+)\b/);
		}).each(function() {
			var el = $(this);
			el.data("rubric-ad", el.attr("data-rubric-ad"));
			el.removeAttr("data-rubric-ad");
			el.data("is-viewed", false);
			el.data("rubric-key", this.className.match(/\b(r\d+|rGT\d+)\b/)[1]);
		});
		if (ActionTargets.length < 1) return true;

		oCategoryHint = $('<div class="tooltip tooltip-ad"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>').prependTo("body");
		oCategoryArrow = $("div.tooltip-arrow", oCategoryHint);
		oCategoryContent = $("div.tooltip-inner", oCategoryHint);

		var fTM = (function() {
			var tid = false;
			return function(fn, ttl) {
				if (tid !== false) {
					clearTimeout(tid);
					tid = false;
				}
				if (typeof(fn) == "function") tid = setTimeout(function() {
					tid = false;
					fn();
				}, ttl ? ttl : 800);
			};
		})();
		var fDimensions = function() {
			return {
				"width": this.outerWidth(),
				"height": this.outerHeight()
			};
		};
		var fInfo = function() {
			return {
				"c": this.offset(),
				"d": fDimensions.call(this)
			};
		};

		var fSetPositions = function() {
			(function(box, arrow, hint, ad) {
				if (ad.c.left + Math.round(ad.d.width / 2) > box.c.left + hint.d.width - arrow.d.width) {
					if(box.c.left != ad.c.left + ad.d.width - hint.d.width)	{
						box.c.left=ad.c.left + ad.d.width - hint.d.width
						return arguments.callee(box, arrow, hint, ad);
					}
				}
				hint.c = box.c;
				hint.c.top += box.d.height + arrow.d.height;

				arrow.c.left = ad.c.left + Math.round(ad.d.width / 2) - box.c.left;

				oCategoryArrow.css("left", arrow.c.left);
				oCategoryHint.css(hint.c).show();
				return true;
			})(
			fInfo.call(this.parents("table")), fInfo.call(oCategoryArrow), fInfo.call(oCategoryHint), fInfo.call(this));
		}

		oCategoryHint.mouseenter(function(e) {
			fTM();
		}).mouseleave(function(e) {
			fTM(function() {
				oCategoryHint.hide();
			}, 1);
		});

		ActionTargets.mouseenter(function(e) {
			var el = $(this);

			el.data("is-hinted", true);

			fTM();

			var sRubricKey = encodeURIComponent(el.data("rubric-key"));

			if (!el.data("is-viewed")) {
				el.data("is-viewed", true);
				$.get(xself.options["host"] + "stat/view/" + sRubricKey + "?uuid=" + new Date().getTime());
			}
			oCategoryContent.html(el.data("rubric-ad"));
			$("a", oCategoryContent).click(function() {
				$.get(xself.options["host"] + "stat/click/" + sRubricKey + "?uuid=" + new Date().getTime());
				return true;
			});

			fSetPositions.call(el);
		}).mouseleave(function() {
			var el = $(this);
			if (el.data("is-hinted")) {
				el.data("is-hinted", false);
				fTM(function() {
					oCategoryHint.hide();
				});
			}
		}).click(function(e) {
			var el = $(this);
			var sRubricKey = encodeURIComponent(el.data("rubric-key"));
			$.get(xself.options["host"] + "stat/click/" + sRubricKey + "?uuid=" + new Date().getTime());
			return true;
		});

		return true;
	};
	return function() {
		var self=this;
		if (window.location.toString().match(/\?zzz/)) $("span.zzz").show();

		var iLastVisit = parseInt(this.cookie("last_visit"), 10);
		if (!isFinite(iLastVisit)) iLastVisit = 0;
		this.cookie("last_visit", this.options["time"], {
			"expires": 3
		});

		fInitArticleHints.call(this, iLastVisit);
		fInitRubricHints.call(this);
		if (typeof(this.setStatHooks)=='function') {
			$(document).ready(function(){
				self.setStatHooks();
			});
		}
	};
})()
});

(function(){
function fI18N(oLoc,sLoc){ return typeof(oLoc[sLoc])=="string"?oLoc[sLoc]:oLoc["rus"]; };
function track_ga_event(A,B,C) {
	if (!window.ga) return false;
	var trackers=window.ga.getAll();
	for(var i=0; i<trackers.length;i++)
		window.ga(trackers[i].get('name')+'.send','event',A,B,C);
	return true;
}
runCore.class_method({
"modal_geotarget": (function(){
	var oPageType={
		"desktop": (function() {
			var oI18N={
				"rus":{
					"close": "Закрыть",
					"title": "Выберите свой населенный пункт",
					"brief": "<p>Кликнув по названию города, вы сможете читать новости своего региона в отдельной рубрике на главной странице TUT.BY,<br />а также следить за курсами валют, погодой и афишей именно вашего города.<br/>Поменять настройку можно, выбрав другой город таким же образом.</p>"
				},
				"bel":{
					"close": "Зачынiць",
					"title": "Выбярыце свой населены пункт",
					"brief": "<p>Клікнуўшы на назву горада, вы зможаце чытаць навіны свайго рэгіёну ў асобнай рубрыцы на галоўнай старонцы TUT.BY,<br />а таксама сачыць за курсамі валюты, надвор'ем і афішай менавіта вашага горада.<br/>Змяніць наладу можна выбраўшы іншы горад тым жа чынам.</p>"
				}
			};
			var sHTML="";
			var fCompose=function(oRegion,sHost,sLang,sCurrentGeoTarget) {
				return '<div class="gs_title">'+fI18N(oRegion["name"],sLang)+'</div><ul>'+$.map(oRegion["items"],function(oItem,i) {
					return '<li id="gtgt'+oItem["id"]+'"'+(oItem["id"]==sCurrentGeoTarget?' class="current"':'')+'><a href="'+sHost+'?gtgt='+oItem["id"]+'" data-gtgt="'+oItem['id']+'">'+fI18N(oItem["name"],sLang)+'</a></li>';
				}).join("")+'</ul>';
			};
			var fBuildModal=function(oInstance) {
				if(sHTML.length>0)
					return sHTML;
				var sHost=oInstance.get_option("host");
				var sLang=oInstance.get_option("lang");
				var sCurrentGeoTarget=oInstance.get_option("geotarget")[0];
				sHTML+=
					'<div id="geoselector" class="modal"><div class="modal-content"><div class="modal-content-inner">'+
						'<div class="modal-header"><div class="content">'+
							'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+oInstance.i18n("close",oI18N)+'</button>'+
							'<h3>'+oInstance.i18n("title",oI18N)+'</h3>'+
							oInstance.i18n("brief",oI18N)+
						'</div></div><div class="modal-spacer"></div>'+
						'<div class="modal-body"><div class="content"><table cellspacing="0" cellpadding="0" border="0"><tbody><tr>'+
							$.map(oInstance.get_param("geotargets"),function(oItem,i){ return '<td>'+fCompose(oItem,sHost,sLang,sCurrentGeoTarget)+'</td>'; }).join("")+
						'</tr></tbody></table></div></div><div class="modal-spacer"></div>'+
					'</div></div></div>';
				return sHTML;
			};
			return function() {
				var self=this;
				var oModal=$(fBuildModal(this)).prependTo("body").on({
					"show": function(e) {
						var el=$(this);
						(function(el,h,w){
							var H=$(window).height(),
								W=$(window).width(),
								dH=Math.max(20,Math.floor((H-h)/2)),
								dW=Math.max(20,Math.round((W-w)/2));
							if(el.css("position")=="fixed")
								el.css({
									"top": dH,
									"bottom": dH
								});
							else
								el.css({
									"top": dH+$(document).scrollTop(),
									"bottom": dH
								});
							(function(el,h,w,H,W){
								var innerW=Math.ceil(100*Math.min(w,el.width())/W);
								if(el.width()>w) {
									el.css({
										"width": w
									});
									$("div.modal-body",el).css({
										"overflow-x": "auto"
									});
								}
								$("div.modal-header, div.modal-body",el).each(function() {
									$(this).css("width","100%");
								});
								var el_body=$("div.modal-body",el),
									dy=el_body.outerHeight()-el_body.height();
								$("div.modal-spacer",el).each(function(){
									dy+=$(this).height();
								});
								el_body.css({
									"height": h-$("div.modal-header",el).outerHeight()-dy
								});
							})($("div.modal-content",el),el.height(),W-2*dW,H,W);
							
						})(el,el.outerHeight(),el.width());
						el.on("click",function(e) {
							if($("div.modal-content").find(e.target).length<1 && oModal!==undefined)
								oModal.modal("hide");
						});
						$('a[data-gtgt]',el).on('click',function(e){
							var el=$(this);
							self.cookie('geohint',-1,{'expires': 180});
							track_ga_event('Region','Change',el.text());
							setTimeout(function(){
								window.location='http://www.tut.by/route/geotarget/'+el.attr('data-gtgt')+'/?l='+encodeURIComponent(window.location.toString());
							},100);
							return false;
							
						});
					},
					"hidden": function(e) {
						var el=$(this);
						el.off("click");
						$('a[data-gtgt]',el).off('click');
						el.remove();
					}
				}).modal();
			}
		})(),
		"adaptive": (function() {
			var oI18N={
				"rus": {
					"title": "Выберите свой населённый пункт, и читайте новости своего региона в отдельной рубрике",
					"towns": "Города",
					"centre": "Областные центры",
					"submit": "Выбрать",
					"cancel": "Отменить"
				},
				"bel": {
					"title": "Выберыце свой населены пункт, і чытайце навіны свайго рэгіёна ў асобнай рубрыцы",
					"towns": "Гарады",
					"centre": "Абласныя цэнтры",
					"submit": "Выбраць",
					"cancel": "Адмяніць"
				}
			};
			var sHTML="";
			var fCompose=function(sLabel,oItems,sLang,sCurrentGeoTarget) {
				return '<optgroup label="'+sLabel+'">'+$.map(oItems,function(oItem,i) {
					return '<option value="'+oItem["id"]+'"'+(oItem["id"]==sCurrentGeoTarget?' selected="selected"':'')+'>'+fI18N(oItem["name"],sLang)+'</option>';
				}).join("")+'</optgroup>';
			};
			var fBuildModal=function(oInstance) {
				if(sHTML.length>0)
					return sHTML;
				var sHost=oInstance.get_option("host");
				var sLang=oInstance.get_option("lang");
				var sCurrentGeoTarget=oInstance.get_option("geotarget")[0];
				var aG1=[], aG2=[];
				$.each(oInstance.get_param("geotargets"),function(i,oItem) {
					$.each(oItem.items,function(k,v) {
						if(v.id==oItem.id)
							aG1.push(v);
					});
					aG2.push(oItem);
				});
				sHTML+=
					'<div class="b-region-f"><form method="get" action="'+sHost+'">'+
						'<p class="gray">'+oInstance.i18n("title",oI18N)+'</p>'+
						'<select name="gtgt" class="b-s">'+
						fCompose(oInstance.i18n("centre",oI18N),aG1,sLang,sCurrentGeoTarget)+
						$.map(aG2,function(v,k) {
							return fCompose(fI18N(v["name"],sLang),v.items,sLang,sCurrentGeoTarget);
						}).join("")+
						'</select>'+
						'<div class="b-hold">'+
							'<button type="submit" class="button"><span class="button__inner">'+oInstance.i18n("submit",oI18N)+'</span></button>'+
							'<span class="b-reset"><input type="reset" value="'+oInstance.i18n("cancel",oI18N)+'" class="b-reset-l" /></span>'+
						'</div>'+
					'</form></div>';
				return sHTML;
			};
			var o;
			return function() {
				if(!o) {
					o=$(fBuildModal(this)).insertAfter("#geotarget_top_selector");
					$("input[type=reset]").click(function(e){
						$("#geotarget_top_selector").trigger("click");
					});
				}
			};
		})(),
		"responsive": (function(){
			var oI18N={
				"rus": {
					"head": "Ваш город",
					"towns": "Города",
					"centre": "Областные центры"
				},
				"bel": {
					"head": "Ваш горад",
					"towns": "Гарады",
					"centre": "Абласныя цэнтры"
				}
			};
			var sHTML="";
			var fCompose=function(sLabel,oItems,sHost,sLang,sCurrentGeoTarget) {
				return '<li class="b-aside-nav_item has_sub"><span class="b-aside-nav_link m-title"><span class="b-aside-nav_item_title">'+sLabel+'</span></span><ul class="b-aside-nav">'+$.map(oItems,function(oItem,i) {
					var bActive=oItem["id"]==sCurrentGeoTarget;
					return '<li id="gtgt'+oItem["id"]+'" class="b-aside-nav_item'+(bActive?' active':'')+'"><a href="'+sHost+'?gtgt='+oItem["id"]+'" data-gtgt="'+oItem['id']+'" class="b-aside-nav_link"><span class="b-aside-nav_item_title">'+fI18N(oItem["name"],sLang)+'</span>'+(bActive?'<i class="b-icon icon-select"></i>':'')+'</a></li>';
				}).join("")+'</ul></li>';
			};
			var fBuildModal=function(oInstance) {
				if(sHTML.length>0)
					return sHTML;
				var sHost=oInstance.get_option("host");
				var sLang=oInstance.get_option("lang");
				var sCurrentGeoTarget=oInstance.get_option("geotarget")[0];
				var aG1=[], aG2=[];
				$.each(oInstance.get_param("geotargets"),function(i,oItem) {
					$.each(oItem.items,function(k,v) {
						if(v.id==oItem.id)
							aG1.push(v);
					});
					aG2.push(oItem);
				});
				sHTML+=
					'<ul class="b-aside-nav" id="geo_list">'+
						'<li class="b-aside-nav_item">'+
							'<a href="#" class="b-aside-nav_link top_selector geotarget_selector">'+
								'<i class="b-icon icon-back b-aside-nav_item_icon"></i>'+
								'<span class="b-aside-nav_item_title">'+oInstance.i18n("head",oI18N)+'</span>'+
							'</a>'+
						'</li>'+fCompose(oInstance.i18n("centre",oI18N),aG1,sHost,sLang,sCurrentGeoTarget)+
						$.map(aG2,function(v,k) {
							return fCompose(fI18N(v["name"],sLang),v.items.splice(1),sHost,sLang,sCurrentGeoTarget);
						}).join("")+
					'</ul>';
				return sHTML;
			};
			var o;
			return function() {
				if(o)
					return true;
				o=$(fBuildModal(this)).prependTo("body");
				var self=this;
				$('a[data-gtgt]',o).on('click',function(e){
					var el=$(this);
					self.cookie('geohint',-1,{'expires': 180});
					track_ga_event('Region','Change',el.text());
					setTimeout(function(){
						window.location='http://www.tut.by/route/geotarget/'+el.attr('data-gtgt')+'/?l='+encodeURIComponent(window.location.toString());
					},100);
					return false;
				});
				this.events().once("init_geo_menu",function(e){
					self.events().on("show_geo_menu",function(){
						self.events().once("shown_menu",this.show,this)
						self.events().emit("show_main_menu",this)
					},e.opts)
					self.events().on("hide_geo_menu",e.opts.hide,e.opts)
				});
				this.init_slide_menu('#geo_list',{
					"sClass":"active_geo_list",
					"activator":".geotarget_selector",
					"init":function(ctx,menu){self.events().emit("init_geo_menu",this,menu)},
				});
			};
		})(),
		"weather": (function() {
			var oI18N={
				"rus":{
					"close": "Закрыть",
					"weather_belarus": "Беларусь",
					"weather_cis": "СНГ и Балтия",
					"weather_spa": "Курорты",
					"weather_abroad": "Зарубежье"
				},
				"bel":{
					"close": "Зачынiць",
					"weather_belarus": "Беларусь",
					"weather_cis": "СНД і Балтыя",
					"weather_spa": "Курорты",
					"weather_abroad": "Замежжа"
				}
			};
									
			var sHTML="";
			var fComposeTabs=function(oInstance,aAxes,sItemId) {
				return '<ul class="b-widget-tabs stand-tab" style="margin-bottom: 0px">'+
					$.map(aAxes,function(v,k){
						var bCurrent=fIsActive(sItemId,oInstance.get_param("geotargets_"+v));
						return '<li class="widget-tabs__li'+(bCurrent?' active':'')+'"><a data-target="#tab_'+v+'" style="cursor: pointer">'+oInstance.i18n(v,oI18N)+'</a></li>';
					}).join("")+
					'</ul>';
			};
			var oCompose=(function(){
				var DistributeByColumns=function (aItems,iColCount){
					var iItemsCount, iColLength, iFixedColNo, aColumns, i, j;
					iItemsCount=aItems.length;
					if(iColCount<=1 || iItemsCount<=iColCount){
						return $.map(aItems,function(v,k){
							return [v];
						});
					}
					iColLength=Math.ceil(iItemsCount/iColCount);
					if((iFixedColNo=iColLength*iColCount-iItemsCount))
						iFixedColNo=iColCount-iFixedColNo;
					else
						iFixedColNo=iColCount+1;
					aColumns=[];
					for(i=0,j=0;j==iFixedColNo?iColLength-=1:0,i<iItemsCount;i+=iColLength,j++)
						aColumns.push(aItems.slice(i,i+iColLength));
					return aColumns;
				};
				var fDefault=function(sAxes) {
					return function(aSet,host,lang,target,cols) {
						var fCompose=function(oRegion) {
							return '<ul>'+$.map(oRegion,function(v,k) {
									return '<li id="wtgt'+v.id+'"'+(v.id==target?' class="current"':'')+'><a href="'+host+'?wtgt='+v.id+'">'+fI18N(v.name,lang)+'</a></li>';
								}).join("")+
								'</ul>';
						};
						return '<table id="tab_'+sAxes+'" cellspacing="0" cellpadding="0" border="0"><tr>'+$.map(DistributeByColumns(aSet[0].items.sort(function(a,b){
							if(a.name[lang]>b.name[lang]) return 1;
							if(a.name[lang]<b.name[lang]) return -1;
							return 0;
						}),cols),function(v,k){
							return '<td>'+fCompose(v)+'</td>';
						}).join("")+'</tr></table>';
					};
				};
				return {
					"weather_belarus": function(aSet,host,lang,target,cols){
						var fCompose=function(oRegion) {
							return '<div class="gs_title">'+fI18N(oRegion["name"],lang)+'</div>'+
								'<ul>'+$.map(oRegion["items"],function(v,k) {
									return '<li id="wtgt'+v.id+'"'+(v.id==target?' class="current"':'')+'><a href="?wtgt='+v.id+'">'+fI18N(v.name,lang)+'</a></li>';
								}).join("")+
							'</ul>';
						};
						return '<table id="tab_weather_belarus" cellspacing="0" cellpadding="0" border="0"><tr>'+$.map(aSet,function(v,k){
							return '<td>'+fCompose(v)+'</td>';
						}).join("")+'</tr></table>';
					},
					"weather_cis": fDefault("weather_cis"),
					"weather_spa": fDefault("weather_spa"),
					"weather_abroad": fDefault("weather_abroad")
				};
			})();
			var fIsActive=function anon_f(sItemId,aSet){
				var bFound=false;
				$.each(aSet,function(k,v){
					if(v.id==sItemId) {
						bFound=true;
					} else if(v.items){
						bFound=anon_f(sItemId,v.items);
					}
					return !bFound;
				});
				return bFound;
			};
			var fBuildModal=function(oInstance) {
				if(sHTML.length>0)
					return sHTML;
				var sHost=oInstance.get_option("host");
				var sLang=oInstance.get_option("lang");
				var sCurrentTarget=oInstance.get_option("weathertarget");
				var aAxes=["weather_belarus","weather_cis","weather_spa","weather_abroad"];
				var iColumns=0;
				aAxes=$.grep(aAxes,function(v,k){
					var x=oInstance.get_param("geotargets_"+v);
					if(x && x.length>0){
						iColumns=Math.max(iColumns,x.length);
						return true;
					}
					return false;
				});
				sHTML+=
					'<div id="geoselector" class="modal"><div class="modal-content"><div class="modal-content-inner">'+
						'<div class="modal-header"><div class="content">'+
							'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+oInstance.i18n("close",oI18N)+'</button>'+
							fComposeTabs(oInstance,aAxes,sCurrentTarget)+
						'</div></div><div class="modal-spacer"></div>'+
						'<div class="modal-body"><div class="content">'+
							$.map(aAxes,function(v,k){
								return oCompose[v](oInstance.get_param("geotargets_"+v),sHost,sLang,sCurrentTarget,iColumns);
							}).join("")+
						'</div></div><div class="modal-spacer"></div>'+
					'</div></div></div>';
				return sHTML;
			};
			return function() {
				var self=this;
				var oModal=$(fBuildModal(this)).prependTo("body").on({
					"show": function(e) {
						var el=$(this);
						var iMaxHeight=0;
						(function(el,h,w){
							var H=$(window).height(),
								W=$(window).width(),
								dH=Math.max(20,Math.floor((H-h)/2)),
								dW=Math.max(20,Math.round((W-w)/2));
							if(el.css("position")=="fixed")
								el.css({
									"top": dH,
									"bottom": dH
								});
							else
								el.css({
									"top": dH+$(document).scrollTop(),
									"bottom": dH
								});
							(function(el,h,w,H,W){
								var innerW=Math.ceil(100*Math.min(w,el.width())/W);
								if(el.width()>w) {
									el.css({
										"width": w
									});
									$("div.modal-body",el).css({
										"overflow-x": "auto"
									});
								}
								$("div.modal-header, div.modal-body",el).each(function() {
									$(this).css("width","100%");
								});
								var el_body=$("div.modal-body",el),
									dy=el_body.outerHeight()-el_body.height();
								$("div.modal-spacer",el).each(function(){
									dy+=$(this).height();
								});
								iMaxHeight=h-$("div.modal-header",el).outerHeight()-dy;
								el_body.css({
									"height": iMaxHeight
								});
							})($("div.modal-content",el),el.height(),W-2*dW,H,W);
							
						})(el,el.outerHeight(),el.width());
						
						(function(tabs){
							var current_tab=tabs.filter(".active") || tabs.filter(":first");
							current_tab.removeClass("active").addClass("active");
							var current_id=$("a[data-target]",current_tab).attr("data-target");
							$("table[id^=tab_]",el).not(current_id).hide();
						})($("a[data-target]",el).parent("li").reverse());
						$("a[data-target]",el).removeAttr("href").on({
							"click": function(e){
								var tab_link=$(this);
								var tab=tab_link.parent('li');
								e.preventDefault();
								if(!tab.hasClass('active')) {
									$("table"+tab_link.attr("data-target"),el).show();
									$("a[data-target]",el).parent("li.active").each(function(){
										var tab=$(this);
										tab.removeClass("active");
										$("table"+$("a[data-target]",tab).attr("data-target"),el).hide();
									});
									tab.addClass("active");
									var iH=Math.min($("table"+tab_link.attr("data-target"),el).height(),iMaxHeight);	
									$("div.modal-body",el).css({
										"height": iH
									});
								}
							}
						});
						
						el.on("click",function(e) {
							if($("div.modal-content").find(e.target).length<1 && oModal!==undefined)
								oModal.modal("hide");
						});
					},
					"hidden": function(e) {
						var el=$(this);
						el.off("click");
						el.remove();
					}
				}).modal();
			}
		})()
	};
	return function(sPageType) {
		if(typeof(oPageType[sPageType])!=="function")
			sPageType="desktop";
		return oPageType[sPageType].apply(this);
	};
})(),
"modal_geotarget_change": (function(){
	var oI18N={
		"rus":{
			"close": "Закрыть",
			"title": 'Уважаемый читатель, мы настроили титульную<br /> страницу портала TUT.BY специально для вас!',
			"brief": "",
			"content":
				'<p>Теперь вы сможете читать новости <i><!--REGION--></i> и области в отдельной рубрике на главной странице, а также следить за курсами валют, погодой и афишей <i><!--REGION--></i>.</p>'+
				'<p>Если вы захотите выбрать другой регион, кликните по названию города в левом верхнем углу экрана.</p>'+
				'<p>Спасибо, что пользуетесь TUT.BY!</p>',
			'hint_title': 'Выбор региона',
			'hint_content': 'Укажите свой город, чтобы читать новости, следить за погодой, курсами валют и афишей своего региона на главной странице портала.',
			'hint_question': '<!--REGION--> - это ваш регион?',
			'hint_yes': 'Да',
			'hint_no': 'Нет, выбрать свой'
		},
		"bel":{
			"close": "Зачынiць",
			"title": 'Шаноўны чытач, мы наладзілі тытульную старонку<br /> партала TUT.BY адмыслова для Вас!',
			"brief": "",
			"content":
				'<p>Зараз вы зможаце чытаць навіны <i><!--REGION--></i> і вобласці ў асобнай рубрыцы на галоўнай старонцы, а таксама сачыць за курсамі валют, надвор\'ем і афішай <i><!--REGION--></i>.</p>'+
				'<p>Калі вы захочаце абраць іншы рэгіён, клікайце па назве горада ў левым верхнім куце экрана.</p>'+
				'<p>Дзякуй, што карыстаецеся TUT.BY!</p>',
			'hint_title': 'Выбар рэгіёну',
			'hint_content': 'Адзначце свой горад, каб чытаць навіны, сачыць за надвор\'ем, курсамі валют і афішай свайго рэгіёну на галоўнай старонцы партала.',
			'hint_question': '<!--REGION--> - гэта ваш рэгіён?',
			'hint_yes': 'Так',
			'hint_no': 'Не, выбраць свой'
		}
	};
	var sHTML="";
	var fBuildModal=function(oInstance,oGeoItem) {
		if(sHTML.length>0)
			return sHTML;
		var sLang=oInstance.get_option("lang");
		sHTML+=
			'<div id="geomessage" class="modal"><div class="modal-content"><div class="modal-content-inner">'+
				'<div class="modal-header"><div class="content">'+
					'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+oInstance.i18n("close",oI18N)+'</button>'+
					'<h3>'+oInstance.i18n("title",oI18N)+'</h3>'+
					oInstance.i18n("brief",oI18N)+
				'</div></div><div class="modal-spacer"></div>'+
				'<div class="modal-body"><div class="content">'+
					oInstance.i18n("content",oI18N).toString().replace(/<!--REGION-->/g,fI18N(oGeoItem["name2"],sLang))+
				'</div></div><div class="modal-spacer"></div>'+
			'</div></div></div>';
		return sHTML;
	};
	function geotarget_hint(oInstance,aGeoTarget,oGeoItem){
		if (aGeoTarget[0]!=0 && aGeoTarget[0]!=15800) {
			return false;
		}
		var tm1,tm2;
		
		tm1=Math.round((new Date()).getTime()/1000);
		tm2=parseInt(oInstance.cookie("geohint"),10);
		if (tm2===-1) {
			return false;
		}
		if(isFinite(tm2) && tm1-tm2<86400*14){
			return false;
		}
		var sLang=oInstance.get_option("lang");
		var sHTML='<div id="tooltip-geotarget-hint" class="tooltip tooltip-ad" style="top: 41px; left: 10px; display: block;width: 260px;">'+
			'<div class="tooltip-arrow" style="left: 24px;"></div>'+
			'<div class="tooltip-inner" style="margin: 10px 10px 10px 15px;">'+
				'<div style="text-align: left;">'+
					'<p><b>'+oInstance.i18n('hint_title',oI18N)+'</b> <i class="b-icon icon-close" style="float: right; cursor: pointer;"></i></p>'+
					'<p>'+oInstance.i18n('hint_content',oI18N)+'</p>'+
					'<p><br /><i>'+oInstance.i18n('hint_question',oI18N).toString().replace(/<!--REGION-->/g,fI18N(oGeoItem["name1"],sLang))+'</p></i>'+
					'<p style="color: #001BA8;">'+
						'<i data-action="yes" style="cursor: pointer; margin-right: 20px;">'+oInstance.i18n('hint_yes',oI18N)+'</i>'+
						'<i data-action="no" style="cursor: pointer; border-bottom: 1px dashed #001BA8;">'+oInstance.i18n('hint_no',oI18N)+'</i>'+
					'</p>'+
				'</div>'+
			'</div>'+
		'</div>';
		oInstance.cookie('geohint',tm1);
		$(sHTML).insertAfter('a#geotarget_top_selector').find('i.icon-close').click(function(e){
			$('#tooltip-geotarget-hint').remove();
			oInstance.cookie('geohint',tm1,{
				"expires": 180
			});
			track_ga_event('Region','Hint','Close');
		});
		$('a#geotarget_top_selector').click(function(e){
			$('#tooltip-geotarget-hint').remove();
		});
		$('#tooltip-geotarget-hint i[data-action="no"]').click(function(e){
			$('#tooltip-geotarget-hint').remove();
			track_ga_event('Region','Hint','No');
			oInstance.modal_geotarget($("#geotarget_top_selector").attr("data-geocode"));
		});
		$('#tooltip-geotarget-hint i[data-action="yes"]').click(function(e){
			$('#tooltip-geotarget-hint').remove();
			oInstance.cookie('geohint',-1,{'expires': 180});
			track_ga_event('Region','Hint','Yes');
		});
		track_ga_event('Region','Hint','Show');
		return true;
	}
	return function() {
		var oGeoItem=undefined;
		var aGeoTarget=this.get_option("geotarget");
		$.each(this.get_param("geotargets"),function(i,oItem){
			$.each(oItem["items"],function(i,oItem) {
				if((aGeoTarget[0]!=0 && oItem["id"]==aGeoTarget[0]) || (aGeoTarget[0]==0 && oItem['id']==15800))
					oGeoItem=oItem;
			});
		});
		if(aGeoTarget.length<3 || !aGeoTarget[2]) {
			geotarget_hint(this,aGeoTarget,oGeoItem);
			return false;
		}
		if(!oGeoItem)
			return false;
		var self=this;
		var oModal=$(fBuildModal(this,oGeoItem)).prependTo("body").on({
			"show": function(e) {
				var el=$(this);
				self.init_modal(el,el.outerHeight(),el.width()).on("click",function(e) {
					if($("div.modal-content").find(e.target).length<1 && oModal!==undefined)
						oModal.modal("hide");
				});
			},
			"hidden": function(e) {
				var el=$(this);
				el.off("click");
				el.remove();
			}
		}).modal();
		return true;
	};
})()
});
$(document).on("click","a[data-weathercode]",function(e){
	e.preventDefault();
	runCore.modal_geotarget("weather");
});
})();
runCore.class_method({
	"param_autoload_geotargets": function () {
		this.set_param("geotargets",[{"id":15800,"name":{"rus":"\u041c\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c","bel":"\u041c\u0456\u043d\u0441\u043a\u0430\u044f \u0432\u043e\u0431\u043b\u0430\u0441\u0446\u044c"},"items":[{"id":15800,"name":{"rus":"\u041c\u0438\u043d\u0441\u043a","bel":"\u041ci\u043d\u0441\u043a"},"name1":{"rus":"\u041c\u0438\u043d\u0441\u043a","bel":"\u041ci\u043d\u0441\u043a"},"name2":{"rus":"\u041c\u0438\u043d\u0441\u043a\u0430","bel":"\u041ci\u043d\u0441\u043a\u0430"},"name3":{"rus":"\u041c\u0438\u043d\u0441\u043a\u0443","bel":"\u041ci\u043d\u0441\u043a\u0443"},"name4":{"rus":"\u041c\u0438\u043d\u0441\u043a","bel":"\u041ci\u043d\u0441\u043a"},"name5":{"rus":"\u041c\u0438\u043d\u0441\u043a\u043e\u043c","bel":"\u041ci\u043d\u0441\u043a\u0430\u043c"},"name6":{"rus":"\u041c\u0438\u043d\u0441\u043a\u0435","bel":"\u041ci\u043d\u0441\u043a\u0443"}},{"id":21059,"name":{"rus":"\u0411\u043e\u0440\u0438\u0441\u043e\u0432","bel":"\u0411\u0430\u0440\u044b\u0441\u0430\u045e"},"name1":{"rus":"\u0411\u043e\u0440\u0438\u0441\u043e\u0432","bel":"\u0411\u0430\u0440\u044b\u0441\u0430\u045e"},"name2":{"rus":"\u0411\u043e\u0440\u0438\u0441\u043e\u0432\u0430","bel":"\u0411\u0430\u0440\u044b\u0441\u0430\u0432\u0430"},"name6":{"rus":"\u0411\u043e\u0440\u0438\u0441\u043e\u0432\u0435","bel":"\u0411\u0430\u0440\u044b\u0441\u0430\u0432\u0435"}},{"id":15801,"name":{"rus":"\u0411\u0435\u0440\u0435\u0437\u0438\u043d\u043e","bel":"\u0411\u0435\u0440\u0430\u0437\u0456\u043d\u043e"},"name1":{"rus":"\u0411\u0435\u0440\u0435\u0437\u0438\u043d\u043e","bel":"\u0411\u0435\u0440\u0430\u0437\u0456\u043d\u043e"},"name2":{"rus":"\u0411\u0435\u0440\u0435\u0437\u0438\u043d\u043e","bel":"\u0411\u0435\u0440\u0430\u0437\u0456\u043d\u043e"},"name6":{"rus":"\u0411\u0435\u0440\u0435\u0437\u0438\u043d\u043e","bel":"\u0411\u0435\u0440\u0430\u0437\u0456\u043d\u043e"}},{"id":16320,"name":{"rus":"\u0412\u0438\u043b\u0435\u0439\u043a\u0430","bel":"\u0412\u0456\u043b\u0435\u0439\u043a\u0430"},"name1":{"rus":"\u0412\u0438\u043b\u0435\u0439\u043a\u0430","bel":"\u0412\u0456\u043b\u0435\u0439\u043a\u0430"},"name2":{"rus":"\u0412\u0438\u043b\u0435\u0439\u043a\u0438","bel":"\u0412\u0456\u043b\u0435\u0439\u043ai"},"name6":{"rus":"\u0412\u0438\u043b\u0435\u0439\u043a\u0435","bel":"\u0412\u0456\u043b\u0435\u0439\u0446\u044b"}},{"id":16728,"name":{"rus":"\u0412\u043e\u043b\u043e\u0436\u0438\u043d","bel":"\u0412\u0430\u043b\u043e\u0436\u044b\u043d"},"name1":{"rus":"\u0412\u043e\u043b\u043e\u0436\u0438\u043d","bel":"\u0412\u0430\u043b\u043e\u0436\u044b\u043d"},"name2":{"rus":"\u0412\u043e\u043b\u043e\u0436\u0438\u043d\u0430","bel":"\u0412\u0430\u043b\u043e\u0436\u044b\u043d\u0430"},"name6":{"rus":"\u0412\u043e\u043b\u043e\u0436\u0438\u043d\u0435","bel":"\u0412\u0430\u043b\u043e\u0436\u044b\u043d\u0435"}},{"id":17160,"name":{"rus":"\u0414\u0437\u0435\u0440\u0436\u0438\u043d\u0441\u043a","bel":"\u0414\u0437\u044f\u0440\u0436\u044b\u043d\u0441\u043a"},"name1":{"rus":"\u0414\u0437\u0435\u0440\u0436\u0438\u043d\u0441\u043a","bel":"\u0414\u0437\u044f\u0440\u0436\u044b\u043d\u0441\u043a"},"name2":{"rus":"\u0414\u0437\u0435\u0440\u0436\u0438\u043d\u0441\u043a\u0430","bel":"\u0414\u0437\u044f\u0440\u0436\u044b\u043d\u0441\u043a\u0430"},"name6":{"rus":"\u0414\u0437\u0435\u0440\u0436\u0438\u043d\u0441\u043a\u0435","bel":"\u0414\u0437\u044f\u0440\u0436\u044b\u043d\u0441\u043a\u0443"}},{"id":21060,"name":{"rus":"\u0416\u043e\u0434\u0438\u043d\u043e","bel":"\u0416\u043e\u0434\u0437\u0456\u043d\u0430"},"name1":{"rus":"\u0416\u043e\u0434\u0438\u043d\u043e","bel":"\u0416\u043e\u0434\u0437\u0456\u043d\u0430"},"name2":{"rus":"\u0416\u043e\u0434\u0438\u043d\u043e","bel":"\u0416\u043e\u0434\u0437\u0456\u043d\u0430"},"name6":{"rus":"\u0416\u043e\u0434\u0438\u043d\u043e","bel":"\u0416\u043e\u0434\u0437\u0456\u043d\u0435"}},{"id":21061,"name":{"rus":"\u0417\u0430\u0441\u043b\u0430\u0432\u043b\u044c","bel":"\u0417\u0430\u0441\u043b\u0430\u045e\u0435"},"name1":{"rus":"\u0417\u0430\u0441\u043b\u0430\u0432\u043b\u044c","bel":"\u0417\u0430\u0441\u043b\u0430\u045e\u0435"},"name2":{"rus":"\u0417\u0430\u0441\u043b\u0430\u0432\u043b\u044f","bel":"\u0417\u0430\u0441\u043b\u0430\u045e\u044f"}},{"id":17436,"name":{"rus":"\u041a\u043b\u0435\u0446\u043a","bel":"\u041a\u043b\u0435\u0446\u043a"},"name1":{"rus":"\u041a\u043b\u0435\u0446\u043a","bel":"\u041a\u043b\u0435\u0446\u043a"},"name2":{"rus":"\u041a\u043b\u0435\u0446\u043a\u0430","bel":"\u041a\u043b\u0435\u0446\u043a\u0430"},"name6":{"rus":"\u041a\u043b\u0435\u0446\u043a\u0435","bel":"\u041a\u043b\u0435\u0446\u043a\u0443"}},{"id":17532,"name":{"rus":"\u041a\u043e\u043f\u044b\u043b\u044c","bel":"\u041a\u0430\u043f\u044b\u043b\u044c"},"name1":{"rus":"\u041a\u043e\u043f\u044b\u043b\u044c","bel":"\u041a\u0430\u043f\u044b\u043b\u044c"},"name2":{"rus":"\u041a\u043e\u043f\u044b\u043b\u044f","bel":"\u041a\u0430\u043f\u044b\u043b\u044f"},"name6":{"rus":"\u041a\u043e\u043f\u044b\u043b\u0435","bel":"\u041a\u0430\u043f\u044b\u043b\u0456"}},{"id":17744,"name":{"rus":"\u041a\u0440\u0443\u043f\u043a\u0438","bel":"\u041a\u0440\u0443\u043f\u043a\u0456"},"name1":{"rus":"\u041a\u0440\u0443\u043f\u043a\u0438","bel":"\u041a\u0440\u0443\u043f\u043a\u0456"},"name2":{"rus":"\u041a\u0440\u0443\u043f\u043e\u043a","bel":"\u041a\u0440\u0443\u043f\u0430\u043a"},"name6":{"rus":"\u041a\u0440\u0443\u043f\u043a\u0430\u0445","bel":"\u041a\u0440\u0443\u043f\u043a\u0430\u0445"}},{"id":17976,"name":{"rus":"\u041b\u043e\u0433\u043e\u0439\u0441\u043a","bel":"\u041b\u0430\u0433\u043e\u0439\u0441\u043a"},"name1":{"rus":"\u041b\u043e\u0433\u043e\u0439\u0441\u043a","bel":"\u041b\u0430\u0433\u043e\u0439\u0441\u043a"},"name2":{"rus":"\u041b\u043e\u0433\u043e\u0439\u0441\u043a\u0430","bel":"\u041b\u0430\u0433\u043e\u0439\u0441\u043a\u0430"},"name6":{"rus":"\u041b\u043e\u0433\u043e\u0439\u0441\u043a\u0435","bel":"\u041b\u0430\u0433\u043e\u0439\u0441\u043a\u0443"}},{"id":18297,"name":{"rus":"\u041b\u044e\u0431\u0430\u043d\u044c","bel":"\u041b\u044e\u0431\u0430\u043d\u044c"},"name1":{"rus":"\u041b\u044e\u0431\u0430\u043d\u044c","bel":"\u041b\u044e\u0431\u0430\u043d\u044c"},"name2":{"rus":"\u041b\u044e\u0431\u0430\u043d\u0438","bel":"\u041b\u044e\u0431\u0430\u043di"},"name6":{"rus":"\u041b\u044e\u0431\u0430\u043d\u0438","bel":"\u041b\u044e\u0431\u0430\u043d\u0456"}},{"id":21062,"name":{"rus":"\u041c\u043e\u043b\u043e\u0434\u0435\u0447\u043d\u043e","bel":"\u041c\u0430\u043b\u0430\u0434\u0437\u0435\u0447\u043d\u0430"},"name1":{"rus":"\u041c\u043e\u043b\u043e\u0434\u0435\u0447\u043d\u043e","bel":"\u041c\u0430\u043b\u0430\u0434\u0437\u0435\u0447\u043d\u0430"},"name2":{"rus":"\u041c\u043e\u043b\u043e\u0434\u0435\u0447\u043d\u043e","bel":"\u041c\u0430\u043b\u0430\u0434\u0437\u0435\u0447\u043d\u0430"},"name6":{"rus":"\u041c\u043e\u043b\u043e\u0434\u0435\u0447\u043d\u043e","bel":"\u041c\u0430\u043b\u0430\u0434\u0437\u0435\u0447\u043d\u0435"}},{"id":19062,"name":{"rus":"\u041c\u044f\u0434\u0435\u043b\u044c","bel":"\u041c\u044f\u0434\u0437\u0435\u043b"},"name1":{"rus":"\u041c\u044f\u0434\u0435\u043b\u044c","bel":"\u041c\u044f\u0434\u0437\u0435\u043b"},"name2":{"rus":"\u041c\u044f\u0434\u0435\u043b\u044f","bel":"\u041c\u044f\u0434\u0437\u0435\u043b\u0430"},"name6":{"rus":"\u041c\u044f\u0434\u0435\u043b\u0435","bel":"\u041c\u044f\u0434\u0437\u0435\u043b\u0456"}},{"id":19485,"name":{"rus":"\u041c\u0430\u0440\u044c\u0438\u043d\u0430 \u0413\u043e\u0440\u043a\u0430","bel":"\u041c\u0430\u0440'\u0456\u043d\u0430 \u0413\u043e\u0440\u043a\u0430"},"name1":{"rus":"\u041c\u0430\u0440\u044c\u0438\u043d\u0430 \u0413\u043e\u0440\u043a\u0430","bel":"\u041c\u0430\u0440'\u0456\u043d\u0430 \u0413\u043e\u0440\u043a\u0430"},"name2":{"rus":"\u041c\u0430\u0440\u044c\u0438\u043d\u043e\u0439 \u0413\u043e\u0440\u043a\u0438","bel":"\u041c\u0430\u0440'\u0456\u043d\u0430\u0439 \u0413\u043e\u0440\u043ai"},"name6":{"rus":"\u041c\u0430\u0440\u044c\u0438\u043d\u043e\u0439 \u0413\u043e\u0440\u043a\u0435","bel":"\u041c\u0430\u0440\u2019\u0456\u043d\u0430\u0439 \u0413\u043e\u0440\u0446\u044b"}},{"id":19368,"name":{"rus":"\u041d\u0435\u0441\u0432\u0438\u0436","bel":"\u041d\u044f\u0441\u0432\u0456\u0436"},"name1":{"rus":"\u041d\u0435\u0441\u0432\u0438\u0436","bel":"\u041d\u044f\u0441\u0432\u0456\u0436"},"name2":{"rus":"\u041d\u0435\u0441\u0432\u0438\u0436\u0430","bel":"\u041d\u044f\u0441\u0432\u0456\u0436\u0430"},"name6":{"rus":"\u041d\u0435\u0441\u0432\u0438\u0436\u0435","bel":"\u041d\u044f\u0441\u0432\u0456\u0436\u044b"}},{"id":21063,"name":{"rus":"\u0421\u043b\u0443\u0446\u043a","bel":"\u0421\u043b\u0443\u0446\u043a"},"name1":{"rus":"\u0421\u043b\u0443\u0446\u043a","bel":"\u0421\u043b\u0443\u0446\u043a"},"name2":{"rus":"\u0421\u043b\u0443\u0446\u043a\u0430","bel":"\u0421\u043b\u0443\u0446\u043a\u0430"},"name6":{"rus":"\u0421\u043b\u0443\u0446\u043a\u0435","bel":"\u0421\u043b\u0443\u0446\u043a\u0443"}},{"id":20002,"name":{"rus":"\u0421\u043c\u043e\u043b\u0435\u0432\u0438\u0447\u0438","bel":"\u0421\u043c\u0430\u043b\u044f\u0432\u0456\u0447\u044b"},"name1":{"rus":"\u0421\u043c\u043e\u043b\u0435\u0432\u0438\u0447\u0438","bel":"\u0421\u043c\u0430\u043b\u044f\u0432\u0456\u0447\u044b"},"name2":{"rus":"\u0421\u043c\u043e\u043b\u0435\u0432\u0438\u0447\u0435\u0439","bel":"\u0421\u043c\u0430\u043b\u044f\u0432\u0456\u0447\u0430\u045e"},"name6":{"rus":"\u0421\u043c\u043e\u043b\u0435\u0432\u0438\u0447\u0430\u0445","bel":"\u0421\u043c\u0430\u043b\u044f\u0432\u0456\u0447\u0430\u0445"}},{"id":21064,"name":{"rus":"\u0421\u043e\u043b\u0438\u0433\u043e\u0440\u0441\u043a","bel":"\u0421\u0430\u043b\u0456\u0433\u043e\u0440\u0441\u043a"},"name1":{"rus":"\u0421\u043e\u043b\u0438\u0433\u043e\u0440\u0441\u043a","bel":"\u0421\u0430\u043b\u0456\u0433\u043e\u0440\u0441\u043a"},"name2":{"rus":"\u0421\u043e\u043b\u0438\u0433\u043e\u0440\u0441\u043a\u0430","bel":"\u0421\u0430\u043b\u0456\u0433\u043e\u0440\u0441\u043a\u0430"},"name6":{"rus":"\u0421\u043e\u043b\u0438\u0433\u043e\u0440\u0441\u043a\u0435","bel":"\u0421\u0430\u043b\u0456\u0433\u043e\u0440\u0441\u043a\u0443"}},{"id":20364,"name":{"rus":"\u0421\u0442\u0430\u0440\u044b\u0435 \u0414\u043e\u0440\u043e\u0433\u0438","bel":"\u0421\u0442\u0430\u0440\u044b\u044f \u0414\u0430\u0440\u043e\u0433\u0456"},"name1":{"rus":"\u0421\u0442\u0430\u0440\u044b\u0435 \u0414\u043e\u0440\u043e\u0433\u0438","bel":"\u0421\u0442\u0430\u0440\u044b\u044f \u0414\u0430\u0440\u043e\u0433\u0456"},"name2":{"rus":"\u0421\u0442\u0430\u0440\u044b\u0445 \u0414\u043e\u0440\u043e\u0433","bel":"\u0421\u0442\u0430\u0440\u044b\u0445 \u0414\u0430\u0440\u043e\u0433"}},{"id":20455,"name":{"rus":"\u0421\u0442\u043e\u043b\u0431\u0446\u044b","bel":"\u0421\u0442\u043e\u045e\u0431\u0446\u044b"},"name1":{"rus":"\u0421\u0442\u043e\u043b\u0431\u0446\u044b","bel":"\u0421\u0442\u043e\u045e\u0431\u0446\u044b"},"name2":{"rus":"\u0421\u0442\u043e\u043b\u0431\u0446\u043e\u0432","bel":"\u0421\u0442\u043e\u045e\u0431\u0446\u0430\u045e"},"name6":{"rus":"\u0421\u0442\u043e\u043b\u0431\u0446\u0430\u0445","bel":"\u0421\u0442\u0430\u045e\u0431\u0446\u0430\u0445"}},{"id":20656,"name":{"rus":"\u0423\u0437\u0434\u0430","bel":"\u0423\u0437\u0434\u0430"},"name1":{"rus":"\u0423\u0437\u0434\u0430","bel":"\u0423\u0437\u0434\u0430"},"name2":{"rus":"\u0423\u0437\u0434\u044b","bel":"\u0423\u0437\u0434\u044b"},"name6":{"rus":"\u0423\u0437\u0434\u0435","bel":"\u0423\u0437\u0434\u0437\u0435"}},{"id":17162,"name":{"rus":"\u0424\u0430\u043d\u0438\u043f\u043e\u043b\u044c","bel":"\u0424\u0430\u043d\u0456\u043f\u0430\u043b\u044c"},"name1":{"rus":"\u0424\u0430\u043d\u0438\u043f\u043e\u043b\u044c","bel":"\u0424\u0430\u043d\u0456\u043f\u0430\u043b\u044c"},"name2":{"rus":"\u0424\u0430\u043d\u0438\u043f\u043e\u043b\u044f","bel":"\u0424\u0430\u043d\u0456\u043f\u0430\u043b\u044f"}},{"id":20860,"name":{"rus":"\u0427\u0435\u0440\u0432\u0435\u043d\u044c","bel":"\u0427\u044d\u0440\u0432\u0435\u043d\u044c"},"name1":{"rus":"\u0427\u0435\u0440\u0432\u0435\u043d\u044c","bel":"\u0427\u044d\u0440\u0432\u0435\u043d\u044c"},"name2":{"rus":"\u0427\u0435\u0440\u0432\u0435\u043d\u044f","bel":"\u0427\u044d\u0440\u0432\u0435\u043d\u044f"},"name6":{"rus":"\u0427\u0435\u0440\u0432\u0435\u043d\u0435","bel":"\u0427\u044d\u0440\u0432\u0435\u043d\u0456"}}]},{"id":2202,"name":{"rus":"\u0411\u0440\u0435\u0441\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c","bel":"\u0411\u0440\u044d\u0441\u0446\u043a\u0430\u044f \u0432\u043e\u0431\u043b\u0430\u0441\u0446\u044c"},"items":[{"id":2202,"name":{"rus":"\u0411\u0440\u0435\u0441\u0442","bel":"\u0411\u0440\u044d\u0441\u0442"},"name1":{"rus":"\u0411\u0440\u0435\u0441\u0442","bel":"\u0411\u0440\u044d\u0441\u0442"},"name2":{"rus":"\u0411\u0440\u0435\u0441\u0442\u0430","bel":"\u0411\u0440\u044d\u0441\u0442\u0430"},"name3":{"rus":"\u0411\u0440\u0435\u0441\u0442\u0443","bel":"\u0411\u0440\u044d\u0441\u0442\u0443"},"name4":{"rus":"\u0411\u0440\u0435\u0441\u0442","bel":"\u0411\u0440\u044d\u0441\u0442"},"name5":{"rus":"\u0411\u0440\u0435\u0441\u0442\u043e\u043c","bel":"\u0411\u0440\u044d\u0441\u0442\u0430\u043c"},"name6":{"rus":"\u0411\u0440\u0435\u0441\u0442\u0435","bel":"\u0411\u0440\u044d\u0441\u0446\u0435"}},{"id":2203,"name":{"rus":"\u0411\u0430\u0440\u0430\u043d\u043e\u0432\u0438\u0447\u0438","bel":"\u0411\u0430\u0440\u0430\u043d\u0430\u0432\u0456\u0447\u044b"},"name1":{"rus":"\u0411\u0430\u0440\u0430\u043d\u043e\u0432\u0438\u0447\u0438","bel":"\u0411\u0430\u0440\u0430\u043d\u0430\u0432\u0456\u0447\u044b"},"name2":{"rus":"\u0411\u0430\u0440\u0430\u043d\u043e\u0432\u0438\u0447\u0435\u0439","bel":"\u0411\u0430\u0440\u0430\u043d\u0430\u0432\u0456\u0447\u0430\u045e"},"name6":{"rus":"\u0411\u0430\u0440\u0430\u043d\u043e\u0432\u0438\u0447\u0430\u0445","bel":"\u0411\u0430\u0440\u0430\u043d\u0430\u0432\u0456\u0447\u0430\u0445"}},{"id":246,"name":{"rus":"\u0411\u0435\u043b\u043e\u043e\u0437\u0435\u0440\u0441\u043a","bel":"\u0411\u0435\u043b\u0430\u0430\u0437\u0451\u0440\u0441\u043a"},"name1":{"rus":"\u0411\u0435\u043b\u043e\u043e\u0437\u0435\u0440\u0441\u043a","bel":"\u0411\u0435\u043b\u0430\u0430\u0437\u0451\u0440\u0441\u043a"},"name2":{"rus":"\u0411\u0435\u043b\u043e\u043e\u0437\u0435\u0440\u0441\u043a\u0430","bel":"\u0411\u0435\u043b\u0430\u0430\u0437\u0451\u0440\u0441\u043a\u0430"},"name6":{"rus":"\u0411\u0435\u043b\u043e\u043e\u0437\u0435\u0440\u0441\u043a\u0435","bel":"\u0411\u0435\u043b\u0430\u0430\u0437\u0451\u0440\u0441\u043a\u0443"}},{"id":245,"name":{"rus":"\u0411\u0435\u0440\u0435\u0437\u0430","bel":"\u0411\u044f\u0440\u043e\u0437\u0430"},"name1":{"rus":"\u0411\u0435\u0440\u0435\u0437\u0430","bel":"\u0411\u044f\u0440\u043e\u0437\u0430"},"name2":{"rus":"\u0411\u0435\u0440\u0435\u0437\u044b","bel":"\u0411\u044f\u0440\u043e\u0437\u044b"},"name6":{"rus":"\u0411\u0435\u0440\u0451\u0437\u0435","bel":"\u0411\u044f\u0440\u043e\u0437\u0435"}},{"id":996,"name":{"rus":"\u0412\u044b\u0441\u043e\u043a\u043e\u0435","bel":"\u0412\u044b\u0441\u043e\u043a\u0430\u0435"},"name1":{"rus":"\u0412\u044b\u0441\u043e\u043a\u043e\u0435","bel":"\u0412\u044b\u0441\u043e\u043a\u0430\u0435"},"name2":{"rus":"\u0412\u044b\u0441\u043e\u043a\u043e\u0435","bel":"\u0412\u044b\u0441\u043e\u043a\u0430\u0433\u0430"},"name6":{"rus":"\u0412\u044b\u0441\u043e\u043a\u043e\u043c","bel":"\u0412\u044b\u0441\u043e\u043a\u0456\u043c"}},{"id":509,"name":{"rus":"\u0413\u0430\u043d\u0446\u0435\u0432\u0438\u0447\u0438","bel":"\u0413\u0430\u043d\u0446\u0430\u0432\u0456\u0447\u044b"},"name1":{"rus":"\u0413\u0430\u043d\u0446\u0435\u0432\u0438\u0447\u0438","bel":"\u0413\u0430\u043d\u0446\u0430\u0432\u0456\u0447\u044b"},"name2":{"rus":"\u0413\u0430\u043d\u0446\u0435\u0432\u0438\u0447\u0435\u0439","bel":"\u0413\u0430\u043d\u0446\u0430\u0432\u0456\u0447\u0430\u045e"},"name6":{"rus":"\u0413\u0430\u043d\u0446\u0435\u0432\u0438\u0447\u0430\u0445","bel":"\u0413\u0430\u043d\u0446\u044d\u0432\u0456\u0447\u0430\u0445"}},{"id":2105,"name":{"rus":"\u0414\u0430\u0432\u0438\u0434-\u0413\u043e\u0440\u043e\u0434\u043e\u043a","bel":"\u0414\u0430\u0432\u044b\u0434-\u0413\u0430\u0440\u0430\u0434\u043e\u043a"},"name1":{"rus":"\u0414\u0430\u0432\u0438\u0434-\u0413\u043e\u0440\u043e\u0434\u043e\u043a","bel":"\u0414\u0430\u0432\u044b\u0434-\u0413\u0430\u0440\u0430\u0434\u043e\u043a"},"name2":{"rus":"\u0414\u0430\u0432\u0438\u0434-\u0413\u043e\u0440\u043e\u0434\u043a\u0430","bel":"\u0414\u0430\u0432\u044b\u0434-\u0413\u0430\u0440\u0430\u0434\u043a\u0430"},"name6":{"rus":"\u0414\u0430\u0432\u0438\u0434-\u0413\u043e\u0440\u043e\u0434\u043a\u0435","bel":"\u0414\u0430\u0432\u044b\u0434-\u0413\u0430\u0440\u0430\u0434\u043a\u0443"}},{"id":546,"name":{"rus":"\u0414\u0440\u043e\u0433\u0438\u0447\u0438\u043d","bel":"\u0414\u0440\u0430\u0433\u0456\u0447\u044b\u043d"},"name1":{"rus":"\u0414\u0440\u043e\u0433\u0438\u0447\u0438\u043d","bel":"\u0414\u0440\u0430\u0433\u0456\u0447\u044b\u043d"},"name2":{"rus":"\u0414\u0440\u043e\u0433\u0438\u0447\u0438\u043d\u0430","bel":"\u0414\u0440\u0430\u0433\u0456\u0447\u044b\u043d\u0430"},"name6":{"rus":"\u0414\u0440\u043e\u0433\u0438\u0447\u0438\u043d\u0435","bel":"\u0414\u0440\u0430\u0433\u0456\u0447\u044b\u043d\u0435"}},{"id":681,"name":{"rus":"\u0416\u0430\u0431\u0438\u043d\u043a\u0430","bel":"\u0416\u0430\u0431\u0456\u043d\u043a\u0430"},"name1":{"rus":"\u0416\u0430\u0431\u0438\u043d\u043a\u0430","bel":"\u0416\u0430\u0431\u0456\u043d\u043a\u0430"},"name2":{"rus":"\u0416\u0430\u0431\u0438\u043d\u043a\u0438","bel":"\u0416\u0430\u0431\u0456\u043d\u043ai"},"name6":{"rus":"\u0416\u0430\u0431\u0438\u043d\u043a\u0435","bel":"\u0416\u0430\u0431\u0456\u043d\u0446\u044b"}},{"id":780,"name":{"rus":"\u0418\u0432\u0430\u043d\u043e\u0432\u043e","bel":"\u0406\u0432\u0430\u043d\u0430\u0432\u0430"},"name1":{"rus":"\u0418\u0432\u0430\u043d\u043e\u0432\u043e","bel":"\u0406\u0432\u0430\u043d\u0430\u0432\u0430"},"name2":{"rus":"\u0418\u0432\u0430\u043d\u043e\u0432\u043e","bel":"\u0406\u0432\u0430\u043d\u0430\u0432\u0430"},"name6":{"rus":"\u0418\u0432\u0430\u043d\u043e\u0432\u043e","bel":"\u0406\u0432\u0430\u043d\u0430\u0432\u0435"}},{"id":883,"name":{"rus":"\u0418\u0432\u0430\u0446\u0435\u0432\u0438\u0447\u0438","bel":"\u0406\u0432\u0430\u0446\u044d\u0432\u0456\u0447\u044b"},"name1":{"rus":"\u0418\u0432\u0430\u0446\u0435\u0432\u0438\u0447\u0438","bel":"\u0406\u0432\u0430\u0446\u044d\u0432\u0456\u0447\u044b"},"name2":{"rus":"\u0418\u0432\u0430\u0446\u0435\u0432\u0438\u0447\u0435\u0439","bel":"\u0406\u0432\u0430\u0446\u044d\u0432\u0456\u0447\u0430\u045e"},"name6":{"rus":"\u0418\u0432\u0430\u0446\u0435\u0432\u0438\u0447\u0430\u0445","bel":"\u0406\u0432\u0430\u0446\u044d\u0432\u0456\u0447\u0430\u0445"}},{"id":995,"name":{"rus":"\u041a\u0430\u043c\u0435\u043d\u0435\u0446","bel":"\u041a\u0430\u043c\u044f\u043d\u0435\u0446"},"name1":{"rus":"\u041a\u0430\u043c\u0435\u043d\u0435\u0446","bel":"\u041a\u0430\u043c\u044f\u043d\u0435\u0446"},"name2":{"rus":"\u041a\u0430\u043c\u0435\u043d\u0446\u0430","bel":"\u041a\u0430\u043c\u044f\u043d\u0446\u0430"},"name6":{"rus":"\u041a\u0430\u043c\u0435\u043d\u0446\u0435","bel":"\u041a\u0430\u043c\u044f\u043d\u0446\u044d"}},{"id":2204,"name":{"rus":"\u041a\u043e\u0431\u0440\u0438\u043d","bel":"\u041a\u043e\u0431\u0440\u044b\u043d"},"name1":{"rus":"\u041a\u043e\u0431\u0440\u0438\u043d","bel":"\u041a\u043e\u0431\u0440\u044b\u043d"},"name2":{"rus":"\u041a\u043e\u0431\u0440\u0438\u043d\u0430","bel":"\u041a\u043e\u0431\u0440\u044b\u043d\u0430"},"name6":{"rus":"\u041a\u043e\u0431\u0440\u0438\u043d\u0435","bel":"\u041a\u043e\u0431\u0440\u044b\u043d\u0435"}},{"id":884,"name":{"rus":"\u041a\u043e\u0441\u0441\u043e\u0432\u043e","bel":"\u041a\u043e\u0441\u0430\u0432\u0430"},"name1":{"rus":"\u041a\u043e\u0441\u0441\u043e\u0432\u043e","bel":"\u041a\u043e\u0441\u0430\u0432\u0430"},"name2":{"rus":"\u041a\u043e\u0441\u0441\u043e\u0432\u043e","bel":"\u041a\u043e\u0441\u0430\u0432\u0430"}},{"id":1393,"name":{"rus":"\u041b\u0443\u043d\u0438\u043d\u0435\u0446","bel":"\u041b\u0443\u043d\u0456\u043d\u0435\u0446"},"name1":{"rus":"\u041b\u0443\u043d\u0438\u043d\u0435\u0446","bel":"\u041b\u0443\u043d\u0456\u043d\u0435\u0446"},"name2":{"rus":"\u041b\u0443\u043d\u0438\u043d\u0446\u0430","bel":"\u041b\u0443\u043d\u0456\u043d\u0446\u0430"},"name6":{"rus":"\u041b\u0443\u043d\u0438\u043d\u0446\u0435","bel":"\u041b\u0443\u043d\u0456\u043d\u0446\u044d"}},{"id":1475,"name":{"rus":"\u041b\u044f\u0445\u043e\u0432\u0438\u0447\u0438","bel":"\u041b\u044f\u0445\u0430\u0432\u0456\u0447\u044b"},"name1":{"rus":"\u041b\u044f\u0445\u043e\u0432\u0438\u0447\u0438","bel":"\u041b\u044f\u0445\u0430\u0432\u0456\u0447\u044b"},"name2":{"rus":"\u041b\u044f\u0445\u043e\u0432\u0438\u0447\u0435\u0439","bel":"\u041b\u044f\u0445\u0430\u0432\u0456\u0447\u0430\u045e"},"name6":{"rus":"\u041b\u044f\u0445\u043e\u0432\u0438\u0447\u0430\u0445","bel":"\u041b\u044f\u0445\u0430\u0432\u0456\u0447\u0430\u0445"}},{"id":1600,"name":{"rus":"\u041c\u0430\u043b\u043e\u0440\u0438\u0442\u0430","bel":"\u041c\u0430\u043b\u0430\u0440\u044b\u0442\u0430"},"name1":{"rus":"\u041c\u0430\u043b\u043e\u0440\u0438\u0442\u0430","bel":"\u041c\u0430\u043b\u0430\u0440\u044b\u0442\u0430"},"name2":{"rus":"\u041c\u0430\u043b\u043e\u0440\u0438\u0442\u044b","bel":"\u041c\u0430\u043b\u0430\u0440\u044b\u0442\u044b"},"name6":{"rus":"\u041c\u0430\u043b\u043e\u0440\u0438\u0442\u0435","bel":"\u041c\u0430\u043b\u0430\u0440\u044b\u0446\u0435"}},{"id":1394,"name":{"rus":"\u041c\u0438\u043a\u0430\u0448\u0435\u0432\u0438\u0447\u0438","bel":"\u041c\u0456\u043a\u0430\u0448\u044d\u0432\u0456\u0447\u044b"},"name1":{"rus":"\u041c\u0438\u043a\u0430\u0448\u0435\u0432\u0438\u0447\u0438","bel":"\u041c\u0456\u043a\u0430\u0448\u044d\u0432\u0456\u0447\u044b"},"name2":{"rus":"\u041c\u0438\u043a\u0430\u0448\u0435\u0432\u0438\u0447\u0435\u0439","bel":"\u041c\u0456\u043a\u0430\u0448\u044d\u0432\u0456\u0447\u0430\u045e"},"name3":{"rus":"\u041c\u0438\u043a\u0430\u0448\u0435\u0432\u0438\u0447\u0430\u043c","bel":"\u041c\u0456\u043a\u0430\u0448\u044d\u0432\u0456\u0447\u0430\u043c"},"name4":{"rus":"\u041c\u0438\u043a\u0430\u0448\u0435\u0432\u0438\u0447\u0438","bel":"\u041c\u0456\u043a\u0430\u0448\u044d\u0432\u0456\u0447\u044b"},"name5":{"rus":"\u041c\u0438\u043a\u0430\u0448\u0435\u0432\u0438\u0447\u0430\u043c\u0438","bel":"\u041c\u0456\u043a\u0430\u0448\u044d\u0432\u0456\u0447\u0430\u043c\u0456"},"name6":{"rus":"\u041c\u0438\u043a\u0430\u0448\u0435\u0432\u0438\u0447\u0430\u0445","bel":"\u041c\u0456\u043a\u0430\u0448\u044d\u0432\u0456\u0447\u0430\u0445"}},{"id":2205,"name":{"rus":"\u041f\u0438\u043d\u0441\u043a","bel":"\u041f\u0456\u043d\u0441\u043a"},"name1":{"rus":"\u041f\u0438\u043d\u0441\u043a","bel":"\u041f\u0456\u043d\u0441\u043a"},"name2":{"rus":"\u041f\u0438\u043d\u0441\u043a\u0430","bel":"\u041f\u0456\u043d\u0441\u043a\u0430"},"name6":{"rus":"\u041f\u0438\u043d\u0441\u043a\u0435","bel":"\u041f\u0456\u043d\u0441\u043a\u0443"}},{"id":1859,"name":{"rus":"\u041f\u0440\u0443\u0436\u0430\u043d\u044b","bel":"\u041f\u0440\u0443\u0436\u0430\u043d\u044b"},"name1":{"rus":"\u041f\u0440\u0443\u0436\u0430\u043d\u044b","bel":"\u041f\u0440\u0443\u0436\u0430\u043d\u044b"},"name2":{"rus":"\u041f\u0440\u0443\u0436\u0430\u043d","bel":"\u041f\u0440\u0443\u0436\u0430\u043d"},"name6":{"rus":"\u041f\u0440\u0443\u0436\u0430\u043d\u0430\u0445","bel":"\u041f\u0440\u0443\u0436\u0430\u043d\u0430\u0445"}},{"id":2104,"name":{"rus":"\u0421\u0442\u043e\u043b\u0438\u043d","bel":"\u0421\u0442\u043e\u043b\u0456\u043d"},"name1":{"rus":"\u0421\u0442\u043e\u043b\u0438\u043d","bel":"\u0421\u0442\u043e\u043b\u0456\u043d"},"name2":{"rus":"\u0421\u0442\u043e\u043b\u0438\u043d\u0430","bel":"\u0421\u0442\u043e\u043b\u0456\u043d\u0430"},"name6":{"rus":"\u0421\u0442\u043e\u043b\u0438\u043d\u0435","bel":"\u0421\u0442\u043e\u043b\u0456\u043d\u0435"}}]},{"id":8746,"name":{"rus":"\u0412\u0438\u0442\u0435\u0431\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c","bel":"\u0412\u0456\u0446\u0435\u0431\u0441\u043a\u0430\u044f \u0432\u043e\u0431\u043b\u0430\u0441\u0446\u044c"},"items":[{"id":8746,"name":{"rus":"\u0412\u0438\u0442\u0435\u0431\u0441\u043a","bel":"\u0412\u0456\u0446\u0435\u0431\u0441\u043a"},"name1":{"rus":"\u0412\u0438\u0442\u0435\u0431\u0441\u043a","bel":"\u0412i\u0446\u0435\u0431\u0441\u043a"},"name2":{"rus":"\u0412\u0438\u0442\u0435\u0431\u0441\u043a\u0430","bel":"\u0412i\u0446\u0435\u0431\u0441\u043a\u0430"},"name3":{"rus":"\u0412\u0438\u0442\u0435\u0431\u0441\u043a\u0443","bel":"\u0412i\u0446\u0435\u0431\u0441\u043a\u0443"},"name4":{"rus":"\u0412\u0438\u0442\u0435\u0431\u0441\u043a","bel":"\u0412i\u0446\u0435\u0431\u0441\u043a"},"name5":{"rus":"\u0412\u0438\u0442\u0435\u0431\u0441\u043a\u043e\u043c","bel":"\u0412i\u0446\u0435\u0431\u0441\u043a\u0430\u043c"},"name6":{"rus":"\u0412\u0438\u0442\u0435\u0431\u0441\u043a\u0435","bel":"\u0412i\u0446\u0435\u0431\u0441\u043a\u0443"}},{"id":2449,"name":{"rus":"\u0411\u0440\u0430\u0441\u043b\u0430\u0432","bel":"\u0411\u0440\u0430\u0441\u043b\u0430\u045e"},"name1":{"rus":"\u0411\u0440\u0430\u0441\u043b\u0430\u0432","bel":"\u0411\u0440\u0430\u0441\u043b\u0430\u045e"},"name2":{"rus":"\u0411\u0440\u0430\u0441\u043b\u0430\u0432\u0430","bel":"\u0411\u0440\u0430\u0441\u043b\u0430\u0432\u0430"},"name6":{"rus":"\u0411\u0440\u0430\u0441\u043b\u0430\u0432\u0435","bel":"\u0411\u0440\u0430\u0441\u043b\u0430\u0432\u0435"}},{"id":8751,"name":{"rus":"\u0411\u0430\u0440\u0430\u043d\u044c","bel":"\u0411\u0430\u0440\u0430\u043d\u044c"},"name1":{"rus":"\u0411\u0430\u0440\u0430\u043d\u044c","bel":"\u0411\u0430\u0440\u0430\u043d\u044c "},"name2":{"rus":"\u0411\u0430\u0440\u0430\u043d\u0438","bel":"\u0411\u0430\u0440\u0430\u043d\u0456"},"name3":{"rus":"\u0411\u0430\u0440\u0430\u043d\u0438","bel":"\u0411\u0430\u0440\u0430\u043d\u0456"},"name4":{"rus":"\u0411\u0430\u0440\u0430\u043d\u044c","bel":"\u0411\u0430\u0440\u0430\u043d\u044c"},"name5":{"rus":"\u0411\u0430\u0440\u0430\u043d\u044c\u044e","bel":"\u0411\u0430\u0440\u0430\u043d\u043d\u044e"},"name6":{"rus":"\u0411\u0430\u0440\u0430\u043d\u0438","bel":"\u0411\u0430\u0440\u0430\u043d\u0456"}},{"id":2206,"name":{"rus":"\u0411\u0435\u0448\u0435\u043d\u043a\u043e\u0432\u0438\u0447\u0438","bel":"\u0411\u0435\u0448\u0430\u043d\u043a\u043e\u0432\u0456\u0447\u044b"},"name1":{"rus":"\u0411\u0435\u0448\u0435\u043d\u043a\u043e\u0432\u0438\u0447\u0438","bel":"\u0411\u0435\u0448\u0430\u043d\u043a\u043e\u0432\u0456\u0447\u044b"},"name2":{"rus":"\u0411\u0435\u0448\u0435\u043d\u043a\u043e\u0432\u0438\u0447\u0435\u0439","bel":"\u0411\u0435\u0448\u0430\u043d\u043a\u043e\u0432\u0456\u0447\u0430\u045e"}},{"id":3088,"name":{"rus":"\u0412\u0435\u0440\u0445\u043d\u0435\u0434\u0432\u0438\u043d\u0441\u043a","bel":"\u0412\u0435\u0440\u0445\u043d\u044f\u0434\u0437\u0432\u0456\u043d\u0441\u043a"},"name1":{"rus":"\u0412\u0435\u0440\u0445\u043d\u0435\u0434\u0432\u0438\u043d\u0441\u043a","bel":"\u0412\u0435\u0440\u0445\u043d\u044f\u0434\u0437\u0432\u0456\u043d\u0441\u043a"},"name2":{"rus":"\u0412\u0435\u0440\u0445\u043d\u0435\u0434\u0432\u0438\u043d\u0441\u043a\u0430","bel":"\u0412\u0435\u0440\u0445\u043d\u044f\u0434\u0437\u0432\u0456\u043d\u0441\u043a\u0430"},"name6":{"rus":"\u0412\u0435\u0440\u0445\u043d\u0435\u0434\u0432\u0438\u043d\u0441\u043a\u0435","bel":"\u0412\u0435\u0440\u0445\u043d\u0435\u0434\u0437\u0432\u0456\u043d\u0441\u043a\u0443"}},{"id":3723,"name":{"rus":"\u0413\u043b\u0443\u0431\u043e\u043a\u043e\u0435","bel":"\u0413\u043b\u044b\u0431\u043e\u043a\u0430\u0435"},"name1":{"rus":"\u0413\u043b\u0443\u0431\u043e\u043a\u043e\u0435","bel":"\u0413\u043b\u044b\u0431\u043e\u043a\u0430\u0435"},"name2":{"rus":"\u0413\u043b\u0443\u0431\u043e\u043a\u043e\u0433\u043e","bel":"\u0413\u043b\u044b\u0431\u043e\u043a\u0430\u0433\u0430"},"name6":{"rus":"\u0413\u043b\u0443\u0431\u043e\u043a\u043e\u043c","bel":"\u0413\u043b\u0443\u0431\u043e\u043a\u0456\u043c"}},{"id":4142,"name":{"rus":"\u0413\u043e\u0440\u043e\u0434\u043e\u043a","bel":"\u0413\u0430\u0440\u0430\u0434\u043e\u043a"},"name1":{"rus":"\u0413\u043e\u0440\u043e\u0434\u043e\u043a","bel":"\u0413\u0430\u0440\u0430\u0434\u043e\u043a"},"name2":{"rus":"\u0413\u043e\u0440\u043e\u0434\u043a\u0430","bel":"\u0413\u0430\u0440\u0430\u0434\u043a\u0430"},"name6":{"rus":"\u0413\u043e\u0440\u043e\u0434\u043a\u0435","bel":"\u0413\u0430\u0440\u0430\u0434\u043a\u0443"}},{"id":5334,"name":{"rus":"\u0414\u0438\u0441\u043d\u0430","bel":"\u0414\u0437\u0456\u0441\u043d\u0430"},"name1":{"rus":"\u0414\u0438\u0441\u043d\u0430","bel":"\u0414\u0437\u0456\u0441\u043d\u0430"},"name2":{"rus":"\u0414\u0438\u0441\u043d\u044b","bel":"\u0414\u0437\u0456\u0441\u043d\u044b"}},{"id":4504,"name":{"rus":"\u0414\u043e\u043a\u0448\u0438\u0446\u044b","bel":"\u0414\u043e\u043a\u0448\u044b\u0446\u044b"},"name1":{"rus":"\u0414\u043e\u043a\u0448\u0438\u0446\u044b","bel":"\u0414\u043e\u043a\u0448\u044b\u0446\u044b"},"name2":{"rus":"\u0414\u043e\u043a\u0448\u0438\u0446\u044b","bel":"\u0414\u043e\u043a\u0448\u044b\u0446\u044b"},"name6":{"rus":"\u0414\u043e\u043a\u0448\u0438\u0446\u0430\u0445","bel":"\u0414\u043e\u043a\u0448\u044b\u0446\u0430\u0445"}},{"id":4782,"name":{"rus":"\u0414\u0443\u0431\u0440\u043e\u0432\u043d\u043e","bel":"\u0414\u0443\u0431\u0440\u043e\u045e\u043d\u0430"},"name1":{"rus":"\u0414\u0443\u0431\u0440\u043e\u0432\u043d\u043e","bel":"\u0414\u0443\u0431\u0440\u043e\u045e\u043d\u0430"},"name2":{"rus":"\u0414\u0443\u0431\u0440\u043e\u0432\u043d\u043e","bel":"\u0414\u0443\u0431\u0440\u043e\u045e\u043d\u0430"}},{"id":8748,"name":{"rus":"\u041b\u0435\u043f\u0435\u043b\u044c","bel":"\u041b\u0435\u043f\u0435\u043b\u044c"},"name1":{"rus":"\u041b\u0435\u043f\u0435\u043b\u044c","bel":"\u041b\u0435\u043f\u0435\u043b\u044c"},"name2":{"rus":"\u041b\u0435\u043f\u0435\u043b\u044f","bel":"\u041b\u0435\u043f\u0435\u043b\u044f"},"name6":{"rus":"\u041b\u0435\u043f\u0435\u043b\u0435","bel":"\u041b\u0435\u043f\u0435\u043b\u0456"}},{"id":5161,"name":{"rus":"\u041b\u0438\u043e\u0437\u043d\u043e","bel":"\u041b\u0451\u0437\u043d\u0430"},"name1":{"rus":"\u041b\u0438\u043e\u0437\u043d\u043e","bel":"\u041b\u0451\u0437\u043d\u0430"},"name2":{"rus":"\u041b\u0438\u043e\u0437\u043d\u043e","bel":"\u041b\u0451\u0437\u043d\u0430"}},{"id":5333,"name":{"rus":"\u041c\u0438\u043e\u0440\u044b","bel":"\u041c\u0456\u0451\u0440\u044b"},"name1":{"rus":"\u041c\u0438\u043e\u0440\u044b","bel":"\u041c\u0456\u0451\u0440\u044b"},"name2":{"rus":"\u041c\u0438\u043e\u0440","bel":"\u041c\u0456\u0451\u0440"}},{"id":8003,"name":{"rus":"\u041d\u043e\u0432\u043e\u043b\u0443\u043a\u043e\u043c\u043b\u044c","bel":"\u041d\u0430\u0432\u0430\u043f\u043e\u043b\u0430\u0446\u043a"},"name1":{"rus":"\u041d\u043e\u0432\u043e\u043b\u0443\u043a\u043e\u043c\u043b\u044c","bel":"\u041d\u043e\u0432\u0430\u043b\u0443\u043a\u043e\u043c\u043b\u044c"},"name2":{"rus":"\u041d\u043e\u0432\u043e\u043b\u0443\u043a\u043e\u043c\u043b\u044f","bel":"\u041d\u043e\u0432\u0430\u043b\u0443\u043a\u043e\u043c\u043b\u044f "},"name3":{"rus":"\u041d\u043e\u0432\u043e\u043b\u0443\u043a\u043e\u043c\u043b\u044e","bel":"\u041d\u043e\u0432\u0430\u043b\u0443\u043a\u043e\u043c\u043b\u044e"},"name4":{"rus":"\u041d\u043e\u0432\u043e\u043b\u0443\u043a\u043e\u043c\u043b\u044c","bel":"\u041d\u043e\u0432\u0430\u043b\u0443\u043a\u043e\u043c\u043b\u044c"},"name5":{"rus":"\u041d\u043e\u0432\u043e\u043b\u0443\u043a\u043e\u043c\u043b\u0435\u043c","bel":"\u041d\u043e\u0432\u0430\u043b\u0443\u043a\u043e\u043c\u043b\u0435\u043c"},"name6":{"rus":"\u041d\u043e\u0432\u043e\u043b\u0443\u043a\u043e\u043c\u043b\u0435","bel":"\u041d\u043e\u0432\u0430\u043b\u0443\u043a\u043e\u043c\u043b\u0456"}},{"id":8749,"name":{"rus":"\u041d\u043e\u0432\u043e\u043f\u043e\u043b\u043e\u0446\u043a","bel":"\u041d\u0430\u0432\u0430\u043f\u043e\u043b\u0430\u0446\u043a"},"name1":{"rus":"\u041d\u043e\u0432\u043e\u043f\u043e\u043b\u043e\u0446\u043a","bel":"\u041d\u0430\u0432\u0430\u043f\u043e\u043b\u0430\u0446\u043a"},"name2":{"rus":"\u041d\u043e\u0432\u043e\u043f\u043e\u043b\u043e\u0446\u043a\u0430","bel":"\u041d\u0430\u0432\u0430\u043f\u043e\u043b\u0430\u0446\u043a\u0430"},"name6":{"rus":"\u041d\u043e\u0432\u043e\u043f\u043e\u043b\u043e\u0446\u043a\u0435","bel":"\u041d\u0430\u0432\u0430\u043f\u043e\u043b\u0430\u0446\u043a\u0443"}},{"id":8750,"name":{"rus":"\u041e\u0440\u0448\u0430","bel":"\u041e\u0440\u0448\u0430"},"name1":{"rus":"\u041e\u0440\u0448\u0430","bel":"\u041e\u0440\u0448\u0430"},"name2":{"rus":"\u041e\u0440\u0448\u0438","bel":"\u041e\u0440\u0448\u044b"},"name6":{"rus":"\u041e\u0440\u0448\u0435","bel":"\u041e\u0440\u0448\u044b"}},{"id":8752,"name":{"rus":"\u041f\u043e\u043b\u043e\u0446\u043a","bel":"\u041f\u043e\u043b\u0430\u0446\u043a"},"name1":{"rus":"\u041f\u043e\u043b\u043e\u0446\u043a","bel":"\u041f\u043e\u043b\u0430\u0446\u043a"},"name2":{"rus":"\u041f\u043e\u043b\u043e\u0446\u043a\u0430","bel":"\u041f\u043e\u043b\u0430\u0446\u043a\u0430"},"name6":{"rus":"\u041f\u043e\u043b\u043e\u0446\u043a\u0435","bel":"\u041f\u043e\u043b\u043e\u0446\u043a\u0443"}},{"id":6487,"name":{"rus":"\u041f\u043e\u0441\u0442\u0430\u0432\u044b","bel":"\u041f\u0430\u0441\u0442\u0430\u0432\u044b"},"name1":{"rus":"\u041f\u043e\u0441\u0442\u0430\u0432\u044b","bel":"\u041f\u0430\u0441\u0442\u0430\u0432\u044b"},"name2":{"rus":"\u041f\u043e\u0441\u0442\u0430\u0432","bel":"\u041f\u0430\u0441\u0442\u0430\u045e"},"name6":{"rus":"\u041f\u043e\u0441\u0442\u0430\u0432\u0430\u0445","bel":"\u041f\u0430\u0441\u0442\u0430\u0432\u0430\u0445"}},{"id":6993,"name":{"rus":"\u0420\u043e\u0441\u0441\u043e\u043d\u044b","bel":"\u0420\u0430\u0441\u043e\u043d\u044b"},"name1":{"rus":"\u0420\u043e\u0441\u0441\u043e\u043d\u044b","bel":"\u0420\u0430\u0441\u043e\u043d\u044b"},"name2":{"rus":"\u0420\u043e\u0441\u0441\u043e\u043d","bel":"\u0420\u0430\u0441\u043e\u043d"},"name6":{"rus":"\u0420\u043e\u0441\u0441\u043e\u043d\u0430\u0445","bel":"\u0420\u0430\u0441\u043e\u043d\u0430\u0445"}},{"id":7133,"name":{"rus":"\u0421\u0435\u043d\u043d\u043e","bel":"\u0421\u044f\u043d\u043d\u043e"},"name1":{"rus":"\u0421\u0435\u043d\u043d\u043e","bel":"\u0421\u044f\u043d\u043d\u043e"},"name2":{"rus":"\u0421\u0435\u043d\u043d\u043e","bel":"\u0421\u044f\u043d\u043d\u043e"},"name6":{"rus":"\u0421\u0435\u043d\u043d\u043e","bel":"\u0421\u044f\u043d\u043d\u043e"}},{"id":7469,"name":{"rus":"\u0422\u043e\u043b\u043e\u0447\u0438\u043d","bel":"\u0422\u0430\u043b\u0430\u0447\u044b\u043d"},"name1":{"rus":"\u0422\u043e\u043b\u043e\u0447\u0438\u043d","bel":"\u0422\u0430\u043b\u0430\u0447\u044b\u043d"},"name2":{"rus":"\u0422\u043e\u043b\u043e\u0447\u0438\u043d\u0430","bel":"\u0422\u0430\u043b\u0430\u0447\u044b\u043d\u0430"},"name6":{"rus":"\u0422\u043e\u043b\u043e\u0447\u0438\u043d\u0435","bel":"\u0422\u0430\u043b\u043e\u0447\u044b\u043d\u0435"}},{"id":7742,"name":{"rus":"\u0423\u0448\u0430\u0447\u0438","bel":"\u0423\u0448\u0430\u0447\u044b"},"name1":{"rus":"\u0423\u0448\u0430\u0447\u0438","bel":"\u0423\u0448\u0430\u0447\u044b"},"name2":{"rus":"\u0423\u0448\u0430\u0447\u0435\u0439","bel":"\u0423\u0448\u0430\u0447\u0430\u045e"},"name6":{"rus":"\u0423\u0448\u0430\u0447\u0430\u0445","bel":"\u0423\u0448\u0430\u0447\u0430\u0445"}},{"id":8002,"name":{"rus":"\u0427\u0430\u0448\u043d\u0438\u043a\u0438","bel":"\u0427\u0430\u0448\u043d\u0456\u043a\u0456"},"name1":{"rus":"\u0427\u0430\u0448\u043d\u0438\u043a\u0438","bel":"\u0427\u0430\u0448\u043d\u0456\u043a\u0456"},"name2":{"rus":"\u0427\u0430\u0448\u043d\u0438\u043a\u043e\u0432","bel":"\u0427\u0430\u0448\u043d\u0456\u043a\u0430\u045e"},"name6":{"rus":"\u0427\u0430\u0448\u043d\u0438\u043a\u0430\u0445","bel":"\u0427\u0430\u0448\u043d\u0456\u043a\u0430\u0445"}},{"id":8217,"name":{"rus":"\u0428\u0430\u0440\u043a\u043e\u0432\u0449\u0438\u043d\u0430","bel":"\u0428\u0430\u0440\u043a\u0430\u045e\u0448\u0447\u044b\u043d\u0430"},"name1":{"rus":"\u0428\u0430\u0440\u043a\u043e\u0432\u0449\u0438\u043d\u0430","bel":"\u0428\u0430\u0440\u043a\u0430\u045e\u0448\u0447\u044b\u043d\u0430"},"name2":{"rus":"\u0428\u0430\u0440\u043a\u043e\u0432\u0449\u0438\u043d\u044b","bel":"\u0428\u0430\u0440\u043a\u0430\u045e\u0448\u0447\u044b\u043d\u044b"},"name6":{"rus":"\u0428\u0430\u0440\u043a\u043e\u0432\u0449\u0438\u043d\u0435","bel":"\u0428\u0430\u0440\u043a\u0430\u045e\u0448\u0447\u044b\u043d\u0435"}},{"id":8489,"name":{"rus":"\u0428\u0443\u043c\u0438\u043b\u0438\u043d\u043e","bel":"\u0428\u0443\u043c\u0456\u043b\u0456\u043d\u0430"},"name1":{"rus":"\u0428\u0443\u043c\u0438\u043b\u0438\u043d\u043e","bel":"\u0428\u0443\u043c\u0456\u043b\u0456\u043d\u0430"},"name2":{"rus":"\u0428\u0443\u043c\u0438\u043b\u0438\u043d\u043e","bel":"\u0428\u0443\u043c\u0456\u043b\u0456\u043d\u0430"}}]},{"id":11390,"name":{"rus":"\u0413\u043e\u043c\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c","bel":"\u0413\u043e\u043c\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u0432\u043e\u0431\u043b\u0430\u0441\u0446\u044c"},"items":[{"id":11390,"name":{"rus":"\u0413\u043e\u043c\u0435\u043b\u044c","bel":"\u0413\u043e\u043c\u0435\u043b\u044c"},"name1":{"rus":"\u0413\u043e\u043c\u0435\u043b\u044c","bel":"\u0413\u043e\u043c\u0435\u043b\u044c"},"name2":{"rus":"\u0413\u043e\u043c\u0435\u043b\u044f","bel":"\u0413\u043e\u043c\u0435\u043b\u044f"},"name3":{"rus":"\u0413\u043e\u043c\u0435\u043b\u044e","bel":"\u0413\u043e\u043c\u0435\u043b\u044e"},"name4":{"rus":"\u0413\u043e\u043c\u0435\u043b\u044c","bel":"\u0413\u043e\u043c\u0435\u043b\u044c"},"name5":{"rus":"\u0413\u043e\u043c\u0435\u043b\u0435\u043c","bel":"\u0413\u043e\u043c\u0435\u043b\u0435\u043c"},"name6":{"rus":"\u0413\u043e\u043c\u0435\u043b\u0435","bel":"\u0413\u043e\u043c\u0435\u043bi"}},{"id":8753,"name":{"rus":"\u0411\u0440\u0430\u0433\u0438\u043d","bel":"\u0411\u0440\u0430\u0433\u0456\u043d"},"name1":{"rus":"\u0411\u0440\u0430\u0433\u0438\u043d","bel":"\u0411\u0440\u0430\u0433\u0456\u043d"},"name2":{"rus":"\u0411\u0440\u0430\u0433\u0438\u043d\u0430","bel":"\u0411\u0440\u0430\u0433\u0456\u043d\u0430"},"name6":{"rus":"\u0411\u0440\u0430\u0433\u0438\u043d\u0435","bel":"\u0411\u0440\u0430\u0433\u0456\u043d\u0435"}},{"id":8889,"name":{"rus":"\u0411\u0443\u0434\u0430-\u041a\u043e\u0448\u0435\u043b\u0435\u0432\u043e","bel":"\u0411\u0443\u0434\u0430-\u041a\u0430\u0448\u0430\u043b\u0451\u0432\u0430"},"name1":{"rus":"\u0411\u0443\u0434\u0430-\u041a\u043e\u0448\u0435\u043b\u0435\u0432\u043e","bel":"\u0411\u0443\u0434\u0430-\u041a\u0430\u0448\u0430\u043b\u0451\u0432\u0430"},"name2":{"rus":"\u0411\u0443\u0434\u0430-\u041a\u043e\u0448\u0435\u043b\u0435\u0432\u043e","bel":"\u0411\u0443\u0434\u0430-\u041a\u0430\u0448\u0430\u043b\u0451\u0432\u0430"},"name6":{"rus":"\u0411\u0443\u0434\u0430-\u041a\u043e\u0448\u0435\u043b\u0435\u0432\u043e","bel":"\u0411\u0443\u0434\u0430-\u041a\u0430\u0448\u0430\u043b\u0451\u0432\u0430"}},{"id":10664,"name":{"rus":"\u0412\u0430\u0441\u0438\u043b\u0435\u0432\u0438\u0447\u0438","bel":"\u0412\u0430\u0441\u0456\u043b\u0435\u0432\u0456\u0447\u044b"},"name1":{"rus":"\u0412\u0430\u0441\u0438\u043b\u0435\u0432\u0438\u0447\u0438","bel":"\u0412\u0430\u0441\u0456\u043b\u0435\u0432\u0456\u0447\u044b"},"name2":{"rus":"\u0412\u0430\u0441\u0438\u043b\u0435\u0432\u0438\u0447\u0435\u0439","bel":"\u0412\u0430\u0441\u0456\u043b\u0435\u0432\u0456\u0447\u0430\u045e"},"name3":{"rus":"\u0412\u0430\u0441\u0438\u043b\u0435\u0432\u0438\u0447\u0430\u043c","bel":"\u0412\u0430\u0441\u0456\u043b\u0435\u0432\u0456\u0447\u0430\u043c"},"name4":{"rus":"\u0412\u0430\u0441\u0438\u043b\u0435\u0432\u0438\u0447\u0438","bel":"\u0412\u0430\u0441\u0456\u043b\u0435\u0432\u0456\u0447\u044b"},"name5":{"rus":"\u0412\u0430\u0441\u0438\u043b\u0435\u0432\u0438\u0447\u0430\u043c\u0438","bel":"\u0412\u0430\u0441\u0456\u043b\u0435\u0432\u0456\u0447\u0430\u043c\u0456"},"name6":{"rus":"\u0412\u0430\u0441\u0438\u043b\u0435\u0432\u0438\u0447\u0430\u0445","bel":"\u0412\u0430\u0441\u0456\u043b\u0435\u0432\u0456\u0447\u0430\u0445"}},{"id":9133,"name":{"rus":"\u0412\u0435\u0442\u043a\u0430","bel":"\u0412\u0435\u0442\u043a\u0430"},"name1":{"rus":"\u0412\u0435\u0442\u043a\u0430","bel":"\u0412\u0435\u0442\u043a\u0430"},"name2":{"rus":"\u0412\u0435\u0442\u043a\u0438","bel":"\u0412\u0435\u0442\u043ai"},"name6":{"rus":"\u0412\u0435\u0442\u043a\u0435","bel":"\u0412\u0435\u0442\u0446\u044b"}},{"id":9462,"name":{"rus":"\u0414\u043e\u0431\u0440\u0443\u0448","bel":"\u0414\u043e\u0431\u0440\u0443\u0448"},"name1":{"rus":"\u0414\u043e\u0431\u0440\u0443\u0448","bel":"\u0414\u043e\u0431\u0440\u0443\u0448"},"name2":{"rus":"\u0414\u043e\u0431\u0440\u0443\u0448\u0430","bel":"\u0414\u043e\u0431\u0440\u0443\u0448\u0430"},"name6":{"rus":"\u0414\u043e\u0431\u0440\u0443\u0448\u0435","bel":"\u0414\u043e\u0431\u0440\u0443\u0448\u044b"}},{"id":9564,"name":{"rus":"\u0415\u043b\u044c\u0441\u043a","bel":"\u0415\u043b\u044c\u0441\u043a"},"name1":{"rus":"\u0415\u043b\u044c\u0441\u043a","bel":"\u0415\u043b\u044c\u0441\u043a"},"name2":{"rus":"\u0415\u043b\u044c\u0441\u043a\u0430","bel":"\u0415\u043b\u044c\u0441\u043a\u0430"},"name6":{"rus":"\u0415\u043b\u044c\u0441\u043a\u0435","bel":"\u0415\u043b\u044c\u0441\u043a\u0443"}},{"id":9641,"name":{"rus":"\u0416\u0438\u0442\u043a\u043e\u0432\u0438\u0447\u0438","bel":"\u0416\u044b\u0442\u043a\u0430\u0432i\u0447\u044b"},"name1":{"rus":"\u0416\u0438\u0442\u043a\u043e\u0432\u0438\u0447\u0438","bel":"\u0416\u044b\u0442\u043a\u0430\u0432i\u0447\u044b"},"name2":{"rus":"\u0416\u0438\u0442\u043a\u043e\u0432\u0438\u0447\u0435\u0439","bel":"\u0416\u044b\u0442\u043a\u0430\u0432i\u0447\u0430\u045e"},"name6":{"rus":"\u0416\u0438\u0442\u043a\u043e\u0432\u0438\u0447\u0430\u0445","bel":"\u0416\u0438\u0442\u043a\u0430\u0432\u0456\u0447\u0430\u0445"}},{"id":11392,"name":{"rus":"\u0416\u043b\u043e\u0431\u0438\u043d","bel":"\u0416\u043b\u043e\u0431\u0456\u043d"},"name1":{"rus":"\u0416\u043b\u043e\u0431\u0438\u043d","bel":"\u0416\u043b\u043e\u0431\u0456\u043d"},"name2":{"rus":"\u0416\u043b\u043e\u0431\u0438\u043d\u0430","bel":"\u0416\u043b\u043e\u0431\u0456\u043d\u0430"},"name6":{"rus":"\u0416\u043b\u043e\u0431\u0438\u043d\u0435","bel":"\u0416\u043b\u043e\u0431\u0456\u043d\u0435"}},{"id":9907,"name":{"rus":"\u041a\u0430\u043b\u0438\u043d\u043a\u043e\u0432\u0438\u0447\u0438","bel":"\u041a\u0430\u043b\u0456\u043d\u043a\u0430\u0432\u0456\u0447\u044b"},"name1":{"rus":"\u041a\u0430\u043b\u0438\u043d\u043a\u043e\u0432\u0438\u0447\u0438","bel":"\u041a\u0430\u043b\u0456\u043d\u043a\u0430\u0432\u0456\u0447\u044b"},"name2":{"rus":"\u041a\u0430\u043b\u0438\u043d\u043a\u043e\u0432\u0438\u0447\u0435\u0439","bel":"\u041a\u0430\u043b\u0456\u043d\u043a\u0430\u0432\u0456\u0447\u0430\u045e"},"name6":{"rus":"\u041a\u0430\u043b\u0438\u043d\u043a\u043e\u0432\u0438\u0447\u0430\u0445","bel":"\u041a\u0430\u043b\u0456\u043d\u043a\u0430\u0432\u0456\u0447\u0430\u0445"}},{"id":10039,"name":{"rus":"\u041a\u043e\u0440\u043c\u0430","bel":"\u041a\u0430\u0440\u043c\u0430"},"name1":{"rus":"\u041a\u043e\u0440\u043c\u0430","bel":"\u041a\u0430\u0440\u043c\u0430"},"name2":{"rus":"\u041a\u043e\u0440\u043c\u044b","bel":"\u041a\u0430\u0440\u043c\u044b"},"name6":{"rus":"\u041a\u043e\u0440\u043c\u0435","bel":"\u041a\u0430\u0440\u043c\u0435"}},{"id":10139,"name":{"rus":"\u041b\u0435\u043b\u044c\u0447\u0438\u0446\u044b","bel":"\u041b\u0435\u043b\u044c\u0447\u044b\u0446\u044b"},"name1":{"rus":"\u041b\u0435\u043b\u044c\u0447\u0438\u0446\u044b","bel":"\u041b\u0435\u043b\u044c\u0447\u044b\u0446\u044b"},"name2":{"rus":"\u041b\u0435\u043b\u044c\u0447\u0438\u0446","bel":"\u041b\u0435\u043b\u044c\u0447\u044b\u0446"},"name6":{"rus":"\u041b\u0435\u043b\u044c\u0447\u0438\u0446\u0430\u0445","bel":"\u041b\u0435\u043b\u044c\u0447\u044b\u0446\u0430\u0445"}},{"id":10215,"name":{"rus":"\u041b\u043e\u0435\u0432","bel":"\u041b\u043e\u0435\u045e"},"name1":{"rus":"\u041b\u043e\u0435\u0432","bel":"\u041b\u043e\u0435\u045e"},"name2":{"rus":"\u041b\u043e\u0435\u0432\u0430","bel":"\u041b\u043e\u0435\u0432\u0430"},"name6":{"rus":"\u041b\u043e\u0435\u0432\u0435","bel":"\u041b\u043e\u0435\u0432\u0435"}},{"id":11393,"name":{"rus":"\u041c\u043e\u0437\u044b\u0440\u044c","bel":"\u041c\u0430\u0437\u044b\u0440"},"name1":{"rus":"\u041c\u043e\u0437\u044b\u0440\u044c","bel":"\u041c\u0430\u0437\u044b\u0440"},"name2":{"rus":"\u041c\u043e\u0437\u044b\u0440\u044f","bel":"\u041c\u0430\u0437\u044b\u0440\u0430"},"name6":{"rus":"\u041c\u043e\u0437\u044b\u0440\u0435","bel":"\u041c\u043e\u0437\u044b\u0440\u044b"}},{"id":10386,"name":{"rus":"\u041d\u0430\u0440\u043e\u0432\u043b\u044f","bel":"\u041d\u0430\u0440\u043e\u045e\u043b\u044f"},"name1":{"rus":"\u041d\u0430\u0440\u043e\u0432\u043b\u044f","bel":"\u041d\u0430\u0440\u043e\u045e\u043b\u044f"},"name2":{"rus":"\u041d\u0430\u0440\u043e\u0432\u043b\u0438","bel":"\u041d\u0430\u0440\u043e\u045e\u043bi"},"name6":{"rus":"\u041d\u0430\u0440\u043e\u0432\u043b\u0435","bel":"\u041d\u0430\u0440\u043e\u045e\u043b\u0456"}},{"id":10460,"name":{"rus":"\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u0438\u0439","bel":"\u0410\u043a\u0446\u044f\u0431\u0440\u0441\u043a\u0456"},"name1":{"rus":"\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u0438\u0439","bel":"\u0410\u043a\u0446\u044f\u0431\u0440\u0441\u043a\u0456"},"name2":{"rus":"\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u043e\u0433\u043e","bel":"\u0410\u043a\u0446\u044f\u0431\u0440\u0441\u043a\u0430\u0433\u0430"},"name6":{"rus":"\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u043e\u043c","bel":"\u0410\u043a\u0446\u044f\u0431\u0440\u0441\u043a\u0456\u043c"}},{"id":10538,"name":{"rus":"\u041f\u0435\u0442\u0440\u0438\u043a\u043e\u0432","bel":"\u041f\u0435\u0442\u0440\u044b\u043a\u0430\u045e"},"name1":{"rus":"\u041f\u0435\u0442\u0440\u0438\u043a\u043e\u0432","bel":"\u041f\u0435\u0442\u0440\u044b\u043a\u0430\u045e"},"name2":{"rus":"\u041f\u0435\u0442\u0440\u0438\u043a\u043e\u0432\u0430","bel":"\u041f\u0435\u0442\u0440\u044b\u043a\u0430\u0432\u0430"},"name6":{"rus":"\u041f\u0435\u0442\u0440\u0438\u043a\u043e\u0432\u0435","bel":"\u041f\u0435\u0442\u0440\u044b\u043a\u0430\u0432\u0435"}},{"id":11394,"name":{"rus":"\u0420\u0435\u0447\u0438\u0446\u0430","bel":"\u0420\u044d\u0447\u044b\u0446\u0430"},"name1":{"rus":"\u0420\u0435\u0447\u0438\u0446\u0430","bel":"\u0420\u044d\u0447\u044b\u0446\u0430"},"name2":{"rus":"\u0420\u0435\u0447\u0438\u0446\u044b","bel":"\u0420\u044d\u0447\u044b\u0446\u044b"},"name6":{"rus":"\u0420\u0435\u0447\u0438\u0446\u0435","bel":"\u0420\u044d\u0447\u044b\u0446\u044b"}},{"id":10854,"name":{"rus":"\u0420\u043e\u0433\u0430\u0447\u0435\u0432","bel":"\u0420\u0430\u0433\u0430\u0447\u043e\u045e"},"name1":{"rus":"\u0420\u043e\u0433\u0430\u0447\u0435\u0432","bel":"\u0420\u0430\u0433\u0430\u0447\u043e\u045e"},"name2":{"rus":"\u0420\u043e\u0433\u0430\u0447\u0435\u0432\u0430","bel":"\u0420\u0430\u0433\u0430\u0447\u043e\u0432\u0430"},"name6":{"rus":"\u0420\u043e\u0433\u0430\u0447\u0435\u0432\u0435","bel":"\u0420\u0430\u0433\u0430\u0447\u043e\u0432\u0435"}},{"id":11395,"name":{"rus":"\u0421\u0432\u0435\u0442\u043b\u043e\u0433\u043e\u0440\u0441\u043a","bel":"\u0421\u0432\u0435\u0442\u043b\u0430\u0433\u043e\u0440\u0441\u043a"},"name1":{"rus":"\u0421\u0432\u0435\u0442\u043b\u043e\u0433\u043e\u0440\u0441\u043a","bel":"\u0421\u0432\u0435\u0442\u043b\u0430\u0433\u043e\u0440\u0441\u043a"},"name2":{"rus":"\u0421\u0432\u0435\u0442\u043b\u043e\u0433\u043e\u0440\u0441\u043a\u0430","bel":"\u0421\u0432\u0435\u0442\u043b\u0430\u0433\u043e\u0440\u0441\u043a\u0430"},"name6":{"rus":"\u0421\u0432\u0435\u0442\u043b\u043e\u0433\u043e\u0440\u0441\u043a\u0435","bel":"\u0421\u0432\u0435\u0442\u043b\u0430\u0433\u043e\u0440\u0441\u043a\u0443"}},{"id":9642,"name":{"rus":"\u0422\u0443\u0440\u043e\u0432","bel":"\u0422\u0443\u0440\u0430\u045e"},"name1":{"rus":"\u0422\u0443\u0440\u043e\u0432","bel":"\u0422\u0443\u0440\u0430\u045e"},"name2":{"rus":"\u0422\u0443\u0440\u043e\u0432\u0430","bel":"\u0422\u0443\u0440\u0430\u0432\u0430"},"name6":{"rus":"\u0422\u0443\u0440\u043e\u0432\u0435","bel":"\u0422\u0443\u0440\u0430\u0432\u0435"}},{"id":11168,"name":{"rus":"\u0425\u043e\u0439\u043d\u0438\u043a\u0438","bel":"\u0425\u043e\u0439\u043d\u0456\u043a\u0456"},"name1":{"rus":"\u0425\u043e\u0439\u043d\u0438\u043a\u0438","bel":"\u0425\u043e\u0439\u043d\u0456\u043a\u0456"},"name2":{"rus":"\u0425\u043e\u0439\u043d\u0438\u043a\u043e\u0432","bel":"\u0425\u043e\u0439\u043d\u0456\u043a\u0430\u045e"},"name6":{"rus":"\u0425\u043e\u0439\u043d\u0438\u043a\u0430\u0445","bel":"\u0425\u043e\u0439\u043d\u0456\u043a\u0430\u0445"}},{"id":11264,"name":{"rus":"\u0427\u0435\u0447\u0435\u0440\u0441\u043a","bel":"\u0427\u0430\u0447\u044d\u0440\u0441\u043a"},"name1":{"rus":"\u0427\u0435\u0447\u0435\u0440\u0441\u043a","bel":"\u0427\u0430\u0447\u044d\u0440\u0441\u043a"},"name2":{"rus":"\u0427\u0435\u0447\u0435\u0440\u0441\u043a\u0430","bel":"\u0427\u0430\u0447\u044d\u0440\u0441\u043a\u0430"},"name6":{"rus":"\u0427\u0435\u0447\u0435\u0440\u0441\u043a\u0435","bel":"\u0427\u0430\u0447\u044d\u0440\u0441\u043a\u0443"}}]},{"id":15797,"name":{"rus":"\u0413\u0440\u043e\u0434\u043d\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c","bel":"\u0413\u0440\u043e\u0434\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u0432\u043e\u0431\u043b\u0430\u0441\u0446\u044c"},"items":[{"id":15797,"name":{"rus":"\u0413\u0440\u043e\u0434\u043d\u043e","bel":"\u0413\u0440\u043e\u0434\u043d\u0430"},"name1":{"rus":"\u0413\u0440\u043e\u0434\u043d\u043e","bel":"\u0413\u0440\u043e\u0434\u043d\u0430"},"name2":{"rus":"\u0413\u0440\u043e\u0434\u043d\u043e","bel":"\u0413\u0440\u043e\u0434\u043d\u0430"},"name3":{"rus":"\u0413\u0440\u043e\u0434\u043d\u043e","bel":"\u0413\u0440\u043e\u0434\u043d\u0443"},"name4":{"rus":"\u0413\u0440\u043e\u0434\u043d\u043e","bel":"\u0413\u0440\u043e\u0434\u043d\u0430"},"name5":{"rus":"\u0413\u0440\u043e\u0434\u043d\u043e","bel":"\u0413\u0440\u043e\u0434\u043d\u0430\u043c"},"name6":{"rus":"\u0413\u0440\u043e\u0434\u043d\u043e","bel":"\u0413\u0440\u043e\u0434\u043d\u0435"}},{"id":13325,"name":{"rus":"\u0411\u0435\u0440\u0435\u0437\u043e\u0432\u043a\u0430","bel":"\u0411\u044f\u0440\u043e\u0437\u0430\u045e\u043a\u0430"},"name1":{"rus":"\u0411\u0435\u0440\u0435\u0437\u043e\u0432\u043a\u0430","bel":"\u0411\u044f\u0440\u043e\u0437\u0430\u045e\u043a\u0430 "},"name2":{"rus":"\u0411\u0435\u0440\u0435\u0437\u043e\u0432\u043a\u0438","bel":"\u0411\u044f\u0440\u043e\u0437\u0430\u045e\u043a\u0456"},"name3":{"rus":"\u0411\u0435\u0440\u0435\u0437\u043e\u0432\u043a\u0435","bel":"\u0411\u044f\u0440\u043e\u0437\u0430\u045e\u0446\u044b"},"name4":{"rus":"\u0411\u0435\u0440\u0435\u0437\u043e\u0432\u043a\u0443","bel":"\u0411\u044f\u0440\u043e\u0437\u0430\u045e\u043a\u0443"},"name5":{"rus":"\u0411\u0435\u0440\u0435\u0437\u043e\u0432\u043a\u043e\u0439","bel":"\u0411\u044f\u0440\u043e\u0437\u0430\u045e\u043a\u0430\u0439"},"name6":{"rus":"\u0411\u0435\u0440\u0435\u0437\u043e\u0432\u043a\u0435","bel":"\u0411\u044f\u0440\u043e\u0437\u0430\u045e\u043a\u0443"}},{"id":26342,"name":{"rus":"\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0411\u0435\u0440\u0435\u0441\u0442\u043e\u0432\u0438\u0446\u0430","bel":"\u0412\u044f\u043b\u0456\u043a\u0430\u044f \u0411\u0435\u0440\u0430\u0441\u0442\u0430\u0432\u0456\u0446\u0430"},"name1":{"rus":"\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0411\u0435\u0440\u0435\u0441\u0442\u043e\u0432\u0438\u0446\u0430","bel":"\u0412\u044f\u043b\u0456\u043a\u0430\u044f \u0411\u0435\u0440\u0430\u0441\u0442\u0430\u0432\u0456\u0446\u0430"},"name2":{"rus":"\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0411\u0435\u0440\u0435\u0441\u0442\u043e\u0432\u0438\u0446\u044b","bel":"\u0412\u044f\u043b\u0456\u043a\u0430\u0439 \u0411\u0435\u0440\u0430\u0441\u0442\u0430\u0432\u0456\u0446\u044b"}},{"id":11524,"name":{"rus":"\u0412\u043e\u043b\u043a\u043e\u0432\u044b\u0441\u043a","bel":"\u0412\u0430\u045e\u043a\u0430\u0432\u044b\u0441\u043a"},"name1":{"rus":"\u0412\u043e\u043b\u043a\u043e\u0432\u044b\u0441\u043a","bel":"\u0412\u0430\u045e\u043a\u0430\u0432\u044b\u0441\u043a"},"name2":{"rus":"\u0412\u043e\u043b\u043a\u043e\u0432\u044b\u0441\u043a\u0430","bel":"\u0412\u0430\u045e\u043a\u0430\u0432\u044b\u0441\u043a\u0430"},"name6":{"rus":"\u0412\u043e\u043b\u043a\u043e\u0432\u044b\u0441\u043a\u0435","bel":"\u0412\u0430\u045e\u043a\u0430\u0432\u044b\u0441\u043a\u0443"}},{"id":11715,"name":{"rus":"\u0412\u043e\u0440\u043e\u043d\u043e\u0432\u043e","bel":"\u0412\u043e\u0440\u0430\u043d\u0430\u0432\u0430"},"name1":{"rus":"\u0412\u043e\u0440\u043e\u043d\u043e\u0432\u043e","bel":"\u0412\u043e\u0440\u0430\u043d\u0430\u0432\u0430"},"name2":{"rus":"\u0412\u043e\u0440\u043e\u043d\u043e\u0432\u043e","bel":"\u0412\u043e\u0440\u0430\u043d\u0430\u0432\u0430"},"name6":{"rus":"\u0412\u043e\u0440\u043e\u043d\u043e\u0432\u043e","bel":"\u0412\u043e\u0440\u0430\u043d\u0430\u0432\u0430"}},{"id":12438,"name":{"rus":"\u0414\u044f\u0442\u043b\u043e\u0432\u043e","bel":"\u0414\u0437\u044f\u0442\u043b\u0430\u0432\u0430"},"name1":{"rus":"\u0414\u044f\u0442\u043b\u043e\u0432\u043e","bel":"\u0414\u0437\u044f\u0442\u043b\u0430\u0432\u0430"},"name2":{"rus":"\u0414\u044f\u0442\u043b\u043e\u0432\u043e","bel":"\u0414\u0437\u044f\u0442\u043b\u0430\u0432\u0430"},"name6":{"rus":"\u0414\u044f\u0442\u043b\u043e\u0432\u043e","bel":"\u0414\u0437\u044f\u0442\u043b\u0430\u0432\u0430"}},{"id":12665,"name":{"rus":"\u0417\u0435\u043b\u044c\u0432\u0430","bel":"\u0417\u044d\u043b\u044c\u0432\u0430"},"name1":{"rus":"\u0417\u0435\u043b\u044c\u0432\u0430","bel":"\u0417\u044d\u043b\u044c\u0432\u0430"},"name2":{"rus":"\u0417\u0435\u043b\u044c\u0432\u044b","bel":"\u0417\u044d\u043b\u044c\u0432\u044b"}},{"id":12923,"name":{"rus":"\u0418\u0432\u044c\u0435","bel":"\u0406\u045e\u0435"},"name1":{"rus":"\u0418\u0432\u044c\u0435","bel":"\u0406\u045e\u0435"},"name2":{"rus":"\u0418\u0432\u044c\u044f","bel":"\u0406\u045e\u044f"},"name6":{"rus":"\u0418\u0432\u044c\u0435","bel":"\u0406\u045e\u0435"}},{"id":13162,"name":{"rus":"\u041a\u043e\u0440\u0435\u043b\u0438\u0447\u0438","bel":"\u041a\u0430\u0440\u044d\u043b\u0456\u0447\u044b"},"name1":{"rus":"\u041a\u043e\u0440\u0435\u043b\u0438\u0447\u0438","bel":"\u041a\u0430\u0440\u044d\u043b\u0456\u0447\u044b"},"name2":{"rus":"\u041a\u043e\u0440\u0435\u043b\u0438\u0447\u0435\u0439","bel":"\u041a\u0430\u0440\u044d\u043b\u0456\u0447\u0430\u045e"}},{"id":15798,"name":{"rus":"\u041b\u0438\u0434\u0430","bel":"\u041b\u0456\u0434\u0430"},"name1":{"rus":"\u041b\u0438\u0434\u0430","bel":"\u041b\u0456\u0434\u0430"},"name2":{"rus":"\u041b\u0438\u0434\u044b","bel":"\u041b\u0456\u0434\u044b"},"name6":{"rus":"\u041b\u0438\u0434\u0435","bel":"\u041b\u0456\u0434\u0437\u0435"}},{"id":13600,"name":{"rus":"\u041c\u043e\u0441\u0442\u044b","bel":"\u041c\u0430\u0441\u0442\u044b"},"name1":{"rus":"\u041c\u043e\u0441\u0442\u044b","bel":"\u041c\u0430\u0441\u0442\u044b"},"name2":{"rus":"\u041c\u043e\u0441\u0442\u043e\u0432","bel":"\u041c\u0430\u0441\u0442\u043e\u045e"},"name6":{"rus":"\u041c\u043e\u0441\u0442\u0430\u0445","bel":"\u041c\u0430\u0441\u0442\u0430\u0445"}},{"id":13755,"name":{"rus":"\u041d\u043e\u0432\u043e\u0433\u0440\u0443\u0434\u043e\u043a","bel":"\u041d\u0430\u0432\u0430\u0433\u0440\u0443\u0434\u0430\u043a"},"name1":{"rus":"\u041d\u043e\u0432\u043e\u0433\u0440\u0443\u0434\u043e\u043a","bel":"\u041d\u0430\u0432\u0430\u0433\u0440\u0443\u0434\u0430\u043a"},"name2":{"rus":"\u041d\u043e\u0432\u043e\u0433\u0440\u0443\u0434\u043a\u0430","bel":"\u041d\u0430\u0432\u0430\u0433\u0440\u0443\u0434\u043a\u0430"},"name6":{"rus":"\u041d\u043e\u0432\u043e\u0433\u0440\u0443\u0434\u043a\u0435","bel":"\u041d\u0430\u0432\u0430\u0433\u0440\u0443\u0434\u043a\u0443"}},{"id":14367,"name":{"rus":"\u041e\u0448\u043c\u044f\u043d\u044b","bel":"\u0410\u0448\u043c\u044f\u043d\u044b"},"name1":{"rus":"\u041e\u0448\u043c\u044f\u043d\u044b","bel":"\u0410\u0448\u043c\u044f\u043d\u044b"},"name2":{"rus":"\u041e\u0448\u043c\u044f\u043d","bel":"\u0410\u0448\u043c\u044f\u043d"},"name6":{"rus":"\u041e\u0448\u043c\u044f\u043d\u0430\u0445","bel":"\u0410\u0448\u043c\u044f\u043d\u0430\u0445"}},{"id":13971,"name":{"rus":"\u041e\u0441\u0442\u0440\u043e\u0432\u0435\u0446","bel":"\u0410\u0441\u0442\u0440\u0430\u0432\u0435\u0446"},"name1":{"rus":"\u041e\u0441\u0442\u0440\u043e\u0432\u0435\u0446","bel":"\u0410\u0441\u0442\u0440\u0430\u0432\u0435\u0446"},"name2":{"rus":"\u041e\u0441\u0442\u0440\u043e\u0432\u0446\u0430","bel":"\u0410\u0441\u0442\u0440\u0430\u045e\u0446\u0430"},"name6":{"rus":"\u041e\u0441\u0442\u0440\u043e\u0432\u0446\u0435","bel":"\u041e\u0441\u0442\u0440\u0430\u045e\u0446\u044d"}},{"id":14731,"name":{"rus":"\u0421\u0432\u0438\u0441\u043b\u043e\u0447\u044c","bel":"\u0421\u0432\u0456\u0441\u043b\u0430\u0447"},"name1":{"rus":"\u0421\u0432\u0438\u0441\u043b\u043e\u0447\u044c","bel":"\u0421\u0432\u0456\u0441\u043b\u0430\u0447"},"name2":{"rus":"\u0421\u0432\u0438\u0441\u043b\u043e\u0447\u0438","bel":"\u0421\u0432\u0456\u0441\u043b\u0430\u0447\u044b"},"name6":{"rus":"\u0421\u0432\u0438\u0441\u043b\u043e\u0447\u0438","bel":"\u0421\u0432\u0456\u0441\u043b\u0430\u0447\u044b"}},{"id":12053,"name":{"rus":"\u0421\u043a\u0438\u0434\u0435\u043b\u044c","bel":"\u0421\u043ai\u0434\u0437\u0435\u043b\u044c"},"name1":{"rus":"\u0421\u043a\u0438\u0434\u0435\u043b\u044c","bel":"\u0421\u043ai\u0434\u0437\u0435\u043b\u044c"},"name2":{"rus":"\u0421\u043a\u0438\u0434\u0435\u043b\u044f","bel":"\u0421\u043ai\u0434\u0437\u0435\u043b\u044f"},"name6":{"rus":"\u0421\u043a\u0438\u0434\u0435\u043b\u0435","bel":"\u0421\u043a\u0456\u0434\u0437\u0435\u043b\u0456"}},{"id":15799,"name":{"rus":"\u0421\u043b\u043e\u043d\u0438\u043c","bel":"\u0421\u043b\u043e\u043d\u0456\u043c"},"name1":{"rus":"\u0421\u043b\u043e\u043d\u0438\u043c","bel":"\u0421\u043b\u043e\u043d\u0456\u043c"},"name2":{"rus":"\u0421\u043b\u043e\u043d\u0438\u043c\u0430","bel":"\u0421\u043b\u043e\u043d\u0456\u043c\u0430"},"name6":{"rus":"\u0421\u043b\u043e\u043d\u0438\u043c\u0435","bel":"\u0421\u043b\u043e\u043d\u0456\u043c\u0435"}},{"id":15032,"name":{"rus":"\u0421\u043c\u043e\u0440\u0433\u043e\u043d\u044c","bel":"\u0421\u043c\u0430\u0440\u0433\u043e\u043d\u044c"},"name1":{"rus":"\u0421\u043c\u043e\u0440\u0433\u043e\u043d\u044c","bel":"\u0421\u043c\u0430\u0440\u0433\u043e\u043d\u044c"},"name2":{"rus":"\u0421\u043c\u043e\u0440\u0433\u043e\u043d\u0438","bel":"\u0421\u043c\u0430\u0440\u0433\u043e\u043di"},"name6":{"rus":"\u0421\u043c\u043e\u0440\u0433\u043e\u043d\u0438","bel":"\u0421\u043c\u0430\u0440\u0433\u043e\u043d\u0456"}},{"id":15357,"name":{"rus":"\u0429\u0443\u0447\u0438\u043d","bel":"\u0428\u0447\u0443\u0447\u044b\u043d"},"name1":{"rus":"\u0429\u0443\u0447\u0438\u043d","bel":"\u0428\u0447\u0443\u0447\u044b\u043d"},"name2":{"rus":"\u0429\u0443\u0447\u0438\u043d\u0430","bel":"\u0428\u0447\u0443\u0447\u044b\u043d\u0430"},"name6":{"rus":"\u0429\u0443\u0447\u0438\u043d\u0435","bel":"\u0428\u0447\u0443\u0447\u044b\u043d\u0435"}}]},{"id":24248,"name":{"rus":"\u041c\u043e\u0433\u0438\u043b\u0435\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c","bel":"\u041c\u0430\u0433\u0456\u043b\u0451\u045e\u0441\u043a\u0430\u044f \u0432\u043e\u0431\u043b\u0430\u0441\u0446\u044c"},"items":[{"id":24248,"name":{"rus":"\u041c\u043e\u0433\u0438\u043b\u0435\u0432","bel":"\u041c\u0430\u0433\u0456\u043b\u0451\u045e"},"name1":{"rus":"\u041c\u043e\u0433\u0438\u043b\u0435\u0432","bel":"\u041c\u0430\u0433i\u043b\u0451\u045e"},"name2":{"rus":"\u041c\u043e\u0433\u0438\u043b\u0435\u0432\u0430","bel":"\u041c\u0430\u0433i\u043b\u0451\u0432\u0430"},"name3":{"rus":"\u041c\u043e\u0433\u0438\u043b\u0435\u0432\u0443","bel":"\u041c\u0430\u0433i\u043b\u0451\u0432\u0443"},"name4":{"rus":"\u041c\u043e\u0433\u0438\u043b\u0435\u0432","bel":"\u041c\u0430\u0433i\u043b\u0451\u045e"},"name5":{"rus":"\u041c\u043e\u0433\u0438\u043b\u0435\u0432\u043e\u043c","bel":"\u041c\u0430\u0433i\u043b\u0451\u0432\u0430\u043c"},"name6":{"rus":"\u041c\u043e\u0433\u0438\u043b\u0435\u0432","bel":"\u041c\u0430\u0433i\u043b\u0451\u0432\u0435"}},{"id":21065,"name":{"rus":"\u0411\u0435\u043b\u044b\u043d\u0438\u0447\u0438","bel":"\u0411\u044f\u043b\u044b\u043d\u0456\u0447\u044b"},"name1":{"rus":"\u0411\u0435\u043b\u044b\u043d\u0438\u0447\u0438","bel":"\u0411\u044f\u043b\u044b\u043d\u0456\u0447\u044b"},"name2":{"rus":"\u0411\u0435\u043b\u044b\u043d\u0438\u0447\u0435\u0439","bel":"\u0411\u044f\u043b\u044b\u043d\u0456\u0447\u0430\u045e"},"name6":{"rus":"\u0411\u0435\u043b\u044b\u043d\u0438\u0447\u0430\u0445","bel":"\u0411\u044f\u043b\u044b\u043d\u0456\u0447\u0430\u0445"}},{"id":24249,"name":{"rus":"\u0411\u043e\u0431\u0440\u0443\u0439\u0441\u043a","bel":"\u0411\u0430\u0431\u0440\u0443\u0439\u0441\u043a"},"name1":{"rus":"\u0411\u043e\u0431\u0440\u0443\u0439\u0441\u043a","bel":"\u0411\u0430\u0431\u0440\u0443\u0439\u0441\u043a"},"name2":{"rus":"\u0411\u043e\u0431\u0440\u0443\u0439\u0441\u043a\u0430","bel":"\u0411\u0430\u0431\u0440\u0443\u0439\u0441\u043a\u0430"},"name6":{"rus":"\u0411\u043e\u0431\u0440\u0443\u0439\u0441\u043a\u0435","bel":"\u0411\u0430\u0431\u0440\u0443\u0439\u0441\u043a\u0443"}},{"id":21482,"name":{"rus":"\u0411\u044b\u0445\u043e\u0432","bel":"\u0411\u044b\u0445\u0430\u045e"},"name1":{"rus":"\u0411\u044b\u0445\u043e\u0432","bel":"\u0411\u044b\u0445\u0430\u045e"},"name2":{"rus":"\u0411\u044b\u0445\u043e\u0432\u0430","bel":"\u0411\u044b\u0445\u0430\u0432\u0430"},"name6":{"rus":"\u0411\u044b\u0445\u043e\u0432\u0435","bel":"\u0411\u044b\u0445\u0430\u0432\u0435"}},{"id":21792,"name":{"rus":"\u0413\u043e\u0440\u043a\u0438","bel":"\u0413\u043e\u0440\u043a\u0456"},"name1":{"rus":"\u0413\u043e\u0440\u043a\u0438","bel":"\u0413\u043e\u0440\u043a\u0456"},"name2":{"rus":"\u0413\u043e\u0440\u043e\u043a","bel":"\u0413\u043e\u0440\u0430\u043a"},"name6":{"rus":"\u0413\u043e\u0440\u043a\u0430\u0445","bel":"\u0413\u043e\u0440\u043a\u0430\u0445"}},{"id":21684,"name":{"rus":"\u0413\u043b\u0443\u0441\u043a","bel":"\u0413\u043b\u0443\u0441\u043a"},"name1":{"rus":"\u0413\u043b\u0443\u0441\u043a","bel":"\u0413\u043b\u0443\u0441\u043a"},"name2":{"rus":"\u0413\u043b\u0443\u0441\u043a\u0430","bel":"\u0413\u043b\u0443\u0441\u043a\u0430"},"name6":{"rus":"\u0413\u043b\u0443\u0441\u043a\u0435","bel":"\u0413\u043b\u0443\u0441\u043a\u0443"}},{"id":21966,"name":{"rus":"\u0414\u0440\u0438\u0431\u0438\u043d","bel":"\u0414\u0440\u044b\u0431\u0456\u043d"},"name1":{"rus":"\u0414\u0440\u0438\u0431\u0438\u043d","bel":"\u0414\u0440\u044b\u0431\u0456\u043d"},"name2":{"rus":"\u0414\u0440\u0438\u0431\u0438\u043d\u0430","bel":"\u0414\u0440\u044b\u0431\u0456\u043d\u0430"},"name6":{"rus":"\u0414\u0440\u0438\u0431\u0438\u043d\u0435","bel":"\u0414\u0440\u044b\u0431\u0456\u043d\u0435"}},{"id":22069,"name":{"rus":"\u041a\u0438\u0440\u043e\u0432\u0441\u043a","bel":"\u041a\u0456\u0440\u0430\u045e\u0441\u043a"},"name1":{"rus":"\u041a\u0438\u0440\u043e\u0432\u0441\u043a","bel":"\u041a\u0456\u0440\u0430\u045e\u0441\u043a"},"name2":{"rus":"\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430","bel":"\u041a\u0456\u0440\u0430\u045e\u0441\u043a\u0430"},"name6":{"rus":"\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0435","bel":"\u041a\u0456\u0440\u0430\u045e\u0441\u043a\u0443"}},{"id":22195,"name":{"rus":"\u041a\u043b\u0438\u043c\u043e\u0432\u0438\u0447\u0438","bel":"\u041a\u043b\u0456\u043c\u0430\u0432\u0456\u0447\u044b"},"name1":{"rus":"\u041a\u043b\u0438\u043c\u043e\u0432\u0438\u0447\u0438","bel":"\u041a\u043b\u0456\u043c\u0430\u0432\u0456\u0447\u044b"},"name2":{"rus":"\u041a\u043b\u0438\u043c\u043e\u0432\u0438\u0447\u0435\u0439","bel":"\u041a\u043b\u0456\u043c\u0430\u0432\u0456\u0447\u0430\u045e"},"name6":{"rus":"\u041a\u043b\u0438\u043c\u043e\u0432\u0438\u0447\u0430\u0445","bel":"\u041a\u043b\u0456\u043c\u0430\u0432\u0456\u0447\u0430\u0445"}},{"id":22357,"name":{"rus":"\u041a\u043b\u0438\u0447\u0435\u0432","bel":"\u041a\u043b\u0456\u0447\u0430\u045e"},"name1":{"rus":"\u041a\u043b\u0438\u0447\u0435\u0432","bel":"\u041a\u043b\u0456\u0447\u0430\u045e"},"name2":{"rus":"\u041a\u043b\u0438\u0447\u0435\u0432\u0430","bel":"\u041a\u043b\u0456\u0447\u0430\u0432\u0430"},"name6":{"rus":"\u041a\u043b\u0438\u0447\u0435\u0432\u0435","bel":"\u041a\u043b\u0456\u0447\u0430\u0432\u0435"}},{"id":22498,"name":{"rus":"\u041a\u043e\u0441\u0442\u044e\u043a\u043e\u0432\u0438\u0447\u0438","bel":"\u041a\u0430\u0441\u0446\u044e\u043a\u043e\u0432\u0456\u0447\u044b"},"name1":{"rus":"\u041a\u043e\u0441\u0442\u044e\u043a\u043e\u0432\u0438\u0447\u0438","bel":"\u041a\u0430\u0441\u0446\u044e\u043a\u043e\u0432\u0456\u0447\u044b"},"name2":{"rus":"\u041a\u043e\u0441\u0442\u044e\u043a\u043e\u0432\u0438\u0447\u0435\u0439","bel":"\u041a\u0430\u0441\u0446\u044e\u043a\u043e\u0432\u0456\u0447\u0430\u045e"},"name6":{"rus":"\u041a\u043e\u0441\u0442\u044e\u043a\u043e\u0432\u0438\u0447\u0430\u0445","bel":"\u041a\u0430\u0441\u0446\u044e\u043a\u043e\u0432\u0456\u0447\u0430\u0445"}},{"id":22640,"name":{"rus":"\u041a\u0440\u0430\u0441\u043d\u043e\u043f\u043e\u043b\u044c\u0435","bel":"\u041a\u0440\u0430\u0441\u043d\u0430\u043f\u043e\u043b\u043b\u0435"},"name1":{"rus":"\u041a\u0440\u0430\u0441\u043d\u043e\u043f\u043e\u043b\u044c\u0435","bel":"\u041a\u0440\u0430\u0441\u043d\u0430\u043f\u043e\u043b\u043b\u0435"},"name2":{"rus":"\u041a\u0440\u0430\u0441\u043d\u043e\u043f\u043e\u043b\u044c\u044f","bel":"\u041a\u0440\u0430\u0441\u043d\u0430\u043f\u043e\u043b\u043b\u044f"},"name6":{"rus":"\u041a\u0440\u0430\u0441\u043d\u043e\u043f\u043e\u043b\u044c\u0435","bel":"\u041a\u0440\u0430\u0441\u043d\u0430\u043f\u043e\u043b\u043b\u0456"}},{"id":22736,"name":{"rus":"\u041a\u0440\u0438\u0447\u0435\u0432","bel":"\u041a\u0440\u044b\u0447\u0430\u045e"},"name1":{"rus":"\u041a\u0440\u0438\u0447\u0435\u0432","bel":"\u041a\u0440\u044b\u0447\u0430\u045e"},"name2":{"rus":"\u041a\u0440\u0438\u0447\u0435\u0432\u0430","bel":"\u041a\u0440\u044b\u0447\u0430\u0432\u0430"},"name6":{"rus":"\u041a\u0440\u0438\u0447\u0435\u0432\u0435","bel":"\u041a\u0440\u044b\u0447\u0430\u0432\u0435"}},{"id":22847,"name":{"rus":"\u041a\u0440\u0443\u0433\u043b\u043e\u0435","bel":"\u041a\u0440\u0443\u0433\u043b\u0430\u0435"},"name1":{"rus":"\u041a\u0440\u0443\u0433\u043b\u043e\u0435","bel":"\u041a\u0440\u0443\u0433\u043b\u0430\u0435"},"name2":{"rus":"\u041a\u0440\u0443\u0433\u043b\u043e\u0433\u043e","bel":"\u041a\u0440\u0443\u0433\u043b\u0430\u0433\u0430"}},{"id":23276,"name":{"rus":"\u041c\u0441\u0442\u0438\u0441\u043b\u0430\u0432\u043b\u044c","bel":"\u041c\u0441\u0446\u0456\u0441\u043b\u0430\u045e"},"name1":{"rus":"\u041c\u0441\u0442\u0438\u0441\u043b\u0430\u0432\u043b\u044c","bel":"\u041c\u0441\u0446\u0456\u0441\u043b\u0430\u045e"},"name2":{"rus":"\u041c\u0441\u0442\u0438\u0441\u043b\u0430\u0432\u043b\u044f","bel":"\u041c\u0441\u0446\u0456\u0441\u043b\u0430\u0432\u0430"},"name6":{"rus":"\u041c\u0441\u0442\u0438\u0441\u043b\u0430\u0432\u043b\u0435","bel":"\u041c\u0441\u0446\u0456\u0441\u043b\u0430\u045e\u043b\u0456"}},{"id":23441,"name":{"rus":"\u041e\u0441\u0438\u043f\u043e\u0432\u0438\u0447\u0438","bel":"\u0410\u0441\u0456\u043f\u043e\u0432\u0456\u0447\u044b"},"name1":{"rus":"\u041e\u0441\u0438\u043f\u043e\u0432\u0438\u0447\u0438","bel":"\u0410\u0441\u0456\u043f\u043e\u0432\u0456\u0447\u044b"},"name2":{"rus":"\u041e\u0441\u0438\u043f\u043e\u0432\u0438\u0447\u0435\u0439","bel":"\u0410\u0441\u0456\u043f\u043e\u0432\u0456\u0447\u0430\u045e"},"name6":{"rus":"\u041e\u0441\u0438\u043f\u043e\u0432\u0438\u0447\u0430\u0445","bel":"\u041e\u0441\u0456\u043f\u043e\u0432\u0456\u0447\u0430\u0445"}},{"id":23603,"name":{"rus":"\u0421\u043b\u0430\u0432\u0433\u043e\u0440\u043e\u0434","bel":"\u0421\u043b\u0430\u045e\u0433\u0430\u0440\u0430\u0434"},"name1":{"rus":"\u0421\u043b\u0430\u0432\u0433\u043e\u0440\u043e\u0434","bel":"\u0421\u043b\u0430\u045e\u0433\u0430\u0440\u0430\u0434"},"name2":{"rus":"\u0421\u043b\u0430\u0432\u0433\u043e\u0440\u043e\u0434\u0430","bel":"\u0421\u043b\u0430\u045e\u0433\u0430\u0440\u0430\u0434\u0430"},"name6":{"rus":"\u0421\u043b\u0430\u0432\u0433\u043e\u0440\u043e\u0434\u0435","bel":"\u0421\u043b\u0430\u045e\u0433\u0430\u0440\u0430\u0434\u0437\u0435"}},{"id":23687,"name":{"rus":"\u0425\u043e\u0442\u0438\u043c\u0441\u043a","bel":"\u0425\u043e\u0446\u0456\u043c\u0441\u043a"},"name1":{"rus":"\u0425\u043e\u0442\u0438\u043c\u0441\u043a","bel":"\u0425\u043e\u0446\u0456\u043c\u0441\u043a"},"name2":{"rus":"\u0425\u043e\u0442\u0438\u043c\u0441\u043a\u0430","bel":"\u0425\u043e\u0446\u0456\u043c\u0441\u043a\u0430"},"name6":{"rus":"\u0425\u043e\u0442\u0438\u043c\u0441\u043a\u0435","bel":"\u0425\u043e\u0446\u0456\u043c\u0441\u043a\u0443"}},{"id":23775,"name":{"rus":"\u0427\u0430\u0443\u0441\u044b","bel":"\u0427\u0430\u0432\u0443\u0441\u044b"},"name1":{"rus":"\u0427\u0430\u0443\u0441\u044b","bel":"\u0427\u0430\u0432\u0443\u0441\u044b"},"name2":{"rus":"\u0427\u0430\u0443\u0441","bel":"\u0427\u0430\u0432\u0443\u0441"},"name6":{"rus":"\u0427\u0430\u0443\u0441\u0430\u0445","bel":"\u0427\u0430\u0443\u0441\u0430\u0445"}},{"id":23941,"name":{"rus":"\u0427\u0435\u0440\u0438\u043a\u043e\u0432","bel":"\u0427\u044d\u0440\u044b\u043a\u0430\u045e"},"name1":{"rus":"\u0427\u0435\u0440\u0438\u043a\u043e\u0432","bel":"\u0427\u044d\u0440\u044b\u043a\u0430\u045e"},"name2":{"rus":"\u0427\u0435\u0440\u0438\u043a\u043e\u0432\u0430","bel":"\u0427\u044d\u0440\u044b\u043a\u0430\u0432\u0430"},"name6":{"rus":"\u0427\u0435\u0440\u0438\u043a\u043e\u0432\u0435","bel":"\u0427\u044d\u0440\u044b\u043a\u0430\u0432\u0435"}},{"id":24038,"name":{"rus":"\u0428\u043a\u043b\u043e\u0432","bel":"\u0428\u043a\u043b\u043e\u045e"},"name1":{"rus":"\u0428\u043a\u043b\u043e\u0432","bel":"\u0428\u043a\u043b\u043e\u045e"},"name2":{"rus":"\u0428\u043a\u043b\u043e\u0432\u0430","bel":"\u0428\u043a\u043b\u043e\u0432\u0430"},"name6":{"rus":"\u0428\u043a\u043b\u043e\u0432\u0435","bel":"\u0428\u043a\u043b\u043e\u0432\u0435"}}]}]);
		this.class_method_remove("param_autoload_geotargets");
	}
});

var CookieManager={
	setCookie: function (c_name,value,expiredays){
		var exdate=new Date();
		exdate.setDate(exdate.getDate()+expiredays);
		document.cookie=c_name+ "=" +escape(value)+(expiredays?(";expires="+exdate.toGMTString()):"")+";path=/;domain=.tut.by";
	},
	getCookie: function (c_name){
		if(document.cookie.length>0){
			var c_start=document.cookie.indexOf(c_name + "=");
			if (c_start!=-1){
				c_start=c_start + c_name.length+1;
				var c_end=document.cookie.indexOf(";",c_start);
				if (c_end==-1) c_end=document.cookie.length;
				return unescape(document.cookie.substring(c_start,c_end));
			}
		}
		return undefined;
	},
	delCookie: function (name){
		document.cookie = name+'=; expires=Thu, 01-Jan-70 00:00:01 GMT;path=/';
	}
};
var rCount=(function() {
	var oF=undefined;
	return function(eParent) {
		if(!oF) {
			oF=document.createElement('iframe');
			oF.frameBorder = 0;
			oF.width = 0;
			oF.height = 0;
			oF.scrolling = 'no'
			eParent.appendChild(oF);
		}
		oF.src = 'http://reklama.tut.by/?clickid=17874&'+(new Date()).getTime();
	};
})();
function changeIt (obj,sTagName,dY){
	var oEls=obj.getElementsByTagName(sTagName);
	if(dY > 90 && sTagName == "embed" )
		rCount(obj);
	if(oEls) try{
		oEls[0].setAttribute("height",dY);
		oEls[0].style.height = dY+'px';
	}catch(e){}
}
function BannerSlotSize(iHeight,sPlaceId){
	var oPlace=document.getElementById(sPlaceId);
	if(!oPlace) return;
	var sBannerId=oPlace.getAttribute("xBannerId");
	var iShowCountMax=parseInt(oPlace.getAttribute("xShowCount"),10);
	var iShowCount=parseInt(oPlace.getAttribute("xShowCurrent"),10);
	if(iShowCount<=iShowCountMax) {
		changeIt(oPlace,"embed",iHeight);
		changeIt(oPlace,"object",iHeight);
	}
}
function bannerExpandOld(sId){
	var eId = document.getElementById(sId);
	if(eId){
		var sBannerId=eId.getAttribute("xBannerId");
		var sCookieName="advExpand"+sBannerId;
		var iExpandCount=CookieManager.getCookie(sCookieName);
		iExpandCount=iExpandCount?parseInt(iExpandCount,10):1;
		if(iExpandCount <= 2){
			changeIt(eId,"embed",300);
			changeIt(eId,"object",300);
			setTimeout(function(){
				changeIt(eId,"embed",90);
				changeIt(eId,"object",90);
			},6700);
			iExpandCount=iExpandCount+1;
			CookieManager.setCookie(sCookieName,iExpandCount,1);
		}
	}
}
var bCounted = false;
function bannerExpand(sId){
	var eId = document.getElementById(sId);
	if(eId){
		var sBannerId=eId.getAttribute("xBannerId");
		var sCookieName="advExpand"+sBannerId;
		var iExpandCount=CookieManager.getCookie(sCookieName);
		if(iExpandCount){
			iExpandCount = parseInt(iExpandCount,10);
			if(!bCounted){
				iExpandCount=iExpandCount+1;
				CookieManager.setCookie(sCookieName,iExpandCount,1);
				bCounted = true;
			}
		}else{
			iExpandCount=1;
			CookieManager.setCookie(sCookieName,iExpandCount,1);
			bCounted = true;
		}
		if(iExpandCount <= 2){
			changeIt(eId,"embed",300);
			changeIt(eId,"object",300);
			setTimeout(function(){
				changeIt(eId,"embed",90);
				changeIt(eId,"object",90);
			},5000);
		}
	}
}
function bannerState(sId,sCommand){
	var oPlace=document.getElementById(sId);
	if(!oPlace) return;

	var sBannerId=oPlace.getAttribute("xBannerId");
	var iShowCountMax=parseInt(oPlace.getAttribute("xShowCount"),10);
	var iShowCount=parseInt(oPlace.getAttribute("xShowCurrent"),10);
	if(iShowCount<=iShowCountMax) {
		if(sCommand == "expand"){
			changeIt(oPlace,"embed",300);
			changeIt(oPlace,"object",300);
		}else{
			changeIt(oPlace,"embed",90);
			changeIt(oPlace,"object",90);
		}
	}
}
function FillBannerSlot(sPlaceId,iShowCountMax,sBanner){
	var sBannerId="xxx";
	var aMatch=sBanner.match(/<embed[^>]*src="([^">]+)"/)
	if(aMatch && aMatch.length>0){
		sBannerId=aMatch[1].replace(/^.*\/([0-9]+)_[^\/]+$/,"$1");
	}
	var sCookieName="advSlider"+sBannerId;
	var iShowCount=CookieManager.getCookie(sCookieName);
	if(iShowCount){
		iShowCount=parseInt(iShowCount,10)+1;
		CookieManager.delCookie(sCookieName);
	}else
		iShowCount=1;
	CookieManager.setCookie(sCookieName,iShowCount,7);
	var srso = "1";
	sCookieName="advExpand"+sBannerId;
	var iExpandCount=CookieManager.getCookie(sCookieName);
	if(iExpandCount){
		srso="";
	}

	var sAddon="count="+iShowCountMax+"&place="+sPlaceId+"&link1=http:\/\/preved.tut.by\/?clickid="+ sBannerId+"&fname=bannerState&rso="+srso;
	document.write("<div id=\""+sPlaceId+"\" xBannerId=\""+sBannerId+"\" xShowCount=\""+iShowCountMax+"\" xShowCurrent=\""+iShowCount+"\">");
	document.write(sBanner.replace(/(<object[^>]+)>/,"$1 id=\""+sBannerId+"\"><param name=\"allowScriptAccess\" value=\"always\"><param name=\"flashvars\" value=\""+sAddon+"\">").replace("<embed","<embed allowScriptAccess=\"always\" flashvars=\""+sAddon+"\""));
	document.write("</div>");
}


