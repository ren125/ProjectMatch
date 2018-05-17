<%--
  Created by IntelliJ IDEA.
  User: renzhuo
  Date: 2018/4/26
  Time: 22:06
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">
    <title>发布项目</title>
    <link href="${pageContext.request.contextPath}/static/bootstrap-3.3.5-dist/css/bootstrap.min.css" title="" rel="stylesheet" />
    <link title="" href="${pageContext.request.contextPath}/static/css/style.css" rel="stylesheet" type="text/css"  />
    <link title="blue" href="${pageContext.request.contextPath}/static/css/dermadefault.css" rel="stylesheet" type="text/css"/>
    <script src="${pageContext.request.contextPath}/static/js/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/static/js/jquery.cookie.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/static/bootstrap-3.3.5-dist/js/bootstrap.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/static/js/vue.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/static/js/iview-min.js"></script>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/iview.css">
    <style>
        .ivu-form-item-label{
            font-size: 14px !important;
        }
        .ivu-input{
            font-size: 14px !important;
        }
        .ivu-card-head p{
            font-size: 16px;
        }

    </style>
</head>
<body>
<nav class="nav navbar-default navbar-mystyle navbar-fixed-top">
    <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav pull-left logoleft">
            <span class="logotitle">人才-项目匹配系统</span>
            <span class="juese">雇主界面</span>
        </ul>

        <ul class="nav navbar-nav pull-right">
            <li class="li-border dropdown"><a href="#" class="mystyle-color" data-toggle="dropdown">
                <span class="glyphicon glyphicon-search"></span> 搜索</a>
                <div class="dropdown-menu search-dropdown">
                    <div class="input-group">
                        <input type="text" class="form-control">
                        <span class="input-group-btn">
                   <button type="button" class="btn btn-default">搜索</button>
                </span>
                    </div>
                </div>
            </li>
            <li class="dropdown li-border"><a href="#" class="dropdown-toggle mystyle-color" data-toggle="dropdown">帮助与文档<span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a href="#">帮助与文档</a></li>
                    <li class="divider"></li>
                    <li><a href="#">论坛</a></li>
                    <li class="divider"></li>
                    <li><a href="#">博客</a></li>
                </ul>
            </li>
            <li class="dropdown li-border"><a id="userId" class="dropdown-toggle mystyle-color" data-toggle="dropdown"><%= session.getAttribute("empId")%><span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a href="/employer/sigout">退出</a></li>
                    <%--/programmer/sigout--%>
                </ul>
            </li>
        </ul>
    </div>
</nav>
<div class="down-main">
    <div class="left-main left-full">
        <!-- <div class="sidebar-fold"><span class="glyphicon glyphicon-menu-hamburger"></span></div> -->
        <div class="subNavBox">
            <div class="sBox">
                <div class="subNav sublist-up"><span class="title-icon glyphicon glyphicon-chevron-up"></span><span class="sublist-title">用户中心</span>
                </div>
                <ul class="navContent" style="display:none">
                    <li>
                        <a href="/user2/infoModify"><span class="sublist-icon glyphicon glyphicon-envelope"></span><span class="sub-title">信息修改</span></a> </li>
                    <li>
                        <a href="/user2/passwordModify"><span class="sublist-icon glyphicon glyphicon-credit-card"></span><span class="sub-title">密码修改</span></a></li>
                    <li>
                        <a href="/user2/message"><span class="sublist-icon glyphicon glyphicon-bullhorn"></span><span class="sub-title">消息中心</span></a></li>
                </ul>
            </div>
            <div class="sBox">
                <div class="subNav sublist-down"><span class="title-icon glyphicon glyphicon-chevron-down"></span><span class="sublist-title">人才匹配</span></div>
                <ul class="navContent" style="display:block">
                    <li class="active">
                        <a href="/user2/publishProject"><span class="sublist-icon glyphicon glyphicon-user"></span><span class="sub-title">项目发布</span></a></li>
                    <li>
                        <a href="/user2/programmerMarket"><span class="sublist-icon glyphicon glyphicon-user"></span><span class="sub-title">人才市场</span></a></li>
                    <li>
                        <a href="/user2/suggest"><span class="sublist-icon glyphicon glyphicon-user"></span><span class="sub-title">平台推荐</span></a></li>
                    <li>
                        <a href="/user2/projectEvaluate"><span class="sublist-icon glyphicon glyphicon-user"></span><span class="sub-title">项目评价</span></a></li>
                    <li>
                        <a href="/user2/projectManage"><span class="sublist-icon glyphicon glyphicon-user"></span><span class="sub-title">我的项目</span></a></li>
                </ul>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        $(function(){
            /*左侧导航栏显示隐藏功能*/
            $(".subNav").click(function(){
                /*显示*/
                if($(this).find("span:first-child").attr('class')=="title-icon glyphicon glyphicon-chevron-down")
                {
                    $(this).find("span:first-child").removeClass("glyphicon-chevron-down");
                    $(this).find("span:first-child").addClass("glyphicon-chevron-up");
                    $(this).removeClass("sublist-down");
                    $(this).addClass("sublist-up");
                }
                /*隐藏*/
                else
                {
                    $(this).find("span:first-child").removeClass("glyphicon-chevron-up");
                    $(this).find("span:first-child").addClass("glyphicon-chevron-down");
                    $(this).removeClass("sublist-up");
                    $(this).addClass("sublist-down");
                }
                // 修改数字控制速度， slideUp(500)控制卷起速度
                $(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(300);
            })

            /*左侧鼠标移入提示功能*/
            $(".sBox ul li").mouseenter(function(){
                if($(this).find("span:last-child").css("display")=="none")
                {$(this).find("div").show();}
            }).mouseleave(function(){$(this).find("div").hide();})
        })
    </script>
    <div id="right-part" class="right-product right-off">
        <div id="container">
            <Card style="width:100%;" :bordered="false" :shadow=false>
                <p slot="title">项目需求发布</p>
                <i-form style="margin-left: 80px;margin-top: 20px" :label-width="150" >
                    <form-item label="项目名称">
                        <i-input style="width: 600px;" v-model="formItem.proName" placeholder="用一句话描述你的项目名称，例如:酒店管理系统开发"></i-input>
                    </form-item>
                    <form-item label="项目所属行业领域">
                        <i-select style="width: 600px;" v-model="formItem.proField" placeholder="选择项目所属行业领域">
                            <i-option value="教育">教育</i-option>
                            <i-option value="政府">政府</i-option>
                            <i-option value="制造">制造</i-option>
                            <i-option value="零售">零售</i-option>
                            <i-option value="交通物流">交通物流</i-option>
                            <i-option value="电力">电力</i-option>
                            <i-option value="金融">金融</i-option>
                            <i-option value="医疗">医疗</i-option>
                            <i-option value="互联网">互联网</i-option>
                            <i-option value="其他">其他</i-option>
                        </i-select>
                    </form-item>
                    <form-item label="技能要求" prop="skill">
                        <i-select style="width: 600px;" v-model="formItem.skill" filterable multiple placeholder="选择项目需要的技能">
                            <i-option v-for="item in skills" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                        </i-select>
                    </form-item>
                    <form-item label="开发语言">
                        <i-input style="width: 600px;" v-model="formItem.proLanguage" placeholder="项目开发语言，例如:c#,java等"></i-input>
                    </form-item>
                    <form-item label="开发环境">
                        <i-input style="width: 600px;" v-model="formItem.proSdk" placeholder="描述项目的开发环境"></i-input>
                    </form-item>
                    <form-item label="开发周期">
                        <input-number  :min="0" v-model="formItem.proPeriod"></input-number>&nbsp&nbsp&nbsp&nbsp<span style="font-size: 14px;font-weight: bold">周</span><span>(4周为一个月)</span>

                    </form-item>
                    <form-item label="项目报酬">
                        <input-number  :min="0" :step="5" v-model="formItem.proMoney"></input-number>&nbsp&nbsp&nbsp&nbsp<span style="font-size: 14px;font-weight: bold">百元</span>
                    </form-item>
                    <form-item label="投标截止时间">
                        <date-picker v-model="formItem.lastDate" type="datetime" placeholder="选择项目投标截止时间" style="width: 200px"></date-picker>
                    </form-item>
                    <form-item label="驻场要求">
                        <radio-group v-model="formItem.ifStay">
                            <Radio label="无需驻场"></Radio>
                            <Radio label="偶尔驻场交流"></Radio>
                            <Radio label="定期驻场"></Radio>
                            <Radio label="全程驻场"></Radio>
                        </radio-group>
                    </form-item>
                    <form-item label="项目描述">
                        <i-input style="width: 600px;" v-model="formItem.proOverview" type="textarea" :autosize="{minRows: 2,maxRows: 8}" placeholder="描述您的项目"></i-input>
                    </form-item>
                    <form-item>
                        <i-button style="width: 80px;" type="primary" @click="commit()">提交</i-button>
                    </form-item>
                </i-form>
            </Card>
        </div>
    </div>
</div>
<script src="${pageContext.request.contextPath}/static/js/myjs/empProjectPublish.js"></script>
</body>
</html>




