// Compiled by ClojureScript 0.0-2227
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.Uri');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('goog.net.XhrManager');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
ajax.core.AjaxImpl = (function (){var obj7618 = {};return obj7618;
})();
ajax.core._js_ajax_request = (function _js_ajax_request(this$,uri,method,body,headers,handler,opts){if((function (){var and__3529__auto__ = this$;if(and__3529__auto__)
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else
{return and__3529__auto__;
}
})())
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else
{var x__4168__auto__ = (((this$ == null))?null:this$);return (function (){var or__3541__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (ajax.core._js_ajax_request["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});
ajax.core.AjaxRequest = (function (){var obj7620 = {};return obj7620;
})();
ajax.core._abort = (function _abort(this$,error_code){if((function (){var and__3529__auto__ = this$;if(and__3529__auto__)
{return this$.ajax$core$AjaxRequest$_abort$arity$2;
} else
{return and__3529__auto__;
}
})())
{return this$.ajax$core$AjaxRequest$_abort$arity$2(this$,error_code);
} else
{var x__4168__auto__ = (((this$ == null))?null:this$);return (function (){var or__3541__auto__ = (ajax.core._abort[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (ajax.core._abort["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("AjaxRequest.-abort",this$);
}
}
})().call(null,this$,error_code);
}
});
(ajax.core.AjaxImpl["null"] = true);
(ajax.core._js_ajax_request["null"] = (function (this$,uri,method,body,headers,handler,p__7621){var map__7622 = p__7621;var map__7622__$1 = ((cljs.core.seq_QMARK_(map__7622))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7622):map__7622);var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7622__$1,cljs.core.constant$keyword$17);var G__7623 = (new goog.net.XhrIo());goog.events.listen(G__7623,goog.net.EventType.COMPLETE,handler);
G__7623.setTimeoutInterval((function (){var or__3541__auto__ = timeout;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return 0;
}
})());
G__7623.send(uri,method,body,headers);
return G__7623;
}));
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$2 = (function (this$,error_code){var this$__$1 = this;return this$__$1.abort(error_code);
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__7624){var map__7625 = p__7624;var map__7625__$1 = ((cljs.core.seq_QMARK_(map__7625))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7625):map__7625);var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7625__$1,cljs.core.constant$keyword$18);var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7625__$1,cljs.core.constant$keyword$19);var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7625__$1,cljs.core.constant$keyword$17);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7625__$1,cljs.core.constant$keyword$20);var this$__$1 = this;return this$__$1.send(id,uri,method,body,headers,priority,handler,max_retries);
});
ajax.core.abort = (function abort(this$){return ajax.core._abort(this$,goog.net.ErrorCode.ABORT);
});
ajax.core.success_QMARK_ = (function success_QMARK_(status){return cljs.core.some(cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [200,201,202,204,205,206], null));
});
ajax.core.read_edn = (function read_edn(xhrio){return cljs.reader.read_string(xhrio.getResponseText());
});
ajax.core.edn_response_format = (function edn_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$21,ajax.core.read_edn,cljs.core.constant$keyword$22,"EDN"], null);
});
ajax.core.edn_request_format = (function edn_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,cljs.core.pr_str,cljs.core.constant$keyword$24,"application/edn"], null);
});
ajax.core.params_to_str = (function params_to_str(params){if(cljs.core.truth_(params))
{return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js(params)))).toString();
} else
{return null;
}
});
ajax.core.read_text = (function read_text(xhrio){return xhrio.getResponseText();
});
ajax.core.url_request_format = (function url_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,ajax.core.params_to_str,cljs.core.constant$keyword$24,"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function raw_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$21,ajax.core.read_text,cljs.core.constant$keyword$22,"raw text"], null);
});
ajax.core.write_json = (function write_json(data){return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js(data));
});
ajax.core.json_request_format = (function json_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,ajax.core.write_json,cljs.core.constant$keyword$24,"application/json"], null);
});
/**
* Returns a JSON response format.  Options include
* :keywords? Returns the keys as keywords
* :prefix A prefix that needs to be stripped off.  This is to
* combat JSON hijacking.  If you're using JSON with GET request,
* you should use this.
* http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
* http://haacked.com/archive/2009/06/24/json-hijacking.aspx
*/
ajax.core.json_response_format = (function json_response_format(p__7626){var map__7628 = p__7626;var map__7628__$1 = ((cljs.core.seq_QMARK_(map__7628))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7628):map__7628);var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7628__$1,cljs.core.constant$keyword$25);var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7628__$1,cljs.core.constant$keyword$26);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$21,((function (map__7628,map__7628__$1,keywords_QMARK_,prefix){
return (function read_json(xhrio){var json = xhrio.getResponseJson(prefix);return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$12,keywords_QMARK_], 0));
});})(map__7628,map__7628__$1,keywords_QMARK_,prefix))
,cljs.core.constant$keyword$22,("JSON"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(prefix)?(" prefix '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+"'"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(keywords_QMARK_)?" keywordize":null)))], null);
});
ajax.core.get_default_format = (function get_default_format(xhrio){var ct = xhrio.getResponseHeader("Content-Type");var format = (cljs.core.truth_((function (){var and__3529__auto__ = ct;if(cljs.core.truth_(and__3529__auto__))
{return (ct.indexOf("json") >= 0);
} else
{return and__3529__auto__;
}
})())?ajax.core.json_response_format(cljs.core.PersistentArrayMap.EMPTY):ajax.core.edn_response_format());return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(format,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$22], null),((function (ct,format){
return (function (p1__7629_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7629_SHARP_)+" (default)");
});})(ct,format))
);
});
ajax.core.use_content_type = (function use_content_type(format){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(format,cljs.core.constant$keyword$23);
});
ajax.core.get_format = (function get_format(format){if(cljs.core.map_QMARK_(format))
{return format;
} else
{if(cljs.core.ifn_QMARK_(format))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.url_request_format(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$21,format,cljs.core.constant$keyword$22,"custom"], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw (new Error(("unrecognized format: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(format))));
} else
{return null;
}
}
}
});
ajax.core.exception_response = (function exception_response(e,status,p__7630,xhrio){var map__7632 = p__7630;var map__7632__$1 = ((cljs.core.seq_QMARK_(map__7632))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7632):map__7632);var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7632__$1,cljs.core.constant$keyword$22);var response = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$27,status,cljs.core.constant$keyword$28,null], null);var status_text = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)+"  Format should have been "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(description));var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$29,status_text,cljs.core.array_seq([cljs.core.constant$keyword$30,true,cljs.core.constant$keyword$31,xhrio.getResponseText()], 0));if(cljs.core.truth_(ajax.core.success_QMARK_(status)))
{return parse_error;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$29,xhrio.getStatusText(),cljs.core.array_seq([cljs.core.constant$keyword$32,parse_error], 0));
}
});
ajax.core.interpret_response = (function interpret_response(format,response,get_default_format){try{var xhrio = response.target;var status = xhrio.getStatus();if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(-1,status))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhrio.getLastErrorCode(),goog.net.ErrorCode.ABORT))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$27,-1,cljs.core.constant$keyword$29,"Request aborted by client.",cljs.core.constant$keyword$33,true], null)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$27,-1,cljs.core.constant$keyword$29,"Request timed out.",cljs.core.constant$keyword$34,true], null)], null);
}
} else
{var format__$1 = (cljs.core.truth_(cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(format))?format:(get_default_format.cljs$core$IFn$_invoke$arity$1 ? get_default_format.cljs$core$IFn$_invoke$arity$1(xhrio) : get_default_format.call(null,xhrio)));var parse = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(format__$1);try{var response__$1 = (parse.cljs$core$IFn$_invoke$arity$1 ? parse.cljs$core$IFn$_invoke$arity$1(xhrio) : parse.call(null,xhrio));if(cljs.core.truth_(ajax.core.success_QMARK_(status)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response__$1], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$27,status,cljs.core.constant$keyword$29,xhrio.getStatusText(),cljs.core.constant$keyword$28,response__$1], null)], null);
}
}catch (e7636){if((e7636 instanceof Object))
{var e = e7636;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format__$1,xhrio)], null);
} else
{if(cljs.core.constant$keyword$6)
{throw e7636;
} else
{return null;
}
}
}}
}catch (e7635){if((e7635 instanceof Object))
{var e = e7635;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$27,0,cljs.core.constant$keyword$29,e.message,cljs.core.constant$keyword$28,null], null)], null);
} else
{if(cljs.core.constant$keyword$6)
{throw e7635;
} else
{return null;
}
}
}});
ajax.core.no_format = (function no_format(xhrio){throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function uri_with_params(uri,params){if(cljs.core.truth_(params))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.core.params_to_str(params)));
} else
{return uri;
}
});
ajax.core.process_inputs = (function process_inputs(uri,method,p__7637,p__7638){var map__7642 = p__7637;var map__7642__$1 = ((cljs.core.seq_QMARK_(map__7642))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7642):map__7642);var format = map__7642__$1;var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7642__$1,cljs.core.constant$keyword$24);var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7642__$1,cljs.core.constant$keyword$23);var map__7643 = p__7638;var map__7643__$1 = ((cljs.core.seq_QMARK_(map__7643))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7643):map__7643);var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7643__$1,cljs.core.constant$keyword$35);var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7643__$1,cljs.core.constant$keyword$36);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET"))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params(uri,params),null,headers], null);
} else
{var map__7644 = format;var map__7644__$1 = ((cljs.core.seq_QMARK_(map__7644))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7644):map__7644);var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7644__$1,cljs.core.constant$keyword$24);var write__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7644__$1,cljs.core.constant$keyword$23);var body = (write__$1.cljs$core$IFn$_invoke$arity$1 ? write__$1.cljs$core$IFn$_invoke$arity$1(params) : write__$1.call(null,params));var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3541__auto__ = headers;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),content_type__$2], 0));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$1], null);
}
});
ajax.core.normalize_method = (function normalize_method(method){if((method instanceof cljs.core.Keyword))
{return clojure.string.upper_case(cljs.core.name(method));
} else
{return method;
}
});
ajax.core.base_handler = (function base_handler(format,p__7645){var map__7647 = p__7645;var map__7647__$1 = ((cljs.core.seq_QMARK_(map__7647))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7647):map__7647);var get_default_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7647__$1,cljs.core.constant$keyword$37);var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7647__$1,cljs.core.constant$keyword$38);if(cljs.core.truth_(handler))
{return ((function (map__7647,map__7647__$1,get_default_format,handler){
return (function (xhrio){return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(ajax.core.interpret_response(format,xhrio,(function (){var or__3541__auto__ = get_default_format;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return ajax.core.no_format;
}
})())) : handler.call(null,ajax.core.interpret_response(format,xhrio,(function (){var or__3541__auto__ = get_default_format;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return ajax.core.no_format;
}
})())));
});
;})(map__7647,map__7647__$1,get_default_format,handler))
} else
{throw (new Error("No ajax handler provided."));
}
});
/**
* @param {...*} var_args
*/
ajax.core.ajax_request = (function() {
var ajax_request = null;
var ajax_request__1 = (function (p__7648){var map__7651 = p__7648;var map__7651__$1 = ((cljs.core.seq_QMARK_(map__7651))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7651):map__7651);var opts = map__7651__$1;var manager = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7651__$1,cljs.core.constant$keyword$39);var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7651__$1,cljs.core.constant$keyword$40);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7651__$1,cljs.core.constant$keyword$41);var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7651__$1,cljs.core.constant$keyword$42);var format__$1 = ajax.core.get_format(format);var method__$1 = ajax.core.normalize_method(method);var vec__7652 = ajax.core.process_inputs(uri,method__$1,format__$1,opts);var uri__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7652,0,null);var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7652,1,null);var headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7652,2,null);var handler = ajax.core.base_handler(format__$1,opts);return ajax.core._js_ajax_request(manager,uri__$1,method__$1,body,cljs.core.clj__GT_js(headers),handler,opts);
});
var ajax_request__3 = (function() { 
var G__7653__delegate = function (uri,method,args){var f = cljs.core.first(args);var opts = (((f instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args):f);return ajax_request.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$42,uri,cljs.core.array_seq([cljs.core.constant$keyword$41,method], 0)));
};
var G__7653 = function (uri,method,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7653__delegate.call(this,uri,method,args);};
G__7653.cljs$lang$maxFixedArity = 2;
G__7653.cljs$lang$applyTo = (function (arglist__7654){
var uri = cljs.core.first(arglist__7654);
arglist__7654 = cljs.core.next(arglist__7654);
var method = cljs.core.first(arglist__7654);
var args = cljs.core.rest(arglist__7654);
return G__7653__delegate(uri,method,args);
});
G__7653.cljs$core$IFn$_invoke$arity$variadic = G__7653__delegate;
return G__7653;
})()
;
ajax_request = function(uri,method,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return ajax_request__1.call(this,uri);
default:
return ajax_request__3.cljs$core$IFn$_invoke$arity$variadic(uri,method, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax_request.cljs$lang$maxFixedArity = 2;
ajax_request.cljs$lang$applyTo = ajax_request__3.cljs$lang$applyTo;
ajax_request.cljs$core$IFn$_invoke$arity$1 = ajax_request__1;
ajax_request.cljs$core$IFn$_invoke$arity$variadic = ajax_request__3.cljs$core$IFn$_invoke$arity$variadic;
return ajax_request;
})()
;
ajax.core.json_format = (function json_format(format_params){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.json_request_format(),ajax.core.json_response_format(format_params)], 0));
});
ajax.core.edn_format = (function edn_format(){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.edn_request_format(),ajax.core.edn_response_format()], 0));
});
ajax.core.raw_format = (function raw_format(){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.url_request_format(),ajax.core.raw_response_format()], 0));
});
ajax.core.keyword_request_format = (function keyword_request_format(format,format_params){var G__7656 = (((format instanceof cljs.core.Keyword))?format.fqn:null);var caseval__7657;
switch (G__7656){
case "url":
caseval__7657=ajax.core.url_request_format()
break;
case "raw":
caseval__7657=ajax.core.url_request_format()
break;
case "edn":
caseval__7657=ajax.core.edn_request_format()
break;
case "json":
caseval__7657=ajax.core.json_request_format()
break;
default:
caseval__7657=(function(){throw (new Error(("unrecognized request format: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(format))))})()
}
return caseval__7657;
});
ajax.core.keyword_response_format = (function keyword_response_format(format,format_params){if(cljs.core.map_QMARK_(format))
{return format;
} else
{if(cljs.core.ifn_QMARK_(format))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$21,format,cljs.core.constant$keyword$22,"custom"], null);
} else
{if(cljs.core.constant$keyword$6)
{var G__7659 = (((format instanceof cljs.core.Keyword))?format.fqn:null);var caseval__7660;
switch (G__7659){
case "raw":
caseval__7660=ajax.core.raw_response_format()
break;
case "edn":
caseval__7660=ajax.core.edn_response_format()
break;
case "json":
caseval__7660=ajax.core.json_response_format(format_params)
break;
default:
caseval__7660=null
}
return caseval__7660;
} else
{return null;
}
}
}
});
ajax.core.transform_handler = (function transform_handler(p__7661){var map__7666 = p__7661;var map__7666__$1 = ((cljs.core.seq_QMARK_(map__7666))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7666):map__7666);var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7666__$1,cljs.core.constant$keyword$43);var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7666__$1,cljs.core.constant$keyword$44);var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7666__$1,cljs.core.constant$keyword$38);return ((function (map__7666,map__7666__$1,finally$,error_handler,handler){
return (function easy_handler(p__7667){var vec__7669 = p__7667;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7669,0,null);var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7669,1,null);var temp__4124__auto___7670 = (cljs.core.truth_(ok)?handler:error_handler);if(cljs.core.truth_(temp__4124__auto___7670))
{var h_7671 = temp__4124__auto___7670;(h_7671.cljs$core$IFn$_invoke$arity$1 ? h_7671.cljs$core$IFn$_invoke$arity$1(result) : h_7671.call(null,result));
} else
{}
if(cljs.core.fn_QMARK_(finally$))
{return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else
{return null;
}
});
;})(map__7666,map__7666__$1,finally$,error_handler,handler))
});
ajax.core.transform_format = (function transform_format(p__7672){var map__7674 = p__7672;var map__7674__$1 = ((cljs.core.seq_QMARK_(map__7674))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7674):map__7674);var opts = map__7674__$1;var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7674__$1,cljs.core.constant$keyword$45);var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7674__$1,cljs.core.constant$keyword$40);var rf = ajax.core.keyword_response_format(response_format,opts);if((format == null))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.edn_request_format(),rf], 0));
} else
{if((format instanceof cljs.core.Keyword))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.keyword_request_format(format,opts),rf], 0));
} else
{if(cljs.core.constant$keyword$6)
{return format;
} else
{return null;
}
}
}
});
ajax.core.transform_opts = (function transform_opts(opts){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$38,ajax.core.transform_handler(opts),cljs.core.array_seq([cljs.core.constant$keyword$40,ajax.core.transform_format(opts),cljs.core.constant$keyword$37,ajax.core.get_default_format], 0));
});
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.GET = (function() { 
var GET__delegate = function (uri,p__7675){var vec__7677 = p__7675;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7677,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"GET",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var GET = function (uri,var_args){
var p__7675 = null;if (arguments.length > 1) {
  p__7675 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,uri,p__7675);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__7678){
var uri = cljs.core.first(arglist__7678);
var p__7675 = cljs.core.rest(arglist__7678);
return GET__delegate(uri,p__7675);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.HEAD = (function() { 
var HEAD__delegate = function (uri,p__7679){var vec__7681 = p__7679;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7681,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"HEAD",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var HEAD = function (uri,var_args){
var p__7679 = null;if (arguments.length > 1) {
  p__7679 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return HEAD__delegate.call(this,uri,p__7679);};
HEAD.cljs$lang$maxFixedArity = 1;
HEAD.cljs$lang$applyTo = (function (arglist__7682){
var uri = cljs.core.first(arglist__7682);
var p__7679 = cljs.core.rest(arglist__7682);
return HEAD__delegate(uri,p__7679);
});
HEAD.cljs$core$IFn$_invoke$arity$variadic = HEAD__delegate;
return HEAD;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.POST = (function() { 
var POST__delegate = function (uri,p__7683){var vec__7685 = p__7683;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7685,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"POST",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var POST = function (uri,var_args){
var p__7683 = null;if (arguments.length > 1) {
  p__7683 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,uri,p__7683);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__7686){
var uri = cljs.core.first(arglist__7686);
var p__7683 = cljs.core.rest(arglist__7686);
return POST__delegate(uri,p__7683);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.PUT = (function() { 
var PUT__delegate = function (uri,p__7687){var vec__7689 = p__7687;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7689,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"PUT",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var PUT = function (uri,var_args){
var p__7687 = null;if (arguments.length > 1) {
  p__7687 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return PUT__delegate.call(this,uri,p__7687);};
PUT.cljs$lang$maxFixedArity = 1;
PUT.cljs$lang$applyTo = (function (arglist__7690){
var uri = cljs.core.first(arglist__7690);
var p__7687 = cljs.core.rest(arglist__7690);
return PUT__delegate(uri,p__7687);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.DELETE = (function() { 
var DELETE__delegate = function (uri,p__7691){var vec__7693 = p__7691;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7693,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"DELETE",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var DELETE = function (uri,var_args){
var p__7691 = null;if (arguments.length > 1) {
  p__7691 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,p__7691);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__7694){
var uri = cljs.core.first(arglist__7694);
var p__7691 = cljs.core.rest(arglist__7694);
return DELETE__delegate(uri,p__7691);
});
DELETE.cljs$core$IFn$_invoke$arity$variadic = DELETE__delegate;
return DELETE;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.OPTIONS = (function() { 
var OPTIONS__delegate = function (uri,p__7695){var vec__7697 = p__7695;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7697,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"OPTIONS",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var OPTIONS = function (uri,var_args){
var p__7695 = null;if (arguments.length > 1) {
  p__7695 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return OPTIONS__delegate.call(this,uri,p__7695);};
OPTIONS.cljs$lang$maxFixedArity = 1;
OPTIONS.cljs$lang$applyTo = (function (arglist__7698){
var uri = cljs.core.first(arglist__7698);
var p__7695 = cljs.core.rest(arglist__7698);
return OPTIONS__delegate(uri,p__7695);
});
OPTIONS.cljs$core$IFn$_invoke$arity$variadic = OPTIONS__delegate;
return OPTIONS;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.TRACE = (function() { 
var TRACE__delegate = function (uri,p__7699){var vec__7701 = p__7699;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7701,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"TRACE",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var TRACE = function (uri,var_args){
var p__7699 = null;if (arguments.length > 1) {
  p__7699 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return TRACE__delegate.call(this,uri,p__7699);};
TRACE.cljs$lang$maxFixedArity = 1;
TRACE.cljs$lang$applyTo = (function (arglist__7702){
var uri = cljs.core.first(arglist__7702);
var p__7699 = cljs.core.rest(arglist__7702);
return TRACE__delegate(uri,p__7699);
});
TRACE.cljs$core$IFn$_invoke$arity$variadic = TRACE__delegate;
return TRACE;
})()
;
