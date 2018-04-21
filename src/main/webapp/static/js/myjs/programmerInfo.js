var vm = new Vue({
    el: '#container',
    data: {
        emailData:[],
        formItem:{
            userId:'',
            name:'',
            sex:'',
            age:18,
            education:'',
            phone:'',
            email:'',
            hoursalary:0,
            workfield:'',
            skill1:'',
            skill2:'',
            skill1score:'',
            skill2score:'',
            experience:0,
            score:0
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
        ],
        edu:["大专","本科","硕士","博士"]
    },
    mounted: function () {
        this.formItem.userId = $("#userId").text();
        this.dataInit();
    },
    methods:{
        emailSearch:function (value) {
            vm.emailData = !value || value.indexOf('@') >= 0 ? [] : [
                value + '@qq.com',
                value + '@sina.com',
                value + '@163.com'
            ];
        },
        dataInit:function () {
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
                    vm.formItem.education = vm.edu[data.programmer.education-1];
                    vm.formItem.phone = data.programmer.pPhone;
                    vm.formItem.email = data.programmer.pEamil;
                    vm.formItem.hoursalary = data.programmer.hoursalary;
                    vm.formItem.workfield = data.programmer.workField;
                    vm.formItem.experience = data.programmer.workExperience;
                    vm.formItem.score = data.programmer.overScore/20;
                    vm.formItem.skill1 = data.list[0].skill_name;
                    vm.formItem.skill2 = data.list[1].skill_name;
                    vm.formItem.skill1score = data.list[0].skill_score;
                    vm.formItem.skill2score = data.list[1].skill_score;
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("服务器错误");
                }
            })
        }
    }
})