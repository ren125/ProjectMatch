var vm = new Vue({
        el: "#PJTable",
        data: {
            columns1: [
                {
                    title: 'Name',
                    key: 'name',
                    // render: function (h, params) {
                    //     return h('div', [
                    //         h('Icon', {
                    //             props: {
                    //                 type: 'person'
                    //             }
                    //         }),
                    //         h('strong', params.row.name)
                    //     ]);
                    // }
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'Address',
                    key: 'address'
                }
                // {
                //     title: 'Action',
                //     key: 'action',
                //     width: 150,
                //     align: 'center',
                //     render: function (h, params) {
                //         return h('div', [
                //             h('Button', {
                //                 props: {
                //                     type: 'primary',
                //                     size: 'small'
                //                 },
                //                 style: {
                //                     marginRight: '5px'
                //                 },
                //                 on: {
                //                     click: function () {
                //                         this.show(params.index)
                //                     }
                //                 }
                //             }, 'View'),
                //             h('Button', {
                //                 props: {
                //                     type: 'error',
                //                     size: 'small'
                //                 },
                //                 on: {
                //                     click: function () {
                //                         this.remove(params.index)
                //                     }
                //                 }
                //             }, 'Delete')
                //         ]);
                //     }
                // }
            ],
            data1: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park'
                }
            ]
        },
        methods: {
            show:function() {
                this.$Modal.info({
                    title: 'User Info',
                    //content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove:function () {
                this.data6.splice(index, 1);
            }
        }
    }
)