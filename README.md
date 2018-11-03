# ribelo.visby

A mathematical and quantitative library for Clojure and Clojurescript.
Visby providing a lot of functionalities for elementary operations, statistics and computational finance.

Created mainly to learn how to use transducers, and to refresh my knowledge of statistics and finance.
The problem may be that I do not know anything about programming, not to mention statistics and finances.

## Key Features

* Numerical computations in pure Clojure/Clojurescript
* Using transducing functions for all calculation
* Has a lot of funny bugs I don't know about.

## Usage

```clojure
(require '[ribelo.visby.emath :as emath)

(->> [{:x 2} {:x 4} {:x 4} {:x 4} {:x 5} {:x 5} {:x 5} {:x 7} {:x 9}]
     (into [] (comp (map :x) (emath/add 100))))
 
;;=> [102.0 104.0 104.0 104.0 105.0 105.0 105.0 107.0 109.0]


(->> [{:x 2} {:x 4} {:x 4} {:x 4} {:x 5} {:x 5} {:x 5} {:x 7} {:x 9}]
     (into [] (comp (map :x) (emath/min 3))))
     
;;=> [2.0 3.0 3.0 3.0 3.0 3.0 3.0 3.0 3.0]


(->> [{:x 2} {:x 4} {:x 4} {:x 4} {:x 5} {:x 5} {:x 5} {:x 7} {:x 9}]
     (into [] (comp (map :x) emath/cumsum)))

;;=> [2 6 10 14 19 24 29 36 45]
```


```clojure
(require '[ribelo.visby.stats :as stats)

(->> [{:x 2} {:x 4} {:x 4} {:x 4} {:x 5} {:x 5} {:x 5} {:x 7} {:x 9}]
     (into [] (comp (map :x) stats/median)))
 
;;=> [5.0]


(->> [0.003 0.026 0.015 -0.009 0.014 0.024 0.015 0.066 -0.014 0.039]
     (into [] (stats/quantile 0.25)))
     
;;=> [1.734723475976807E-18]


(let [x [0.003 0.026 0.015 -0.009 0.014 0.024 0.015 0.066 -0.014 0.039]
      y [-0.005 0.081 0.04 -0.037 -0.061 0.058 -0.049 -0.021 0.062 0.058]]
  (into [] (stats/pdist-euclidean x) y))
  
;;=> [0.17053152201279387]
```

```clojure
(require '[ribelo.visby.quant :as quant)

(->> [0.003 0.026 0.015 -0.009 0.014 0.024 0.015 0.066 -0.014 0.039]
     (into [] (quant/sharpe-ratio (/ 0.02 12))))
 
;;=> [0.6987943426529188]


(->> [0.003 0.026 0.015 -0.009 0.014 0.024 0.015 0.066 -0.014 0.039]
     (into [] (quant/sortino-ratio (/ 0.02 12))))
     
;;=> [3.0843795993743215]


(->> [0.003 0.026 0.015 -0.009 0.014 0.024 0.015 0.066 -0.014 0.039]
     (into [] (quant/cagr (/ (count x) 12))))]
  
;;=> [0.2338146820656939]
```

## License

Copyright © 2017 Ribelo

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
