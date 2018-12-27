package com.forwork.cms.modules.repository.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Accessors
public class ScProject {
    private long id;
    private String uri;
    private String projectName;
    private String projectLeader;
    private String projectLeaderOrg;
    private String projectFund;
    private String projectKeyword;

}
