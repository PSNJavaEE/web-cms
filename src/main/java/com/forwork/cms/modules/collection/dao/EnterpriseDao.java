package com.forwork.cms.modules.collection.dao;

import com.forwork.cms.modules.collection.entity.Enterprise;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface EnterpriseDao {

    List<Enterprise> list(Map<String, Object> map);

    int count(Map<String, Object> map);

    Enterprise get(long id);

    int save(Enterprise entp);

    int remove(long id);

    int update(Enterprise entp);
}
