package com.douzone.reactYW;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.reactYW.entity.BoardVO;
import com.douzone.reactYW.entity.MemberVO;
import com.douzone.reactYW.service.BoardService;

@RestController
public class BoardController {

	@Autowired
	BoardService boardService;

	@PostMapping("/BoardList.do")
	public Map<String, Object> boardList(@RequestBody BoardVO boardVO) {
		Map<String, Object> result = new HashMap<>();
		
		try {
			List<BoardVO> boardList = boardService.boardList();
			result.put("boardList", boardList);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
	@PostMapping("/BoardContent.do")
	public Map<String, Object> boardContent(@RequestBody BoardVO boardVO) {
		Map<String, Object> result = new HashMap<>();
		//System.out.println(boardVO);
		
		try {
			BoardVO board = boardService.boardContent(boardVO);
			result.put("board", board);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
	@PostMapping("/BoardRegist.do")
	   public Map<String, Object> BoardRegist(@RequestBody BoardVO boardVO ) {
	      Map<String, Object> result = new HashMap<>();
	      
	      try {
	    		boardService.regist(boardVO);
	  			result.put("message", "등록이 완료 되었습니다.");
			} catch (Exception e) {
				e.printStackTrace();
				result.put("message", "등록이 불가합니다.");
			}
			return result;
		}
	
	@PostMapping("/BoardEdit.do")
	   public Map<String, Object> BoardEdit(@RequestBody BoardVO BoardVO ) {
	      Map<String, Object> result = new HashMap<>();
	      
	      try {
	    		boardService.edit(BoardVO);
	  			result.put("message", "수정이 완료 되었습니다.");
			} catch (Exception e) {
				e.printStackTrace();
				result.put("message", "수정이 불가합니다.");
			}
			return result;
		}
	@PostMapping("/BoardDelete.do")
	   public Map<String, Object> BoardDelete(@RequestBody BoardVO BoardVO ) {
	      Map<String, Object> result = new HashMap<>();
	      
	      try {
	    		boardService.delete(BoardVO);
	  			result.put("message", "삭제 되었습니다.");
	  			result.put("status", true);
			} catch (Exception e) {
				e.printStackTrace();
				result.put("message", "삭제 불가합니다.");
				result.put("status", false);
			}
			return result;
		}
}