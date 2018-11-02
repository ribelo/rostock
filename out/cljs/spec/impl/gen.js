// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__8795__auto__,writer__8796__auto__,opt__8797__auto__){
return cljs.core._write.call(null,writer__8796__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14037 = arguments.length;
var i__9298__auto___14038 = (0);
while(true){
if((i__9298__auto___14038 < len__9297__auto___14037)){
args__9304__auto__.push((arguments[i__9298__auto___14038]));

var G__14039 = (i__9298__auto___14038 + (1));
i__9298__auto___14038 = G__14039;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq14036){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14036));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14041 = arguments.length;
var i__9298__auto___14042 = (0);
while(true){
if((i__9298__auto___14042 < len__9297__auto___14041)){
args__9304__auto__.push((arguments[i__9298__auto___14042]));

var G__14043 = (i__9298__auto___14042 + (1));
i__9298__auto___14042 = G__14043;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq14040){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14040));
});

var g_QMARK__14044 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_14045 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__14044){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__14044))
,null));
var mkg_14046 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__14044,g_14045){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__14044,g_14045))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__14044,g_14045,mkg_14046){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__14044).call(null,x);
});})(g_QMARK__14044,g_14045,mkg_14046))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__14044,g_14045,mkg_14046){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_14046).call(null,gfn);
});})(g_QMARK__14044,g_14045,mkg_14046))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__14044,g_14045,mkg_14046){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_14045).call(null,generator);
});})(g_QMARK__14044,g_14045,mkg_14046))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__10568__auto___14065 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__10568__auto___14065){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14066 = arguments.length;
var i__9298__auto___14067 = (0);
while(true){
if((i__9298__auto___14067 < len__9297__auto___14066)){
args__9304__auto__.push((arguments[i__9298__auto___14067]));

var G__14068 = (i__9298__auto___14067 + (1));
i__9298__auto___14067 = G__14068;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10568__auto___14065))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10568__auto___14065){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10568__auto___14065),args);
});})(g__10568__auto___14065))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__10568__auto___14065){
return (function (seq14047){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14047));
});})(g__10568__auto___14065))
;


var g__10568__auto___14069 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__10568__auto___14069){
return (function cljs$spec$impl$gen$list(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14070 = arguments.length;
var i__9298__auto___14071 = (0);
while(true){
if((i__9298__auto___14071 < len__9297__auto___14070)){
args__9304__auto__.push((arguments[i__9298__auto___14071]));

var G__14072 = (i__9298__auto___14071 + (1));
i__9298__auto___14071 = G__14072;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10568__auto___14069))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10568__auto___14069){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10568__auto___14069),args);
});})(g__10568__auto___14069))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__10568__auto___14069){
return (function (seq14048){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14048));
});})(g__10568__auto___14069))
;


var g__10568__auto___14073 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__10568__auto___14073){
return (function cljs$spec$impl$gen$map(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14074 = arguments.length;
var i__9298__auto___14075 = (0);
while(true){
if((i__9298__auto___14075 < len__9297__auto___14074)){
args__9304__auto__.push((arguments[i__9298__auto___14075]));

var G__14076 = (i__9298__auto___14075 + (1));
i__9298__auto___14075 = G__14076;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10568__auto___14073))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10568__auto___14073){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10568__auto___14073),args);
});})(g__10568__auto___14073))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__10568__auto___14073){
return (function (seq14049){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14049));
});})(g__10568__auto___14073))
;


var g__10568__auto___14077 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__10568__auto___14077){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14078 = arguments.length;
var i__9298__auto___14079 = (0);
while(true){
if((i__9298__auto___14079 < len__9297__auto___14078)){
args__9304__auto__.push((arguments[i__9298__auto___14079]));

var G__14080 = (i__9298__auto___14079 + (1));
i__9298__auto___14079 = G__14080;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10568__auto___14077))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10568__auto___14077){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10568__auto___14077),args);
});})(g__10568__auto___14077))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__10568__auto___14077){
return (function (seq14050){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14050));
});})(g__10568__auto___14077))
;


var g__10568__auto___14081 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__10568__auto___14081){
return (function cljs$spec$impl$gen$set(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14082 = arguments.length;
var i__9298__auto___14083 = (0);
while(true){
if((i__9298__auto___14083 < len__9297__auto___14082)){
args__9304__auto__.push((arguments[i__9298__auto___14083]));

var G__14084 = (i__9298__auto___14083 + (1));
i__9298__auto___14083 = G__14084;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10568__auto___14081))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10568__auto___14081){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10568__auto___14081),args);
});})(g__10568__auto___14081))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__10568__auto___14081){
return (function (seq14051){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14051));
});})(g__10568__auto___14081))
;


var g__10568__auto___14085 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__10568__auto___14085){
return (function cljs$spec$impl$gen$vector(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14086 = arguments.length;
var i__9298__auto___14087 = (0);
while(true){
if((i__9298__auto___14087 < len__9297__auto___14086)){
args__9304__auto__.push((arguments[i__9298__auto___14087]));

var G__14088 = (i__9298__auto___14087 + (1));
i__9298__auto___14087 = G__14088;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10568__auto___14085))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10568__auto___14085){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10568__auto___14085),args);
});})(g__10568__auto___14085))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__10568__auto___14085){
return (function (seq14052){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14052));
});})(g__10568__auto___14085))
;


var g__10568__auto___14089 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__10568__auto___14089){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14090 = arguments.length;
var i__9298__auto___14091 = (0);
while(true){
if((i__9298__auto___14091 < len__9297__auto___14090)){
args__9304__auto__.push((arguments[i__9298__auto___14091]));

var G__14092 = (i__9298__auto___14091 + (1));
i__9298__auto___14091 = G__14092;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10568__auto___14089))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10568__auto___14089){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10568__auto___14089),args);
});})(g__10568__auto___14089))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__10568__auto___14089){
return (function (seq14053){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14053));
});})(g__10568__auto___14089))
;


var g__10568__auto___14093 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__10568__auto___14093){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14094 = arguments.length;
var i__9298__auto___14095 = (0);
while(true){
if((i__9298__auto___14095 < len__9297__auto___14094)){
args__9304__auto__.push((arguments[i__9298__auto___14095]));

var G__14096 = (i__9298__auto___14095 + (1));
i__9298__auto___14095 = G__14096;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10568__auto___14093))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10568__auto___14093){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10568__auto___14093),args);
});})(g__10568__auto___14093))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__10568__auto___14093){
return (function (seq14054){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14054));
});})(g__10568__auto___14093))
;


var g__10568__auto___14097 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__10568__auto___14097){
return (function cljs$spec$impl$gen$elements(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14098 = arguments.length;
var i__9298__auto___14099 = (0);
while(true){
if((i__9298__auto___14099 < len__9297__auto___14098)){
args__9304__auto__.push((arguments[i__9298__auto___14099]));

var G__14100 = (i__9298__auto___14099 + (1));
i__9298__auto___14099 = G__14100;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10568__auto___14097))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10568__auto___14097){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10568__auto___14097),args);
});})(g__10568__auto___14097))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__10568__auto___14097){
return (function (seq14055){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14055));
});})(g__10568__auto___14097))
;


var g__10568__auto___14101 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__10568__auto___14101){
return (function cljs$spec$impl$gen$bind(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14102 = arguments.length;
var i__9298__auto___14103 = (0);
while(true){
if((i__9298__auto___14103 < len__9297__auto___14102)){
args__9304__auto__.push((arguments[i__9298__auto___14103]));

var G__14104 = (i__9298__auto___14103 + (1));
i__9298__auto___14103 = G__14104;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10568__auto___14101))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10568__auto___14101){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10568__auto___14101),args);
});})(g__10568__auto___14101))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__10568__auto___14101){
return (function (seq14056){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14056));
});})(g__10568__auto___14101))
;


var g__10568__auto___14105 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__10568__auto___14105){
return (function cljs$spec$impl$gen$choose(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14106 = arguments.length;
var i__9298__auto___14107 = (0);
while(true){
if((i__9298__auto___14107 < len__9297__auto___14106)){
args__9304__auto__.push((arguments[i__9298__auto___14107]));

var G__14108 = (i__9298__auto___14107 + (1));
i__9298__auto___14107 = G__14108;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10568__auto___14105))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10568__auto___14105){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10568__auto___14105),args);
});})(g__10568__auto___14105))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__10568__auto___14105){
return (function (seq14057){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14057));
});})(g__10568__auto___14105))
;


var g__10568__auto___14109 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__10568__auto___14109){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14110 = arguments.length;
var i__9298__auto___14111 = (0);
while(true){
if((i__9298__auto___14111 < len__9297__auto___14110)){
args__9304__auto__.push((arguments[i__9298__auto___14111]));

var G__14112 = (i__9298__auto___14111 + (1));
i__9298__auto___14111 = G__14112;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10568__auto___14109))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10568__auto___14109){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10568__auto___14109),args);
});})(g__10568__auto___14109))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__10568__auto___14109){
return (function (seq14058){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14058));
});})(g__10568__auto___14109))
;


var g__10568__auto___14113 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__10568__auto___14113){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14114 = arguments.length;
var i__9298__auto___14115 = (0);
while(true){
if((i__9298__auto___14115 < len__9297__auto___14114)){
args__9304__auto__.push((arguments[i__9298__auto___14115]));

var G__14116 = (i__9298__auto___14115 + (1));
i__9298__auto___14115 = G__14116;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10568__auto___14113))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10568__auto___14113){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10568__auto___14113),args);
});})(g__10568__auto___14113))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__10568__auto___14113){
return (function (seq14059){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14059));
});})(g__10568__auto___14113))
;


var g__10568__auto___14117 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__10568__auto___14117){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14118 = arguments.length;
var i__9298__auto___14119 = (0);
while(true){
if((i__9298__auto___14119 < len__9297__auto___14118)){
args__9304__auto__.push((arguments[i__9298__auto___14119]));

var G__14120 = (i__9298__auto___14119 + (1));
i__9298__auto___14119 = G__14120;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10568__auto___14117))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10568__auto___14117){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10568__auto___14117),args);
});})(g__10568__auto___14117))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__10568__auto___14117){
return (function (seq14060){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14060));
});})(g__10568__auto___14117))
;


var g__10568__auto___14121 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__10568__auto___14121){
return (function cljs$spec$impl$gen$sample(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14122 = arguments.length;
var i__9298__auto___14123 = (0);
while(true){
if((i__9298__auto___14123 < len__9297__auto___14122)){
args__9304__auto__.push((arguments[i__9298__auto___14123]));

var G__14124 = (i__9298__auto___14123 + (1));
i__9298__auto___14123 = G__14124;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10568__auto___14121))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10568__auto___14121){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10568__auto___14121),args);
});})(g__10568__auto___14121))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__10568__auto___14121){
return (function (seq14061){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14061));
});})(g__10568__auto___14121))
;


var g__10568__auto___14125 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__10568__auto___14125){
return (function cljs$spec$impl$gen$return(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14126 = arguments.length;
var i__9298__auto___14127 = (0);
while(true){
if((i__9298__auto___14127 < len__9297__auto___14126)){
args__9304__auto__.push((arguments[i__9298__auto___14127]));

var G__14128 = (i__9298__auto___14127 + (1));
i__9298__auto___14127 = G__14128;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10568__auto___14125))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10568__auto___14125){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10568__auto___14125),args);
});})(g__10568__auto___14125))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__10568__auto___14125){
return (function (seq14062){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14062));
});})(g__10568__auto___14125))
;


var g__10568__auto___14129 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__10568__auto___14129){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14130 = arguments.length;
var i__9298__auto___14131 = (0);
while(true){
if((i__9298__auto___14131 < len__9297__auto___14130)){
args__9304__auto__.push((arguments[i__9298__auto___14131]));

var G__14132 = (i__9298__auto___14131 + (1));
i__9298__auto___14131 = G__14132;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10568__auto___14129))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10568__auto___14129){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10568__auto___14129),args);
});})(g__10568__auto___14129))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__10568__auto___14129){
return (function (seq14063){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14063));
});})(g__10568__auto___14129))
;


var g__10568__auto___14133 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__10568__auto___14133){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14134 = arguments.length;
var i__9298__auto___14135 = (0);
while(true){
if((i__9298__auto___14135 < len__9297__auto___14134)){
args__9304__auto__.push((arguments[i__9298__auto___14135]));

var G__14136 = (i__9298__auto___14135 + (1));
i__9298__auto___14135 = G__14136;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10568__auto___14133))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10568__auto___14133){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10568__auto___14133),args);
});})(g__10568__auto___14133))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__10568__auto___14133){
return (function (seq14064){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14064));
});})(g__10568__auto___14133))
;

var g__10581__auto___14158 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__10581__auto___14158){
return (function cljs$spec$impl$gen$any(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14159 = arguments.length;
var i__9298__auto___14160 = (0);
while(true){
if((i__9298__auto___14160 < len__9297__auto___14159)){
args__9304__auto__.push((arguments[i__9298__auto___14160]));

var G__14161 = (i__9298__auto___14160 + (1));
i__9298__auto___14160 = G__14161;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14158))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14158){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14158);
});})(g__10581__auto___14158))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__10581__auto___14158){
return (function (seq14137){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14137));
});})(g__10581__auto___14158))
;


var g__10581__auto___14162 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__10581__auto___14162){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14163 = arguments.length;
var i__9298__auto___14164 = (0);
while(true){
if((i__9298__auto___14164 < len__9297__auto___14163)){
args__9304__auto__.push((arguments[i__9298__auto___14164]));

var G__14165 = (i__9298__auto___14164 + (1));
i__9298__auto___14164 = G__14165;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14162))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14162){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14162);
});})(g__10581__auto___14162))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__10581__auto___14162){
return (function (seq14138){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14138));
});})(g__10581__auto___14162))
;


var g__10581__auto___14166 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__10581__auto___14166){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14167 = arguments.length;
var i__9298__auto___14168 = (0);
while(true){
if((i__9298__auto___14168 < len__9297__auto___14167)){
args__9304__auto__.push((arguments[i__9298__auto___14168]));

var G__14169 = (i__9298__auto___14168 + (1));
i__9298__auto___14168 = G__14169;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14166))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14166){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14166);
});})(g__10581__auto___14166))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__10581__auto___14166){
return (function (seq14139){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14139));
});})(g__10581__auto___14166))
;


var g__10581__auto___14170 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__10581__auto___14170){
return (function cljs$spec$impl$gen$char(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14171 = arguments.length;
var i__9298__auto___14172 = (0);
while(true){
if((i__9298__auto___14172 < len__9297__auto___14171)){
args__9304__auto__.push((arguments[i__9298__auto___14172]));

var G__14173 = (i__9298__auto___14172 + (1));
i__9298__auto___14172 = G__14173;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14170))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14170){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14170);
});})(g__10581__auto___14170))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__10581__auto___14170){
return (function (seq14140){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14140));
});})(g__10581__auto___14170))
;


var g__10581__auto___14174 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__10581__auto___14174){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14175 = arguments.length;
var i__9298__auto___14176 = (0);
while(true){
if((i__9298__auto___14176 < len__9297__auto___14175)){
args__9304__auto__.push((arguments[i__9298__auto___14176]));

var G__14177 = (i__9298__auto___14176 + (1));
i__9298__auto___14176 = G__14177;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14174))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14174){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14174);
});})(g__10581__auto___14174))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__10581__auto___14174){
return (function (seq14141){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14141));
});})(g__10581__auto___14174))
;


var g__10581__auto___14178 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__10581__auto___14178){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14179 = arguments.length;
var i__9298__auto___14180 = (0);
while(true){
if((i__9298__auto___14180 < len__9297__auto___14179)){
args__9304__auto__.push((arguments[i__9298__auto___14180]));

var G__14181 = (i__9298__auto___14180 + (1));
i__9298__auto___14180 = G__14181;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14178))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14178){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14178);
});})(g__10581__auto___14178))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__10581__auto___14178){
return (function (seq14142){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14142));
});})(g__10581__auto___14178))
;


var g__10581__auto___14182 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__10581__auto___14182){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14183 = arguments.length;
var i__9298__auto___14184 = (0);
while(true){
if((i__9298__auto___14184 < len__9297__auto___14183)){
args__9304__auto__.push((arguments[i__9298__auto___14184]));

var G__14185 = (i__9298__auto___14184 + (1));
i__9298__auto___14184 = G__14185;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14182))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14182){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14182);
});})(g__10581__auto___14182))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__10581__auto___14182){
return (function (seq14143){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14143));
});})(g__10581__auto___14182))
;


var g__10581__auto___14186 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__10581__auto___14186){
return (function cljs$spec$impl$gen$double(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14187 = arguments.length;
var i__9298__auto___14188 = (0);
while(true){
if((i__9298__auto___14188 < len__9297__auto___14187)){
args__9304__auto__.push((arguments[i__9298__auto___14188]));

var G__14189 = (i__9298__auto___14188 + (1));
i__9298__auto___14188 = G__14189;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14186))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14186){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14186);
});})(g__10581__auto___14186))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__10581__auto___14186){
return (function (seq14144){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14144));
});})(g__10581__auto___14186))
;


var g__10581__auto___14190 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__10581__auto___14190){
return (function cljs$spec$impl$gen$int(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14191 = arguments.length;
var i__9298__auto___14192 = (0);
while(true){
if((i__9298__auto___14192 < len__9297__auto___14191)){
args__9304__auto__.push((arguments[i__9298__auto___14192]));

var G__14193 = (i__9298__auto___14192 + (1));
i__9298__auto___14192 = G__14193;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14190))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14190){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14190);
});})(g__10581__auto___14190))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__10581__auto___14190){
return (function (seq14145){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14145));
});})(g__10581__auto___14190))
;


var g__10581__auto___14194 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__10581__auto___14194){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14195 = arguments.length;
var i__9298__auto___14196 = (0);
while(true){
if((i__9298__auto___14196 < len__9297__auto___14195)){
args__9304__auto__.push((arguments[i__9298__auto___14196]));

var G__14197 = (i__9298__auto___14196 + (1));
i__9298__auto___14196 = G__14197;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14194))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14194){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14194);
});})(g__10581__auto___14194))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__10581__auto___14194){
return (function (seq14146){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14146));
});})(g__10581__auto___14194))
;


var g__10581__auto___14198 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__10581__auto___14198){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14199 = arguments.length;
var i__9298__auto___14200 = (0);
while(true){
if((i__9298__auto___14200 < len__9297__auto___14199)){
args__9304__auto__.push((arguments[i__9298__auto___14200]));

var G__14201 = (i__9298__auto___14200 + (1));
i__9298__auto___14200 = G__14201;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14198))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14198){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14198);
});})(g__10581__auto___14198))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__10581__auto___14198){
return (function (seq14147){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14147));
});})(g__10581__auto___14198))
;


var g__10581__auto___14202 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__10581__auto___14202){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14203 = arguments.length;
var i__9298__auto___14204 = (0);
while(true){
if((i__9298__auto___14204 < len__9297__auto___14203)){
args__9304__auto__.push((arguments[i__9298__auto___14204]));

var G__14205 = (i__9298__auto___14204 + (1));
i__9298__auto___14204 = G__14205;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14202))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14202){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14202);
});})(g__10581__auto___14202))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__10581__auto___14202){
return (function (seq14148){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14148));
});})(g__10581__auto___14202))
;


var g__10581__auto___14206 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__10581__auto___14206){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14207 = arguments.length;
var i__9298__auto___14208 = (0);
while(true){
if((i__9298__auto___14208 < len__9297__auto___14207)){
args__9304__auto__.push((arguments[i__9298__auto___14208]));

var G__14209 = (i__9298__auto___14208 + (1));
i__9298__auto___14208 = G__14209;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14206))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14206){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14206);
});})(g__10581__auto___14206))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__10581__auto___14206){
return (function (seq14149){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14149));
});})(g__10581__auto___14206))
;


var g__10581__auto___14210 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__10581__auto___14210){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14211 = arguments.length;
var i__9298__auto___14212 = (0);
while(true){
if((i__9298__auto___14212 < len__9297__auto___14211)){
args__9304__auto__.push((arguments[i__9298__auto___14212]));

var G__14213 = (i__9298__auto___14212 + (1));
i__9298__auto___14212 = G__14213;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14210))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14210){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14210);
});})(g__10581__auto___14210))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__10581__auto___14210){
return (function (seq14150){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14150));
});})(g__10581__auto___14210))
;


var g__10581__auto___14214 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__10581__auto___14214){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14215 = arguments.length;
var i__9298__auto___14216 = (0);
while(true){
if((i__9298__auto___14216 < len__9297__auto___14215)){
args__9304__auto__.push((arguments[i__9298__auto___14216]));

var G__14217 = (i__9298__auto___14216 + (1));
i__9298__auto___14216 = G__14217;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14214))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14214){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14214);
});})(g__10581__auto___14214))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__10581__auto___14214){
return (function (seq14151){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14151));
});})(g__10581__auto___14214))
;


var g__10581__auto___14218 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__10581__auto___14218){
return (function cljs$spec$impl$gen$string(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14219 = arguments.length;
var i__9298__auto___14220 = (0);
while(true){
if((i__9298__auto___14220 < len__9297__auto___14219)){
args__9304__auto__.push((arguments[i__9298__auto___14220]));

var G__14221 = (i__9298__auto___14220 + (1));
i__9298__auto___14220 = G__14221;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14218))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14218){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14218);
});})(g__10581__auto___14218))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__10581__auto___14218){
return (function (seq14152){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14152));
});})(g__10581__auto___14218))
;


var g__10581__auto___14222 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__10581__auto___14222){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14223 = arguments.length;
var i__9298__auto___14224 = (0);
while(true){
if((i__9298__auto___14224 < len__9297__auto___14223)){
args__9304__auto__.push((arguments[i__9298__auto___14224]));

var G__14225 = (i__9298__auto___14224 + (1));
i__9298__auto___14224 = G__14225;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14222))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14222){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14222);
});})(g__10581__auto___14222))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__10581__auto___14222){
return (function (seq14153){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14153));
});})(g__10581__auto___14222))
;


var g__10581__auto___14226 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__10581__auto___14226){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14227 = arguments.length;
var i__9298__auto___14228 = (0);
while(true){
if((i__9298__auto___14228 < len__9297__auto___14227)){
args__9304__auto__.push((arguments[i__9298__auto___14228]));

var G__14229 = (i__9298__auto___14228 + (1));
i__9298__auto___14228 = G__14229;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14226))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14226){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14226);
});})(g__10581__auto___14226))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__10581__auto___14226){
return (function (seq14154){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14154));
});})(g__10581__auto___14226))
;


var g__10581__auto___14230 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__10581__auto___14230){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14231 = arguments.length;
var i__9298__auto___14232 = (0);
while(true){
if((i__9298__auto___14232 < len__9297__auto___14231)){
args__9304__auto__.push((arguments[i__9298__auto___14232]));

var G__14233 = (i__9298__auto___14232 + (1));
i__9298__auto___14232 = G__14233;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14230))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14230){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14230);
});})(g__10581__auto___14230))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__10581__auto___14230){
return (function (seq14155){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14155));
});})(g__10581__auto___14230))
;


var g__10581__auto___14234 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__10581__auto___14234){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14235 = arguments.length;
var i__9298__auto___14236 = (0);
while(true){
if((i__9298__auto___14236 < len__9297__auto___14235)){
args__9304__auto__.push((arguments[i__9298__auto___14236]));

var G__14237 = (i__9298__auto___14236 + (1));
i__9298__auto___14236 = G__14237;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14234))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14234){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14234);
});})(g__10581__auto___14234))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__10581__auto___14234){
return (function (seq14156){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14156));
});})(g__10581__auto___14234))
;


var g__10581__auto___14238 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__10581__auto___14238){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14239 = arguments.length;
var i__9298__auto___14240 = (0);
while(true){
if((i__9298__auto___14240 < len__9297__auto___14239)){
args__9304__auto__.push((arguments[i__9298__auto___14240]));

var G__14241 = (i__9298__auto___14240 + (1));
i__9298__auto___14240 = G__14241;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});})(g__10581__auto___14238))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10581__auto___14238){
return (function (args){
return cljs.core.deref.call(null,g__10581__auto___14238);
});})(g__10581__auto___14238))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__10581__auto___14238){
return (function (seq14157){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14157));
});})(g__10581__auto___14238))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__9304__auto__ = [];
var len__9297__auto___14244 = arguments.length;
var i__9298__auto___14245 = (0);
while(true){
if((i__9298__auto___14245 < len__9297__auto___14244)){
args__9304__auto__.push((arguments[i__9298__auto___14245]));

var G__14246 = (i__9298__auto___14245 + (1));
i__9298__auto___14245 = G__14246;
continue;
} else {
}
break;
}

var argseq__9305__auto__ = ((((0) < args__9304__auto__.length))?(new cljs.core.IndexedSeq(args__9304__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9305__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__14242_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__14242_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq14243){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14243));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__14247_SHARP_){
return (new Date(p1__14247_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map