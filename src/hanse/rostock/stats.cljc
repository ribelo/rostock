(ns hanse.rostock.stats
  (:refer-clojure :exclude [min max])
  (:require
   [net.cgrand.xforms :as x]
   [hanse.halle :as h]
   [hanse.rostock.math :as math])
  (:import (smile.math MathEx)
           (smile.sort QuickSort QuickSelect)
           (smile.data DataFrame)))

(set! *unchecked-math* :warn-on-boxed)

(comment
  (do (def data (vec (repeatedly 100000 #(* 100 (- 0.5 ^double (rand))))))
      (def arr  (double-array data))
      (require '[criterium.core :refer [quick-bench]])
      (require '[taoensso.encore :as e])))

(defn min
  "Smallest element in collection"
  ([] x/min)
  #?(:clj
     (^double [coll]
      (->> (h/seq->double-array coll)
           (MathEx/min)))))

(comment
  (do (quick-bench (into [] (min) data))
      (quick-bench (min arr))
      (quick-bench (min2 arr))))

(defn max
  "Largest element in collection"
  ([]
   x/max)
  #?(:clj
     (^double [coll]
      (->> (h/seq->double-array coll)
           (MathEx/max)))))

(comment
  (do (quick-bench (into [] (max) data))
      (quick-bench (max data))))

(defn mean
  "Average value of collection"
  ([] x/avg)
  #?(:clj
     (^double [coll]
      (->> (h/seq->double-array coll)
           (MathEx/mean)))))

(defn variance
  "Variance of sample"
  ([]
   (x/reduce
    (fn
      ([] #?(:clj (double-array 3)
             :cljs [0.0 0.0 0.0]))
      ([^doubles acc]
       (let [c  (aget acc 0)
             ss (aget acc 2)]
         (when-not (zero? c)
           (let [c (dec c)]
             (if (pos? c)
               (/ ss c) 0)))))
      ([^doubles acc ^double e]
       (if (nil? e)
         acc
         (let [c  (aget acc 0)
               m  (aget acc 1)
               ss (aget acc 2)
               c (inc c)
               m (+ m (/ (- e m) c))]
           (doto acc
             (aset 0 c)
             (aset 1 m)
             (aset 2 (+ ss (* (- e m) (- e m)))))))))))
  #?(:clj
     (^double [coll]
      (->> (h/seq->double-array coll)
           (MathEx/var)))))

(comment
  (do (quick-bench (into [] (variance) data))
      (quick-bench (variance data))))

(defn std
  "Standard deviation of sample"
  ([]
   (x/reduce
    (fn
      ([] #?(:clj (double-array 3)
             :cljs [0.0 0.0 0.0]))
      ([^doubles a]
       (let [s (aget a 0) n (aget a 2)]
         (if (< 1 n)
           (math/sqrt (/ s (dec n)))
           0.0)))
      ([^doubles a ^double x]
       (let [s  (aget a 0) m (aget a 1) n (aget a 2)
             d  (- x m)
             n  (inc n)
             m (+ m (/ d n))]
         (doto a
           (aset 0 (+ s (* d (- x m))))
           (aset 1 m)
           (aset 2 n)))))))
  #?(:clj
     (^double [coll]
      (->> (h/seq->double-array coll)
           (MathEx/sd)))))

(comment
  (do (quick-bench (into [] (std) data))
      (quick-bench (std data))))

(def sd std)

(defn quantile [coll ^double p]
  #?(:clj
     (let [arr (h/seq->double-array-or-copy coll)]
       (QuickSelect/select arr (long (* (double (alength arr)) p))))))

(defn percentile [coll ^double p]
  #?(:clj
     (quantile coll (/ p 100.0))))

(defn q1
  #?(:clj
     (^double [coll]
      (-> (h/seq->double-array-or-copy coll)
          (MathEx/q1)))))

(defn q2
  #?(:clj
     (^double [coll]
      (-> (h/seq->double-array-or-copy coll)
          (MathEx/median)))))

(defn q3
  #?(:clj
     (^double [coll]
      (-> (h/seq->double-array-or-copy coll)
          (MathEx/q3)))))

(defn quartile
  "Quartilies of a sample"
  #?(:clj
     (^clojure.lang.PersistentVector [coll]
      (let [arr (h/seq->double-array coll)]
        [(MathEx/q1 arr) (MathEx/median arr) (MathEx/q3 arr)]))))

(defn iqr
  #?(:clj
     (^double [coll]
      (let [arr (h/seq->double-array coll)]
        (- ^double (MathEx/q3 arr) ^double (MathEx/q1 arr))))))

(defn median
  "Median value of collection"
  ([]
   (comp
    #?(:cljs (x/sort))
    (x/reduce
     #?(:clj
        (fn
          ([] [])
          ([acc] (median acc))
          ([acc x] (conj acc x)))
        :cljs (fn
                ([] [])
                ([acc]
                 (let [c (count acc)
                       idx (math/max 1.0 (math/floor ^double (/ (dec c) 2)))]
                   (if (= (mod (dec c) 2) 0)
                     (double (nth acc idx))
                     (double (/ (+ (nth acc idx) (nth acc' (inc idx))) 2)))))
                ([acc x] (-> acc (conj x))))))))
  #?(:clj
     (^double [coll]
      (let [arr (h/seq->double-array-or-copy coll)
            n ^long (alength arr)]
        (if (even? n)
          (/ (+ ^double (QuickSelect/select arr (dec ^long (/ n 2)))
                ^double (QuickSelect/select arr (/ n 2)))
             2.0)
          (QuickSelect/select arr ^int (/ n 2)))))))

(defn covariance
  "Covariance of sample"
  ([xs]
   (let [xs' (volatile! (seq xs))]
     (x/reduce
      (fn
        ([] #?(:clj (double-array 4)
               :cljs #js [0.0 0.0 0.0 0.0]))
        ([^doubles acc]
         (let [c  (aget acc 0)
               ss (aget acc 3)]
           (when-not (zero? c)
             (let [c (dec c)]
               (if (pos? c)
                 (/ ss c) 0.0)))))
        ([^doubles acc ^double x]
         (let [c  (aget acc 0)
               mx (aget acc 1)
               my (aget acc 2)
               ss (aget acc 3)]
           (if-let [^double y (first @xs')]
             (let [c'  (inc c)
                   mx' (+ mx (/ (- x mx) c'))
                   my' (+ my (/ (- y my) c'))]
               (vswap! xs' next)
               (doto acc
                 (aset 0 c')
                 (aset 1 mx')
                 (aset 2 my')
                 (aset 3 (+ ss (*  (- x mx') (- y my))))))
             (reduced acc))))))))
  #?(:clj
     ([coll1 coll2]
      (let [arr1 (h/seq->double-array coll1)
            arr2 (h/seq->double-array coll2)]
        (MathEx/cov arr1 arr2)))))

(comment
  (do (quick-bench (into [] (covariance data) data))
      (quick-bench (covariance data data))))

(defn correlation
  "Pearsons correlation"
  ([xs]
   (let [xs' (volatile! (seq xs))]
     (x/reduce
      (fn
        ([] (double-array 6))
        ([^doubles acc]
         (let [ssx  (aget acc 3)
               ssy  (aget acc 4)
               ssxy (aget acc 5)
               d    (math/sqrt (* ssx ssy))]
           (when-not (zero? d)
             (/ ssxy d))))
        ([^doubles acc ^double x]
         (let [c    (aget acc 0)
               mx   (aget acc 1)
               my   (aget acc 2)
               ssx  (aget acc 3)
               ssy  (aget acc 4)
               ssxy (aget acc 5)]
           (if-let [^double y (first @xs')]
             (let [c'  (inc c)
                   mx' (+ mx (/ (- x mx) c'))
                   my' (+ my (/ (- y my) c'))]
               (vswap! xs' next)
               (doto acc
                 (aset 0 c')
                 (aset 1 mx')
                 (aset 2 my')
                 (aset 3 (+ ssx  (* (- x mx') (- x mx))))
                 (aset 4 (+ ssy  (* (- y my') (- y my))))
                 (aset 5 (+ ssxy (* (- x mx') (- y my))))))
             (reduced acc))))))))
  #?(:clj
     (^double [coll1 coll2]
      (let [arr1 (h/seq->double-array coll1)
            arr2 (h/seq->double-array coll2)]
        (MathEx/cor arr1 arr2)))))

(comment
  (do (quick-bench (into [] (correlation data) data))
      (quick-bench (correlation data data))))

(defn mae
  ([y-true]
   (let [y-true' (volatile! (seq y-true))]
     (x/reduce
      (fn
        ([] #?(:clj (double-array 2)
               :cljs #js [0.0 0.0]))
        ([[_ ^double mse]] mse)
        ([^doubles acc ^double y2]
         (when-let [^double y1 (first @y-true')]
           (let [c (aget acc 0)
                 mse (aget acc 1)
                 se (math/abs (- y2 y1))
                 c' (inc c)
                 mse' (+ mse (/ (- se mse) c'))]
             (vswap! y-true' next)
             (doto acc
               (aset 0 c')
               (aset 1 mse')))))))))
  ([x-pred y-true]
   (first (into [] (mae y-true) x-pred))))

(comment
  (do (quick-bench (into [] (mae data) (reverse data)))
      (quick-bench (mae data (reverse data)))))

(defn mse
  ([y-true]
   (let [y-true' (volatile! (seq y-true))]
     (x/reduce
      (fn
        ([] #?(:clj (double-array 2)
               :cljs #js [0.0 0.0]))
        ([[_ ^double mse]] mse)
        ([^doubles acc ^double y2]
         (when-let [^double y1 (first @y-true')]
           (let [c    (aget acc 0)
                 mse  (aget acc 1)
                 se   (math/sq (- y2 y1))
                 c'   (inc c)
                 mse' (+ mse (/ (- se mse) c'))]
             (vswap! y-true' next)
             (doto acc
               (aset 0 c')
               (aset 1 mse')))))))))
  #?(:clj
     ([x-pred y-true]
      (let [pred-arr (h/seq->double-array x-pred)
            true-arr (h/seq->double-array y-true)]
        (smile.validation.MSE/of ^doubles true-arr ^doubles pred-arr)))))

(comment
  (do (quick-bench (into [] (mse data) (reverse  data)))
      (quick-bench (mse arr (reverse data)))))

(defn rmse
  ([y-true]
   (let [y-true' (volatile! (seq y-true))]
     (x/reduce
      (fn
        ([] #?(:clj (double-array 2)
               :cljs #js [0.0 0.0]))
        ([[_ ^double mse]] (math/sqrt mse))
        ([^doubles acc ^double y2]
         (when-let [^double y1 (first @y-true')]
           (let [c    (aget acc 0)
                 mse  (aget acc 1)
                 se   (math/sq (- y2 y1))
                 c'   (inc c)
                 mse' (+ mse (/ (- se mse) c'))]
             (vswap! y-true' next)
             (doto acc
               (aset 0 c')
               (aset 1 mse')))))))))
  #?(:clj
     ([x-pred y-true]
      (let [pred-arr (h/seq->double-array x-pred)
            true-arr (h/seq->double-array y-true)
            mse      (mse ^doubles pred-arr ^doubles true-arr)]
        (smile.validation.RMSE/of true-arr pred-arr)))))

(comment
  (do (quick-bench (into [] (rmse data) (reverse data)))
      (quick-bench (rmse data (reverse data)))))

(defn mad
  "Mean absolute deviation"
  #?(:clj
     (^double [coll]
      (-> (h/seq->double-array coll)
          (double-array)
          (MathEx/mad)))))

(defn transpose
  "Returns the matrix transpose"
  #?(:clj
     ([seq2d]
      (->> (h/seq->double-double-array seq2d)
           (MathEx/transpose)))))

(defn pdist-euclidean
  "Pairwise distance between two sets of observations"
  ([xs]
   (let [xs' (volatile! xs)]
     (x/reduce
      (fn
        ([] 0.0)
        ([acc] (math/sqrt ^double acc))
        ([^double acc ^double x]
         (if-let [[^double y] @xs']
           (do
             (vswap! xs' next)
             (+ acc (double (math/pow ^double (- x y) 2.0))))
           (reduced acc)))))))
  (^doubles [xs1 xs2]
   (let [arr1 (h/seq->double-array xs1)
         arr2 (h/seq->double-array xs2)
         arr2d (h/seq->double-double-array [arr1 arr2])]
     (MathEx/pdist arr2d))))

;; (defn pdist-manhatan ;;TODO
;;   "Pairwise distance between two sets of observations"
;;   [xs]
;;   (let [xs' (volatile! xs)
;;         fn (fn
;;              ([] 0.0)
;;              ([acc] acc)
;;              ([acc x] (if-let [[y] @xs']
;;                         (do
;;                           (vswap! xs' next)
;;                           (+ ^double acc (math/abs ^double (- x y))))
;;                         (reduced acc))))]
;;     (x/reduce fn)))

;; (defn pdist-chebychev ;;TODO
;;   "Pairwise distance between two sets of observations"
;;   [xs]
;;   (let [xs' (volatile! xs)
;;         fn (fn
;;              ([] math/MIN-DOUBLE)
;;              ([acc] acc)
;;              ([acc x] (if-let [[y] @xs']
;;                         (do
;;                           (vswap! xs' next)
;;                           (math/max ^double acc (double (math/abs ^double (- x y)))))
;;                         (reduced acc))))]
;;     (x/reduce fn)))

;; (defn pdist-hamming ;;TODO
;;   "Pairwise distance between two sets of observations"
;;   [xs]
;;   (let [xs' (volatile! xs)
;;         fn (fn
;;              ([] 0.0)
;;              ([acc] acc)
;;              ([acc x] (if-let [[y] @xs']
;;                         (do
;;                           (vswap! xs' next)
;;                           (if (not= x y) (inc acc) acc))
;;                         (reduced acc))))]
;;     (x/reduce fn)))

;; (defn pdist ;;TODO
;;   "Pairwise distance between two sets of observations.
;;    Mode :euclidean, :manhatan, :chebychev, :hamming"
;;   ([xs mode]
;;    (case mode
;;      :euclidean (pdist-euclidean xs)
;;      :manhatan (pdist-manhatan xs)
;;      :chebychev (pdist-chebychev xs)
;;      :hamming (pdist-hamming xs)))
;;   ([xs]
;;    (pdist-euclidean xs)))
