var vm = new Vue({
    el: "#container",
    data: {
        //按领域筛选
        educationList: [
            {
                value: "1",
                label: "大专"
            },
            {
                value: "2",
                label: "本科"
            },
            {
                value: "3",
                label: "硕士"
            },
            {
                value: "4",
                label: "博士"
            }
        ],
        educationChoosed: [],

        //按薪资筛选，价格输入框的数值
        moneyValue1:null,
        moneyValue2:null,

        //按综合评分筛选的数值
        scoreValue:0,

        //分页
        totalPage:10,//总页数=数据总条数/每页数量*10
        currentPage:1,//当前页号
        pageSize:8,//每页的数据量

        //表格
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

        //存放招聘者的项目
        emProject:[],
        proID:null

    },
    created:function () {
        this.selectProgrammer();
    },
    methods: {
        //详情页
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
            vm.getEmProject();
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
        },
        //查询招聘者的项目信息
        getEmProject:function () {
            $.ajax({
                type: "POST",
                url: "/employer/getProject",
                data:{
                    eId:$("#userId").text(),
                },
                datatype:"json",
                success: function (data) {
                    vm.emProject = [];
                    data.forEach(function (t,index) {
                        vm.emProject.push({
                            value:t.pro_id,
                            label:index+1+" "+t.pro_name
                        })
                    })
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("表格显示错误");
                }
            });
        },
        //插入新的邀请信息
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
        //查询人才
        selectProgrammer:function(){
            $.ajax({
                type: "POST",
                url: "/programmer/selectAllProgrammer",
                data:{
                    currentPage:this.currentPage,
                    pageSize:this.pageSize,
                    moneyValue1:this.moneyValue1,
                    moneyValue2:this.moneyValue2,
                    education:this.educationChoosed.toString(),
                    scoreValue:this.scoreValue * 20
                },
                datatype:"json",
                success: function (data) {
                    vm.totalPage = data.total / vm.pageSize * 10;
                    vm.datas = data.programmerArr;

                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("表格显示错误");
                }
            })
        },
        //页面变化
        changePage:function (currentPage) {
            vm.currentPage = currentPage;
            vm.selectProgrammer();
        },
        //薪资筛选确定按钮
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
                vm.selectProgrammer();
            }
        },
        //薪资筛选清空按钮
        moneyClear:function () {
            vm.moneyValue1 = null;
            vm.moneyValue2 = null;
            vm.currentPage = 1;
            vm.selectProgrammer();
        },
        //学历筛选变化响应函数
        educationChange:function (value) {
            vm.currentPage = 1;
            vm.selectProgrammer();
        },
        //综合评价筛选函数
        scoreChange:function (value) {
            vm.scoreValue = value;
            vm.currentPage = 1;
            vm.selectProgrammer();
        }
    }
})