package com.qihang.servicesImp;

import com.qihang.dao.ProjectDao;
import com.qihang.pojo.Project;
import com.qihang.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Map;

@Service
public class ProjectServiceImp implements ProjectService {
    @Autowired
    private ProjectDao projectDao;

    public ArrayList<Project> selectProject(){
        ArrayList<Project> arrayList = projectDao.selectProject();
        return  arrayList;
    }

    public boolean insertProject(String proName, String proEmp, String proField, int proSkill1, int proSkill2, Long proMoney, Timestamp proLastDate, String proOverview, String proStatus) {
        try{
            int a = projectDao.insertProject(proName,proEmp,proField,proSkill1,proSkill2,proMoney,proLastDate,proOverview,proStatus);
            if(a>=1){
                return true;
            }else{
                return false;
            }
        }catch (Exception e){
            return false;
        }
    }

    public boolean updateStatus(Integer proId, String proStatus) {
        try{
            int a = projectDao.updateStatus(proId,proStatus);
            if(a>=1){
                return true;
            }else{
                return false;
            }
        }catch (Exception e){
            return false;
        }
    }

    public Map selectById(Integer proId) {
        return projectDao.selectById(proId);
    }

}
