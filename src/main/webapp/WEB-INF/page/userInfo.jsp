<%--
  Created by IntelliJ IDEA.
  User: renzhuo
  Date: 2018/4/19
  Time: 14:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">
    <title>个人信息</title>
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
        .ivu-card-head p{
            font-size: 16px;
        }
        .ivu-form-item{
            margin-bottom: 12px;
        }
        .ivu-form-item-label{
            font-size: 14px !important;
        }
        .ivu-input{
            font-size: 14px !important;
        }
        .ivu-input-number-input{
            font-size: 14px !important;
        }
        .ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value{
            font-size: 14px !important;
        }
        .ivu-select-input{
            font-size: 14px !important;
        }
        .ivu-btn{
            font-size: 14px !important;
        }
        .form-left{
            margin-left: 200px;
        }
    </style>
</head>
<body>
<nav class="nav navbar-default navbar-mystyle navbar-fixed-top">
    <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav pull-left logoleft">
            <span class="logotitle">人才-项目匹配系统</span>
            <span class="juese">人才界面</span>
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
            <li class="dropdown li-border"><a id="userId" class="dropdown-toggle mystyle-color" data-toggle="dropdown"><%= session.getAttribute("userId")%><span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a href="/programmer/sigout">退出</a></li>
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
                <div class="subNav sublist-down"><span class="title-icon glyphicon glyphicon-chevron-down"></span><span class="sublist-title">用户中心</span>
                </div>
                <ul class="navContent" style="display:block">
                    <li class="active">
                        <%-- class="active"<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />个人信息</div>--%>
                        <a href="/user/info"><span class="sublist-icon glyphicon glyphicon-user"></span><span class="sub-title">个人信息</span></a> </li>
                    <li>
                        <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />信息修改</div>--%>
                        <a href="/user/infoModify"><span class="sublist-icon glyphicon glyphicon-envelope"></span><span class="sub-title">信息修改</span></a> </li>
                    <li>
                        <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />密码修改</div>--%>
                        <a href="/user/passwordModify"><span class="sublist-icon glyphicon glyphicon-credit-card"></span><span class="sub-title">密码修改</span></a></li>
                    <li>
                        <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />消息中心</div>--%>
                        <a href="/user/message"><span class="sublist-icon glyphicon glyphicon-bullhorn"></span><span class="sub-title">消息中心</span></a></li>
                </ul>
            </div>
            <div class="sBox">
                <div class="subNav sublist-up"><span class="title-icon glyphicon glyphicon-chevron-up"></span><span class="sublist-title">项目匹配</span></div>
                <ul class="navContent" style="display:none">
                    <li>
                        <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />添加新闻</div>--%>
                        <a href="/user/projectMarket"><span class="sublist-icon glyphicon glyphicon-user"></span><span class="sub-title">项目市场</span></a></li>
                    <li>
                        <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />添加新闻</div>--%>
                        <a href="/user/suggest"><span class="sublist-icon glyphicon glyphicon-user"></span><span class="sub-title">平台推荐</span></a></li>
                    <li>
                        <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />添加新闻</div>--%>
                        <a href="/user/projectManage"><span class="sublist-icon glyphicon glyphicon-user"></span><span class="sub-title">项目记录</span></a></li>
                    <li>
                        <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />新闻管理</div>--%>
                        <a href="/user/record"><span class="sublist-icon glyphicon glyphicon-user"></span><span class="sub-title">个人分析</span></a></li>
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
            <Card style="width:100%;height: 100%" :bordered="false" :shadow=false>
                <p slot="title"><%= session.getAttribute("userId")%>的个人信息</p>
                <i-form class="form-left" :model="formItem" :label-width="120" >
                    <form-item label="用户名">
                        <i-input :readonly=true style="width: 380px" v-model="formItem.userId"  placeholder="请输入用户名"></i-input>
                    </form-item>
                    <form-item label="姓名">
                        <i-input :readonly=true  style="width: 380px" v-model="formItem.name" placeholder="请输入您的姓名"></i-input>
                    </form-item>
                    <form-item label="性别年龄">
                        <i-input :readonly=true style="width: 60px" v-model="formItem.sex"></i-input>
                        <input-number :readonly=true style="width: 120px" :max="100" :min="18" v-model="formItem.age"></input-number>
                    </form-item>
                    <form-item label="学历" prop="education">
                        <i-input :readonly=true style="width: 380px" v-model="formItem.education"  placeholder="请选择您的学历"></i-input>
                    </form-item>
                    <form-item label="电话号码">
                        <i-input :readonly=true style="width: 380px" v-model="formItem.phone"  placeholder="请输入电话号码"></i-input>
                    </form-item>
                    <form-item label="邮箱">
                        <i-input :readonly=true style="width:380px" v-model="formItem.email"  placeholder="请输入您的邮箱"></i-input>
                    </form-item>
                    <form-item label="时薪">
                        <%--<i-input v-model="formItem.hoursalary"  placeholder="请输入您期望的时薪"></i-input>--%>
                        <input-number :readonly=true :min="20" :step="20" v-model="formItem.hoursalary"></input-number>
                    </form-item>
                    <form-item label="工作领域" prop="workfield">
                        <i-input :readonly=true style="width: 380px" v-model="formItem.workfield"  placeholder="选择您熟悉的工作领域"></i-input>
                    </form-item>
                    <form-item label="擅长技能和评分" prop="skill">
                        <i-input :readonly=true style="width: 120px" v-model="formItem.skill1"></i-input><span style="margin-left: 20px;font-size: 18px;">{{formItem.skill1score}}</span><span style="font-size: 14px;">(100为满分)</span><br/>
                        <i-input :readonly=true style="width: 120px;margin-top: 5px;" v-model="formItem.skill2"></i-input><span style="display: inline-block;margin-top:10px;margin-left: 20px;font-size: 18px;">{{formItem.skill2score}}</span><span style="font-size: 14px;">(100为满分)</span>
                    </form-item>
                    <form-item label="工作经验年数">
                        <%--<i-input v-model="formItem.experience"  placeholder="请输入您的工作经验的年限"></i-input>--%>
                        <input-number :readonly=true :max="30" :min="0" v-model="formItem.experience"></input-number>
                    </form-item>
                    <form-item label="综合评价">
                        <%--<i-input v-model="formItem.experience"  placeholder="请输入您的工作经验的年限"></i-input>--%>
                        <Rate style="margin-top: -7px;" allow-half disabled v-model="formItem.score">
                        </Rate>
                        <span style="color: #f5a623;font-size: 18px;margin-left: 5px;">{{formItem.score}}</span>
                    </form-item>
                </i-form>
            </Card>
        </div>
    </div>
</div>
<script src="${pageContext.request.contextPath}/static/js/myjs/programmerInfo.js"></script>
</body>

</html>
<%--<i-table border :columns="columns7" :data="data6"></i-table>--%>
<%--<script src="../../static/js/myjs/projectTable.js"></script>--%>