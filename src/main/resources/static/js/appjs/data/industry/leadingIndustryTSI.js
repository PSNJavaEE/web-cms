talentField = {
    cityList: [{
        code: "999",
        name: "北京市"
    }, {
        code: "999_001",
        name: "海淀区"
    }],
    datas: {
        "999": {
            title: {
                text: '六大行业TSI季度变化',
                subtext: 'TSI:人才紧缺指数',
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: '16',

                },
                subtextStyle: {
                    color: '#889CF0',
                    fontSize: '12',
                },
                top: '9%',
                left: '10%'
            },
            tooltip: {
                trigger: 'axis'
            },
            color: ['#F86464', '#574FF7', '#5FE6F2', '#ECFC7E', '#5CF9A4', '#9F5BFD'],
            legend: {
                data: ['互联网', '电子通讯', '金融', '房地产', '消费品', '机械制造'],
                icon: "circle",
                left: '20%',
                bottom: "0%",
                itemWidth: 10, //图例的宽度
                itemHeight: 10, //图例的高度
                margin: '10',
                textStyle: {
                    color: '#fff',
                    fontSize: '12',
                    padding: [5, 10],
                }
            },
            grid: {
                left: '13%',
                right: '4%',
                bottom: '13%',
                top: '22%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                min:'dataMin',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#0E2A43'
                    },
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    margin: 8,
                    interval: 0,
                    rotate: 30,
                    textStyle: {
                        fontSize: 10,
                        color: '#D5CBE8'
                    }
                },
                axisTick: {
                    show: false
                },
                data: ['2017Q3','2017Q4','2018Q1','2018Q2','2018Q3','2018Q4']
            },
            yAxis: {
                type: 'value',
                color: '#fff',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    formatter: '{value}' ,
                    margin: 10,
                    textStyle: {
                        fontSize: 14,
                        color: '#D5CBE8'
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
            },
            series: [{
                name: '互联网',
                type: 'line',
                smooth: true,
                symbol: "none",
                data: [0.60, 0.68, 0.90, 0.68, 0.90, 0.50],
                lineStyle: {
                    width: 3,
                    normal: {
                        width: 3,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: '#98F4FA' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#5FE6F2' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        opacity: 0.9
                    },
                }
            },
                {
                    name: '电子通讯',
                    type: 'line',
                    symbol: "none",
                    smooth: true,
                    data: [0.92, 0.63, 0.74, 0.87, 0.7, 0.83],
                    lineStyle: {
                        width: 3,
                        normal: {
                            width: 3,
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0,
                                    color: '#95FDD1' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#5CF9A4' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            opacity: 0.9
                        },
                    }
                },
                {
                    name: '金融',
                    type: 'line',
                    symbol: "none",
                    smooth: true,
                    data: [1.8, 1.5, 1.6, 1.74, 1.58, 1.6],
                    lineStyle: {
                        width: 3,
                        normal: {
                            width: 3,
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0,
                                    color: '#F7FEB5' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#ECFC7E' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            opacity: 0.9
                        },
                    }
                },
                {
                    name: '房地产',
                    type: 'line',
                    symbol: "none",
                    smooth: true,
                    data: [1.05, 1.2, 1.4, 1.18, 1.42, 1.8],
                    lineStyle: {
                        width: 3,
                        normal: {
                            width: 3,
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0,
                                    color: '#9087FC' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#574FF7' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            opacity: 0.9
                        },
                    }
                },
                {
                    name: '消费品',
                    type: 'line',
                    symbol: "none",
                    smooth: true,
                    data: [1.43, 1.6, 1.8, 1.6, 1.83, 2.38],
                    lineStyle: {
                        width: 3,
                        normal: {
                            width: 3,
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0,
                                    color: '#FC9D9D' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#F86464' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            opacity: 0.9
                        },
                    }
                },
                {
                    name: '机械制造',
                    type: 'line',
                    symbol: "none",
                    smooth: true,
                    data: [1.36, 1.08, 1.18, 1.37, 1.16, 1.16],
                    lineStyle: {
                        width: 3,
                        normal: {
                            width: 3,
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0,
                                    color: '#CD94FF' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#9F5BFD' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            opacity: 0.9
                        },
                    }
                }
            ]
        }
    }
}