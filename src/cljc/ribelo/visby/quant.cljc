(ns ribelo.visby.quant
  (:require [clojure.spec.alpha :as s]
            [net.cgrand.xforms :as x]
            [net.cgrand.xforms.rfs :as rf]
            [ribelo.visby.math :as math]
            [ribelo.visby.emath :as emath]
            [ribelo.visby.stats :as stats]))


(defn ann-return-geometric
  ([^long freq]
   (comp
     (x/transjuxt [(comp (emath/add 1.0) (x/reduce *)) x/count])
     (x/reduce
       (fn
         ([] [0.0 0.0])
         ([[x n]] (- (math/pow x (/ freq n)) 1.0))
         ([acc [x n]] [x n])))))
  ([] (ann-return-geometric 252)))


(defn ann-return-simple
  ([^long freq]
   (comp
     stats/mean
     (emath/mul freq)))
  ([] (ann-return-simple 252)))


(defn annualized-return
  "Average annualized returns over a period, convenient when comparing returns.
  It can be an Arithmetic or Geometric (default) average return: if compounded with itself the
  geometric average will be equal to the cumulative return"
  ([^long freq mode]
   (case mode
     :geometric (ann-return-geometric freq)
     :simple (ann-return-simple freq)))
  ([^long freq]
   (annualized-return freq :geometric))
  ([]
   (annualized-return 252 :geometric)))


(defn active-return
  "Asset/Portfolio annualized return minus Benchmark annualized return"
  ([xs freq mode]
   (let [xs' (sequence (annualized-return freq mode) xs)]
     (comp
       (annualized-return freq mode)
       (emath/sub xs')))))


(defn annualized-risk
  "Annualized standard deviation of asset/portfolio returns"
  ([freq]
   (comp
     stats/std
     (emath/mul (math/sqrt freq))))
  ([] (annualized-risk 252)))


(defn sharpe-ratio
  "Sharpe Ratio.Compute Sharpe ratio for an collection XS of values (daily, weekly, etc) and
   a free-risk rate. Annual free-risk must be divided to match the right timeframe."
  ([^double frisk]
   (comp
     (x/transjuxt [stats/mean stats/std])
     (x/reduce
       (fn
         ([] [0.0 0.0])
         ([[mean std]] (/ (- mean frisk) std))
         ([acc coll] coll)))))
  ([] (sharpe-ratio 0.0)))


(defn adjusted-sharpe-ratio
  "Sharpe Ratio adjusted for skewness and kurtosis with a penalty factor
   for negative skewness and excess kurtosis."
  ([^double frisk]
   (comp
     (x/transjuxt [(sharpe-ratio frisk) stats/skewness stats/kurtosis])
     (x/reduce
       (fn
         ([] (transient []))
         ([[sr sk ku]] (* sr (- (+ 1 (* (/ sk 6) sr))
                                (* (/ (- ku 3) 24) (math/sqrt sr)))))
         ([acc [sr sk ku]] (-> acc (conj! sr) (conj! sk) (conj! ku)))))))
  ([] (adjusted-sharpe-ratio 0.0)))


(defn annualized-adjusted-sharpe-ratio
  "Sharpe Ratio adjusted for skewness and kurtosis with a penalty factor
   for negative skewness and excess kurtosis."
  ([^double frisk ^long freq mode]
   (comp
     (x/transjuxt [stats/skewness stats/kurtosis
                   (annualized-return freq mode) (annualized-risk freq)])
     (x/reduce
       (fn
         ([] (transient []))
         ([[sk ku annret annrisk]]
          (let [sr (/ (- (/ (Math/round ^double (* 10000 annret)) 10000) frisk)
                      (/ (Math/round ^double (* 10000 annrisk)) 10000))]
            (* sr (- (+ 1 (* (/ sk 6) sr))
                     (* (- ku 3) (math/sqrt sr))))))
         ([acc [sk ku annret annrisk]]
          (-> acc (conj! sk) (conj! ku) (conj! annret) (conj! annrisk)))))))
  ([^double frisk ^long freq]
   (annualized-adjusted-sharpe-ratio frisk freq :geometric))
  ([^double frisk]
   (annualized-adjusted-sharpe-ratio frisk 252 :geometric))
  ([]
   (annualized-adjusted-sharpe-ratio 0.0 252 :geometric)))


(defn downside-risk
  "Downside Risk or Semi-Standard Deviation.
   Measures the variability of underperformance below a minimum target rate"
  ([^double mar]
   (let [fnx (comp
               (emath/sub mar)
               (emath/min 0.0)
               (emath/pow 2.0)
               (x/into []))
         fny (fn
               ([] (transient []))
               ([[xs count]]
                (let [sum (transduce (emath/div count) + xs)]
                  (math/sqrt ^double sum)))
               ([acc [xs count]] (-> acc (conj! xs) (conj! count))))]
     (comp
       (x/transjuxt [fnx x/count])
       (x/reduce fny)
       )))
  ([] (downside-risk 0.0)))


(defn sortino-ratio
  "Sortino ratio"
  ([^double frisk ^double mar]
   (comp
     (x/transjuxt [(downside-risk mar) stats/mean])
     (x/reduce
       (fn
         ([] (transient []))
         ([[mean dr]] (/ (- mean frisk) dr))
         ([acc [dr mean]] (-> acc (conj! mean) (conj! dr)))))))
  ([^double frisk] (sortino-ratio frisk 0.0))
  ([] (sortino-ratio 0.0 0.0)))


(def drawdown
  "Drawdowon from Peak. Any continuous losing return period.
  Return drawdown from peak and time to recovery array."
  (comp
    (emath/add 1.0)
    emath/cumprod
    (fn [xf]
      (let [val (volatile! math/MIN-DOUBLE)]
        (fn
          ([] (xf))
          ([acc] (xf acc))
          ([acc x]
           (let [val' (math/max x @val)]
             (vreset! val val')
             (xf acc (/ (- val' x) val')))))))))


(def continuous-drawdown
  (comp
    (partition-by neg?)
    (filter #(every? neg? %))
    (fn [rf]
      (fn
        ([] (rf))
        ([acc] (rf acc))
        ([acc x] (rf acc (- 1 (transduce (map #(+ 1 %)) * x))))))))


(def average-drawdown
  (comp continuous-drawdown
        stats/mean))


(def maximum-drawdown
  (comp continuous-drawdown
        stats/max))


(def rate-of-return
  "Simple rate of return calculated from the last and the first value of
  an array of numbers."
  (comp (emath/add 1.0)
        (x/reductions *)
        (x/transjuxt [(x/reduce rf/some)
                      x/last])
        (x/reduce
          (fn
            ([] (transient []))
            ([[f l]] (- (/ l f) 1.0))
            ([acc [f l]] (-> acc (conj! f) (conj! l)))))))


(defn cagr
  "Compound annual growth rate"
  ([n]
   (comp rate-of-return
         (emath/add 1.0)
         (emath/pow (/ 1.0 n))
         (emath/sub 1.0)))
  ([] rate-of-return))


(defn calmar-ratio
  "A risk-adjusted measure like Sharpe ratio that uses maximum drawdown instead of
  standard deviation for risk."
  ([^double frisk ^long freq]
   (comp (x/transjuxt [(annualized-return freq :geometric) maximum-drawdown])
         (x/reduce
           (fn
             ([] (transient []))
             ([[annret maxdd]] (/ (- annret frisk) maxdd))
             ([acc [annret maxdd]] (-> acc (conj! annret) (conj! maxdd)))))))
  ([frisk]
   (calmar-ratio frisk 252))
  ([]
   (calmar-ratio 0.0 252)))


(defn downside-potential
  ([mar]
   (comp (x/transjuxt [(comp (emath/mul -1.0) (emath/add mar) (emath/max 0.0) (x/into [])) x/count])
         (x/reduce
           (fn
             ([] (transient []))
             ([[xs count]] (transduce (emath/div count) + xs))
             ([acc [xs count]] (-> acc (conj! xs) (conj! count)))))))
  ([] (downside-potential 0.0)))


(defn burke-ratio
  "A risk-adjusted measure with free risk and drawdowns.
   For the 'simple' mode the excess return over free risk is divided by the square root of
   the sum of the square of the drawdowns. For the 'modified' mode the Burke Ratio is multiplied
   by the square root of the number of datas."
  ([frisk freq mode]
   (comp
     (x/transjuxt [(annualized-return freq)
                   (comp continuous-drawdown
                         (emath/pow 2)
                         (x/reduce +)
                         emath/sqrt)
                   x/count])
     (x/reduce
       (fn
         ([] (transient []))
         ([[annret dd c]] (case mode
                            :simple (/ (- annret frisk) dd)
                            :modified (* (/ (- annret frisk) dd)
                                         (math/sqrt c))))
         ([acc [annret dd c]] (-> acc
                                  (conj! annret)
                                  (conj! dd)
                                  (conj! c)))))))
  ([frisk freq]
   (burke-ratio frisk freq :simple))
  ([frisk]
   (burke-ratio frisk 252 :simple))
  ([]
   (burke-ratio 0.0 252 :simple)))


(def ulcer-index
  "Ulcer Index of Peter G. Martin (1987). The impact of long, deep drawdowns will have significant
  impact because the underperformance since the last peak is squared."
  (comp
    (x/transjuxt [(comp drawdown
                        (emath/pow 2)
                        (x/reduce +))
                  x/count])
    (x/reduce
      (fn
        ([] (transient []))
        ([[dd c]] (math/sqrt (/ dd c)))
        ([acc [dd c]] (-> acc (conj! dd) (conj! c)))))))


(defn martin-ratio
  "A risk-adjusted measure with free risk and Ulcer index.
   Martin Ratio = (Portfolio Return - RiskFree) / Ulcer Index
   Mode: :return, :geometric (default: :return)"
  ([frisk freq]
   (comp
     (x/transjuxt [(annualized-return freq)
                   ulcer-index])
     (x/reduce
       (fn
         ([] (transient []))
         ([[annret u]] (/ (- annret frisk) u))
         ([acc [annret u]] (-> acc (conj! annret) (conj! u)))))))
  ([frisk]
   (martin-ratio frisk 252))
  ([]
   (martin-ratio 0.0 252)))


(def hurst-index
  "It's a useful statistic for detecting if a time series is mean reverting (anti-persistent), totally random or persistent.
   A value in the range [0.5) indicates mean-reverting (anti-persistent)
   A value of 0.5 indicate a random walk
   A value H in the range (0.5,1] indicates momentum (persistent)"
  (comp
    (x/transjuxt [(comp emath/cumdev stats/max)
                  (comp emath/cumdev stats/min)
                  stats/std
                  x/count])
    (x/reduce
      (fn
        ([] (transient []))
        ([[mx mn std n]]
         (let [rs (/ (- mx mn) std)]
           (/ (math/log rs) (math/log n))))
        ([acc [mx mn std n]] (-> acc
                                 (conj! mx) (conj! mn)
                                 (conj! std) (conj! n)))))))


(defn info-ratio
  "Information Ratio"
  [xs]
  (comp
    (x/transjuxt [(comp (emath/sub xs) stats/std)
                  (comp (emath/sub xs) stats/mean)])
    (x/reduce
      (fn
        ([] (transient []))
        ([[std mean]] (/ mean std))
        ([acc [std mean]] [std mean])))))


(defn jensen-alpha
  "Ex-post alpha calculated with regression line.
  Free-risk is the avereage free-risk for the timeframe selected."
  [xs frisk]
  (comp
    (x/transjuxt [(comp (emath/sub xs) stats/std)
                  (comp (emath/sub xs) stats/mean)])
    (x/reduce
      (fn
        ([] (transient []))
        ([[std mean]]
         (/ mean std))
        ([acc [std mean]] (-> acc (conj! std) (conj! mean)))))))


(defn modigliani
  "Modigliani index for risk-adjusted return"
  [ys frisk]
  (let [[stdb] (sequence stats/std ys)]
    (comp
      (x/transjuxt [stats/mean
                    (sharpe-ratio frisk)
                    stats/std])
      (x/reduce
        (fn
          ([] [0.0 0.0 0.0])
          ([[mean sharpe std]]
           (+ mean (* sharpe (- stdb std))))
          ([acc coll] coll))))))


(defn rolling-economic-drawndown
  ([freq]
   (comp
     (x/take-last freq)
     (x/transjuxt [(x/take-last 1)
                   stats/max])
     (map (fn [[last max]] (double (- 1.0 (/ last max)))))))
  ([]
   (rolling-economic-drawndown 254)))


(def tick->ret
  "Convert a value series to a return series"
  (comp (x/partition 2 1)
        (fn [rf]
          (fn
            ([] (rf))
            ([acc] (rf acc))
            ([acc [x y]] (rf acc (- (/ y x) 1.0)))))))


(defn redp-allocation
  ([risk freq]
   (comp
     (x/transjuxt [(rolling-economic-drawndown freq)
                   stats/std
                   (comp tick->ret (sharpe-ratio 0.0))])
     (x/reduce
       (fn
         ([] [0.0 0.0 0.0])
         ([[redp std sharpe-ratio]]
          (math/min 1.0
                    (math/max 0.0 (* (/ (+ (/ sharpe-ratio std) 0.5)
                                        (- 1.0 (math/pow risk 2.0)))
                                     (math/max 0.0 (/ (- risk redp)
                                                      (- 1.0 redp)))))))
         ([acc coll] coll)))))
  ([risk]
   (redp-allocation risk 254)))