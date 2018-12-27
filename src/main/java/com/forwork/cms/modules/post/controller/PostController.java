package com.forwork.cms.modules.post.controller;

import com.forwork.cms.common.config.Constant;
import com.forwork.cms.common.controller.BaseController;
import com.forwork.cms.common.utils.DateUtils;
import com.forwork.cms.common.utils.PageUtils;
import com.forwork.cms.common.utils.Query;
import com.forwork.cms.common.utils.R;
import com.forwork.cms.modules.post.entity.Post;
import com.forwork.cms.modules.post.service.PostService;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * @author yanqunyou
 * @DateTime 2018/12/9 15:57
 */
@RequestMapping("/p/post")
@Controller
public class PostController extends BaseController {
    // 访问前台HTML 前缀
    String prefix = "post/post";

    @Autowired
    private PostService postService;
    //权限
//    @RequiresPermissions("p:post:post")
    @GetMapping()
    String menu(Model model) {
        return prefix+"/post";
    }

//    @RequiresPermissions("p:post:post")
    @ResponseBody
    @GetMapping("/list")
    public PageUtils newsManage(@RequestParam Map<String, Object> params) {
        System.out.print(params+"------------------");
        // 查询列表数据
        Query query = new Query(params);
        List<Post> newsList = postService.list(query);
        int total = postService.count(query);
        PageUtils pageUtils = new PageUtils(newsList, total);
        return pageUtils;
    }

//    @RequiresPermissions("p:post:add")
    @GetMapping("/add")
    String add(Model model) {
        //获得所有类型
        return "post/post/add";
    }

//    @RequiresPermissions("p:post:edit")
    @GetMapping("/edit/{id}")
    String edit(@PathVariable("id") Long id, Model model) {
        Post post = postService.get(id);
        model.addAttribute("post", post);
        return "post/post/edit";
    }


    /**
     * 保存
     */
    @ResponseBody
    @PostMapping("/save")
    public R save(Post post) throws ParseException {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }
        if (postService.save(post) > 0) {
            return R.ok();
        }
        return R.error();
    }

    /**
     * 修改  加东西：先判断对象是否存在
     */
    @ResponseBody
    @RequestMapping("/update")
    public R update(Post post) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }
        postService.update(post);
        return R.ok();
    }

    /**
     * 修改  加东西：判断对象是否存在
     */
    @ResponseBody
    @RequestMapping("/saveOrUpdate")
    public R saveOrUpdate(Post post) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }

        if(StringUtils.isEmpty(post.getId())){
            postService.save(post);
        }else {
            postService.update(post);
        }
        return R.ok();
    }

    /**
     * 修改状态
     */
    @ResponseBody
    @RequestMapping("/updateState")
    public R updateState(Post post) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "演示系统不允许修改,完整体验请部署程序");
        }
        postService.updateState(post);
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
        if (postService.remove(id) > 0) {
            return R.ok();
        }
        return R.error();
    }

}
