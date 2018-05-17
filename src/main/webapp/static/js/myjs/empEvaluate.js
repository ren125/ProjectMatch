var vm = new Vue({
    el:"#container",
    data:{
        skillId:[],
        skillName:[],
        proIdList:[],
        projectList:[],
        pIdList:[],
        projectChoosed:null,
        project_pId:"",
        fieldScore:0,
        skillScore1:0,
        skillScore2:0,
        overScore:0,
    },
    mounted:function () {
        $.ajax({
            type: "POST",
            url: "/employer/project2",
            data:{
                eId:$("#userId").text()
            },
            datatype:"json",
            success: function (data) {
                data.forEach(function (t,index) {
                    vm.projectList.push({
                        value:index,
                        label:index+1+" "+t.pro_name
                    });
                    vm.proIdList.push(t.pro_id);
                    vm.pIdList.push(t.p_id);
                })
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("表格显示错误");
            }
        });
    },
    methods:{
        commit:function () {
            $.ajax({
                type: "POST",
                url: "/employer/projectComplete",
                data:{
                    eId:$("#userId").text(),
                    proId:vm.proIdList[vm.projectChoosed],
                    pId:vm.project_pId,
                    fieldScore:vm.fieldScore,
                    skillId1:vm.skillId[0],
                    skillId2:vm.skillId[1],
                    skillScore1:vm.skillScore1,
                    skillScore2:vm.skillScore2,
                    overScore:vm.overScore,
                },
                datatype:"json",
                success: function (data) {

                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("服务器错误");
                }
            })
        },
        projectChange:function () {
            vm.project_pId=vm.pIdList[vm.projectChoosed];
            $.ajax({
                type: "POST",
                url: "/programmer/getSkill",
                data:{
                    pId:vm.project_pId
                },
                datatype:"json",
                success: function (data) {
                    data.forEach(function (t,index) {
                        vm.skillId.push(t.skill_id);
                        vm.skillName.push(t.skill_name);
                    })
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("表格显示错误");
                }
            })
        },
        scoreChange1:function (score) {
            vm.fieldScore=score;
        },
        scoreChange2:function (score) {
            vm.skillScore=score;
        },
        scoreChange3:function (score) {
            vm.overScore=score;
        }
    }
})

    
