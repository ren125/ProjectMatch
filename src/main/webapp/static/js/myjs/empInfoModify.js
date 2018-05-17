var vm = new Vue({
    el: '#container',
    data: {
        emailData:[],
        formItem:{
            userId:'',
            name:'',
            phone:'',
            email:''
        }
    },
    mounted: function () {
        this.formItem.userId = $("#userId").text();
        $.ajax({
            type: 'POST',
            url: '/employer/info',
            //contentType : "application/json;charset=UTF-8",
            data:{
                eId:this.formItem.userId,
            },
            dataType:"json",
            success: function (data) {
                vm.formItem.name = data.e_name;
                vm.formItem.phone = data.e_phone;
                vm.formItem.email = data.e_email;
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("服务器错误");
            }
        })
    },
    methods:{
        commit:function(formItem){
            $.ajax({
                type: 'POST',
                url: '/employer/updateInfo',
                //contentType : "application/json;charset=UTF-8",
                data:{
                    //formItem:vm.formItem
                    eId:vm.formItem.userId,
                    name:vm.formItem.name,
                    phone:vm.formItem.phone,
                    email:vm.formItem.email,
                },
                dataType:"text",
                success: function (data) {
                    if(data==="true"){
                        alert("修改成功!");
                    }else {
                        alert("修改失败");
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("服务器错误，修改失败");
                }
            })
        },
        cancel:function () {
            window.location.href="../../index.jsp";
        },
        emailSearch:function (value) {
            vm.emailData = !value || value.indexOf('@') >= 0 ? [] : [
                value + '@qq.com',
                value + '@sina.com',
                value + '@163.com'
            ];
        }
    }
})