// Compiled by ClojureScript 0.0-2227
goog.provide('clojure.zip');
goog.require('cljs.core');
/**
* Creates a new zipper structure.
* 
* branch? is a fn that, given a node, returns true if can have
* children, even if it currently doesn't.
* 
* children is a fn that, given a branch node, returns a seq of its
* children.
* 
* make-node is a fn that, given an existing node and a seq of
* children, returns a new branch node with the supplied children.
* root is the root node.
*/
clojure.zip.zipper = (function zipper(branch_QMARK_,children,make_node,root){return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$88,make_node,cljs.core.constant$keyword$89,children,cljs.core.constant$keyword$90,branch_QMARK_], null));
});
/**
* Returns a zipper for nested sequences, given a root sequence
*/
clojure.zip.seq_zip = (function seq_zip(root){return clojure.zip.zipper(cljs.core.seq_QMARK_,cljs.core.identity,(function (node,children){return cljs.core.with_meta(children,cljs.core.meta(node));
}),root);
});
/**
* Returns a zipper for nested vectors, given a root vector
*/
clojure.zip.vector_zip = (function vector_zip(root){return clojure.zip.zipper(cljs.core.vector_QMARK_,cljs.core.seq,(function (node,children){return cljs.core.with_meta(cljs.core.vec(children),cljs.core.meta(node));
}),root);
});
/**
* Returns a zipper for xml elements (as from xml/parse),
* given a root element
*/
clojure.zip.xml_zip = (function xml_zip(root){return clojure.zip.zipper(cljs.core.complement(cljs.core.string_QMARK_),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.constant$keyword$52),(function (node,children){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.constant$keyword$52,(function (){var and__3529__auto__ = children;if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,children);
} else
{return and__3529__auto__;
}
})());
}),root);
});
/**
* Returns the node at loc
*/
clojure.zip.node = (function node(loc){return (loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(0) : loc.call(null,0));
});
/**
* Returns true if the node at loc is a branch
*/
clojure.zip.branch_QMARK_ = (function branch_QMARK_(loc){return cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc)).call(null,clojure.zip.node(loc));
});
/**
* Returns a seq of the children of node at loc, which must be a branch
*/
clojure.zip.children = (function children(loc){if(cljs.core.truth_(clojure.zip.branch_QMARK_(loc)))
{return cljs.core.constant$keyword$89.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc)).call(null,clojure.zip.node(loc));
} else
{throw "called children on a leaf node";
}
});
/**
* Returns a new branch node, given an existing node and new
* children. The loc is only used to supply the constructor.
*/
clojure.zip.make_node = (function make_node(loc,node,children){return cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc)).call(null,node,children);
});
/**
* Returns a seq of nodes leading to this loc
*/
clojure.zip.path = (function path(loc){return cljs.core.constant$keyword$91.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(1) : loc.call(null,1)));
});
/**
* Returns a seq of the left siblings of this loc
*/
clojure.zip.lefts = (function lefts(loc){return cljs.core.seq(cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(1) : loc.call(null,1))));
});
/**
* Returns a seq of the right siblings of this loc
*/
clojure.zip.rights = (function rights(loc){return cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(1) : loc.call(null,1)));
});
/**
* Returns the loc of the leftmost child of the node at this loc, or
* nil if no children
*/
clojure.zip.down = (function down(loc){if(cljs.core.truth_(clojure.zip.branch_QMARK_(loc)))
{var vec__9057 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9057,0,null);var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9057,1,null);var vec__9058 = clojure.zip.children(loc);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9058,0,null);var cnext = cljs.core.nthnext(vec__9058,1);var cs = vec__9058;if(cljs.core.truth_(cs))
{return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$92,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$91,(cljs.core.truth_(path)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$91.cljs$core$IFn$_invoke$arity$1(path),node):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)),cljs.core.constant$keyword$94,path,cljs.core.constant$keyword$93,cnext], null)], null),cljs.core.meta(loc));
} else
{return null;
}
} else
{return null;
}
});
/**
* Returns the loc of the parent of the node at this loc, or nil if at
* the top
*/
clojure.zip.up = (function up(loc){var vec__9061 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9061,0,null);var map__9062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9061,1,null);var map__9062__$1 = ((cljs.core.seq_QMARK_(map__9062))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9062):map__9062);var path = map__9062__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9062__$1,cljs.core.constant$keyword$92);var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9062__$1,cljs.core.constant$keyword$94);var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9062__$1,cljs.core.constant$keyword$91);var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9062__$1,cljs.core.constant$keyword$93);var changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9062__$1,cljs.core.constant$keyword$95);if(cljs.core.truth_(pnodes))
{var pnode = cljs.core.peek(pnodes);return cljs.core.with_meta((cljs.core.truth_(changed_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node(loc,pnode,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(l,cljs.core.cons(node,r))),(function (){var and__3529__auto__ = ppath;if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,cljs.core.constant$keyword$95,true);
} else
{return and__3529__auto__;
}
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pnode,ppath], null)),cljs.core.meta(loc));
} else
{return null;
}
});
/**
* zips all the way up and returns the root node, reflecting any
* changes.
*/
clojure.zip.root = (function root(loc){while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$96,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(1) : loc.call(null,1))))
{return clojure.zip.node(loc);
} else
{var p = clojure.zip.up(loc);if(cljs.core.truth_(p))
{{
var G__9063 = p;
loc = G__9063;
continue;
}
} else
{return clojure.zip.node(loc);
}
}
break;
}
});
/**
* Returns the loc of the right sibling of the node at this loc, or nil
*/
clojure.zip.right = (function right(loc){var vec__9067 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9067,0,null);var map__9068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9067,1,null);var map__9068__$1 = ((cljs.core.seq_QMARK_(map__9068))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9068):map__9068);var path = map__9068__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9068__$1,cljs.core.constant$keyword$92);var vec__9069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9068__$1,cljs.core.constant$keyword$93);var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9069,0,null);var rnext = cljs.core.nthnext(vec__9069,1);var rs = vec__9069;if(cljs.core.truth_((function (){var and__3529__auto__ = path;if(cljs.core.truth_(and__3529__auto__))
{return rs;
} else
{return and__3529__auto__;
}
})()))
{return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$92,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,node),cljs.core.array_seq([cljs.core.constant$keyword$93,rnext], 0))], null),cljs.core.meta(loc));
} else
{return null;
}
});
/**
* Returns the loc of the rightmost sibling of the node at this loc, or self
*/
clojure.zip.rightmost = (function rightmost(loc){var vec__9072 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9072,0,null);var map__9073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9072,1,null);var map__9073__$1 = ((cljs.core.seq_QMARK_(map__9073))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9073):map__9073);var path = map__9073__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9073__$1,cljs.core.constant$keyword$92);var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9073__$1,cljs.core.constant$keyword$93);if(cljs.core.truth_((function (){var and__3529__auto__ = path;if(cljs.core.truth_(and__3529__auto__))
{return r;
} else
{return and__3529__auto__;
}
})()))
{return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(r),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$92,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.conj,l,node,cljs.core.butlast(r)),cljs.core.array_seq([cljs.core.constant$keyword$93,null], 0))], null),cljs.core.meta(loc));
} else
{return loc;
}
});
/**
* Returns the loc of the left sibling of the node at this loc, or nil
*/
clojure.zip.left = (function left(loc){var vec__9076 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9076,0,null);var map__9077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9076,1,null);var map__9077__$1 = ((cljs.core.seq_QMARK_(map__9077))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9077):map__9077);var path = map__9077__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9077__$1,cljs.core.constant$keyword$92);var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9077__$1,cljs.core.constant$keyword$93);if(cljs.core.truth_((function (){var and__3529__auto__ = path;if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.seq(l);
} else
{return and__3529__auto__;
}
})()))
{return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$92,cljs.core.pop(l),cljs.core.array_seq([cljs.core.constant$keyword$93,cljs.core.cons(node,r)], 0))], null),cljs.core.meta(loc));
} else
{return null;
}
});
/**
* Returns the loc of the leftmost sibling of the node at this loc, or self
*/
clojure.zip.leftmost = (function leftmost(loc){var vec__9080 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9080,0,null);var map__9081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9080,1,null);var map__9081__$1 = ((cljs.core.seq_QMARK_(map__9081))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9081):map__9081);var path = map__9081__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9081__$1,cljs.core.constant$keyword$92);var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9081__$1,cljs.core.constant$keyword$93);if(cljs.core.truth_((function (){var and__3529__auto__ = path;if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.seq(l);
} else
{return and__3529__auto__;
}
})()))
{return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$92,cljs.core.PersistentVector.EMPTY,cljs.core.array_seq([cljs.core.constant$keyword$93,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.rest(l),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.array_seq([r], 0))], 0))], null),cljs.core.meta(loc));
} else
{return loc;
}
});
/**
* Inserts the item as the left sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_left = (function insert_left(loc,item){var vec__9084 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9084,0,null);var map__9085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9084,1,null);var map__9085__$1 = ((cljs.core.seq_QMARK_(map__9085))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9085):map__9085);var path = map__9085__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9085__$1,cljs.core.constant$keyword$92);if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$92,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,item),cljs.core.array_seq([cljs.core.constant$keyword$95,true], 0))], null),cljs.core.meta(loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){var vec__9088 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9088,0,null);var map__9089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9088,1,null);var map__9089__$1 = ((cljs.core.seq_QMARK_(map__9089))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9089):map__9089);var path = map__9089__$1;var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9089__$1,cljs.core.constant$keyword$93);if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$93,cljs.core.cons(item,r),cljs.core.array_seq([cljs.core.constant$keyword$95,true], 0))], null),cljs.core.meta(loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){var vec__9091 = loc;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9091,0,null);var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9091,1,null);return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path,cljs.core.constant$keyword$95,true)], null),cljs.core.meta(loc));
});
/**
* Replaces the node at this loc with the value of (f node args)
* @param {...*} var_args
*/
clojure.zip.edit = (function() { 
var edit__delegate = function (loc,f,args){return clojure.zip.replace(loc,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,clojure.zip.node(loc),args));
};
var edit = function (loc,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return edit__delegate.call(this,loc,f,args);};
edit.cljs$lang$maxFixedArity = 2;
edit.cljs$lang$applyTo = (function (arglist__9092){
var loc = cljs.core.first(arglist__9092);
arglist__9092 = cljs.core.next(arglist__9092);
var f = cljs.core.first(arglist__9092);
var args = cljs.core.rest(arglist__9092);
return edit__delegate(loc,f,args);
});
edit.cljs$core$IFn$_invoke$arity$variadic = edit__delegate;
return edit;
})()
;
/**
* Inserts the item as the leftmost child of the node at this loc,
* without moving
*/
clojure.zip.insert_child = (function insert_child(loc,item){return clojure.zip.replace(loc,clojure.zip.make_node(loc,clojure.zip.node(loc),cljs.core.cons(item,clojure.zip.children(loc))));
});
/**
* Inserts the item as the rightmost child of the node at this loc,
* without moving
*/
clojure.zip.append_child = (function append_child(loc,item){return clojure.zip.replace(loc,clojure.zip.make_node(loc,clojure.zip.node(loc),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.zip.children(loc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
});
/**
* Moves to the next loc in the hierarchy, depth-first. When reaching
* the end, returns a distinguished loc detectable via end?. If already
* at the end, stays there.
*/
clojure.zip.next = (function next(loc){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$96,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(1) : loc.call(null,1))))
{return loc;
} else
{var or__3541__auto__ = (function (){var and__3529__auto__ = clojure.zip.branch_QMARK_(loc);if(cljs.core.truth_(and__3529__auto__))
{return clojure.zip.down(loc);
} else
{return and__3529__auto__;
}
})();if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = clojure.zip.right(loc);if(cljs.core.truth_(or__3541__auto____$1))
{return or__3541__auto____$1;
} else
{var p = loc;while(true){
if(cljs.core.truth_(clojure.zip.up(p)))
{var or__3541__auto____$2 = clojure.zip.right(clojure.zip.up(p));if(cljs.core.truth_(or__3541__auto____$2))
{return or__3541__auto____$2;
} else
{{
var G__9093 = clojure.zip.up(p);
p = G__9093;
continue;
}
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node(p),cljs.core.constant$keyword$96], null);
}
break;
}
}
}
}
});
/**
* Moves to the previous loc in the hierarchy, depth-first. If already
* at the root, returns nil.
*/
clojure.zip.prev = (function prev(loc){var temp__4124__auto__ = clojure.zip.left(loc);if(cljs.core.truth_(temp__4124__auto__))
{var lloc = temp__4124__auto__;var loc__$1 = lloc;while(true){
var temp__4124__auto____$1 = (function (){var and__3529__auto__ = clojure.zip.branch_QMARK_(loc__$1);if(cljs.core.truth_(and__3529__auto__))
{return clojure.zip.down(loc__$1);
} else
{return and__3529__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto____$1))
{var child = temp__4124__auto____$1;{
var G__9094 = clojure.zip.rightmost(child);
loc__$1 = G__9094;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return clojure.zip.up(loc);
}
});
/**
* Returns true if loc represents the end of a depth-first walk
*/
clojure.zip.end_QMARK_ = (function end_QMARK_(loc){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$96,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(1) : loc.call(null,1)));
});
/**
* Removes the node at loc, returning the loc that would have preceded
* it in a depth-first walk.
*/
clojure.zip.remove = (function remove(loc){var vec__9097 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9097,0,null);var map__9098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9097,1,null);var map__9098__$1 = ((cljs.core.seq_QMARK_(map__9098))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9098):map__9098);var path = map__9098__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9098__$1,cljs.core.constant$keyword$92);var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9098__$1,cljs.core.constant$keyword$94);var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9098__$1,cljs.core.constant$keyword$91);var rs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9098__$1,cljs.core.constant$keyword$93);if((path == null))
{throw "Remove at top";
} else
{if((cljs.core.count(l) > 0))
{var loc__$1 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$92,cljs.core.pop(l),cljs.core.array_seq([cljs.core.constant$keyword$95,true], 0))], null),cljs.core.meta(loc));while(true){
var temp__4124__auto__ = (function (){var and__3529__auto__ = clojure.zip.branch_QMARK_(loc__$1);if(cljs.core.truth_(and__3529__auto__))
{return clojure.zip.down(loc__$1);
} else
{return and__3529__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var child = temp__4124__auto__;{
var G__9099 = clojure.zip.rightmost(child);
loc__$1 = G__9099;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node(loc,cljs.core.peek(pnodes),rs),(function (){var and__3529__auto__ = ppath;if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,cljs.core.constant$keyword$95,true);
} else
{return and__3529__auto__;
}
})()], null),cljs.core.meta(loc));
}
}
});
