package com.qihang.controller;

import com.qihang.pojo.Programmer;
import com.qihang.services.ProgrammerService;
import com.qihang.services.ProgrammerSkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/programmer")
public class ProgrammerController {
    @Autowired
    private ProgrammerService programmerService;
    @Autowired
    private ProgrammerSkillService programmerSkillService;

    @RequestMapping(value = "/toSigin")
    public String toSigin(){
        return "programmerSigin";
    }

    @RequestMapping(value = "/sigout")
    public String sigout(HttpServletRequest req){
        req.getSession().invalidate();
        return "index";
    }

    @ResponseBody
    @RequestMapping(value = "/login",method = RequestMethod.GET)
    public boolean login(@RequestParam String username, @RequestParam String password,HttpServletRequest req ){
        HttpSession session = req.getSession();
        boolean login = programmerService.ifLogin(username,password);
        if(login==true){
            session.setAttribute("userId", username);
        }
        return login;
    }

    @ResponseBody
    @RequestMapping(value = "/sigin",method = RequestMethod.GET)
    public boolean sigin(@RequestParam String userId,@RequestParam String password,@RequestParam String name,@RequestParam String sex,@RequestParam int age,
                         @RequestParam int education,@RequestParam String phone,@RequestParam String email,@RequestParam Long hoursalary,
                         @RequestParam String workfield,@RequestParam int skill1, @RequestParam int skill2,@RequestParam int experience ) {
        //Integer.valueOf(age) Integer.valueOf(education) Long.valueOf(hoursalary) Integer.valueOf(experience)
        Programmer programmer = new Programmer();
        programmer.setpId(userId);
        programmer.setpPassword(password);
        programmer.setpName(name);
        programmer.setpSex(sex);
        programmer.setpAge(age);
        programmer.setEducation(education);
        programmer.setpPhone(phone);
        programmer.setpEmail(email);
        programmer.setHoursalary(hoursalary);
        programmer.setWorkField(workfield);
        programmer.setWorkExperience(experience);
        programmer.setOverScore(90L);
        programmerSkillService.programmerSkillInit(userId,skill1,90f);
        programmerSkillService.programmerSkillInit(userId,skill2,90f);
        boolean bl = programmerService.ifSigin(programmer);
        return bl;
    }

    @ResponseBody
    @RequestMapping(value = "/info",method = RequestMethod.POST)
    public HashMap programmerInfo(@RequestParam String userId){
        HashMap hm =new HashMap();
        Programmer programmer = programmerService.selectById(userId);
        List<Map> list = programmerSkillService.selectSkillById(userId);
        hm.put("programmer",programmer);
        hm.put("list",list);
        return hm;
    }

    @ResponseBody
    @RequestMapping(value = "/infoModify",method = RequestMethod.POST)
    public boolean programmerInfoModify(@RequestParam String userId,@RequestParam String name,@RequestParam String sex,@RequestParam int age,
                                        @RequestParam int education,@RequestParam String phone,@RequestParam String email,@RequestParam Long hoursalary,
                                        @RequestParam String workfield,@RequestParam int skill1, @RequestParam int skill2,@RequestParam int experience){
        Programmer programmer = programmerService.selectById(userId);
        programmer.setpId(userId);
        programmer.setpName(name);
        programmer.setpSex(sex);
        programmer.setpAge(age);
        programmer.setEducation(education);
        programmer.setpPhone(phone);
        programmer.setpEmail(email);
        programmer.setHoursalary(hoursalary);
        programmer.setWorkField(workfield);
        programmer.setWorkExperience(experience);
        programmer.setOverScore(90L);
        boolean bl = programmerService.update(programmer);
        try {
            programmerSkillService.programmerSkillDelete(userId);
            programmerSkillService.programmerSkillInit(userId, skill1, 90f);
            programmerSkillService.programmerSkillInit(userId, skill2, 90f);
        }catch (Exception e){
            return bl||false;
        }
        return true;
    }

    @ResponseBody
    @RequestMapping(value = "/passwordModify",method = RequestMethod.POST)
    public boolean passwordModify(@RequestParam String userId,@RequestParam String password1, @RequestParam String password2){
        Programmer programmer = programmerService.selectById(userId);
        if(!programmer.getpPassword().equals(password1)){
            return false;
        }
        programmer.setpPassword(password2);
        boolean bl = programmerService.update(programmer);
        return bl;
    }
}
