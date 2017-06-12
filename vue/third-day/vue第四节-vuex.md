# vuex是什么

Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

状态为驱动应用的数据源



# 为什么使用vuex

### 普通的一个组件例子

```javascript
var increment = {
	//state状态
	data(){
		return {
			count:0
		}
	},
	//view
	template:`
		<div>
			<p>{{count}}</p>
			<button v-on:click="incrementFn">增加count</button>
		</div>
	`,
	//actions
	methods:{
		incrementFn(){
			this.count++;
		}
	}
}
var app = new Vue({
	el:"#app",
	components:{
		increment
	}
});
```
* state，驱动应用的数据源；
* view**，以声明方式将**state**映射到视图； 
* actions**，响应在**view**上的用户输入导致的状态变化。



### 例子的问题

* 当我们的应用遇到**多个组件共享状态**时，单向数据流的简洁性很容易被破坏
* 多个视图依赖于同一状态。
* 来自不同视图的行为需要变更同一状态

一般的解决办法：使用多层嵌套来解决第一个问题，但是兄弟组件间就无能为力。

我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝来解决第二个问题.但是以上方法都会使代码难以维护



### 最好的解决办法

将组件的共享状态(state)抽取出来，统一管理

我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为！

- Actions去执行异步的操作-比如ajax

- - 然后通过commit方法触发mutations方法


- Mutations

- - 同步更改状态的方法
  - 还可以跟一些devtools的方法进行交互


- state

- - 状态更改后影响视图


- vue组件通过dispath去发actions


- 数据是单向流动的


<img src="http://i4.buimg.com/567571/846ee636ea068725.jpg" width="500">


# 使用vuex



001 搭建项目基本UI

002 引入vuex基本骨架

003 新增一个apple，减少一个apple

004 新增一个banana，减少一个banana



- 安装vuex
- - cnpm install vuex —save
  - 安装vuex并保持到package.json文件依赖中


- 在项目中引入vuex


- 设置state


- 编写两个组件：

- -  Banana.vue

  -  ```html
     - <template>
     - 	<div class=“banana”>
     - <h2>{{msg}}</h2>
     - <button @click=“addOne”>添加一个苹果</button>
     -     <button @click=“minusOne”>减少一个苹果</button>
     - 	</div>
     - </template>
     - 
     - <script>
     - export default {
     -   data(){
     -     return {
     -       msg:’i am Banana’,
     -       price:5
     -     }
     -   },
     -   methods:{
     -     addOne(){
     -       this.$store.dispatch(‘increase’,this.price);
     -       // this.$store.commit(‘increment’,this.price);
     -     },
     -     minusOne(){
     -       this.$store.commit(‘decrement’,this.price);
     -     }
     -   }
     - }
     - </script>
     - 
     - <style scoped>
     - 	
     - </style>
     ```

  -  Orange.vue

  -  ```html
        <template>
     - 	<div class=“banana”>
       <h2>{{msg}}</h2>

     - <button @click=“addOne”>添加一个橙子</button>
     - <button @click=“minusOne”>减少一个橙子</button>
       - </div>
     - </template>
     - 
     - <script>
     - export default {
     - data(){
     - return {
     - msg:’i am Orange’,
     - price:3
     - }
     - },
     - methods:{
     - addOne(){
     - this.$store.dispatch(‘increase’,this.price);
     - // this.$store.commit(‘increment’,this.price);
     - },
     - minusOne(){
     - this.$store.commit(‘decrement’,this.price);
     - }
     - }
     - }
     - </script>
     - 
     - <style scoped>
       - 
     - </style>
     ```


- 在最外层组件app.vue中使用它们

  ```html
  - <script>
  - import Banana from “./components/Banana”
  - import Orange from “./components/Orange”
  - export default {
  -   name: ‘app’,
  -   components:{Banana,Orange},
  -   computed:{
  -     totalPrice(){
  -       //获取store中的totalPrice作为计算属性
  -       return this.$store.state.totalPrice
  -     }
  -   }
  - }
  - </script>
  ```

  ​


- 在store中设置mutations和actions

- ```javascript
  - //如果是同步操作直接使用mutations就可以了
  - 	mutations:{
  - increment(state,price){
  - 	state.totalPrice += price
  - },
  - decrement(state,price){
  - 	state.totalPrice -= price
  - }
  - 	},
  - 	//actions只能是调用mutations，不能操作state
  - 	//处理一些异步的操作
  - 	actions:{
  - //context就是传过来的store
  - increase(context,price){
  - 	context.commit(‘increment’,price)
  - }
  - 	}

  ```



- getters

- ```javascript
  - //获取状态集里的数据
  - 	getters:{
  - //获取totalPrice
  - getTotal(state){
  - 	//默认注入了一个state状态集
  - 	return state.totalPrice;
  - }
  - 	}
  - export default {
  -   name: ‘app’,
  -   components:{Banana,Orange},
  -   computed:{
  -     totalPrice(){
  -       //获取store中的totalPrice作为计算属性
  -       return this.$store.getters.getTotal
  -     }
  -   }
  - }
  ​
  ```
