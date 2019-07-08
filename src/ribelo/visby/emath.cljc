(ns ribelo.visby.emath
  (:refer-clojure :exclude [min max])
  (:require
   #?(:clj [uncomplicate.fluokitten.core :as fk])
   #?(:clj [uncomplicate.fluokitten.jvm])
   ;; [criterium.core :refer [quick-bench]]
   [net.cgrand.xforms :as x]
   [ribelo.haag :as h]
   [ribelo.visby.math :as math]))

(comment
  (def data (vec (repeatedly 10000 #(* 100 (- 0.5 (rand))))))
  (def arr (double-array data)))

(defprotocol Emath
  (min [xs] [coll1 coll2])
  (max [xs] [coll1 coll2])
  (add [xs] [coll1 coll2])
  (sub [xs] [coll1 coll2])
  (mul [xs] [coll1 coll2])
  (div [xs] [coll1 coll2]))

(extend-type java.util.Collection
  Emath
  (min
    ([xs]
     (map-indexed (fn [i ^double x] (math/min x  ^double (nth xs i)))))
    ([coll1 coll2]
     #?(:clj  (fk/fmap math/min coll1 coll2)
        :cljs (mapv math/min coll1 coll2))))
  (max
    ([xs]
     (map-indexed (fn [i ^double x] (math/max x  ^double (nth xs i)))))
    ([coll1 coll2]
     #?(:clj  (fk/fmap math/max coll1 coll2)
        :cljs (mapv math/max coll1 coll2))))
  (add
    ([xs]
     (map-indexed (fn [i ^double x] (double (+ x ^double (nth xs i))))))
    ([coll1 coll2]
     #?(:clj  (fk/fmap + coll1 coll2)
        :cljs (mapv + coll1 coll2))))
  (sub
    ([xs]
     (map-indexed (fn [i ^double x] (double (- x ^double (nth xs i))))))
    ([coll1 coll2]
     #?(:clj  (fk/fmap - coll1 coll2)
        :cljs (mapv - coll1 coll2))))
  (mul
    ([xs]
     (map-indexed (fn [i ^double x] (double (* x ^double (nth xs i))))))
    ([coll1 coll2]
     #?(:clj  (fk/fmap * coll1 coll2)
        :cljs (mapv * coll1 coll2))))
  (div
    ([xs]
     (map-indexed (fn [i ^double x] (double (/ x ^double (nth xs i))))))
    ([coll1 coll2]
     #?(:clj  (fk/fmap / coll1 coll2)
        :cljs (mapv / coll1 coll2)))))

#?(:clj
   (extend-type (Class/forName "[D")
     Emath
     (min
       ([coll1 coll2]
        (fk/fmap math/min coll1 coll2)))
     (max
       ([coll1 coll2]
        (fk/fmap math/max coll1 coll2)))
     (add
       ([coll1 coll2]
        (fk/fmap + coll1 coll2)))
     (sub
       ([coll1 coll2]
        (fk/fmap - coll1 coll2)))
     (mul
       ([coll1 coll2]
        (fk/fmap * coll1 coll2)))
     (div
       ([coll1 coll2]
        (fk/fmap / coll1 coll2)))))

#?(:clj
   (extend-type java.lang.Double
     Emath
     (min
       ([^double x]
        (map #(math/min x ^double %)))
       ([^double x coll]
        (fk/fmap #(math/min x ^double %) coll)))
     (max
       ([^double x]
        (map #(math/max x ^double %)))
       ([^double x coll]
        (fk/fmap #(math/max x ^double %) coll)))
     (add
       ([^double x]
        (map #(double (+ x ^double %))))
       ([^double x coll]
        (fk/fmap #(+ x ^double %) coll)))
     (sub
       ([^double x]
        (map #(double (- ^double % x))))
       ([^double x coll]
        (fk/fmap #(- ^double % x) coll)))
     (mul
       ([^double x]
        (map #(double (* x ^double %))))
       ([^double x coll]
        (fk/fmap #(* x ^double %) coll)))
     (div
       ([^double x]
        (map #(double (/ ^double % x))))
       ([^double x coll]
        (fk/fmap #(/ ^double % x) coll)))))

(comment
  (do
    (quick-bench (into [] (min 1.0) data))
    (quick-bench (min 1.0 arr))))

(defn mul*
  ([]
   (map #(* ^double % ^double %)))
  ([coll]
   #?(:clj  (fk/fmap #(* ^double % ^double %) coll)
      :cljs (vmap #(* ^double % ^double %) coll))))

(defn abs
  ([]
   (map math/abs))
  ([coll]
   #?(:clj  (fk/fmap math/abs coll)
      :cljs (vmap math/abs coll))))

(defn sign
  ([] (map math/sign))
  ([coll]
   #?(:clj  (fk/fmap math/sign coll)
      :cljs (vmap math/sign coll))))

(defn sqrt
  ([] (map math/sqrt))
  ([coll]
   #?(:clj  (fk/fmap math/sqrt coll)
      :cljs (vmap math/sqrt coll))))

(defn log
  ([] (map math/log))
  ([coll]
   #?(:clj  (fk/fmap math/log coll)
      :cljs (vmap math/log coll))))

(defn sin
  ([] (map math/sin))
  ([coll]
   #?(:clj  (fk/fmap math/sin coll)
      :cljs (vmap math/sin coll))))

(defn cos
  ([] (map math/cos))
  ([coll]
   #?(:clj  (fk/fmap math/cos coll)
      :cljs (vmap math/cos coll))))

(defn ceil
  ([] (map math/ceil))
  ([coll]
   #?(:clj  (fk/fmap math/ceil coll)
      :cljs (vmap math/ceil coll))))

(defn floor
  ([] (map math/floor))
  ([coll]
   #?(:clj  (fk/fmap math/floor coll)
      :cljs (vmap math/floor coll))))

(defn pow
  ([^double n] (map #(math/pow % n)))
  ([^double n coll]
   #?(:clj  (fk/fmap #(math/pow % n) coll)
      :cljs (vmap #(math/pow % n) coll))))

(defn exp
  ([] (map math/exp))
  ([coll]
   #?(:clj  (fk/fmap math/exp coll)
      :cljs (vmap math/exp coll))))

(defn cumsum
  "Cumulative mean deviation"
  ([] (comp (x/reductions +) (drop 1)))
  ([coll]
   #?(:clj
      (let [arr (h/seq->double-array coll)]
        (h/reductions arr +))
      :cljs
      (vec (reductions + coll)))))

(defn cummax ;;TODO
  "Cumulative max"
  ([]
   (fn [rf]
     (let [m (volatile! math/MIN-DOUBLE)]
       (fn
         ([] (rf))
         ([acc] (rf acc))
         ([acc x]
          (let [m' (math/max x @m)]
            (vreset! m m')
            (rf acc m')))))))
  ([coll]
   #?(:clj
      (let [arr (h/seq->double-array coll)]
        (h/reductions arr math/max)))))

(defn cummin ;;TODO
  "Cumulative min"
  ([]
   (fn [rf]
     (let [m (volatile! math/MAX-DOUBLE)]
       (fn
         ([] (rf))
         ([acc] (rf acc))
         ([acc x]
          (let [m' (math/min x @m)]
            (vreset! m m')
            (rf acc m')))))))
  ([coll]
   #?(:clj
      (let [arr (h/seq->double-array coll)]
        (h/reductions arr math/min)))))

(defn cumprod ;;TODO
  "Cumulative product"
  ([] (comp (x/reductions *) (drop 1)))
  ([coll]
   #?(:clj
      (let [arr (h/seq->double-array coll)]
        (h/reductions arr *)))))

(defn cumdev ;;TODO
  "Cumulative mean deviation"
  ([]
   (comp
    (x/transjuxt [(x/into []) x/avg])
    (x/reduce
     (fn
       ([] (transient []))
       ([[xs m :as acc]]
        (sequence (comp (sub m) cumsum) xs))
       ([acc [xs m]] (-> acc (conj! xs) (conj! m)))))
    (mapcat identity))))
