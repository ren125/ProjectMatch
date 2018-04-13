<%--
  Created by IntelliJ IDEA.
  User: 12571
  Date: 2018/4/13
  Time: 14:28
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">
    <title>header</title>
    <link href="../../static/bootstrap-3.3.5-dist/css/bootstrap.min.css" title="" rel="stylesheet" />
    <link title="" href="../../static/css/style.css" rel="stylesheet" type="text/css"  />
    <link title="blue" href="../../static/css/dermadefault.css" rel="stylesheet" type="text/css"/>
    <script src="../../static/js/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script src="../../static/js/jquery.cookie.js" type="text/javascript"></script>
    <script src="../../static/bootstrap-3.3.5-dist/js/bootstrap.min.js" type="text/javascript"></script>
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
            <li class="dropdown li-border"><a href="#" class="dropdown-toggle mystyle-color" data-toggle="dropdown">00000000@qq.com<span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a href="#">退出</a></li>
                </ul>
            </li>
        </ul>
    </div>
</nav>

</body>
</html>
