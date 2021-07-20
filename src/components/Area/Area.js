import AreaHeader from './AreaHeader'
import AreaContent from './AreaContent';

import './Area.css'

function Area(props) {
  const { data, areaKey, add, change, remove, checked, unchecked } = props;
  const areaClassName = data.name.toLowerCase(); 

  return (
    <div key={areaKey} className={`area ${areaClassName}-area`}>
      
      <AreaHeader areaKey={areaKey} title={data.name} add={add} />
      <AreaContent areaKey={areaKey} todos={data.items} change={change} remove={remove} checked={checked} unchecked={unchecked}/>

    </div>
  )
}

export default Area;