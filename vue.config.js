const { defineConfig } = require("@vue/cli-service");
const { VantResolver } = require("unplugin-vue-components/resolvers");
const ComponentsPlugin = require("unplugin-vue-components/webpack");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
  devServer: {
    proxy: {
      "/api": {
        target: "https://music.163.com", // 设置代理目标
        changeOrigin: true,
        pathRewrite: {
          "^/api": "", // 将请求路径中的 /api 前缀移除
        },
      },
    },
  },
});
