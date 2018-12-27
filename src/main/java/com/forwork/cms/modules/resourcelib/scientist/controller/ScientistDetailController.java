package com.forwork.cms.modules.resourcelib.scientist.controller;

import com.forwork.cms.common.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/resourcelib/scientist/scientistdetail")
public class ScientistDetailController extends BaseController {
    String prefix = "resourcelib/scientist";

    @GetMapping()
    String menu(Model model) {
        return prefix+"/scientistdetail";
    }
}
