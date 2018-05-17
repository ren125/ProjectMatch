var vm = new Vue({
    el:'#container',
    data:{
        columns1:[
            {
                title: "项目名",
                key: "pro_name",
                render: function (h, params) {
                    return h("div", [
                        h("strong", params.row.pro_name)
                    ]);
                }
            },
            {
                title: "项目领域",
                key: "pro_field"
            },
            {
                title: "项目酬金",
                key: "pro_money",
                sortable:true
            },
            {
                title:'申请截至时间',
                key:'pro_lastdate',
                render: function (h, params) {
                    return h("div", [
                        h("strong", vm.getLocalTime(params.row.pro_lastdate))
                    ]);
                }
            },
            {
                title: "操作",
                key: "action",
                width: 120,
                align: "center",
                render: function (h, params) {
                    return h("div", [
                        h("Button", {
                            props: {
                                type: "primary",
                                size: "small"
                            },
                            style: {
                                marginRight: "5px"
                            },
                            on: {
                                click: function () {
                                    vm.show1(params.index)
                                }
                            }
                        }, "详情"),
                    ])
                }
            }
        ],
        columns2:[
            {
                title: "项目",
                key: "pro_name",
                render: function (h, params) {
                    return h("div", [
                        h("strong", params.row.pro_name)
                    ]);
                }
            },
            {
                title: "项目承包人",
                key: "p_id"
            },
            {
                title: "酬劳",
                key: "pro_money",
                sortable:true
            },
            {
                title:'项目开始时间',
                key:'confirm_date',
                render: function (h, params) {
                    return h("div", [
                        h("strong", vm.getLocalTime(params.row.confirm_date))
                    ]);
                }
            },
            {
                title: "操作",
                key: "action",
                width: 120,
                align: "center",
                render: function (h, params) {
                    return h("div", [
                        h("Button", {
                            props: {
                                type: "primary",
                                size: "small"
                            },
                            style: {
                                marginRight: "5px"
                            },
                            on: {
                                click: function () {
                                    vm.show2(params.index)
                                }
                            }
                        }, "详情"),
                    ])
                }
            }
        ],
        columns3:[
            {
                title: "项目",
                key: "pro_name",
                render: function (h, params) {
                    return h("div", [
                        h("strong", params.row.pro_name)
                    ]);
                }
            },
            {
                title: "项目承包人",
                key: "p_id"
            },
            {
                title: "酬劳",
                key: "pro_money"
            },
            {
                title:'完成时间',
                key:'complete_date',
                render: function (h, params) {
                    return h("div", [
                        h("strong", vm.getLocalTime(params.row.complete_date))
                    ]);
                }
            },
            {
                title: "操作",
                key: "action",
                width: 120,
                align: "center",
                render: function (h, params) {
                    return h("div", [
                        h("Button", {
                            props: {
                                type: "primary",
                                size: "small"
                            },
                            style: {
                                marginRight: "5px"
                            },
                            on: {
                                click: function () {
                                    vm.show3(params.index)
                                }
                            }
                        }, "详情"),
                    ])
                }
            }
        ],
        datas1:[],
        datas2:[],
        datas3:[],
        skills:[ 'web应用开发', '移动应用开发','微信小程序开发', '桌面应用开发','系统架构设计','应用集成开发','UE/UI设计',
            '数据分析开发','软件测试','运营维护','项目管理','软件实施']

    },
    mounted:function () {
        this.datas1Init();
        this.datas2Init();
        this.datas3Init();
    },
    methods:{
        show1:function (index) {
            this.$Modal.info({
                title: "项目详细信息",
                content: "名称: " + vm.datas1[index].pro_name + "</br>" +
                "所属领域: " + vm.datas1[index].pro_field + "</br>" +
                "所需技能: " + vm.skills[vm.datas1[index].pro_skill1] + "，" + vm.skills[vm.datas1[index].pro_skill2] + "</br>" +
                "酬劳: " + vm.datas1[index].pro_money + "</br>" +
                "项目综述: " + vm.datas1[index].pro_overview + "</br>"
            })
        },
        show2:function (index) {
            this.$Modal.info({
                title: "项目详细信息",
                content: "名称: " + vm.datas2[index].pro_name + "</br>" +
                "发布者: " + vm.datas2[index].e_id + "</br>" +
                "所属领域: " + vm.datas2[index].pro_field + "</br>" +
                "所需技能: " + vm.skills[vm.datas2[index].pro_skill1] + "，" + vm.skills[vm.datas2[index].pro_skill2] + "</br>" +
                "酬劳: " + vm.datas2[index].pro_money + "</br>" +
                "项目综述: " + vm.datas2[index].pro_overview + "</br>"
            })
        },
        show3:function (index) {
            this.$Modal.info({
                title: "项目详细信息",
                content: "名称: " + vm.datas3[index].pro_name + "</br>" +
                "发布者: " + vm.datas3[index].e_id + "</br>" +
                "所属领域: " + vm.datas3[index].pro_field + "</br>" +
                "所需技能: " + vm.skills[vm.datas3[index].pro_skill1] + "，" + vm.skills[vm.datas3[index].pro_skill2] + "</br>" +
                "酬劳: " + vm.datas3[index].pro_money + "</br>" +
                "项目综述: " + vm.datas3[index].pro_overview + "</br>"
            })
        },
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
        datas1Init:function(){
            $.ajax({
                type: "POST",
                url: "/employer/project1",
                data:{
                    eId:$("#userId").text()
                },
                datatype:"json",
                success: function (data) {
                    vm.datas1 = data;
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("表格显示错误");
                }
            })
        },
        datas2Init:function () {
            $.ajax({
                type: "POST",
                url: "/employer/project2",
                data:{
                    eId:$("#userId").text()
                },
                datatype:"json",
                success: function (data) {
                    vm.datas2 = data;
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("表格显示错误");
                }
            })
        },
        datas3Init:function () {
            $.ajax({
                type: "POST",
                url: "/employer/project3",
                data:{
                    eId:$("#userId").text()
                },
                datatype:"json",
                success: function (data) {
                    vm.datas3 = data;
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("表格显示错误");
                }
            })
        }
    }
})