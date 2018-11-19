简单整合出一个 UmiJS 的脚手架
====
>npm install

>npm start

## 整体布局
在 ./src/layouts 目录下是网站的整体布局，如果项目没有这种需求那么直接 return children 即可。



## package.json文件--> scripts --> build
## ---> cordova app端
"build": "set CLEAR_CONSOLE=none&& set BASE_URL=/android_asset/www/&& umi build"
