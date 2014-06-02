// Compiled by ClojureScript 0.0-2227
goog.provide('word_marketplace.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('kioo.core');
goog.require('kioo.om');
goog.require('ajax.core');
goog.require('om.dom');
goog.require('clojure.browser.repl');
goog.require('kioo.om');
goog.require('om.dom');
goog.require('kioo.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.string');
word_marketplace.core.rank_text = (function rank_text(rank){var rank_mod = cljs.core.mod(rank,10);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rank_mod,1))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rank)+"st");
} else
{if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rank_mod,2)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rank_mod,3)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rank)+"nd");
} else
{if(cljs.core.constant$keyword$6)
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rank)+"th");
} else
{return null;
}
}
}
});
word_marketplace.core.word_search_inner = (function word_search_inner(state,data){var backup = "";var word = cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(state);var word__$1 = (function (){var and__3529__auto__ = word;if(cljs.core.truth_(and__3529__auto__))
{return clojure.string.lower_case(word);
} else
{return and__3529__auto__;
}
})();var stats = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$149.cljs$core$IFn$_invoke$arity$1(data),word__$1,null);if(cljs.core.truth_(word__$1))
{if(cljs.core.truth_(stats))
{var rank = cljs.core.constant$keyword$150.cljs$core$IFn$_invoke$arity$1(stats);var advice = (((rank < 500))?"Think long and hard before using it!":"Make sure you've explored all your options before using it.");return (kioo.om.content.cljs$core$IFn$_invoke$arity$1 ? kioo.om.content.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word__$1)+" is the "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word_marketplace.core.rank_text(rank))+" most commonly used word on non-profit websites. "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(advice))) : kioo.om.content.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word__$1)+" is the "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word_marketplace.core.rank_text(rank))+" most commonly used word on non-profit websites. "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(advice))));
} else
{return (kioo.om.content.cljs$core$IFn$_invoke$arity$1 ? kioo.om.content.cljs$core$IFn$_invoke$arity$1(("Congratulations -- "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word__$1)+" is not in the top-1000 words found on non-profit websites")) : kioo.om.content.call(null,("Congratulations -- "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word__$1)+" is not in the top-1000 words found on non-profit websites")));
}
} else
{return (kioo.om.content.cljs$core$IFn$_invoke$arity$1 ? kioo.om.content.cljs$core$IFn$_invoke$arity$1(backup) : kioo.om.content.call(null,backup));
}
});
word_marketplace.core.handle_input_change = (function handle_input_change(e,owner,p__7602){var map__7604 = p__7602;var map__7604__$1 = ((cljs.core.seq_QMARK_(map__7604))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7604):map__7604);var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7604__$1,cljs.core.constant$keyword$151);return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$151,e.target.value);
});
word_marketplace.core.search_word = (function search_word(data,owner,state){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$80,cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(state));
});
word_marketplace.core.word_search_component = (function word_search_component(data,owner,state){var ch7606 = kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$61,"row",cljs.core.constant$keyword$86,null], null)),kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n  ",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$61,"col-lg-8 col-md-8 col-sm-12        col-lg-offset-2 col-md-offset-2",cljs.core.constant$keyword$86,null], null)),kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n    ",kioo.core.handle_wrapper(kioo.om.make_dom).call(null,(kioo.om.set_attr.cljs$core$IFn$_invoke$arity$2 ? kioo.om.set_attr.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$152,(function (e){e.preventDefault();
return word_marketplace.core.search_word(data,owner,state);
})) : kioo.om.set_attr.call(null,cljs.core.constant$keyword$152,(function (e){e.preventDefault();
return word_marketplace.core.search_word(data,owner,state);
}))).call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$16,cljs.core.constant$keyword$84,cljs.core.constant$keyword$87,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$61,null,cljs.core.constant$keyword$86,null,cljs.core.constant$keyword$20,"search-form",cljs.core.constant$keyword$153,"form"], null),cljs.core.constant$keyword$52,kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n    ",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$61,"input-group input-group-lg",cljs.core.constant$keyword$86,null], null)),kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n      ",kioo.core.handle_wrapper(kioo.om.make_dom).call(null,(kioo.om.set_attr.cljs$core$IFn$_invoke$arity$4 ? kioo.om.set_attr.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$11,cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(state),cljs.core.constant$keyword$154,(function (p1__7605_SHARP_){return word_marketplace.core.handle_input_change(p1__7605_SHARP_,owner,state);
})) : kioo.om.set_attr.call(null,cljs.core.constant$keyword$11,cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(state),cljs.core.constant$keyword$154,(function (p1__7605_SHARP_){return word_marketplace.core.handle_input_change(p1__7605_SHARP_,owner,state);
}))).call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$16,cljs.core.constant$keyword$64,cljs.core.constant$keyword$87,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$61,"form-control",cljs.core.constant$keyword$86,null,cljs.core.constant$keyword$20,"word-input",cljs.core.constant$keyword$155,"Search for a word here ...",cljs.core.constant$keyword$51,"text"], null),cljs.core.constant$keyword$52,kioo.util.flatten_nodes(cljs.core.PersistentVector.EMPTY),cljs.core.constant$keyword$116,om.dom.input], null))),"\n      ",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.span,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$61,"input-group-btn",cljs.core.constant$keyword$86,null], null)),kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n        ",kioo.core.handle_wrapper(kioo.om.make_dom).call(null,(kioo.om.set_attr.cljs$core$IFn$_invoke$arity$2 ? kioo.om.set_attr.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$156,(function (){return word_marketplace.core.search_word(data,owner,state);
})) : kioo.om.set_attr.call(null,cljs.core.constant$keyword$156,(function (){return word_marketplace.core.search_word(data,owner,state);
}))).call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$16,cljs.core.constant$keyword$157,cljs.core.constant$keyword$87,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$61,"btn btn-primary",cljs.core.constant$keyword$86,null,cljs.core.constant$keyword$20,"search-btn",cljs.core.constant$keyword$51,"button"], null),cljs.core.constant$keyword$52,kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Go!"], null)),cljs.core.constant$keyword$116,om.dom.button], null))),"\n      "], null))),"\n    "], null))),"\n    ",kioo.core.handle_wrapper(kioo.om.make_dom).call(null,word_marketplace.core.word_search_inner(state,data).call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$16,cljs.core.constant$keyword$158,cljs.core.constant$keyword$87,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$61,"inner",cljs.core.constant$keyword$86,null], null),cljs.core.constant$keyword$52,kioo.util.flatten_nodes(cljs.core.PersistentVector.EMPTY),cljs.core.constant$keyword$116,om.dom.p], null))),"\n  \n\n"], null)),cljs.core.constant$keyword$116,om.dom.form], null)))], null)))], null)))], null));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cljs.core.count(ch7606)))
{return cljs.core.first(ch7606);
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.span,null,ch7606);
}
});
word_marketplace.core.init = (function init(data,owner){if(typeof word_marketplace.core.t7610 !== 'undefined')
{} else
{
/**
* @constructor
*/
word_marketplace.core.t7610 = (function (owner,data,init,meta7611){
this.owner = owner;
this.data = data;
this.init = init;
this.meta7611 = meta7611;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
word_marketplace.core.t7610.cljs$lang$type = true;
word_marketplace.core.t7610.cljs$lang$ctorStr = "word-marketplace.core/t7610";
word_marketplace.core.t7610.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"word-marketplace.core/t7610");
});
word_marketplace.core.t7610.prototype.om$core$IRenderState$ = true;
word_marketplace.core.t7610.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return word_marketplace.core.word_search_component(self__.data,self__.owner,state);
});
word_marketplace.core.t7610.prototype.om$core$IInitState$ = true;
word_marketplace.core.t7610.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$151,"",cljs.core.constant$keyword$80,null], null);
});
word_marketplace.core.t7610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7612){var self__ = this;
var _7612__$1 = this;return self__.meta7611;
});
word_marketplace.core.t7610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7612,meta7611__$1){var self__ = this;
var _7612__$1 = this;return (new word_marketplace.core.t7610(self__.owner,self__.data,self__.init,meta7611__$1));
});
word_marketplace.core.__GT_t7610 = (function __GT_t7610(owner__$1,data__$1,init__$1,meta7611){return (new word_marketplace.core.t7610(owner__$1,data__$1,init__$1,meta7611));
});
}
return (new word_marketplace.core.t7610(owner,data,init,null));
});
word_marketplace.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$159,"Test",cljs.core.constant$keyword$149,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$80,null], null));
word_marketplace.core.rank_words_by = (function rank_words_by(words,key){var total_counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7613_SHARP_){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__7613_SHARP_),key);
}),words);var new_words = cljs.core.zipmap(cljs.core.keys(words),total_counts);var sorted_words = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.last,cljs.core._GT_,new_words);return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed(((function (total_counts,new_words,sorted_words){
return (function (idx,item){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(item),(idx + 1)], null);
});})(total_counts,new_words,sorted_words))
,sorted_words));
});
word_marketplace.core.rank_words = (function rank_words(words){var total_ranks = word_marketplace.core.rank_words_by(words,"Total Count");return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(((function (total_ranks){
return (function (word,total_rank){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(word,cljs.core.constant$keyword$150,total_rank);
});})(total_ranks))
,cljs.core.array_seq([words,total_ranks], 0));
});
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("data/words.json",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$40,cljs.core.constant$keyword$160,cljs.core.constant$keyword$38,(function (response){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(word_marketplace.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$149], null),word_marketplace.core.rank_words(response));
})], null)], 0));
om.core.root(word_marketplace.core.init,word_marketplace.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$148,document.getElementById("word-search")], null));
