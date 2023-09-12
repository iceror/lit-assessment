import logo from '../assets/img/lit-logo.png'
import envelope from '../assets/img/message-received.png'
import user from '../assets/img/user.png'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul className='secondary-navbar'>
        <li>
          <select name="Get involved" id="">
            <option value="">Get involved</option>
          </select>
        </li>
        <li>
          <select name="Founders & Investors" id="">
            <option value="">Founders & Investors</option>
          </select>
        </li>
        <li><a href="">Chapters</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Tiendita</a></li>
        <li><button>Donate</button></li>
      </ul>
      <section className='primary-navbar'>
        <img src={logo} alt="Latinas in tech logo" className='logo' />
        <ul>
          <li><a href="">Dashboard</a></li>
          <li>
            <select name="" id="">
              <option value="">LiT recruit</option>
            </select>
          </li>
          <li><a href="">Events</a></li>
          <li>
            <select name="" id="">
              <option value="">Level Up</option>
            </select>
          </li>
          <li><a href="">LiT Community</a></li>
          <li><a href=""><img src={envelope} alt="mail" className='envelope' /></a></li>
          <li><a href=""><img src={user} alt="ícono usuario" className='user-icon' /></a></li>
        </ul>
      </section>
    </nav>
  )
}

export default NavBar