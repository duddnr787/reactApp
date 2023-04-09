let initialState = {

};

//리듀서는 순수 함수여야한다.
//Reducer 함수는 기존의 state를 직접 변경하지 않고, 새.로.운 state object(객체)를 작성해서 return해야한다.
function reducer(state = initialState, action) {
  switch (action.type) { //switch 문으로 하는 법
    
    default:
      return { ...state };
  }
}


export default reducer;