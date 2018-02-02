##使用googleCharts说明##
1. 引入google-charts库
~~~
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
~~~
2. 加载可视化API并设定当前包名（既要画的图形样式）

   ~~~
   google.charts.load('current', {'packages':['corechart']});
   //本例中是使用的饼状图
   ~~~

3. 可视化API加载完成后调用的回调函数；执行画图

   ~~~
   google.charts.setOnLoadCallback(drawChart);
   ~~~

4. 配置画图函数;创建一个数据列表并设置图形；最后时限在数据列表对象中的绘制

   ~~~
   function drawChart(){
               /*创建一个数据表*/
               var data=new google.visualization.DataTable();
               data.addColumn('string','weeks');
               data.addColumn('number','Hours');
               data.addRows([['Mon',7.5],['Tus',7.9],['Wed',8.9],['Thu',7.4],['Fri',8.5],['Sat',6.8],['Sun',1.4]]);
   //            var data1=new google.visualization.DataTable();
   //            data1.addColumn('number','Hours');
   //            data1.addColumn('string','Weeks');
   //            data1.addRows([[7.5,'Mon'],[7.9,'Tus'],[8.9,'Wed'],[7.4,'Thu'],[8.5,'Fri'],[6.8,'Sat'],[1.4,'Sun']]);
   //            /*配置参数*/
               var options={
                   title:"my time for work",
                   width:500,
                   height:400
               }
               /*创建要绘制的图形；并选取要绘制的DOM元素*/
               /*
               * PieChart 饼状图
               * BarChart 横向的柱状图
               * ColumnChart 纵向柱状图
               * LineChart 描线图
               * AreaChart 区域填充图
               * StepedAreaChart 阶梯式填充图；直方图
               * ComboChart 连线图
               * BubbleChart 气泡图；至少需要添加3个column
               * CandlestickChart 烛台图；至少需要三个column
               * ScatterChart 散列图
               * */
               var chart1=new google.visualization.PieChart(allCharts[0]);
               var chart2=new google.visualization.BarChart(allCharts[1]);
               var chart3=new google.visualization.ColumnChart(allCharts[2]);
               var chart4=new google.visualization.LineChart(allCharts[3]);
               var chart5=new google.visualization.AreaChart(allCharts[4]);
               var chart6=new google.visualization.SteppedAreaChart(allCharts[5]);
               var chart7=new google.visualization.BubbleChart(allCharts[6]);
   //            var chart8=new google.visualization.DonutChart(allCharts[7]);
               var chart9=new google.visualization.ComboChart(allCharts[8]);
               var chart10=new google.visualization.CandlestickChart(allCharts[9]);
   //            var chart11=new google.visualization.HistogramChart(allCharts[10]);
               var chart12=new google.visualization.ScatterChart(allCharts[11]);

               chart1.draw(data,options);
               chart2.draw(data,options);
               chart3.draw(data,options);
               chart4.draw(data,options);
               chart5.draw(data,options);
               chart6.draw(data,options);
               chart7.draw(data,options);
   //            chart8.draw(data,options);
               chart9.draw(data,options);
               chart10.draw(data,options);
   //            chart11.draw(data,options);
               chart12.draw(data,options);
           }
   ~~~

   **注意：addColumn添加纵栏，饼状图的第一个纵栏必须是类型必须是string类型，设置柱状图时第二个addColumn是用于设置轴线，其类型必须是num，饼状图是使用两个两个纵列数据**；

### 图形分类及API

#### AreaChart

区域绘图使用svg或者VML通过浏览器渲染；