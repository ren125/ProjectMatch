var vm = new Vue({
    el: '#container',
    data:{
        formItem:{
            password:'',
            password1:'',
            password2:''
        },
        ruleInline: {
            password: [
                { required: true, message: '密码不能为空', trigger: 'blur' }
            ],
            password1: [
                { required: true, message: '密码不能为空', trigger: 'blur' },
                { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
            ],
            password2: [
                { required: true, message: '密码不能为空', trigger: 'blur' },
                { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' },
                {validator:function(rule, value, callback, source, options) {
                    var errors = [];
                    if (vm.formItem.password1!==vm.formItem.password2) {
                        callback('两次输入的密码不相同');
                    }
                    callback(errors);

                }}
            ]
        }
    },
    methods:{
        commit:function () {
            $.ajax({
                type: 'POST',
                url: '/employer/passwordModify',
                //contentType : "application/json;charset=UTF-8",
                data:{
                    eId:$("#userId").text(),
                    password:vm.formItem.password1
                },
                dataType:"json",
                success: function (data) {
                    if(data==true){
                        alert("修改成功")
                    }else{
                        alert("输入的原密码错误!")
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("服务器错误");
                }
            })
        }
    }
})

