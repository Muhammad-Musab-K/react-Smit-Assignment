import React, { Component } from 'react'
import FbPost from './components/FbPost'

export class App extends Component {
  render() {
    return (
      <div className='w-screen  bg-slate-100 flex flex-col items-center justify-center'>
        <FbPost />
      </div>
    )
  }
}

export default App
