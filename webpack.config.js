const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

const baseConfig = {
  devtool: false,

  externals: {
    "liqvid": {
      commonjs: "liqvid",
      commonjs2: "liqvid",
      amd: "liqvid",
      root: "Liqvid"
    },
    "react": {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React"
    },
    "rp-recording": {
      commonjs: "rp-recording",
      commonjs2: "rp-recording",
      amd: "rp-recording",
      root: "RPRecording"
    },
  },

  mode: "production",

  module: {
    rules: [
     {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          safari10: true
        }
      })
    ],
    emitOnErrors: true
  },

  plugins: [
    new webpack.BannerPlugin({
      banner: () => require("fs").readFileSync("./LICENSE", {encoding: "utf8"})
    })
  ],

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  }
}

module.exports = [
  {
    ...baseConfig,
    entry: `${__dirname}/src/plugin.tsx`,
    output: {
      filename: "rp-paint.js",
      path: __dirname,
      library: "RPPaint",
      libraryTarget: "umd"
    }
  },
  {
    ...baseConfig,
    entry: `${__dirname}/src/recorder.tsx`,
    output: {
      filename: "rp-paint.recorder.js",
      path: __dirname,
      library: ["RPPaint", "PaintRecorderPlugin"],
      libraryExport: "default",
      libraryTarget: "umd"
    }
  }
];
