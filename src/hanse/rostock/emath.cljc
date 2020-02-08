(ns hanse.rostock.emath
  (:refer-clojure :exclude [min max])
  (:require
   [net.cgrand.xforms :as x]
   [uncomplicate.fluokitten.jvm]
   [uncomplicate.fluokitten.core :as fk]
   [hanse.halle :as h]
   [hanse.rostock.math :as math]))

(comment
  (do (def data (vec (repeatedly 10000 #(* 100 (- 0.5 ^double (rand))))))
      (def arr (double-array data))
      (require '[criterium.core :refer [quick-bench]])))

(set! *unchecked-math* :warn-on-boxed)

(defprotocol Emath
  (min [xs] [xs ys])
  (max [xs] [xs ys])
  (add [xs] [xs ys])
  (sub [xs] [xs ys])
  (mul [xs] [xs ys])
  (div [xs] [xs ys])
  (dot [xs ys]))

#?(:clj
   (extend-type java.util.Collection
     Emath
     (min
       ([xs]
        (map-indexed (fn [i ^double x] (math/min x ^double (nth xs i)))))
       ([xs ys]
        #?(:clj  (fk/fmap math/min xs ys)
           :cljs (mapv math/min xs ys))))
     (max
       ([xs]
        (map-indexed (fn [i ^double x] (math/max x ^double (nth xs i)))))
       ([xs ys]
        #?(:clj  (fk/fmap math/max xs ys)
           :cljs (mapv math/max xs ys))))
     (add
       ([xs]
        (map-indexed (fn [i ^double x] (double (+ x ^double (nth xs i))))))
       ([xs ys]
        #?(:clj  (fk/fmap + xs ys)
           :cljs (mapv + xs ys))))
     (sub
       ([xs]
        (map-indexed (fn [i ^double x] (double (- x ^double (nth xs i))))))
       ([xs ys]
        #?(:clj  (fk/fmap - xs ys)
           :cljs (mapv - xs ys))))
     (mul
       ([xs]
        (map-indexed (fn [i ^double x] (double (* x ^double (nth xs i))))))
       ([xs ys]
        #?(:clj  (fk/fmap * xs ys)
           :cljs (mapv * xs ys))))
     (div
       ([xs]
        (map-indexed (fn [i ^double x] (double (/ x ^double (nth xs i))))))
       ([xs ys]
        #?(:clj  (fk/fmap / xs ys)
           :cljs (mapv / xs ys))))
     (dot [xs ys]
       #?(:clj (fk/foldmap (fn [^double x ^double y] (+ x y))
                           0.0
                           (fn [^double x ^double y] (* x y))
                           xs ys)
          :cljs (reduce + (mapv * arr arr))))))

#?(:clj
   (extend-type (Class/forName "[D")
     Emath
     (min
       ([xs ys]
        (fk/fmap math/min xs ys)))
     (max
       ([xs ys]
        (fk/fmap math/max xs ys)))
     (add
       ([xs ys]
        (fk/fmap + xs ys)))
     (sub
       ([xs ys]
        (fk/fmap - xs ys)))
     (mul
       ([xs ys]
        (fk/fmap * xs ys)))
     (div
       ([xs ys]
        (fk/fmap / xs ys)))
     (dot [xs ys]
       (fk/foldmap (fn [^double x ^double y] (+ x y))
                   0.0
                   (fn [^double x ^double y] (* x y))
                   xs ys))))

#?(:clj
   (extend-type java.lang.Double
     Emath
     (min
       ([x]
        (map #(Math/min ^double x ^double %)))
       ([x coll]
        (fk/fmap #(Math/min ^double x ^double %) coll)))
     (max
       ([x]
        (map #(Math/max ^double x ^double %)))
       ([x coll]
        (fk/fmap #(Math/max ^double x ^double %) coll)))
     (add
       ([x]
        (map #(+ ^double x ^double %)))
       ([x coll]
        (fk/fmap #(+ ^double x ^double %) coll)))
     (sub
       ([x]
        (map #(- ^double % ^double x)))
       ([x coll]
        (fk/fmap #(- ^double % ^double x) coll)))
     (mul
       ([x]
        (map #(* ^double x ^double %)))
       ([x coll]
        (fk/fmap #(* ^double x ^double %) coll)))
     (div
       ([x]
        (map #(/ ^double % ^double x)))
       ([x coll]
        (fk/fmap #(/ ^double % ^double x) coll)))))

(defn mul*
  ([]
   (map #(* ^double % ^double %)))
  ([coll]
   #?(:clj  (fk/fmap #(* ^double % ^double %) coll)
      :cljs (mapv #(* ^double % ^double %) coll))))

(defn abs
  ([]
   (map math/abs))
  ([xs]
   #?(:clj  (fk/fmap math/abs xs)
      :cljs (mapv math/abs xs))))

(defn sign
  ([] (map math/sign))
  ([xs]
   #?(:clj  (fk/fmap math/sign xs)
      :cljs (mapv math/sign xs))))

(defn sqrt
  ([] (map math/sqrt))
  ([xs]
   #?(:clj  (fk/fmap math/sqrt xs)
      :cljs (mapv math/sqrt xs))))

(defn log
  ([] (map math/log))
  ([xs]
   #?(:clj  (fk/fmap math/log xs)
      :cljs (mapv math/log xs))))

(defn sin
  ([] (map math/sin))
  ([xs]
   #?(:clj  (fk/fmap math/sin xs)
      :cljs (mapv math/sin xs))))

(defn cos
  ([] (map math/cos))
  ([xs]
   #?(:clj  (fk/fmap math/cos xs)
      :cljs (mapv math/cos xs))))

(defn ceil
  ([] (map math/ceil))
  ([xs]
   #?(:clj  (fk/fmap math/ceil xs)
      :cljs (mapv math/ceil xs))))

(defn floor
  ([] (map math/floor))
  ([xs]
   #?(:clj  (fk/fmap math/floor xs)
      :cljs (mapv math/floor xs))))

(defn pow
  ([^double n] (map #(math/pow % n)))
  ([^double n xs]
   #?(:clj  (fk/fmap #(math/pow % n) xs)
      :cljs (mapv #(math/pow % n) xs))))

(defn exp
  ([] (map math/exp))
  ([xs]
   #?(:clj  (fk/fmap math/exp xs)
      :cljs (mapv math/exp xs))))

(defn cumsum
  "Cumulative mean deviation"
  ([] (comp (x/reductions +) (drop 1)))
  ([xs]
   #?(:clj
      (let [arr (h/seq->double-array xs)]
        (h/reductions arr +))
      :cljs
      (vec (reductions + xs)))))

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
  ([xs]
   #?(:clj
      (let [arr (h/seq->double-array xs)]
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
  ([xs]
   #?(:clj
      (let [arr (h/seq->double-array xs)]
        (h/reductions arr math/min)))))

(defn cumprod ;;TODO
  "Cumulative product"
  ([] (comp (x/reductions *) (drop 1)))
  ([xs]
   #?(:clj
      (let [arr (h/seq->double-array xs)]
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
