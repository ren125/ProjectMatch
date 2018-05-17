package com.qihang.controller;

//import com.qihang.services.ProjectService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@Controller
@RequestMapping("/user")
public class UserController {
    //private ProjectService projectService;

    @RequestMapping("/test")
    public String query(Model model){
        model.addAttribute("username","阿龙");
        model.addAttribute("password","along");
        return "header";
    }

    @RequestMapping("/daohang")
    public String daohang(Model model){
        return "daohang";
    }

    @RequestMapping("/start")
    public String start(Model model){
        return "start";
    }

    @RequestMapping("/info")
    public String info(){
        return "userInfo";
    }

    @RequestMapping("/infoModify")
    public String infoModify(){
        return "userInfoModify";
    }


    @RequestMapping("/projectMarket")
    public String projectMarket(){
        return "projectMarket";
    }

    @RequestMapping("/passwordModify")
    public String passwordModify(){
        return "passwordModify";
    }

    @RequestMapping("/message")
    public String message(){
        return "message";
    }

    @RequestMapping("/suggest")
    public String suggest(){
        return "projectRecommend";
    }

    @RequestMapping("/projectManage")
    public String projectManage(){
        return "projectRecord";
    }
    
}
