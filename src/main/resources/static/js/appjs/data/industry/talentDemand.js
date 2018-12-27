talentField = {
    cityList: [{
        code: "999",
        name: "北京市"
    }, {
        code: "999_001",
        name: "海淀区"
    }],
    datas: {
        "999_001": {
            colors: ['#F3F06C','#EA8AF8','#A842EA','#0CE8AF','#1A57DE','#57E2FE','#FF6849','#F03C37'],
            option: {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                title: {
                    text: '人才需求供给',
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: '16',

                    },
                    subtextStyle: {
                        color: '#889CF0'
                    },
                    top: '8%',
                    left: 'center'
                },
                legend: {
                    x: 'left',
                    data: ['电子信息', '生物医疗', '新能源材料', '人才需求', '人才供给'],
                    icon: "circle",
                    left: '10%',
                    bottom: "0%",
                    itemWidth: 10, //图例的宽度
                    itemHeight: 10, //图例的高度
                    margin: 10,
                    textStyle: {
                        color: '#fff',
                        fontSize: '12',
                        padding: [5, 10],
                    }
                },
                color: ['#F3F06C','#EA8AF8','#A842EA','#0CE8AF','#1A57DE','#57E2FE','#FF6849','#F03C37'],
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    //selectedMode: 'single',
                    radius: [0, '30%'],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        },

                    },
                    label: {
                        normal: {
                            position: 'inner',
                            formatter: "{b}"
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 46.5,
                        name: '电子信息',
                    },
                        {
                            value: 37.8,
                            name: '生物医疗'
                        },
                        {
                            value: 15.7,
                            name: '新能源材料'
                        }
                    ]
                },
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['40%', '55%'],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            emphasis: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        },
                        data: [{
                            value: 928966,
                            name: '人才需求',

                        },
                            {
                                value: 319740,
                                name: '人才供给'
                            },
                            {
                                value: 682451,
                                name: '人才需求'
                            },
                            {
                                value: 332626,
                                name: '人才供给'
                            },
                            {
                                value: 246157,
                                name: '人才需求'
                            },
                            {
                                value: 175449,
                                name: '人才供给'
                            }
                        ]
                    }
                ]
            }
		}
    }
}