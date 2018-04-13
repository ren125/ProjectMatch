<%--
  Created by IntelliJ IDEA.
  User: 12571
  Date: 2018/4/13
  Time: 14:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">
    <title>navigation</title>
    <link href="../../static/bootstrap-3.3.5-dist/css/bootstrap.min.css" title="" rel="stylesheet" />
    <link title="" href="../../static/css/style.css" rel="stylesheet" type="text/css"  />
    <link title="blue" href="../../static/css/dermadefault.css" rel="stylesheet" type="text/css"/>
    <script src="../../static/js/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script src="../../static/js/jquery.cookie.js" type="text/javascript"></script>
    <script src="../../static/bootstrap-3.3.5-dist/js/bootstrap.min.js" type="text/javascript"></script>
</head>
<body>
<div class="left-main left-full">
    <!-- <div class="sidebar-fold"><span class="glyphicon glyphicon-menu-hamburger"></span></div> -->
    <div class="subNavBox">
        <div class="sBox">
            <div class="subNav sublist-down"><span class="title-icon glyphicon glyphicon-chevron-down"></span><span class="sublist-title">用户中心</span>
            </div>
            <ul class="navContent" style="display:block">
                <li>
                    <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />个人信息</div>--%>
                    <a href="userInfo.html"><span class="sublist-icon glyphicon glyphicon-user"></span><span class="sub-title">账号管理</span></a> </li>
                <li class="active">
                    <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />信息修改</div>--%>
                    <a href="message.html"><span class="sublist-icon glyphicon glyphicon-envelope"></span><span class="sub-title">消息中心</span></a> </li>
                <li>
                    <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />密码修改</div>--%>
                    <a href="smsInfo.html"><span class="sublist-icon glyphicon glyphicon-bullhorn"></span><span class="sub-title">短信</span></a></li>
                <li>
                    <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />消息中心</div>--%>
                    <a href="identify.html"><span class="sublist-icon glyphicon glyphicon-credit-card"></span><span class="sub-title">实名认证</span></a></li>
            </ul>
        </div>
        <div class="sBox">
            <div class="subNav sublist-up"><span class="title-icon glyphicon glyphicon-chevron-up"></span><span class="sublist-title">关于我们</span></div>
            <ul class="navContent" style="display:none">
                <li>
                    <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />添加新闻</div>--%>
                    <a href="#"><span class="sublist-icon glyphicon glyphicon-user"></span><span class="sub-title">添加新闻</span></a></li>
                <li>
                    <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />添加新闻</div>--%>
                    <a href="#"><span class="sublist-icon glyphicon glyphicon-user"></span><span class="sub-title">新闻管理</span></a></li>
                <li>
                    <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />添加新闻</div>--%>
                    <a href="#"><span class="sublist-icon glyphicon glyphicon-user"></span><span class="sub-title">添加新闻</span></a></li>
                <li>
                    <%--<div class="showtitle" style="width:100px;"><img src="img/leftimg.png" />新闻管理</div>--%>
                    <a href="#"><span class="sublist-icon glyphicon glyphicon-user"></span><span class="sub-title">新闻管理</span></a></li>
            </ul>
        </div>
    </div>
</div>
</body>
</html>
