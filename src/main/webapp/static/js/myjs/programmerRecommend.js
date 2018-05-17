var vm = new Vue({
    el:"#container",
    data:{
        projectChoosed:null,
        projectList:[],
        columns: [
            {
                title: "人才",
                key: "p_name",
                render: function (h, params) {
                    return h("div", [
                        h("strong", params.row.p_name)
                    ]);
                }
            },
            {
                title: "学历",
                key: "education"
            },
            {
                title: "薪资(时薪)",
                key: "hoursalary",
                sortable:true
            },
            {
                title: "工作领域",
                key: "work_field",
                sortable:true
            },
            {
                title: "综合评分",
                key: "over_score",
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
                width: 150,
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
                            on: {
                                click: function () {
                                    vm.invite(params.index)
                                }
                            }
                        }, "邀请")
                    ]);
                }
            }
        ],//表格列定义
        datas: [],//存放表格展示数据的数组
    },
    mounted:function () {
        this.getProject();
    },
    methods:{
        projectChange:function () {
            vm.datasInit();
        },
        datasInit:function () {
            $.ajax({
                type: "POST",
                url: "/employer/suggestProgrammer",
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
        },
        show:function(index) {
            vm.$Modal.info({
                title: "人才详细信息",
                content: "姓名: " + vm.datas[index].p_name + "</br>" +
                "性别: " + vm.datas[index].p_sex + "</br>" +
                "年龄: " + vm.datas[index].p_age + "</br>" +
                "学历: " + vm.datas[index].education + "</br>" +
                "电话号码: " + vm.datas[index].p_phone + "</br>" +
                "电子邮件: " + vm.datas[index].p_email + "</br>" +
                "薪资: " + vm.datas[index].hoursalary +  "/小时" + "</br>" +
                "工作领域: " + vm.datas[index].work_field + "</br>" +
                "工作经验: " + vm.datas[index].work_experience + "年" + "</br>" +
                "综合评价: " + vm.datas[index].over_score + "</br>"
            })
        },
        //邀请人才
        invite:function(index) {
            this.$Modal.confirm({
                render: function (h, params) {
                    return h('Select',
                        {
                            props: {
                                value: vm.proID,
                            },
                            on: {
                                'on-change': function(value) {
                                    vm.proID = value;
                                }
                            },
                        },
                        vm.emProject.map(function (type) {
                            return h('Option', {
                                props: {value: type.value}
                            }, type.label);
                        })
                    )
                },
                onOk:function () {
                    vm.insertNewInvite(index);
                },
            })
            vm.getProject();
        },
        insertNewInvite:function (index) {
            $.ajax({
                type: "POST",
                url: "/employer/insertNewInvite",
                data:{
                    eId:$("#userId").text(),
                    proId:this.proID,
                    pId:this.datas[index].p_id,
                },
                datatype:"json",
                success: function (data) {
                    if(data===true){
                        alert("成功邀请");
                    }else{
                        alert("已经邀请过了");
                    }

                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("服务器错误");
                }
            });
        },
        getProject:function () {
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
        }
    }
})