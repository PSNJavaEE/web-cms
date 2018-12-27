$().ready(function() {
	/*$('.summernote').summernote({
		height : '220px',
		lang : 'zh-CN',
        callbacks: {
            onImageUpload: function(files, editor, $editable) {
                console.log("onImageUpload");
                sendFile(files);
            }
        }
    });*/

   /* var reqPost =  $("#reqPost").val();
    $('#reqPost_sn').summernote('code', reqPost);

    var postDesc =  $("#postDesc").val();
    $('#postDesc_sn').summernote('code', postDesc);*/

	validateRule();
});

$.validator.setDefaults({
	submitHandler : function() {
		save();
	}
});
function edit(status) {

  /*  var reqPost_sn = $("#reqPost_sn").summernote('code');
    $("#reqPost").val(reqPost_sn);

    var postDesc_sn = $("#postDesc_sn").summernote('code');
    $("#postDesc").val(postDesc_sn);*/
	$.ajax({
		cache : true,
		type : "POST",
		url : "/p/post/saveOrUpdate",
		data : $('#signupForm').serialize(),// 你的formid
		async : false,
		error : function(request) {
			parent.layer.alert("Connection error");
		},
		success : function(data) {
			if (data.code == 0) {
				// parent.layer.msg("");
                if(confirm("操作成功,返回列表？")){
                    window.opener=null;
                    window.open('','_self');
                    window.close();
                    parent.location.reload()
                }

			} else {
				parent.layer.alert(data.msg)
			}

		}
	});

}
function validateRule() {
	var icon = "<i class='fa fa-times-circle'></i> ";
	$("#signupForm").validate({
		rules : {
            postName : {
				required : true
			},
            recruitNum : {
                required : true
            },
            deptName : {
                required : true
            },
            address : {
                required : true
            },
            postSalary : {
                required : true
            },
            reqEdu : {
                required : true
            },
            reqExp : {
                required : true
            },
            reqPost : {
                required : true
            },
            postDesc : {
                required : true
            }
		},
		messages : {
            postName : {
				required : icon + "请输入职位名称"
			},
            recruitNum : {
                required :  icon + "请输入招聘数量"
            },
            deptName : {
                required :  icon + "请输入部门名称"
            },
            address : {
                required :  icon + "请输入职位地址"
            },
            postSalary : {
                required :  icon + "请输入薪资范围"
            },
            reqEdu : {
                required :  icon + "请输入学历要求"
            },
            reqExp : {
                required :  icon + "请输入工作经验"
            },
            reqPost : {
                required :  icon + "请输入职位要求"
            },
            postDesc : {
                required :  icon + "请输入职位描述"
            }
        }
	})
}

function returnList() {
	var index = parent.layer.getFrameIndex(window.name); // 获取窗口索引
	parent.layer.close(index);
}

