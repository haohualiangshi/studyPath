module.exports = {
	entry:'./module/main.js',
	output:{
		path:__dirname+'/dist',
		filename:'bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test:/\.js/,
				exclude:/node_modules/,
				use:['babel-loader']
			}
		]
	},
	resolve:{
		modules:[
		__dirname+'/module',
		__dirname+'/node_modules'
		],
		extensions:['.js','.jsx','.css','.scss'],
		alias:{
			style:'../css/style.css'
		}
	}
}