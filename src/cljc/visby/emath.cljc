(ns visby.emath
  (:refer-clojure :exclude [min max])
  (:require [net.cgrand.xforms :as x]
            [visby.math :as math]))


(defprotocol Emath
  (min [xs])
  (max [xs])
  (add [xs])
  (sub [xs])
  (mul [xs])
  (div [xs]))


(extend-type java.util.Collection
  Emath
  (min [xs] (map-indexed (fn [i x] (math/min x (nth xs i)))))
  (max [xs] (map-indexed (fn [i x] (math/max x (nth xs i)))))
  (add [xs] (map-indexed (fn [i x] (double (+ x (nth xs i))))))
  (sub [xs] (map-indexed (fn [i x] (double (- x (nth xs i))))))
  (mul [xs] (map-indexed (fn [i x] (double (* x (nth xs i))))))
  (div [xs] (map-indexed (fn [i x] (double (/ x (nth xs i)))))))


(extend-type java.lang.Number
  Emath
  (min [x] (map #(math/min x ^double %)))
  (max [x] (map #(math/max x ^double %)))
  (add [x] (map #(double (+ x ^double %))))
  (sub [x] (map #(double (- x ^double %))))
  (mul [x] (map #(double (* x ^double %))))
  (div [x] (map #(double (/ x ^double %)))))


(defn mul* []
  (map #(* ^double % ^double %)))

;;29.285584 µs


(def abs (map math/abs))


(def sign (map math/sign))


(def sqrt (map math/sqrt))


(def log (map math/log))


(def sin (map math/sin))


(def cos (map math/cos))


(def ceil (map math/ceil))


(def floor (map math/floor))


(defn pow [n] (map #(math/pow % n)))


(def exp (map math/exp))


(def cumsum
  "Cumulative mean deviation"
  (comp (x/reductions +) (drop 1)))


(def cummax
  "Cumulative max"
  (fn [rf]
    (let [m (volatile! math/MIN-DOUBLE)]
      (fn
        ([] (rf))
        ([acc] (rf acc))
        ([acc x]
         (let [m' (math/max x @m)]
           (vreset! m m')
           (rf acc m')))))))


(def cummin
  "Cumulative min"
  (fn [rf]
    (let [m (volatile! math/MAX-DOUBLE)]
      (fn
        ([] (rf))
        ([acc] (rf acc))
        ([acc x]
         (let [m' (math/min x @m)]
           (vreset! m m')
           (rf acc m')))))))


(def cumprod
  "Cumulative product"
  (comp (x/reductions *) (drop 1)))


(def cumdev
  "Cumulative mean deviation"
  (comp
    (x/transjuxt [(x/into []) x/avg])
    (x/reduce
      (fn
        ([] (transient []))
        ([[xs m :as acc]]
         (sequence (comp (sub m) cumsum) xs))
        ([acc [xs m]] (-> acc (conj! xs) (conj! m)))))
    (mapcat identity)))