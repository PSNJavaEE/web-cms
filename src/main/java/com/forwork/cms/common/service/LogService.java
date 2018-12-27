package com.forwork.cms.common.service;

import com.forwork.cms.common.domain.LogDO;
import com.forwork.cms.common.domain.PageDO;
import com.forwork.cms.common.utils.Query;
import org.springframework.stereotype.Service;
@Service
public interface LogService {
	void save(LogDO logDO);
	PageDO<LogDO> queryList(Query query);
	int remove(Long id);
	int batchRemove(Long[] ids);
}
