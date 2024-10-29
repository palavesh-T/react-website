import React,{useEffect} from 'react';
import MetaTitle from '../components/MetaTitle';
import "../assete/css/java.css";
import Header from './Header';
import java_pic_1 from "../assete/development/java1.png";
import java_pic_2 from "../assete/development/java2.png";
import Footer from './Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import Scrolltop from './Scrolltop';
import java_vdo from "../assete/video/devel head.mov";
import Whatsapp from './Whatsapp';

const Javadevelopment = () => {
    useEffect(() => {
        AOS.init({
            duration:600,
            delay:300
        });
      }, []);
  return (
   <>
      <MetaTitle title={"Development Service | Java Development | "} description="Find the best place to guide your research works at an affordable price. Visit Sea Sense Software Pvt. Ltd. for PhD guidance."
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
   <div className='java_main_div'>
   <video src={java_vdo} autoPlay loop muted/>
        <div className="about_content">
    <h1>Java Development</h1>
    </div>
   </div>
   
   <div className='java_div_1'>
    <div className='java_div_conts' data-aos="fade-down"data-aos-duration="2000">
        <h2>Java Development</h2>
        <p>SEA SENSE Java architects and developers draw on a well-crafted set of patterns. For this reason, we implement a variety of integration solutions in Java development. We are using high futuristic frameworks. Such as J2EE, JSF, Struts, Spark, Hadoop, etc., We offer the development of high-quality software. On the positive side, this will help to ameliorate the workflow of the company. Particularly, our expertise also allows us to build scalable enterprise software ensuring high performance.</p>
        <h2>What is Java?</h2>
        <p>Java is one of the most popular programming languages widely used for creating web and mobile applications. As well as, web portals, customized and enterprise software, games, etc. To point out, the immense advantage of Java is its platform independence. It means that the programs written in Java can efficiently run across various systems. Particularly, Java development supports system-level design, simulation, and automatic code generation.</p>
    </div>
    <div className='java_main_pic'>
        <img src={java_pic_1} alt="" data-aos="zoom-in"data-aos-duration="2000"/>
    </div>
   </div>
   <div className='java_sub_conts_div' data-aos="fade-right" data-aos-duration="2000">
    <h2 data-aos="fade-down"data-aos-duration="2000">Backing Ide And Tools For Java Development</h2>
    <div className='java_sub_cont'>
        <div className='java_sub_conts_1' data-aos="fade-down"data-aos-duration="2000">
            <p>Netbeans</p>
            <p>Eclipse</p>
            <p>Visual Studio</p>
            <p>Android Studio</p>
            <p>Hadoop</p>
        </div>
        <div className='java_sub_conts_1' data-aos="fade-down"data-aos-duration="2000">
            <p>Pycharm</p>
            <p>Raspberry pi</p>
            <p>Selenium</p>
            <p>Apache Maven</p>
            <p>Apache JMeter</p>
        </div>
        <div className='java_sub_conts_1' data-aos="fade-down"data-aos-duration="2000">
            <p>Spark</p>
            <p>IntelliJ IDEA</p>
            <p>Git</p>
            <p>Spring MVC</p>
           
        </div>
    </div>
   </div>
   <div className='java_last_conts'>
    <div className='java_last_conts_1'>
        <img src={java_pic_2} alt="" data-aos="zoom-in"data-aos-duration="2000"/>
    </div>
    <div className='java_last_conts_1_div' data-aos="fade-down"data-aos-duration="2000">
        <p>Know it all: Our programmers are well-versed in the tool and can assist engineering academics with Research java implementation. For the professionals, the tool is fundamentally modern, and they have been trained in its use.</p>
        <p>Implementation process: We look into your research objective and your base paper to get a clear picture of your research. The team worked on numerous Java developments for PhD projects to implement the study.</p>
        <p>Java is one of the most popular programming languages widely used for creating web and mobile applications. As well as, web portals, customized and enterprise software, games, etc. To point out, the immense advantage of Java is its platform independence. It means that the programs written in Java can efficiently run across various systems. Particularly, Java development supports system-level design, simulation, and automatic code generation.</p>
    </div>
   </div>
   <div className='java_sub_conts_div_lats' data-aos="fade-right" data-aos-duration="2000">
   
    <div className='java_sub_cont'>
        <div className='java_sub_conts_1' data-aos="fade-down"data-aos-duration="2000">
            <h2>Cloud Computing:</h2>
            <p>Mobile-Edge</p>
            <p>Fog-Edge</p>
            <p>Mobile-Cloud</p>
            <p>Green Computing</p>
            <p>And also Cloud-Edge</p>
        </div>
        <div className='java_sub_conts_1' data-aos="fade-down"data-aos-duration="2000" >
            <h2>Embedded System:</h2>
            <p>Robotics and also in Artificial Intelligence</p>
            <p>Brain Computer Interface</p>
            <p>Sensor Networks</p>
            <p>Computer Vision</p>
           
        </div>
        <div className='java_sub_conts_1' data-aos="fade-down"data-aos-duration="2000">
            <h2>Digital Image Processing:</h2>
            <p>Augmented and also Virtual Reality</p>
            <p>Computer Graphics</p>
           
           
        </div>
    </div>
   </div>
   <Whatsapp/>
   <Scrolltop/>
   <Footer/>
   </>
  )
}

export default Javadevelopment