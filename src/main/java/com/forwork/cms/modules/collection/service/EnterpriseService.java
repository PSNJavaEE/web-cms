package com.forwork.cms.modules.collection.service;

import com.forwork.cms.modules.collection.entity.Enterprise;

import java.util.List;
import java.util.Map;

public interface EnterpriseService {

    List<Enterprise> list(Map<String, Object> map);

    int count(Map<String, Object> map);

    Enterprise get(long id);

    int save(Enterprise entp);

    int remove(long id);

    int update(Enterprise entp);

}
