package com.forwork.cms.modules.repository.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Accessors
public class ScCoordinate {
    private long id;
    private String uri;
    private String coordinate;

}
