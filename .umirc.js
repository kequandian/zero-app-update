export default {
  'history':'hash',
  'plugins': [
    ['umi-plugin-react', {
      dva: true,
      antd: true,
      routes: {
        exclude: [/models\//, /services\//, /components\// ],
      },
      dynamicImport: {
        loadingComponent: './components/loadingPage/PageLoadingComponent.js'
      }
    }],
  ],
  hash: true,
  outputPath: './dist/static/',
  publicPath: './static/',
  base:'/app/',
  'copy': [
    {
      "from": "./src/config.js",
      "to": "./config.js"
    }
  ],
  'context': { title: 'Muaskin智慧美妆' },
  'publicPath': './static/',
  'proxy': {
      '/api': {
        'target': 'http://120.79.77.207:8080',
        'changeOrigin': true
      },
      '/rest': {
        'target': 'http://120.79.77.207:8080',
        'changeOrigin': true
      }
  }
}
