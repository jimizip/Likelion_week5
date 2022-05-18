import React, {useRef, useState } from 'react';

function ToDoItem(){

    const checked = useRef(null);
    const deleted = useRef(null);
    const checkBox = useRef(null);
    const [deleteBtn, setDeleteBtn] = useState(false);
    const [checkedBox,setCheckBox] = useState(false);

    function isChecked(e){
        checkBox = e.target.checked;
        setCheckBox(checkBox);
    }

    function isChecked(e){
        deleteBtn = e.target.clicked;
        setDeleteBtn(deleteBtn);
    }

    function onClickDeleteButton(){
        if(isChecked){
            checked.current.remove();
        }
    }

  return (
    <li className="todo-item">
        <input
        type={checkBox}
        className = "checkedDo"
        >
        </input>
        
      {/* 삭제 버튼 */}
      <button
        type="button"
        className="todoapp-item-delete-btn"
        onClick={onClickDeleteButton}
      >
        "❌"
      </button>
    </li>
  );
}

export default ToDoItem;