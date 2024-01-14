import React, { Component } from 'react'
import './App.css'
import FbPost from './components/FbPost'
import Navbar from './components/Navbar'

export class App extends Component {
  render() {
    return (
      <div className='w-screen  bg-slate-100 flex flex-col items-center'>
         <Navbar />
        <FbPost />
       
      </div>
    )
  }
}

export default App
