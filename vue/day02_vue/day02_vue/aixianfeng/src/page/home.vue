<template>
	<div class="home">
		{{msg}}
		<button @click='add'>add</button>
		<test></test>
		<ul>
			<li v-for="item in lists">
				
				{{item.name}}->{{item.age}}
			</li>
		</ul>
		<hello></hello>
	</div>
</template>
<script >
	import Hello from '../components/Hello';
	import Test from '../components/Test'
	export default{
		data(){
			return{
				msg:'hello',
				lists:[{
					name:'sxl',age:19
				},{
					name:'sxl1',age:219
				},{
					name:'sxlw',age:219
				}]
			}
		},
		methods:{
			add:function(){
				this.msg = new Date-0;
			}
		},
		components:{
			Hello,
			Test
		}
	}
</script>
<style >
	@import "../assets/style.css";

	.home{
		font-size: 24px;
	}
</style>