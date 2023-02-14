package com.douzone.reactYW.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.douzone.reactYW.Dao.MemberDAO;
import com.douzone.reactYW.entity.BoardVO;
import com.douzone.reactYW.entity.MemberVO;

@Service("memberService")
public class MemberService {
	@Autowired
	 MemberDAO memberDAO;
	
	
	public MemberVO login(MemberVO memberVO) throws Exception {
		String id = memberVO.getId();  
		
		MemberVO TempMemberVO = memberDAO.login(id);
		
		if (TempMemberVO != null && memberVO.getPwd().equals(TempMemberVO.getPwd())) {
			return TempMemberVO;
		} else return null;
		
	}


	public boolean dupCheck(MemberVO memberVO) {
		String id = memberVO.getId(); 
		
		String check = memberDAO.dupCheck(id);
		if(check.equals("false") && !id.equals("")) {
			return false;
		} else return true;
		
	}


	public void signUp(MemberVO memberVO) {
		memberDAO.signUp(memberVO);
	}


	public MemberVO Info(MemberVO memberVO) {
		String id = memberVO.getId();
		
		MemberVO TempMemberVO = memberDAO.Info(id);
		
		if(TempMemberVO != null) {
			return TempMemberVO;
		} else return null;
		
	}
}
