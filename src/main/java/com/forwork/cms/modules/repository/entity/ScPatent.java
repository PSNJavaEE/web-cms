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
public class ScPatent {
    private long id;
    private String uri;
    private String pathentName;
    private String pathentNo;
    private Date pathentTime;

}
