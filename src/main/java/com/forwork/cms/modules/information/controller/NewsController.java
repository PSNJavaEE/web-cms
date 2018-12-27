package com.forwork.cms.modules.information.controller;

import com.forwork.cms.common.config.Constant;
import com.forwork.cms.common.controller.BaseController;
import com.forwork.cms.common.utils.*;
import com.forwork.cms.modules.information.entity.News;
import com.forwork.cms.modules.information.entity.NewsCategory;
import com.forwork.cms.modules.information.service.impl.NewsCategoryServiceImpl;
import com.forwork.cms.modules.information.service.impl.NewsServiceIml;
import org.activiti.engine.impl.persistence.entity.MessageEntity;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@RequestMapping("/inf/news")
@Controller
public class NewsController extends BaseController {
    String prefix = "information/news";
    @Autowired
    private NewsServiceIml newsService;
    @Autowired
    private NewsCategoryServiceImpl newsCategoryService;

    @Value("${bootdo.uploadPath}")
    private String urlprefix;

    @RequiresPermissions("inf:news:news")
    @GetMapping()
    String menu(Model model) {
        return prefix+"/news";
    }

    @ResponseBody
    @GetMapping("/list")
    @RequiresPermissions("inf:news:news")
    public PageUtils newsManage(@RequestParam Map<String, Object> params) {
        System.out.print(params+"------------------");
        // 查询列表数据
        Query query = new Query(params);
        List<News> newsList = newsService.list(query);
        List<NewsCategory> listNewsCategory = newsCategoryService.list(query);
        int total = newsService.count(query);
        PageUtils pageUtils = new PageUtils(newsList, total);
        return pageUtils;
    }

    @GetMapping("/add")
    //@RequiresPermissions("inf:news:add")
    String add(Model model) {
        //获得所有类型
        List<NewsCategory> newsCategoryList = newsCategoryService.listCategory();
        model.addAttribute("newsCategoryList",newsCategoryList);
        return "information/news/add";
    }

    @GetMapping("/edit/{id}")
    //@RequiresPermissions("oa:notify:edit")
    String edit(@PathVariable("id") Long id, Model model) {
        System.out.print("编辑的id:"+id);
        News news = newsService.get(id);
        model.addAttribute("news", news);
        List<NewsCategory> newsCategoryList = newsCategoryService.listCategory();
        model.addAttribute("newsCategoryList",newsCategoryList);
        return "information/news/edit";
    }

    /**
     * 保存
     */
    @ResponseBody
    @PostMapping("/save")
    //@RequiresPermissions("oa:notify:add")
    public R save(News news) throws ParseException {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }
        if (newsService.save(news) > 0) {
            return R.ok();
        }
        return R.error();
    }

    /**
     * 修改
     */
    @ResponseBody
    @RequestMapping("/update")
    //@RequiresPermissions("oa:notify:edit")
    public R update(News news) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }
        newsService.update(news);
        return R.ok();
    }

    /**
     * 修改
     */
    @ResponseBody
    @RequestMapping("/saveOrUpdate")
    //@RequiresPermissions("oa:notify:edit")
    public R saveOrUpdate(News news) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }

        //获得类型名
        long categoryId = news.getCategoryId();
        if(!StringUtils.isEmpty(categoryId)){
            NewsCategory newsCategory = newsCategoryService.get(categoryId);
            news.setCategoryName(newsCategory.getName());
        }

        if(StringUtils.isEmpty(news.getId())){
            newsService.save(news);
        }else {
            newsService.update(news);
        }
        return R.ok();
    }

    /**
     * 修改状态
     */
    @ResponseBody
    @RequestMapping("/updateState")
    //@RequiresPermissions("oa:notify:edit")
    public R updateState(News news) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }
        newsService.updateState(news);
        return R.ok();
    }

    /**
     * 删除
     */
    @PostMapping("/remove")
    @ResponseBody
    //@RequiresPermissions("oa:notify:remove")
   public R remove(Long id) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }
        if (newsService.remove(id) > 0) {
            return R.ok();
        }
        return R.error();
    }

    @RequestMapping(value = "/uploadImage")
    @ResponseBody
    public R insertImageToServlet(@RequestParam("file")MultipartFile file, HttpServletRequest request) throws Exception {

        String url = "";
            if(file != null && !file.isEmpty()) {
                //获取路径，路径我写的是固定路径，直接映射到服务器根目录下的/usr/Images/logo
                String base_url = urlprefix;
                String date = DateUtils.format(new Date(),"yyyyMMdd");
                String upload_path = "/upload/client_res/forwork/"+date+"/";
                //返回的是上传的文件名
                String upload_fileName = FileUpload.uploadFile(file, base_url+upload_path);
                Map map = new HashMap();
                map.put("url", upload_path + upload_fileName);
                return R.ok(map);
            }else {
                return R.error(1,"上传失败！");
            }
    }

    @InitBinder
    public void initBinder(WebDataBinder binder, WebRequest request) {

        //转换日期
        DateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));// CustomDateEditor为自定义日期编辑器
    }

}
