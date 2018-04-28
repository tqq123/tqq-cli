# tqq-cli

> vue-cli

## 这是自己根据webpack4搭建的一个空的工程目录,已经整合移动端适配,路由我也配好了，直接上手用就好了,最简单的配置,大家后期根据需要随意定制即可

``` bash
# clone下来cd到目录下之后npm install安装依赖
npm install

# npm start 项目跑起来，自动会打开浏览器窗口的
npm start

# 打包直接build就行了
npm run build

## 默认是scss预处理器，大家可以根据需要修改
## 4.16更新。添加了babel，可以愉快地编写es6
## 4.28更新。添加了fastclick，解决移动端部分机型点击延迟300ms问题


# 关于移动端适配，这里我们使用hotcss, 我默认是以iphone5的320宽度，大家启动项目视口大小切到iphone5可以看html根元素为40px,所以我们就设px2rem基准为40px,webpack.config.js里默认css-loader配置remUnit=40即可，如果为iphone6或者plus方法同上。
