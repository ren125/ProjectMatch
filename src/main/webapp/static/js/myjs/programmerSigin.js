var vm = new Vue({
    el: '#container',
    data: {
        emailData:[],
        formItem:{
            userId:'',
            password:'',
            password2:'',
            name:'',
            sex:'',
            age:18,
            education:'',
            phone:'',
            email:'',
            hoursalary:0,
            workfield:'',
            skill:[],
            experience:0
        },
        skills:[
            {
                value: '1',
                label: 'web应用开发'
            },
            {
                value: '2',
                label: '移动应用开发'
            },
            {
                value: '3',
                label: '微信小程序开发'
            },
            {
                value: '4',
                label: '桌面应用开发'
            },
            {
                value: '5',
                label: '系统架构设计'
            },
            {
                value: '6',
                label: '应用集成开发'
            },
            {
                value: '7',
                label: 'UE/UI设计'
            },
            {
                value: '8',
                label: '数据分析开发'
            },
            {
                value: '9',
                label: '软件测试'
            },
            {
                value: '10',
                label: '运营维护'
            },
            {
                value: '11',
                label: '项目管理'
            },
            {
                value: '12',
                label: '软件实施'
            }
        ]
    },
    mounted: function () {
    },
    methods:{
        commit:function(){
            $.ajax({
                type: 'GET',
                url: '/programmer/sigin',
                data:{
                    //formItem:vm.formItem
                userId:vm.formItem.userId,
                password:vm.formItem.password,
                name:vm.formItem.name,
                sex:vm.formItem.sex,
                age:vm.formItem.age,
                education:vm.formItem.education,
                phone:vm.formItem.phone,
                email:vm.formItem.email,
                hoursalary:vm.formItem.hoursalary,
                workfield:vm.formItem.workfield,
                skill1:vm.formItem.skill[0],
                skill2:vm.formItem.skill[1],
                experience:vm.formItem.experience
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