// Compiled by ClojureScript 0.0-2227
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__9133__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__9132 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9132,0,null);var body = cljs.core.nthnext(vec__9132,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__9133 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9133__delegate.call(this,args);};
G__9133.cljs$lang$maxFixedArity = 0;
G__9133.cljs$lang$applyTo = (function (arglist__9134){
var args = cljs.core.seq(arglist__9134);
return G__9133__delegate(args);
});
G__9133.cljs$core$IFn$_invoke$arity$variadic = G__9133__delegate;
return G__9133;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4266__auto__ = (function iter__9139(s__9140){return (new cljs.core.LazySeq(null,(function (){var s__9140__$1 = s__9140;while(true){
var temp__4126__auto__ = cljs.core.seq(s__9140__$1);if(temp__4126__auto__)
{var s__9140__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__9140__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__9140__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__9142 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__9141 = 0;while(true){
if((i__9141 < size__4265__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__9141);cljs.core.chunk_append(b__9142,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__9143 = (i__9141 + 1);
i__9141 = G__9143;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9142),iter__9139(cljs.core.chunk_rest(s__9140__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9142),null);
}
} else
{var args = cljs.core.first(s__9140__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__9139(cljs.core.rest(s__9140__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__(arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,((function (html){
return (function (p1__9144_SHARP_){return cljs.core.reset_BANG_(html,p1__9144_SHARP_);
});})(html))
);
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4266__auto__ = (function iter__9149(s__9150){return (new cljs.core.LazySeq(null,(function (){var s__9150__$1 = s__9150;while(true){
var temp__4126__auto__ = cljs.core.seq(s__9150__$1);if(temp__4126__auto__)
{var s__9150__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__9150__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__9150__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__9152 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__9151 = 0;while(true){
if((i__9151 < size__4265__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__9151);cljs.core.chunk_append(b__9152,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$65,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$51,"text/css",cljs.core.constant$keyword$66,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$67,"stylesheet"], null)], null));
{
var G__9153 = (i__9151 + 1);
i__9151 = G__9153;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9152),iter__9149(cljs.core.chunk_rest(s__9150__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9152),null);
}
} else
{var style = cljs.core.first(s__9150__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$65,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$51,"text/css",cljs.core.constant$keyword$66,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$67,"stylesheet"], null)], null),iter__9149(cljs.core.rest(s__9150__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__9154){
var styles = cljs.core.seq(arglist__9154);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js("http://fb.me/react-0.8.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to9155 = (function() { 
var link_to9155__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$68,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to9155 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to9155__delegate.call(this,url,content);};
link_to9155.cljs$lang$maxFixedArity = 1;
link_to9155.cljs$lang$applyTo = (function (arglist__9156){
var url = cljs.core.first(arglist__9156);
var content = cljs.core.rest(arglist__9156);
return link_to9155__delegate(url,content);
});
link_to9155.cljs$core$IFn$_invoke$arity$variadic = link_to9155__delegate;
return link_to9155;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to9155);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to9157 = (function() { 
var mail_to9157__delegate = function (e_mail,p__9158){var vec__9160 = p__9158;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9160,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$68,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3541__auto__ = content;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to9157 = function (e_mail,var_args){
var p__9158 = null;if (arguments.length > 1) {
  p__9158 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to9157__delegate.call(this,e_mail,p__9158);};
mail_to9157.cljs$lang$maxFixedArity = 1;
mail_to9157.cljs$lang$applyTo = (function (arglist__9161){
var e_mail = cljs.core.first(arglist__9161);
var p__9158 = cljs.core.rest(arglist__9161);
return mail_to9157__delegate(e_mail,p__9158);
});
mail_to9157.cljs$core$IFn$_invoke$arity$variadic = mail_to9157__delegate;
return mail_to9157;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to9157);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list9162 = (function unordered_list9162(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$69,(function (){var iter__4266__auto__ = (function iter__9167(s__9168){return (new cljs.core.LazySeq(null,(function (){var s__9168__$1 = s__9168;while(true){
var temp__4126__auto__ = cljs.core.seq(s__9168__$1);if(temp__4126__auto__)
{var s__9168__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__9168__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__9168__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__9170 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__9169 = 0;while(true){
if((i__9169 < size__4265__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__9169);cljs.core.chunk_append(b__9170,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,x], null));
{
var G__9171 = (i__9169 + 1);
i__9169 = G__9171;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9170),iter__9167(cljs.core.chunk_rest(s__9168__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9170),null);
}
} else
{var x = cljs.core.first(s__9168__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,x], null),iter__9167(cljs.core.rest(s__9168__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list9162);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list9172 = (function ordered_list9172(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,(function (){var iter__4266__auto__ = (function iter__9177(s__9178){return (new cljs.core.LazySeq(null,(function (){var s__9178__$1 = s__9178;while(true){
var temp__4126__auto__ = cljs.core.seq(s__9178__$1);if(temp__4126__auto__)
{var s__9178__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__9178__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__9178__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__9180 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__9179 = 0;while(true){
if((i__9179 < size__4265__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__9179);cljs.core.chunk_append(b__9180,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,x], null));
{
var G__9181 = (i__9179 + 1);
i__9179 = G__9181;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9180),iter__9177(cljs.core.chunk_rest(s__9178__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9180),null);
}
} else
{var x = cljs.core.first(s__9178__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70,x], null),iter__9177(cljs.core.rest(s__9178__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list9172);
/**
* Create an image element.
*/
sablono.core.image9182 = (function() {
var image9182 = null;
var image9182__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$72,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$73,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image9182__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$72,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$73,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$74,alt], null)], null);
});
image9182 = function(src,alt){
switch(arguments.length){
case 1:
return image9182__1.call(this,src);
case 2:
return image9182__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image9182.cljs$core$IFn$_invoke$arity$1 = image9182__1;
image9182.cljs$core$IFn$_invoke$arity$2 = image9182__2;
return image9182;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image9182);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__9183_SHARP_,p2__9184_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__9183_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__9184_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__9185_SHARP_,p2__9186_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__9185_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__9186_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$64,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$51,type,cljs.core.constant$keyword$75,sablono.core.make_name(name),cljs.core.constant$keyword$20,sablono.core.make_id(name),cljs.core.constant$keyword$11,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field9187 = (function() {
var hidden_field9187 = null;
var hidden_field9187__1 = (function (name){return hidden_field9187.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field9187__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field9187 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field9187__1.call(this,name);
case 2:
return hidden_field9187__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field9187.cljs$core$IFn$_invoke$arity$1 = hidden_field9187__1;
hidden_field9187.cljs$core$IFn$_invoke$arity$2 = hidden_field9187__2;
return hidden_field9187;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field9187);
/**
* Creates a new text input field.
*/
sablono.core.text_field9188 = (function() {
var text_field9188 = null;
var text_field9188__1 = (function (name){return text_field9188.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field9188__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field9188 = function(name,value){
switch(arguments.length){
case 1:
return text_field9188__1.call(this,name);
case 2:
return text_field9188__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field9188.cljs$core$IFn$_invoke$arity$1 = text_field9188__1;
text_field9188.cljs$core$IFn$_invoke$arity$2 = text_field9188__2;
return text_field9188;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field9188);
/**
* Creates a new password field.
*/
sablono.core.password_field9189 = (function() {
var password_field9189 = null;
var password_field9189__1 = (function (name){return password_field9189.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field9189__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field9189 = function(name,value){
switch(arguments.length){
case 1:
return password_field9189__1.call(this,name);
case 2:
return password_field9189__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field9189.cljs$core$IFn$_invoke$arity$1 = password_field9189__1;
password_field9189.cljs$core$IFn$_invoke$arity$2 = password_field9189__2;
return password_field9189;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field9189);
/**
* Creates a new email input field.
*/
sablono.core.email_field9190 = (function() {
var email_field9190 = null;
var email_field9190__1 = (function (name){return email_field9190.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field9190__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field9190 = function(name,value){
switch(arguments.length){
case 1:
return email_field9190__1.call(this,name);
case 2:
return email_field9190__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field9190.cljs$core$IFn$_invoke$arity$1 = email_field9190__1;
email_field9190.cljs$core$IFn$_invoke$arity$2 = email_field9190__2;
return email_field9190;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field9190);
/**
* Creates a check box.
*/
sablono.core.check_box9191 = (function() {
var check_box9191 = null;
var check_box9191__1 = (function (name){return check_box9191.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box9191__2 = (function (name,checked_QMARK_){return check_box9191.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box9191__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$64,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$51,"checkbox",cljs.core.constant$keyword$75,sablono.core.make_name(name),cljs.core.constant$keyword$20,sablono.core.make_id(name),cljs.core.constant$keyword$11,value,cljs.core.constant$keyword$76,checked_QMARK_], null)], null);
});
check_box9191 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box9191__1.call(this,name);
case 2:
return check_box9191__2.call(this,name,checked_QMARK_);
case 3:
return check_box9191__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box9191.cljs$core$IFn$_invoke$arity$1 = check_box9191__1;
check_box9191.cljs$core$IFn$_invoke$arity$2 = check_box9191__2;
check_box9191.cljs$core$IFn$_invoke$arity$3 = check_box9191__3;
return check_box9191;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box9191);
/**
* Creates a radio button.
*/
sablono.core.radio_button9192 = (function() {
var radio_button9192 = null;
var radio_button9192__1 = (function (group){return radio_button9192.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button9192__2 = (function (group,checked_QMARK_){return radio_button9192.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button9192__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$64,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$51,"radio",cljs.core.constant$keyword$75,sablono.core.make_name(group),cljs.core.constant$keyword$20,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$11,value,cljs.core.constant$keyword$76,checked_QMARK_], null)], null);
});
radio_button9192 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button9192__1.call(this,group);
case 2:
return radio_button9192__2.call(this,group,checked_QMARK_);
case 3:
return radio_button9192__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button9192.cljs$core$IFn$_invoke$arity$1 = radio_button9192__1;
radio_button9192.cljs$core$IFn$_invoke$arity$2 = radio_button9192__2;
radio_button9192.cljs$core$IFn$_invoke$arity$3 = radio_button9192__3;
return radio_button9192;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button9192);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options9193 = (function() {
var select_options9193 = null;
var select_options9193__1 = (function (coll){return select_options9193.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options9193__2 = (function (coll,selected){var iter__4266__auto__ = (function iter__9202(s__9203){return (new cljs.core.LazySeq(null,(function (){var s__9203__$1 = s__9203;while(true){
var temp__4126__auto__ = cljs.core.seq(s__9203__$1);if(temp__4126__auto__)
{var s__9203__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__9203__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__9203__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__9205 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__9204 = 0;while(true){
if((i__9204 < size__4265__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__9204);cljs.core.chunk_append(b__9205,((cljs.core.sequential_QMARK_(x))?(function (){var vec__9208 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9208,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9208,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$77,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$78,text], null),select_options9193.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$11,val,cljs.core.constant$keyword$80,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$80,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__9210 = (i__9204 + 1);
i__9204 = G__9210;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9205),iter__9202(cljs.core.chunk_rest(s__9203__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9205),null);
}
} else
{var x = cljs.core.first(s__9203__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__9209 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9209,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9209,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$77,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$78,text], null),select_options9193.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$11,val,cljs.core.constant$keyword$80,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$80,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__9202(cljs.core.rest(s__9203__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__(coll);
});
select_options9193 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options9193__1.call(this,coll);
case 2:
return select_options9193__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options9193.cljs$core$IFn$_invoke$arity$1 = select_options9193__1;
select_options9193.cljs$core$IFn$_invoke$arity$2 = select_options9193__2;
return select_options9193;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options9193);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down9211 = (function() {
var drop_down9211 = null;
var drop_down9211__2 = (function (name,options){return drop_down9211.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down9211__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$81,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$75,sablono.core.make_name(name),cljs.core.constant$keyword$20,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down9211 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down9211__2.call(this,name,options);
case 3:
return drop_down9211__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down9211.cljs$core$IFn$_invoke$arity$2 = drop_down9211__2;
drop_down9211.cljs$core$IFn$_invoke$arity$3 = drop_down9211__3;
return drop_down9211;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down9211);
/**
* Creates a text area element.
*/
sablono.core.text_area9212 = (function() {
var text_area9212 = null;
var text_area9212__1 = (function (name){return text_area9212.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area9212__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$75,sablono.core.make_name(name),cljs.core.constant$keyword$20,sablono.core.make_id(name),cljs.core.constant$keyword$11,value], null)], null);
});
text_area9212 = function(name,value){
switch(arguments.length){
case 1:
return text_area9212__1.call(this,name);
case 2:
return text_area9212__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area9212.cljs$core$IFn$_invoke$arity$1 = text_area9212__1;
text_area9212.cljs$core$IFn$_invoke$arity$2 = text_area9212__2;
return text_area9212;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area9212);
/**
* Creates a file upload input.
*/
sablono.core.file_upload9213 = (function file_upload9213(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload9213);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label9214 = (function label9214(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$62,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label9214);
/**
* Creates a submit button.
*/
sablono.core.submit_button9215 = (function submit_button9215(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$64,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$51,"submit",cljs.core.constant$keyword$11,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button9215);
/**
* Creates a form reset button.
*/
sablono.core.reset_button9216 = (function reset_button9216(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$64,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$51,"reset",cljs.core.constant$keyword$11,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button9216);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to9217 = (function() { 
var form_to9217__delegate = function (p__9218,body){var vec__9220 = p__9218;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9220,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9220,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$82,null,cljs.core.constant$keyword$83,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$41,method_str,cljs.core.constant$keyword$85,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$41,"POST",cljs.core.constant$keyword$85,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to9217 = function (p__9218,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to9217__delegate.call(this,p__9218,body);};
form_to9217.cljs$lang$maxFixedArity = 1;
form_to9217.cljs$lang$applyTo = (function (arglist__9221){
var p__9218 = cljs.core.first(arglist__9221);
var body = cljs.core.rest(arglist__9221);
return form_to9217__delegate(p__9218,body);
});
form_to9217.cljs$core$IFn$_invoke$arity$variadic = form_to9217__delegate;
return form_to9217;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to9217);
