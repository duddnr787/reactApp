import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import '../css/Info.css';

const Info = () => {


  return (
    <div>
      <div className='wrap'>
        <div className='Info_img'></div>
        <div className='Info'>
            <h2 style={{color : 'blue'}}> 달콤한 풋살이란 ? </h2> 
            <br/>
            <h3>풋살을 매칭해주는 카페입니다.</h3>
            <br/>
            최근 바쁜 현대인들에겐 지인들끼리 11명이 모여 축구 하는 것은 너무 여렵다라는 취지로 만들게 되었습니다.
            <br/>
            풋살은 축구와 달리 5~6명의 인원으로도 충분히 경기를 할 수 있기 때문에 축구보다 접근성이 좋습니다.
        </div>
      </div>
      <div className='wrap'>
        <div className='Info'>
            <h2 style={{color : 'blue'}}> 지인들과 함께 팀을 만들어 매칭 할 수 있어요 ! </h2> 
            <br/>
            <br/>
            11명이 모이기엔 힘들지만 축구를 하고 싶다 ! 
            <br/>
            5 ~ 6 명만 모여도 축구와 비슷한 풋살을 할 수 있습니다.
        </div>
        <div className='Info_img1'></div>
      </div>
      <div className='wrap'>
      <div className='Info_img2'></div>
        <div className='Info'>
            <h2 style={{color : 'blue'}}> 혼자서도 매칭을 할 수 있어요 ! </h2> 
            <br/>
            <br/>
            혼자서도 모르는 사람과 팀을 이루어서 매칭을 할 수 있습니다 !
            <br/>
        </div>
      </div>
    </div>
  );
};

export default Info;