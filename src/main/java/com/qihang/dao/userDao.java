package com.qihang.dao;

import com.qihang.pojo.user;

public interface userDao {
    user selectByUserId(String username);

    int insertUser(user user);
}
