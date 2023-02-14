package com.douzone.reactYW.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.douzone.reactYW.Dao.BoardDAO;
import com.douzone.reactYW.entity.BoardVO;

@Service("boardService")
public class BoardService {
	@Autowired
	 BoardDAO boardDAO;


	public List<BoardVO> boardList() {
		List<BoardVO> boardList = boardDAO.boardList();
		return boardList;
	}


	public BoardVO boardContent(BoardVO boardVO) throws Exception {
		String bno = boardVO.getBno();
		
		BoardVO TempBoardVO = boardDAO.boardContent(bno);
		
		if(TempBoardVO != null) {
			return TempBoardVO;
		} else return null;
		
	}


	public void regist(BoardVO boardVO) {
		boardDAO.regist(boardVO);
	}


	public void edit(BoardVO boardVO) {
		boardDAO.edit(boardVO);
	}


	public void delete(BoardVO boardVO) {
		boardDAO.delete(boardVO);
	}


}
