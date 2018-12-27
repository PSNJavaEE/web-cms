content={
    titleTap: [{
        code: "001",
        name: "合作团队"
    },{
        code: "002",
        name: "论文成果"
    }],
    data: {
        "001": {
            colors : ['#9C27B0','#FF4081'],
            datas:[{
                name: '前端基础技能',
            }, {
                name: 'HTML',
            }, {
                name: 'CSS',
            }, {
                name: 'JS',
            }, {
                name: 'JQuery',
            }, {
                name: 'Sass',
            }, {
                name: 'Git',
            }, {
                name: 'Bootstrap',
            }, {
                name: 'thymeleaf',
            }],
            cloudChart: {
                animationEasingUpdate: 'quinticInOut',
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 12
                        },
                    }
                },
                series: [{
                    type: 'graph',
                    layout: 'force',
                    symbolSize: 80,
                    focusNodeAdjacency: true,
                    draggable: false,
                    force: {
                        repulsion: 2000,
                        layoutAnimation: false
                    },
                    graph:{
                        draggable:false,//不清楚是不是这样写 api看的 不顶用
                        roam:false
                    },
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                fontSize: 12
                            },
                        }
                    },
                    lineStyle: {
                        normal: {
                            opacity: 0.9,
                            width: 1,
                        },
                        emphasis: {
                            color: '#ec407a'
                        }
                    },
                    // data: datas,
                    data: [{
                        name: '前端基础技能',
                    }, {
                        name: 'HTML',
                    }, {
                        name: 'CSS',
                    }, {
                        name: 'JS',
                    }, {
                        name: 'JQuery',
                    }, {
                        name: 'Sass',
                    }, {
                        name: 'Git',
                    }, {
                        name: 'Bootstrap',
                    },{
                        name: 'thymeleaf',
                    }],
                    links: [{
                        source: 0,
                        target: 1,
                    }, {
                        source: 0,
                        target: 2,
                    }, {
                        source: 0,
                        target: 3,
                    }, {
                        source: 0,
                        target: 4,
                    }, {
                        source: 0,
                        target: 5,
                    }, {
                        source: 0,
                        target: 6,
                    }, {
                        source: 0,
                        target: 7,
                    },{
                        source: 0,
                        target: 8,
                    }]
                }]
            }
        },
        "002": {
            title:{
                /*text:"云词图",
                link:'https://github.com/ecomfe/echarts-wordcloud',
                subtext: 'data-visual.cn',
                sublink:'http://data-visual.cn',*/
            },
            tooltip: {},
            series: [{
                type: 'wordCloud',
                gridSize: 20,
                sizeRange: [12, 50],
                rotationRange: [0, 0],
                shape: 'circle',
                textStyle: {
                    normal: {
                        color: function() {
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: [{
                    name: 'Sam S Club',
                    value: 10000,
                    textStyle: {
                        normal: {
                            color: 'black'
                        },
                        emphasis: {
                            color: 'red'
                        }
                    }
                }, {
                    name: 'Macys',
                    value: 6181
                }, {
                    name: 'Amy Schumer',
                    value: 4386
                }, {
                    name: 'Jurassic World',
                    value: 4055
                }, {
                    name: 'Charter Communications',
                    value: 2467
                }, {
                    name: 'Chick Fil A',
                    value: 2244
                }, {
                    name: 'Planet Fitness',
                    value: 1898
                }, {
                    name: 'Pitch Perfect',
                    value: 1484
                }, {
                    name: 'Express',
                    value: 1112
                }, {
                    name: 'Home',
                    value: 965
                }, {
                    name: 'Johnny Depp',
                    value: 847
                }, {
                    name: 'Lena Dunham',
                    value: 582
                }, {
                    name: 'Lewis Hamilton',
                    value: 555
                }, {
                    name: 'KXAN',
                    value: 550
                }, {
                    name: 'Mary Ellen Mark',
                    value: 462
                }, {
                    name: 'Farrah Abraham',
                    value: 366
                }, {
                    name: 'Rita Ora',
                    value: 360
                }, {
                    name: 'Serena Williams',
                    value: 282
                }, {
                    name: 'NCAA baseball tournament',
                    value: 273
                }, {
                    name: 'Point Break',
                    value: 265
                }]
            }]
        }
    }
}