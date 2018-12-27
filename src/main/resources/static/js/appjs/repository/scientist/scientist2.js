var prefix = "/repository/scientist";
var domain;
$(document).ready(function () {
    load();
});
var load = function (){
        domain="";
        lis = document.getElementById('selectedDomain').getElementsByTagName("li");
        if(lis.length > 1){
            for(var i=0;i<lis.length-1;i++){
                domain += ","+lis[i].innerHTML
            }
            domain = domain.substring(1);
        }
    $('#exampleTable')
        .bootstrapTable(
            {
                /*id: 'id',
                code: 'id',
                parentCode: 'parentId',*/
                type: "GET", // 请求数据的ajax类型
                url: prefix + '/list', // 请求数据的ajax的url
                //ajaxParams: {sort:'order_num'}, // 请求数据的ajax的data属性
                ajaxParams: {offset:0,limit:10,domain:domain}, // 请求数据的ajax的data属性
                expandColumn: '0',// 在哪一列上面显示展开按钮
                striped: true, // 是否各行渐变色
                bordered: true, // 是否显示边框
                expandAll: false, // 是否全部展开
                dataType : "json", // 服务器返回的数据类型
                pagination : true, // 设置为true会在底部显示分页条
                singleSelect : false, // 设置为true将禁止多选
                pageSize : 10, // 如果设置了分页，每页数据条数
                pageNumber : 1, // 如果设置了分布，首页页码
                showColumns : false, // 是否显示内容下拉框（选择显示的列）
                iconSize : 'outline',
                toolbar : '#toolbar',
                sidePagination : "server", // 设置在哪里进行分页，可选值为"client" 或者 "server"
                queryParams : function(params) {
                    return {
                        //说明：传入后台的参数包括offset开始索引，limit步长，sort排序列，order：desc或者,以及所有列的键值对
                        limit : params.limit,
                        offset : params.offset,
                        domain:domain
                    };
                },
                columns: [
                    {
                        title : '',
                        field : 'pid',
                        align : 'left',
                        width: '100%',
                        formatter : function(value, row, index) {
                            var e = '<div class="row "><label class="col-md-10 col-sm-10"><p> <span class="f18 color_58575D">'+row.scName+'</span>' +
                                '<b class="f14 padL20 ">'+row.scOrg+'</b></p><p class="f12 color_ccc"><span>领域：'+row.scDomain+';</span><span>  引用率：'+row.quoteRate+'</span>' +
                                '<span>  论文成果：'+row.paperNum+'</span><span>  H因子：'+row.hfactor+'</span></p>' +
                                '</label><a class="col-md-2 col-sm-2 df-v color_5A88AE tc pointer db lh80" href="javascript:edit(\''+row.uri+'\')" >查看详情</a></div>';
                            return e;
                        }
                    }]
            });
}


function reLoad() {
    domain="";
    lis = document.getElementById('selectedDomain').getElementsByTagName("li");
    if(lis.length > 1){
        for(var i=0;i<lis.length-1;i++){
            domain += ","+lis[i].innerHTML
        }
        domain = domain.substring(1);
    }
    //触发分页查询
    var opt = {
        query : {
            domain : domain,
        }
    }
    $('#exampleTable').bootstrapTable('refresh', opt);
}

//选中领域，进行css样式渲染和赋值
    $("ul#domain").on("click","li",function(){
        if($(this).index() != 1){
            if(this.getAttribute("class") != "active"){
                dm = $(this).text();
                $(this).addClass('active');
                document.getElementById("delAllDm").remove();
                document.getElementById("selectedDomain").innerHTML+="<li class=\"cactive marR50 marL50\">"+dm+"</li>"
                document.getElementById("selectedDomain").innerHTML+="<li class=\"color_ccc\" onclick=\"delAllSelcted()\" id=\"delAllDm\">清除全部<\/li>"
            }
        }else{
            //点击的是“全部”
            lis = document.getElementById('domain').getElementsByTagName("li");
            document.getElementById("delAllDm").remove();
            for(var i=1;i<lis.length;i++){
                document.getElementById("selectedDomain").innerHTML+="<li class=\"cactive marR50 marL50\">"+lis[i].innerHTML+"</li>"
            }
            document.getElementById("selectedDomain").innerHTML+="<li class=\"color_ccc\" onclick=\"delAllSelcted()\" id=\"delAllDm\">清除全部<\/li>"
        }
        reLoad();
        })

function delAllSelcted(){
            //删除所有选中的domain
           $("#selectedDomain").find("li").remove();
           lls = document.getElementById("domain").getElementsByTagName("li");
           for(i=0;i<lls.length;i++){
            lls[i].classList.remove('active');
           }
           document.getElementById("selectedDomain").innerHTML+="<li class=\"color_ccc\" onclick=\"delAllSelcted()\" id=\"delAllDm\">清除全部<\/li>"
           reLoad();
   }


function add() {
    var addPage = layer.open({
        type: 2,
        title: '增加',
        maxmin: true,
        shadeClose: false, // 点击遮罩关闭层
        area: ['800px', '520px'],
        content:  prefix + '/add' // iframe的url
    });
    layer.full(addPage);
}

function remove(id) {
    layer.confirm('确定要删除选中的记录？', {
        btn: ['确定', '取消']
    }, function () {
        $.ajax({
            url: prefix + "/remove",
            type: "post",
            data: {
                'id': id
            },
            success: function (data) {
                if (data.code == 0) {
                    layer.msg("删除成功");
                    window.location.reload();
                } else {
                    layer.msg(data.msg);
                }
            }
        });
    })
}

function edit(id) {
    var editPage = layer.open({
        type: 2,
        title: '职位修改',
        maxmin: true,
        shadeClose: false, // 点击遮罩关闭层
        area: ['800px', '520px'],
        content: prefix + '/edit/' + id // iframe的url
    });
    layer.full(editPage);
}

function batchRemove() {
    // var rows = $('#exampleTable').bootstrapTable('getSelections');

}