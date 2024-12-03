import './App.css'

import Navbar from './pages/Navbar/Navbar'
import Competitions from "./pages/Competitions/Competitions"
import Partners from './pages/Partner/Partners'
import Steps from './pages/Steps/Steps'

import bg1 from './assets/img/bg-1.png'

function App() {
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

      <div style={{ marginTop: 20 }}></div>

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

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h2 style={{ color: '#7038FA', margin: 0, marginBottom: 4 }}>
          Our Partners
        </h2>
      </div>

      <Partners />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h2 style={{ color: 'white', margin: 0, marginBottom: 4 }}>
          Steps to Follow
        </h2>
      </div>

      <Steps />


      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h2 style={{ color: 'white', margin: 0, marginBottom: 4 }}>
          Competitions
        </h2>
      </div>

      <Competitions />



    </div>
  )
}

export default App
