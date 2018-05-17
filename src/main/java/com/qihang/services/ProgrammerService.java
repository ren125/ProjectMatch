package com.qihang.services;

import com.qihang.pojo.Programmer;

import java.util.ArrayList;
import java.util.Map;

public interface ProgrammerService {
    ArrayList<Map> selectAllProgrammer();

    boolean ifLogin(String pUsername,String pPassword);

    boolean ifSigin(Programmer programmer);

    Programmer selectById(String pUsername);

    boolean update(Programmer programmer);

    boolean updateScore(double overScore,String pId);
}
