var vm = new Vue({
    el: '#container',
    data:{
        columns: [
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
                title: "邀请人(雇主)",
                key: "e_id"
            },
            {
                title: "酬劳",
                key: "pro_money",
                sortable:true
            },
            {
                title:'邀请时间',
                key:'invite_date',
                render: function (h, params) {
                    return h("div", [
                        h("strong", vm.getLocalTime(params.row.invite_date))
                    ]);
                }
            },
            {
                title: "操作",
                key: "action",
                width: 300,
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
                                    vm.show(params.index)
                                }
                            }
                        }, "详情"),
                        h("Button", {
                            props: {
                                type: "error",
                                size: "small"
                            },
                            style: {
                                marginRight: "5px"
                            },
                            on: {
                                click: function () {
                                    vm.recepte(params.index)
                                }
                            }
                        }, "接受邀请"),
                        h("Button", {
                            props: {
                                size: "small"
                            },
                            on: {
                                click: function () {
                                    vm.reject(params.index)
                                }
                            }
                        }, "拒绝邀请")
                    ]);
                }
            }
        ],//表格列定义

        datas: [],//存放表格展示数据的数组

        totalPage:30,//总页数
        currentPage:1,//当前页号
        pageSize:10,//每页的数据量

        dataTotal:[],
        skills:[ 'web应用开发', '移动应用开发','微信小程序开发', '桌面应用开发','系统架构设计','应用集成开发','UE/UI设计',
            '数据分析开发','软件测试','运营维护','项目管理','软件实施'],
    },
    mounted:function () {
        this.tableDataInit();
    },
    methods:{
        show:function (index) {
            this.$Modal.info({
                title: "项目详细信息",
                content: "名称: " + vm.datas[index].pro_name + "</br>" +
                "发布者: " + vm.datas[index].e_id + "</br>" +
                "所属领域: " + vm.datas[index].pro_field + "</br>" +
                "所需技能: " + vm.skills[vm.datas[index].pro_skill1] + "，" + vm.skills[vm.datas[index].pro_skill2] + "</br>" +
                "酬劳: " + vm.datas[index].pro_money + "</br>" +
                "截止申请日期: " + vm.getLocalTime(vm.datas[index].pro_lastdate) + "</br>" +
                "项目综述: " + vm.datas[index].pro_overview + "</br>"
            })
        },
        recepte:function (index) {
            this.$Modal.confirm({
                content:"您确认接受邀请？",
                onOk:function () {
                    $.ajax({
                        type: "POST",
                        url: "/programmer/recepteInvite",
                        data:{
                            userId:$("#userId").text(),
                            proId:vm.datas[index].pro_id,
                            eId:vm.datas[index].e_id
                        },
                        dataType:"json",
                        success: function (data) {
                            if(data===true){
                                vm.tableDataInit();
                                alert("接受邀请成功！")
                            }else{
                                alert("接受邀请失败！")
                            }

                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            alert("服务器出错");
                        }
                    })
                }
            })
        },
        reject:function (index) {
            this.$Modal.confirm({
                content:"您确认拒绝邀请？",
                onOk:function () {
                    $.ajax({
                        type: "POST",
                        url: "/programmer/rejectInvite",
                        data:{
                            userId:$("#userId").text(),
                            proId:vm.datas[index].pro_id,
                        },
                        dataType:"json",
                        success: function (data) {
                            vm.tableDataInit();
                            alert("拒绝邀请成功！")
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            alert("服务器出错");
                        }
                    })
                }
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
        changePage:function (currentPage) {
            vm.currentPage = currentPage;
            vm.tableDataInit();
        },
        tableDataInit:function () {
            $.ajax({
                type: "POST",
                url: "/programmer/inviteMessage",
                data:{
                    userId:$("#userId").text(),
                    currentPage:this.currentPage,
                    pageSize:this.pageSize,
                },
                datatype:"json",
                success: function (data) {
                    vm.totalPage = data.total / vm.pageSize * 10;
                    vm.datas = data.messageList;

                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("表格显示错误");
                }
            })
        }
    }
})