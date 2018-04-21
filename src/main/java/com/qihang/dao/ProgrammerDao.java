package com.qihang.dao;

import com.qihang.pojo.Programmer;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

public interface ProgrammerDao {
    int deleteByPrimaryKey(String pId);

    int insert(Programmer record);

    int insertProgrammerSkill(@Param("pId")String pId, @Param("skillId")Integer skillId,@Param("skillScore")Float skillScore);

    int updateProgrammerSkill(@Param("pId")String pId, @Param("skillId")Integer skillId,@Param("skillScore")Float skillScore);

    int skillDelete(@Param("pId")String pId);

    List<Map> selectSkillById(String pId);

    int insertSelective(Programmer record);

    Programmer selectByPrimaryKey(String pId);

    int updateByPrimaryKeySelective(Programmer record);

    int updateByPrimaryKey(Programmer record);
}