<%--
  Created by IntelliJ IDEA.
  User: 12571
  Date: 2018/4/13
  Time: 14:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">
    <title>起始页</title>
    <link href="../../static/bootstrap-3.3.5-dist/css/bootstrap.min.css" title="" rel="stylesheet" />
    <link title="" href="../../static/css/style.css" rel="stylesheet" type="text/css"  />
    <link title="blue" href="../../static/css/dermadefault.css" rel="stylesheet" type="text/css"/>
    <script src="../../static/js/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script src="../../static/js/jquery.cookie.js" type="text/javascript"></script>
    <script src="../../static/bootstrap-3.3.5-dist/js/bootstrap.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="../../static/js/vue.js"></script>
    <script type="text/javascript" src="../../static/js/iview-min.js"></script>
    <link rel="stylesheet" type="text/css" href="../../static/css/iview.css">
</head>
<body>
<jsp:include page="/user/test"></jsp:include>
<div class="down-main">
    <jsp:include page="/user/daohang"></jsp:include>
    <div id = "PJTable" class="right-product right-off">
        <i-table border :columns="columns1" :data="data1"></i-table>
    </div>
</div>
<script src="../../static/js/myjs/projectTable.js"></script>
</body>

</html>
