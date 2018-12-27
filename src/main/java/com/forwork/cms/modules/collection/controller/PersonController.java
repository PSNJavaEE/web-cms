package com.forwork.cms.modules.collection.controller;

import com.forwork.cms.common.config.Constant;
import com.forwork.cms.common.controller.BaseController;
import com.forwork.cms.common.utils.*;
import com.forwork.cms.modules.collection.entity.Person;
import com.forwork.cms.modules.collection.service.PersonService;
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
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/collection/person")
public class PersonController extends BaseController {

    //HTML文件前缀路径
    String prefix = "collection/person";
    @Autowired
    private PersonService personService;


    @Value("${bootdo.uploadPath}")
    private String urlprefix;

//    @RequiresPermissions("collection:person:person")
    @GetMapping()
    String menu(Model model) {
        return prefix+"/person";
    }

    @ResponseBody
    @GetMapping("/list")
//    @RequiresPermissions("collection:person:person")
    public PageUtils list(@RequestParam Map<String, Object> params) {
        Query query = new Query(params);
        List<Person> list = personService.list(query);
        int total = personService.count(query);
        PageUtils pageUtils = new PageUtils(list, total);
        return pageUtils;
    }

    @GetMapping("/add")
        //@RequiresPermissions("collection:person:add")
    String add(Model model) {
        return "collection/person/add";
    }

    @GetMapping("/edit/{id}")
    String edit(@PathVariable("id") Long id, Model model) {
        System.out.print("编辑的id:"+id);
        Person person = personService.get(id);
//        person.setAttachUrl(urlprefix+person.getAttachUrl());
        model.addAttribute("person", person);
        return "collection/person/edit";
    }

    /**
     * 保存
     */
    @ResponseBody
    @PostMapping("/save")
    //@RequiresPermissions("oa:notify:add")
    public R save(Person person) throws ParseException {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }
        if (personService.save(person) > 0) {
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
    public R update(Person person) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }
        personService.update(person);
        return R.ok();
    }

    /**
     * 修改
     */
    @ResponseBody
    @RequestMapping("/saveOrUpdate")
    //@RequiresPermissions("oa:notify:edit")
    public R saveOrUpdate(Person person) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }


        if(StringUtils.isEmpty(person.getId())){
            personService.save(person);
        }else {
            personService.update(person);
        }
        return R.ok();
    }

    /**
     * 修改状态
     */
    @ResponseBody
    @RequestMapping("/updateState")
    //@RequiresPermissions("oa:notify:edit")
    public R updateState(Person person) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }
        personService.update(person);
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
        if (personService.remove(id) > 0) {
            return R.ok();
        }
        return R.error();
    }

    @RequestMapping(value = "/uploadImage")
    @ResponseBody
    public R insertImageToServlet(@RequestParam("file")MultipartFile file, HttpServletRequest request) throws Exception {

        String url = "";
        if(file != null && !file.isEmpty()) {
            System.out.println(file);
            //获取路径，路径我写的是固定路径  服务器上是 /app/resources
            String base_url = urlprefix;
            String date = DateUtils.format(new Date(),"yyyyMMdd");
            String upload_path = "/upload/client_res/forworkcollect/"+date+"/";
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
