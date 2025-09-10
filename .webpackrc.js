export default {
  env: {
    development: {
      extraBabelPlugins: [
        "dva-hmr"
      ]
    }
  },
  extraBabelPlugins: [
    ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }]
  ],
};
