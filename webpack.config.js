const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index : "./src/index.js",
    indez : "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/css"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
      {
        // test: /css\/.*\.css$/,
        test: /\.css$/i,
        include: [path.resolve(__dirname, "src/css")],
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
        //   { loader: "css-loader", options: { importLoaders: 1 } },
          // "postcss-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("postcss-import")(),
                  require("tailwindcss")("./src/tailwindcss.config.js"),
                  require("autoprefixer"),
                ],
              },
            },
          },
        ],
      },
      {
        // test: /czz\/.*\.css$/,
        test: /\.css$/i,
        include: [path.resolve(__dirname, "src/czz")],
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
        //   { loader: "css-loader", options: { importLoaders: 1 } },
          // "postcss-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("postcss-import")(),
                  require("tailwindcss")("./src/tailwindczz.config.js"),
                  require("autoprefixer"),
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
