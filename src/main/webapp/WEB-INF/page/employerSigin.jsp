<%--
  Created by IntelliJ IDEA.
  User: renzhuo
  Date: 2018/4/24
  Time: 14:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta name="renderer" content="webkit" />
    <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE">
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
    <script src="${pageContext.request.contextPath}/static/js/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/static/js/vue.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/static/js/iview-min.js"></script>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/iview.css">
    <title>雇主注册</title>
    <style>
        /*.fontsize.ivu-form-item{*/
        /*font-size: 14px;*/
        /*}*/
        /*.ivu-form-item{*/
            /*margin-bottom: 12px;*/
        /*}*/
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
        .header {
            padding-left: 50px;
            font-size: 32px;
            padding-top: 30px;
            height: 120px;
            width: 100%;
            border-bottom: 1px solid #999;
        }
        #container{
            margin: 40px auto;
            width: 500px;
        }
        .juese {
            font-size: 22px;
        }
    </style>
</head>
<body>
<div class="header">启航号人才-项目匹配系统 &nbsp&nbsp<span class="juese">雇主注册界面</span></div>
<div id="container">
    <i-form :model="formItem" :label-width="120" :rules="ruleInline" >
        <form-item prop="userId" label="用户名">
            <i-input v-model="formItem.userId" placeholder="请输入用户名"></i-input>
        </form-item>
        <form-item prop="password" label="密码">
            <i-input v-model="formItem.password" type="password" placeholder="请输入密码"></i-input>
        </form-item>
        <form-item prop="password2" label="重复密码">
            <i-input v-model="formItem.password2" type="password" placeholder="请再次输入密码"></i-input>
        </form-item>
        <form-item prop="name" label="姓名">
            <i-input v-model="formItem.name" placeholder="请输入您的姓名"></i-input>
        </form-item>
        <form-item prop="phone" label="电话号码">
            <i-input v-model="formItem.phone"  placeholder="请输入电话号码"></i-input>
        </form-item>
        <form-item prop="email" label="邮箱">
            <%--<i-input v-model="formItem.email"  placeholder="请输入您的邮箱"></i-input>--%>
            <auto-complete
                    v-model="formItem.email"
                    @on-search="emailSearch"
                    placeholder="请输入您的邮箱"
                    style="width:380px">
                <i-option v-for="item in emailData" :value="item" :key="item">{{ item }}</i-option>
            </auto-complete>
        </form-item>
        <form-item>
            <i-button type="primary" @click="commit()">提交</i-button>
            <i-button type="ghost" style="margin-left: 12px" @click="cancel()">取消</i-button>
        </form-item>
    </i-form>
</div>
<script src="${pageContext.request.contextPath}/static/js/myjs/employerSigin.js"></script>
</body>
</html>

