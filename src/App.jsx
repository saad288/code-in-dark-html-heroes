import './App.css'

import Navbar from './pages/Navbar/Navbar'
import Partners from './pages/Partner/Partners'

import bg1 from './assets/img/bg-1.png'

function App () {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h2 style={{ color: '#7038FA', margin: 0, marginBottom: 4 }}>
          Organized By
        </h2>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h2
          style={{
            color: '#7038FA',
            margin: 0,
            background: 'gray',
            padding: 2,
            borderRadius: 10,
            padding: 8
          }}
        >
          BUDS X Supercomp
        </h2>
      </div>

      <img
        src={bg1}
        style={{
          width: '100%',
          height: 500,
          position: 'absolute',
          top: 200,
          zIndex: -1
        }}
      />

      <Partners />
    </div>
  )
}

export default App
