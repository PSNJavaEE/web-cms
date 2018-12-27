$(function() {


	var myChart = echarts.init(document.getElementById('main'));
	var myData = [

		{
			name: '海门',
			value: [121.15, 31.89, 90]
		},
		{
			name: '鄂尔多斯',
			value: [109.781327, 39.608266, 120]
		},
		{
			name: '招远',
			value: [120.38, 37.35, 142]
		},
		{
			name: '舟山',
			value: [122.207216, 29.985295, 123]
		},

	]
	var max = 480,
		min = 9; // todo 
	var maxSize4Pin = 50,
		minSize4Pin = 20;

	var convertData = function(data) {
		var res = [];
		for (var i = 0; i < data.length; i++) {
			var geoCoord = geoCoordMap[data[i].name];
			if (geoCoord) {
				res.push({
					name: data[i].name,
					value: geoCoord.concat(data[i].value),
				});
			}
		}
		return res;
	};
	var option = {
		geo: {
			map: 'china',
			itemStyle: { // 定义样式
				normal: { // 普通状态下的样式
					areaColor: '#323c48',
					borderColor: '#111'
				},
				emphasis: { // 高亮状态下的样式
					areaColor: '#2a333d'
				}
			}
		},
		backgroundColor: '#404a59', // 图表背景色
		series: [{
			name: '销量', // series名称
			type: 'scatter', // series图表类型
			coordinateSystem: 'geo', // series坐标系类型
			symbol: 'pin', //气泡
			symbolSize: function(val) {
				var a = (maxSize4Pin - minSize4Pin) / (max - min);
				var b = minSize4Pin - a * min;
				b = maxSize4Pin - a * max;
				return a * val[2] + b;
			},
			data: myData // series数据内容
		}]
	}

	myChart.setOption(option);
})
