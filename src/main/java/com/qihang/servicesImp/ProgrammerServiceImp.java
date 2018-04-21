package com.qihang.servicesImp;

import com.qihang.dao.ProgrammerDao;
import com.qihang.pojo.Programmer;
import com.qihang.services.ProgrammerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProgrammerServiceImp implements ProgrammerService {
    @Autowired
    private ProgrammerDao programmerDao;


    public boolean ifLogin(String pUsername, String pPassword) {
        Programmer programmer = programmerDao.selectByPrimaryKey(pUsername);
        if(programmer == null){
            return false;
        }else if(programmer.getpPassword().equals(pPassword)){
            return true;
        }else{
            return false;
        }
    }

    public boolean ifSigin(Programmer programmer) {
        try {
            int insert = programmerDao.insert(programmer);
            if(insert>=1){
                return true;
            }else{
                return false;
            }
        }catch (Exception e) {
            return false;
        }
    }

    public Programmer selectById(String pUsername) {
        Programmer programmer = programmerDao.selectByPrimaryKey(pUsername);
        return programmer;
    }

    public boolean update(Programmer programmer) {
        try {
            int insert = programmerDao.updateByPrimaryKey(programmer);
            if(insert>=1){
                return true;
            }else{
                return false;
            }
        }catch (Exception e) {
            return false;
        }
    }
}
