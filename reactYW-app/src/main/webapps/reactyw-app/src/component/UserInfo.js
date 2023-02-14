import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/userInfo.css';


const UserInfo = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem('id');
  const [member, setMember] = useState({
    id: '', pwd: '', email: '', name: '', phone: ''
  });

  useEffect(() => {
    if(localStorage.getItem('id') === null){
      navigate('/');
    } //로그인 안했을시 다시 돌아가기.
    axios({
      url: '/MemberInfo.do', // 통신할 웹문서
      method: 'post', // 통신할 방식
      headers: { "Content-type": "application/json; charset=utf-8" },
      data: JSON.stringify({
        id: id
      })
    }).then((res) => {
      const member = res.data.member;
      const memberVO = {
        id: id,
        pwd: member.pwd,
        email: member.email,
        name: member.name,
        phone: member.phone
      }
      setMember(memberVO);
    })
  }, []);

  return (
    <div className="member_wrap">
      <div className='member'>
        <div className='memberImg'></div>
        <Card className="memberInfo" >
          <Card.Body >
            <Card.Title style={{ marginBottom: 10 , fontSize : 30}}><div>이름 : {member.name}님</div></Card.Title>
            <Card.Text style={{ marginBottom: 10 }}>비밀번호 : 비밀임</Card.Text>
            <Card.Text style={{ marginBottom: 10 }}>이메일 : {member.email}</Card.Text>
            <Card.Text style={{ marginBottom: 10 }}>아이디 : {member.id}</Card.Text>
            <Card.Text style={{ marginBottom: 10 }}>전화번호 : {member.phone}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default UserInfo;