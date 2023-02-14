package com.douzone.reactYW;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.reactYW.entity.BoardVO;
import com.douzone.reactYW.entity.MemberVO;
import com.douzone.reactYW.service.MemberService;

@RestController
public class MemberController {

	@Autowired
	MemberService memberService;

	@PostMapping("/Login.do")
	public Map<String, Object> login(@RequestBody MemberVO memberVO, HttpServletRequest request) {
		Map<String, Object> result = new HashMap<>();
		HttpSession session = request.getSession();

		try {
			MemberVO member = memberService.login(memberVO);

			if (member != null) {
				String id = memberVO.getId();
				session.setAttribute("id", id);
				
				result.put("isLogOn", true);
				result.put("status", true);
				result.put("message", "안녕하세요" + id + "님");
			} else {
				result.put("status", false);
				result.put("message", "로그인에 실패하였습니다.");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
  
   //전달시 : id : id값 
   @PostMapping("/DupCheck.do")
   public Map<String, Object> dupCheck( @RequestBody MemberVO memberVO) {
      Map<String, Object> result = new HashMap<>();
      try {
			boolean check = memberService.dupCheck(memberVO);

			if (check == false) {
				result.put("status", true);
				result.put("message", "사용 가능한 아이디 입니다.");
			} else {
				result.put("status", false);
				result.put("message", "사용 불가능한 아이디 입니다.");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
     
      return result;
   }

   
   @PostMapping("/SignUp.do")
   public Map<String, Object> signUp(@RequestBody MemberVO memberVO ) {
      Map<String, Object> result = new HashMap<>();
      
      try {
    	  boolean check = memberService.dupCheck(memberVO);
    	  if(check == false) {
    		memberService.signUp(memberVO);
  			result.put("message", "가입을 축하드립니다.");
    	  } else {
    		result.put("message", "중복된 아이디가 있습니다.");
    	  }
		} catch (Exception e) {
			e.printStackTrace();
			result.put("message", "가입을 실패하였습니다.");
		}
		return result;
	}
   
	@PostMapping("/MemberInfo.do")
	   public Map<String, Object> memberInfo(@RequestBody MemberVO memberVO ) {
	      Map<String, Object> result = new HashMap<>();
	      
	      try {
	    	  	MemberVO member = memberService.Info(memberVO);
	  			result.put("member", member);
			} catch (Exception e) {
				e.printStackTrace();
				result.put("message", "등록이 불가합니다.");
			}
			return result;
		}
}