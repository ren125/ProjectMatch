<%--
  Created by IntelliJ IDEA.
  User: renzhuo
  Date: 2018/4/19
  Time: 21:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">
    <title>项目市场</title>
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
        i.ivu-icon-ios-arrow-left{
            margin-top: 8px;
        }
        i.ivu-icon-ios-arrow-right{
            margin-top: 8px;
        }
        .ivu-page-options-elevator input{
            font-size: 14px;
        }
        .ivu-form-item{
            margin-bottom: 12px;
        }
        .ivu-table-wrapper.ivu-table.ivu-table-border.ivu-table-header th{
            font-size: 14px !important;
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
                <div class="subNav sublist-up"><span class="title-icon glyphicon glyphicon-chevron-up"></span><span class="sublist-title">用户中心</span>
                </div>
                <ul class="navContent" style="display:none">
                    <li>
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
                <div class="subNav sublist-down"><span class="title-icon glyphicon glyphicon-chevron-down"></span><span class="sublist-title">项目匹配</span></div>
                <ul class="navContent" style="display:block">
                    <li class="active">
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
        <div id = "PJTable">
            <Card style="width:100%;height: 100% " :bordered="false" :shadow=false>
                <p slot="title">项目市场</p>
                <i-form :label-width="120" >
                    <form-item label="按领域筛选">
                        <i-select style="width: 380px" v-model="fieldChoosed" @on-change="fieledChange" multiple filterable placeholder="按所属领域筛选（可多选）">
                            <i-option v-for="item in fieldList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                        </i-select>
                    </form-item>
                    <form-item label="按领技能筛选">
                        <i-select style="width: 380px" v-model="skillChoosed" @on-change="skillChange" multiple filterable placeholder="按所需技能筛选（可多选）">
                            <i-option v-for="item in skillList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                        </i-select>
                    </form-item>
                    <form-item label="按领酬劳金额筛选">
                        <div>
                            <%--<Tag color="blue">酬劳</Tag>--%>
                            <Icon type="social-yen"></Icon>
                            <input-number style="width: 117px" :min="0" v-model="moneyValue1" :step = "100"></input-number>
                            <Icon type="minus-round"></Icon>
                            <input-number style="width: 117px" :min="0" v-model="moneyValue2" :step = "100"></input-number>
                            <i-button @click="moneyConfirm">确定</i-button>
                            <i-button @click="moneyClear">清空</i-button>
                        </div>
                    </form-item>
                </i-form>
                <%--<div style="margin: 10px;overflow: hidden">--%>
                    <%--<i-select v-model="fieldChoosed" @on-change="fieledChange" multiple filterable placeholder="按所属领域筛选（可多选）">--%>
                        <%--<i-option v-for="item in fieldList" :value="item.value" :key="item.value">{{ item.label }}</i-option>--%>
                    <%--</i-select>--%>
                <%--</div>--%>
                <%--<div style="margin: 10px;overflow: hidden">--%>
                    <%--<i-select v-model="skillChoosed" @on-change="skillChange" multiple filterable placeholder="按所需技能筛选（可多选）">--%>
                        <%--<i-option v-for="item in skillList" :value="item.value" :key="item.value">{{ item.label }}</i-option>--%>
                    <%--</i-select>--%>
                <%--</div>--%>
                <%--<div style="margin: 10px;overflow: hidden">--%>
                    <%--<i-select v-model="satusChoosed" @on-change="satusChange" multiple filterable placeholder="按项目状态筛选（可多选）">--%>
                        <%--<i-option v-for="item in satusList" :value="item.value" :key="item.value">{{ item.label }}</i-option>--%>
                    <%--</i-select>--%>
                <%--</div>--%>
                <%--<div style="margin: 10px;overflow: hidden">--%>
                    <%--<div style="float: left;">--%>
                        <%--<Tag color="blue">酬劳</Tag>--%>
                        <%--<Icon type="social-yen"></Icon>--%>
                        <%--<input-number :min="0" v-model="moneyValue1" :step = "100"></input-number>--%>
                        <%--<Icon type="minus-round"></Icon>--%>
                        <%--<input-number :min="0" v-model="moneyValue2" :step = "100"></input-number>--%>
                        <%--<i-button @click="moneyConfirm">确定</i-button>--%>
                        <%--<i-button @click="moneyClear">清空</i-button>--%>
                    <%--</div>--%>
                    <%--&lt;%&ndash;<div style="float: right;">&ndash;%&gt;--%>
                        <%--&lt;%&ndash;<Page :total="totalPage" :current="currentPage" @on-change="changePage" simple></Page>&ndash;%&gt;--%>
                    <%--&lt;%&ndash;</div>&ndash;%&gt;--%>
                <%--</div>--%>
                <i-table style="height: 430px" :columns="columns" :data="datas" no-data-text = "没有满足条件的项目"></i-table>
                <div style="float: right;margin-top: 5px;">
                    <Page :total="totalPage" :current="1" @on-change="changePage" show-elevator></Page>
                </div>
            </Card>
        </div>
    </div>
</div>
<script src="${pageContext.request.contextPath}/static/js/myjs/projectTable.js"></script>
</body>

</html>
<%--<i-table border :columns="columns7" :data="data6"></i-table>--%>
<%--<script src="../../static/js/myjs/projectTable.js"></script>--%>
