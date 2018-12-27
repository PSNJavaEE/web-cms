content={
    cityList: [{
        code: "999_2018",
        name: "全部",
    },{
        code: "999_2017",
        name: "全部",
    },{
        code: "999_2016",
        name: "全部",
    },{
        code: "999_2015",
        name: "全部",
    },{
        code: "999_2014",
        name: "全部",
    },{
        code: "999_2013",
        name: "全部",
    },{
        code: "999_2012",
        name: "全部",
    },{
        code: "999_2011",
        name: "全部",
    },{
        code: "999_2010",
        name: "全部",
    },{
        code: "010_2018",
        name: "北京"
    },{
        code: "010_2017",
        name: "北京"
    },{
        code: "010_2016",
        name: "北京"
    },{
        code: "010_2015",
        name: "北京"
    },{
        code: "010_2014",
        name: "北京"
    },{
        code: "010_2013",
        name: "北京"
    },{
        code: "010_2012",
        name: "北京"
    },{
        code: "010_2011",
        name: "北京"
    },{
        code: "010_2010",
        name: "北京"
    },{
        code: "011_2018",
        name: "武汉"
    },{
        code: "011_2017",
        name: "武汉"
    },{
        code: "011_2016",
        name: "武汉"
    },{
        code: "011_2015",
        name: "武汉"
    },{
        code: "011_2014",
        name: "武汉"
    },{
        code: "011_2013",
        name: "武汉"
    },{
        code: "011_2012",
        name: "武汉"
    },{
        code: "011_2011",
        name: "武汉"
    },{
        code: "011_2010",
        name: "武汉"
    },{
        code: "012_2018",
        name: "上海"
    },{
        code: "012_2017",
        name: "上海"
    },{
        code: "012_2016",
        name: "上海"
    },{
        code: "012_2015",
        name: "上海"
    },{
        code: "012_2014",
        name: "上海"
    },{
        code: "012_2013",
        name: "上海"
    },{
        code: "012_2012",
        name: "上海"
    },{
        code: "012_2011",
        name: "上海"
    },{
        code: "012_2010",
        name: "上海"
    },{
        code: "013_2018",
        name: "广州"
    },{
        code: "013_2017",
        name: "广州"
    },{
        code: "013_2016",
        name: "广州"
    },{
        code: "013_2015",
        name: "广州"
    },{
        code: "013_2014",
        name: "广州"
    },{
        code: "013_2013",
        name: "广州"
    },{
        code: "013_2012",
        name: "广州"
    },{
        code: "013_2011",
        name: "广州"
    },{
        code: "013_2010",
        name: "广州"
    },{
        code: "014_2018",
        name: "深圳"
    },{
        code: "014_2017",
        name: "深圳"
    },{
        code: "014_2016",
        name: "深圳"
    },{
        code: "014_2015",
        name: "深圳"
    },{
        code: "014_2014",
        name: "深圳"
    },{
        code: "014_2013",
        name: "深圳"
    },{
        code: "014_2012",
        name: "深圳"
    },{
        code: "014_2011",
        name: "深圳"
    },{
        code: "014_2010",
        name: "深圳"
    },{
        code: "015_2018",
        name: "天津"
    },{
        code: "015_2017",
        name: "天津"
    },{
        code: "015_2016",
        name: "天津"
    },{
        code: "015_2015",
        name: "天津"
    },{
        code: "015_2014",
        name: "天津"
    },{
        code: "015_2013",
        name: "天津"
    },{
        code: "015_2012",
        name: "天津"
    },{
        code: "015_2011",
        name: "天津"
    },{
        code: "015_2010",
        name: "天津"
    },{
        code: "016_2018",
        name: "南京"
    },{
        code: "016_2017",
        name: "南京"
    },{
        code: "016_2016",
        name: "南京"
    },{
        code: "016_2015",
        name: "南京"
    },{
        code: "016_2014",
        name: "南京"
    },{
        code: "016_2013",
        name: "南京"
    },{
        code: "016_2012",
        name: "南京"
    },{
        code: "016_2011",
        name: "南京"
    },{
        code: "016_2010",
        name: "南京"
    }],
     data: {
        "999_2018": {
            companyType: {
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
                    data: [47.5,25.9,20.2,4.8,1.6],
                }]
            },
            companyScale: {
                title: {
                    text: '企业规模分布'
                },
                series: [{
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    data:[{
                        value:1848,
                        // value:strJson.companyScale.medium,
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
                        value:1208,
                        //  value:strJson.companyScale.large,
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
                        value:2948,
                        // value:strJson.companyScale.small,
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
            },
            distribution: {
                title: {
                    text: '企业领域分布'
                },
                "yAxis": [{
                    //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                    "show": true,
                    "boundaryGap": true,
                    "type": "category",
                    "data": [
                        '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                        interval: 'auto'
                    }
                }],
                series: [{
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                return colorList[params.dataIndex]
                            }
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{c}%'
                        }
                    },
                   data: [1.4,1.8,2.6,2.8,3.5,4.2,5,8.7,10.4,13.2,14.9,15.5,16.6]
                }]
            }
        },
        "010_2018": {
            companyType: {
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
                    data: [48.6,24.3,15.3,5.2,4.4,2.2]
                }]
            },
            companyScale: {
                title: {
                    text: '企业规模分布'
                },
                series: [{
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    data:[{
                        value:1522,
                        // value:strJson.companyScale.medium,
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
                        value:1208,
                        //  value:strJson.companyScale.large,
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
                        value:2948,
                        // value:strJson.companyScale.small,
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
            },
            distribution: {
                title: {
                    text: '企业领域分布'
                },
                "yAxis": [{
                    //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                    "show": true,
                    "boundaryGap": true,
                    "type": "category",
                    "data": [
                        '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                        interval: 'auto'
                    }
                }],
                series: [{
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                return colorList[params.dataIndex]
                            }
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{c}%'
                        }
                    },
                    data: [0.1,0.1,0.3,0.5,2.5,3.9,7,7.3,8.7,9.1,10.2,13.9,17.5,18.9]
                }]
            }
        },
         "011_2018": {
             companyType: {
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
                     data: [43.5,37.6, 8.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1948,
                         // value:strJson.companyScale.medium,
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
                         value:1008,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.9,1,2.6,2.8,3.5,3.9,6,8.7,10.1,14.2,14.9,15.5,15.9]
                 }]
             }
         },
         "012_2018": {
             companyType: {
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
                     data: [47.5,25.9,20.2,4.8,1.6],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1848,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.8,2.6,2.8,3.5,4.2,5,8.7,10.4,13.2,14.9,15.5,16.6]
                 }]
             }
         },
         "013_2018": {
             companyType: {
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
                     data: [48.6,24.3,15.3,5.2,4.4,2.2]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1522,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.1,0.1,0.3,0.5,2.5,3.9,7,7.3,8.7,9.1,10.2,13.9,17.5,18.9]
                 }]
             }
         },
         "014_2018": {
             companyType: {
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
                     data: [43.5,37.6, 8.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1948,
                         // value:strJson.companyScale.medium,
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
                         value:1008,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.9,1,2.6,2.8,3.5,3.9,6,8.7,10.1,14.2,14.9,15.5,15.9]
                 }]
             }
         },
         "015_2018": {
             companyType: {
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
                     data: [43.5,37.6, 8.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1948,
                         // value:strJson.companyScale.medium,
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
                         value:1008,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.9,1,2.6,2.8,3.5,3.9,6,8.7,10.1,14.2,14.9,15.5,15.9]
                 }]
             }
         },
         "016_2018": {
             companyType: {
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
                     data: [48.6,24.3,15.3,5.2,4.4,2.2]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1522,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.1,0.1,0.3,0.5,2.5,3.9,7,7.3,8.7,9.1,10.2,13.9,17.5,18.9]
                 }]
             }
         },
         "999_2017": {
             companyType: {
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
                     data: [41.5,31.6, 16.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1548,
                         // value:strJson.companyScale.medium,
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
                         value:908,
                         //  value:strJson.companyScale.large,
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
                         value:2848,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.9,2,2.6,2.8,3.5,3.9,5.3,8.7,9.1,14.6,14.9,15.3,15.6]
                 }]
             }
         },
         "010_2017": {
             companyType: {
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
                     data: [47.5,30.6, 18.2,2.4,1.3],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1208,
                         // value:strJson.companyScale.medium,
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
                         value:838,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.5,2.6,2.8,3.5,3.9,6,7.7,10.1,14.4,14.9,15.5,16.7]
                 }]
             }
         },
         "011_2017": {
             companyType: {
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
                     data: [39.7,28.3, 16.2,8.8,7]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:948,
                         // value:strJson.companyScale.medium,
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
                         value:878,
                         //  value:strJson.companyScale.large,
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
                         value:2348,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.9,2,2.6,2.8,3.5,3.9,5,7.7,11.1,12.7,14.9,15.5,16.4]
                 }]
             }
         },
         "012_2017": {
             companyType: {
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
                     data: [47.5,30.6, 18.2,2.4,1.3],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1208,
                         // value:strJson.companyScale.medium,
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
                         value:838,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.5,2.6,2.8,3.5,3.9,6,7.7,10.1,14.4,14.9,15.5,16.7]
                 }]
             }
         },
         "013_2017": {
             companyType: {
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
                     data: [41.5,31.6, 16.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1548,
                         // value:strJson.companyScale.medium,
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
                         value:908,
                         //  value:strJson.companyScale.large,
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
                         value:2848,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.9,2,2.6,2.8,3.5,3.9,5.3,8.7,9.1,14.6,14.9,15.3,15.6]
                 }]
             }
         },
         "014_2017": {
             companyType: {
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
                     data: [47.5,30.6, 18.2,2.4,1.3],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1208,
                         // value:strJson.companyScale.medium,
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
                         value:838,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.5,2.6,2.8,3.5,3.9,6,7.7,10.1,14.4,14.9,15.5,16.7]
                 }]
             }
         },
         "015_2017": {
             companyType: {
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
                     data: [39.7,28.3, 16.2,8.8,7]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:948,
                         // value:strJson.companyScale.medium,
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
                         value:878,
                         //  value:strJson.companyScale.large,
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
                         value:2348,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.9,2,2.6,2.8,3.5,3.9,5,7.7,11.1,12.7,14.9,15.5,16.4]
                 }]
             }
         },
         "016_2017": {
             companyType: {
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
                     data: [41.5,31.6, 16.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1548,
                         // value:strJson.companyScale.medium,
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
                         value:908,
                         //  value:strJson.companyScale.large,
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
                         value:2848,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.9,2,2.6,2.8,3.5,3.9,5.3,8.7,9.1,14.6,14.9,15.3,15.6]
                 }]
             }
         },
         "999_2016": {
             companyType: {
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
                     data: [47.5,25.9,20.2,4.8,1.6],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1848,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.8,2.6,2.8,3.5,4.2,5,8.7,10.4,13.2,14.9,15.5,16.6]
                 }]
             }
         },
         "010_2016": {
             companyType: {
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
                     data: [48.6,24.3,15.3,5.2,4.4,2.2]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1522,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.1,0.1,0.3,0.5,2.5,3.9,7,7.3,8.7,9.1,10.2,13.9,17.5,18.9]
                 }]
             }
         },
         "011_2016": {
             companyType: {
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
                     data: [43.5,37.6, 8.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1948,
                         // value:strJson.companyScale.medium,
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
                         value:1008,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.9,1,2.6,2.8,3.5,3.9,6,8.7,10.1,14.2,14.9,15.5,15.9]
                 }]
             }
         },
         "012_2016": {
             companyType: {
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
                     data: [47.5,25.9,20.2,4.8,1.6],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1848,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.8,2.6,2.8,3.5,4.2,5,8.7,10.4,13.2,14.9,15.5,16.6]
                 }]
             }
         },
         "013_2016": {
             companyType: {
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
                     data: [48.6,24.3,15.3,5.2,4.4,2.2]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1522,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.1,0.1,0.3,0.5,2.5,3.9,7,7.3,8.7,9.1,10.2,13.9,17.5,18.9]
                 }]
             }
         },
         "014_2016": {
             companyType: {
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
                     data: [43.5,37.6, 8.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1948,
                         // value:strJson.companyScale.medium,
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
                         value:1008,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.9,1,2.6,2.8,3.5,3.9,6,8.7,10.1,14.2,14.9,15.5,15.9]
                 }]
             }
         },
         "015_2016": {
             companyType: {
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
                     data: [43.5,37.6, 8.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1948,
                         // value:strJson.companyScale.medium,
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
                         value:1008,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.9,1,2.6,2.8,3.5,3.9,6,8.7,10.1,14.2,14.9,15.5,15.9]
                 }]
             }
         },
         "016_2016": {
             companyType: {
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
                     data: [48.6,24.3,15.3,5.2,4.4,2.2]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1522,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.1,0.3,0.5,2.5,3.9,7,7.3,8.7,9.1,10.2,13.9,17.5,18.9]
                 }]
             }
         },
         "999_2015": {
             companyType: {
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
                     data: [41.5,31.6, 16.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1548,
                         // value:strJson.companyScale.medium,
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
                         value:908,
                         //  value:strJson.companyScale.large,
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
                         value:2848,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.9,2,2.6,2.8,3.5,3.9,5.3,8.7,9.1,14.6,14.9,15.3,15.6]
                 }]
             }
         },
         "010_2015": {
             companyType: {
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
                     data: [47.5,30.6, 18.2,2.4,1.3],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1208,
                         // value:strJson.companyScale.medium,
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
                         value:838,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.5,2.6,2.8,3.5,3.9,6,7.7,10.1,14.4,14.9,15.5,16.7]
                 }]
             }
         },
         "011_2015": {
             companyType: {
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
                     data: [39.7,28.3, 16.2,8.8,7]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:948,
                         // value:strJson.companyScale.medium,
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
                         value:878,
                         //  value:strJson.companyScale.large,
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
                         value:2348,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.9,2,2.6,2.8,3.5,3.9,5,7.7,11.1,12.7,14.9,15.5,16.4]
                 }]
             }
         },
         "012_2015": {
             companyType: {
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
                     data: [47.5,30.6, 18.2,2.4,1.3],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1208,
                         // value:strJson.companyScale.medium,
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
                         value:838,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.5,2.6,2.8,3.5,3.9,6,7.7,10.1,14.4,14.9,15.5,16.7]
                 }]
             }
         },
         "013_2015": {
             companyType: {
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
                     data: [41.5,31.6, 16.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1548,
                         // value:strJson.companyScale.medium,
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
                         value:908,
                         //  value:strJson.companyScale.large,
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
                         value:2848,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.9,2,2.6,2.8,3.5,3.9,5.3,8.7,9.1,14.6,14.9,15.3,15.6]
                 }]
             }
         },
         "014_2015": {
             companyType: {
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
                     data: [47.5,30.6, 18.2,2.4,1.3],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1208,
                         // value:strJson.companyScale.medium,
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
                         value:838,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.5,2.6,2.8,3.5,3.9,6,7.7,10.1,14.4,14.9,15.5,16.7]
                 }]
             }
         },
         "015_2015": {
             companyType: {
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
                     data: [39.7,28.3, 16.2,8.8,7]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:948,
                         // value:strJson.companyScale.medium,
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
                         value:878,
                         //  value:strJson.companyScale.large,
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
                         value:2348,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.9,2,2.6,2.8,3.5,3.9,5,7.7,11.1,12.7,14.9,15.5,16.4]
                 }]
             }
         },
         "016_2015": {
             companyType: {
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
                     data: [41.5,31.6, 16.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1548,
                         // value:strJson.companyScale.medium,
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
                         value:908,
                         //  value:strJson.companyScale.large,
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
                         value:2848,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.9,2,2.6,2.8,3.5,3.9,5.3,8.7,9.1,14.6,14.9,15.3,15.6]
                 }]
             }
         },
         "999_2014": {
             companyType: {
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
                     data: [47.5,25.9,20.2,4.8,1.6],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1848,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.8,2.6,2.8,3.5,4.2,5,8.7,10.4,13.2,14.9,15.5,16.6]
                 }]
             }
         },
         "010_2014": {
             companyType: {
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
                     data: [48.6,24.3,15.3,5.2,4.4,2.2]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1522,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.1,0.1,0.3,0.5,2.5,3.9,7,7.3,8.7,9.1,10.2,13.9,17.5,18.9]
                 }]
             }
         },
         "011_2014": {
             companyType: {
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
                     data: [43.5,37.6, 8.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1948,
                         // value:strJson.companyScale.medium,
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
                         value:1008,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.9,1,2.6,2.8,3.5,3.9,6,8.7,10.1,14.2,14.9,15.5,15.9]
                 }]
             }
         },
         "012_2014": {
             companyType: {
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
                     data: [47.5,25.9,20.2,4.8,1.6],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1848,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.8,2.6,2.8,3.5,4.2,5,8.7,10.4,13.2,14.9,15.5,16.6]
                 }]
             }
         },
         "013_2014": {
             companyType: {
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
                     data: [48.6,24.3,15.3,5.2,4.4,2.2]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1522,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.1,0.1,0.3,0.5,2.5,3.9,7,7.3,8.7,9.1,10.2,13.9,17.5,18.9]
                 }]
             }
         },
         "014_2014": {
             companyType: {
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
                     data: [43.5,37.6, 8.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1948,
                         // value:strJson.companyScale.medium,
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
                         value:1008,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.9,1,2.6,2.8,3.5,3.9,6,8.7,10.1,14.2,14.9,15.5,15.9]
                 }]
             }
         },
         "015_2014": {
             companyType: {
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
                     data: [43.5,37.6, 8.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1948,
                         // value:strJson.companyScale.medium,
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
                         value:1008,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.9,1,2.6,2.8,3.5,3.9,6,8.7,10.1,14.2,14.9,15.5,15.9]
                 }]
             }
         },
         "016_2014": {
             companyType: {
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
                     data: [48.6,24.3,15.3,5.2,4.4,2.2]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1522,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.1,0.1,0.3,0.5,2.5,3.9,7,7.3,8.7,9.1,10.2,13.9,17.5,18.9]
                 }]
             }
         },
         "999_2013": {
             companyType: {
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
                     data: [41.5,31.6, 16.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1548,
                         // value:strJson.companyScale.medium,
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
                         value:908,
                         //  value:strJson.companyScale.large,
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
                         value:2848,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.9,2,2.6,2.8,3.5,3.9,5.3,8.7,9.1,14.6,14.9,15.3,15.6]
                 }]
             }
         },
         "010_2013": {
             companyType: {
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
                     data: [47.5,30.6, 18.2,2.4,1.3],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1208,
                         // value:strJson.companyScale.medium,
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
                         value:838,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.5,2.6,2.8,3.5,3.9,6,7.7,10.1,14.4,14.9,15.5,16.7]
                 }]
             }
         },
         "011_2013": {
             companyType: {
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
                     data: [39.7,28.3, 16.2,8.8,7]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:948,
                         // value:strJson.companyScale.medium,
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
                         value:878,
                         //  value:strJson.companyScale.large,
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
                         value:2348,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.9,2,2.6,2.8,3.5,3.9,5,7.7,11.1,12.7,14.9,15.5,16.4]
                 }]
             }
         },
         "012_2013": {
             companyType: {
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
                     data: [47.5,30.6, 18.2,2.4,1.3],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1208,
                         // value:strJson.companyScale.medium,
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
                         value:838,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.5,2.6,2.8,3.5,3.9,6,7.7,10.1,14.4,14.9,15.5,16.7]
                 }]
             }
         },
         "013_2013": {
             companyType: {
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
                     data: [41.5,31.6, 16.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1548,
                         // value:strJson.companyScale.medium,
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
                         value:908,
                         //  value:strJson.companyScale.large,
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
                         value:2848,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.9,2,2.6,2.8,3.5,3.9,5.3,8.7,9.1,14.6,14.9,15.3,15.6]
                 }]
             }
         },
         "014_2013": {
             companyType: {
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
                     data: [47.5,30.6, 18.2,2.4,1.3],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1208,
                         // value:strJson.companyScale.medium,
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
                         value:838,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.5,2.6,2.8,3.5,3.9,6,7.7,10.1,14.4,14.9,15.5,16.7]
                 }]
             }
         },
         "015_2013": {
             companyType: {
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
                     data: [39.7,28.3, 16.2,8.8,7]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:948,
                         // value:strJson.companyScale.medium,
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
                         value:878,
                         //  value:strJson.companyScale.large,
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
                         value:2348,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.9,2,2.6,2.8,3.5,3.9,5,7.7,11.1,12.7,14.9,15.5,16.4]
                 }]
             }
         },
         "016_2013": {
             companyType: {
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
                     data: [41.5,31.6, 16.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1548,
                         // value:strJson.companyScale.medium,
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
                         value:908,
                         //  value:strJson.companyScale.large,
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
                         value:2848,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.9,2,2.6,2.8,3.5,3.9,5.3,8.7,9.1,14.6,14.9,15.3,15.6]
                 }]
             }
         },
         "999_2012": {
             companyType: {
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
                     data: [47.5,25.9,20.2,4.8,1.6],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1848,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.8,2.6,2.8,3.5,4.2,5,8.7,10.4,13.2,14.9,15.5,16.6]
                 }]
             }
         },
         "010_2012": {
             companyType: {
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
                     data: [48.6,24.3,15.3,5.2,4.4,2.2]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1522,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.1,0.1,0.3,0.5,2.5,3.9,7,7.3,8.7,9.1,10.2,13.9,17.5,18.9]
                 }]
             }
         },
         "011_2012": {
             companyType: {
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
                     data: [43.5,37.6, 8.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1948,
                         // value:strJson.companyScale.medium,
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
                         value:1008,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.9,1,2.6,2.8,3.5,3.9,6,8.7,10.1,14.2,14.9,15.5,15.9]
                 }]
             }
         },
         "012_2012": {
             companyType: {
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
                     data: [47.5,25.9,20.2,4.8,1.6],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1848,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.8,2.6,2.8,3.5,4.2,5,8.7,10.4,13.2,14.9,15.5,16.6]
                 }]
             }
         },
         "013_2012": {
             companyType: {
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
                     data: [48.6,24.3,15.3,5.2,4.4,2.2]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1522,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.1,0.1,0.3,0.5,2.5,3.9,7,7.3,8.7,9.1,10.2,13.9,17.5,18.9]
                 }]
             }
         },
         "014_2012": {
             companyType: {
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
                     data: [43.5,37.6, 8.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1948,
                         // value:strJson.companyScale.medium,
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
                         value:1008,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.9,1,2.6,2.8,3.5,3.9,6,8.7,10.1,14.2,14.9,15.5,15.9]
                 }]
             }
         },
         "015_2012": {
             companyType: {
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
                     data: [43.5,37.6, 8.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1948,
                         // value:strJson.companyScale.medium,
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
                         value:1008,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.9,1,2.6,2.8,3.5,3.9,6,8.7,10.1,14.2,14.9,15.5,15.9]
                 }]
             }
         },
         "016_2012": {
             companyType: {
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
                     data: [48.6,24.3,15.3,5.2,4.4,2.2]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1522,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.1,0.1,0.3,0.5,2.5,3.9,7,7.3,8.7,9.1,10.2,13.9,17.5,18.9]
                 }]
             }
         },
         "999_2011": {
             companyType: {
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
                     data: [41.5,31.6, 16.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1548,
                         // value:strJson.companyScale.medium,
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
                         value:908,
                         //  value:strJson.companyScale.large,
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
                         value:2848,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.9,2,2.6,2.8,3.5,3.9,5.3,8.7,9.1,14.6,14.9,15.3,15.6]
                 }]
             }
         },
         "010_2011": {
             companyType: {
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
                     data: [47.5,30.6, 18.2,2.4,1.3],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1208,
                         // value:strJson.companyScale.medium,
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
                         value:838,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.5,2.6,2.8,3.5,3.9,6,7.7,10.1,14.4,14.9,15.5,16.7]
                 }]
             }
         },
         "011_2011": {
             companyType: {
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
                     data: [39.7,28.3, 16.2,8.8,7]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:948,
                         // value:strJson.companyScale.medium,
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
                         value:878,
                         //  value:strJson.companyScale.large,
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
                         value:2348,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.9,2,2.6,2.8,3.5,3.9,5,7.7,11.1,12.7,14.9,15.5,16.4]
                 }]
             }
         },
         "012_2011": {
             companyType: {
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
                     data: [47.5,30.6, 18.2,2.4,1.3],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1208,
                         // value:strJson.companyScale.medium,
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
                         value:838,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.5,2.6,2.8,3.5,3.9,6,7.7,10.1,14.4,14.9,15.5,16.7]
                 }]
             }
         },
         "013_2011": {
             companyType: {
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
                     data: [41.5,31.6, 16.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1548,
                         // value:strJson.companyScale.medium,
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
                         value:908,
                         //  value:strJson.companyScale.large,
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
                         value:2848,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.9,2,2.6,2.8,3.5,3.9,5.3,8.7,9.1,14.6,14.9,15.3,15.6]
                 }]
             }
         },
         "014_2011": {
             companyType: {
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
                     data: [47.5,30.6, 18.2,2.4,1.3],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1208,
                         // value:strJson.companyScale.medium,
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
                         value:838,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.5,2.6,2.8,3.5,3.9,6,7.7,10.1,14.4,14.9,15.5,16.7]
                 }]
             }
         },
         "015_2011": {
             companyType: {
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
                     data: [39.7,28.3, 16.2,8.8,7]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:948,
                         // value:strJson.companyScale.medium,
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
                         value:878,
                         //  value:strJson.companyScale.large,
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
                         value:2348,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.9,2,2.6,2.8,3.5,3.9,5,7.7,11.1,12.7,14.9,15.5,16.4]
                 }]
             }
         },
         "016_2011": {
             companyType: {
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
                     data: [41.5,31.6, 16.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1548,
                         // value:strJson.companyScale.medium,
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
                         value:908,
                         //  value:strJson.companyScale.large,
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
                         value:2848,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.9,2,2.6,2.8,3.5,3.9,5.3,8.7,9.1,14.6,14.9,15.3,15.6]
                 }]
             }
         },
         "999_2010": {
             companyType: {
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
                     data: [47.5,25.9,20.2,4.8,1.6],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1848,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.8,2.6,2.8,3.5,4.2,5,8.7,10.4,13.2,14.9,15.5,16.6]
                 }]
             }
         },
         "010_2010": {
             companyType: {
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
                     data: [48.6,24.3,15.3,5.2,4.4,2.2]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1522,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.1,0.1,0.3,0.5,2.5,3.9,7,7.3,8.7,9.1,10.2,13.9,17.5,18.9]
                 }]
             }
         },
         "011_2010": {
             companyType: {
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
                     data: [43.5,37.6, 8.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1948,
                         // value:strJson.companyScale.medium,
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
                         value:1008,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.9,1,2.6,2.8,3.5,3.9,6,8.7,10.1,14.2,14.9,15.5,15.9]
                 }]
             }
         },
         "012_2010": {
             companyType: {
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
                     data: [47.5,25.9,20.2,4.8,1.6],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1848,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [1.4,1.8,2.6,2.8,3.5,4.2,5,8.7,10.4,13.2,14.9,15.5,16.6]
                 }]
             }
         },
         "013_2010": {
             companyType: {
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
                     data: [48.6,24.3,15.3,5.2,4.4,2.2]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1522,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.1,0.1,0.3,0.5,2.5,3.9,7,7.3,8.7,9.1,10.2,13.9,17.5,18.9]
                 }]
             }
         },
         "014_2010": {
             companyType: {
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
                     data: [43.5,37.6, 8.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1948,
                         // value:strJson.companyScale.medium,
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
                         value:1008,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.9,1,2.6,2.8,3.5,3.9,6,8.7,10.1,14.2,14.9,15.5,15.9]
                 }]
             }
         },
         "015_2010": {
             companyType: {
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
                     data: [43.5,37.6, 8.2,6.8,3.9],
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1948,
                         // value:strJson.companyScale.medium,
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
                         value:1008,
                         //  value:strJson.companyScale.large,
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
                         value:2548,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.9,1,2.6,2.8,3.5,3.9,6,8.7,10.1,14.2,14.9,15.5,15.9]
                 }]
             }
         },
         "016_2010": {
             companyType: {
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
                     data: [48.6,24.3,15.3,5.2,4.4,2.2]
                 }]
             },
             companyScale: {
                 title: {
                     text: '企业规模分布'
                 },
                 series: [{
                     name:'访问来源',
                     type:'pie',
                     radius: ['50%', '70%'],
                     avoidLabelOverlap: false,
                     data:[{
                         value:1522,
                         // value:strJson.companyScale.medium,
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
                         value:1208,
                         //  value:strJson.companyScale.large,
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
                         value:2948,
                         // value:strJson.companyScale.small,
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
             },
             distribution: {
                 title: {
                     text: '企业领域分布'
                 },
                 "yAxis": [{
                     //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                     "show": true,
                     "boundaryGap": true,
                     "type": "category",
                     "data": [
                         '新零售','煤炭化工','船舶制造','传统制造','汽车','卫星导航','新能源','运输物流','建筑工程','机械制造','生物医疗','互联网','金融'
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
                         interval: 'auto'
                     }
                 }],
                 series: [{
                     type: 'bar',
                     itemStyle: {
                         normal: {
                             color: function(params) {
                                 var colorList = ['#29AAE3','#29AAE3','#29AAE3','#29AAE3','#29AAE3', '#C33531','#C33531','#C33531','#C33531','#C33531','#C33531 ','#C33531','#C33531','#C33531' ];
                                 return colorList[params.dataIndex]
                             }
                         }
                     },
                     label: {
                         normal: {
                             show: true,
                             position: 'right',
                             formatter: '{c}%'
                         }
                     },
                     data: [0.1,0.1,0.3,0.5,2.5,3.9,7,7.3,8.7,9.1,10.2,13.9,17.5,18.9]
                 }]
             }
         }
    }
}