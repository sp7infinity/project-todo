import { useState, useEffect } from "react";

function useKeyPress(targetKey) {
 
  const [keyPressed, setKeyPressed] = useState(false);  

  useEffect(() => {
    const downHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }
  
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); 

  return keyPressed;
}

export default useKeyPress;
