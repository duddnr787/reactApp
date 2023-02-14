package com.douzone.reactYW.Dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.douzone.reactYW.entity.BoardVO;
import com.douzone.reactYW.entity.MemberVO;

@Mapper
@Repository("boardDAO")
public interface BoardDAO{

	public List<BoardVO> boardList() throws DataAccessException;

	public BoardVO boardContent(String bno) throws DataAccessException;

	public void regist(BoardVO boardVO) throws DataAccessException;

	public void edit(BoardVO boardVO) throws DataAccessException;

	public void delete(BoardVO boardVO) throws DataAccessException;
}
