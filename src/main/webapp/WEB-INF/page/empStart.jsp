<%--
  Created by IntelliJ IDEA.
  User: renzhuo
  Date: 2018/4/25
  Time: 15:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">
    <title>起始页</title>
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
        #right-part{
            background-size: 100% 100%;
            -moz-background-size: 100% 100%;
            -webkit-background-size: 100% 100%;
            background-image: url("/static/images/timg.jpg");
            background-repeat: no-repeat;
        }
        .welcome{
            font-size: 36px;
            margin-left: 85px;
            margin-top: 5px;
        }
        .welcome2{
            font-size: 36px;
            margin-left: 90px;
            margin-top: 5px;
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
                        <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />信息修改</div>--%>
                        <a href="/user2/infoModify"><span class="sublist-icon glyphicon glyphicon-envelope"></span><span class="sub-title">信息修改</span></a> </li>
                    <li>
                        <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />密码修改</div>--%>
                        <a href="/user2/passwordModify"><span class="sublist-icon glyphicon glyphicon-credit-card"></span><span class="sub-title">密码修改</span></a></li>
                    <li>
                        <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />消息中心</div>--%>
                        <a href="/user2/message"><span class="sublist-icon glyphicon glyphicon-bullhorn"></span><span class="sub-title">消息中心</span></a></li>
                </ul>
            </div>
            <div class="sBox">
                <div class="subNav sublist-up"><span class="title-icon glyphicon glyphicon-chevron-up"></span><span class="sublist-title">人才匹配</span></div>
                <ul class="navContent" style="display:none">
                    <li>
                        <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />添加新闻</div>--%>
                        <a href="/user2/publishProject"><span class="sublist-icon glyphicon glyphicon-user"></span><span class="sub-title">项目发布</span></a></li>
                    <li>
                        <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />添加新闻</div>--%>
                        <a href="/user2/programmerMarket"><span class="sublist-icon glyphicon glyphicon-user"></span><span class="sub-title">人才市场</span></a></li>
                    <li>
                        <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />添加新闻</div>--%>
                        <a href="/user2/suggest"><span class="sublist-icon glyphicon glyphicon-user"></span><span class="sub-title">平台推荐</span></a></li>
                    <li>
                        <a href="/user2/projectEvaluate"><span class="sublist-icon glyphicon glyphicon-user"></span><span class="sub-title">项目评价</span></a></li>
                    <li>
                        <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />添加新闻</div>--%>
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
        <div class="welcome">欢</div>
        <div class="welcome">迎&nbsp开</div>
        <div class="welcome">入&nbsp启</div>
        <div class="welcome">驻&nbsp您</div>
        <div class="welcome">启&nbsp的</div>
        <div class="welcome">航&nbsp梦</div>
        <div class="welcome">号&nbsp想</div>
        <%--<div class="welcome">&nbsp&nbsp&nbsp&nbsp&nbsp启</div>--%>
        <%--<div class="welcome">&nbsp&nbsp&nbsp&nbsp&nbsp航</div>--%>
        <div class="welcome2">&nbsp&nbsp&nbsp&nbsp之</div>
        <div class="welcome2">&nbsp&nbsp&nbsp&nbsp旅</div>
    </div>
</div>
</body>

</html>
<%--<i-table border :columns="columns7" :data="data6"></i-table>--%>
<%--<script src="../../static/js/myjs/projectTable.js"></script>--%>
