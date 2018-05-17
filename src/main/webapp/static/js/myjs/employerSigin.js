var vm = new Vue({
    el: '#container',
    data: {
        emailData:[],
        formItem:{
            userId:'',
            password:'',
            password2:'',
            name:'',
            phone:'',
            email:''
        },
        ruleInline: {
            userId:[
                { required: true, message: '用户名不能为空', trigger: 'blur' },
            ],
            name:[
                { required: true, message: '名字不能为空', trigger: 'blur' },
            ],
            phone:[
                { required: true, message: '电话号码不能为空', trigger: 'blur' },
            ],
            email:[
                { required: true, message: '邮箱不能为空', trigger: 'blur' },
            ],
            password: [
                { required: true, message: '密码不能为空', trigger: 'blur' },
                { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
            ],
            password2: [
                { required: true, message: '密码不能为空', trigger: 'blur' },
                { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' },
                {validator:function(rule, value, callback, source, options) {
                    var errors = [];
                    if (vm.formItem.password!==vm.formItem.password2) {
                        callback('两次输入的密码不相同');
                    }
                    callback(errors);

                }}
            ]
        }
    },
    mounted: function () {
    },
    methods:{
        commit:function(){
            $.ajax({
                type: 'GET',
                url: '/employer/sigin',
                //contentType : "application/json;charset=UTF-8",
                data:{
                    eId:vm.formItem.userId,
                    password:vm.formItem.password,
                    name:vm.formItem.name,
                    phone:vm.formItem.phone,
                    email:vm.formItem.email,
                },
                dataType:"text",
                success: function (data) {
                    if(data==="false"){
                        alert("用户名已存在");
                    }else if(data==="true"){
                        alert("注册成功");
                        window.location.href="../index.jsp";
                    }else {
                        alert("注册失败");
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("服务器错误，注册失败");
                }
            })
        },
        cancel:function () {
            window.location.href="../../index.jsp";
        },
        emailSearch:function (value) {
            vm.emailData = !value || value.indexOf('@') >= 0 ? [] : [
                value + '@qq.com',
                value + '@sina.com',
                value + '@163.com'
            ];
        }
    }
})