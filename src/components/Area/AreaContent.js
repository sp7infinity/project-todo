import Todo from '../Todo/Todo';

import './AreaContent.css'

function AreaContent(props) {
  const { areaKey, todos, change, remove, checked, unchecked } = props;

  return (
    <div className={"area-content"}>
      <div className={"area-droppable"}>          
        { todos.map((item, index) =>
            <div key={item.id}>
              <Todo areaKey={areaKey} key={item.id} data={item} index={index} change={change} remove={remove} checked={checked} unchecked={unchecked} />
            </div>)
        }
      </div>
    </div>
  )
}

export default AreaContent;