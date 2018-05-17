package com.qihang.services;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

public interface ProgrammerProjectService {
    int insertNewInvite(String eId,String proId,String pId,Timestamp inviteDate);

    List<Map> getInviteMessage(String pId);

    int rejectInvite(String pId,int proId);

    boolean ifExsit(String pId,int proId);

    boolean recepteInvite(String pId, int proId, Timestamp applyDate, String eId);

    boolean applyProject(String pId, int proId, Timestamp applyDate, String eId);

    List<Map> getProjectApply(String pId);

    List<Map> getProjectConfirm(String pId);

    List<Map> getProjectComplete(String pId);

    boolean recepteApply(int proId, String eId, String pId, Timestamp applyDate);

    boolean ifComplete(int proId, String eId, String pId, Timestamp applyDate);

//    int deleteApply(int proId);
//
//    int deleteConfirm(int proId);
}
