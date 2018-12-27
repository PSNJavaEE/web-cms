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
		url : "/policy/policy/save",
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
            classify : "required",
            publishTime : "required",
            istop : "required",
            recomnum : "required",
            status : "required",
            content : "required"
		},
		messages : {
			title : "请填写政策标题",
            classify : "请选择政策类型",
            publishTime : "输入政策发布时间",
            istop : "请选择置顶状态",
            recomnum : "请输入推荐级别：0:未推荐，>1推荐级别",
				status : "请选择政策状态",
            content : "请输入政策内容"
		}
	});
}

function returnList() {
	var index = parent.layer.getFrameIndex(window.name); // 获取窗口索引
	parent.layer.close(index);
}