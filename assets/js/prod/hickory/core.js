// Compiled by ClojureScript 0.0-2227
goog.provide('hickory.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('clojure.zip');
goog.require('clojure.zip');
goog.require('hickory.utils');
goog.require('hickory.utils');
hickory.core.HiccupRepresentable = (function (){var obj9043 = {};return obj9043;
})();
hickory.core.as_hiccup = (function as_hiccup(this$){if((function (){var and__3529__auto__ = this$;if(and__3529__auto__)
{return this$.hickory$core$HiccupRepresentable$as_hiccup$arity$1;
} else
{return and__3529__auto__;
}
})())
{return this$.hickory$core$HiccupRepresentable$as_hiccup$arity$1(this$);
} else
{var x__4168__auto__ = (((this$ == null))?null:this$);return (function (){var or__3541__auto__ = (hickory.core.as_hiccup[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (hickory.core.as_hiccup["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("HiccupRepresentable.as-hiccup",this$);
}
}
})().call(null,this$);
}
});
hickory.core.HickoryRepresentable = (function (){var obj9045 = {};return obj9045;
})();
hickory.core.as_hickory = (function as_hickory(this$){if((function (){var and__3529__auto__ = this$;if(and__3529__auto__)
{return this$.hickory$core$HickoryRepresentable$as_hickory$arity$1;
} else
{return and__3529__auto__;
}
})())
{return this$.hickory$core$HickoryRepresentable$as_hickory$arity$1(this$);
} else
{var x__4168__auto__ = (((this$ == null))?null:this$);return (function (){var or__3541__auto__ = (hickory.core.as_hickory[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (hickory.core.as_hickory["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("HickoryRepresentable.as-hickory",this$);
}
}
})().call(null,this$);
}
});
hickory.core.node_type = (function node_type(type){return (Node[(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"_NODE")]);
});
hickory.core.Attribute = hickory.core.node_type("ATTRIBUTE");
hickory.core.Comment = hickory.core.node_type("COMMENT");
hickory.core.Document = hickory.core.node_type("DOCUMENT");
hickory.core.DocumentType = hickory.core.node_type("DOCUMENT_TYPE");
hickory.core.Element = hickory.core.node_type("ELEMENT");
hickory.core.Text = hickory.core.node_type("TEXT");
hickory.core.extend_type_with_seqable = (function extend_type_with_seqable(t){t.prototype.cljs$core$ISeqable$ = true;
return t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){var array__$1 = this;return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(array__$1);
});
});
hickory.core.extend_type_with_seqable(NodeList);
if(typeof NamedNodeMap !== 'undefined')
{hickory.core.extend_type_with_seqable(NamedNodeMap);
} else
{}
if(typeof MozNamedAttrMap !== 'undefined')
{hickory.core.extend_type_with_seqable(MozNamedAttrMap);
} else
{}
hickory.core.format_doctype = (function format_doctype(dt){var name = (dt["name"]);var publicId = (dt["publicId"]);var systemId = (dt["systemId"]);if(!(cljs.core.empty_QMARK_(publicId)))
{return goog.string.format("<!DOCTYPE %s PUBLIC \"%s\" \"%s\">",name,publicId,systemId);
} else
{return ("<!DOCTYPE "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+">");
}
});
(hickory.core.HiccupRepresentable["object"] = true);
(hickory.core.as_hiccup["object"] = (function (this$){var pred__9047 = cljs.core._EQ_;var expr__9048 = (this$["nodeType"]);if(cljs.core.truth_((pred__9047.cljs$core$IFn$_invoke$arity$2 ? pred__9047.cljs$core$IFn$_invoke$arity$2(hickory.core.Attribute,expr__9048) : pred__9047.call(null,hickory.core.Attribute,expr__9048))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword((this$["name"])),(this$["value"])], null);
} else
{if(cljs.core.truth_((pred__9047.cljs$core$IFn$_invoke$arity$2 ? pred__9047.cljs$core$IFn$_invoke$arity$2(hickory.core.Comment,expr__9048) : pred__9047.call(null,hickory.core.Comment,expr__9048))))
{return ("<!--"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((this$["data"]))+"-->");
} else
{if(cljs.core.truth_((pred__9047.cljs$core$IFn$_invoke$arity$2 ? pred__9047.cljs$core$IFn$_invoke$arity$2(hickory.core.Document,expr__9048) : pred__9047.call(null,hickory.core.Document,expr__9048))))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,(this$["childNodes"]));
} else
{if(cljs.core.truth_((pred__9047.cljs$core$IFn$_invoke$arity$2 ? pred__9047.cljs$core$IFn$_invoke$arity$2(hickory.core.DocumentType,expr__9048) : pred__9047.call(null,hickory.core.DocumentType,expr__9048))))
{return hickory.core.format_doctype(this$);
} else
{if(cljs.core.truth_((pred__9047.cljs$core$IFn$_invoke$arity$2 ? pred__9047.cljs$core$IFn$_invoke$arity$2(hickory.core.Element,expr__9048) : pred__9047.call(null,hickory.core.Element,expr__9048))))
{var tag = hickory.utils.lower_case_keyword((this$["tagName"]));return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,(this$["attributes"])))], null),(cljs.core.truth_((hickory.utils.unescapable_content.cljs$core$IFn$_invoke$arity$1 ? hickory.utils.unescapable_content.cljs$core$IFn$_invoke$arity$1(tag) : hickory.utils.unescapable_content.call(null,tag)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tag,pred__9047,expr__9048){
return (function (p1__9046_SHARP_){return (p1__9046_SHARP_["wholeText"]);
});})(tag,pred__9047,expr__9048))
,(this$["childNodes"])):cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,(this$["childNodes"])))));
} else
{if(cljs.core.truth_((pred__9047.cljs$core$IFn$_invoke$arity$2 ? pred__9047.cljs$core$IFn$_invoke$arity$2(hickory.core.Text,expr__9048) : pred__9047.call(null,hickory.core.Text,expr__9048))))
{return hickory.utils.html_escape((this$["wholeText"]));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__9048))));
}
}
}
}
}
}
}));
(hickory.core.HickoryRepresentable["object"] = true);
(hickory.core.as_hickory["object"] = (function (this$){var pred__9050 = cljs.core._EQ_;var expr__9051 = (this$["nodeType"]);if(cljs.core.truth_((pred__9050.cljs$core$IFn$_invoke$arity$2 ? pred__9050.cljs$core$IFn$_invoke$arity$2(hickory.core.Attribute,expr__9051) : pred__9050.call(null,hickory.core.Attribute,expr__9051))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword((this$["name"])),(this$["value"])], null);
} else
{if(cljs.core.truth_((pred__9050.cljs$core$IFn$_invoke$arity$2 ? pred__9050.cljs$core$IFn$_invoke$arity$2(hickory.core.Comment,expr__9051) : pred__9050.call(null,hickory.core.Comment,expr__9051))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$51,cljs.core.constant$keyword$110,cljs.core.constant$keyword$52,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(this$["data"])], null)], null);
} else
{if(cljs.core.truth_((pred__9050.cljs$core$IFn$_invoke$arity$2 ? pred__9050.cljs$core$IFn$_invoke$arity$2(hickory.core.Document,expr__9051) : pred__9050.call(null,hickory.core.Document,expr__9051))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$51,cljs.core.constant$keyword$111,cljs.core.constant$keyword$52,cljs.core.not_empty(cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,(this$["childNodes"]))))], null);
} else
{if(cljs.core.truth_((pred__9050.cljs$core$IFn$_invoke$arity$2 ? pred__9050.cljs$core$IFn$_invoke$arity$2(hickory.core.DocumentType,expr__9051) : pred__9050.call(null,hickory.core.DocumentType,expr__9051))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$51,cljs.core.constant$keyword$112,cljs.core.constant$keyword$87,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$75,(this$["name"]),cljs.core.constant$keyword$113,(this$["publicId"]),cljs.core.constant$keyword$114,(this$["systemId"])], null)], null);
} else
{if(cljs.core.truth_((pred__9050.cljs$core$IFn$_invoke$arity$2 ? pred__9050.cljs$core$IFn$_invoke$arity$2(hickory.core.Element,expr__9051) : pred__9050.call(null,hickory.core.Element,expr__9051))))
{return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$51,cljs.core.constant$keyword$115,cljs.core.constant$keyword$87,cljs.core.not_empty(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,(this$["attributes"])))),cljs.core.constant$keyword$16,hickory.utils.lower_case_keyword((this$["tagName"])),cljs.core.constant$keyword$52,cljs.core.not_empty(cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,(this$["childNodes"]))))], null);
} else
{if(cljs.core.truth_((pred__9050.cljs$core$IFn$_invoke$arity$2 ? pred__9050.cljs$core$IFn$_invoke$arity$2(hickory.core.Text,expr__9051) : pred__9050.call(null,hickory.core.Text,expr__9051))))
{return (this$["wholeText"]);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__9051))));
}
}
}
}
}
}
}));
hickory.core.extract_doctype = (function extract_doctype(s){var temp__4126__auto__ = cljs.core.second((function (){var or__3541__auto__ = cljs.core.re_find(/<!DOCTYPE ([^>]*)>/,s);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.re_find(/<!doctype ([^>]*)>/,s);
}
})());if(cljs.core.truth_(temp__4126__auto__))
{var doctype = temp__4126__auto__;return cljs.core.re_find(/([^\s]*)(\s+PUBLIC\s+[\"]?([^\"]*)[\"]?\s+[\"]?([^\"]*)[\"]?)?/,doctype);
} else
{return null;
}
});
hickory.core.remove_el = (function remove_el(el){return (el["parentNode"]).removeChild(el);
});
hickory.core.parse_dom_with_domparser = (function parse_dom_with_domparser(s){if(typeof DOMParser !== 'undefined')
{return (new DOMParser()).parseFromString(s,"text/html");
} else
{return null;
}
});
/**
* Parse an HTML document (or fragment) as a DOM using document.implementation.createHTMLDocument and document.write.
*/
hickory.core.parse_dom_with_write = (function parse_dom_with_write(s){var doc = document.implementation.createHTMLDocument("");var doctype_el = (doc["doctype"]);if(cljs.core.truth_(hickory.core.extract_doctype(s)))
{} else
{hickory.core.remove_el(doctype_el);
}
var temp__4126__auto___9053 = cljs.core.first((doc["head"]["childNodes"]));if(cljs.core.truth_(temp__4126__auto___9053))
{var title_el_9054 = temp__4126__auto___9053;if(cljs.core.empty_QMARK_((title_el_9054["text"])))
{hickory.core.remove_el(title_el_9054);
} else
{}
} else
{}
doc.write(s);
return doc;
});
/**
* Parse an entire HTML document into a DOM structure that can be
* used as input to as-hiccup or as-hickory.
*/
hickory.core.parse = (function parse(s){var or__3541__auto__ = hickory.core.parse_dom_with_domparser(s);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return hickory.core.parse_dom_with_write(s);
}
});
/**
* Parse an HTML fragment (some group of tags that might be at home somewhere
* in the tag hierarchy under <body>) into a list of DOM elements that can
* each be passed as input to as-hiccup or as-hickory.
*/
hickory.core.parse_fragment = (function parse_fragment(s){return (hickory.core.parse(s)["body"]["childNodes"]);
});
