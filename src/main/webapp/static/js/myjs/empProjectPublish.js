var vm = new Vue({
    el:"#container",
    data:{
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
        formItem:{
            proName:'',
            proField:'',
            skill:[],
            lastDate:'',
            proLanguage:'',
            proSdk:'',
            proMoney:0,
            proPeriod:null,
            ifStay:'无需驻场',
            proOverview:''
        }
    },
    mounted:function () {

    },
    methods:{
        getLocalTime:function(obj) {
            var date = new Date(obj);
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            var h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            var minute = date.getMinutes();
            var second = date.getSeconds();
            minute = minute < 10 ? ('0' + minute) : minute;
            second = second < 10 ? ('0' + second) : second;
            return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
        },
        commit:function () {
            $.ajax({
                type: 'POST',
                url: '/employer/addProject',
                //contentType : "application/json;charset=UTF-8",
                data:{
                    name:vm.formItem.proName,
                    eId:$("#userId").text(),
                    proField:vm.formItem.proField,
                    skill1:vm.formItem.skill[0],
                    skill2:vm.formItem.skill[1],
                    proMoney:vm.formItem.proMoney*100,
                    lastDate:vm.formItem.lastDate,
                    overview:vm.formItem.proOverview
                },
                dataType:"json",
                success: function (data) {
                    if(data==true){
                        alert("发布成功")
                    }else{
                        alert("发布失败")
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("服务器错误");
                }
            })
        }
    }
})