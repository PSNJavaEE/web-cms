package com.forwork.cms.modules.industry.dao;

import java.util.List;
import java.util.Map;

import com.forwork.cms.modules.industry.dto.OutComeDto;

public interface OutComeDao {
	List<OutComeDto> list(Map<String,Object> params);

	OutComeDto get(long id);

	int count(Map<String,Object> params);
}
