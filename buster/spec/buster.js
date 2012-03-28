var config = module.exports;

config["Browser Tests"] = {
  environment:"browser",
  rootPath:"../",
  libs:["js/lib/require.js"],
  tests:[
    "spec/module/test.module.js"
  ], 
  resources:['**/*.js']
};

config["Browser Tests With Extension"] = {
  environment:"browser",
  rootPath:"../",
  libs:["js/lib/require.js"],
  tests:[
      "spec/module/test.module.extension.js",
      "spec/module/test.module.extension.slow.js"
  ], 
  sources:['**/*.js'],
  extensions: [require("buster-amd")]
};