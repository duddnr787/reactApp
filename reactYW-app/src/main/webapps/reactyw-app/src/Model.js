import axios from 'axios';
import React from 'react';

const ACTION = {
  INSERT: 1,
  REMOVE: 2,
  LOGIN: 3,
  APPEND_TODO_LIST : 4
};
Object.freeze(ACTION);

function todoReducer(todos,action){
  switch(action.type){
    case ACTION.INSERT:
        return todos.concat(action.todo);
    case ACTION.REMOVE:
        return todos.filter(todo => todo.id !== action.id);
    case ACTION.LOGIN:
        return todos.map(todo => todo.id === action.id ? {...todo, checked:!todo.checked} : todo,);
    case ACTION.APPEND_TODO_LIST:
        return todos.concat(action.todos);
    default:
      return todos;
  }
}

export default function Model() {
  const onLogin = (Id, Pwd) => {
    axios({
      url: '/Login.do', // 통신할 웹문서
      method: 'post', // 통신할 방식
      data: { // 인자로 보낼 데이터
        Id : Id,
        Pwd : Pwd
      }
    }).then((response) => {
      if(response.status === true) {
        window.alert(response.message);
        History('/')
      } else {
        window.alert(response.message);
      }
      
    });
}

  return [onLogin];
}

