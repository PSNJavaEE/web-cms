package com.forwork.cms.modules.policy.dao;

import com.forwork.cms.modules.policy.entity.TechPolicy;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface TechPolicyDao {

    TechPolicy get(Long id);

    List<TechPolicy> list(Map<String, Object> map);

    int count(Map<String, Object> map);

    int save(TechPolicy techPolicy);

    int update(TechPolicy techPolicy);

    int updateState(TechPolicy techPolicy);

    int remove(Long id);

    TechPolicy getLastOne(Long id);

    TechPolicy getNextOne(Long id);
}
