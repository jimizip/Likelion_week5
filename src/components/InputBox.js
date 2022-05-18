import React, { useRef, useState } from 'react';

const InputBox = ({ todoList, setTodoList }) => {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  // input 값 가져오기
  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  
  const handleToDoSubmit = (e) => {
    e.preventDefault();

    //[quiz] todoList의 값을 불러와 newTodo에 할당.
    const newTodo = todoList.value;

    // todoItemList에 값 추가
    const newTodoObj = todoList.concat({
        text: newTodo,
        //Date.now()는 밀리초(1000분의 1초)를 주는 함수이다. 이를 이용하여 각자 다른
        //id를 부여한다.
        id: Date.now(),
    });
    setTodoList(newTodoObj);

    // input 값 초기화
    setText('');
  };

  return (
    <form onSubmit={handleToDoSubmit} className="todo-form">
      {/* 아이템 내용 입력 input */}
      <input
        type="text" 
        placeholder="Write a To Do and Press Enter" required
        className="todo-form-inp"
        ref={inputRef}
        onChange={onChangeInput}
      />
      {/* 입력 후 아이템 추가 버튼 */}
      <button type="submit" className="todo-form-add-btn">
        추가
      </button>
    </form>
  );
};


export default InputBox;