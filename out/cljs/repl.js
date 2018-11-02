// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13100){
var map__13125 = p__13100;
var map__13125__$1 = ((((!((map__13125 == null)))?((((map__13125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13125):map__13125);
var m = map__13125__$1;
var n = cljs.core.get.call(null,map__13125__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13125__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13127_13149 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13128_13150 = null;
var count__13129_13151 = (0);
var i__13130_13152 = (0);
while(true){
if((i__13130_13152 < count__13129_13151)){
var f_13153 = cljs.core._nth.call(null,chunk__13128_13150,i__13130_13152);
cljs.core.println.call(null,"  ",f_13153);

var G__13154 = seq__13127_13149;
var G__13155 = chunk__13128_13150;
var G__13156 = count__13129_13151;
var G__13157 = (i__13130_13152 + (1));
seq__13127_13149 = G__13154;
chunk__13128_13150 = G__13155;
count__13129_13151 = G__13156;
i__13130_13152 = G__13157;
continue;
} else {
var temp__4657__auto___13158 = cljs.core.seq.call(null,seq__13127_13149);
if(temp__4657__auto___13158){
var seq__13127_13159__$1 = temp__4657__auto___13158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13127_13159__$1)){
var c__9003__auto___13160 = cljs.core.chunk_first.call(null,seq__13127_13159__$1);
var G__13161 = cljs.core.chunk_rest.call(null,seq__13127_13159__$1);
var G__13162 = c__9003__auto___13160;
var G__13163 = cljs.core.count.call(null,c__9003__auto___13160);
var G__13164 = (0);
seq__13127_13149 = G__13161;
chunk__13128_13150 = G__13162;
count__13129_13151 = G__13163;
i__13130_13152 = G__13164;
continue;
} else {
var f_13165 = cljs.core.first.call(null,seq__13127_13159__$1);
cljs.core.println.call(null,"  ",f_13165);

var G__13166 = cljs.core.next.call(null,seq__13127_13159__$1);
var G__13167 = null;
var G__13168 = (0);
var G__13169 = (0);
seq__13127_13149 = G__13166;
chunk__13128_13150 = G__13167;
count__13129_13151 = G__13168;
i__13130_13152 = G__13169;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13170 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__8189__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__8189__auto__)){
return or__8189__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13170);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13170)))?cljs.core.second.call(null,arglists_13170):arglists_13170));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13131_13171 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13132_13172 = null;
var count__13133_13173 = (0);
var i__13134_13174 = (0);
while(true){
if((i__13134_13174 < count__13133_13173)){
var vec__13135_13175 = cljs.core._nth.call(null,chunk__13132_13172,i__13134_13174);
var name_13176 = cljs.core.nth.call(null,vec__13135_13175,(0),null);
var map__13138_13177 = cljs.core.nth.call(null,vec__13135_13175,(1),null);
var map__13138_13178__$1 = ((((!((map__13138_13177 == null)))?((((map__13138_13177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13138_13177.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13138_13177):map__13138_13177);
var doc_13179 = cljs.core.get.call(null,map__13138_13178__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13180 = cljs.core.get.call(null,map__13138_13178__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13176);

cljs.core.println.call(null," ",arglists_13180);

if(cljs.core.truth_(doc_13179)){
cljs.core.println.call(null," ",doc_13179);
} else {
}

var G__13181 = seq__13131_13171;
var G__13182 = chunk__13132_13172;
var G__13183 = count__13133_13173;
var G__13184 = (i__13134_13174 + (1));
seq__13131_13171 = G__13181;
chunk__13132_13172 = G__13182;
count__13133_13173 = G__13183;
i__13134_13174 = G__13184;
continue;
} else {
var temp__4657__auto___13185 = cljs.core.seq.call(null,seq__13131_13171);
if(temp__4657__auto___13185){
var seq__13131_13186__$1 = temp__4657__auto___13185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13131_13186__$1)){
var c__9003__auto___13187 = cljs.core.chunk_first.call(null,seq__13131_13186__$1);
var G__13188 = cljs.core.chunk_rest.call(null,seq__13131_13186__$1);
var G__13189 = c__9003__auto___13187;
var G__13190 = cljs.core.count.call(null,c__9003__auto___13187);
var G__13191 = (0);
seq__13131_13171 = G__13188;
chunk__13132_13172 = G__13189;
count__13133_13173 = G__13190;
i__13134_13174 = G__13191;
continue;
} else {
var vec__13140_13192 = cljs.core.first.call(null,seq__13131_13186__$1);
var name_13193 = cljs.core.nth.call(null,vec__13140_13192,(0),null);
var map__13143_13194 = cljs.core.nth.call(null,vec__13140_13192,(1),null);
var map__13143_13195__$1 = ((((!((map__13143_13194 == null)))?((((map__13143_13194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13143_13194.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13143_13194):map__13143_13194);
var doc_13196 = cljs.core.get.call(null,map__13143_13195__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13197 = cljs.core.get.call(null,map__13143_13195__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13193);

cljs.core.println.call(null," ",arglists_13197);

if(cljs.core.truth_(doc_13196)){
cljs.core.println.call(null," ",doc_13196);
} else {
}

var G__13198 = cljs.core.next.call(null,seq__13131_13186__$1);
var G__13199 = null;
var G__13200 = (0);
var G__13201 = (0);
seq__13131_13171 = G__13198;
chunk__13132_13172 = G__13199;
count__13133_13173 = G__13200;
i__13134_13174 = G__13201;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__13145 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13146 = null;
var count__13147 = (0);
var i__13148 = (0);
while(true){
if((i__13148 < count__13147)){
var role = cljs.core._nth.call(null,chunk__13146,i__13148);
var temp__4657__auto___13202__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13202__$1)){
var spec_13203 = temp__4657__auto___13202__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_13203));
} else {
}

var G__13204 = seq__13145;
var G__13205 = chunk__13146;
var G__13206 = count__13147;
var G__13207 = (i__13148 + (1));
seq__13145 = G__13204;
chunk__13146 = G__13205;
count__13147 = G__13206;
i__13148 = G__13207;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__13145);
if(temp__4657__auto____$1){
var seq__13145__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13145__$1)){
var c__9003__auto__ = cljs.core.chunk_first.call(null,seq__13145__$1);
var G__13208 = cljs.core.chunk_rest.call(null,seq__13145__$1);
var G__13209 = c__9003__auto__;
var G__13210 = cljs.core.count.call(null,c__9003__auto__);
var G__13211 = (0);
seq__13145 = G__13208;
chunk__13146 = G__13209;
count__13147 = G__13210;
i__13148 = G__13211;
continue;
} else {
var role = cljs.core.first.call(null,seq__13145__$1);
var temp__4657__auto___13212__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13212__$2)){
var spec_13213 = temp__4657__auto___13212__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_13213));
} else {
}

var G__13214 = cljs.core.next.call(null,seq__13145__$1);
var G__13215 = null;
var G__13216 = (0);
var G__13217 = (0);
seq__13145 = G__13214;
chunk__13146 = G__13215;
count__13147 = G__13216;
i__13148 = G__13217;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map