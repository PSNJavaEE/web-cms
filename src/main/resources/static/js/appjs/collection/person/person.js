var prefix = "/collection/person"
$(document).ready(function () {
    load();
});
var load = function () {
    $('#exampleTable')
        .bootstrapTable(
            {
                /*id: 'id',
                code: 'id',
                parentCode: 'parentId',*/
                type: "GET", // 请求数据的ajax类型
                url: prefix + '/list', // 请求数据的ajax的url
                //ajaxParams: {sort:'order_num'}, // 请求数据的ajax的data属性
                ajaxParams: {offset:0,limit:10}, // 请求数据的ajax的data属性
                expandColumn: '1',// 在哪一列上面显示展开按钮
                striped: true, // 是否各行渐变色
                bordered: true, // 是否显示边框
                expandAll: false, // 是否全部展开
                dataType : "json", // 服务器返回的数据类型
                pagination : true, // 设置为true会在底部显示分页条
                singleSelect : false, // 设置为true将禁止多选
                pageSize : 10, // 如果设置了分页，每页数据条数
                pageNumber : 1, // 如果设置了分布，首页页码
                showColumns : true, // 是否显示内容下拉框（选择显示的列）
                iconSize : 'outline',
                toolbar : '#exampleToolbar',
                sidePagination : "server", // 设置在哪里进行分页，可选值为"client" 或者 "server"
                // toolbar : '#exampleToolbar',
                queryParams : function(params) {
                    return {
                        //说明：传入后台的参数包括offset开始索引，limit步长，sort排序列，order：desc或者,以及所有列的键值对
                        limit : params.limit,
                        offset : params.offset
                        // name:$('#searchName').val(),
                        // username:$('#searchName').val()
                    };
                },
                columns: [
                    {
                        title: '姓名',
                        field: 'userName',
                        align: 'center',
                        width: '5%'
                    },
                    {
                        title: '电话',
                        field: 'moible',
                        align: 'center',
                        width: '25%'
                    },

                    {
                        title: '学历',
                        field: 'highestEdu',
                        align: 'center',
                        width : '10%'
                    },
                    {
                        title: '求职岗位',
                        field: 'hopePost',
                        align: 'center',
                        width : '10%'
                    },
                    {
                        title: '发布时间',
                        field: 'createTime',
                        align: 'center',
                    },
                    {
                        title : '操作',
                        field : 'nid',
                        align : 'center',
                        formatter : function(value, row, index) {
                            var e = '<a class="btn btn-primary btn-sm '+s_edit_h+'" href="#" mce_href="#" title="编辑" onclick="edit(\''
                                + row.id
                                + '\')"><i class="fa fa-edit"></i></a> ';
                            var d = '<a class="btn btn-warning btn-sm '+s_remove_h+'" href="#" title="删除"  mce_href="#" onclick="remove(\''
                                + row.id
                                + '\')"><i class="fa fa-remove"></i></a> ';
                            var f = '<a class="btn btn-success btn-sm" href="#" title="预览"  mce_href="#" onclick="preview(\''
                                + row.id
                                + '\')"><i class="fa fa-rocket"></i></a> ';
                            return e + d +f;
                        }
                    }]
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

function edit(id) {
    var editPage = layer.open({
        type: 2,
        title: '新闻修改',
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