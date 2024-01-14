import React from 'react'

function Button(props) {
    const {name , color , onClick} = props
  return (
    <>
    <div>
      <button onClick={onClick} style={{backgroundColor:`${color}`}} className=" px-2 text-xs md:px-8 md:text-sm py-2 black mx-2 hover:bg-slate-800" >{name}</button>
      </div>
    </>
  )
}

export default Button
