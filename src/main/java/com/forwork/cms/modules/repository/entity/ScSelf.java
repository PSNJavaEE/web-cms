package com.forwork.cms.modules.repository.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Accessors
public class ScSelf {
    private long id;
    private String scName;
    private String pageUrl;
    private String tagCloud;
    private String uri;
    private String urlIsgather;
    private String urlIspersistence;
    private String scOrg;
    private String domain;
    private String scDomain;
    private int paperNum;
    private int quoteRate;
    private int HFactor;


}
