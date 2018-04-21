package com.qihang.services;

import java.util.List;
import java.util.Map;

public interface ProgrammerSkillService {

    /**
     * 初始化人才-技能，对应注册时插入操作
     * @param pId
     * @param skillId
     * @param score
     * @return
     */
    int programmerSkillInit(String pId, Integer skillId, Float score);

    /**
     * 更新化人才-技能，对应雇主评价后更新操作
     * @param pId
     * @param skillId
     * @param score
     * @return
     */
    int programmerSkillUpdate(String pId, Integer skillId, Float score);

    /**
     * 根据pid查找人才对应的擅长技能及评分
     * @param pId
     * @return
     */
    public List<Map> selectSkillById(String pId);

    /**
     * 删除人才的对应技能数据
     * @param pId
     * @return
     */
    int programmerSkillDelete(String pId);
}
