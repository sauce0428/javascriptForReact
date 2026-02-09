import './App.css'
import Viewer from './Components/Viewer'
import { useState } from 'react'
import Controller from './Components/Controller'

function App() {
  const [calculate, setCalculate] = useState(0);
  
  
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
    </>
  )
}

export default App
