
var webpack = require('webpack');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
	entry:{
		page1:'./module/page1.js',
		page2:'./module/page2.js'
	},
	output:{
		path:__dirname+'/dist',
		filename:'[name].js'
	},
	plugins:[
		new CommonsChunkPlugin({
			name:'common',
			chunks:['page1','page2']
		})
	]
}