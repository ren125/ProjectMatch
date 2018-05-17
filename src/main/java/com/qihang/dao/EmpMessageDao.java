package com.qihang.dao;

import java.util.List;
import java.util.Map;

public interface EmpMessageDao {
    List<Map> selectProjectApply(String eId);

    List<Map> selectProgrammer(String proId);
}
