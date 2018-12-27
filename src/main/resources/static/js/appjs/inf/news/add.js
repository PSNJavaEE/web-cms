$().ready(function() {

	$('.summernote').summernote({
		height : '220px',
		lang : 'zh-CN',
		callbacks: {
            onImageUpload: function(files, editor, $editable) {
                sendFile(files);
            }
        }
	});
	validateRule();
});


$.validator.setDefaults({
	submitHandler : function() {
		save(1);
	}
});


function save(status) {
	/*$("#status").val(status);*/
	var content_sn = $("#content_sn").summernote('code');
	$("#content").val(content_sn);
	$.ajax({
		cache : true,
		type : "POST",
		url : "/inf/news/save",
		data : $('#signupForm').serialize(),// 你的formid
		async : false,
		error : function(request) {
			parent.layer.alert("Connection error");
		},
		success : function(r) {
			if (r.code == 0) {
				// parent.layer.msg(r.msg);
				// parent.reLoad();
				$("#id").val(r.id+"");
                if(confirm("操作成功,返回列表？")){
                    window.opener=null;
                    window.open('','_self');
                    window.close();
                    parent.location.reload()
                }

			} else {
				parent.layer.alert(r.msg)
			}
		}
	});
}
function validateRule() {
	var icon = "<i class='fa fa-times-circle'></i> ";
	$("#signupForm").validate({
		rules : {
			title : "required",
            categoryId : "required",
            commendState : "required",
            displayState : "required",
            description : "required",
            content : "required"
		},
		messages : {
			title : "请填写新闻标题",
            categoryId : "请选择新闻类型",
            commendState : "请选择推荐状态",
            displayState : "请选择显示状态",
            description : "请选择推荐状态",
            content : "请选择推荐状态"
		}
	});
}

function returnList() {
	var index = parent.layer.getFrameIndex(window.name); // 获取窗口索引
	parent.layer.close(index);
}