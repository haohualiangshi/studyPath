# Axios

简介，在vue升级到2.0后，官方就不再更新`vue-resourece`，vue官网也不再推荐`vue-resource`作为推荐的HTTP库.转而推荐使用：axios。

尤大大原话：

> 最近团队讨论了一下，Ajax 本身跟 Vue 并没有什么需要特别整合的地方，使用 fetch polyfill 或是 axios、superagent 等等都可以起到同等的效果，vue-resource 提供的价值和其维护成本相比并不划算，所以决定在不久以后取消对 vue-resource 的官方推荐。已有的用户可以继续使用，但以后不再把 vue-resource 作为官方的 ajax 方案。
>
> 这里可以去掉 vue-resource，文档也不必翻译了。

如果要在vue项目中使用axios的话：

1.首先肯定是安装并添加到生产环节的依赖

```javascript
cnpm install axios --save
```

2.在`main.js`中引入`axios`

3.然后因为axios并不是vue的插件所以不能用`Vue.use`,但可以将它添加到Vue的原型中

```javascript
//将axios添加到vue的原型中
Vue.prototype.$http = axios
```

这样我们也可以像调用vue-resourece一样在组件中调用axios的方法.

[中文api](http://www.kancloud.cn/yunye/axios/234845) [github地址](https://github.com/mzabriskie/axios)