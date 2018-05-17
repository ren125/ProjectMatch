var vm = new Vue({
    el:"#container",
    data:{
        columns: [
            {
                title: "项目",
                key: "proName",
                render: function (h, params) {
                    return h("div", [
                        h("strong", params.row.proName)
                    ]);
                }
            },
            {
                title: "发布者",
                key: "proEmployer"
            },
            {
                title: "酬劳",
                key: "proMoney",
                sortable:true
            },
            {
                title: "截止申请日期",
                key: "proLastdate",
                sortable:true
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
                                    vm.choose(params.index)
                                }
                            }
                        }, "申请")
                    ]);
                }
            }
        ],//表格列定义
        datas: []//存放表格展示数据的数组
    },
    mounted:function () {
        $.ajax({
            type: "POST",
            url: "/programmer/suggestProject",
            data:{
                pId:$("#userId").text()
            },
            dataType:"json",
            success: function (data) {
                vm.datas = data;
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("表格显示错误");
            }
        })
    },
    methods:{
        show:function(index) {

            vm.$Modal.info({
                title: "项目详细信息",
                content: "名称: " + vm.datas[index].proName + "</br>" +
                "发布者: " + vm.datas[index].proEmployer + "</br>" +
                "所属领域: " + vm.datas[index].proField + "</br>" +
                "所需技能: " + vm.datas[index].proSkill1 + "，" + vm.datas[index].proSkill2 + "</br>" +
                "酬劳: " + vm.datas[index].proMoney + "</br>" +
                "截止申请日期: " + vm.datas[index].proLastdate + "</br>" +
                "项目综述: " + vm.datas[index].proOverview + "</br>" +
                "项目的状态: " + vm.datas[index].proSatus + "</br>"
            })
        },
        //申请项目
        choose:function(index) {
            this.$Modal.confirm({
                content:"您确认申请该项目？",
                onOk:function () {
                    $.ajax({
                        type: "POST",
                        url: "/programmer/applyProject",
                        data:{
                            userId:$("#userId").text(),
                            proId:vm.datas[index].proId,
                            eId:vm.datas[index].proEmployer
                        },
                        dataType:"json",
                        success: function (data) {
                            if(data===true){
                                vm.tableDataInit();
                                alert("申请成功！")
                            }else{
                                alert("您已申请该项目！")
                            }

                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            alert("服务器出错");
                        }
                    })
                }
            })
        },
    }
})