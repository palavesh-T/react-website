import React from 'react';
import MetaTitle from '../components/MetaTitle';
import { Link,useNavigate } from 'react-router-dom';
import "../assete/css/service.css";
import Header from './Header';
import reserch_vido from "../assete/service/header.gif";
import emil_vdo from "../assete/service/herader1.gif";
import soft_vdo from "../assete/service/sotware.webp";
import web_vido from "../assete/service/web.webp";
import apps_vdo from "../assete/service/app.webp";
import vdos_vdo from "../assete/service/video.webp";
import sev_pic_2 from "../assete/service/service1.jpg";
// import we_are_vdo from "../assate/service/who we are.gif";
import servce_vdo from "../assete/service/service head.mov";
import Footer from './Footer';
import Scrolltop from './Scrolltop';
import Whatsapp from './Whatsapp';
const Service = () => {
    const navigate = useNavigate();

    const phd_peoposal = () => {
      navigate("");
    
      
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    };
  return (
    <>
       <MetaTitle title={"Service | "} description="Find the best place to guide your research works at an affordable price. Visit Sea Sense Software Pvt. Ltd. for PhD guidance."
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
   <div className='seasense_web_service_div'>
    <video src={servce_vdo} autoPlay loop muted loading="lazy"/>
    
    <div className="about_content">
    <h1>Service</h1>
    </div>

   </div>
    <div className='seasense_web_service_hed'>
        <h1>our service</h1>
        <h2>Our Service</h2>
    </div>

    <div className='seasense_service_main_div'>
        <div className='seasense_service_div'>
            <div className='service_seasense_div'>
                <img src={reserch_vido} alt=""/>
                <h2>RESEARCH SERVICES</h2>
            </div>
            <div className='service_seasense_div'>
                <img src={emil_vdo} alt=""/>
                <h2>E-Mail SERVICES</h2>
            </div>
            <div className='service_seasense_div'>
            <img src={soft_vdo} alt=""/>
                <h2>SOFTWARE SERVICES</h2>
            </div>
        </div>
        <br></br>
        <div className='seasense_service_div'>
            <div className='service_seasense_div'>
                <img src={web_vido} alt=""/>
                <h2>WEB HOSTING</h2>
            </div>
            <div className='service_seasense_div'>
                <img src={apps_vdo} alt=""/>
                <h2>Apps Marketing</h2>
            </div>
            <div className='service_seasense_div'>
            <img src={vdos_vdo} alt=""/>
                <h2>
                Video Marketing</h2>
            </div>
        </div>
    </div>
    <div className='seasense_service_add_card_div'>
        <div className='seasense_service_conts_div_1'>
            <h2>We provide high quality services & innovative solutions for the realiable growth</h2>
            <div className='seasense_service_high_btns'>
                <button><Link to="/Contact"  onClick={phd_peoposal}>Click Here</Link></button>
            </div>
        </div>
    
    </div>
    <div className='seasense_service_conts_hed'>
        <h1>Service</h1>
        <h2>service</h2>
    </div>

    <div className='service_main_card_div'>
        <div className='service_main_card_div_1'>
            <div className='service_main_card_div_2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"80px"}}><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
                <h2><Link to="/Researchproposal" onClick={phd_peoposal}>RESEARCH PROPOSAL</Link></h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"80px"}}><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
                
                <h2><Link to="/Phdtopicselection" onClick={phd_peoposal}>RESEARCH CONSULTING</Link></h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"80px"}}><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
                <h2><Link to="/Plagiarismchecking" onClick={phd_peoposal}>PLAGIARISM CHECKING</Link></h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"80px"}}><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
                <h2><Link to="/Proofreading" onClick={phd_peoposal}>PROOF READING</Link></h2>
            </div>
            <div className='service_main_card_div_2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"80px"}}><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
                <h2><Link to="/Grammarcheck" onClick={phd_peoposal}>GRAMMER CHECKING</Link></h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"80px"}}><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
                <h2><Link to="/Phdtopicselection" onClick={phd_peoposal}>RESEARCH TOPIC SELECTION</Link></h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"80px"}}><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
                <h2><Link to="/Literaturereview" onClick={phd_peoposal}>LITERATURE REVIEW</Link></h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"80px"}}><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
                <h2><Link to="/Javadevelopment" onClick={phd_peoposal}>JAVA DEVELOPMENT</Link></h2>
            </div>
            <div className='service_main_card_div_2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"80px"}}><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
                <h2><Link to="/Phdtopicselection" onClick={phd_peoposal}>PhD TOPIC SELECTION</Link></h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"80px"}}><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
                <h2><Link to="/Thesiswriting" onClick={phd_peoposal}>THESIS WRITING</Link></h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"80px"}}><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
                <h2><Link to="/Matlabdevelopment" onClick={phd_peoposal}>MatLab DEVELOPMENT</Link></h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"80px"}}><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
                <h2><Link to="/Pythondevelopment" onClick={phd_peoposal}>PYTHON DEVELOPMENT</Link></h2>
            </div>


            <div className='service_main_card_div_2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"80px"}}><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
                <h2><Link to="/Seditdevelopment" onClick={phd_peoposal}>S-EDIT Development</Link></h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"80px"}}><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
                <h2><Link to="/Ns2ns3development" onClick={phd_peoposal}>NS-2 & NS-3 Development</Link></h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"80px"}}><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
                <h2><Link to="/simulinkdevelopment" onClick={phd_peoposal}>Simulink Development</Link></h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"80px"}}><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
                <h2><Link to="/Hfssdevelopment" onClick={phd_peoposal}>HFSS Development</Link></h2>
            </div>
        </div>
    </div>


    <div className='step_div_vid'>
<section className='step_wizard'>
    <ul className='step_wizard_list'>
        <li className='step_wizard_item'>
            <span className='progress_count'>1</span>
            <span className='progress_label'>Own Cloud Datacenter</span>
        </li>
        <li className='step_wizard_item '>
            <span className='progress_count'>2</span>
            <span className='progress_label'>Single Control Panel for all services.</span>
        </li>
        <li className='step_wizard_item'>
            <span className='progress_count'>3</span>
            <span className='progress_label'>Skilled & Dedicated Team</span>
        </li>
        <li className='step_wizard_item'>
            <span className='progress_count'>4</span>
            <span className='progress_label'>Cloud Services</span>
        </li>
        <li className='step_wizard_item'>
            <span className='progress_count'>5</span>
            <span className='progress_label'>We are a root level company.</span>
        </li>
        <li className='step_wizard_item'>
            <span className='progress_count'>6</span>
            <span className='progress_label'>TollFree Customer support</span>
        </li>
    </ul>
</section>
</div>



  
    <div className='seasense_web_sservice_add_cont'>
            <div className='seasense_web_cont_pic'>
                <img src={sev_pic_2} alt=""/>
            </div>
            <div className='conts_servicve_div_2'>
                <p>Are you Struggling to continue your Research ? Sea Sense will help you out with all the Research Assistance and needs. Less money in your wallet, no worries for your Research Assistance and Guidance payment can be done in Instalments. Wait!! Talk with our experts, they will analyze your research and the stage you are in and give you the needed guidance and assistance to get your Doctorate. Our Experts will clarify all your queries and offer complete guidance and assistance regarding research and work based on your research ideas. Research Implementation and methodology are explained to you by our experts in live demo Sessions. You can clear your doubts regarding the research in that session itself and can obtain your results. We provide comprehensive support, answering all your queries and offering insights based on your research ideas. Our live demo sessions will explain research implementation and methodology in detail. You can clear your doubts during these sessions and move forward with confidence. With Sea Sense, you’ll receive the support you need to succeed in your academic journey. Reach out to us today and take the next step towards your research goals.</p>
            </div>
    </div>
    <div className='seasense_web_we_are'>
    {/* <img src={we_are_vdo} alt="" /> */}
        
   
    <div className='seasense_web_we_are_div_1'>
        <div className='seasense_web_we_are_1'>
        <h2>Who We Are</h2>
        <p>Sea Sense has grown as market leaders in providing technical, non-technical, writing and document correcting services to Research scholars all over the world for the last 9 years. We stand unique in delivering exclusive services for Research scholars by having the only objective to delight the customer by providing more to Research scholars. Also provide inclusive services by providing all kinds of writing Services. We own unique culture values attitudes and ethical perspective which makes the ideal choice of Research scholars all over the world. We derive our strength from technical team, writing team and business management team who are willing to address scholar requirements. We have exclusive roots on service excellence, delivery on time, understanding client needs, providing technical demonstrations and support services.</p>
        </div>
    </div> 
</div>
 <Whatsapp/> 
<Scrolltop/>
    <Footer/>
    </>
  )
}

export default Service