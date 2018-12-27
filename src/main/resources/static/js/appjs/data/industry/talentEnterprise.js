talentField = {
    cityList: [{
        code: "999_",
        name: "北京市"
    }, {
        code: "999_001",
        name: "海淀区"
    }],
    datas: {
        "999_001": {
            title: {
                text: '人才企业分布',
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: '16',

                },
                subtextStyle: {
                    color: '#889CF0'
                },
                top: '11%',
                left: '10%'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            grid: {
                top: '80%',
                left: 100
            },
            calculable: true,
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: [40, 90],
                roseType: 'area',
                data: [{
                    value: 10,
                    name: '民营企业',
                    itemStyle: {
                        normal: {
                            color: '#9087FC',

                        }
                    },
                    label: {
                        normal: {
                            formatter: ['{d}%', '{b}'].join('\n'),
                            textStyle: {
                                color: '#fff' // 改变标示文字的颜色
                            },

                        }
                    }
                },
                    {
                        value: 5,
                        name: '国企央企',
                        itemStyle: {
                            normal: {
                                color: '#5ECAF4',

                            }
                        },
                        label: {
                            normal: {
                                formatter: ['{d}%', '{b}'].join('\n'),
                                textStyle: {
                                    color: '#fff' // 改变标示文字的颜色
                                },
                            }
                        }
                    },
                    {
                        value: 15,
                        name: '科研院校',
                        itemStyle: {
                            normal: {
                                color: '#FC9D9D',

                            }
                        },
                        label: {
                            normal: {
                                formatter: ['{d}%', '{b}'].join('\n'),
                                textStyle: {
                                    color: '#fff' // 改变标示文字的颜色
                                },
                            }
                        }
                    },
                    {
                        value: 15,
                        name: '外企',
                        itemStyle: {
                            normal: {
                                color: '#1d410d',

                            }
                        },
                        label: {
                            normal: {
                                formatter: ['{d}%', '{b}'].join('\n'),
                                textStyle: {
                                    color: '#fff' // 改变标示文字的颜色
                                },
                            }
                        }
                    }
                ]
            }]
        }
    }
}