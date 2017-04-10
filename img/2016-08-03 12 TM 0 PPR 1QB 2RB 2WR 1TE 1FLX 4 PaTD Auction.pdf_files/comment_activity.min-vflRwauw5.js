var __decorate=this&&this.__decorate||function(e,t,i,n){var o,s=arguments.length,r=3>s?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(r=(3>s?o(r):s>3?o(t,i,r):o(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r};define(["require","exports","external/deep-freeze","external/underscore","modules/core/types","modules/clean/immutability_helper","modules/clean/activity/activity_user","modules/clean/comments/lib/type_check","modules/clean/comments/models/comment"],function(e,t,i,n,o,s,r,c,m){"use strict";var a=function(){function e(e){var t=(void 0===e?{}:e).user_ids_who_can_delete,n=void 0===t?[]:t;this.user_ids_who_can_delete=n,i(this)}return e.fromDict=function(t){return t.user_ids_who_can_delete.forEach(function(e){if(!n.isNumber(e))throw TypeError(e+" in user_ids_who_can_delete is not a number")}),new e(t)},__decorate([c.takes({user_ids_who_can_delete:Array})],e,"fromDict",null),e}();t.CommentActivityPermissions=a;var u=function(){function e(e){var t=void 0===e?{}:e,n=t.activity_key,o=void 0===n?"":n,s=t.comment_activities,r=void 0===s?[]:s,c=t.users_to_notify,u=void 0===c?[]:c,_=t.is_seen,d=void 0===_?!1:_,h=t.highlight_as_unread,l=void 0===h?!1:h,f=t.comment,y=void 0===f?new m.Comment:f,v=t.permissions,p=void 0===v?new a:v,g=t.is_deleted,b=void 0===g?!1:g,w=t.status,D=void 0===w?"POSTED":w;this.activity_key=o,this.comment_activities=r,this.users_to_notify=u,this.is_seen=d,this.highlight_as_unread=l,this.comment=y,this.is_deleted=b,this.permissions=p,this.status=D,i(this)}return e.createLocalInstance=function(t){var i=t.activityKey,o=void 0===i?n.uniqueId("local-comment-activity-"):i,s=t.commenter,r=t.rawCommentText,c=t.metadata,a=void 0===c?null:c,u=t.status,_=void 0===u?"POSTING":u;return new e({activity_key:o,comment:new m.Comment({comment_gid:n.uniqueId("pending-comment-gid-"),commenter:s,comment_text:r,raw_comment_text:r,when_mses:(new Date).getTime(),resolved:!1,comment_metadata:a}),is_seen:!0,highlight_as_unread:!1,status:_})},e.fromDict=function(t){return new e({activity_key:t.activity_key,comment_activities:t.comment_activity_dicts.map(e.fromDict),users_to_notify:(t.users_to_notify||[]).map(r.ActivityUser.fromDict),is_seen:t.is_seen,highlight_as_unread:t.highlight_as_unread,comment:m.Comment.fromDict(t.comment),permissions:a.fromDict(t.permissions)})},Object.defineProperty(e.prototype,"when_mses",{get:function(){return this.comment.when_mses},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"is_pending",{get:function(){return"POSTED"!==this.status},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"is_resolved",{get:function(){return this.comment.resolved},enumerable:!0,configurable:!0}),e.prototype.shouldHighlightAsUnread=function(){return this.highlight_as_unread?!0:this.comment_activities.some(function(e){return e.shouldHighlightAsUnread()})},e.prototype.resolve=function(){return s.set(this,"comment",this.comment.resolve())},e.prototype.unresolve=function(){return s.set(this,"comment",this.comment.unresolve())},e.prototype.delete=function(){return s.set(this,"is_deleted",!0)},e.prototype.undelete=function(){return s.set(this,"is_deleted",!1)},e.prototype.setStatus=function(e){return s.set(this,"status",e)},e.prototype.markSeen=function(){return s.merge(this,{is_seen:!0,highlight_as_unread:!1})},__decorate([c.takes({activity_key:String,comment_activity_dicts:Array,users_to_notify:o.Maybe(Array),is_seen:Boolean,highlight_as_unread:Boolean,comment:Object,permissions:Object})],e,"fromDict",null),e}();t.CommentActivity=u});
//# sourceMappingURL=comment_activity.min.js-vfll3S8-S.map