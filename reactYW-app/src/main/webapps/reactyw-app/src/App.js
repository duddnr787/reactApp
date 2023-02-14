import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './component/Home';
import Board from './component/Board1';
import Info from './component/Info';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Board1 from './component/Board1';
import Layout from './component/Layout';
import Content from './component/Content';
import Write from './component/Write';
import BoardEdit from './component/BoardEdit';
import UserInfo from './component/UserInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/userInfo" element={<UserInfo />} />
          <Route path="/board1" element={<Board1 />}  />
          <Route path="/board2" element={<Board />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/content/:bno" element={<Content />} />
          <Route path="/write" element={<Write />} />
          <Route path="/boardEdit/:bno" element={<BoardEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
