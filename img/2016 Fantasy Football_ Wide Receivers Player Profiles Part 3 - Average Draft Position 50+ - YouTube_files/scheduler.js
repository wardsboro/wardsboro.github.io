(function(){var f=this;function g(a){a=a.split(".");for(var b=f,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function h(a,b,c){return a.call.apply(a.bind,arguments)}
function m(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function n(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?h:m;return n.apply(null,arguments)}
var p=Date.now||function(){return+new Date};
function q(a,b){var c=a.split("."),d=f;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}
;var r=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",r);q("yt.tokens_",window.yt&&window.yt.tokens_||{});var t=window.yt&&window.yt.msgs_||g("window.ytcfg.msgs")||{};q("yt.msgs_",t);function u(){this.g=this.g;this.j=this.j}
u.prototype.g=!1;u.prototype.isDisposed=function(){return this.g};
u.prototype.dispose=function(){this.g||(this.g=!0,this.m())};
u.prototype.m=function(){if(this.j)for(;this.j.length;)this.j.shift()()};function v(a){u.call(this);this.a=[];this.a[4]=[];this.a[3]=[];this.a[2]=[];this.a[1]=[];this.a[0]=[];a=a||{};this.D=a.timeout||1;this.c={};this.i=v.a;this.v=this.b=this.h=0;this.o=this.l=!1;this.f=[];this.u=n(this.G,this);this.C=n(this.I,this);this.A=n(this.F,this);this.B=n(this.H,this);this.w=!!window.requestIdleCallback;(this.s=!!a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.u)}
(function(){var a=v;function b(){}
b.prototype=u.prototype;a.K=u.prototype;a.prototype=new b;a.prototype.constructor=a;a.L=function(a,b,e){for(var k=Array(arguments.length-2),l=2;l<arguments.length;l++)k[l-2]=arguments[l];return u.prototype[b].apply(a,k)}})();
v.b=1E3/60;v.c=3E3;v.f=300;v.g=3;v.a=v.b-3;function w(a,b,c,d){++a.v;var e=a.v;a.c[e]=b;a.l&&!d?a.f.push({id:e,J:c}):(a.a[c].push(e),a.o||a.l||(0!=a.b&&x(a)!=a.h&&y(a),z(a)));return e}
function A(a){a.f.length=0;for(var b=4;0<=b;b--)a.a[b].length=0;a.c={};y(a)}
function x(a){for(var b=4;1<=b;b--)if(0<a.a[b].length)return!document.hidden&&a.s?3:2;return 1}
function B(a){try{a()}catch(b){(a=g("yt.logging.errors.log"))&&a(b)}}
v.prototype.F=function(a){var b=void 0;a&&(b=p()+a.timeRemaining());D(this,b)};
v.prototype.I=function(){D(this)};
v.prototype.H=function(){D(this)};
v.prototype.G=function(){this.b&&(y(this),z(this))};
function D(a,b){y(a);a.l=!0;for(var c=p()+(b?b:a.i),d=a.a[4];d.length;){var e=d.shift(),k=a.c[e];delete a.c[e];k&&B(k)}if(!(p()>=c)){do{a:{d=a;for(e=3;0<=e;e--)for(k=d.a[e];k.length;){var l=k.shift(),C=d.c[l];delete d.c[l];if(C){d=C;break a}}d=null}d&&B(d)}while(d&&p()<c)}a.l=!1;c=0;for(d=a.f.length;c<d;c++)e=a.f[c],a.a[e.J].push(e.id);a.i=v.a;a:{for(c=3;0<=c;c--)if(a.a[c].length){c=!0;break a}c=!1}(c||a.f.length)&&z(a);a.f.length=0}
function z(a){a.o=!1;if(0==a.b)switch(a.h=x(a),a.h){case 1:var b;b=a.A;b=a.w?window.requestIdleCallback(b,{timeout:3E3}):window.setTimeout(b,300);a.b=b;break;case 2:a.b=window.setTimeout(a.C,a.D);break;case 3:a.b=window.requestAnimationFrame(a.B)}}
function y(a){if(a.b){switch(a.h){case 1:var b=a.b;a.w?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:window.clearTimeout(a.b);break;case 3:window.cancelAnimationFrame(a.b)}a.b=0}}
v.prototype.m=function(){A(this);y(this);this.s&&document.removeEventListener("visibilitychange",this.u);v.K.m.call(this)};function E(){var a=g("yt.scheduler.instance.instance_");if(!a||a.isDisposed())a=new v(("scheduler"in r?r.scheduler:void 0)||{}),q("yt.scheduler.instance.instance_",a);return a}
function F(){var a=g("yt.scheduler.instance.instance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),q("yt.scheduler.instance.instance_",null))}
function G(){A(E())}
var H=g("yt.scheduler.instance.timerIdMap_")||{};function I(a,b,c){if(0==c||void 0===c)return c=void 0===c,-w(E(),a,b,c);var d=window.setTimeout(function(){var c=w(E(),a,b);H[d]=c},c);
return d}
function J(a){var b=E(),c=p();B(a);a=p()-c;b.i-=a}
function K(a){var b=E();if(0>a)delete b.c[-a];else{var c=H[a];c?(delete b.c[c],delete H[a]):window.clearTimeout(a)}}
function L(){z(E())}
function M(){var a=E();y(a);a.o=!0}
;g("yt.scheduler.initialized")||(q("yt.scheduler.instance.dispose",F),q("yt.scheduler.instance.addJob",I),q("yt.scheduler.instance.addImmediateJob",J),q("yt.scheduler.instance.cancelJob",K),q("yt.scheduler.instance.cancelAllJobs",G),q("yt.scheduler.instance.start",L),q("yt.scheduler.instance.pause",M),q("yt.scheduler.initialized",!0));})();
