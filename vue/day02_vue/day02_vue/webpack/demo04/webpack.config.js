
var path = require('path');

module.exports = {
	entry:'./module/main.js',
	output:{
		path:__dirname+'/dist',
		filename:'bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.js[x]?$/,
				exclude:/node_modules/,
				use:[
				{
					loader:'babel-loader',
					options:{
						presets:['es2015','react']
					}
				}]
				
			}
		]
	},
	resolve:{
		modules:[
			path.join(__dirname, './module'),
	        path.resolve(__dirname, 'node_modules')
		],
		extensions:['.js','.jsx']
	}
}