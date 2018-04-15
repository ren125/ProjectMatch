package com.qihang.servicesImp;

import com.qihang.pojo.Project;
import com.qihang.services.ProjectService;
import com.qihang.dao.ProjectDao;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service("ProjectServiceImp")
public class ProjectServiceImp implements ProjectService {

    @Autowired
    private ProjectDao projectDao;

    public Project[] queryProject() {
        return projectDao.selectProject();
    }
}
