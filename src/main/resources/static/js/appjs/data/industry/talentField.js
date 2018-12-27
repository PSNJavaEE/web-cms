talentField = {
    cityList: [{
        code: "999",
        name: "北京市"
    },{
        code: "999_001",
        name: "海淀区"
    }],
	datas: {
		"999_001":{
            xData: ['材料工程1', '卫星导航2', '新能源材料', '节能环保 ', '化学化工', '机械制造', '生物医疗', '电子信息'],
            data: [16.1, 22.5, 26.4, 30.4, 32.1, 36.5, 38.4, 40.7],
            option = {
                title: {
                    text: '人才领域分布',
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: '16'
                    },
                    subtextStyle: {
                        color: '#889CF0'
                    },
                    top: '8%',
                    left: '10%'
                },
                tooltip: {
                    show: false,
                    trigger: 'item',
                    backgroundColor: 'rgba(255,255,255,0)', // 背景
                    padding: [10, 10], //内边距
                },
                grid: {
                    // borderWidth: 0,
                    top: '19%',
                    left: '10%',
                    right: 75,
                    bottom: 5,
                    textStyle: {
                        color: "#fff"
                    }
                },
                yAxis: [{
                    type: 'category',
                    position: [0, '-100%'],
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#363e83',
                        }
                    },
                    axisLabel: {
                        show: false,
                        inside: false,
                        textStyle: {
                            color: 'red' || '#bac0c0',
                            fontWeight: 'normal',
                            fontSize: '12',
                        },
                        // formatter:function(val){
                        //     return val.split("").join("\n")
                        // },
                    },
                    data: ['材料工程', '卫星导航', '新能源材料', '节能环保 ', '化学化工', '机械制造', '生物医疗', '电子信息']
                }, {
                    type: 'category',
                    position: [0, '-100%'],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        inside: false,
                        textStyle: {
                            color: '#fff',
                            fontWeight: 'normal',
                            fontSize: '12',
                        },
                        position: [0, '-100%'],
                        formatter: function(val) {
                            return `${val}%`
                        },
                    },
                    splitArea: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    data: [10.2, 16.2, 18.8, 22.1, 25.3, 27.4, 37.2, 47.2]
                }],
                xAxis: {
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,

                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: '#2f3640 ',
                        }
                    },
                    axisLabel: {
                        show: false,
                        textStyle: {
                            color: '#fff',
                            fontWeight: 'normal',
                            fontSize: '12',
                        },
                    },
                },
                series: [{
                    name: '',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            show: true,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#5EA7F4'
                            }, {
                                offset: 1,
                                color: '#3052D5'
                            }]),
                            barBorderRadius: 50,
                            borderWidth: 20,
                        },
                        emphasis: {
                            shadowBlur: 15,
                            shadowColor: 'rgba(105,123, 214, 0.1)'
                        }
                    },
                    zlevel: 2,
                    barWidth: '20%',
                    data: [16.1, 22.5, 26.4, 30.4, 32.1, 36.5, 38.4, 40.7],
                    label: {
                        normal: {
                            color: '#fff',
                            show: true,
                            //position: 'center',
                            position: ['0', '-280%'],
                            textStyle: {
                                fontSize: 14,
                                color: '#fff',
                                fontWeight: 'normal',
                                fontFamily: 'PingFangSC'
                            },
                            formatter: function(a, b) {
                                return a.name;
                            }
                        }
                    },
                },
                    {
                        name: '',
                        type: 'bar',
                        yAxisIndex: 1,
                        zlevel: 1,
                        itemStyle: {
                            normal: {
                                color: 'rgba(255,255,255,0)', //柱子背景色

                                shadowBlur: {
                                    shadowColor: 'rgba(255,255,255,0.31)',
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 2,
                                },
                            }
                        },
                        label: {
                            normal: {
                                color: '#fff',
                                show: false,
                                //position: 'center',
                                position: [0, '-200%'],
                                textStyle: {
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                },
                                formatter: 1212 || '{b}\n{c}%'
                            }
                        },
                        barWidth: '20%',
                        data: [30, 30, 30, 30, 30, 30, 30, 30]
                    }
                ]
            }
		}
	}
}