// Compiled by ClojureScript 0.0-2227
goog.provide('hickory.utils');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Elements that don't have a meaningful <tag></tag> form.
*/
hickory.utils.void_element = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [cljs.core.constant$keyword$97,null,cljs.core.constant$keyword$3,null,cljs.core.constant$keyword$98,null,cljs.core.constant$keyword$99,null,cljs.core.constant$keyword$100,null,cljs.core.constant$keyword$101,null,cljs.core.constant$keyword$65,null,cljs.core.constant$keyword$102,null,cljs.core.constant$keyword$103,null,cljs.core.constant$keyword$104,null,cljs.core.constant$keyword$64,null,cljs.core.constant$keyword$105,null,cljs.core.constant$keyword$106,null,cljs.core.constant$keyword$107,null,cljs.core.constant$keyword$72,null,cljs.core.constant$keyword$108,null], null), null);
/**
* Elements whose content should never have html-escape codes.
*/
hickory.utils.unescapable_content = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,null,cljs.core.constant$keyword$86,null], null), null);
hickory.utils.html_escape = (function html_escape(s){return goog.string.htmlEscape(s);
});
hickory.utils.starts_with = (function starts_with(s,prefix){return goog.string.startsWith(s,prefix);
});
/**
* Converts its string argument into a lowercase keyword.
*/
hickory.utils.lower_case_keyword = (function lower_case_keyword(s){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(s));
});
/**
* Returns a string containing the HTML source for the doctype with given args.
* The second and third arguments can be nil or empty strings.
*/
hickory.utils.render_doctype = (function render_doctype(name,publicid,systemid){return ("<!DOCTYPE "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.not_empty(publicid))?(" PUBLIC \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(publicid)+"\""):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.not_empty(systemid))?(" \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(systemid)+"\""):null))+">");
});
