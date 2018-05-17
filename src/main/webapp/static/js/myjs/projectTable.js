var vm = new Vue({
        el: "#PJTable",
        data: {
            //按领域筛选
            fieldList: [
                {
                    value: "教育",
                    label: "教育"
                },
                {
                    value: "政府",
                    label: "政府"
                },
                {
                    value: "制造零售",
                    label: "制造零售"
                },
                {
                    value: "交通物流",
                    label: "交通物流"
                },
                {
                    value: "电力",
                    label: "电力"
                },
                {
                    value: "金融",
                    label: "金融"
                },
                {
                    value: "医疗",
                    label: "医疗"
                },
                {
                    value: "互联网",
                    label: "互联网"
                }
            ],
            fieldChoosed: [],
            //按技能筛选
            skillList: [
                {
                    value: "web应用开发",
                    label: "web应用开发"
                },
                {
                    value: "移动应用开发",
                    label: "移动应用开发"
                },
                {
                    value: "微信小程序开发",
                    label: "微信小程序开发"
                },
                {
                    value: "桌面应用开发",
                    label: "桌面应用开发"
                },
                {
                    value: "系统架构设计",
                    label: "系统架构设计"
                },
                {
                    value: "应用集成开发",
                    label: "应用集成开发"
                },
                {
                    value: "UE/UI设计",
                    label: "UE/UI设计"
                },
                {
                    value: "数据分析开发",
                    label: "数据分析开发"
                },
                {
                    value: "软件测试",
                    label: "软件测试"
                },
                {
                    value: "运营维护",
                    label: "运营维护"
                },
                {
                    value: "项目管理",
                    label: "项目管理"
                },
                {
                    value: "软件实施",
                    label: "软件实施"
                }
            ],
            skillChoosed: [],
            //按项目状态筛选
            satusList: [
                {
                    value: "可申请",
                    label: "可申请"
                },
                {
                    value: "已签约",
                    label: "已签约"
                },
                {
                    value: "已结束",
                    label: "已结束"
                }
            ],
            satusChoosed: [],

            //按价格筛选，价格输入框的数值
            moneyValue1:null,
            moneyValue2:null,

            //分页
            totalPage:10,//总页数=数据总条数/每页数量*10
            currentPage:1,//当前页号
            pageSize:8,//每页的数据量

            //表格
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
        created:function () {
            this.selectPJ();
        },
        mounted: function () {

        },
        methods: {
            //详情页
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
            //查询项目
            selectPJ:function(){
                $.ajax({
                    type: "POST",
                    url: "/project/selectProject",
                    data:{
                        currentPage:this.currentPage,
                        pageSize:this.pageSize,
                        moneyValue1:this.moneyValue1,
                        moneyValue2:this.moneyValue2,
                        field:this.fieldChoosed.toString(),
                        skill:this.skillChoosed.toString(),
                        satus:this.satusChoosed.toString()
                    },
                    datatype:"json",
                    success: function (data) {
                        vm.totalPage = data.total / vm.pageSize * 10;
                        vm.datas = data.projectArr;

                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("表格显示错误");
                    }
                })
            },
            //页面变化
            changePage:function (currentPage) {
                vm.currentPage = currentPage;
                vm.selectPJ();
            },
            //价格筛选确定按钮
            moneyConfirm:function () {
                if(vm.moneyValue1 > vm.moneyValue2 || vm.moneyValue2 == null){
                    vm.moneyValue1 = null;
                    vm.moneyValue2 = null;
                    vm.$Modal.error({
                        title: "错误",
                        content: "请输入合理的价格区间"
                    });
                }
                else{
                    if(vm.moneyValue1 == null) {
                        vm.moneyValue1 = 0;
                    }
                    vm.currentPage = 1;
                    vm.selectPJ();
                }
            },
            //价格筛选清空按钮
            moneyClear:function () {
                vm.moneyValue1 = null;
                vm.moneyValue2 = null;
                vm.currentPage = 1;
                vm.selectPJ();
            },
            //领域筛选变化响应函数
            fieledChange:function (value) {
                vm.currentPage = 1;
                vm.selectPJ();
            },
            //技能筛选变化响应函数
            skillChange:function (value) {
                vm.currentPage = 1;
                vm.selectPJ();
            },
            //项目状态筛选变化响应函数
            satusChange:function (value) {
                vm.currentPage = 1;
                vm.selectPJ();
            }
        }
    }
)