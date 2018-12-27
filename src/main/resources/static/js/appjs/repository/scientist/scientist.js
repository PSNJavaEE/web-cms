var prefix = "/repository/scientist"
var limit = 10;
var offset = 0;
$(document).ready(function () {
    load();
    selectLi();
});
var load = function () {
    var domain = "";
    lis = document.getElementById('selectedDomain').getElementsByTagName("li");
    if(lis.length > 1){
        for(var i=0;i<lis.length-1;i++){
            domain += ","+lis[i].innerHTML
        }
        domain = domain.substring(1);
        params={"limit":limit,"offset":offset,"domain":domain}
    }else{
        params={"limit":limit,"offset":offset}
    }
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


$("#cityUl").children().click(function(){
             $(this).parent().children().removeClass("active");
             $(this).addClass("active");
             getJSData($(this).html());
});

//选中领域，进行css样式渲染和赋值
function selectLi(){
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
    })

}

function delAllSelcted(){
        //删除所有选中的domain
       $("#selectedDomain").find("li").remove();
       lls = document.getElementById("domain").getElementsByTagName("li");
       for(i=0;i<lls.length;i++){
        lls[i].classList.remove('active');
       }

       document.getElementById("selectedDomain").innerHTML+="<li class=\"color_ccc\" onclick=\"delAllSelcted()\" id=\"delAllDm\">清除全部<\/li>"
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
				var editPage = layer.open({
					type: 2,
					title: '科学家详情',
					maxmin: true,
					shadeClose: false, // 点击遮罩关闭层
					area: ['800px', '520px'],
					content:'/repository/scientist/edit/' + uri // iframe的url
				});
				layer.full(editPage);
			}
function batchRemove() {
    // var rows = $('#exampleTable').bootstrapTable('getSelections');

}