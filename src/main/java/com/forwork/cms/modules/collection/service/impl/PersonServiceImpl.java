package com.forwork.cms.modules.collection.service.impl;

import com.forwork.cms.modules.collection.dao.PersonDao;
import com.forwork.cms.modules.collection.entity.Person;
import com.forwork.cms.modules.collection.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
@Transactional(rollbackFor = Exception.class)
public class PersonServiceImpl implements PersonService {

    @Autowired
    private PersonDao dao;

    @Override
    public List<Person> list(Map<String, Object> map) {
        return dao.list(map);
    }

    @Override
    public int count(Map<String, Object> map) {
        return dao.count(map);
    }

    @Override
    public Person get(long id) {
        return dao.get(id);
    }

    @Override
    public int save(Person person) {
        return dao.save(person);
    }

    @Override
    public int remove(long id) {
        return dao.remove(id);
    }

    @Override
    public int update(Person person) {
        return dao.update(person);
    }
}
