package com.qihang.dao;

import org.apache.ibatis.annotations.Param;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

public interface ProgrammerProjectDao {

    int insertNewInvite(@Param("eId") String eId,@Param("proId") String proId,@Param("pId") String pId,@Param("inviteDate") Timestamp inviteDate);

    List<Map> selectProjectInvite(String pId);

    int deleteProjectInvite(@Param("pId") String pId, @Param("proId") int proId);

    int selectByKey(@Param("pId") String pId, @Param("proId") int proId);

    int insertProjectApply(@Param("pId") String pId, @Param("proId") int proId,@Param("applyDate") Timestamp applyDate,@Param("eId") String eId);

    List<Map> selectProjectApply(String pId);

    List<Map> selectProjectConfirm(String pId);

    List<Map> selectProjectComplete(String pId);

    int insertProjectComplete(@Param("proId") int proId,@Param("eId") String eId,@Param("pId") String pId, @Param("completeDate") Timestamp completeDate);

    int insertProjectConfirm(@Param("proId") int proId,@Param("eId") String eId,@Param("pId") String pId, @Param("confirmDate") Timestamp confirmDate);

    int deleteProjectApply(int proId);

    int deleteProjectConfirm(int proId);

}
