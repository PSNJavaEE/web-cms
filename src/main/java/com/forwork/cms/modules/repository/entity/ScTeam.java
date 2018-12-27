package com.forwork.cms.modules.repository.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Accessors
public class ScTeam {
    private long id;
    private String uri;
    private String tUrl;
    private String tName;
    private String tOrg;
    private int tHFactor;
    private int tNum;
}
