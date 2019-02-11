(defproject ribelo/visby "0.1.1-SNAPSHOT"
  :url "https://github.com/ribelo/ribelo.visby"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :middleware [lein-tools-deps.plugin/resolve-dependencies-with-deps-edn]
  :lein-tools-deps/config {:config-files [:install :user :project]}
  :global-vars {*warn-on-reflection* true})
