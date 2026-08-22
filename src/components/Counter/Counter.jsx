import React, { useState } from 'react';
import styles from './Counter.module.css'

// const [state, setState] = useState(initialState);

function Counter() {

  const [counter, setCounter] = useState(0);

  const handlerIncrement = () => {
   // setCounter(counter + 1);
    setCounter((prevState) => prevState + 1);
  }
  const handlerDecrement = () => {
    if (counter>0){
      setCounter((prevState) => prevState - 1);
    }
  }

  return (
    <div className={styles.container}>
      <h2>Counter</h2>
      <span>{counter}</span>
      <div className={styles.btns}>
        <button onClick={handlerIncrement}>Incrementar</button>
        <button onClick={handlerDecrement}>Decrementar</button>
      </div>

    </div>
  )
}

export default Counter