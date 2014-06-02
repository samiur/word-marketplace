// Compiled by ClojureScript 0.0-2227
goog.provide('kioo.common');
goog.require('cljs.core');
goog.require('kioo.util');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('kioo.util');
/**
* @param {...*} var_args
*/
kioo.common.content = (function() { 
var content__delegate = function (body){return (function (node){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.constant$keyword$52,body);
});
};
var content = function (var_args){
var body = null;if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,body);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__9100){
var body = cljs.core.seq(arglist__9100);
return content__delegate(body);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* @param {...*} var_args
*/
kioo.common.append = (function() { 
var append__delegate = function (body){return (function (node){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.constant$keyword$52,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(node),body));
});
};
var append = function (var_args){
var body = null;if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,body);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__9101){
var body = cljs.core.seq(arglist__9101);
return append__delegate(body);
});
append.cljs$core$IFn$_invoke$arity$variadic = append__delegate;
return append;
})()
;
/**
* @param {...*} var_args
*/
kioo.common.prepend = (function() { 
var prepend__delegate = function (body){return (function (node){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.constant$keyword$52,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(body,cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(node)));
});
};
var prepend = function (var_args){
var body = null;if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,body);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__9102){
var body = cljs.core.seq(arglist__9102);
return prepend__delegate(body);
});
prepend.cljs$core$IFn$_invoke$arity$variadic = prepend__delegate;
return prepend;
})()
;
/**
* @param {...*} var_args
*/
kioo.common.substitute = (function() { 
var substitute__delegate = function (body){return (function (node){return body;
});
};
var substitute = function (var_args){
var body = null;if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,body);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__9103){
var body = cljs.core.seq(arglist__9103);
return substitute__delegate(body);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* @param {...*} var_args
*/
kioo.common.set_attr = (function() { 
var set_attr__delegate = function (body){var els = cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,body);return ((function (els){
return (function (node){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.constant$keyword$87,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (els){
return (function (n,p__9106){var vec__9107 = p__9106;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9107,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9107,1,null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,k,v);
});})(els))
,cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(node),els));
});
;})(els))
};
var set_attr = function (var_args){
var body = null;if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_attr__delegate.call(this,body);};
set_attr.cljs$lang$maxFixedArity = 0;
set_attr.cljs$lang$applyTo = (function (arglist__9108){
var body = cljs.core.seq(arglist__9108);
return set_attr__delegate(body);
});
set_attr.cljs$core$IFn$_invoke$arity$variadic = set_attr__delegate;
return set_attr;
})()
;
/**
* @param {...*} var_args
*/
kioo.common.remove_attr = (function() { 
var remove_attr__delegate = function (body){return (function (node){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.constant$keyword$87,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (n,k){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(n,k);
}),cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(node),body));
});
};
var remove_attr = function (var_args){
var body = null;if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_attr__delegate.call(this,body);};
remove_attr.cljs$lang$maxFixedArity = 0;
remove_attr.cljs$lang$applyTo = (function (arglist__9109){
var body = cljs.core.seq(arglist__9109);
return remove_attr__delegate(body);
});
remove_attr.cljs$core$IFn$_invoke$arity$variadic = remove_attr__delegate;
return remove_attr;
})()
;
/**
* @param {...*} var_args
*/
kioo.common.do__GT_ = (function() { 
var do__GT___delegate = function (body){return (function (node){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__9111_SHARP_,p2__9110_SHARP_){return (p2__9110_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__9110_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__9111_SHARP_) : p2__9110_SHARP_.call(null,p1__9111_SHARP_));
}),node,body);
});
};
var do__GT_ = function (var_args){
var body = null;if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return do__GT___delegate.call(this,body);};
do__GT_.cljs$lang$maxFixedArity = 0;
do__GT_.cljs$lang$applyTo = (function (arglist__9112){
var body = cljs.core.seq(arglist__9112);
return do__GT___delegate(body);
});
do__GT_.cljs$core$IFn$_invoke$arity$variadic = do__GT___delegate;
return do__GT_;
})()
;
/**
* @param {...*} var_args
*/
kioo.common.set_style = (function() { 
var set_style__delegate = function (body){var els = cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,body);var mp = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (els){
return (function (m,p__9116){var vec__9117 = p__9116;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9117,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9117,1,null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
});})(els))
,cljs.core.PersistentArrayMap.EMPTY,els);return ((function (els,mp){
return (function (node){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87,cljs.core.constant$keyword$86], null),((function (els,mp){
return (function (p1__9113_SHARP_){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__9113_SHARP_,mp], 0));
});})(els,mp))
);
});
;})(els,mp))
};
var set_style = function (var_args){
var body = null;if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_style__delegate.call(this,body);};
set_style.cljs$lang$maxFixedArity = 0;
set_style.cljs$lang$applyTo = (function (arglist__9118){
var body = cljs.core.seq(arglist__9118);
return set_style__delegate(body);
});
set_style.cljs$core$IFn$_invoke$arity$variadic = set_style__delegate;
return set_style;
})()
;
/**
* @param {...*} var_args
*/
kioo.common.remove_style = (function() { 
var remove_style__delegate = function (body){return (function (node){var style = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__9119_SHARP_,p2__9120_SHARP_){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__9119_SHARP_,cljs.core.name(p2__9120_SHARP_),cljs.core.array_seq([p2__9120_SHARP_], 0));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87,cljs.core.constant$keyword$86], null)),body);return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87,cljs.core.constant$keyword$86], null),style);
});
};
var remove_style = function (var_args){
var body = null;if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_style__delegate.call(this,body);};
remove_style.cljs$lang$maxFixedArity = 0;
remove_style.cljs$lang$applyTo = (function (arglist__9121){
var body = cljs.core.seq(arglist__9121);
return remove_style__delegate(body);
});
remove_style.cljs$core$IFn$_invoke$arity$variadic = remove_style__delegate;
return remove_style;
})()
;
kioo.common.get_class_regex = (function get_class_regex(cls){return (new RegExp(("(\\s|^)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls)+"(\\s|$)")));
});
kioo.common.has_class_QMARK_ = (function has_class_QMARK_(cur_cls,cls){return cljs.core.re_find(kioo.common.get_class_regex(cls),cur_cls);
});
/**
* @param {...*} var_args
*/
kioo.common.set_class = (function() { 
var set_class__delegate = function (values){return (function (node){var new_class = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__9122_SHARP_,p2__9123_SHARP_){if(cljs.core.truth_(kioo.common.has_class_QMARK_(p1__9122_SHARP_,p2__9123_SHARP_)))
{return p1__9122_SHARP_;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__9122_SHARP_)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__9123_SHARP_));
}
}),"",values);return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87,cljs.core.constant$keyword$61], null),new_class);
});
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__9124){
var values = cljs.core.seq(arglist__9124);
return set_class__delegate(values);
});
set_class.cljs$core$IFn$_invoke$arity$variadic = set_class__delegate;
return set_class;
})()
;
/**
* @param {...*} var_args
*/
kioo.common.add_class = (function() { 
var add_class__delegate = function (values){return (function (node){var new_class = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__9125_SHARP_,p2__9126_SHARP_){if(cljs.core.truth_(kioo.common.has_class_QMARK_(p1__9125_SHARP_,p2__9126_SHARP_)))
{return p1__9125_SHARP_;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__9125_SHARP_)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__9126_SHARP_));
}
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87,cljs.core.constant$keyword$61], null)),values);return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87,cljs.core.constant$keyword$61], null),new_class);
});
};
var add_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return add_class__delegate.call(this,values);};
add_class.cljs$lang$maxFixedArity = 0;
add_class.cljs$lang$applyTo = (function (arglist__9127){
var values = cljs.core.seq(arglist__9127);
return add_class__delegate(values);
});
add_class.cljs$core$IFn$_invoke$arity$variadic = add_class__delegate;
return add_class;
})()
;
/**
* @param {...*} var_args
*/
kioo.common.remove_class = (function() { 
var remove_class__delegate = function (values){return (function (node){var new_class = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__9128_SHARP_,p2__9129_SHARP_){if(cljs.core.truth_(kioo.common.has_class_QMARK_(p1__9128_SHARP_,p2__9129_SHARP_)))
{return clojure.string.replace(p1__9128_SHARP_,kioo.common.get_class_regex(p2__9129_SHARP_)," ");
} else
{return p1__9128_SHARP_;
}
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87,cljs.core.constant$keyword$61], null)),values);return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87,cljs.core.constant$keyword$61], null),new_class);
});
};
var remove_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_class__delegate.call(this,values);};
remove_class.cljs$lang$maxFixedArity = 0;
remove_class.cljs$lang$applyTo = (function (arglist__9130){
var values = cljs.core.seq(arglist__9130);
return remove_class__delegate(values);
});
remove_class.cljs$core$IFn$_invoke$arity$variadic = remove_class__delegate;
return remove_class;
})()
;
kioo.common.unwrap = (function unwrap(node){return cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(node);
});
