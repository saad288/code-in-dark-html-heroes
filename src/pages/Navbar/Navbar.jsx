import './navbar.css'

import logo from '../../assets/img/LOGOCOMPETITIONWHITE-removebg-preview.png'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <img src={logo} style={{ width: 70, height: 70 }} />
      <h1>EVENT</h1>
      <h1>ABOUT US</h1>
      <h1>SUPPORT</h1>
      <button className='btn-grad'>CONTACT US</button>
    </div>
  )
}

export default Navbar
