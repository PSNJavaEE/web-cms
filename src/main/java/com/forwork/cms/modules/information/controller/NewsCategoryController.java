package com.forwork.cms.modules.information.controller;

import com.forwork.cms.common.config.Constant;
import com.forwork.cms.common.controller.BaseController;
import com.forwork.cms.common.utils.PageUtils;
import com.forwork.cms.common.utils.Query;
import com.forwork.cms.common.utils.R;
import com.forwork.cms.modules.information.entity.NewsCategory;
import com.forwork.cms.modules.information.service.impl.NewsCategoryServiceImpl;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RequestMapping("/inf/newsCategory")
@Controller
public class NewsCategoryController extends BaseController {
    String prefix = "information/newsCategory";
    @Autowired
    private NewsCategoryServiceImpl newsCategoryService;

    @RequiresPermissions("inf:news:news")
    @GetMapping()
    String menu(Model model) {
        return prefix+"/newsCategory";
    }

    @ResponseBody
    @GetMapping("/list")
    @RequiresPermissions("inf:news:newsCategory")
    public PageUtils newsManage(@RequestParam Map<String, Object> params) {
        System.out.print(params+"------------------");
        // 查询列表数据
        Query query = new Query(params);
        List<NewsCategory> listNewsCategory = newsCategoryService.list(query);
        int total = newsCategoryService.count(query);
        PageUtils pageUtils = new PageUtils(listNewsCategory, total);
        return pageUtils;
    }

    @GetMapping("/add")
    //@RequiresPermissions("inf:news:add")
    String add(Model model) {
        //获得所有类型
        List<NewsCategory> newsCategoryList = newsCategoryService.listCategory();
        model.addAttribute("newsCategoryList",newsCategoryList);
        return prefix+"/add";
    }

    @GetMapping("/edit/{id}")
    //@RequiresPermissions("oa:notify:edit")
    String edit(@PathVariable("id") Long id, Model model) {
        System.out.print("编辑的id:"+id);
        NewsCategory newsCategory = newsCategoryService.get(id);
        model.addAttribute("newsCategory", newsCategory);
        return prefix+"/edit";
    }

    /*@InitBinder
    protected void initBinder(WebDataBinder binder) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
    }*/

    /**
     * 保存
     */
    @ResponseBody
    @PostMapping("/save")
    //@RequiresPermissions("oa:notify:add")
    public R save(NewsCategory newsCategory) throws ParseException {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }

        if (newsCategoryService.save(newsCategory) > 0) {
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
    public R update(NewsCategory newsCategory) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }
        newsCategoryService.update(newsCategory);
        return R.ok();
    }

    /**
     * 保存或修改
     */
    @ResponseBody
    @RequestMapping("/saveOrUpdate")
    //@RequiresPermissions("oa:notify:edit")
    public R saveOrUpdate(NewsCategory newsCategory) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }

        //获得类型名
        /*long categoryId = news.getCategoryId();
        if(!StringUtils.isEmpty(categoryId)){
            NewsCategory newsCategory = newsCategoryService.findById(categoryId);
            news.setCategoryName(newsCategory.getName());
        }*/

        if(StringUtils.isEmpty(newsCategory.getId())){
            System.out.println("**********save**********");
            System.out.println(newsCategory);
            newsCategoryService.save(newsCategory);
        }else {
            System.out.println("**********update**********");
            System.out.println(newsCategory);
            newsCategoryService.update(newsCategory);
        }
        return R.ok();
    }

    /**
     * 修改状态
     */
    @ResponseBody
    @RequestMapping("/updateState")
    //@RequiresPermissions("oa:notify:edit")
    public R updateState(NewsCategory newsCategory) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }
        newsCategoryService.updateState(newsCategory);
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
        if (newsCategoryService.remove(id) > 0) {
            return R.ok();
        }
        return R.error();
    }
    @InitBinder
    public void initBinder(WebDataBinder binder, WebRequest request) {

        //转换日期
        DateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));// CustomDateEditor为自定义日期编辑器
    }

}
