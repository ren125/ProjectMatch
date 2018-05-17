package com.qihang.dao;

import java.util.List;
import java.util.Map;

public interface EmpProjectDao {
    List<Map> selectProject1(String eId);

    List<Map> selectProject2(String eId);

    List<Map> selectProject3(String eId);
}
