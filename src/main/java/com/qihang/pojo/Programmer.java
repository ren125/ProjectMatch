package com.qihang.pojo;

public class Programmer {
    private String pId;

    private String pPassword;

    private String pName;

    private String pSex;

    public String getpSex() {
        return pSex;
    }

    public void setpSex(String pSex) {
        this.pSex = pSex;
    }

    private Integer pAge;

    private Integer education;

    private String pPhone;

    private String pEmail;

    private Long hoursalary;

    private String workField;

    private Integer workExperience;

    private Long overScore;

    public String getpId() {
        return pId;
    }

    public void setpId(String pId) {
        this.pId = pId == null ? null : pId.trim();
    }

    public String getpPassword() {
        return pPassword;
    }

    public void setpPassword(String pPassword) {
        this.pPassword = pPassword == null ? null : pPassword.trim();
    }

    public String getpName() {
        return pName;
    }

    public void setpName(String pName) {
        this.pName = pName == null ? null : pName.trim();
    }

    public Integer getpAge() {
        return pAge;
    }

    public void setpAge(Integer pAge) {
        this.pAge = pAge;
    }

    public Integer getEducation() {
        return education;
    }

    public void setEducation(Integer education) {
        this.education = education;
    }

    public String getpPhone() {
        return pPhone;
    }

    public void setpPhone(String pPhone) {
        this.pPhone = pPhone == null ? null : pPhone.trim();
    }

    public String getpEamil() {
        return pEmail;
    }

    public void setpEmail(String pEmail) {
        this.pEmail = pEmail == null ? null : pEmail.trim();
    }

    public Long getHoursalary() {
        return hoursalary;
    }

    public void setHoursalary(Long hoursalary) {
        this.hoursalary = hoursalary;
    }

    public String getWorkField() {
        return workField;
    }

    public void setWorkField(String workField) {
        this.workField = workField == null ? null : workField.trim();
    }

    public Integer getWorkExperience() {
        return workExperience;
    }

    public void setWorkExperience(Integer workExperience) {
        this.workExperience = workExperience;
    }

    public Long getOverScore() {
        return overScore;
    }

    public void setOverScore(Long overScore) {
        this.overScore = overScore;
    }
}