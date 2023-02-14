package com.douzone.reactYW.Dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.douzone.reactYW.entity.MemberVO;

@Mapper
@Repository("memberDAO")
public interface MemberDAO{

	public MemberVO login(String id) throws DataAccessException;

	public String dupCheck(String id) throws DataAccessException;

	public void signUp(MemberVO memberVO) throws DataAccessException;

	public MemberVO Info(String id) throws DataAccessException;

}
