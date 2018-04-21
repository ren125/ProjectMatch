package com.qihang.pojo;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Project {
    private String[] skill = { "","web应用开发","移动应用开发","微信小程序开发","桌面应用开发","系统架构设计","应用集成开发",
            "UE/UI设计","数据分析开发","软件测试","运营维护","项目管理","软件实施"};
    private String[] projectStatus = {"","可申请","已签约","已结束"};

    private Integer proId;

    private String proName;

    private String proEmployer;

    private String proField;

    private String proSkill1;

    private String proSkill2;

    private Long proMoney;

    private String proLastdate;

    private String proSatus;

    private String proOverview;

    public Integer getProId() {
        return proId;
    }

    public void setProId(Integer proId) {
        this.proId = proId;
    }

    public String getProName() {
        return proName;
    }

    public void setProName(String proName) {
        this.proName = proName == null ? null : proName.trim();
    }

    public String getProEmployer() {
        return proEmployer;
    }

    public void setProEmployer(String proEmployer) {
        this.proEmployer = proEmployer;
    }

    public String getProField() {
        return proField;
    }

    public void setProField(String proField) {
        this.proField = proField == null ? null : proField.trim();
    }

    public String getProSkill1() {
        return proSkill1;
    }

    public void setProSkill1(Integer proSkill1) {
        this.proSkill1 = skill[proSkill1];
    }

    public String getProSkill2() {
        return proSkill2;
    }

    public void setProSkill2(Integer proSkill2) {
        this.proSkill2 = skill[proSkill2];
    }

    public Long getProMoney() {
        return proMoney;
    }

    public void setProMoney(Long proMoney) {
        this.proMoney = proMoney;
    }

    public String getProLastdate() {
        return proLastdate;
    }

    public void setProLastdate(Timestamp proLastdate) {
        SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        this.proLastdate = sf.format(proLastdate);
    }

    public String getProSatus() {
        return proSatus;
    }

    public void setProSatus(Integer proSatus) {
        this.proSatus = projectStatus[proSatus];
    }

    public String getProOverview() {
        return proOverview;
    }

    public void setProOverview(String proOverview) {
        this.proOverview = proOverview == null ? null : proOverview.trim();
    }
}