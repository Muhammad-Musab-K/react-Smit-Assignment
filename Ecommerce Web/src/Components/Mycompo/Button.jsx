import React from 'react'

function Button(props) {
    const {name , color , onClick} = props
  return (
    <>
    <div>
      <button onClick={onClick} style={{backgroundColor:`${color}`}} className=" px-1 text-[10px] md:px-4 lg:text-sm py-2 black mx-2 hover:bg-slate-800 focus:ring-4 shadow-lg transform active:scale-75 transition-transform" >{name}</button>
      </div>
    </>
  )
}

export default Button
