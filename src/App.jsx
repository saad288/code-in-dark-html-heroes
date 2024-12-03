import { useState } from 'react'

import './App.css'

import Navbar from './pages/Navbar/Navbar'

function App () {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h2 style={{ color: '#7038FA' }}>Organized By</h2>
        <div style={{ background: 'gray', padding: 2, borderRadius: 10 }}>
          <h2 style={{ color: '#7038FA', margin: 0 }}>BUDS X Supercomp</h2>
        </div>
      </div>
    </div>
  )
}

export default App
