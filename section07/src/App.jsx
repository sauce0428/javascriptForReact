import './App.css'
import Viewer from './Components/Viewer'
import { useState, useEffect, useRef } from 'react'
import Controller from './Components/Controller'
import Even from './Components/Even'

function App() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);
  const [calculate, setCalculate] = useState(0);
  const isMount = useRef(false);
  const countValue = useRef(0);
  const onClickButton=(()=>{
    setCount(count + 1)
  })
  const onClickNumber=(()=>{
    setNumber(number + 1)
  })

  useEffect(()=>{
    console.log(`countValue = ${countValue.current}`)
    countValue.current = countValue.current+1;
    if (isMount.current === false) {
      isMount.current = true
    }else{
      console.log('App update')
    }
    return;
  })

  const onClickCalculate=(num1, num2, op)=>{
    let sum = 0;
    switch (op) {
      case '+':
        sum = num1 + num2;
        break;
      case '-':
        sum = num1 - num2;
        break;
      case '/':
        sum = num1 / num2;
        break;
      case '*':
        sum = num1 * num2;
        break;
    }
      setCalculate(sum);
    }
   
    
  return (
    <>
      <div className='App'>
        <h1>계산기</h1>
        </div>
        <Viewer calculate={calculate}/>
        <Controller onClickCalculate={onClickCalculate}/>
        {count % 2 === 0 ? <Even /> : null}
        <div>
          <button type="button" onClick={onClickButton}>버튼</button>
          <button type="button" onClick={onClickNumber}>number</button>
        </div>
    </>
  )
}

export default App
