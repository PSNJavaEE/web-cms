package com.forwork.cms.modules.industry.service;


import java.util.List;

import com.forwork.cms.common.utils.Query;
import com.forwork.cms.modules.industry.dto.OutComeDto;
import com.forwork.cms.modules.industry.dao.OutComeDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OutComeService {

	@Autowired
	private OutComeDao outComeDao;

	public List<OutComeDto> listOutComeDto(Query query){

		return outComeDao.list(query);
	}
	

	public OutComeDto getOutCome(long id) {
		return outComeDao.get(id);
	}

	public int count(Query query) {
		return outComeDao.count(query);
	}
}
