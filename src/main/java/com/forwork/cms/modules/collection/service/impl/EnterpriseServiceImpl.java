package com.forwork.cms.modules.collection.service.impl;

import com.forwork.cms.modules.collection.dao.EnterpriseDao;
import com.forwork.cms.modules.collection.dao.PersonDao;
import com.forwork.cms.modules.collection.entity.Enterprise;
import com.forwork.cms.modules.collection.entity.Person;
import com.forwork.cms.modules.collection.service.EnterpriseService;
import com.forwork.cms.modules.collection.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
@Transactional(rollbackFor = Exception.class)
public class EnterpriseServiceImpl implements EnterpriseService {

    @Autowired
    private EnterpriseDao dao;

    @Override
    public List<Enterprise> list(Map<String, Object> map) {
        return dao.list(map);
    }

    @Override
    public int count(Map<String, Object> map) {
        return dao.count(map);
    }

    @Override
    public Enterprise get(long id) {
        return dao.get(id);
    }

    @Override
    public int save(Enterprise entp) {
        return dao.save(entp);
    }

    @Override
    public int remove(long id) {
        return dao.remove(id);
    }

    @Override
    public int update(Enterprise entp) {
        return dao.update(entp);
    }
}
