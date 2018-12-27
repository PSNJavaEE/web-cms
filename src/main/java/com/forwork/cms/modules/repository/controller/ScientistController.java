package com.forwork.cms.modules.repository.controller;

import com.forwork.cms.common.utils.PageUtils;
import com.forwork.cms.common.utils.Query;
import com.forwork.cms.modules.repository.entity.*;
import com.forwork.cms.modules.repository.service.ScientistService;
import org.apache.commons.lang3.StringUtils;
import org.apache.velocity.util.ArrayListWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/repository/scientist")
public class ScientistController {

    @Autowired
    private ScientistService service;

    String prefix = "repository/scientist";

    @GetMapping()
    String menu(Model model) {
        return prefix + "/scientist";
    }

    @ResponseBody
    @GetMapping("/list")
    public PageUtils list(@RequestParam Map<String, Object> params, HttpServletResponse response) throws IOException {
        // 查询列表数据
        String domain = (String) params.get("domain");
        if (StringUtils.isNotEmpty(domain)) {
            System.out.println(params);
            List<String> list = Arrays.asList(domain.split(","));
            if (list.size() > 0) {
                params.put("domain", list);
            }
        }else {
            params.remove("domain");
        }
        Query query = new Query(params);

        List<ScSelf> newsList = service.list(query);
        int total = service.count(query);
        PageUtils pageUtils = new PageUtils(newsList, total);
        return pageUtils;
    }

    @GetMapping("/edit/{uri}")
    String edit(@PathVariable("uri") String uri, Model model) {
        ScSelf scSelf = service.get(uri);
        model.addAttribute("scSelf", scSelf);
        return "repository/scientist/scientistdetail";
    }

    @ResponseBody
    @GetMapping("/pplist")
    public PageUtils pplist(@RequestParam Map<String, Object> params, HttpServletResponse response) throws IOException {
        // 查询列表数据

        Query query = new Query(params);

        List<ScPaper> pplist = service.pplist(query);
        //int total = service.tecount(query);
        if(pplist.size()<8){
            String id = (String) params.get("id");
            String domain = (String) params.get("domain");
            List<Integer> ids =  strToIds(id);
            pplist = service.randomPpList(ids);
        }
        PageUtils pageUtils = new PageUtils(pplist, 8);
        return pageUtils;
    }

    //专利
    @ResponseBody
    @GetMapping("/palist")
    public PageUtils palist(@RequestParam Map<String, Object> params, HttpServletResponse response) throws IOException {
        // 查询列表数据
        Query query = new Query(params);
        List<ScPatent> palist = service.palist(query);

        if(palist.size()<8){
            String id = (String) params.get("id");
            String domain = (String) params.get("domain");
            List<Integer> ids =  strToIds(id);
            palist = service.randomPaList(ids);
        }

        PageUtils pageUtils = new PageUtils(palist, 8);
        return pageUtils;
    }
    @ResponseBody
    @GetMapping("/prlist")
    public PageUtils prlist(@RequestParam Map<String, Object> params, HttpServletResponse response) throws IOException {
        // 查询列表数据

        Query query = new Query(params);

        List<ScProject> prlist = service.prlist(query);

        if(prlist.size()<8){
            String id = (String) params.get("id");
            String domain = (String) params.get("domain");
            List<Integer> ids =  strToIds(id);
            prlist = service.randomPrList(ids);
        }

        PageUtils pageUtils = new PageUtils(prlist, 8);
        return pageUtils;
    }

    @ResponseBody
    @GetMapping("/telist")
    public PageUtils telist(@RequestParam Map<String, Object> params, HttpServletResponse response) throws IOException {
        // 查询列表数据

        Query query = new Query(params);
        List<ScTeam> telist = service.telist(query);

        if(telist.size()<8){
            String id = (String) params.get("id");
            String domain = (String) params.get("domain");
            List<Integer> ids =  strToIds(id);
            telist = service.randomTeList(ids);
        }

        System.out.println(telist);
        PageUtils pageUtils = new PageUtils(telist, 8);
        return pageUtils;
    }

    //将id截取后两位，并返回随机生成的list
    private List<Integer> strToIds(String id){
        List<Integer> list = new ArrayList();
        String end = id.substring(id.length()-2,id.length());
        //翻转
        StringBuilder sb = new StringBuilder(end);
        String afterReverse = sb.reverse().toString();
        int start = Integer.parseInt(afterReverse);
        for(int i=1;i<9 ; i++ ){
            list.add(start+(i*10));
        }
        System.out.println(list);
        return list;
    }

}
