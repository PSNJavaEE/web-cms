package com.forwork.cms.modules.collection.controller;

import com.forwork.cms.common.config.Constant;
import com.forwork.cms.common.controller.BaseController;
import com.forwork.cms.common.utils.PageUtils;
import com.forwork.cms.common.utils.Query;
import com.forwork.cms.common.utils.R;
import com.forwork.cms.modules.collection.entity.Enterprise;
import com.forwork.cms.modules.collection.service.EnterpriseService;
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
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/collection/enterprise")
public class EnterpriseController extends BaseController {

    //HTML文件前缀路径
    String prefix = "collection/enterprise";
    @Autowired
    private EnterpriseService enterpriseService;

    @GetMapping()
    String menu(Model model) {
        return prefix+"/enterprise";
    }

    @ResponseBody
    @GetMapping("/list")
//    @RequiresPermissions("collection:enterprise:enterprise")
    public PageUtils list(@RequestParam Map<String, Object> params) {
        Query query = new Query(params);
        List<Enterprise> list = enterpriseService.list(query);
        System.out.println("************************");
        System.out.println(list);
        int total = enterpriseService.count(query);
        PageUtils pageUtils = new PageUtils(list, total);
        return pageUtils;
    }

    @GetMapping("/add")
        //@RequiresPermissions("collection:enterprise:add")
    String add(Model model) {
        return "collection/enterprise/add";
    }

    @GetMapping("/edit/{id}")
    String edit(@PathVariable("id") Long id, Model model) {
        System.out.print("编辑的id:"+id);
        Enterprise enterprise = enterpriseService.get(id);
        // 所在行业
        // 人才需求类型
        // 人才学历要求
        String industry = enterprise.getEntpIndustry();
        List<String> industrys = Arrays.asList(industry.split(","));

        String ptype = enterprise.getPersonnelType();
        List<String> ptypes = Arrays.asList(ptype.split(","));

        String edu = enterprise.getPersonnelEdu();
        List<String> edus = Arrays.asList(edu.split(","));
        model.addAttribute("enterprise", enterprise);
        model.addAttribute("industrys", industrys);
        model.addAttribute("ptypes", ptypes);
        model.addAttribute("edus", edus);
        return "collection/enterprise/edit";
    }

    /**
     * 保存
     */
    @ResponseBody
    @PostMapping("/save")
    public R save(Enterprise enterprise) throws ParseException {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }
        if (enterpriseService.save(enterprise) > 0) {
            return R.ok();
        }
        return R.error();
    }

    /**
     * 修改
     */
    @ResponseBody
    @RequestMapping("/update")
    public R update(Enterprise enterprise) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }
        enterpriseService.update(enterprise);
        return R.ok();
    }

    /**
     * 修改
     */
    @ResponseBody
    @RequestMapping("/saveOrUpdate")
    public R saveOrUpdate(Enterprise    enterprise) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }

        if(StringUtils.isEmpty(enterprise.getId())){
            enterpriseService.save(enterprise);
        }else {
            enterpriseService.update(enterprise);
        }
        return R.ok();
    }

    /**
     * 修改状态
     */
    @ResponseBody
    @RequestMapping("/updateState")
    public R updateState(Enterprise enterprise) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }
        enterpriseService.update(enterprise);
        return R.ok();
    }

    /**
     * 删除
     */
    @PostMapping("/remove")
    @ResponseBody
    public R remove(Long id) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }
        if (enterpriseService.remove(id) > 0) {
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
