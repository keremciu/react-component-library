const path = require("path");

module.exports = {
  core: {
    builder: "@storybook/builder-webpack5",
  },
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.tsx"],
  addons: [],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            implementation: require("sass"),
            sassOptions: {
              outputStyle: "compressed",
            },
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
