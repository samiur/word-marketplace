// Compiled by ClojureScript 0.0-2227
goog.provide('kioo.core');
goog.require('cljs.core');
goog.require('hickory.core');
goog.require('kioo.util');
goog.require('kioo.common');
goog.require('kioo.common');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('hickory.core');
goog.require('hickory.core');
goog.require('kioo.util');
kioo.core.value_component = (function value_component(renderer){var react_component = React.createClass({"render": (function (){var this$ = this;var _STAR_component_STAR_9020 = kioo.util._STAR_component_STAR_;try{kioo.util._STAR_component_STAR_ = this$;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_9020;
}}), "shouldComponentUpdate": (function (next_props,_){var this$ = this;return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((this$.props["value"]),(next_props["value"]));
})});return ((function (react_component){
return (function() { 
var G__9021__delegate = function (value,static_args){return (react_component.cljs$core$IFn$_invoke$arity$1 ? react_component.cljs$core$IFn$_invoke$arity$1({"statics": static_args, "value": value}) : react_component.call(null,{"statics": static_args, "value": value}));
};
var G__9021 = function (value,var_args){
var static_args = null;if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__9021__delegate.call(this,value,static_args);};
G__9021.cljs$lang$maxFixedArity = 1;
G__9021.cljs$lang$applyTo = (function (arglist__9022){
var value = cljs.core.first(arglist__9022);
var static_args = cljs.core.rest(arglist__9022);
return G__9021__delegate(value,static_args);
});
G__9021.cljs$core$IFn$_invoke$arity$variadic = G__9021__delegate;
return G__9021;
})()
;
;})(react_component))
});
kioo.core.make_dom = (function make_dom(node){if(cljs.core.map_QMARK_(node))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(node),cljs.core.clj__GT_js(cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(node)),kioo.util.flatten_nodes(cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(node)));
} else
{return node;
}
});
kioo.core.to_list = (function to_list(vals){if(cljs.core.seq_QMARK_(vals))
{return vals;
} else
{return cljs.core._conj(cljs.core.List.EMPTY,vals);
}
});
kioo.core.handle_wrapper = (function handle_wrapper(dom_fn){return (function() { 
var hw__delegate = function (node,body){var rnode = ((cljs.core.seq_QMARK_(node))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hw,node):(((cljs.core.map_QMARK_(node)) && (!(cljs.core.empty_QMARK_(cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(node)))))?(function (){var revents = cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(node);return (kioo.util.WrapComponent.cljs$core$IFn$_invoke$arity$1 ? kioo.util.WrapComponent.cljs$core$IFn$_invoke$arity$1(cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(revents,cljs.core.constant$keyword$118,(dom_fn.cljs$core$IFn$_invoke$arity$1 ? dom_fn.cljs$core$IFn$_invoke$arity$1(node) : dom_fn.call(null,node))))) : kioo.util.WrapComponent.call(null,cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(revents,cljs.core.constant$keyword$118,(dom_fn.cljs$core$IFn$_invoke$arity$1 ? dom_fn.cljs$core$IFn$_invoke$arity$1(node) : dom_fn.call(null,node))))));
})():((cljs.core.constant$keyword$6)?(dom_fn.cljs$core$IFn$_invoke$arity$1 ? dom_fn.cljs$core$IFn$_invoke$arity$1(node) : dom_fn.call(null,node)):null)));if(cljs.core.empty_QMARK_(body))
{return rnode;
} else
{return cljs.core.cons(rnode,kioo.core.to_list(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hw,body)));
}
};
var hw = function (node,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return hw__delegate.call(this,node,body);};
hw.cljs$lang$maxFixedArity = 1;
hw.cljs$lang$applyTo = (function (arglist__9023){
var node = cljs.core.first(arglist__9023);
var body = cljs.core.rest(arglist__9023);
return hw__delegate(node,body);
});
hw.cljs$core$IFn$_invoke$arity$variadic = hw__delegate;
return hw;
})()
;
});
kioo.core.content = kioo.common.content;
kioo.core.append = kioo.common.append;
kioo.core.prepend = kioo.common.prepend;
/**
* @param {...*} var_args
*/
kioo.core.after = (function() { 
var after__delegate = function (body){return (function (node){return cljs.core.cons(kioo.core.make_dom(node),body);
});
};
var after = function (var_args){
var body = null;if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,body);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__9024){
var body = cljs.core.seq(arglist__9024);
return after__delegate(body);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
/**
* @param {...*} var_args
*/
kioo.core.before = (function() { 
var before__delegate = function (body){return (function (node){return kioo.util.flatten_nodes(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(body,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.make_dom(node)], null)));
});
};
var before = function (var_args){
var body = null;if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,body);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__9025){
var body = cljs.core.seq(arglist__9025);
return before__delegate(body);
});
before.cljs$core$IFn$_invoke$arity$variadic = before__delegate;
return before;
})()
;
kioo.core.substitute = kioo.common.substitute;
kioo.core.set_attr = kioo.common.set_attr;
kioo.core.remove_attr = kioo.common.remove_attr;
kioo.core.do__GT_ = kioo.common.do__GT_;
kioo.core.set_style = kioo.common.set_style;
kioo.core.remove_style = kioo.common.remove_style;
kioo.core.set_class = kioo.common.set_class;
kioo.core.add_class = kioo.common.add_class;
kioo.core.remove_class = kioo.common.remove_class;
kioo.core.wrap = (function wrap(tag,attrs){return (function (node){return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$16,tag,cljs.core.constant$keyword$116,(React.DOM[cljs.core.name(tag)]),cljs.core.constant$keyword$87,kioo.util.convert_attrs(attrs),cljs.core.constant$keyword$52,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.make_dom(node)], null)], null);
});
});
kioo.core.unwrap = kioo.common.unwrap;
kioo.core.html = (function html(content){return sablono.interpreter.interpret(content);
});
kioo.core.html_content = (function html_content(content){return (function (node){var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9026_SHARP_){return sablono.interpreter.interpret(hickory.core.as_hiccup(p1__9026_SHARP_));
}),hickory.core.parse_fragment(content));return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.constant$keyword$52,children);
});
});
kioo.core.react_events = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["onRender",null,"onUpdate",null,"onMount",null], null), null);
/**
* @param {...*} var_args
*/
kioo.core.listen = (function() { 
var listen__delegate = function (events_PLUS_fns){var pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9035){var vec__9036 = p__9035;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9036,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9036,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.util.camel_case(k),v], null);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,events_PLUS_fns));var vec__9034 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pairs){
return (function (p__9037,p__9038){var vec__9039 = p__9037;var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9039,0,null);var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9039,1,null);var vec__9040 = p__9038;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9040,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9040,1,null);if(cljs.core.truth_((kioo.core.react_events.cljs$core$IFn$_invoke$arity$1 ? kioo.core.react_events.cljs$core$IFn$_invoke$arity$1(k) : kioo.core.react_events.call(null,k))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,v),s], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,k,v)], null);
}
});})(pairs))
,cljs.core.PersistentVector.EMPTY,pairs);var rev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9034,0,null);var sev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9034,1,null);return ((function (pairs,vec__9034,rev,sev){
return (function (node){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,cljs.core.constant$keyword$87,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(node),sev], 0)),cljs.core.array_seq([cljs.core.constant$keyword$117,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(node),rev], 0))], 0));
});
;})(pairs,vec__9034,rev,sev))
};
var listen = function (var_args){
var events_PLUS_fns = null;if (arguments.length > 0) {
  events_PLUS_fns = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return listen__delegate.call(this,events_PLUS_fns);};
listen.cljs$lang$maxFixedArity = 0;
listen.cljs$lang$applyTo = (function (arglist__9041){
var events_PLUS_fns = cljs.core.seq(arglist__9041);
return listen__delegate(events_PLUS_fns);
});
listen.cljs$core$IFn$_invoke$arity$variadic = listen__delegate;
return listen;
})()
;
kioo.core.render = (function render(component,node){return React.renderComponent(component,node);
});
