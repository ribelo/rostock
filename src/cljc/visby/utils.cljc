(ns visby.utils
  (:require [visby.quant :as quant]
            [net.cgrand.xforms :as x])
  (:refer-clojure :exclude [interleave]))

(let [x [0.003 0.026 0.015 -0.009 0.014 0.024 0.015 0.066 -0.014 0.039]
      y [-0.005 0.081 0.04 -0.037 -0.061 0.058 -0.049 -0.021 0.062 0.058]]
  (into [] (quant/sharpe-ratio) y))

(->> [0.003 0.026 0.015 -0.009 0.014 0.024 0.015 0.066 -0.014 0.039]
     (into [] (quant/sharpe-ratio (/ 0.02 12))))

(defn interleave
  [coll]
  (fn [rf]
    (let [fillers (volatile! (seq coll))]
      (fn
        ([] (rf))
        ([result] (rf result))
        ([result input]
         (if-let [[filler] @fillers]
           (let [step (rf result input)]
             (if (reduced? step)
               step
               (do
                 (vswap! fillers next)
                 (rf step filler))))
           (reduced result)))))))
