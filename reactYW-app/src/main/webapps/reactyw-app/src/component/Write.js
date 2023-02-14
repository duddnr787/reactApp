import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

const Write = () => {
  const [btitle, setbtitle] = useState('');
  const [bcontent, setbcontent] = useState('');
  const navigate = useNavigate();
  
  
  const handleInputbtitle = (e) => {
    setbtitle(e.target.value)
  }

  const handleInputbcontent = (e) => {
    setbcontent(e.target.value)
  }

  const regist = () => {
    const bwriter = localStorage.getItem('id');
    axios({
      url: '/BoardRegist.do', // 통신할 웹문서
      method: 'post', // 통신할 방식
      headers : {"Content-type" : "application/json; charset=utf-8"},
      data: JSON.stringify({
        btitle : btitle,
        bcontent : bcontent,
        bwriter : bwriter
      })
    }).then((response) => {
      if(response.data.status === true) {
        window.alert(response.data.message)
        navigate('/board1');
      } else {
        window.alert(response.data.message)
      }
    });
  }

  const onClickRegist = useCallback(e => {
    e.preventDefault();
     //form 데이터가 전체 submit 되는 것을 막아준다.

    if (btitle === "" ) {
      window.alert("제목을 넣어주세요.");
      return;
    } else if(bcontent === "") {
      window.alert("내용을 넣어주세요.");
      return;
    } 
    regist();
    setbtitle(''); 
    setbcontent('');
  }, [btitle, bcontent]);

  return (
    <div className='bg'>
      <form className='write_form' onSubmit={onClickRegist}>
        <FloatingLabel controlId="floatingTextarea" label="제목" className="mb-3">
          <Form.Control as="textarea" placeholder="이곳에 제목을 넣어주세요." value={btitle} onChange={handleInputbtitle}/>
        </FloatingLabel>

        <FloatingLabel controlId="floatingTextarea2" label="내용" style={{marginBottom : 10}}>
          <Form.Control as="textarea" placeholder="이곳에 내용을 넣어주세요." style={{ height: '300px' }} value={bcontent} onChange={handleInputbcontent} />
        </FloatingLabel>

        <input type="submit"  className="submit-btn" value="등록하기" />
      </form>
    </div>
  );
};

export default Write;