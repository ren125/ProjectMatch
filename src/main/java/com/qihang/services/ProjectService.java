package com.qihang.services;

import com.qihang.pojo.Project;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Map;

public interface ProjectService {
    ArrayList<Project> selectProject();

    boolean insertProject(String proName, String proEmp, String proField, int  proSkill1, int proSkill2, Long proMoney, Timestamp proLastDate, String proOverview, String proStatus);

    boolean updateStatus(Integer proId,String proStatus);

    Map selectById(Integer proId);

}
