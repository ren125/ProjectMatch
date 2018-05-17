package com.qihang.services;

import java.util.List;
import java.util.Map;

public interface EmployerService {
    boolean ifLogin(String eId,String password);

    boolean ifSigin(String eId,String password,String name, String phone,String email);

    Map getEmpInfo(String eId);

    boolean updateEmpInfo(String eId, String name, String phone,String email);

    boolean updatePassword(String eId, String password);

    List<Map> getProject(String eId);

    List<Map> getApplyProgrammer(String proId);
}
