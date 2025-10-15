import React, { useState } from 'react'


function ListComponent(props) {
    const {badaState , deleteHandler} = props

    console.log(badaState ,'ListComponent hu mai')

  const SingleObj = badaState.map((Item)=>{
        return (
            <div className ='Boxo' key={Item.id}>
                <div className='Namo'>{Item.data.Name}</div>
                <div className='Mailo'>{Item.data.Email}</div>
                <button className='btno' onClick={()=>{deleteHandler(Item.id)}}>Delete</button>
                
            </div>
        )
    })
    



  return (
    <>
    <div>ListComponent</div>
    {SingleObj}
    </>
  )
}

export default ListComponent