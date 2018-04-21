var vm = new Vue({
    el: '#container',
    data: {
        emailData:[],
        edutmp:'',
        formItem:{
            userId:'',
            name:'',
            sex:'',
            age:18,
            education:'',
            phone:'',
            email:'123',
            hoursalary:0,
            workfield:'',
            skill:[],
            experience:0
        },
        edu:["大专","本科","硕士","博士"],
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
        this.formItem.userId = $("#userId").text();
        $.ajax({
            type: 'POST',
            url: '/programmer/info',
            //contentType : "application/json;charset=UTF-8",
            data:{
                userId:this.formItem.userId,
            },
            dataType:"json",
            success: function (data) {
                vm.formItem.name = data.programmer.pName;
                vm.formItem.sex = data.programmer.pSex;
                vm.formItem.age = data.programmer.pAge;
                vm.edutmp = data.programmer.education;
                vm.formItem.education = vm.edu[data.programmer.education-1];
                vm.formItem.phone = data.programmer.pPhone;
                vm.formItem.email = data.programmer.pEamil;
                vm.formItem.hoursalary = data.programmer.hoursalary;
                vm.formItem.workfield = data.programmer.workField;
                vm.formItem.experience = data.programmer.workExperience;
                vm.formItem.score = data.programmer.overScore/20;
                //vm.formItem.skill = [data.list[0].skill_id,data.list[1].skill_id];
                vm.formItem.skill.push(data.list[0].skill_id);
                vm.formItem.skill.push(data.list[1].skill_id);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("服务器错误");
            }
        })
    },
    methods:{
        commit:function(formItem){
            $.ajax({
                type: 'POST',
                url: '/programmer/infoModify',
                //contentType : "application/json;charset=UTF-8",
                data:{
                    //formItem:vm.formItem
                    userId:vm.formItem.userId,
                    password:vm.formItem.password,
                    name:vm.formItem.name,
                    sex:vm.formItem.sex,
                    age:vm.formItem.age,
                    education:vm.edutmp,
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
                   if(data==="true"){
                        alert("修改成功!");
                    }else {
                        alert("修改失败");
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("服务器错误，修改失败");
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