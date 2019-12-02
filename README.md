# easy-pwa
Quickly upgrade your project to pwa
助你快速将现有项目升级成为PWA
创建初衷：
PWA是一种非常不错的技术，目前而言虽然还不能像原生APP一样性能和体验，不过pwa这个技术的基础特性还是非常值得尝试的，特别是针对那些需要在弱网环境下使用的项目，只需要第一次加载完成之后，后期二次加载直接从用户本地读取缓存的serviceworker，抛开API接口数据响应的前提，资源文件加载速度几乎可以秒开，很多SPA单页应用项目，编译之后都会面临几个比较大的JS公共文件，每次加载会造成极大的浪费，所以使用PWA的第一步就是可以利用它的缓存机制对项目在弱网环境下进行资源加速；
本项目[源码地址](https://github.com/luoyangqiu/easy-pwa)
# 升级问题
项目第一次在浏览器中安装成功serviceworker之后，后期升级均是无感知加载

# 使用方式一

``` bash
npm install easy-pwa -g
// 1.进入你的项目己经构建的目录，例如你的项目名叫example;【open your Project folder】
// 【For example】 C:\Users\Administrator\Desktop\example\
// 2.在example目录下找到你己经构建好的目录地址，例如己经构建好的项目文件均放在【dist】目录下
// cd dist
// 3.在dist目录下执行easy-pwa命令，默认会自动寻找index.html 【default entry file: index.html】
// easy-pwa
// 4.如果你的项目入口文件不是index.html【even you can custom entry file】
// esay-pwa entry test.html
```





