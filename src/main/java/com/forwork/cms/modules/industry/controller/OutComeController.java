package com.forwork.cms.modules.industry.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import com.forwork.cms.common.controller.BaseController;
import com.forwork.cms.common.utils.PageUtils;
import com.forwork.cms.common.utils.Query;
import com.forwork.cms.common.utils.StringUtils;
import com.forwork.cms.modules.industry.dto.OutComeDto;
import com.forwork.cms.modules.industry.service.OutComeService;
import com.forwork.cms.modules.policy.service.TechPolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping("/repository/outCome")
public class OutComeController extends BaseController {
	
	@Autowired private OutComeService outComeService;

	String prefix = "repository/outCome";

	@GetMapping()
	String menu(Model model) {
		return prefix+"/outCome";
	}
	
	/**
	 * 查询科技成果
	 */
	@ResponseBody
	@GetMapping("/list")
	public PageUtils listOutCome(@RequestParam Map<String,Object> params, HttpServletResponse response)  {
		String industry = (String) params.get("industry");
		if(StringUtils.isNotBlank(industry)){
			List<String> industrys = Arrays.asList(industry.split(","));
			System.out.println(industrys);
			params.put("industry", industrys);
		}
		Query query = new Query(params);

		List<OutComeDto> list = outComeService.listOutComeDto(query);
		System.out.println(list);
		int tatol = outComeService.count(query);
		PageUtils pageUtils = new PageUtils(list,tatol);
		return pageUtils;
	}
	
	
	/**
	 * 查询科技成果
	 */
	@GetMapping("/view/{id}")
	public String view(@PathVariable("id")long id, Model model) throws Exception {
		System.out.println("参数：："+id);
        OutComeDto outcome = outComeService.getOutCome(id);
        model.addAttribute("outCome",outcome);
		return "repository/outCome/outComeDetail";
	}
	

}
