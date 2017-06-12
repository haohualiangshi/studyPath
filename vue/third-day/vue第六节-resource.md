# vue-resource

## 简介

vue-resource是Vue.js的一款插件，它可以通过XMLHttpRequest或JSONP发起请求并处理响应

github地址：	[vue-resource](https://github.com/pagekit/vue-resource)

## promise

因为vue-resource中使用了es6中promise这个新特性，所以先介绍下promise

### promise简介

Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大

所谓`Promise`，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

### 传统的异步操作转promise

传统写法：

```javascript
function async(a,b,cb){
	setTimeout(function (){
		cb(a+b)
	},200)
}	
async(1,2,function (result){
	// 延迟200ms后执行
	if (result>2){
		async(result,2,function(result){
			if (result>4){
				console.log(result)
			}
		})
	}
})
```

es6-promise写法：



```javascript
function async(a,b){
	//resolve异步操作成功时调用
	//reject失败时调用
	return new Promise(function(resolve,reject){
	
		if (typeof a !== "number" ||typeof b !== "number"){
			reject(new Error("不是一个number"));
		}
		setTimeout(function (){
			resolve(a+b);
		},1000)
	})
}
//不管是成功或者失败都会调用then这个方法
//然后接受两个函数作为参数，第一个是成功的
/*
promise:更加优雅，逻辑更加清晰
*/
async(1,'a')
	.then(function (result){
		console.log("第一次返回的值"+result)
		if (result > 2){
			return async(result,2)
		}
	},function (error){
		console.log("第一次错误:"+error)
		return 5;
	})
	.then(function (result){
		console.log("第二次返回的值"+result)
		if (result > 4){
			return async(result,2)
		}
	})
	.then(function (result){
		console.log("第三次返回的值"+result)
	})
	//catch捕获错误
	.catch(function(error){
		console.log("第二次错误:"+error)
	})
```

## 使用vue-resourse

进入项目目录后安装：`npm install vue-resource --save`

在项目中使用`vue-resource`：

```javascript
import Resource from 'vue-resource'

//使用vue-resourece
Vue.use(Resource)
```

然后就可以在项目中通过`this.$http`来调用对应的方法

比如调用get和post请求：

```javascript
created:function (){
  this.$http.post("getList",{user:'tangcaiye'})
    .then(function (data){
    console.log(data)
  })
}
```

其他的方法: [api文档](https://github.com/pagekit/vue-resource/blob/develop/docs/http.md)

## json-server模拟数据

如果会node服务器，可以使用node来模拟接口,或者也可以使用json-server，在它的帮助下，你能在半分钟之内搭建一个REST API服务器，而且支持CURD操作,在前端将数据跑通后，再跟后端去协调.

[github地址](https://github.com/typicode/json-server)

安装：`cnpm intall json-server --save-dev`

在项目中使用：

首先创建一个db.json，放在根目录下就可以了，它用于存放接口调用时的数据.比如：

```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

`posts`,`comments`,`profile`是我的接口的router.

然后在dev-server.js中添加代码：

```javascript
const jsonServer = require('json-server')
const apiServer = jsonServer.create()
const apiRouter = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

apiServer.use(middlewares)
apiServer.use(apiRouter)
apiServer.listen(port+1, () => {
  console.log('JSON Server is running')
})
```

将这块代码放在`var server = app.listen(port)`之前就行，现在在浏览器中访问`http://localhost:8081`应该就能进到jsonserver页面中

但因为`jsonserver`服务器的端口号跟我们的服务器端口不一样，也就是跨域了，所以可以在vue-cli中设置代理:

### 设置代理

在`config/index.js`中的设置proxyTable的值为：

```javascript
	proxyTable: {
      '/api': {
        target: 'http://127.0.0.1:8081/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
```

其中 '/api' 为匹配项，target 为被请求的地址

因为在 ajax 的 url 中加了前缀 '/api'，而原本的接口是没有这个前缀的

所以需要**通过 pathRewrite 来重写地址，将前缀 '/api' 转为 '/'**

如果本身的接口地址就有 '/api' 这种通用前缀，就可以把 pathRewrite 删掉



# 项目

馋口街
走客
平安口袋银行
中国电动车网
可及返利
豆瓣音乐人
掌中广材
助助
尾酒网
陪你宅
9平米
北京交警
一倍半
乐贴外卖
爱影订座
穷游网
酒尾网APP
晓调
魅玩
赔理宅
懒投资
酒仙网
魅玩帮
辣妈商城
饿了么
卷皮网
掌厨
康爱多
滴滴出行
美团外卖