import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/Home.css';

const Content = () => {
  const { bno } = useParams();
  const id = localStorage.getItem('id');

  const navigate = useNavigate();

  const [posts, setPosts] = useState({
    bno: '', btitle: '', bwriter: '', bdate: '', bcontent: ''
  });

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
        bno: board.bno,
        btitle: board.btitle,
        bwriter: board.bwriter,
        bdate: board.bdate,
        bcontent: board.bcontent
      }
      setPosts(boardVO);
    })
  }, []);

  const boardDelete = () => {
    axios({
      url: '/BoardDelete.do', // 통신할 웹문서
      method: 'post', // 통신할 방식
      headers: { "Content-type": "application/json; charset=utf-8" },
      data: JSON.stringify({
        bno: bno
      })
    }).then((res) => {
      if(res.data.status === true) {
        window.alert(res.data.message)
        navigate('/board1');
      } else {
        window.alert(res.data.message);
      }
    })
  };


  return (
    <div className='bg'>
      {
        posts.bwriter === id
          ? <Button variant="primary" style={{marginLeft : '30%', marginTop : 30, marginBottom : 30}} onClick={() => { navigate(`/boardEdit/${bno}`)}}>수정하기</Button>
          : <div></div>
      }
      {
        posts.bwriter === id
          ? <Button variant="secondary" style={{marginLeft : '30%', marginTop : 30, marginBottom : 30}} onClick={() => {boardDelete()}}>삭제하기</Button>
          : <div></div>
      }
      <Card className="content" style={{ height: 600 }}>
        <Card.Body >
          <Card.Title style={{ marginBottom: 30 }}><div>번호 : {bno}</div></Card.Title>
          <Card.Text style={{ marginBottom: 30 }}>제목 :{posts.btitle}</Card.Text>
          <Card.Text style={{ marginBottom: 200 }}>내용{posts.bcontent}</Card.Text>
          <Card.Text style={{ marginBottom: 50 }}>작성자 : {posts.bwriter}</Card.Text>
          <Card.Text style={{ marginBottom: 50 }}>작성 일시 : {posts.bdate}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Content;