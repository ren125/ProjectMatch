<%--
  Created by IntelliJ IDEA.
  User: 12571
  Date: 2018/3/29
    Time: 20:58
    To change this template use File | Settings | File Templates.
    --%>
       <%--<h2>Hello World!</h2>--%>
       <%--用户名<h1>${username}</h1>--%>
       <%--密码<h1>${password}</h1>--%>
       <%@ page contentType="text/html;charset=UTF-8" language="java" %>
       <style>
       .aaa {
           background-image: url("../../static/images/home.png");
    }
</style>
<html>
<body>
<div class="aaa"></div>
用户名<h1>${user.username}</h1>
密码<h1>${user.password}</h1>
</body>
</html>
