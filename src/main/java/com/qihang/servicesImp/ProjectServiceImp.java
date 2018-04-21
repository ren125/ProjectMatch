package com.qihang.servicesImp;

import com.qihang.dao.ProjectDao;
import com.qihang.pojo.Project;
import com.qihang.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;

@Service
public class ProjectServiceImp implements ProjectService {
    @Autowired
    private ProjectDao projectDao;

    public ArrayList<Project> selectProject(){
        ArrayList<Project> arrayList = projectDao.selectProject();
        return  arrayList;
    }

}
