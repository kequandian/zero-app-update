
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  hash: true,
  // exportStatic: {},
  // devtool: 'source-map',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'zero-code',
      dll: false,

      locale: {
        enable: true,
        default: 'zh-CN',
        baseNavigator: true,
      },

      routes: {
        exclude: [
          /components\//,
          /config\//,
        ],
      },
    }],
  ],

  ignoreMomentLocale: true, // 忽略 moment 的 locale 文件
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  // extraBabelPlugins: [
  //   [
  //     'import',
  //     {
  //       libraryName: 'antd',
  //       libraryDirectory: 'lib',
  //       "style": true
  //     }
  //   ],
  // ]
}
