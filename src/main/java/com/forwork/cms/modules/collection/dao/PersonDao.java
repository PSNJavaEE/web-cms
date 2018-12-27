package com.forwork.cms.modules.collection.dao;

import com.forwork.cms.modules.collection.entity.Person;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface PersonDao {

    List<Person> list(Map<String, Object> map);

    int count(Map<String, Object> map);

    Person get(long id);

    int save(Person person);

    int remove(long id);

    int update(Person person);
}
