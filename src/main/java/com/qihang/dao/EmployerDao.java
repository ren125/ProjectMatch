package com.qihang.dao;

import org.apache.ibatis.annotations.Param;

import java.util.Map;

public interface EmployerDao {
    int selectByPrimaryKey(@Param("eId") String eId,@Param("password") String password);

    int insertEmployer(@Param("eId") String eId,@Param("password") String password,@Param("name") String name,
                       @Param("phone") String phone,@Param("email") String email);

    Map selectById(@Param("eId") String eId);

    int updateById(@Param("eId") String eId,@Param("eName") String eName,@Param("ePhone") String ePhone,@Param("eEmail") String eEmail);

    int updatePassword(@Param("eId") String eId,@Param("password") String password);
}
