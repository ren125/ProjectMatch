package com.qihang.servicesImp;

import com.qihang.dao.ProgrammerDao;
import com.qihang.services.ProgrammerSkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PrgrmSklServiceImp implements ProgrammerSkillService {
    @Autowired
    ProgrammerDao programmerDao;

    public int programmerSkillInit(String pId, Integer skillId, Float score) {
        return programmerDao.insertProgrammerSkill(pId,skillId,score);
    }

    public int programmerSkillUpdate(String pId, Integer skillId, Float score) {
        return programmerDao.updateProgrammerSkill(pId,skillId,score);
    }

    public List<Map> selectSkillById(String pId) {
        List<Map> list = programmerDao.selectSkillById(pId);
        return list;
    }

    public int programmerSkillDelete(String pId) {
        return programmerDao.skillDelete(pId);
    }
}
