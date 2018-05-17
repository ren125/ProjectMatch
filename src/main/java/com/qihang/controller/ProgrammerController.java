package com.qihang.controller;

import com.qihang.pojo.Programmer;
import com.qihang.pojo.Project;
import com.qihang.services.ProgrammerProjectService;
import com.qihang.services.ProgrammerService;
import com.qihang.services.ProgrammerSkillService;
import com.qihang.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.sql.Timestamp;
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
    @Autowired
    private ProgrammerProjectService programmerProjectService;
    @Autowired
    private ProjectService projectService;

    @RequestMapping(value = "/toSigin")
    public String toSigin(){
        return "programmerSigin";
    }

    @RequestMapping(value = "/sigout")
    public String sigout(HttpServletRequest req){
        req.getSession().invalidate();
        return "index";
    }

    /**
     * 人才登陆
     * @param username
     * @param password
     * @param req
     * @return
     */
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

    /**
     * 人才注册
     * @param userId
     * @param password
     * @param name
     * @param sex
     * @param age
     * @param education
     * @param phone
     * @param email
     * @param hoursalary
     * @param workfield
     * @param skill1
     * @param skill2
     * @param experience
     * @return
     */
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

    /**
     * 获取个人信息
     * @param userId
     * @return
     */
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

    /**
     * 个人信息修改
     * @param userId
     * @param name
     * @param sex
     * @param age
     * @param education
     * @param phone
     * @param email
     * @param hoursalary
     * @param workfield
     * @param skill1
     * @param skill2
     * @param experience
     * @return
     */
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

    /**
     * 密码修改
     * @param userId
     * @param password1
     * @param password2
     * @return
     */
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


    /**
     * 雇主邀请消息
     * @param userId
     * @param currentPage
     * @param pageSize
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/inviteMessage",method = RequestMethod.POST)
    public HashMap getInvite(@RequestParam String userId,@RequestParam String currentPage, @RequestParam String pageSize){
        List<Map> messageList = programmerProjectService.getInviteMessage(userId);
        HashMap map = new HashMap();
        int page = Integer.parseInt(currentPage);
        int size = Integer.parseInt(pageSize);
        int total = messageList.size();
        if(size>=total){
            map.put("total",total);
            map.put("messageList",messageList);
            return map;
        }else {
            List<Map> myList = new ArrayList<Map>();
            int min = (page - 1) * size, max = 0;
            if ((page * size) > messageList.size()) {
                max = messageList.size();
            } else {
                max = page * size;
            }
            for (int i = min; i < max; i++) {
                myList.add(messageList.get(i));
            }

            map.put("total", total);
            map.put("messageList", myList);
            return map;
        }
    }

    /**
     * 接受邀请
     * @param userId
     * @param proId
     * @param eId
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/recepteInvite",method = RequestMethod.POST)
    public boolean recepteInvite(@RequestParam String userId,@RequestParam int proId,@RequestParam String eId){
        SimpleDateFormat df1 = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        String time = df1.format(new Date());
        Timestamp createDate = Timestamp.valueOf(time);
        return programmerProjectService.recepteInvite(userId,proId,createDate,eId);
    }

    /**
     * 申请项目
     * @param userId
     * @param proId
     * @param eId
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/applyProject",method = RequestMethod.POST)
    public boolean applyProject(@RequestParam String userId,@RequestParam int proId,@RequestParam String eId){
        SimpleDateFormat df1 = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        String time = df1.format(new Date());
        Timestamp createDate = Timestamp.valueOf(time);
        return programmerProjectService.applyProject(userId,proId,createDate,eId);
    }

    /**
     * 拒绝邀请
     * @param userId
     * @param proId
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/rejectInvite",method = RequestMethod.POST)
    public int rejectInvite(@RequestParam String userId,@RequestParam int proId){
        return programmerProjectService.rejectInvite(userId,proId);
    }

    /**
     * 申请列表
     * @param userId
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/applyList",method = RequestMethod.POST)
    public List<Map> getApplyList(@RequestParam String userId){
        return programmerProjectService.getProjectApply(userId);
    }

    /**
     * 签约列表
     * @param userId
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/confirmList",method = RequestMethod.POST)
    public List<Map> getConfirmList(@RequestParam String userId){
        return programmerProjectService.getProjectConfirm(userId);
    }


    /**
     * 项目已完成列表
     * @param userId
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/completeList",method = RequestMethod.POST)
    public List<Map> getCompleteList(@RequestParam String userId){
        return programmerProjectService.getProjectComplete(userId);
    }

    //查询所有人才信息
    @RequestMapping(value = "/selectAllProgrammer",method = RequestMethod.POST)
    @ResponseBody
    public HashMap selectProject(@RequestParam String currentPage, @RequestParam String pageSize,
                                 @RequestParam String moneyValue1, @RequestParam String moneyValue2,
                                 @RequestParam String education, @RequestParam String scoreValue){
        HashMap hashMap = new HashMap();
        //从数据库查询所有人才
        ArrayList<Map> arrayList = programmerService.selectAllProgrammer();

        //按学历筛选
        if(!education.equals("")){
            String[] educationChoosed = education.split(",");
            for(int i = 0;i < arrayList.size();i++) {
                if(!contain(educationChoosed,arrayList.get(i).get("education").toString())) {
                    arrayList.remove(i);
                    i--;
                }
            }
        }
        //按薪资筛选
        if(!moneyValue1.equals("") && !moneyValue2.equals("")){
            double value1 = Double.parseDouble(moneyValue1);
            double value2 = Double.parseDouble(moneyValue2);
            int hoursalary = 0;
            for(int i = 0;i < arrayList.size();i++) {
                hoursalary = (Integer) arrayList.get(i).get("hoursalary");
                if(hoursalary <value1 || hoursalary > value2) {
                    arrayList.remove(i);
                    i--;
                }
            }
        }
        //按综合评价筛选
        if(!scoreValue.equals("0")){
            double score = Double.parseDouble(scoreValue);
            int overScore = 0;
            for(int i = 0;i < arrayList.size();i++) {
                overScore = (Integer) arrayList.get(i).get("over_score");
                if(overScore < score) {
                    arrayList.remove(i);
                    i--;
                }
            }
        }

        //形成一页数据
        int page = Integer.parseInt(currentPage);
        int size = Integer.parseInt(pageSize);
        ArrayList<Map> myArrayList = new ArrayList<Map>();
        int min = (page - 1) * size,max = 0;
        if((page* size) > arrayList.size()) {
            max = arrayList.size();
        }
        else{
            max = page* size;
        }

        String[] educationArr = {"","大专","本科","硕士","博士"};
        for(int i = min;i < max;i++) {
            //将学历编号转成对应的学历
            int educationNum = (Integer) arrayList.get(i).get("education");
            arrayList.get(i).remove("education");
            arrayList.get(i).put("education",educationArr[educationNum]);
            myArrayList.add(arrayList.get(i));
        }

        //返回总数据条数和一页的数据
        hashMap.put("total",arrayList.size());
        hashMap.put("programmerArr",myArrayList);
        return hashMap;
    }

    private boolean contain(String[] strArr, String str) {
        for(int i = 0; i < strArr.length; i++) {
            if(strArr[i].equals(str)) {
                return true;
            }
        }
        return false;
    }

    @ResponseBody
    @RequestMapping(value = "/getSkill",method = RequestMethod.POST)
    public List<Map> getSkill(@RequestParam String pId){
        return programmerSkillService.selectSkillById(pId);
    }

    @ResponseBody
    @RequestMapping(value = "/suggestProject",method = RequestMethod.POST)
    public List<Project> suggestProject(@RequestParam String pId){
        ArrayList<Project> arrayList = projectService.selectProject();
        double[] matchDegreeArray = new double[arrayList.size()];
        for (int i=0;i<arrayList.size();i++) {
            int matchDegree = 0;
            if(arrayList.get(i).getProField().equals(programmerService.selectById(pId).getWorkField())){
                matchDegree+=5;
            }
            if(arrayList.get(i).getProSkill1().equals(programmerSkillService.selectSkillById(pId).get(0).get("skill_name"))){
                matchDegree+=8;
            }
            if(arrayList.get(i).getProSkill1().equals(programmerSkillService.selectSkillById(pId).get(1).get("skill_name"))){
                matchDegree+=8;
            }
            if(arrayList.get(i).getProSkill2().equals(programmerSkillService.selectSkillById(pId).get(0).get("skill_name"))){
                matchDegree+=8;
            }
            if(arrayList.get(i).getProSkill2().equals(programmerSkillService.selectSkillById(pId).get(1).get("skill_name"))){
                matchDegree+=8;
            }
            matchDegreeArray[i]=matchDegree;
        }
        int[] temp = new int[5];
        double[] degree = new double[5];
        for(int i=0;i<matchDegreeArray.length;i++){
            if(matchDegreeArray[i]>degree[0]){
                temp[4] = temp[3];
                temp[3] = temp[2];
                temp[2] = temp[1];
                temp[1] = temp[0];
                temp[0] = i;
                degree[4] = matchDegreeArray[3];
                degree[3] = matchDegreeArray[2];
                degree[2] = matchDegreeArray[1];
                degree[1] = matchDegreeArray[0];
                degree[0] = matchDegreeArray[i];
            }else if(matchDegreeArray[i]>degree[1]){
                temp[4] = temp[3];
                temp[3] = temp[2];
                temp[2] = temp[1];
                temp[1] = i;
                degree[4] = degree[3];
                degree[3] = degree[2];
                degree[2] = degree[1];
                degree[1] = matchDegreeArray[i];
            }else if(matchDegreeArray[i]>degree[2]){
                temp[4] = temp[3];
                temp[3] = temp[2];
                temp[2] = i;
                degree[4] = degree[3];
                degree[3] = degree[2];
                degree[2] = matchDegreeArray[i];
            }else if(matchDegreeArray[i]>degree[3]){
                temp[4] = temp[3];
                temp[3] = i;
                degree[4] = degree[3];
                degree[3] = matchDegreeArray[i];
            }else if(matchDegreeArray[i]>degree[4]){
                temp[4] = i;
                degree[4] = matchDegreeArray[i];
            }
        }
        ArrayList<Project> newList = new ArrayList<Project>();
        for(int i=0;i<5;i++){
            newList.add(arrayList.get(temp[i]));
        }
        return newList;

    }


}
