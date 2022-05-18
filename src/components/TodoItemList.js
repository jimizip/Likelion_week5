import React from 'react';
import ToDoItem from './TodoItem';

const ToDoItemList = ({ title, todoList, setTodoList, checkedList }) => (
  <div className="todo-list">
    {/* props로 부터 title 값을 전달 받음 */}
    <p className="todo-list-tit">{title}</p>

    <ul className="todo-list-ul">
      {todoList && // todoList가 있을때만 출력
        todoList.map((todoItem) => {
          if (todoItem.deleted) return null;
          
          if (checkedList !== todoItem.checked) return null;

          return (
            // map을 이용하여 ToDoItem을 출력
            <ToDoItem
              key={todoItem.id}
              todoItem={todoItem}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          );
        })}
    </ul>
  </div>
);

export default ToDoItemList;