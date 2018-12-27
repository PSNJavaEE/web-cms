var  prefix = "/repository/scientist"
var datas=[];
var links=[];

//显示 团队
 function showTeam(){
   var uri  = document.getElementById("uri").value;
   var id  = document.getElementById("id").value;
   var domain  = document.getElementById("domain").value;
   params={"limit":8,"offset":0,"uri":uri,"id":id,domain:"domain"}

    var teamArray = [];
    var linkArray = [];
    $.ajax({
                url: prefix + "/telist",
                type: "get",
                data:params,
                async:false,
                success: function (data) {
                    rows = data.rows;
                    if(rows.length > 0){
                        for(i=0;i<rows.length;i++){
                        var temp = {"name":rows[i].tname}
                        var link = {"source":0,"target":i+1}
                         teamArray.push(temp);
                         linkArray.push(link);
                         document.getElementById("telist").innerHTML+="<li class=\"lh30\"> <p class=\"over\"><span class=\"order-num\" >"+(i+1)+"<\/span>"+rows[i].tname+"  "+rows[i].torg+"  H因子："+rows[i].thfactor+"  合作次数："+rows[i].tnum+"<\/p><\/li>";
                        }
                    }

                      datas = teamArray;
                      links = linkArray;

                }
            });
}

$(document).ready(function () {

                    showTeam();
                    showPaper();
                    showProject();
                    showPatent();
                    //合作团队

					let dom = document.getElementById("team");
					let myChart = echarts.init(dom);
					let app = {};
					option = null;
					var colors = ['#9C27B0','#FF4081'];

	
					for (var i = 0; i < datas.length; i++) {
						if (i === 0) {
							datas[i].itemStyle = {
								normal: {
									color: colors[0]
								}
							};
						} else {
							datas[i].itemStyle = {
								normal: {
									color: colors[1]
								}
							};
						}
					}
	
					option = {
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
							data: datas,
							links:links

						}]
					};
	
					myChart.on("mouseover", function(data) {
						// 取消节点连接线触发效果
						if (data.dataType == "edge") {
							myChart.dispatchAction({
								type: 'unfocusNodeAdjacency',
								seriesIndex: 0
							});
						}
					})
					if (option && typeof option === "object") {
						myChart.setOption(option, true);
					}


				
})



//显示 论文成果
  function showPaper(){
   var uri  = document.getElementById("uri").value;
   var id  = document.getElementById("id").value;
   var domain  = document.getElementById("domain").value;
   params={"limit":8,"offset":0,"uri":uri,"id":id,domain:"domain"}


    $.ajax({
                url: prefix + "/pplist",
                type: "get",
                data:params,
                 async:false,
                success: function (data) {
                    rows = data.rows;
                    if(rows.length > 0){
                        for(i=0;i<rows.length;i++){
                         document.getElementById("pplist").innerHTML+="<li class=\"marB10\"><a class=\"db\"><label class=\"db w-100 clearfix\"><p class=\"over w-80 fl f14 color_3E marB0\">"+
                         rows[i].paperName+"<\/p><span class=\"fr f12 color_ccc\">"+rows[i].quoteNum+"<\/span><\/label><label  class=\"db w-100 clearfix\">"+
                         "<span class=\"w-50 dib over f12 fl color_ccc marR10\">作者："+rows[i].paperAuthor+"<\/span><span class=\"w-50 dib over f12 fl color_ccc\">期刊："+rows[i].periodical+"<\/span>"+
                         "<\/label><\/a><\/li>";
                        }
                    }
                }
            });
}


//显示 专利
  function showPatent(){
   var uri  = document.getElementById("uri").value;
   var id  = document.getElementById("id").value;
   var domain  = document.getElementById("domain").value;
   params={"limit":8,"offset":0,"uri":uri,"id":id,domain:"domain"}
    $.ajax({
                url: prefix + "/palist",
                type: "get",
                data:params,
                 async:false,
                success: function (data) {
                    rows = data.rows;
                    if(rows.length > 0){
                        for(i=0;i<rows.length;i++){
                         document.getElementById("palist").innerHTML+="<li class=\"marB10\"><a class=\"db\"><label class=\"db w-100 clearfix\"><p class=\"over w-80 fl f14 color_3E marB0\">"+
                               rows[i].pathentName+"<\/p><\/label><label  class=\"db w-100 clearfix\">"+
                               "<span class=\"w-50 dib over f12 fl color_ccc marR10\">专利号："+rows[i].pathentNo+"<\/span><span class=\"w-50 dib over f12 fl color_ccc\">认证时间："+rows[i].pathentTime+"<\/span>"+
                               "<\/label><\/a><\/li>";
                        }
                    }
                }
            });
}


//显示 科研项目
 function showProject(){
   var uri  = document.getElementById("uri").value;
   var id  = document.getElementById("id").value;
   var domain  = document.getElementById("domain").value;
   params={"limit":8,"offset":0,"uri":uri,"id":id,domain:"domain"}

    $.ajax({
                url: prefix + "/prlist",
                type: "get",
                data:params,
                async:false,
                success: function (data) {
                    rows = data.rows;
                    if(rows.length > 0){
                        for(i=0;i<rows.length;i++){
                         document.getElementById("prlist").innerHTML+="<li class=\"marB10\"><a class=\"db\"><label class=\"db w-100 clearfix\"><p class=\"over w-80 fl f14 color_3E marB0\">"+
                                                 rows[i].projectName+"<\/p><span class=\"fr f12 color_ccc\">负责人："+rows[i].projectLeader+"<\/span><\/label><label  class=\"db w-100 clearfix\">"+
                                                 "<span class=\"w-50 dib over f12 fl color_ccc marR10\">"+rows[i].projectLeaderOrg+"<\/span><span class=\"fr f12 color_ccc\">"+rows[i].projectFund+"<\/span><span class=\"w-50 dib over f12 fl color_ccc\">关键词："+rows[i].projectKeyword+"<\/span>"+
                                                 "<\/label><\/a><\/li>";
                        }
                    }
                }
            });
}