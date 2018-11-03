(defproject ribelo/visby "0.1.0-SNAPSHOT"
  :url "https://github.com/ribelo/visby"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/cljc"]
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [net.cgrand/xforms "0.18.2"]]
  :global-vars {*warn-on-reflection* true}
  :profiles {:dev {:dependencies [[criterium "0.4.4"]
                                  [org.apache.commons/commons-math3 "3.6.1"]]}})
