package com.qihang.controller;

import com.qihang.pojo.Programmer;
import com.qihang.services.ProgrammerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/programmer")
public class ProgrammerController {
    @Autowired
    private ProgrammerService programmerService;

    @ResponseBody
    @RequestMapping(value = "/login",method = RequestMethod.GET)
    public boolean login(@RequestParam String username, @RequestParam String password){
        return programmerService.ifLogin(username,password);
    }

    @ResponseBody
    @RequestMapping(value = "/sigin",method = RequestMethod.POST)
    public boolean sigin(@RequestParam Programmer programmer) {
        return programmerService.ifSigin(programmer);
    }
}
