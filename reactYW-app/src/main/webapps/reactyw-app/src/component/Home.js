import React, { useState } from 'react';
import axios from 'axios';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import '../css/Home.css';
import Login from './Login';

const Home = () => {
  const style = {
    color: 'white',
    fontSize: 80,
    textAlign: 'center',
    paddingTop: 300,
    paddingLeft: 500
  }
  return (
    <div>
      <div className='main_bg'><h1 style={style}>달콤한 풋살 ⚽️ </h1></div>
    </div>
  );
};

export default Home;