import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

const Board1 = () => {

  const navigate = useNavigate();

  const style = {
    display : 'flex',
    flexdirection: 'row',
    justifyContent: 'start',
    alignItems: 'space-around',
    flexWrap: 'wrap'
  }
  const style1 = {
    width: '18rem',
    marginTop : 20,
    marginLeft : 20
    
  }
  const [posts, setPosts] = useState([{
    bno : '', btitle : '', bwriter : '', bdate : '',
  }]);

  useEffect(() => {
    if(localStorage.getItem('id') === null){
      navigate('/');
    } //로그인 안했을시 다시 돌아가기.
    axios({
      url: '/BoardList.do', // 통신할 웹문서
      method: 'post', // 통신할 방식
      headers : {"Content-type" : "application/json; charset=utf-8"},
      data: JSON.stringify({
      })
    }).then((res) => {
      const boardList = res.data.boardList.map((rowData)=>({
        bno : rowData.bno,
        btitle : rowData.btitle,
        bwriter : rowData.bwriter,
        bdate : rowData.bdate
      }))
      setPosts(boardList);
    })
  },[]);
  const [page, setPage] = useState(1);
  const listPerPage = 8;
  const totalPage = Math.ceil(posts.length / listPerPage);

  return (
    <div className='bg'>
      <Button variant="secondary" style={{marginLeft : '50%', marginTop : 30, marginBottom : 30}} onClick={()=>{navigate('/write')}}>글쓰기</Button>
      <br/>
      <div style={style} >
        {posts.map((post, index) => (
          <Card style={style1} className="Card" key={index}>
          <Card.Body >
            <Card.Title>번호 : {post.bno}</Card.Title>
            <Card.Text>제목 : {post.btitle}</Card.Text>
            <Card.Text style={{textAlign : 'Right'}}>작성자 : {post.bwriter}</Card.Text>
            <Card.Text style={{textAlign : 'Right'}}>작성 일시 : {post.bdate}</Card.Text>
            <Button variant="primary" style={{float : 'Right'}} onClick={()=>{navigate(`/content/${post.bno}`)}}>보러가기</Button>
          </Card.Body>
        </Card>
        ))}
      </div>
    </div>
  )
};

export default Board1;