package com.douzone.reactYW.entity;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BoardVO {
	private String bno;
	private String btitle;
	private String bwriter;
	private String bdate;
	private String bcontent;
}
