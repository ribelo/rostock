(ns visby.math
  (:refer-clojure :exclude [min max]))


(def PI
  #?(:clj  Math/PI
     :cljs (js/Math.PI)))


(def E
  #?(:clj  Math/E
     :cljs (js/Math.E)))


(def MAX-DOUBLE
  #?(:clj  Double/MAX_VALUE
     :cljs js/Number.MAX_VALUE))


(def MIN-DOUBLE
  #?(:clj  Double/MIN_VALUE
     :cljs js/Number.MIN_VALUE))


(def MAX-LONG
  #?(:clj  Long/MAX_VALUE
     :cljs js/Number.MAX_VALUE))


(def MIN-LONG
  #?(:clj  Long/MIN_VALUE
     :cljs js/Number.MIN_VALUE))


(defn max [^double x ^double y]
  #?(:clj  (Math/max x y)
     :cljs (js/Math.max x y)))


(defn min [^double x ^double y]
  #?(:clj  (Math/min x y)
     :cljs (js/Math.min x y)))


(defn abs [^double x]
  #?(:clj  (Math/abs x)
     :cljs (js/Math.abs x)))


(defn sqrt [^double x]
  #?(:clj  (Math/sqrt x)
     :cljs (js/Math.sqrt x)))


(defn sq [^double x]
  (* x x))


(defn pow [^double x ^double n]
  #?(:clj  (Math/pow x n)
     :cljs (js/Math.pow x n)))


(defn root [^double x ^double n]
  (pow x (/ 1 n)))


(defn log [^double x]
  #?(:clj  (Math/log x)
     :cljs (js/Math.log x)))


(defn log1p [^double x]
  #?(:clj  (Math/log (inc x))
     :cljs (js/Math.log (inc x))))


(defn exp [^double x]
  #?(:clj  (Math/exp x)
     :cljs (js/Math.exp x)))


(defn cos [^double x]
  #?(:clj  (Math/cos x)
     :cljs (js/Math.cos x)))


(defn sin [^double x]
  #?(:clj  (Math/sin x)
     :cljs (js/Math.sin x)))


(defn ceil [^double x]
  #?(:clj (Math/ceil x)
     :cljs (js/Math.ceil x)))


(defn floor [^double x]
  #?(:clj (Math/floor x)
     :cljs (js/Math.floor x)))


(defn equal [^double x ^double y ^double e]
  (<= (abs (- y x)) e))


(defn sign [^double x]
  (cond (> x 0) 1
    (< x 0) -1
    :else 0))
