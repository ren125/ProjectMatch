package com.qihang.servicesImp;

import com.qihang.dao.EmpProjectDao;
import com.qihang.services.EmpProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class EmpProjectServiceimp implements EmpProjectService {

    @Autowired
    private EmpProjectDao empProjectDao;

    public List<Map> getProject1(String eId) {
        return empProjectDao.selectProject1(eId);
    }

    public List<Map> getProject2(String eId) {
        return empProjectDao.selectProject2(eId);
    }

    public List<Map> getProject3(String eId) {
        return empProjectDao.selectProject3(eId);
    }
}
