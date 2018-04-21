var vm = new Vue({
    el: '#container',
    data : {
        formInline: {
            username: '',
            password: ''
        },
        formInline2: {
            username: '',
            password: ''
        },
        ruleInline: {
            username: [
                { required: true, message: '请输入用户名', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
            ]
        },
        ruleInline2: {
            username2: [
                { required: true, message: '请输入用户名', trigger: 'blur' }
            ],
            password2: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
            ]
        },

    },
    mounted: function () {
    },
    methods:{
        login:function(){
            $.ajax({
                type: 'GET',
                url: "/programmer/login",
                //contentType : "application/json;charset=UTF-8",
                data:{
                    username:vm.formInline.username,
                    password:vm.formInline.password
                },
                dataType:"text",
                success: function (data) {
                    if(data==="false"){
                        alert("用户名密码错误");
                    }else if(data==="true"){
                        window.location.href="/user/start";
                    }else {
                        alert("用户名密码错误");
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("用户名密码错误");
                }
            })
        },
        login2:function(){

        },
        sigin:function(){
            window.location.href="/programmer/toSigin";
        },
        sigin2:function(){

        }
    }
})