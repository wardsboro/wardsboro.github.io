(function(){define([],function(){var l;return l={module_times:[],module_callback_times:{},reset:function(){return this.module_times=[],this.module_callback_times={}},get_module_times:function(){return this.module_times},add_callback_execution_time:function(l,e){return 0!==l.indexOf("_@r")?this.module_callback_times[l]=e:void 0},add_module:function(l){var e,n,i;if(null!=(null!=(n=window.performance)?n.now:void 0))return e={load_time:window.performance.now()},null!=(null!=l?l.url:void 0)&&(e.url=l.url),null!=(null!=l?l.name:void 0)&&(e.name=l.name,l.name in this.module_callback_times&&(e.callback_duration=this.module_callback_times[l.name])),null!=(null!=l&&null!=(i=l.parentMap)?i.url:void 0)&&(e.parent=l.parentMap.url),this.module_times.push(e)}}})}).call(this);
//# sourceMappingURL=web_module_timing.min.js-vflhwV-Ab.map