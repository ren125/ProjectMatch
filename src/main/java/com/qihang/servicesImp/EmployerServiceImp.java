package com.qihang.servicesImp;

import com.qihang.dao.EmpMessageDao;
import com.qihang.dao.EmployerDao;
import com.qihang.services.EmployerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class EmployerServiceImp implements EmployerService{
    @Autowired
    private EmployerDao employerDao;
    @Autowired
    private EmpMessageDao empMessageDao;

    public boolean ifLogin(String eId, String password) {
        int a = employerDao.selectByPrimaryKey(eId,password);
        if(a>=1){
            return true;
        }else{
            return false;
        }
    }

    public boolean ifSigin(String eId, String password, String name, String phone, String email) {
        int a = employerDao.insertEmployer(eId,password,name,phone,email);
        if(a>=1){
            return true;
        }else{
            return false;
        }
    }

    public Map getEmpInfo(String eId) {
        return employerDao.selectById(eId);
    }

    public boolean updateEmpInfo(String eId, String name, String phone, String email) {
        int a = employerDao.updateById(eId,name,phone,email);
        if(a>=1){
            return true;
        }else{
            return false;
        }
    }

    public boolean updatePassword(String eId, String password) {
        int a = employerDao.updatePassword(eId,password);
        if(a>=1){
            return true;
        }else{
            return false;
        }
    }

    public List<Map> getProject(String eId) {
        return empMessageDao.selectProjectApply(eId);
    }

    public List<Map> getApplyProgrammer(String proId) {
        return empMessageDao.selectProgrammer(proId);
    }


}
