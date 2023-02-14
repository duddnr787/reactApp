import React, { useCallback, useState } from 'react';
import axios from 'axios';
import '../css/SignUp.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleInputId = (e) => {
    setId(e.target.value)
  }

  const handleInputPwd = (e) => {
    setPwd(e.target.value)
  }

  const handleInputEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleInputPhone = (e) => {
    setPhone(e.target.value)
  }

  const handleInputName = (e) => {
    setName(e.target.value)
  }
  
  //중복 체킹
  const dupCheck = (e) => {
    e.preventDefault();
    axios({
      url: '/DupCheck.do', // 통신할 웹문서
      method: 'post', // 통신할 방식
      headers : {"Content-type" : "application/json; charset=utf-8"},
      data: JSON.stringify({
        id : id
      })
    }).then((response) => {
      if(response.data.status === true) {
        window.alert(response.data.message)
      } else {
        window.alert(response.data.message)
      }
    });
  }

  //회원가입 보내기
  const signUp = () => {
    axios({
      url: '/SignUp.do', // 통신할 웹문서
      method: 'post', // 통신할 방식
      headers : {"Content-type" : "application/json; charset=utf-8"},
      data: JSON.stringify({
        id : id,
        pwd : pwd,
        email : email,
        phone : phone,
        name : name
      })
    }).then((response) => {
      if(response.data.status === true) {
        window.alert(response.data.message)
        navigate('/');
      } else {
        window.alert(response.data.message)
      }
    });
  }

  //회원가입 누르기 
  const onClickSignUp = useCallback(e => {
    e.preventDefault(); //form 데이터가 전체 submit 되는 것을 막아준다.

    if (id === "" ) {
      window.alert("아이디를 입력해주세요.");
      return;
    } else if(pwd === "") {
      window.alert("비밀번호를 입력해주세요.");
      return;
    } else if(email === "") {
      window.alert("이메일을 입력해주세요.");
      return;
    } else if(phone === "") {
      window.alert("전화번호를 입력해주세요.");
      return;
    } else if(name === "") {
      window.alert("이름을 입력해주세요.");
      return;
    }
    signUp();
    setId(''); // 로그인 되면 리셋해주기
    setPwd('');
    setEmail('');
    setPhone('');
    setName('');
  }, [id, pwd, email, phone, name]);

  return (
    <div className="login-form">
      <h1><a href="/" >달콤한 풋살</a></h1>
      <form onSubmit={onClickSignUp}>
        <input type="text" className="text-field" value={id}  placeholder="아이디" onChange={handleInputId} />
        <button  className="submit-btn" onClick={dupCheck}>아이디 중복체크</button>
        <input type="password" className="text-field" value={pwd} placeholder="비밀번호" onChange={handleInputPwd} />
        <input type="text" className="text-field" value={email} placeholder="이메일" onChange={handleInputEmail}  />
        <input type="text" className="text-field" value={phone} placeholder="전화번호"  onChange={handleInputPhone} />
        <input type="text" className="text-field" value={name} placeholder="이름"  onChange={handleInputName} />
        <input type="submit"  className="submit-btn" value="회원가입" />
      </form>
    </div>
  );
};

export default SignUp;