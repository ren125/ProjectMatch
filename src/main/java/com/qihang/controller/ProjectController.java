package com.qihang.controller;

import com.qihang.pojo.Project;
import com.qihang.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;

@Controller
@RequestMapping("/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @RequestMapping(value = "/selectProject",method = RequestMethod.POST)
    @ResponseBody
    public HashMap selectProject(@RequestParam String currentPage, @RequestParam String pageSize,
                                 @RequestParam String moneyValue1, @RequestParam String moneyValue2,
                                 @RequestParam String field,
                                 @RequestParam String skill,
                                 @RequestParam String satus){
        HashMap hashMap = new HashMap();
        //从数据库查询所有项目
        ArrayList<Project> arrayList = projectService.selectProject();

        //按领域筛选
        if(!field.equals("")){
            String[] fieldChoosed = field.split(",");
            for(int i = 0;i < arrayList.size();i++) {
                if(!contain(fieldChoosed,arrayList.get(i).getProField())) {
                    arrayList.remove(i);
                    i--;
                }
            }
        }
        //按技能筛选
        if(!skill.equals("")){
            String[] skillChoosed = skill.split(",");
            for(int i = 0;i < arrayList.size();i++) {
                if(!contain(skillChoosed,arrayList.get(i).getProSkill1()) && !contain(skillChoosed,arrayList.get(i).getProSkill2())) {
                    arrayList.remove(i);
                    i--;
                }
            }
        }
        //按项目状态筛选
        if(!satus.equals("")){
            String[] satusChoosed = satus.split(",");
            for(int i = 0;i < arrayList.size();i++) {
                if(!contain(satusChoosed,arrayList.get(i).getProSatus())) {
                    arrayList.remove(i);
                    i--;
                }
            }
        }
        //按酬劳筛选
        if(!moneyValue1.equals("") && !moneyValue2.equals("")){
            double value1 = Double.parseDouble(moneyValue1);
            double value2 = Double.parseDouble(moneyValue2);
            for(int i = 0;i < arrayList.size();i++) {
                if(arrayList.get(i).getProMoney()<value1 || arrayList.get(i).getProMoney() > value2) {
                    arrayList.remove(i);
                    i--;
                }
            }
        }

        //形成一页数据
        int page = Integer.parseInt(currentPage);
        int size = Integer.parseInt(pageSize);
        ArrayList<Project> myArrayList = new ArrayList<Project>();
        int min = (page - 1) * size,max = 0;
        if((page* size) > arrayList.size()) {
            max = arrayList.size();
        }
        else{
            max = page* size;
        }
        for(int i = min;i < max;i++) {
            myArrayList.add(arrayList.get(i));
        }

        //返回总数据条数和一页的数据
        hashMap.put("total",arrayList.size());
        hashMap.put("projectArr",myArrayList);
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
}
