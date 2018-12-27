package com.forwork.cms;

import com.alibaba.fastjson.JSON;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableAutoConfiguration(exclude = {
        org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class
})
@EnableTransactionManagement
@ServletComponentScan
@MapperScan({"com.forwork.cms.common*.dao","com.forwork.cms.modules.*.dao"})
@EnableCaching
@SpringBootApplication
public class BackStageApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackStageApplication.class, args);
//        String xxx = "function(params) {var colorList = ['#C33531', '#29AAE3', '#29AAE3', '#29AAE3', '#29AAE3'];return colorList[params.dataIndex]}";
//        System.out.println(JSON.toJSONString(xxx));
    }
}
