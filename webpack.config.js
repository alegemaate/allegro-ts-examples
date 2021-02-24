const path = require("path");
const fs = require("fs");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Examples to build
const files = [];
fs.readdirSync("src").map((file) => {
  const valid = /\.ts$/.test(file);
  if (valid) {
    const cleaned = file.replace(".ts", "");
    files.push(cleaned);
  }
});

// Html pages
const htmlPlugins = files.map(
  (file) =>
    new HtmlWebpackPlugin({
      filename: `${file}.html`,
      template: "src/template.ejs",
      inject: true,
      chunks: [file],
      title: file,
    })
);

// Create entires from list
const entires = files.reduce((acc, curr) => {
  acc[curr] = `./src/${curr}.ts`;
  return acc;
}, {});

// Main config
module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: entires,
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/ }],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/assets", to: "assets" },
        { from: "src/template.css", to: "template.css" },
        { from: "src/*.ts", to: "source" },
      ],
    }),
    ...htmlPlugins,
  ],
};
