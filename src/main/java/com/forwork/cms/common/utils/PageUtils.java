package com.forwork.cms.common.utils;

import java.io.Serializable;
import java.util.List;

/**
 * @Author bootdo 1992lcg@163.com
 */
public class  PageUtils implements Serializable {
	private static final long serialVersionUID = 1L;
	private int total;
	private int pageSize;
	private int pageNumber;
	private List<?> rows;

	public PageUtils(List<?> list, int total) {
		this.rows = list;
		this.total = total;
	}

	public PageUtils(List<?> list,int total,int pageSize,int pageNumber){
		this.rows = list;
		this.total = total;
		this.pageSize = pageSize;
		this.pageNumber = pageNumber;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public List<?> getRows() {
		return rows;
	}

	public void setRows(List<?> rows) {
		this.rows = rows;
	}

	public int getPageSize(){
		return pageSize;
	}
	public int getPageNumber(){
		return pageNumber;
	}
	public void setPageSize(int pageSize){
		this.pageSize = pageSize;
	}
	public void setPageNumber(int pageNumber){
		this.pageNumber = pageNumber;
	}

}
