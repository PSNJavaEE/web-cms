package com.forwork.cms.modules.data.controller;

import com.forwork.cms.common.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/data/industry")
public class IndustryController extends BaseController {
    String prefix = "data/industry";

    @GetMapping()
    String menu(Model model) {
        return prefix+"/industry";
    }
}
