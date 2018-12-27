package com.forwork.cms.modules.government.controller;

import com.forwork.cms.common.utils.PageUtils;
import com.forwork.cms.common.utils.Query;
import com.forwork.cms.modules.repository.entity.ScSelf;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

/**
 * 办事大厅
 */
@Controller
@RequestMapping("/government/service")
public class ServiceController {
    String prefix = "government/service";

    @GetMapping()
    String menu(Model model) {
        return prefix + "/services";
    }
/*

    @ResponseBody
    @GetMapping("/list")
    public PageUtils list(@RequestParam Map<String, Object> params, HttpServletResponse response) throws IOException {

        Query query = new Query(params);

        List<ScSelf> newsList = service.list(query);
        int total = service.count(query);
        PageUtils pageUtils = new PageUtils(newsList, total);
        return pageUtils;
    }
*/



}
