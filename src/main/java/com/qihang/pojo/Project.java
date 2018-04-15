package com.qihang.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "project")
public class Project {

    @Column(name = "pro_id")
    String pro_id;

    @Column(name = "pro_name")
    String pro_name;

    @Column(name = "pro_employer")
    String pro_employer;

    @Column(name = "pro_field")
    String pro_field;

    @Column(name = "pro_skill1")
    String pro_skill1;;

    @Column(name = "pro_skill2")
    String pro_skill2;

    @Column(name = "pro_money")
    String pro_money;

    @Column(name = "pro_applylastdate")
    String pro_applylastdate;

    @Column(name = "pro_overview")
    String pro_overview;

    @Column(name = "pro_satus")
    String pro_satus;

    public String getPro_id() {
        return pro_id;
    }

    public void setPro_id(String pro_id) {
        this.pro_id = pro_id;
    }

    public String getPro_name() {
        return pro_name;
    }

    public void setPro_name(String pro_name) {
        this.pro_name = pro_name;
    }

    public String getPro_employer() {
        return pro_employer;
    }

    public void setPro_employer(String pro_employer) {
        this.pro_employer = pro_employer;
    }

    public String getPro_field() {
        return pro_field;
    }

    public void setPro_field(String pro_field) {
        this.pro_field = pro_field;
    }

    public String getPro_skill1() {
        return pro_skill1;
    }

    public void setPro_skill1(String pro_skill1) {
        this.pro_skill1 = pro_skill1;
    }

    public String getPro_skill2() {
        return pro_skill2;
    }

    public void setPro_skill2(String pro_skill2) {
        this.pro_skill2 = pro_skill2;
    }

    public String getPro_money() {
        return pro_money;
    }

    public void setPro_money(String pro_money) {
        this.pro_money = pro_money;
    }

    public String getPro_applylastdate() {
        return pro_applylastdate;
    }

    public void setPro_applylastdate(String pro_applylastdate) {
        this.pro_applylastdate = pro_applylastdate;
    }

    public String getPro_overview() {
        return pro_overview;
    }

    public void setPro_overview(String pro_overview) {
        this.pro_overview = pro_overview;
    }

    public String getPro_satus() {
        return pro_satus;
    }

    public void setPro_satus(String pro_satus) {
        this.pro_satus = pro_satus;
    }
}
