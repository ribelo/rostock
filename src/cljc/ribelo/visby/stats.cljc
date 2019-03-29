(ns ribelo.visby.stats
  (:refer-clojure :exclude [min max])
  (:require [net.cgrand.xforms :as x]
            [ribelo.visby.math :as math]
            [ribelo.visby.emath :as emath]))


(def min x/min)


(def max x/max)


(def mean x/avg)


(def std-s
  (x/reduce
    (fn
      ([] (double-array 3))
      ([^doubles a]
       (let [s (aget a 0) n (aget a 2)]
         (if (< 1 n)
           (math/sqrt (/ s (dec n)))
           0.0)))
      ([^doubles a x]
       (let [s (aget a 0) m (aget a 1) n (aget a 2)
             d (- x m)
             n (inc n)
             m' (+ m (/ d n))]
         (doto a
           (aset 0 (+ s (* d (- x m'))))
           (aset 1 m')
           (aset 2 n)))))))


(def std-p
  (x/reduce
    (fn
      ([] (double-array 3))
      ([^doubles a]
       (let [s (aget a 0) n (aget a 2)]
         (if (< 1 n)
           (math/sqrt (/ s n))
           0.0)))
      ([^doubles a x]
       (let [s (aget a 0) m (aget a 1) n (aget a 2)
             d (- x m)
             n (inc n)
             m' (+ m (/ d n))]
         (doto a
           (aset 0 (+ s (* d (- x m'))))
           (aset 1 m')
           (aset 2 n)))))))


(def std std-s)


(def median
  (comp
    (x/sort)
    (x/reduce
      (fn
        ([] (transient []))
        ([acc]
         (let [acc' (persistent! acc)
               c (count acc')
               idx (math/max 1.0 (math/floor ^double (/ (dec c) 2)))]
           (if (= (mod (dec c) 2) 0)
             (double (nth acc' idx))
             (double (/ (+ (nth acc' idx) (nth acc' (inc idx))) 2)))))
        ([acc x] (-> acc (conj! x)))))))


(defn quantile [p]
  (comp
    (x/sort)
    (x/reduce
      (fn
        ([] (transient []))
        ([acc] (let [acc' (persistent! acc)
                     mn (apply clojure.core/min acc')
                     mx (apply clojure.core/max acc')
                     c (count acc')
                     pic (* p (inc c))
                     k (int pic)
                     d (- pic k)
                     ndk (if (zero? k) mn (nth acc' (dec k)))]
                 (cond
                   (zero? k) mn
                   (= c (dec k)) mx
                   (= c k) mx
                   :else (+ ndk (* d (- (nth acc' k) ndk))))))
        ([xs x] (conj! xs x))))))


(defn percentile [p] (quantile (double (/ p 100))))


(def quartile
  (comp (x/sort)
        (x/transjuxt [(quantile 0.25) (quantile 0.5) (quantile 0.75)])))


(def iqr
  "Return the interquartile (Q3 - Q1 quartiles)"
  (comp (x/sort)
        (x/transjuxt [(quantile 0.25) (quantile 0.75)])
        (x/reduce
          (fn
            ([] nil)
            ([^doubles acc] (- (aget acc 1) (aget acc 0)))
            ([_ [^double q1 ^double q3]]
             (let [acc (double-array 2)]
               (doto acc
                 (aset 0 q1)
                 (aset 1 q3))))))))

(def variance-s
  (x/reduce
    (fn
      ([] [0.0 0.0 0.0])
      ([[c m ss]]
       (when-not (zero? c)
         (let [c' (dec c)]
           (if (pos? c')
             (/ ss c') 0))))
      ([[c m ss :as acc] e]
       (if (nil? e)
         acc
         (let [e (double e)
               c' (inc c)
               m' (+ m (/ (- e m) c'))]
           [c' m' (+ ss (* (- e m') (- e m)))]))))))


(def variance-p
  (x/reduce
    (fn
      ([] [0.0 0.0 0.0])
      ([[c m ss]]
       (when-not (zero? c)
         (/ ss c) 0))
      ([[c m ss :as acc] e]
       (if (nil? e)
         acc
         (let [e (double e)
               c' (inc c)
               m' (+ m (/ (- e m) c'))]
           [c' m' (+ ss (* (- e m') (- e m)))]))))))


(def variance variance-s)


(defn covariance-s [xs]
  (let [xs' (volatile! (seq xs))]
    (x/reduce
      (fn
        ([] [0.0 0.0 0.0 0.0])
        ([[c _ _ ss]]
         (when-not (zero? c)
           (let [c' (dec c)]
             (if (pos? c')
               (/ ss c') 0))))
        ([[^double c ^double mx my ss :as acc] x]
         (if-let [[y] @xs']
           (let [c' (inc c)
                 mx' (+ mx (/ (- x mx) c'))
                 my' (+ my (/ (- y my) c'))]
             (vswap! xs' next)
             [c' mx' my'
              (+ ss (* (- x mx') (- y my)))])
           (reduced acc)))))))


(defn covariance-p [xs]
  (let [xs' (volatile! (seq xs))]
    (x/reduce
      (fn
        ([] [0.0 0.0 0.0 0.0])
        ([[c _ _ ss]]
         (when-not (zero? c)
           (/ ss c) 0))
        ([[^double c ^double mx my ss :as acc] x]
         (if-let [[y] @xs']
           (let [c' (inc c)
                 mx' (+ mx (/ (- x mx) c'))
                 my' (+ my (/ (- y my) c'))]
             (vswap! xs' next)
             [c' mx' my'
              (+ ss (* (- x mx') (- y my)))])
           (reduced acc)))))))


(def covariance covariance-s)


(defn correlation [xs]
  (let [xs' (volatile! (seq xs))]
    (x/reduce
      (fn
        ([] [0.0 0.0 0.0 0.0 0.0 0.0])
        ([[c mx my ssx ssy ssxy]]
         (let [d (math/sqrt (* ssx ssy))]
           (when-not (zero? d)
             (/ ssxy d))))
        ([[c mx my ssx ssy ssxy :as acc] x]
         (if-let [[y] @xs']
           (let [x (double x)
                 y (double y)
                 c' (inc c)
                 mx' (+ mx (/ (- x mx) c'))
                 my' (+ my (/ (- y my) c'))]
             (vswap! xs' next)
             [c' mx' my'
              (+ ssx (* (- x mx') (- x mx)))
              (+ ssy (* (- y my') (- y my)))
              (+ ssxy (* (- x mx') (- y my)))])
           (reduced acc)))))))


(defn mae [y-true]
  (let [y-true' (volatile! (seq y-true))]
    (x/reduce
      (fn
        ([] (double-array 2))
        ([[_ mse]]
         mse)
        ([^doubles acc y2]
         (when-let [[y1] @y-true']
           (let [c (aget acc 0)
                 mse (aget acc 1)
                 se (math/abs (- y2 y1))
                 c' (inc c)
                 mse' (+ mse (/ (- se mse) c'))]
             (vswap! y-true' next)
             (doto acc
               (aset 0 c')
               (aset 1 mse')))))))))


(defn mse [y-true]
  (let [y-true' (volatile! (seq y-true))]
    (x/reduce
      (fn
        ([] (double-array 2))
        ([[_ mse]]
         mse)
        ([^doubles acc y2]
         (when-let [[y1] @y-true']
           (let [c (aget acc 0)
                 mse (aget acc 1)
                 se (math/sq (- y2 y1))
                 c' (inc c)
                 mse' (+ mse (/ (- se mse) c'))]
             (vswap! y-true' next)
             (doto acc
               (aset 0 c')
               (aset 1 mse')))))))))


(defn rmse [y-true]
  (let [y-true' (volatile! (seq y-true))]
    (x/reduce
      (fn
        ([] (double-array 2))
        ([[_ mse]]
         (math/sqrt mse))
        ([^doubles acc y2]
         (when-let [[y1] @y-true']
           (let [c (aget acc 0)
                 mse (aget acc 1)
                 se (math/sq (- y2 y1))
                 c' (inc c)
                 mse' (+ mse (/ (- se mse) c'))]
             (vswap! y-true' next)
             (doto acc
               (aset 0 c')
               (aset 1 mse')))))))))


(def skewness-s*
  (fn
    ([] [0.0 0.0 0.0 0.0])
    ([[c _ m2 m3]]
     (let [d (* (math/pow m2 1.5) (- c 2))]
       (when-not (zero? d)
         (/ (* (math/sqrt (dec c)) m3 c) d))))
    ([[^double c ^double m1 ^double m2 ^double m3 :as acc] e]
     (if (nil? e)
       acc
       (let [e (double e)
             c' (inc c)
             d (- e m1)
             dc (/ d c')
             m1' (+ m1 dc)
             m2' (+ m2 (* (math/sq d) (/ c c')))
             m3' (+ m3
                    (/ (* (math/pow d 3) (- c' 1) (- c' 2)) (math/sq c'))
                    (* -3 m2 dc))]
         [c' m1' m2' m3'])))))


(def skewness-s
  (x/reduce skewness-s*))


(def skewness-p
  (x/reduce
    (completing skewness-s*
                (fn [[c _ m2 m3]]
                  (let [d (math/pow m2 1.5)]
                    (when-not (zero? d)
                      (/ (* (math/sqrt c) m3) d)))))))


(def skewness skewness-p)


(def kurtosis
  (x/reduce
    (fn
      ([] [0.0 0.0 0.0 0.0 0.0])
      ([[c _ m2 _ m4]]
       (when-not (or (zero? m2) (< c 4))
         (let [v (/ m2 (dec c))]
           (- (/ (* c (inc c) m4)
                 (* (- c 1) (- c 2) (- c 3) (math/sq v)))
              (/ (* 3 (math/sq (dec c)))
                 (* (- c 2) (- c 3)))))))
      ([[^double c ^double m1 ^double m2 ^double m3 ^double m4 :as acc] e]
       (if (nil? e)
         acc
         (let [e (double e)
               c' (inc c)
               d (- e m1)
               dc (/ d c')
               m1' (+ m1 dc)
               m2' (+ m2 (* (math/sq d) (/ c c')))
               m3' (+ m3
                      (/ (* (math/pow d 3) (- c' 1) (- c' 2)) (math/sq c'))
                      (* -3 m2 dc))
               m4' (+ m4
                      (/ (* (math/pow d 4) (- c' 1) (+ (math/sq c') (* -3 c') 3))
                         (math/pow c' 3))
                      (* 6 m2 (math/sq dc))
                      (* -4 m3 dc))]
           [c' m1' m2' m3' m4']))))))


(def mad
  "Mean absolute deviation"
  (comp (x/transjuxt {:xs (x/into []) :m mean})
        (x/reduce
          (fn
            ([] (transient []))
            ([[xs m]]
             (let [[r] (sequence
                         (comp (emath/sub m)
                               emath/abs
                               mean)
                         xs)]
               r))
            ([acc {:keys [xs m]}] (-> acc (conj! xs) (conj! m)))))))


(def mode
  "Most frequent value in an array of elements"
  (comp (x/by-key identity x/count)
        (x/sort-by last)
        x/last
        (x/reduce
          (fn
            ([] nil)
            ([acc] acc)
            ([acc [e c]] (when e (reduced e)))))))


(defn moment
  "Central moments. First moment is zero, second is variance."
  ([k]
   (comp (x/transjuxt [(x/into []) mean])
         (x/reduce
           (fn
             ([] (transient []))
             ([[xs m]]
              (let [[r] (sequence
                          (comp (emath/sub m)
                                (emath/pow k)
                                mean)
                          xs)]
                r))
             ([acc [xs m]] (-> acc (conj! xs) (conj! m)))))))
  ([] (moment 1.0)))


(defn pdist-euclidean [xs]
  "Pairwise distance between two sets of observations"
  (let [xs' (volatile! xs)]
    (x/reduce
      (fn
        ([] 0.0)
        ([acc] (math/sqrt ^double acc))
        ([acc x] (if-let [[y] @xs']
                   (do
                     (vswap! xs' next)
                     (+ acc (double (math/pow ^double (- x y) 2.0))))
                   (reduced acc)))))))


(defn pdist-manhatan [xs]
  "Pairwise distance between two sets of observations"
  (let [xs' (volatile! xs)
        fn (fn
             ([] 0.0)
             ([acc] acc)
             ([acc x] (if-let [[y] @xs']
                        (do
                          (vswap! xs' next)
                          (+ ^double acc (math/abs ^double (- x y))))
                        (reduced acc))))]
    (x/reduce fn)))


(defn pdist-chebychev [xs]
  "Pairwise distance between two sets of observations"
  (let [xs' (volatile! xs)
        fn (fn
             ([] math/MIN-DOUBLE)
             ([acc] acc)
             ([acc x] (if-let [[y] @xs']
                        (do
                          (vswap! xs' next)
                          (math/max ^double acc (double (math/abs ^double (- x y)))))
                        (reduced acc))))]
    (x/reduce fn)))


(defn pdist-hamming [xs]
  "Pairwise distance between two sets of observations"
  (let [xs' (volatile! xs)
        fn (fn
             ([] 0.0)
             ([acc] acc)
             ([acc x] (if-let [[y] @xs']
                        (do
                          (vswap! xs' next)
                          (if (not= x y) (inc acc) acc))
                        (reduced acc))))]
    (x/reduce fn)))


(defn pdist
  "Pairwise distance between two sets of observations.
   Mode :euclidean, :manhatan, :chebychev, :hamming"
  ([xs mode]
   (case mode
     :euclidean (pdist-euclidean xs)
     :manhatan (pdist-manhatan xs)
     :chebychev (pdist-chebychev xs)
     :hamming (pdist-hamming xs)))
  ([xs]
   (pdist-euclidean xs)))


(def zscore
  "Standardized Z score"
  (comp
    (x/transjuxt [(x/into []) mean std])
    (x/reduce
      (fn
        ([] (transient []))
        ([[xs m s]] (sequence
                      (comp
                        (emath/sub m)
                        (emath/div s)) xs))
        ([acc [xs m s]] (-> acc (conj! xs) (conj! m) (conj! s)))))))


(defn linear-regression
  "Linear regression of Y on X"
  [x]
  (let [[[sy syy]] (sequence
                     (comp (x/transjuxt [(x/reduce +)
                                         (comp (emath/mul*) (x/reduce +))]))
                     x)]
    (comp
      (x/transjuxt {:n   x/count
                    :sx  (x/reduce +)
                    :sxx (comp (emath/mul*) (x/reduce +))
                    :sxy (comp (emath/mul x) (x/reduce +))})
      (x/reduce
        (fn
          ([] (transient []))
          ([[n sx sxx sxy]]
           (let [beta (/ (- (* n sxy) (* sx sy))
                         (- (* n sxx) (* sx sx)))
                 alpha (/ (- sy (* beta sx)) n)
                 f (fn [x] (+ (* x beta) alpha))]
             {:beta beta :alpha alpha :fn f}))
          ([acc {:keys [n sx sxx sxy]}]
           (-> acc (conj! n) (conj! sx) (conj! sxx) (conj! sxy))))))))