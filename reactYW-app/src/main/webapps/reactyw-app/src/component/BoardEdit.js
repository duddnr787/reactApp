import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import '../css/Home.css';

const BoardEdit = () => {
  const { bno } = useParams();

  const [btitle, setbtitle] = useState('');
  const [bcontent, setbcontent] = useState('');
  const navigate = useNavigate();
  const [posts, setPosts] = useState({
    bno: '', btitle: '', bwriter: '', bdate: '', bcontent: ''
  });
  
  const change = (e) => {
    setPosts({...posts, [e.target.name] : e.target.value})
  }

  // const handleInputbcontent = (e) => {
  //   setPosts(e.target.value)
  // }


  useEffect(() => {
    axios({
      url: '/BoardContent.do', // 통신할 웹문서
      method: 'post', // 통신할 방식
      headers: { "Content-type": "application/json; charset=utf-8" },
      data: JSON.stringify({
        bno: bno
      })
    }).then((res) => {
      const board = res.data.board;
      const boardVO = {
        btitle: board.btitle,
        bcontent: board.bcontent
      }
      setPosts(boardVO);
    })
  }, []);

  const edit = () => {
    axios({
      url: '/BoardEdit.do', // 통신할 웹문서
      method: 'post', // 통신할 방식
      headers : {"Content-type" : "application/json; charset=utf-8"},
      data: JSON.stringify({
        btitle : posts.btitle,
        bcontent : posts.bcontent,
        bno : bno
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

  const onClickEdit = useCallback(e => {
    e.preventDefault();
     //form 데이터가 전체 submit 되는 것을 막아준다.
    edit();
    setPosts(''); 
  }, [posts.btitle, posts.bcontent]);

  return (
    <div className='bg'>
      <form className='write_form' onSubmit={onClickEdit}>
        <FloatingLabel controlId="floatingTextarea" label="제목" className="mb-3">
          <Form.Control name='btitle' as="textarea" value={posts.btitle} onChange={change} />
        </FloatingLabel>

        <FloatingLabel controlId="floatingTextarea2" label="내용" style={{ marginBottom: 10 }}>
          <Form.Control name='bcontent' as="textarea" style={{ height: '300px' }} value={posts.bcontent} onChange={change} />
        </FloatingLabel>
        <input type="submit" className="submit-btn" value="수정하기" />
      </form>
      
    </div>
  );
};

export default BoardEdit;