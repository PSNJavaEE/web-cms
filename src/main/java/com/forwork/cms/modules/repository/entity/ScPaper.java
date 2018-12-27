package com.forwork.cms.modules.repository.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Accessors
public class ScPaper {
    private long id;
    private String uri;
    private String paperName;
    private String paperAuthor;
    private int quoteNum; //引用数
    private String periodical; //期刊

}
