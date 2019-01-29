module.exports = {
  plugins: [
    "@babel/plugin-transform-flow-strip-types",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties"
  ],
  presets: ["module:metro-react-native-babel-preset"]
};
