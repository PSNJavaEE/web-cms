package com.forwork.cms.modules.policy.controller;

import com.forwork.cms.common.config.Constant;
import com.forwork.cms.common.controller.BaseController;
import com.forwork.cms.common.utils.FileUpload;
import com.forwork.cms.common.utils.PageUtils;
import com.forwork.cms.common.utils.Query;
import com.forwork.cms.common.utils.R;
import com.forwork.cms.modules.information.entity.News;
import com.forwork.cms.modules.information.entity.NewsCategory;
import com.forwork.cms.modules.policy.service.TechPolicyService;
import com.forwork.cms.modules.policy.entity.TechPolicy;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/policy/policy")
public class TechPolicyController extends BaseController {

    @Autowired
    private TechPolicyService techPolicyService;

    String prefix = "policy/policy";

//    @RequiresPermissions("policy:policy:policy")
    @GetMapping()
    String menu(Model model) {
        return prefix+"/policy";
    }

    /**
     * http://localhost/info/techPolicy/list?pageNum=0&pageSize=2&policyType=1
     * @param params
     * @param response
     * @return
     * @throws IOException
     */
    @ResponseBody
    @GetMapping("/list")
//    @RequiresPermissions("policy:policy:policy")
    public PageUtils list(@RequestParam Map<String, Object> params, HttpServletResponse response) throws IOException {

        // 查询列表数据
        Query query = new Query(params);
        List<TechPolicy> newsList = techPolicyService.list(query);
        int total = techPolicyService.count(query);
        PageUtils pageUtils = new PageUtils(newsList, total);
        return pageUtils;
    }

    @RequestMapping(value = "/get/{id}",method = RequestMethod.GET)
    public String get(@PathVariable("id") Long id,Model model){
        TechPolicy techPolicy = techPolicyService.get(id);

        String tagStr = techPolicy.getTags();
        if(!StringUtils.isEmpty(tagStr)){
            String[] tags = tagStr.split(",");
            techPolicy.setTagsList(tags);
        }
        if (techPolicy != null){
            model.addAttribute("policy",techPolicy);
        }
        //返回的预览页面
        return "";
    }


    @GetMapping("/add")
    String add(Model model) {
        return "policy/policy/add";
    }

    @GetMapping("/edit/{id}")
    String edit(@PathVariable("id") Long id, Model model) {
        TechPolicy policy = techPolicyService.get(id);
        model.addAttribute("policy", policy);
        return "policy/policy/edit";
    }

    /**
     * 保存
     */
    @ResponseBody
    @PostMapping("/save")
    public R save(TechPolicy policy) throws ParseException {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }
        if (techPolicyService.save(policy) > 0) {
            return R.ok();
        }
        return R.error();
    }

    /**
     * 修改
     */
    @ResponseBody
    @RequestMapping("/update")
    public R update(TechPolicy policy) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }
        techPolicyService.update(policy);
        return R.ok();
    }

    /**
     * 修改
     */
    @ResponseBody
    @RequestMapping("/saveOrUpdate")
    //@RequiresPermissions("oa:notify:edit")
    public R saveOrUpdate(TechPolicy policy) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }

        if(org.springframework.util.StringUtils.isEmpty(policy.getId())){
            techPolicyService.save(policy);
        }else {
            techPolicyService.update(policy);
        }
        return R.ok();
    }

    /**
     * 修改状态
     */
    @ResponseBody
    @RequestMapping("/updateState")
    //@RequiresPermissions("oa:notify:edit")
    public R updateState(TechPolicy policy) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }
        techPolicyService.updateState(policy);
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
        if (techPolicyService.remove(id) > 0) {
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
