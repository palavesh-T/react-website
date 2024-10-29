import React,{useEffect}  from 'react';
import MetaTitle from '../components/MetaTitle';
import { Link, useNavigate } from 'react-router-dom';
import "../assete/css/about.css";
import Header from './Header';
import about_pic1 from "../assete/About/tinywow_about_67195965.webp";
import about_soft_pic from "../assete/icon/res.png";
import about_appa_pic from "../assete/icon/app.png";
import team_pic_1 from "../assete/About/team.jpg";
// import best_vdo from "../assate/About/best 1.gif";
import bext_pic_ad from "../assete/icon/best (1).png";
import supp_pic_ad from "../assete/icon/supp.png";
import frnd_pic_ad from "../assete/icon/fried.png";
import history_pic from "../assete/About/history.jpg";
import Footer from './Footer';
import about_vdo from "../assete/About/about building.mov";
import AOS from "aos";
import "aos/dist/aos.css";
import Scrolltop from './Scrolltop';
import cmpy_vdo from "../assete/About/tinywow_147255-791521752_small_67193312 (1).webp";
 import Whatsapp from './Whatsapp';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration:600,
            delay:300
        });
      }, []);

      const navigate = useNavigate();

      const phd_peoposal = () => {
        navigate("");
       
        
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 0);
      };
  return (
    <>
   <MetaTitle title={"About | "} description="Find the best place to guide your research works at an affordable price. Visit Sea Sense Software Pvt. Ltd. for PhD guidance."
        keywords="PhD guidance in Marthandam |
PhD assistance in marthandam | PhD Thesis writing in marthandam | PhD paper writing in marthandam | Research paper writing in marthandam |
Research assistance in Marthandam | Research guidance in marthandam | Mat lab training in marthandam | PhD addmission | PhD Scholarships |
Research topics for PhD scholar | Research topics | Recent research topics | PhD guidance in kanyakumari |
PhD assistance in kanyakumari | PhD Thesis writing in kanyakumari | PhD paper writing in kanyakumari | Research paper writing in kanyakumari |
Research assistance in kanyakumari | Research guidance in kanyakumari | Mat lab training in kanyakumari | PhD guidance in tamilnadu |
PhD assistance in tamilnadu | PhD Thesis writing in tamilnadu | PhD paper writing in tamilnadu | Research paper writing in tamilnadu |
Research assistance in tamilnadu | Research guidance in tamilnadu | Mat lab training in tamilnadu | PhD guidance in nagercoil |
PhD assistance in nagercoil | PhD Thesis writing in nagercoil | PhD paper writing in nagercoil | Research paper writing in nagercoil |
Research assistance in nagercoil | Research guidance in nagercoil | Mat lab training in nagercoil | PhD guidance in trivandrum |
PhD assistance in trivandrum | PhD Thesis writing in trivandrum | PhD paper writing in trivandrum | Research paper writing in trivandrum |
Research assistance in trivandrum | Research guidance in trivandrum | Mat lab training in trivandrum | PhD guidance in alleppey |
PhD assistance in alleppey | PhD Thesis writing in alleppey | PhD paper writing in alleppey | Research paper writing in alleppey |
Research assistance in alleppey | Research guidance in alleppey | Mat lab training in alleppey | PhD guidance in chennai |
PhD assistance in chennai | PhD Thesis writing in chennai | PhD paper writing in chennai | Research paper writing in chennai |
Research assistance in chennai | Research guidance in chennai | Mat lab training in chennai | PhD guidance in madurai |
PhD assistance in madurai | PhD Thesis writing in madurai | PhD paper writing in madurai | Research paper writing in madurai |
Research assistance in madurai | Research guidance in madurai | Mat lab training in madurai | PhD guidance in trichy |
PhD assistance in trichy | PhD Thesis writing in trichy | PhD paper writing in trichy | Research paper writing in trichy |
Research assistance in trichy | Research guidance in trichy | Mat lab training in trichy | PhD guidance in tirunelveli |
PhD assistance in tirunelveli | PhD Thesis writing in tirunelveli | PhD paper writing in tirunelveli | Research paper writing in tirunelveli |
Research assistance in tirunelveli | Research guidance in tirunelveli | Mat lab training in tirunelveli | PhD guidance in singapore |
PhD assistance in singapore | PhD Thesis writing in singapore | PhD paper writing in singapore | Research paper writing in singapore |
Research assistance in singapore | Research guidance in singapore | Mat lab training in singapore | PhD guidance in india |
PhD assistance in india | PhD Thesis writing in india | PhD paper writing in india | Research paper writing in india |
Research assistance in india | Research guidance in india | Mat lab training in india | PhD guidance in kollam |
PhD assistance in kollam | PhD Thesis writing in kollam | PhD paper writing in kollam | Research paper writing in kollam |
Research assistance in kollam | Research guidance in kollam | Mat lab training in kollam | PhD guidance in cochin |
PhD assistance in cochin | PhD Thesis writing in cochin | PhD paper writing in cochin | Research paper writing in cochin |
Research assistance in cochin | Research guidance in cochin | Mat lab training in cochin | PhD guidance in ernakulam |
PhD assistance in ernakulam | PhD Thesis writing in ernakulam | PhD paper writing in ernakulam | Research paper writing in ernakulam |
Research assistance in ernakulam | Research guidance in ernakulam | Mat lab training in ernakulam |"/>
    <Header/>
  <div className='seasense_web_about_div'>
        <video src={about_vdo} autoPlay loop muted loading="lazy"/>
        <div className="about_content">
    <h1>About Us</h1>
    </div>
        </div> 
    <div className='seasense_web_about'>
            <div className='seasense_web_about_div_1'>
                <div className='seasense_web_about_add_pic'>
                    <img src={about_pic1} alt="" data-aos="zoom-in" data-aos-duration="2000"/>
                </div>
                <div className='sewasense_web_about_conts'>
                    <h3 data-aos="fade-down" data-aos-duration="2000">About Company</h3>
                    <h1 data-aos="fade-down" data-aos-duration="2000">Empowering businesses through technology</h1>
                    <p data-aos="fade-down" data-aos-duration="2000">In today’s fast-paced digital landscape, technology is no longer just a tool it’s the backbone of successful businesses. From streamlining operations to enhancing customer experiences, technology empowers businesses to operate more efficiently and competitively.</p>
                    <div className='seasense_web_soft_about'>
                    <div className='seasense_web_soft_about_1' data-aos="fade-down" data-aos-duration="2000">
                        <div className='seasense_about_softe_1'>
                        <div className='seasense_about_div_1'>
                            <img src={about_soft_pic} alt=""/>
                        </div>
                        <div className='seasense_about_cont'>
                            <h2>Software Development</h2>
                            <p>Software development is at the heart of today’s technological revolution, playing a critical role in driving innovation across industries.</p>
                        </div>
                        </div>
                        <div className='seasense_about_div_1'>
                        <div className='seasense_about_div_1'>
                            <img src={about_appa_pic} alt=""/>
                        </div>
                        <div className='seasense_about_cont'>
                            <h2>Mobile Development</h2>
                            <p>Mobile development is a dynamic field that focuses on creating applications for mobile devices, such as smartphones and tablets.  </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='seasense_line_div'>

                </div>
                <div className='seasense_about_phn_div'>
                    <h2>  +91-85 26 700 700</h2>
                </div>
                </div>
            </div>
        </div> 
 <div className='about_best_assissent_div'>
            <div className='about_best_div_2' data-aos="fade-up" data-aos-duration="2000">
                <h2>Best <em>Research Assistance</em> In India</h2>
                <h3>Sea Sense Research</h3>
                <div className='about_line'></div>
                <p>Sea sense is a top Research Assistance service in India, known for its excellent support for academics in doctorate research. Our team has experienced Research professionals with diverse academic backgrounds. Each scholar acquires specific instructions for their field of study. Sea sense provides comprehensive support project implementation , and research papers, which includes developing research proposal , building methodologies, and preparing manuscripts for publication. We prioritize high standards in data analysis. Our researchers use various methods to ensure accurate study results. Sea sense is proud of researchers who submitted their Thesis and achieved publication, advancing their academic careers. Sea sense is a reliable academic advisor who values confidentiality and transparency. Clients could reach out to us to schedule a consultation for customized professional advice that meets their research needs.</p>
            </div>
        </div> 
 <div className='seasense_about_expert'>
    <div className='seasense_about_expert_1'>
        <div className='seasense_about_expert_2'>
            <h1>High-Quality Work Experiences</h1>
        </div>
        <div className='seasense_about_expert_conts'>
            <h2>Welcome to Sea Sense Research, where we empower scholars with expert support and guidance. Our services include research proposal development, literature review assistance, data analysis, manuscript preparation and academic coaching.</h2>
        </div>
        <div className='seasense_about_expert_btn'>
            <button><Link to="/Contact"  onClick={phd_peoposal}>Contact</Link></button>
        </div>
    </div>
</div>  
 <div className='seasense_web_about_short'>
    <div className='seasense_short_history'>
        <div className='seasense_short_history_1'>
            <img src={history_pic} alt="" data-aos="zoom-out" data-aos-duration="2000"/>
        </div>
        <div className='history_short_conts' data-aos="zoom-in" data-aos-duration="2000">
            <h1>SHORT HISTORY</h1>
            <h2>SHORT HISTORY</h2>
            <p>Welcome to Sea Sense Research,For the past 10 years, Seasense has been a trusted provider of PhD guidance and software development services. Our team of expert staff offers specialized assistance, ensuring our clients receive top-tier support throughout their academic and software development journeys. With extensive experience in both fields, we pride ourselves on delivering expert guidance tailored to individual needs. Our commitment to quality and client satisfaction has earned us a reputation for excellence. Numerous clients have successfully completed their PhD programs and projects with our help, expressing high satisfaction with our services. Seasense continues to be a reliable partner for those seeking expert guidance and innovative software solutions. At Sea Sense Research, we are committed to fostering academic excellence and have facilitated the publication of over 1,500 research papers. Our state-of-the-art cloud datacenter ensures secure and reliable storage and management of research data, while our advanced cloud services cater to a wide range of academic needs.</p>
        </div>
    </div>
</div>  
 <div className='about_best_main_div'>
   {/* <img src={best_vdo} alt="" className='best_phf_gif'/> */}
    <div className='about_best_div'>
        <div className='about_best_div_1'>
            <div className='about_best_pic'>
                <img src={bext_pic_ad} alt=""/>
            </div>
            <h2>Best Strategy</h2>
            <p>Sea Sense offers tailored strategies combining innovative methodologies and proven techniques for Research success.</p>
        </div>
        <div className='about_best_div_1'>
        <div className='about_best_pic'>
                <img src={supp_pic_ad} alt=""/>
            </div>
            <h2>High-Quality Services</h2>
            <p>Sea Sense delivers top-notch services, including meticulous proofreading and insightful feedback.</p>
        </div>
        <div className='about_best_div_1'>
        <div className='about_best_pic'>
                <img src={frnd_pic_ad} alt=""/>
            </div>
            <h2>Friendly Support</h2>
            <p>For over a decade, Sea Sense has provided personalized and friendly guidance for Research.</p>
        </div>
    </div>
</div> 

<div className='about_team_main_div'>
    <div className='about_team_div'>
        <div className='about_team_div_1' data-aos="fade-down" data-aos-duration="2000">
            <h1>our team</h1>
            <h2>Our Team</h2>
            <p>Our team draws on broad industry experience and networks to create the most powerful outcomes for our clients. Meet the leaders of our team who bring each of our projects to life.</p>
        </div>
        <div className='team_about_pic'>
            <img src={team_pic_1} alt="" data-aos="fade-up" data-aos-duration="2000"/>
        </div>
    </div>
</div> 
 <div className='seasense_web_company'>
        <img src={cmpy_vdo} alt=""/>
        <div className='seasense_wev_cmp_prs'>
        <div className='seasense_web_company_main'>
            <h2>Company Principles</h2>
            <p>We believe in making the maximal use of Technology for rendering the best to our Research Scholars at different levels.</p>
        </div>
            <div className='seasense_web_company_div'>
                <div className='seasense_web_company_contenst'>
                    <h2>Commitment</h2>
                    <p>SEA SENSE strongly believes in the principles of commitment as it builds a bridge for long term Relations.</p>
                </div>
                <div className='seasense_web_company_contenst'>
                    <h2>Diligence</h2>
                    <p>We have a reputation of being enthusiastic as we appreciate that no mission could be reached without dedication.</p>
                </div>
                <div className='seasense_web_company_contenst'>
                    <h2>Excellence</h2>
                    <p>It is enormously crucial to be ambitious for the growth. So, we believe in perfection which makes us laudable and different from others.</p>
                </div>
            </div>
            </div>
    </div>
  <Whatsapp/> 
<Scrolltop/>
<Footer/>

    </>
  )
}

export default About