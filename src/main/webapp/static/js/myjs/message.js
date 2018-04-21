var vm = new Vue({
    el: '#container',
    data:{
        columns: [
            {
                title: "项目",
                key: "proName",
                render: function (h, params) {
                    return h("div", [
                        h("Icon", {
                            props: {
                                type: "person"
                            }
                        }),
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
                title: "Action",
                key: "action",
                width: 200,
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
                        }, "接受邀请"),
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
                        }, "拒绝邀请")
                    ]);
                }
            }
        ],//表格列定义

        datas: [],//存放表格展示数据的数组

        totalPage:30,//总页数
        currentPage:1,//当前页号
        pageSize:5,//每页的数据量

        dataTotal:[],
    },
    mounted:function () {

    },
    methods:{
        changePage:function () {
            
        }

    }
})