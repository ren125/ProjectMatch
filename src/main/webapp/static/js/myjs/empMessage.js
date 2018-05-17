var vm = new Vue({
    el:"#container",
    data:{
        edu:["大专","本科","硕士","博士"],
        sex:{
            male:'男',
            female:'女',
            Male:'男',
            Female:'女'
        },
        skills:[ 'web应用开发', '移动应用开发','微信小程序开发', '桌面应用开发','系统架构设计','应用集成开发','UE/UI设计',
            '数据分析开发','软件测试','运营维护','项目管理','软件实施'],
        projectChoosed:null,
        projectList:[],
        columns:[
            {
                title: "申请者",
                key: "p_name"
            },
            {
                title: "申请时间",
                key: "apply_date",
                render: function (h, params) {
                    return h("div", [
                        h("strong", vm.getLocalTime(params.row.apply_date))
                    ]);
                }
            },
            {
                title: "性别",
                key: "p_sex",
                width: 90,
                render: function (h, params) {
                    return h("div", [
                        h("strong",vm.sex[params.row.p_sex])
                    ]);
                }
            },
            {
                title: "年龄",
                key: "p_age",
                width: 90,
            },
            {
                title: "教育",
                key: "education",
                render: function (h, params) {
                    return h("div", [
                        h("strong", vm.edu[params.row.education-1])
                    ]);
                }
            },
            {
                title: "电话",
                key: "p_phone"
            },
            {
                title: "时薪",
                key: "hoursalary"
            },
            {
                title: "工作领域",
                key: "work_field"
            },
            {
                title: "工作经验(年)",
                key: "work_experience",
                width: 130,
            },
            {
                title: "综合评价",
                key: "over_score",
                width: 200,
                render: function (h, params) {
                    return h("div", [
                        h("Rate", {
                            props: {
                                disabled:true,
                                allowHalf:true,
                                value:params.row.over_score/20,
                                type: "error",
                            },
                            style: {
                            },

                        }),
                        h("span",{
                            style:{
                                color: "#f5a623",
                                fontSize: "16px",
                                marginLeft: "5px"
                            }
                        },params.row.over_score/20)
                    ]);
                }
            },
            {
                title: "操作",
                key: "action",
                width: 90,
                align: "center",
                render: function (h, params) {
                    return h("div", [
                        h("Button", {
                            props: {
                                type: "error",
                            },
                            on: {
                                click: function () {
                                    vm.choose(params.index)
                                }
                            }
                        }, "同意")
                    ]);
                }
            }
        ],
        datas:[]
    },
    mounted:function () {
        $.ajax({
            type: "POST",
            url: "/employer/getProject",
            data:{
                eId:$("#userId").text(),
            },
            datatype:"json",
            success: function (data) {
                data.forEach(function (t,index) {
                    vm.projectList.push({
                        value:t.pro_id,
                        label:index+1+" "+t.pro_name
                    })
                })
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("表格显示错误");
            }
        });
        this.datasInit()
    },
    methods:{
        getLocalTime:function(obj) {
            var date = new Date(obj);
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            return y + '-' + m + '-' + d+' '
        },
        projectChange:function () {
            vm.datasInit()
        },
        choose:function (index) {
            this.$Modal.confirm({
                content:"您确认选择? <br/>其他申请将被您拒绝",
                onOk:function () {
                    $.ajax({
                        type: "POST",
                        url: "/employer/chooseProgrammer",
                        data:{
                            eId:$("#userId").text(),
                            pId:vm.datas[index].p_id,
                            proId:vm.projectChoosed,
                        },
                        datatype:"json",
                        success: function (data) {
                            if(data===true){
                                vm.datasInit();
                                alert("同意申请成功！")
                            }else{
                                alert("同意申请失败！")
                            }
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            alert("服务器错误");
                        }
                    });
                }
            })

        },
        datasInit:function () {
            $.ajax({
                type: "POST",
                url: "/employer/getApplyProgrammer",
                data:{
                    proId:this.projectChoosed
                },
                datatype:"json",
                success: function (data) {
                    vm.datas=data;
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("表格显示错误");
                }
            });
        }
    }
})