package com.forwork.cms.modules.information.service;

import com.forwork.cms.common.utils.R;
import com.forwork.cms.modules.information.entity.News;
import org.activiti.engine.impl.persistence.entity.MessageEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

public interface NewService {

    News get(Long id);

    List<News> list(Map<String, Object> map);

    int count(Map<String, Object> map);

    int save(News news);

    int update(News news);

    int updateState(News news);

    int remove(Long id);

    R uploadImage(MessageEntity messageEntity, MultipartFile file) throws Exception;
}
