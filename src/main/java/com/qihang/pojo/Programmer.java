package com.qihang.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "programmer")
public class Programmer {

    @Column(name = "p_id")
    int pId;

    @Column(name = "p_name")
    String pName;

    @Column(name = "p_age")
    int pAge;

    @Column(name = "p_phone")
    String pPhone;

    @Column(name = "p_qq")
    String pQQ;

    @Column(name = "hoursalary")
    int hourSalary;

    @Column(name = "work_field")
    String workField;

    @Column(name = "work_experience")
    String workExperience;

    @Column(name = "over_score")
    double overScore;

    @Column(name = "p_username")
    String pUsername;

    @Column(name = "p_password")
    String pPassword;

    public int getpId() {
        return pId;
    }

    public void setpId(int pId) {
        this.pId = pId;
    }

    public String getpName() {
        return pName;
    }

    public void setpName(String pName) {
        this.pName = pName;
    }

    public int getpAge() {
        return pAge;
    }

    public void setpAge(int pAge) {
        this.pAge = pAge;
    }

    public String getpPhone() {
        return pPhone;
    }

    public void setpPhone(String pPhone) {
        this.pPhone = pPhone;
    }

    public String getpQQ() {
        return pQQ;
    }

    public void setpQQ(String pQQ) {
        this.pQQ = pQQ;
    }

    public int getHourSalary() {
        return hourSalary;
    }

    public void setHourSalary(int hourSalary) {
        this.hourSalary = hourSalary;
    }

    public String getWorkField() {
        return workField;
    }

    public void setWorkField(String workField) {
        this.workField = workField;
    }

    public String getWorkExperience() {
        return workExperience;
    }

    public void setWorkExperience(String workExperience) {
        this.workExperience = workExperience;
    }

    public double getOverScore() {
        return overScore;
    }

    public void setOverScore(double overScore) {
        this.overScore = overScore;
    }

    public String getpUsername() {
        return pUsername;
    }

    public void setpUsername(String pUsername) {
        this.pUsername = pUsername;
    }

    public String getpPassword() {
        return pPassword;
    }

    public void setpPassword(String pPassword) {
        this.pPassword = pPassword;
    }
}
