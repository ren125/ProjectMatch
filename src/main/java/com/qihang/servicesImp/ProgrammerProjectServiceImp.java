package com.qihang.servicesImp;

import com.qihang.dao.ProgrammerProjectDao;
import com.qihang.dao.ProjectDao;
import com.qihang.services.ProgrammerProjectService;
import com.qihang.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

@Service
public class ProgrammerProjectServiceImp implements ProgrammerProjectService {
    @Autowired
    private ProgrammerProjectDao programmerProjectDao;
    @Autowired
    private ProjectDao projectDao;

    public int insertNewInvite(String eId,String proId,String pId,Timestamp inviteDate){
        return programmerProjectDao.insertNewInvite(eId,proId,pId,inviteDate);
    }

    public List<Map> getInviteMessage(String pId) {
        return programmerProjectDao.selectProjectInvite(pId);
    }

    public int rejectInvite(String pId, int proId) {
        return programmerProjectDao.deleteProjectInvite(pId,proId);
    }

    public boolean ifExsit(String pId, int proId) {
        if(programmerProjectDao.selectByKey(pId,proId)>=1){
            return true;
        }
        return false;
    }

    public boolean recepteInvite(String pId, int proId, Timestamp applyDate, String eId) {
        try{
            int a = programmerProjectDao.insertProjectApply(pId,proId,applyDate,eId);
            if(a>=1){
                programmerProjectDao.deleteProjectInvite(pId,proId);
                return true;
            }else{
                return false;
            }
        }catch (Exception e){
            return false;
        }
    }

    public boolean applyProject(String pId, int proId, Timestamp applyDate, String eId) {
        try{
            int a = programmerProjectDao.insertProjectApply(pId,proId,applyDate,eId);
            if(a>=1){
                return true;
            }else{
                return false;
            }
        }catch (Exception e){
            return false;
        }
    }

    public List<Map> getProjectApply(String pId) {
        return programmerProjectDao.selectProjectApply(pId);
    }

    public List<Map> getProjectConfirm(String pId) {
        return programmerProjectDao.selectProjectConfirm(pId);
    }

    public List<Map> getProjectComplete(String pId) {
        return programmerProjectDao.selectProjectComplete(pId);
    }

    public boolean recepteApply(int proId, String eId, String pId, Timestamp applyDate) {
        try{
            int a = programmerProjectDao.insertProjectConfirm(proId,eId,pId,applyDate);
            if(a>=1){
                programmerProjectDao.deleteProjectApply(proId);
                projectDao.updateStatus(proId,"2");
                return true;
            }else{
                return false;
            }
        }catch (Exception e){
            return false;
        }
    }

    public boolean ifComplete(int proId, String eId, String pId, Timestamp completeDate) {
        try{
            int a = programmerProjectDao.insertProjectComplete(proId,eId,pId,completeDate);
            if(a>=1){
                programmerProjectDao.deleteProjectConfirm(proId);
                projectDao.updateStatus(proId,"3");
                return true;
            }else{
                return false;
            }
        }catch (Exception e){
            return false;
        }
    }


}
