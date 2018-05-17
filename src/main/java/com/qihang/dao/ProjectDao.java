package com.qihang.dao;

import com.qihang.pojo.Project;
import org.apache.ibatis.annotations.Param;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public interface ProjectDao {
    ArrayList<Project> selectProject();

    int insertProject(@Param("proName") String proName,@Param("proEmp") String proEmp,@Param("proField") String proField,@Param("proSkill1") int proSkill1,@Param("proSkill2") int proSkill2,@Param("proMoney") Long proMoney,@Param("proLastDate") Timestamp proLastDate,@Param("proOverview") String proOverview,@Param("proStatus") String proStatus);

    int updateStatus(Integer proId,String proStatus);

    Map selectById(Integer proId);
}