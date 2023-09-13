import twitter from '../assets/img/Twitter.png'
import linkedin from '../assets/img/LinkedIn.png'
import instagram from '../assets/img/Instagram.png'
import youtube from '../assets/img/YouTube.png'


const Footer = () => {
  return (
    <footer>
      <div className="lit">
        <h4>Latinas in Tech</h4>
        <a href="">About Us</a>
        <a href="">Careers</a>
        <a href="">Press</a>
        <a href="">LiT Chapters</a>
      </div>
      <div className="contact">
        <h4>Contact</h4>
        <a href="">Partners</a>
        <a href="">Technical issues</a>
        <a href="">General</a>
        <a href="">FaQ</a>
      </div>
      <div className="get-involved">
        <h4>Get involved</h4>
        <a href="">Registaer as a Latina Member</a>
        <a href="">Become an Ally</a>
        <a href="">Become a Partner</a>
        <a href="">Post you Company's Job Vacants</a>
      </div>
      <div className="lit-summit">
        <h4>LiT Summit</h4>
        <a href="">2023 LiT Summit</a>
        <a href="">2022 Lit Summit recap</a>
      </div>
      <button>Donate</button>
      <p>Latinas in Tech is a 501(c)(3) non-profit organization</p>

      <section>
        <p>© Latinas in Tech</p>
        <div className="cookies-terms-privacy">
          <a href="">Cookie Policy</a>
          <a href="">Terms of use</a>
          <a href="">Privacy Policy</a>
        </div>
        <div className="socials">
          <a href=""><img src={twitter} alt="" /></a>
          <a href=""><img src={linkedin} alt="" /></a>
          <a href=""><img src={instagram} alt="" /></a>
          <a href=""><img src={youtube} alt="" /></a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
