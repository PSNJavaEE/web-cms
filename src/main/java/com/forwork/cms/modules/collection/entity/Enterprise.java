package com.forwork.cms.modules.collection.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Accessors
public class Enterprise {
    private long id;
    private String entpName;
    private String entpSimpleName;
    private String corporation;
    private String entpIndustry;
    private String entpPhone ;
    private String entpAddress;
    private String mainBusiness;
    private String personnelType;
    private String personnelEdu;
    private String enclosureUrl;
    private String entpIntro;
    private String recordState;
    private Date createTime;
    private Date updateTime;

}
