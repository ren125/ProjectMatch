package com.qihang.dao;

import com.qihang.pojo.Project;

import java.util.ArrayList;
import java.util.List;

public interface ProjectDao {
    ArrayList<Project> selectProject();
}