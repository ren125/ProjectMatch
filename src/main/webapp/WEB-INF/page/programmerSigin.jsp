<%--
  Created by IntelliJ IDEA.
  User: 12571
  Date: 2018/4/16
  Time: 13:38
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
    <title>人才注册</title>
    <style>
        /*.fontsize.ivu-form-item{*/
            /*font-size: 14px;*/
        /*}*/
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
<div class="header">启航号人才-项目匹配系统 &nbsp&nbsp<span class="juese">人才注册界面</span></div>
<div id="container">
    <i-form :model="formItem" :label-width="120" >
        <form-item label="用户名">
            <i-input v-model="formItem.userId" placeholder="请输入用户名"></i-input>
        </form-item>
        <form-item label="密码">
            <i-input v-model="formItem.password" type="password" placeholder="请输入密码"></i-input>
        </form-item>
        <form-item label="重复密码">
            <i-input v-model="formItem.password2" type="password" placeholder="请再次输入密码"></i-input>
        </form-item>
        <form-item label="姓名">
            <i-input v-model="formItem.name" placeholder="请输入您的姓名"></i-input>
        </form-item>
        <form-item label="性别">
            <radio-group v-model="formItem.sex">
                <Radio label="male">Male</Radio>
                <Radio label="female">Female</Radio>
            </radio-group>
        </form-item>
        <form-item label="年龄">
            <%--<i-input v-model="formItem.age"  placeholder="请输入年龄"></i-input>--%>
            <input-number :max="100" :min="18" v-model="formItem.age"></input-number>
        </form-item>
        <form-item label="学历" prop="education">
            <i-select v-model="formItem.education" placeholder="选择您的学历">
                <i-option value="1">专科</i-option>
                <i-option value="2">本科</i-option>
                <i-option value="3">硕士</i-option>
                <i-option value="4">博士</i-option>
            </i-select>
        </form-item>
        <form-item label="电话号码">
            <i-input v-model="formItem.phone"  placeholder="请输入电话号码"></i-input>
        </form-item>
        <form-item label="邮箱">
            <%--<i-input v-model="formItem.email"  placeholder="请输入您的邮箱"></i-input>--%>
            <auto-complete
                    v-model="formItem.email"
                    @on-search="emailSearch"
                    placeholder="请输入您的邮箱"
                    style="width:380px">
                <i-option v-for="item in emailData" :value="item" :key="item">{{ item }}</i-option>
            </auto-complete>
        </form-item>
        <form-item label="时薪">
            <%--<i-input v-model="formItem.hoursalary"  placeholder="请输入您期望的时薪"></i-input>--%>
            <input-number :min="20" :step="20" v-model="formItem.hoursalary"></input-number>
        </form-item>
        <form-item label="工作领域" prop="workfield">
            <i-select v-model="formItem.workfield" placeholder="选择您熟悉的工作领域">
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
        <form-item label="擅长技能" prop="skill">
            <i-select v-model="formItem.skill" filterable multiple placeholder="选择您最擅长的两个技能">
                <i-option v-for="item in skills" :value="item.value" :key="item.value">{{ item.label }}</i-option>
            </i-select>
        </form-item>
        <form-item label="工作经验年数">
            <%--<i-input v-model="formItem.experience"  placeholder="请输入您的工作经验的年限"></i-input>--%>
            <input-number :max="30" :min="0" v-model="formItem.experience"></input-number>
        </form-item>
        <form-item>
            <i-button type="primary" @click="commit()">Submit</i-button>
            <i-button type="ghost" style="margin-left: 12px" @click="cancel()">Cancel</i-button>
        </form-item>
    </i-form>
</div>
<script src="${pageContext.request.contextPath}/static/js/myjs/programmerSigin.js"></script>
</body>
</html>
