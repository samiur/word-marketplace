// Compiled by ClojureScript 0.0-2227
goog.provide('kioo.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
kioo.util._STAR_component_STAR_ = null;
/**
* Wrapper component used to mix-in lifecycle methods
* This was pulled from quiescent
*/
kioo.util.WrapComponent = React.createClass({"componentDidMount": (function (node){var this$ = this;var temp__4126__auto__ = (function (){var or__3541__auto__ = (this$.props["onMount"]);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return (this$.props["onRender"]);
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(node) : f.call(null,node));
} else
{return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state,node){var this$ = this;var temp__4126__auto__ = (function (){var or__3541__auto__ = (this$.props["onUpdate"]);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return (this$.props["onRender"]);
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;var _STAR_component_STAR_8890 = kioo.util._STAR_component_STAR_;try{kioo.util._STAR_component_STAR_ = this$;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(node) : f.call(null,node));
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_8890;
}} else
{return null;
}
}), "render": (function (){var this$ = this;return (this$.props["wrappee"]);
})});
kioo.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
kioo.util.camel_case = (function camel_case(dashed){if(typeof dashed === 'string')
{return dashed;
} else
{var name_str = cljs.core.name(dashed);var vec__8892 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8892,0,null);var parts = cljs.core.nthnext(vec__8892,1);if(cljs.core.truth_((kioo.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? kioo.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(start) : kioo.util.dont_camel_case.call(null,start))))
{return name_str;
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,parts));
}
}
});
kioo.util.convert_attrs = (function convert_attrs(attrs){var style = (cljs.core.truth_(cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(attrs))?(function (){var vals = cljs.core.re_seq(/\s*([^:;]*)[:][\s]*([^;]+)/,cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(attrs));return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vals){
return (function (m,p__8895){var vec__8896 = p__8895;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8896,0,null);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8896,1,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8896,2,null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v.trim());
});})(vals))
,cljs.core.PersistentArrayMap.EMPTY,vals);
})():null);var class_name = cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(attrs);return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.constant$keyword$59),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$86,style,cljs.core.constant$keyword$61,class_name], null)], 0));
});
kioo.util.flatten_nodes = (function flatten_nodes(nodes){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__8898_SHARP_,p2__8897_SHARP_){if(cljs.core.seq_QMARK_(p2__8897_SHARP_))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p2__8897_SHARP_,p1__8898_SHARP_);
} else
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__8898_SHARP_,p2__8897_SHARP_);
}
}),cljs.core.List.EMPTY,cljs.core.reverse(nodes));
});
/**
* Returns a regular expression that matches the HTML attribute `attr`
* and it's value.
*/
kioo.util.attr_pattern = (function attr_pattern(attr){return cljs.core.re_pattern(("\\s+"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr))+"\\s*=\\s*['\"][^\"']+['\"]"));
});
/**
* Strip the HTML attribute `attr` and it's value from the string `s`.
*/
kioo.util.strip_attr = (function strip_attr(s,attr){if(cljs.core.truth_(s))
{return clojure.string.replace(s,kioo.util.attr_pattern(attr),"");
} else
{return null;
}
});
