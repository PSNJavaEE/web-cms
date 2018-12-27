package com.forwork.cms.modules.industry.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Accessors
public class OutComeDto {
	/**
	 *编号
	 */
	private Long id;
	/**
	 *标题
	 */
	private String title;
	/**
	 *图片
	 */
	private String imageUrl;
	/**
	 *成果领域
	 */
	private String industry;
	/**
	 *成果来源
	 */
	private String source;
	/**
	 *完成时间
	 */
	private String completionTime;
	/**
	 *所属国籍
	 */
	private String country;
	/**
	 *成果状态
	 */
	private String outcomesStatus;
	/**
	 *成果所属单位或者个人
	 */
	private String belongs;
	/**
	 *负责人
	 */
	private String principals;
	/**
	 *联系人
	 */
	private String linkman;
	/**
	 *成果简介
	 */
	private String intro;
	/**
	 *成果推荐渠道
	 */
	private String recomChannel;
}
