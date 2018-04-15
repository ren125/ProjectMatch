package com.qihang.dao;

import org.apache.ibatis.annotations.Param;
import com.qihang.pojo.Programmer;

public interface ProgrammerDao {
    int deleteByUsername(@Param("pUsername") String pUsername);

    int insert(Programmer record);

    int insertSelective(Programmer record);

    Programmer selectByUsername(@Param("pUsername") String pUsername);

    int updateByPrimaryKeySelective(Programmer record);

    int updateByPrimaryKey(Programmer record);
}
