package com.qihang.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user2")
public class User2Controller {

    @RequestMapping("/toSigin")
    public String query(){
        return "employerSigin";
    }

    @RequestMapping("/empStart")
    public String start(){
        return "empStart";
    }

    @RequestMapping("/infoModify")
    public String infoModify(){
        return "empInfoModify";
    }

    @RequestMapping("/passwordModify")
    public String passwordModify(){
        return "empPasswordModify";
    }

    @RequestMapping("/message")
    public String empMessage(){
        return "empMessage";
    }

    @RequestMapping("/publishProject")
    public String publishProject(){
        return "projectPublish";
    }

    @RequestMapping("/programmerMarket")
    public String programmerMarket(){
        return "programmerMarket";
    }

    @RequestMapping("/projectManage")
    public String projectManage(){
        return "empProject";
    }

    @RequestMapping("/projectEvaluate")
    public String projectEvaluate(){
        return "empEvaluate";
    }

    @RequestMapping("/suggest")
    public String suggest(){
        return "programmerRecommend";
    }

}
