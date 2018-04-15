package com.qihang.services;

import com.qihang.pojo.Programmer;

public interface ProgrammerService {

    boolean ifLogin(String pUsername,String pPassword);

    boolean ifSigin(Programmer programmer);
}
