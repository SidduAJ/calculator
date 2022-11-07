import React, { useState } from "react";
import "./Calculator.css"

export default function Calculator() {
  let [result,setresult]=useState('')
  let handler=(e)=>{
    setresult(result.concat(e.target.name))
  }
  let clear=()=>{
    setresult('')
  }
  let del=()=>{
    setresult(result.slice(0,-1))
  }
  let evaluate=()=>{
    try{6
      setresult(eval(result))
    }
    catch(err){
      setresult(err)
    }
  }
  return (
    <div className="container">
      <form className="output">
        <input type="text" value={result} />
      </form>      
        <button className="span-2" onClick={clear}>Clear</button>
        <button onClick={del}>C</button>
        <button name="/" onClick={handler}>/</button>
        <button name="1" onClick={handler}>1</button>
        <button name="2" onClick={handler}>2</button>
        <button name="3" onClick={handler}>3</button>
        <button name="*" onClick={handler}>*</button>
        <button name="4" onClick={handler}>4</button>
        <button name="5" onClick={handler}>5</button>
        <button name="6" onClick={handler}>6</button>
        <button name="+" onClick={handler}>+</button>
        <button name="7" onClick={handler}>7</button>
        <button name="8" onClick={handler}>8</button>
        <button name="9" onClick={handler}>9</button>
        <button name="-" onClick={handler}>-</button>
        <button name="." onClick={handler}>.</button>
        <button name="0" onClick={handler}>0</button>
        <button onClick={evaluate} className="span-2">=</button>
      </div>
     );
}
