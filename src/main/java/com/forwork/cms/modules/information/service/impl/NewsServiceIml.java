package com.forwork.cms.modules.information.service.impl;

import com.forwork.cms.common.utils.DateDealwith;
import com.forwork.cms.common.utils.R;
import com.forwork.cms.modules.information.dao.NewsDao;
import com.forwork.cms.modules.information.entity.News;
import com.forwork.cms.modules.information.service.NewService;
import org.activiti.engine.impl.persistence.entity.MessageEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class NewsServiceIml implements NewService {
    @Autowired
    private NewsDao newsDao;

    @Override
    public News get(Long id) {
        return newsDao.get(id);
    }

    @Override
    public List<News> list(Map<String, Object> map) {
        return newsDao.list(map);
    }

    @Override
    public int count(Map<String, Object> map) {
        return newsDao.count(map);
    }

    @Override
    public int save(News news) {
        return newsDao.save(news);
    }

    @Override
    public int update(News news) {
        return newsDao.update(news);
    }

    @Override
    public int updateState(News news) {
        return newsDao.updateState(news);
    }

    @Override
    public int remove(Long id) {
        return newsDao.remove(id);
    }

    @Value("${bootdo.uploadPath}")
    private String path;

    @Override
    public R uploadImage(MessageEntity messageEntity,
                         @RequestParam(value = "file", required = true) MultipartFile file) throws Exception {
        if (file != null) {
            if (file.getName() != null || "".equals(file.getName())) {
                String[] name = file.getContentType().split("/");
                if ("BMP".equals(name[name.length - 1]) || "JPG".equals(name[name.length - 1])
                        || "JPEG".equals(name[name.length - 1]) || "bmp".equals(name[name.length - 1])
                        || "jpg".equals(name[name.length - 1]) || "jpeg".equals(name[name.length - 1])) {
                    // 物理地址
                    String filePath = path + DateDealwith.getSHC();
                    System.out.println("**********************************");
                    System.out.println("上传的地址" + filePath);
                    file.transferTo(new File(filePath));

                    // 先删除原来的文件，再将网络地址写入数据库
                    Map<String, Object> map = new HashMap<>();
                    map.put("imgUrl", filePath);
                    return R.ok(map);
                } else {
                    return R.error(1, "格式不正确!");
                }
            } else {
                return R.error(1, "请选择文件!");
            }
        } else {
            return R.error(1, "请选择文件!");
        }
    }
}
