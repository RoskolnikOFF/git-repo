var _gaq = _gaq || [];
var aGAAccounts=aGAAccounts || [];
var _uaq = _uaq || [];
var aUAAccounts=aUAAccounts || [];
var _term = _term || false;
(function($){ if (typeof($)=='function') { try { $(document).on('click','a[data-ua-hash]',function(e){ if (!this.href.toString().match(/#/)) this.href=this.href+'#ua:'+this.getAttribute('data-ua-hash'); return true;});} catch(e){}; }})(window.jQuery);
(function(x,y,window,hash){
	if((!(x instanceof Array) || x.length<1) && (!(y instanceof Array) || y.length<1)) return;
	var aOrganic=[
		["all.by","query"],
		["rambler.ru","words"],
		["nova.rambler.ru","query"],
		["go.mail.ru","q"],
		["webalta.ru","q"],
		["aport.ru","r"],
		["nigma.ru","s"],
		["search.tut.by","query"]
	];
	var fSetAccount=function(x,iPhase){
		var sPrefix=(x[0].length?x[0]+".":"");
		_gaq.push([sPrefix+"_setAccount",x[1]]);
		var i;
		if(iPhase==0 || iPhase==2) for(i=aOrganic.length-1;i>=0;i--) _gaq.push([sPrefix+"_addOrganic",aOrganic[i][0],aOrganic[i][1]]);
		if(iPhase>0){
			if(x.length>2) _gaq.push([sPrefix+"_setDomainName",x[2]],[sPrefix+"_addIgnoredRef",x[2]]);
			if (fIsAdaptive()) _gaq.push([sPrefix+"_trackPageview", "/adaptive"+window.location.pathname]);
			else _gaq.push([sPrefix+"_trackPageview"]);
		}
	};
	var fSetAccountUA=function(x,iPhase,w,ga,opts){
		var sPrefix1=(x[0].length?x[0]:"");
		var sPrefix2=(x[0].length?x[0]+".":"");
		var aCall=[];
		switch(iPhase) {
			case 0:
				aCall.push('create');
				aCall.push(x[1]);
				if(x.length>2) aCall.push(x[2]);
				if(sPrefix1.length>0) aCall.push({name: sPrefix1});
				break;
			case 1:
				aCall.push(sPrefix2+'send');
				aCall.push('pageview');
				if (fIsAdaptive()){
					opts = opts || {};
					opts.page = "/adaptive"+window.location.pathname;
				}
				if(opts) aCall.push(opts);
				break;
			default:
				return false;
				break
		}
		ga.apply(w,aCall);
		return true;
	};
	var fLoadScript=function (url,callback) {
		var cb=callback;
		var script = document.createElement("script")
		script.type = "text/javascript";
		script.async = true;
		if(script.readyState) script.onreadystatechange=function(){
			if(script.readyState=="loaded" || script.readyState=="complete"){
				script.onreadystatechange=null;
				cb();
			}
		};
		else script.onload=cb;
		script.src=url;
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script,s);
	}
	var fIsAdaptive=function(){
		if (typeof fIsAdaptive.bIsAdaptive == "undefined") {
			try{
				fIsAdaptive.bIsAdaptive=window.document.getElementsByTagName("html")[0].className.search(/^(.*\s)?smart(\s.*)?$/i)>-1
			}
			catch(e){
				fIsAdaptive.bIsAdaptive=false;
			}
		}
		return fIsAdaptive.bIsAdaptive;
	}
	if((x instanceof Array) && x.length>0) fSetAccount(x[0],0);
	var sCollectorURL=('https:'==document.location.protocol?'https://api':'http://www')+'.tut.by/login/ga.php?tm='+(new Date()).getTime();
	if(document.referrer) sCollectorURL+='&ref='+encodeURIComponent(document.referrer);
	
	var collector=function() {
		fLoadScript(sCollectorURL,function(){
			var i,j;
			if((x instanceof Array) && x.length>0) {
				fSetAccount(x[0],1);
				for(i=1,j=x.length;i<j;i++) fSetAccount(x[i],2);
				(function(src){
					var ga=document.createElement('script'); ga.type='text/javascript'; ga.async=true; ga.src=src;
					var s=document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga,s);
				})(('https:'==document.location.protocol?'https://':'http://')+'stats.g.doubleclick.net/dc.js');
				/* ('https:'==document.location.protocol?'https://ssl':'http://www')+'.google-analytics.com/ga.js' */
			}
			if((y instanceof Array) && y.length>0) {
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
				for(i=0,j=y.length;i<j;i++) fSetAccountUA(y[i],0,window,window.ga);
				if(_uaq.length>0) {
					for(i=0,j=_uaq.length;i<j;i++) window.ga.apply(window,_uaq[i]);
					_uaq=[];
				}
				if(_term) {
					if(hash)
						hash.dimension3=_term;
					else
						hash={
							dimension3: _term
						};
				}
				
				for(i=0,j=y.length;i<j;i++) fSetAccountUA(y[i],1,window,window.ga,hash);
				if (typeof(window.uaAsyncInit)=='function') window.uaAsyncInit(window.ga);
				(function($){
					if (!(typeof($)=='function' && typeof($.fn)=='object' && $.fn.jquery)) return false;
					try { var e=$.Event('ga_ready'); $(document).trigger(e,[window.ga]); } catch(ee) {};
					return true;
				})(window.jQuery);
			}
		});
	};
	if (typeof(window.jQuery)=='function') {
		$.getScript('/banner_advertising.js').done(function(script,textStatus ) {
			sCollectorURL+='&js=0';
			collector();
		}).fail(function(jqxhr,settings,exception){
			sCollectorURL+='&js='+(jqxhr.status?0:1);
			collector();
		});
	} else {
		collector();
	}
})(aGAAccounts,aUAAccounts,window,(function(m){
	if(!m) return false;
	var hash={dimension2: m[1]};
	if (m.length>2) hash.dimension4=m[2];
	(function(l) { 
		var v,h;
		if ("pushState" in history) {
			history.replaceState('',document.title,l.pathname+l.search);
		} else {
			v=document.body.scrollTop;
			h=document.body.scrollLeft;
			l.hash = "";
			document.body.scrollTop=v;
			document.body.scrollLeft=h;
		}
	})(window.location);
	return hash;
})(window.location.hash.toString().replace(/^(#ua:[^#]+).*$/,'$1').match(/^#ua:(.+?)(?:~(.+))?$/)));

/*
 * jquery.scrolldepth.js | v0.5
 * Copyright (c) 2014 Rob Flaherty (@robflaherty)
 * Licensed under the MIT and GPL licenses.
 */
(function($,window,document,undefined) {
	if(Math.random()>0.001) return;
	if($ && typeof($)=="function") {
		init($,window,document,undefined);
		$(document).ready(function(){$.scrollDepth();});
	} else
		load_script(('https:'==document.location.protocol?'https://api':'http://www')+'.tut.by/scripts/by4/jquery-1.8.3.min.js',function(){
			init(window.$,window,document,undefined);
			window.$(document).ready(function(){window.$.scrollDepth();});
		});
function load_script(url,callback){
	var script = document.createElement("script")
	script.type = "text/javascript";
	script.async = true;
	if(typeof(callback)=="function"){
		if(script.readyState) script.onreadystatechange=function(){
			if(script.readyState=="loaded" || script.readyState=="complete"){
				script.onreadystatechange=null;
				callback();
			}
		}; else script.onload=callback;
	}
	script.src=url;
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script,s);
}
function init($, window, document, undefined) {
	"use strict";
	var defaults = {
		minHeight: 0,
		elements: [],
		percentage: true,
		userTiming: true,
		pixelDepth: false
	};
	var $window = $(window),
		cache = [],
		lastPixelDepth = 0,
		universalGA, classicGA, googleTagManager;
	$.scrollDepth = function(options) {
		var startTime = +new Date;
		options = $.extend({}, defaults, options);
		if ($(document).height() < options.minHeight) {
			return;
		}
		if (typeof ga === "function") {
			universalGA = true;
		}
		if (typeof _gaq !== "undefined" && typeof _gaq.push === "function") {
			classicGA = true;
		}
		if (typeof dataLayer !== "undefined" && typeof dataLayer.push === "function") {
			googleTagManager = true;
		}
		sendEvent('Percentage', 'Baseline');
		function sendEvent(action, label, scrollDistance, timing) {
			if (googleTagManager) {
				dataLayer.push({
					'event': 'ScrollDistance',
					'eventCategory': 'Scroll Depth',
					'eventAction': action,
					'eventLabel': label,
					'eventValue': 1,
					'eventNonInteraction': true
				});
				if (options.pixelDepth && arguments.length > 2 && scrollDistance > lastPixelDepth) {
					lastPixelDepth = scrollDistance;
					dataLayer.push({
						'event': 'ScrollDistance',
						'eventCategory': 'Scroll Depth',
						'eventAction': 'Pixel Depth',
						'eventLabel': rounded(scrollDistance),
						'eventValue': 1,
						'eventNonInteraction': true
					});
				}
				if (options.userTiming && arguments.length > 3) {
					dataLayer.push({
						'event': 'ScrollTiming',
						'eventCategory': 'Scroll Depth',
						'eventAction': action,
						'eventLabel': label,
						'eventTiming': timing
					});
				}
			} else {
				if (universalGA) {
					ga('send', 'event', 'Scroll Depth', action, label, 1, {
						'nonInteraction': 1
					});
					if (options.pixelDepth && arguments.length > 2 && scrollDistance > lastPixelDepth) {
						lastPixelDepth = scrollDistance;
						ga('send', 'event', 'Scroll Depth', 'Pixel Depth', rounded(scrollDistance), 1, {
							'nonInteraction': 1
						});
					}
					if (options.userTiming && arguments.length > 3) {
						ga('send', 'timing', 'Scroll Depth', action, timing, label);
					}
				}
				if (classicGA) {
					_gaq.push(['_trackEvent', 'Scroll Depth', action, label, 1, true]);
					if (options.pixelDepth && arguments.length > 2 && scrollDistance > lastPixelDepth) {
						lastPixelDepth = scrollDistance;
						_gaq.push(['_trackEvent', 'Scroll Depth', 'Pixel Depth', rounded(scrollDistance), 1, true]);
					}
					if (options.userTiming && arguments.length > 3) {
						_gaq.push(['_trackTiming', 'Scroll Depth', action, timing, label, 100]);
					}
				}
			}
		}
		function calculateMarks(docHeight) {
			return {
				'25%': parseInt(docHeight * 0.25, 10),
				'50%': parseInt(docHeight * 0.50, 10),
				'75%': parseInt(docHeight * 0.75, 10),
				// 1px cushion to trigger 100% event in iOS
				'100%': docHeight - 5
			};
		}
		function checkMarks(marks, scrollDistance, timing) {
			// Check each active mark
			$.each(marks, function(key, val) {
				if ($.inArray(key, cache) === -1 && scrollDistance >= val) {
					sendEvent('Percentage', key, scrollDistance, timing);
					cache.push(key);
				}
			});
		}
		function checkElements(elements, scrollDistance, timing) {
			$.each(elements, function(index, elem) {
				if ($.inArray(elem, cache) === -1 && $(elem).length) {
					if (scrollDistance >= $(elem).offset().top) {
						sendEvent('Elements', elem, scrollDistance, timing);
						cache.push(elem);
					}
				}
			});
		}
		function rounded(scrollDistance) {
			return (Math.floor(scrollDistance / 250) * 250).toString();
		}
/*
 * Throttle function borrowed from:
 * Underscore.js 1.5.2
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
*/
		function throttle(func, wait) {
			var context, args, result;
			var timeout = null;
			var previous = 0;
			var later = function() {
				previous = new Date;
				timeout = null;
				result = func.apply(context, args);
			};
			return function() {
				var now = new Date;
				if (!previous) previous = now;
				var remaining = wait - (now - previous);
				context = this;
				args = arguments;
				if (remaining <= 0) {
					clearTimeout(timeout);
					timeout = null;
					previous = now;
					result = func.apply(context, args);
				} else if (!timeout) {
					timeout = setTimeout(later, remaining);
				}
				return result;
			};
		}
		$window.on('scroll.scrollDepth', throttle(function() {
			var docHeight = $(document).height(),
				winHeight = window.innerHeight ? window.innerHeight : $window.height(),
				scrollDistance = $window.scrollTop() + winHeight,
				marks = calculateMarks(docHeight),
				timing = +new Date - startTime;
			if (cache.length >= 4 + options.elements.length) {
				$window.off('scroll.scrollDepth');
				return;
			}
			if (options.elements) {
				checkElements(options.elements, scrollDistance, timing);
			}
			if (options.percentage) {
				checkMarks(marks, scrollDistance, timing);
			}
		}, 500));
		$window.unload(function(){
			var docHeight = $(document).height(),
				timing = +new Date - startTime,
				winHeight = window.innerHeight ? window.innerHeight : $window.height(),
				scrollDistance = $window.scrollTop() + winHeight,
				p = docHeight>winHeight?5*Math.floor(Math.floor(100*scrollDistance/docHeight)/5):100;
			sendEvent('Leave',p+"%",scrollDistance,timing);
		});
	};
}
})(window.jQuery, window, document);

