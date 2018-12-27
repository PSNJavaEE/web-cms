var companyType = "";
$(function() {
    /*enterType();
	enterScale()
	enterLocation();*/

    //getJsonData("all");
    // getJsonData2("all");
    //getJsonData3("全部");

    getJSData("全部");
});

/*function getJsonData(params){
    var strJson = "";
    $.getJSON("/json/data/haha.json",function(result){
        $.each(result, function(index, field){
            strJson = field[params];
            console.info(strJson);
        });
        console.info(strJson);
        enterType(strJson);
        enterScale(strJson)
        enterLocation(strJson);
    });
}

function getJsonData2(param){
    var strJson = "";
    var strCityList = "";
    var indexJson = -1;
    $.getJSON("/json/data/industry.json",function(result){
        console.info(result);
        $.each(result, function(ind, field){
            if(ind == "content"){
                strCityList = field["cityList"];
                console.info(strCityList);
                //获取角标
                for(var i=0;i<strCityList.length;i++){
                    if(strCityList[i]==param){
                        indexJson=i;
                        console.info(indexJson);
                    }
                }
                //通过角标获取具体值。
                strJson = field["dataList"][indexJson];
                console.info(strJson);
             }
        });
        //console.info(strJson);
        /!*enterType(strJson);
        enterScale(strJson)
        enterLocation(strJson);*!/
    });
}

function getJsonData3(params){
    var strJson = "";
    var strCityList = "";
    var indexJson = -1;
    var cityCode = "999";
    $.getJSON("/json/data/test.json",function(result){
        console.info("xxx:"+JSON.stringify(result));
        $.each(result, function(ind, field){
            if(ind == "content"){
                strCityList = field["cityList"];
                //获取角标
                for(var i=0;i<strCityList.length;i++){
                    if(strCityList[i]["name"]==params){
                        cityCode = strCityList[i]["code"];
                    }
                }
                //通过code获取具体值。
                strJson = field["data"][cityCode];

                enterType(strJson);
            }
        });
    });
}*/

function getJSData(loation){
    var content = content;
    console.info(content);
    var cityList = content.cityList;
    var code = "-1";
    for(i = 0; i<cityList.length; i++){
        if(cityList[i].name == loation){
            code = cityList[i].code;
            console.info(code);
        }
    }
    companyType = content.data[code].companyType;
    console.info(companyType);
}

function enterType(strJson) {
    console.info(strJson);
	// 初始化图表标签
	let dom = document.getElementById("enterType");
	let myChart = echarts.init(dom);
	let app = {};
	option = null;
	option = companyType;
	/*option = {
        title: {
            text: '企业类型分布'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['民企/私企', '国企', '外企(含港澳台)', '机关单位', '其他'],
            splitLine: {
                show: false
            },
            axisTick: {
                alignWithLabel: false
            },
            "axisLine": { //y轴
                "show": false
            },
            "axisTick": { //y轴刻度线
                "show": false
            },
            "splitLine": { //网格线
                "show": false
            }
        }],
        yAxis: [{
            type: 'value',
            show:false,
            splitLine: {
                show: false
            },
            splitArea: {
                show: false,
            },
        }],
        series: [{
            type: 'bar',
            barWidth:20,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%'
                }
            },
            itemStyle: {
                normal: {
                    // 随机显示
                    //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}

                    // 定制显示（按顺序）
                    color: function(params) {
                        var colorList = ['#C33531','#29AAE3','#29AAE3','#29AAE3','#29AAE3'];
                        return colorList[params.dataIndex]
                    }
                },
            },
            // data: [83.5,7.6, 6.2,1.8,0.9],
            data: [strJson.companyType.privateEnterprise,strJson.companyType.stateEnterprise, strJson.companyType.foreignEnterprise,
                strJson.companyType.governmentUnit,strJson.companyType.other],
        }]
    };*/
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
}

function enterScale(strJson){
	var dom = document.getElementById("enterScale");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title: {
            text: '企业规模分布'
        },
        series: [{
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            data:[{
                    // value:1548,
                    value:strJson.companyScale.medium,
                    name: '中型企业(100-999人)',
                    label: {
                    normal: {
                        formatter: ['{d}%','{b}'].join('\n'),
                        rich: {
                            title: {
                                color: '#eee',
                                align: 'center',
                                fontSize:'14',
                                color:'#333'
                            },
                            rate: {
                                width: 40,
                                align: 'left',
                                padding: [0, 10, 0, 0],
                                fontSize:'18'
                            },

                        }
                    }
                }
                },{
                    // value:1508,
                    value:strJson.companyScale.large,
                    name: '大型企业(1000人以上)',
                    label: {
                        normal: {
                            formatter:['{d}%','{b}'].join('\n'),
                            rich: {
                                title: {
                                    color: '#eee',
                                    align: 'center',
                                    fontSize:'14',
                                    color:'#333'
                                },
                                rate: {
                                    width: 40,
                                    align: 'left',
                                    padding: [0, 10, 0, 0],
                                    fontSize:'18'
                                },
                            }
                         }
                    }
                },{
                    // value:1548,
                    value:strJson.companyScale.small,
                    name: '小型企业(100人以下)',
                    label: {
                        normal: {
                            formatter:['{d}%','{b}'].join('\n'),
                            rich: {
                                title: {
                                    color: '#eee',
                                    align: 'center',
                                    fontSize:'14',
                                    color:'#333'
                                },
                                rate: {
                                    width: 40,
                                    align: 'left',
                                    padding: [0, 10, 0, 0],
                                    fontSize:'18'
                                },
                            }
                        }
                    }
                },
            ],
         //color: ['rgb(254,67,101)','rgb(252,157,154)','rgb(249,205,173)','rgb(200,200,169)','rgb(131,175,155)']
        }]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function enterLocation(strJson) {
	let dom = document.getElementById("enterLocation");
	let myChart = echarts.init(dom);
	let app = {};
	option = null;
	option = {
		title: {
			text: '企业所在地分布',
		},
		"yAxis": [{
			//就是一月份这个显示为一个线段，而不是数轴那种一个点点
			"show": true,
			"boundaryGap": true,
			"type": "category",
			"data": [
				'南昌','成都','郑州','重庆','天津','长达','南京','杭州','武汉','深圳','广州','上海','北京'        
			],
			"axisLine": { //y轴
				"show": false

			},
			"axisTick": { //y轴刻度线
				"show": false

			},
			"splitLine": { //网格线
				"show": false
			}
		}],
		"xAxis": [{
			"show": false,
			"type": "value",
			"splitLine": {
				"show": false
			},
			//formatter: '{value} %',
			axisLabel: {
                  show: true,
                  interval: 'auto',

                },
		}],
		series: [{
			type: 'bar',
			itemStyle: {
				normal: {
					color: function(params) { 
						var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ]; 
						return colorList[params.dataIndex] 
					}
				},
			},
			label: {
            normal: {
                show: true,
                position: 'right',
				formatter: '{c}%'
            }
        },
			// data: [3.2,4.6,7.6,7.8,8.5,9.9,11,13.7,21.1,24.2,24.9,25.5,25.9],
            data: [strJson.distribution.newRetail,strJson.distribution.coalChemical,
                strJson.distribution.Shipbuilding,strJson.distribution.traditionalBuilding,strJson.distribution.automobile,
                strJson.distribution.satelliteNavigation,strJson.distribution.newEnergy,strJson.distribution.logistics,
                strJson.distribution.architecture,strJson.distribution.machineBuilding,strJson.distribution.biomedical,
                strJson.distribution.internet,strJson.distribution.finance],
		}]
	};
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
}
