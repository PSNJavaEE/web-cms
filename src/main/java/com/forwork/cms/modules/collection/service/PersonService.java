package com.forwork.cms.modules.collection.service;

import com.forwork.cms.modules.collection.entity.Person;

import java.util.List;
import java.util.Map;

public interface PersonService {

    List<Person> list(Map<String, Object> map);

    int count(Map<String, Object> map);

    Person get(long id);

    int save(Person person);

    int remove(long id);

    int update(Person person);

}
