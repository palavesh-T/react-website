import React  from 'react';
import "../assete/css/footer.css";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import foot_logo from "../assete/footer/footlogo.png";
// import AOS from "aos";
// import "aos/dist/aos.css";
const Footer = () => {
    const navigate = useNavigate();

    const phd_peoposal = (path) => {
        navigate(path);
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    };

    // useEffect(() => {
    //     AOS.init({
    //         duration:800,
    //         delay:300
    //     });
    //   }, []);
  return (
    <>
  <div className='footer_main_div'>
    <div className='footer_div_1'>
        <div className='footer_div_2'>
            <img src={foot_logo} alt="Footer Logo" data-aos="fade-down" />
            <div className='fo_cont_1'>
                <p data-aos="fade-down">Welcome to Sea Sense Research, where we empower scholars with expert support and guidance. </p>
            </div>
            <div className='social_icons' data-aos="fade-down">
            <div className="tooltip">
    <a href="https://www.facebook.com/seasensesoftwares/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebookF} />
    </a>
    <span className="tooltiptext">Facebook</span>
  </div>
  <div className="tooltip">
    <a href="https://www.instagram.com/sea_sense_research?igsh=MWVnYTNxZ3Noc3A1bg==" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <span className="tooltiptext">Instagram</span>
  </div>
  <div className="tooltip">
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedinIn} />
    </a>
    <span className="tooltiptext">LinkedIn</span>
  </div>
  <div className="tooltip">
    <a href="https://wa.me/8526700700" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
    <span className="tooltiptext">WhatsApp</span>
  </div>
            </div>
        </div>
        <div className='foote_next_page'>
            <h2 data-aos="fade-down">EXPLORE</h2>
            <p data-aos="fade-down"><Link to="/About" onClick={() => phd_peoposal("/About")} >About</Link></p>
            <p data-aos="fade-down"><Link to="/Service" onClick={() => phd_peoposal("/Service")} >Service</Link></p>
            <p data-aos="fade-down"><Link to="/Phdtopicselection" onClick={() => phd_peoposal("/Phdtopicselection")} >Research Topic Select</Link></p>
            <p data-aos="fade-down"><Link to="/Implementation" onClick={() => phd_peoposal("/Implementation")} >Implementation</Link></p>
            <p data-aos="fade-down"><Link to="/Contact"onClick={() => phd_peoposal("/Contact")} >Contact</Link></p>
        </div>
        <div className='add_address_foot'>
            <div className='add_add_fo'>
                <h2 data-aos="fade-down">Head Office</h2>
                <p data-aos="fade-down">Sea Sense Interdisciplinary Research and IT Solution (OPC) Pvt.Ltd.</p>
                <p data-aos="fade-down">JJ Arcade, Second Floor, Near New Bus Stand</p>
                <p data-aos="fade-down">Marthandam - Kanyakumari District</p>
                <p data-aos="fade-down">TamilNadu - 629 165, INDIA</p>
            </div>
        </div>
        <div className='add_sub_addrs'>
            <h2 data-aos="fade-down">Our Branches</h2>
           
            <p data-aos="fade-down">Sea Sense Technologies,</p>
            <p data-aos="fade-down">Alleppey - Kerala - 688 001, INDIA</p>
            <p data-aos="fade-down">Mob: +91-7402616151</p>
            <p data-aos="fade-down">Phone: 04651-271057</p>
            <p data-aos="fade-down">Sea Sense Softwares,</p>
            <p data-aos="fade-down">3rd Floor,Almighty Towers,</p>
            <p data-aos="fade-down">Near Vadasery Bus Stand - Nagercoil-629001,

</p>
        </div>
    </div>
    <div className='foot_copy_div_1'>
        <h2>Copyright © 2020 - 2025 SEA SENSE | All Rights Reserved</h2>
    </div>
</div>
   
    </>
  )
}

export default Footer