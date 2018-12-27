var prefix = "/repository/outCome";
var limit = 10;
var offset = 0;
$(document).ready(function () {
    load();
    selectLi();
});
var load = function () {
var industry = "";
    lis = document.getElementById('industryUl').getElementsByTagName("li");
        for(var i=0;i<lis.length-1;i++){
            if(lis[i].className == 'active'){
                industry += ","+lis[i].innerHTML
            }
        }
    if(industry.length > 1){
        industry = industry.substring(1);
        params={"limit":limit,"offset":offset,"industry":industry}
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
                    rows = data.rows;
                    if(rows.length >0){
                       document.getElementById("rows").innerHTML="";
                        for(i=0;i<rows.length;i++){
                         document.getElementById("rows").innerHTML+="<li class=\"w-50 bg_ef padT10 padB10 fl marR30\"><a href=\"javascript:view("+rows[i].id+")\"><label class=\"col-md-9 col-sm-9\">"+
                         "<p class=\"over2 f14 color_3E\">"+rows[i].title+"<\/p><span class=\"color_ccc db\">成果所属："+rows[i].source+"<\/span>"+
                         "<span class=\"color_ccc db\">有效期至："+rows[i].completionTime+"<\/span><\/label><label class=\"col-md-3 col-sm-3\"><img  src=\"\/img\/chengguo.png\" class=\"width-60 db marT10\" \/>"+
                         "<span class=\"color_ccc db tc\">成果发布<\/span></\label><\/a><\/li>";
                        }
                    }

                }
            });

}


//选中领域，进行css样式渲染和赋值 https://www.cnblogs.com/dealblog/p/6885437.html
function selectLi(){
    $("ul#industryUl").on("click","li",function(){
        if($(this).index() != 1){
            if(this.getAttribute("class") != "active"){
                dm = $(this).text();
                $(this).addClass('active');
                load();
            }
        }else{
            //点击的是“全部”
            lis = document.getElementById('industryUl').getElementsByTagName("li");
            for(var i=0;i<lis.length;i++){
                lis[i].classList.add('active');
            }
            load();
        }
    })
}

function reLoad() {
    load();
}


function view(id) {
    var editPage = layer.open({
        type: 2,
        title: '成果详情',
        maxmin: true,
        shadeClose: false, // 点击遮罩关闭层
        area: ['800px', '520px'],
        content: prefix + '/view/' + id
    });
    layer.full(editPage);
}

function batchRemove() {
    // var rows = $('#exampleTable').bootstrapTable('getSelections');

}