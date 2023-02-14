import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';



const Login = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const navigate = useNavigate();

    // data 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
      setId(e.target.value)
    }
  
    const handleInputPwd = (e) => {
      setPwd(e.target.value)
    }

  const onLogin = () => {
    axios({
      url: '/Login.do', // 통신할 웹문서
      method: 'post', // 통신할 방식
      headers : {"Content-type" : "application/json; charset=utf-8"},
      data: JSON.stringify({
        id : id,
        pwd : pwd
      })
    }).then((response) => {
      if(response.data.status === true) {
        window.alert(response.data.message)
        localStorage.clear()
        localStorage.setItem('id', id)
        navigate('/')
        window.location.replace("/")
      } else {
        window.alert(response.data.message);
      }
    });
  }

  const onClickLogin = useCallback(e => {
    e.preventDefault(); //form 데이터가 전체 submit 되는 것을 막아준다.

    if (id === "" || pwd === "") {
      window.alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    onLogin();
    setId(''); // 로그인 되면 리셋해주기
    setPwd('');
  }, [id, pwd]);



  return (
    <div className='login_wrap'>
      <div className="login-form1">
        <h1><a href="/" >달콤한 풋살</a></h1>
        <form onSubmit={onClickLogin}>
          <input type="text" className="text-field1" value={id} placeholder="아이디" onChange={handleInputId} />
          <input type="password" className="text-field1" value={pwd} placeholder="비밀번호" onChange={handleInputPwd} />
          <input type="submit" value="로그인" className="submit-btn1" id="login" />
        </form>
          <button  className="submit-btn1" onClick={()=>{navigate('/signUp')}} >회원가입</button>
      </div>
    </div>  
  );
};


export default Login;