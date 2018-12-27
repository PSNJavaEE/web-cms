package com.forwork.cms.modules.collection.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Accessors
public class Person {
    private long id;
    private String userName;
    private int age;
    private String sex;
    private String moible;
    private String email;
    private String highestEdu;
    private String university;
    private String profession;
    private String attachUrl;
    private String hopeIndustry;
    private String hopePost;
    private String workYears;
    private String recordState;
    private Date createTime;
    private Date updateTime;

}
