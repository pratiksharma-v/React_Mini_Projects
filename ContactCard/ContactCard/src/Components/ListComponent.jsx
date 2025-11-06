import React from 'react'





function ListComponent(props) {
   const {grok , RemoveContent} = props
   console.log(grok)
  const contactList = grok.map((val)=>{
    return(
      <div className='BLC'>
        <div className='LC'>{val.data.Name}</div>
        <div className='LC'>{val.data.Email}</div>
        <button className='btn' onClick={()=>{RemoveContent(val.id)}}>Delete</button>
      </div>
    )

  })
  
  return ( 
  <>
        <div>
          Contact List
        </div>
        <div>
          {contactList}
        </div>
  

  
  </>
  
  )
}

export default ListComponent