package com.douzone.reactYW.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MemberVO {
	private String id;
	private String pwd;
	private String email;
	private String phone;
	private String name;
}
