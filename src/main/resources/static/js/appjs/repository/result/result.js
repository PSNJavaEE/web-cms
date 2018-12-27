var prefix = "/repository/result"
$(document).ready(function () {
    load();

});
var load = function () {

//    渲染UL
    $.ajax({
                url: prefix + "/list",
                type: "GET",
                data: params,
                success: function (data) {
                    total = data.total;
                    pageSize = data.pageSize;
                    pageNumber = data.pageNumber;
                    rows = data.rows;
                    $('#total').html(total);
                        for(i=0;i<rows.length;i++){
                         document.getElementById("rows").innerHTML+="<li class=\"row borderB\"><label class=\"col-md-10 col-sm-10\"><p> <span class=\"f18 color_58575D\">"+rows[i].scName+
                                                        "<\/span> <b class=\"f14 padL20 \">"+rows[i].scOrg+"<\/b><\/p><p class=\"f12 color_ccc\"><span>领域："+rows[i].scDomain+
                                                        ";<\/span><span>  引用率："+rows[i].quoteRate+"<\/span><span>  论文成果："+rows[i].paperNum+"<\/span><span>  H因子："+rows[i].hfactor+
                                                        "<\/span><\/p><\/label><button class=\"col-md-2 col-sm-2 df-v color_5A88AE tc pointer db lh80\" onclick='edit(\""+rows[i].uri+"\")'>查看详情<\/button><\/li>";
                        }


                }
            });
}


function reLoad() {
    load();
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

edit = function (uri) {
				alert("uri: "+uri);
				var editPage = layer.open({
					type: 2,
					title: '科学家详情',
					maxmin: true,
					shadeClose: false, // 点击遮罩关闭层
					area: ['800px', '520px'],
					content: prefix + '/edit/' + uri // iframe的url
				});
				layer.full(editPage);
			}
function batchRemove() {
    // var rows = $('#exampleTable').bootstrapTable('getSelections');
}