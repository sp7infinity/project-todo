import { useState } from 'react';
import { generateId } from '../../utils/idgenerator';
import { initializeData } from '../../utils/initData';

import Area from '../Area/Area';

import './Platform.css';


function Platform() {
  const [areas, setAreas] = useState(initializeData());

  const addTodo = (key) => {
    const newTodo = { id: generateId(), text: ""}
    let area = areas[key];
    area.items.push(newTodo);
    const newObj = { ...areas, [key]: area };
    setAreas(newObj);
  }

  const removeTodo = (key, index) => {
    let area = areas[key];
    area.items.splice(index, 1);
    const newObj = { ...areas, [key]: area };
    setAreas(newObj);
  }

  const changeTodo = (key, index, text) => {
    let area = areas[key];
    area.items[index].text = text;
    const newObj = { ...areas, [key]: area}
    setAreas(newObj);
  }
  const checkedTodo = (key, text) => {
    const newTodo = { id: generateId(), text: text}
    let area = areas[key];
    area.items.push(newTodo);
    const newObj = { ...areas, [key]: area };
    setAreas(newObj);
  }

  const uncheckedTodo = (key, text) => {
    let area = areas[key];
    area.items = area.items.filter(todo => todo.text !== text);
    const newObj = { ...areas, [key]: area };
    setAreas(newObj);
  }

  const areaComponents = Object.entries(areas).map(([areaKey, area], index) =>
    <Area key={areaKey} areaKey={areaKey} data={area} add={addTodo} change={changeTodo} remove={removeTodo} checked={checkedTodo} unchecked={uncheckedTodo}/>
  );

  return (
    <div className="platform">
        
        <div className="label urgent">Urgent</div>
        <div className="label not-urgent">Not urgent</div>
        <div className="label important">Important</div>
        <div className="label not-important">Not important</div>

        {areaComponents}
    </div>
  )
}

export default Platform;