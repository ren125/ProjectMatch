package com.qihang.controller;

import com.alibaba.fastjson.JSON;
import com.qihang.pojo.Project;
import com.qihang.pojo.user;
import com.qihang.services.userService;
//import com.qihang.services.ProjectService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private userService userService;
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

    @RequestMapping("/query")
    public String query(@RequestParam(value = "username",required = true) String username, Model model){
        user user = new user();
        user = userService.querybyUsername(username);
        model.addAttribute("user",user);
        return "test";
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


//    @RequestMapping(value = "/showPJ",method = RequestMethod.GET)
//    @ResponseBody
//    public String showPJ(){
//        Project[] projects = projectService.queryProject();
//        if(projects==null){
//            return "";
//        }
//        else{
//            return JSON.toJSONString(projects);
//        }
//    }

}
