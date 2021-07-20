import { useState, useEffect, useRef, useCallback } from 'react';
import { Edit, CheckSquare, CheckCircle, XCircle, XSquare } from 'react-feather';
import useKeypress from "../../hooks/useKeyPress";

import './Todo.css'

function Todo(props) {
  
  const { data, areaKey, index, change, remove, checked, unchecked } = props;

  const [isInputActive, setIsInputActive] = useState(false);
  const [inputValue, setInputValue] = useState(data.text);
  const [isChecked, setIsChecked] = useState(false);

  const inputRef = useRef(null);

  const enter = useKeypress("Enter");
  const esc = useKeypress("Escape");

  const onEnter = useCallback(() => {
    if (enter) {
      change(areaKey, index, inputValue);
      setIsInputActive(false);
    }
  }, [enter, inputValue, change]);

  const onEsc = useCallback(() => {
    if (esc) {
      setInputValue(data.text);
      setIsInputActive(false);
    }
  }, [esc, data.text]);

  
  useEffect(() => {
    if (isInputActive) {
      inputRef.current.focus();
    }
  }, [isInputActive]);

  useEffect(() => {
    if (isInputActive) {
      onEnter(); 
      onEsc(); 
    }
  }, [onEnter, onEsc, isInputActive]); 

  const handleInputChange = useCallback(
    (event) => {
 
      setInputValue(event.target.value);
    },
    [setInputValue]
  );

  const handleSave = () => {
    change(areaKey, index, inputValue);
    setIsInputActive(false);
  }

  const handleEdit = () => {
    setIsInputActive(true);
  }

  const handleCheck = () => {
    checked("doneArea", inputValue);
    setIsChecked(true);
  }

  const handleUncheck = () => {
    unchecked("doneArea", inputValue);
    setIsChecked(false);
  }

  return(

    <div className="todo">
      <div className={`todo ${isInputActive ? " active": ""}`}>
        { isInputActive ? 
          <textarea
            className="text-input"
            ref={inputRef}
            value={inputValue}
            onChange={handleInputChange}
          />
          :
          <span className={`text-input ${isChecked ? "checked" : ""}`}>
            {data.text}
          </span>
        }  
      </div>
      {
        areaKey === "doneArea" ?
        null
      :
      <div className="button-section">
        { isInputActive ?
          <button className="action-button save-button" onClick={handleSave}><CheckSquare/></button>
        :               
          <button className="action-button edit-button" onClick={handleEdit}><Edit/></button>              
        }
        {
          isInputActive ? 
          null
        : 
          isChecked ?
          <button className="action-button uncheck-button" onClick={handleUncheck}><XCircle /></button>
        :
          <button className="action-button check-button" onClick={handleCheck}><CheckCircle/></button>
        }          
        <button className="action-button remove-button" onClick={() => remove(areaKey, index)}><XSquare /></button>
      </div>           
      }
    </div>
  );
}

export default Todo;