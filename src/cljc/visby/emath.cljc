(ns visby.emath
  (:refer-clojure :exclude [min max])
  (:require [net.cgrand.xforms :as x]
            [visby.math :as math]))


(defmulti min class)

(defmethod min java.util.Collection [xs]
  (map-indexed (fn [i x] (math/min x (nth xs i)))))

(defmethod min Number [x]
  (map #(math/min % x)))


(defmulti max class)

(defmethod max java.util.Collection [xs]
  (map-indexed (fn [i x] (math/max x (nth xs i)))))

(defmethod max Number [x]
  (map #(math/max % x)))


(def abs (map math/abs))


(def sign
  (map math/sign))


(def sqrt
  (map math/sqrt))


(def log
  (map math/log))


(def sin
  (map math/sin))


(def cos
  (map math/cos))


(def ceil
  (map math/ceil))


(def floor
  (map math/floor))


(defn pow [n]
  (map #(math/pow % n)))


(def exp
  (map math/exp))


(defmulti add class)

(defmethod add java.util.Collection [xs]
  (map-indexed (fn [i x] (double (+ x (nth xs i))))))

(defmethod add Number [x]
  (map #(double (+ % x))))


(defmulti sub class)

(defmethod sub java.util.Collection [xs]
  (map-indexed (fn [i x] (double (- x (nth xs i))))))

(defmethod sub Number [x]
  (map #(double (- % x))))


(defmulti mul class)

(defmethod mul java.util.Collection [xs]
  (map-indexed (fn [i x] (double (* x (nth xs i))))))

(defmethod mul Number [x]
  (map #(double (* % x))))

(def mul* (map #(double (* % %))))


(defmulti div class)

(defmethod div java.util.Collection [xs]
  (map-indexed (fn [i x] (double (/ x (nth xs i))))))

(defmethod div Number [x]
  (map #(double (/ % x))))


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