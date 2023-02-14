import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Layout = () => {
  const id = localStorage.getItem('id');
  // alert('id',id );
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">달콤한 풋살</Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link href="/info">카페 설명</Nav.Link>
            {localStorage.getItem('id') !== null
              ? <NavDropdown title="매칭 게시판" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/board1">혼자서 왔어요</NavDropdown.Item>
                  <NavDropdown.Item href="/board2">다같이 왔어요</NavDropdown.Item>
                </NavDropdown>
              : <div></div>
            }
            
            {localStorage.getItem('id') !== null
              ? <Nav.Link href="/" onClick={() => { localStorage.clear() }} >로그아웃</Nav.Link>
              : <Nav.Link href="/Login">로그인</Nav.Link>
            }
            {localStorage.getItem('id') !== null
              ? <div></div>
              : <Nav.Link href="/signUp">회원 가입</Nav.Link>
            }
            {localStorage.getItem('id') !== null
              ? <Nav.Link href="/userInfo">{id}님</Nav.Link>
              : <div></div>
            }
          </Nav>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;