(ns ribelo.visby.stats
  (:refer-clojure :exclude [min max])
  (:require
   #?(:clj [uncomplicate.fluokitten.core :as fk])
   #?(:clj [uncomplicate.fluokitten.jvm])
   ;; [criterium.core :refer [quick-bench]]
   [net.cgrand.xforms :as x]
   [ribelo.haag :as h]
   [ribelo.visby.math :as math]
   [ribelo.visby.emath :as emath])
  (:import (org.apache.commons.math3.stat StatUtils)
           (org.apache.commons.math3.stat.correlation
            Covariance PearsonsCorrelation)))

(comment
  (do (def data (vec (repeatedly 100000 #(* 100 (- 0.5 (rand))))))
      (def arr  (double-array data))))

(defn min
  "Smallest element in collection"
  ([] x/min)
  #?(:clj
     (^double [coll]
      (->> (h/seq->double-array coll)
           (StatUtils/min)))))

(comment
  (do (quick-bench (into [] (min) data))
      (quick-bench (min data))))

(defn max
  "Largest element in collection"
  ([]
   x/max)
  #?(:clj
     (^double [coll]
      (->> (h/seq->double-array coll)
           (StatUtils/max)))))

(comment
  (do (quick-bench (into [] (max) data))
      (quick-bench (max data))))

(defn mean
  "Average value of collection"
  ([] x/avg)
  #?(:clj
     (^double [coll]
      (->> (h/seq->double-array coll)
           (StatUtils/mean)))))

(defn variance-s
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
           (StatUtils/variance)))))

(comment
  (do (quick-bench (into [] (variance-s) data))
      (quick-bench (variance-s data))))

(defn variance-p
  "Variance of population"
  ([]
   (x/reduce
    (fn
      ([] #?(:clj (double-array 3)
             :cljs [0.0 0.0 0.0]))
      ([^doubles acc]
       (let [c  (aget acc 0)
             ss (aget acc 2)]
         (when-not (zero? c)
           (/ ss c) 0)))
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
           (StatUtils/populationVariance)))))

(comment
  (do (quick-bench (into [] (variance-p) data))
      (quick-bench (variance-p data))))

(def variance
  "Variance of sample"
  variance-s)

(defn std-s
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
      ([^doubles a x]
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
      (let [arr (h/seq->double-array coll)]
        (math/sqrt (variance-s arr))))))

(comment
  (do (quick-bench (into [] (std-s) data))
      (quick-bench (std-s data))))

(defn std-p
  "Standard deviation of population"
  ([]
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
             m (+ m (/ d n))]
         (doto a
           (aset 0 (+ s (* d (- x m))))
           (aset 1 m)
           (aset 2 n)))))))
  #?(:clj
     (^double [coll]
      (let [arr (h/seq->double-array coll)]
        (math/sqrt (variance-p arr))))))

(def std
  "Standard deviation of sample"
  std-s)

(declare percentile)

(defn quantile
  "Quantilie of a sample"
  ([^double p]
   (comp
    #?(:cljs (x/sort))
    (x/reduce
     #?(:clj
        (fn
          ([] [])
          ([acc] (quantile p acc))
          ([acc x] (conj acc x)))
        :cljs
        (let [_min (volatile! math/MAX-DOUBLE)
              _max   (volatile! math/MIN-DOUBLE)]
          (fn
            ([] [])
            ([acc]
             (let [c   (count acc)
                   pic (* p (double (inc c)))
                   k   (int pic)
                   d   (- pic k)
                   ndk (if (zero? k) @_min (nth acc (dec k)))]
               (cond
                 (zero? k)     @_min
                 (= c (dec k)) @_max
                 (= c k)       @_max
                 :else         (+ ndk (* d (- (nth acc k) ndk))))))
            ([xs ^double x]
             (when (< x ^double @_min) (vreset! _min x))
             (when (< ^double @_min x) (vreset! _max x))
             (conj xs x))))))))
  #?(:clj (^double [p coll]
           (-> (h/seq->double-array coll)
               (StatUtils/percentile (* p 100.0))))))

(defn percentile
  "Percentile of a sample"
  ([p]
   (quantile (double (/ p 100))))
  #?(:clj
     (^double [^double p coll]
      (-> (h/seq->double-array coll)
          (StatUtils/percentile p)))))

(defn quartile
  "Quartilies of a sample"
  ([]
   (x/transjuxt [(quantile 0.25) (quantile 0.5) (quantile 0.75)]))
  #?(:clj
     (^clojure.lang.PersistentVector [coll]
      (let [arr (h/seq->double-array coll)]
        [(percentile 25.0 arr) (percentile 50.0 arr) (percentile 75.0 arr)]))))

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
      (->> (h/seq->double-array coll)
           (percentile 50.0)))))

(defn iqr
  "Return the interquartile (Q3 - Q1 quartiles)"
  ([]
   (comp
    #?(:cljs (x/sort))
    #?(:cljs (x/transjuxt [(quantile 0.25) (quantile 0.75)]))
    #?(:cljs
       (x/reduce
        (fn
          ([] nil)
          ([^doubles acc] (- (aget acc 1) (aget acc 0)))
          ([_ [^double q1 ^double q3]]
           (let [acc (double-array 2)]
             (doto acc
               (aset 0 q1)
               (aset 1 q3)))))))
    #?(:clj
       (x/reduce
        (fn
          ([] [])
          ([acc] (- (percentile 75.0 acc) (percentile 25.0 acc)))
          ([acc x] (conj acc x)))))))
  (^double [coll]
   (let [arr (h/seq->double-array coll)]
     (- (percentile 75.0 arr) (percentile 25.0 arr)))))

(defn covariance-s
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
        ([^doubles acc x]
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
                 (aset 3 (+ ss (* (- x mx') (- y my))))))
             (reduced acc))))))))
  ([coll1 coll2]
   (let [arr1 (h/seq->double-array coll1)
         arr2 (h/seq->double-array coll2)]
     (.covariance (Covariance.) arr1 arr2 true))))

(comment
  (do (quick-bench (into [] (covariance-s data) data))
      (quick-bench (covariance-s data data))))

(defn covariance-p
  "Covariance of population"
  ([xs]
   (let [xs' (volatile! (seq xs))]
     (x/reduce
      (fn
        ([] #?(:clj (double-array 4)
               :cljs #js [0.0 0.0 0.0 0.0]))
        ([^doubles acc]
         (let [c  (aget acc 0)
               ss (aget acc 3)]
           (if-not (zero? c)
             (/ ss c) 0.0)))
        ([^doubles acc x]
         (let [c   (aget acc 0)
               mx  (aget acc 1)
               my  (aget acc 2)
               ss  (aget acc 3)]
           (if-let [^double y (first @xs')]
             (let [c'  (inc c)
                   mx' (+ mx (/ (- x mx) c'))
                   my' (+ my (/ (- y my) c'))]
               (vswap! xs' next)
               (doto acc
                 (aset 0 c')
                 (aset 1 mx')
                 (aset 2 my')
                 (aset 3 (+ ss (* (- x mx') (- y my))))))
             (reduced acc))))))))
  ([coll1 coll2]
   (let [arr1 (h/seq->double-array coll1)
         arr2 (h/seq->double-array coll2)]
     (.covariance (Covariance.) arr1 arr2 false))))

(comment
  (do (quick-bench (into [] (covariance-s data) data))
      (quick-bench (covariance-s data data))))

(def covariance covariance-p)

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
  ([coll1 coll2]
   (let [arr1 (h/seq->double-array coll1)
         arr2 (h/seq->double-array coll2)]
     (.correlation (PearsonsCorrelation.) arr1 arr2))))

(comment
  (do (quick-bench (into [] (covariance-s data) data))
      (quick-bench (covariance-s data data))))

(defn mae
  ([y-true]
   (let [y-true' (volatile! (seq y-true))]
     (x/reduce
      (fn
        ([] (double-array 2))
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
  (do (quick-bench (into [] (mae data) data))
      (quick-bench (mae data data))))

(defn mse
  ([y-true]
   (let [y-true' (volatile! (seq y-true))]
     (x/reduce
      (fn
        ([] (double-array 2))
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
  ([x-pred y-true]
   (let [pred-arr (h/seq->double-array x-pred)
         true-arr (h/seq->double-array y-true)]
     (.measure (smile.validation.MSE.) true-arr pred-arr))))

(comment
  (do (quick-bench (into [] (mse data) data))
      (quick-bench (mse data data))))

(defn rmse
  ([y-true]
   (let [y-true' (volatile! (seq y-true))]
     (x/reduce
      (fn
        ([] (double-array 2))
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
  ([x-pred y-true]
   (let [pred-arr (h/seq->double-array x-pred)
         true-arr (h/seq->double-array y-true)
         mse      (mse pred-arr true-arr)]
     (math/sqrt mse))))

(comment
  (do (quick-bench (into [] (rmse data) data))
      (quick-bench (rmse data data))))

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

(defn pdist-euclidean
  "Pairwise distance between two sets of observations"
  [xs]
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

(defn pdist-manhatan
  "Pairwise distance between two sets of observations"
  [xs]
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

(defn pdist-chebychev
  "Pairwise distance between two sets of observations"
  [xs]
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

(defn pdist-hamming
  "Pairwise distance between two sets of observations"
  [xs]
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

(defn ema [n]
  (comp
   (x/take-last n)
   (x/reduce
    (let [a (double (/ 2 (inc n)))]
      (fn
        ([] #?(:clj
               (doto (double-array 3)
                 (aset 2 (double (dec n))))
               :cljs
               [0 0 (dec n)]))
        ([^doubles arr]
         (if-not (= 0.0 (aget arr 1))
           (/ (aget arr 0) (aget arr 1))
           0.0))
        ([^doubles arr ^double x]
         (let [c (aget arr 2)]
           (if-not (= 0.0 c)
             (doto arr
               (aset 0 (+ (aget arr 0) (* x (math/pow (- 1.0 a) c))))
               (aset 1 (+ (aget arr 1) (math/pow (- 1.0 a) c)))
               (aset 2 (dec (aget arr 2))))
             (doto arr
               (aset 0 (+ (aget arr 0) x))
               (aset 1 (+ (aget arr 1) 1.0))
               (aset 2 (dec (aget arr 2))))))))))))
