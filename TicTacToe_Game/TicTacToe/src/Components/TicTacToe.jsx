import React, { useState } from 'react'
import './TicTacToe.css'
import circle_icon from './assets/circle.png'
import cross_icon from './assets/cross.png'



function TicTacToe() {

  let [store , setStore] = useState(0);
  let [lock , setLock] = useState(false)

   let  putofunction = (e)=>{
    setStore((prevState)=>{
      const st = prevState+1

    

       if(st%2 === 0){
          e.target.innerHTML =
           `<img src = ${cross_icon} alt = 'description'/>`

        }else{
          e.target.innerHTML =
            `<img src = ${circle_icon} alt = 'description'/>   `   
     }
    
     return st})
    
     
          }



     return (
  <div className="container">

          <h1>Tic Tac Toe Game By <span>React</span></h1>
          <hr/>

    <div className="board">
      <div className="row1">
      <div onClick={(e)=>{putofunction(e)}} className="boxes"></div>
      <div onClick={(e)=>{putofunction(e)}} className="boxes"></div>
      <div onClick={(e)=>{putofunction(e)}} className="boxes"></div>
      </div>

       <div className="row2">
      <div  onClick={(e)=>{putofunction(e)}}className="boxes"></div>
      <div onClick={(e)=>{putofunction(e)}} className="boxes"></div>
      <div onClick={(e)=>{putofunction(e)}} className="boxes"></div>
      </div>

       <div className="row3">
      <div onClick={(e)=>{putofunction(e)}} className="boxes"></div>
      <div onClick={(e)=>{putofunction(e)}} className="boxes"></div>
      <div onClick={(e)=>{putofunction(e)}} className="boxes"></div>
      </div>
    </div>

    <button className="btn">Submit</button>
  </div>


  )
}

export default TicTacToe