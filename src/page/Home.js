import React, { useState, useEffect } from 'react';
import MetaTitle from '../components/MetaTitle';
import { Link, useNavigate } from 'react-router-dom';
import "../assete/css/home.css";
import researc_pic_1 from "../assete/home/Research-removebg-preview - Copy.png";
import icon_logo from "../assete/icon/res.png";
import Email_pic from "../assete/icon/mail.png";
import soft_pic from "../assete/icon/softwe.png";
import web_pic from "../assete/icon/web.png";
import appa_pic from "../assete/icon/app.png";
import vidroapp_pic from "../assete/icon/video.png";
import ad_pic from "../assete/home/short.png";
import next_pic from "../assete/home/nextlevel1.png";
import tech_pic from "../assete/icon/technologys.png";
import innovation_pic from "../assete/icon/inovation.png";
import intergation_pic from "../assete/icon/intraction (1).png";
import lens_pic from "../assete/home/ai_in_web_development.png";
import advnace_pic from "../assete/video/tinywow_coding_67185259.webp";
import mision_pic from "../assete/home/video-1-1.jpg";
import form_pic from "../assete/home/seasense5.png";
import Footer from './Footer';
import head_vbido from "../assete/home/top video.mp4";
import reserach_pall_1 from "../assete/home/Research-4-removebg-preview.png";
import starRatingImage from "../assete/home/1-removebg-preview.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { ContactusApi } from '../service/Api';
import Header from './Header';
import extra_line_pic from "../assete/home/line.jpg";
import Scrolltop from './Scrolltop';
import arror_pic from "../assete/home/about-shape2.png";
import conts_extr_pic_4 from "../assete/home/contact-thumb1.png";
import conts_extr_pic_5 from "../assete/home/contact-shape.png";
import rote_pic from "../assete/home/pricing-shape.png";
import banner_shap from "../assete/home/banner-shape.png";
import inavtive_pic from "../assete/home/1 (1).png";
import inavtive_pic_2 from "../assete/home/1.png";
import ball_pic_1 from "../assete/home/ball1.png";
import satr_pic_1 from "../assete/home/call-shape2.png";
import Whatsapp from './Whatsapp';


// import creice_pic_1 from "../assate/background/circel.png";
const Home = () => {
    const [activeSection, setActiveSection] = useState('vision');

    const handleSectionChange = (section) => {
      setActiveSection(section);
    };
    
    const [reviews, ] = useState([
        "I'm Excited to share that Sea Sense provided me with an expertly crafted research paper for my PhD. Their team's expertise and dedication shone through, and I greatly appreciate their support.",

        "Sea Sense delivered a fantastic website for our school. It's user-friendly, visually appealing, and regularly updated. I find myself visiting it more often now, and I highly recommend their services.",

        "Sea Sense's thesis writing service impressed with top-notch quality and timely delivery. However, the occasional communication gaps with writers are areas for improvement. Overall, a reliable option for quality-driven clients.",

        "Sea Sense provide me the ultimate billing solution for my shop, offering efficiency, reliability, and top-notch customer support. I highly recommend it. - One click oda reveiew",

        "Sea Sense's exceptional thesis writing led to widespread acceptance of my research paper, earning strong recommendations. Their dedication and expertise set them apart in delivering top-notch services.",

        "Sea Sense's exceptional thesis writing led to widespread acceptance of my research paper, earning strong recommendations. Their dedication and expertise set them apart in delivering top notch services",

        "I'm Excited to share that Sea Sense provided me with an expertly crafted research paper for my PhD. Their team's expertise and dedication shone through, and I greatly appreciate their support.",

       " Sea Sense's thesis writing service impressed with top-notch quality and timely delivery. However, the occasional communication gaps with writers are areas for improvement. Overall, a reliable option for quality-driven clients.",

       "Topic selection, proposal & paper writing they provided me a invaluable guidance for my Ph.D. journey. Their ethical support helped me shape a strong proposal and research paper. The affordability was a big plus. Highly recommended!",

      " I appreciate your invaluable guidance and expertise in my PhD research, yet suggest improvements in communication clarity and meeting scheduling for a more effective collaboration.",

      "I highly recommend Sea Sense Research for dissertation help. Their 24/7 support and expert guidance were impressive. I'm very satisfied with their services.",

     " I had a fantastic experience with Seasence for my Ph.D. paper publication. Their professionalism, efficiency, and commitment to quality were outstanding. Clear communication and timely delivery make them highly recommended.",

    " My Ph.D. paper publication experience with Seasence was excellent. Their dedication to quality, professionalism, and efficiency were exceptional. They come highly recommended due to their timely delivery and clear communication.",

   " Sea Sense Research delivered the best research paper writing and publishing services—impressive expertise, attention to detail, and seamless communication. Highly recommended for anyone seeking top-notch quality and professionalism.",

  " Thanks to Sea Sense, I successfully secured acceptance for my PhD research paper! Their invaluable guidance and support played a crucial role in achieving this milestone. I'm immensely grateful for their expertise and assistance throughout the process.",

 " Sea Sense Research provide me invaluable PhD support, they offering tailored guidance and fostering a collaborative environment. Their expertise extends beyond academia, equipping students with essential skills for success.",

" Huge thanks to Sea Sense for their crucial support in getting my PhD paper accepted. Their guidance and collaboration were invaluable. Grateful for their expertise and  dedication.",

" Sea sense provided unparalleled support for my PhD research. Their expertise, guidance, and resources significantly enhanced the quality and efficiency of my work. Highly recommended for any researcher seeking top-notch assistance.",

"Sea Sense delivered an exceptional thesis with expert guidance, exceeding my expectations. Their expertise truly shines through in every aspect of the writing process.",

"Sea Sense's exceptional thesis writing led to widespread acceptance of my research paper, earning strong recommendations. Their dedication and expertise set them apart in delivering top-notch services.",

"They Experts in Topic Selection and Thesis Writing. Their guidance is top-notch, resulting in accepted theses. Highly recommended for their awesome support!"
        
      ]);
      const [index, setIndex] = useState(0);
const [headings] = useState([
"Mr. Guruprakash K. S",
"Mr. Harsh",
"Mr. Velagapudi Sreenivas",
"Mrs. Varsha",
"Mrs. Heena Gupta",
"Ms. Swetha",
" Mr. Manimaran",
" Mrs. Renuka",
"Mr. S Rami Reddy",
"Mr. Depa",
"Mr. Saurabh Vijay Parhad",
"Mr. Gopal Krishna",
"Mr. Sambhaji",
"Ms. Ajeena",
"Mr. Ramkumar M",
"Mrs. Sandhya Waghere",
"Mrs. Sushama . S",
"Ms. Shailaja",
"Mr. Pullaiah",
" Mr. Patel Hitesh",
"Mrs. Pallavi B. Salunkhe"
   
]);
const [headingIndex, setHeadingIndex] = useState(0);

useEffect(() => {
const textInterval = setInterval(() => {
  setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
}, 5000);

const headingInterval = setInterval(() => {
  setHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
}, 5000);

return () => {
  clearInterval(textInterval);
  clearInterval(headingInterval);
};
}, [reviews.length, headings.length]);

   
useEffect(() => {
    AOS.init({
        duration:600,
        delay:300
    });
  }, []);


  
  const [formData, setFormData] = useState({
    user_name: '',
    user_phone: '',
    user_email: '',
    service_type: '',
    user_message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
//   const [recaptchaToken, setRecaptchaToken] = useState('');
  const handleChange = (e) => {
    const { id, value } = e.target;
   
 if (id === "user_name") {
const onlyLetters = /^[A-Za-z\s]+$/;
if (!onlyLetters.test(value)) {
setFormData({ ...formData, [id]: '' }); 
setErrorMessage("Name is required");
return;
} else {
setFormData({ ...formData, [id]: value });
setErrorMessage(""); 
}
}



    else if (id === "user_phone") {
      const onlyNumbers = /^[0-9]*$/;
      if (!onlyNumbers.test(value)) {
        setErrorMessage("Invalid Phone Number");
        return;
      }
    }  else if (id === "user_email") {
      
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
        setErrorMessage("Enter valid email address.");
      } else {
        setErrorMessage(""); 
      }
    }
  
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
   
    if (
      formData.user_name.trim() === '' ||
      formData.user_phone.trim() === '' ||
      formData.user_email.trim() === '' ||
      formData.service_type.trim() === '' ||
      formData.user_message.trim() === ''
    ) {
        
      setErrorMessage('All fields are required');
      setTimeout(() => {
        
        setErrorMessage('');
      }, 5000);
      return;
    }
    // if (!recaptchaToken) {
    //   setErrorMessage('Please complete the reCAPTCHA');
    //   return;
    // }
    try {

      setErrorMessage('');
      const response = await ContactusApi(formData);
      console.log('Form data saved:', response.data);
      setSuccessMessage(' submitted successfully!');
      setFormData({
        user_name: '',
        user_phone: '',
        user_email: '',
        service_type: '',
        user_message: ''
      });
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };


  const navigate = useNavigate();

  const phd_peoposal = () => {
    navigate("");
 
    
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  return ( 
  <>
<MetaTitle title=" " />
<meta name="description" content="SEA SENSE provides research guidance, thesis writing, and software development services in Marthandam, Tamil Nadu. Specializing in PhD assistance and software solutions." />
<meta name="keywords" content="SEA SENSE, Sea Sense Softwares,  PhD guidance in Marthandam | 
PhD assistance in marthandam | PhD Thesis writing in marthandam | PhD paper writing in marthandam | Research paper writing in marthandam |Research assistance in Marthandam | Research guidance in marthandam | Mat lab training in marthandam | PhD addmission | PhD Scholarships | Research topics for PhD scholar | Research topics | Recent research topics | PhD guidance in kanyakumari | PhD assistance in kanyakumari | PhD Thesis writing in kanyakumari | PhD paper writing in kanyakumari | Research paper writing in kanyakumari |Research assistance in kanyakumari | Research guidance in kanyakumari | Mat lab training in kanyakumari | PhD guidance in tamilnadu | 
PhD assistance in tamilnadu | PhD Thesis writing in tamilnadu | PhD paper writing in tamilnadu | Research paper writing in tamilnadu |Research assistance in tamilnadu | Research guidance in tamilnadu | Mat lab training in tamilnadu | PhD guidance in nagercoil | PhD assistance in nagercoil | PhD Thesis writing in nagercoil | PhD paper writing in nagercoil | Research paper writing in nagercoil |Research assistance in nagercoil | Research guidance in nagercoil | Mat lab training in nagercoil | PhD guidance in trivandrum | PhD assistance in trivandrum | PhD Thesis writing in trivandrum | PhD paper writing in trivandrum | Research paper writing in trivandrum |
Research assistance in trivandrum | Research guidance in trivandrum | Mat lab training in trivandrum | PhD guidance in alleppey | PhD assistance in alleppey | PhD Thesis writing in alleppey | PhD paper writing in alleppey | Research paper writing in alleppey |Research assistance in alleppey | Research guidance in alleppey | Mat lab training in alleppey | PhD guidance in chennai | PhD assistance in chennai | PhD Thesis writing in chennai | PhD paper writing in chennai | Research paper writing in chennai |Research assistance in chennai | Research guidance in chennai | Mat lab training in chennai | PhD guidance in madurai | PhD assistance in madurai | PhD Thesis writing in madurai | PhD paper writing in madurai | Research paper writing in madurai |Research assistance in madurai | Research guidance in madurai | Mat lab training in madurai | PhD guidance in trichy | PhD assistance in trichy | PhD Thesis writing in trichy | PhD paper writing in trichy | Research paper writing in trichy |Research assistance in trichy | Research guidance in trichy | Mat lab training in trichy | PhD guidance in tirunelveli | PhD assistance in tirunelveli | PhD Thesis writing in tirunelveli | PhD paper writing in tirunelveli | Research paper writing in tirunelveli |Research assistance in tirunelveli | Research guidance in tirunelveli | Mat lab training in tirunelveli | PhD guidance in singapore | PhD assistance in singapore | PhD Thesis writing in singapore | PhD paper writing in singapore | Research paper writing in singapore |
Research assistance in singapore | Research guidance in singapore | Mat lab training in singapore | PhD guidance in india | PhD assistance in india | PhD Thesis writing in india | PhD paper writing in india | Research paper writing in india |Research assistance in india | Research guidance in india | Mat lab training in india | PhD guidance in kollam | PhD assistance in kollam | PhD Thesis writing in kollam | PhD paper writing in kollam | Research paper writing in kollam |Research assistance in kollam | Research guidance in kollam | Mat lab training in kollam | PhD guidance in cochin | PhD assistance in cochin | PhD Thesis writing in cochin | PhD paper writing in cochin | Research paper writing in cochin |Research assistance in cochin | Research guidance in cochin | Mat lab training in cochin | PhD guidance in ernakulam | PhD assistance in ernakulam | PhD Thesis writing in ernakulam | PhD paper writing in ernakulam | Research paper writing in ernakulam |Research assistance in ernakulam | Research guidance in ernakulam | Mat lab training in ernakulam |	 " />
<meta name="copyright" content="Sea Sense IT SOLUTION Sea Sense  MARTHANDAM |  PhD guidance in Marthandam | 
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
Research assistance in ernakulam | Research guidance in ernakulam | Mat lab training in ernakulam |	 Sea Sense  SOFTWARE |Sea Sense  SOFTWARES | Sea Sense  INFOTECH |Sea Sense 
        ITS | Sea Sense  IT SOLUTIONS | MARTHANDAM SOFTWARES | MARTHANDAM SOFTWARE |NAGERCOIL SOFTWARES
        |NAGERCOIL SOFTWARE | SUPER MARKET MANAGEMENT SYSTEM MARTHANDAM | Sea Sense  KUZHITHURAI
        | Sea Sense  ITS INDIA | Sea Sense  IT TAMILNADU | Sea Sense  IT KANNIYAKUMARI | Sea Sense  IT WORLD NO:1 | Sea Sense  IT
        NO:1 MARTHANDAM | Sea Sense  IT NO:1 NAGERCOIL| Sea Sense Softwares Private Limited | SUPERMARKET
        MANAGEMENT SYSTEM NAGERCOIL |WORLD NO:1 IT SOLUTION | WORLD NO:1 IT SOLUTIONS |Sea Sense 
       Softwares Private Limited | Sea Sense  IT SOFTWARE SOLUTION MARTHANDAM | Sea Sense  IT SOLUTION NAGERCOIL
        |Sea Sense  | Sea Sense IT | Sea Sense  INDIA | Sea Sense  ITS INDIA | BEST SOFTWARE DEVELOPING COMPANY IN INDIA | BEST SOFTWARE 
        DEVELOPING COMPANY IN TAMILNADU |BEST SOFTWARE DEVELOPING COMPANY IN KERALAM |
        BEST SOFTWARE DEVELOPING COMPANY IN CHENNAI | BEST SOFTWARE DEVELOPING COMPANY IN TRIVANDRUM | 
        BEST SOFTWARE DEVELOPING COMPANY IN BANGLORE | BEST SOFTWARE DEVELOPING COMPANY IN KANYAKUMARI | 
        BEST SOFTWARE DEVELOPING COMPANY IN NAGERCOIL | BEST SOFTWARE DEVELOPING COMPANY IN Singapore | 
        BEST SOFTWARE DEVELOPING COMPANY IN MARTHANDAM | WORLD NUMBER ON SOFTWARE COMPANY | 
        SOFTWARE DEVELOPING COMPANIES | TOP TEN SOFTWARE DEVELOPING COMPANY IN INDIA | IT SOLUTION | 
        BE PROJECTS | M.TECH PROJECTS | ME PROJECTS | B.TECH PROJECTS | COLLEGE PROJECTS IN KANYAKUMARI | 
        COLLEGE PROJECTS IN MARTHANDAM| COLLEGE PROJECTS IN TAMILNADU | B.SC M.SC POLYTECHNIC PROJECTS IN TAMILNADU
        | B.SC M.SC POLYTECHNIC PROJECTS MARTHANDAM | B.SC M.SC POLYTECHNIC PROJECTS NAGERCOIL
        | B.SC M.SC POLYTECHNIC PROJECTS KANYAKUMARI | WEBSITE DEVELOPING | HOW TO DEVELOP A WEBSITE | billing software in Singapore|super market billing software in Singapore|jewellery billing software in Singapore|traders billing software in Singapore|church billing software in Singapore|mobile shop billing software in Singapore|spare parts billing software in Singapore|textile billing software in Singapore|retail billing software in Singapore|medical shop billing software in Singapore|medical store billing software in Singapore|best billing software in Singapore" />
    <meta name="robots" content="index,follow Sea Sense  MARTHANDAM | Sea Sense  SOFTWARE |Sea Sense  SOFTWARES | PhD guidance in Marthandam | 
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
Research assistance in ernakulam | Research guidance in ernakulam | Mat lab training in ernakulam |	
	|Sea Sense ITS | Sea Sense  IT SOLUTIONS | MARTHANDAM SOFTWARES | MARTHANDAM SOFTWARE |NAGERCOIL SOFTWARES
        |NAGERCOIL SOFTWARE | SUPER MARKET MANAGEMENT SYSTEM MARTHANDAM | Sea Sense  KUZHITHURAI
        | Sea Sense  ITS INDIA | Sea Sense  IT TAMILNADU | Sea Sense  IT KANNIYAKUMARI | Sea Sense  IT WORLD NO:1 | Sea Sense  IT
        NO:1 MARTHANDAM | Sea Sense  IT NO:1 NAGERCOIL| Sea Sense Softwares Private Limited | SUPERMARKET
        MANAGEMENT SYSTEM NAGERCOIL |WORLD NO:1 IT SOLUTION | WORLD NO:1 IT SOLUTIONS |Sea Sense 
       Softwares Private Limited | Sea Sense  IT SOFTWARE SOLUTION MARTHANDAM | Sea Sense  IT SOLUTION NAGERCOIL
        |Sea Sense  | Sea Sense IT | Sea Sense  INDIA | Sea Sense  ITS INDIA |BEST SOFTWARE DEVELOPING COMPANY IN INDIA | BEST SOFTWARE DEVELOPING COMPANY IN TAMILNADU |
        BEST SOFTWARE DEVELOPING COMPANY IN KERALAM
BEST SOFTWARE DEVELOPING COMPANY IN CHENNAI | BEST SOFTWARE DEVELOPING COMPANY IN TRIVANDRUM | 
BEST SOFTWARE DEVELOPING COMPANY IN BANGLORE | BEST SOFTWARE DEVELOPING COMPANY IN KANYAKUMARI | 
BEST SOFTWARE DEVELOPING COMPANY IN NAGERCOIL | BEST SOFTWARE DEVELOPING COMPANY IN Singapore | 
BEST SOFTWARE DEVELOPING COMPANY IN MARTHANDAM | WORLD NUMBER ON SOFTWARE COMPANY | 
SOFTWARE DEVELOPING COMPANIES | TOP TEN SOFTWARE DEVELOPING COMPANY IN INDIA | IT SOLUTION | 
BE PROJECTS | M.TECH PROJECTS | ME PROJECTS | B.TECH PROJECTS | COLLEGE PROJECTS IN KANYAKUMARI | 
 COLLEGE PROJECTS IN MARTHANDAM| COLLEGE PROJECTS IN TAMILNADU | B.SC M.SC POLYTECHNIC PROJECTS IN TAMILNADU
 | B.SC M.SC POLYTECHNIC PROJECTS MARTHANDAM | B.SC M.SC POLYTECHNIC PROJECTS NAGERCOIL
 | B.SC M.SC POLYTECHNIC PROJECTS KANYAKUMARI | WEBSITE DEVELOPING | HOW TO DEVELOP A WEBSITE | | billing software in Singapore|super market billing software in Singapore|jewellery billing software in Singapore|traders billing software in Singapore|church billing software in Singapore|mobile shop billing software in Singapore|spare parts billing software in Singapore|textile billing software in Singapore|retail billing software in Singapore|medical shop billing software in Singapore|medical store billing software in Singapore|best billing software in Singapore
" />

<Header/>
  
  <div className='seasense_web_hed_div' style={{overflow:"hidden"}}>
  <video src={head_vbido} autoPlay loop muted loading="lazy"/>
  
    
    <div className='seasense_web_content_container'>
    <div className='icons_fav' data-aos="fade-up" data-aos-duration="2000">
            <Link to="https://www.facebook.com/seasensesoftwares/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"style={{width:"20px"}}><path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path></svg></Link>
            <Link to="https://wa.me/8526700700"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM8.59339 7.30019L8.39232 7.30833C8.26293 7.31742 8.13607 7.34902 8.02057 7.40811C7.93392 7.45244 7.85348 7.51651 7.72709 7.63586C7.60774 7.74855 7.53857 7.84697 7.46569 7.94186C7.09599 8.4232 6.89729 9.01405 6.90098 9.62098C6.90299 10.1116 7.03043 10.5884 7.23169 11.0336C7.63982 11.9364 8.31288 12.8908 9.20194 13.7759C9.4155 13.9885 9.62473 14.2034 9.85034 14.402C10.9538 15.3736 12.2688 16.0742 13.6907 16.4482C13.6907 16.4482 14.2507 16.5342 14.2589 16.5347C14.4444 16.5447 14.6296 16.5313 14.8153 16.5218C15.1066 16.5068 15.391 16.428 15.6484 16.2909C15.8139 16.2028 15.8922 16.159 16.0311 16.0714C16.0311 16.0714 16.0737 16.0426 16.1559 15.9814C16.2909 15.8808 16.3743 15.81 16.4866 15.6934C16.5694 15.6074 16.6406 15.5058 16.6956 15.3913C16.7738 15.2281 16.8525 14.9166 16.8838 14.6579C16.9077 14.4603 16.9005 14.3523 16.8979 14.2854C16.8936 14.1778 16.8047 14.0671 16.7073 14.0201L16.1258 13.7587C16.1258 13.7587 15.2563 13.3803 14.7245 13.1377C14.6691 13.1124 14.6085 13.1007 14.5476 13.097C14.4142 13.0888 14.2647 13.1236 14.1696 13.2238C14.1646 13.2218 14.0984 13.279 13.3749 14.1555C13.335 14.2032 13.2415 14.3069 13.0798 14.2972C13.0554 14.2955 13.0311 14.292 13.0074 14.2858C12.9419 14.2685 12.8781 14.2457 12.8157 14.2193C12.692 14.1668 12.6486 14.1469 12.5641 14.1105C11.9868 13.8583 11.457 13.5209 10.9887 13.108C10.8631 12.9974 10.7463 12.8783 10.6259 12.7616C10.2057 12.3543 9.86169 11.9211 9.60577 11.4938C9.5918 11.4705 9.57027 11.4368 9.54708 11.3991C9.50521 11.331 9.45903 11.25 9.44455 11.1944C9.40738 11.0473 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.74939 10.663 9.86248 10.5183C9.97128 10.379 10.0652 10.2428 10.125 10.1457C10.2428 9.95633 10.2801 9.76062 10.2182 9.60963C9.93764 8.92565 9.64818 8.24536 9.34986 7.56894C9.29098 7.43545 9.11585 7.33846 8.95659 7.32007C8.90265 7.31384 8.84875 7.30758 8.79459 7.30402C8.66053 7.29748 8.5262 7.29892 8.39232 7.30833L8.59339 7.30019Z"></path></svg></Link>
            <Link to="https://linkedin.com/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></Link>
        </div>
  <div className="content-container" data-aos="zoom-in" data-aos-duration="2000">
 
    <h1>An Innovative Research & Development Solutions</h1>
    <p>We provide specialists software development service to help improve your business process and integrating different platform.we will design, develop, test and integrate software act across multiple platform included mobile application.</p>
    <button className="explore-button"><Link to="/Contact">Explore More</Link></button>
  </div>
  </div>
  </div>
 
<div className='seasense_web_ab_conts'>
    <img src={rote_pic} alt="" className="animate-rotational  absolutess" />
    <img src={banner_shap} alt="" className='absolutees animate-image' />
    <div className='seasense_web_ab_cont_div'>
        <div className='seasense_web_card_div_1'>
            <div className='seasense_web_ab_pic_add'>
                    <img src={ad_pic} alt="" />
                    
            </div>
            <div className='seasense_web_conts_1'>
                    <h2>SHORT HISTORY</h2>
                    <div className='seasense_line_cont'></div>
                    <p data-aos="fade-up"data-aos-duration="2000">Welcome to Sea Sense Research, a pioneering company with over a decade of experience in Research guidance. Our skilled team has supported 5,000+ scholars, facilitating 1,500+ research publications. We offer a seamless experience through a single control panel and state-of-the-art cloud services. As a root-level company, we provide robust infrastructure and toll-free customer support, ensuring unparalleled assistance for your academic journey.</p>
            </div>
        </div>
    </div>
</div>


<div className='seasense_web_welcome_div'>
        <div className='seasense_web_welcome_div_1'>
            <div className='seasense_web_conts_1'>
                <h2 data-aos="fade-right"data-aos-duration="2000">Best <em> Research Assistance</em> In India</h2>
                <p data-aos="fade-down"data-aos-duration="2000">Sea Sense is a top Research Assistance service in India, known for its excellent support for academics in doctorate research. Our team has experienced Research professionals with diverse academic backgrounds. Each scholar acquires specific instructions for their field of study. Sea Sense provides comprehensive support for project implementation and research papers, which includes developing research proposal-building methodologies and preparing manuscripts for publication. We prioritize high standards in data analysis. Our researchers use various methods to ensure accurate study results. Sea Sense is proud of researchers who submitted their Thesis and achieved publication, advancing their academic careers. Sea Sense is a reliable academic advisor who values confidentiality and transparency. Clients could reach out to us to schedule a consultation for customized professional advice that meets their research needs.</p>
            </div>
           
            <div className='seasense_web_pic_research'>
              
                <img src={researc_pic_1} alt=""  data-aos="zoom-in" data-aos-duration="2000"  />
            </div>
        </div>
    </div> 

    <div className='inavative_seasense_main_div'>
    
      <div className='inavative_seasense_main_div_1'>
        <div className='inavative_pic_add'>
        {/* <img src={circle_pic} alt="" className='invt_pic_add_igm animate-rotational' /> */}
          <img src={inavtive_pic} alt=""   />
        </div>
   
        <div className='inavte_conts_div'>
        <img src={ball_pic_1} alt="" className='animate-image' />
        <img src={ball_pic_1} alt="" className='animate-image absolute_pic' />
        <img src={satr_pic_1} alt="" className='start_pic_rotate animate-rotational' />
          <h2>An Innovative Research & Development Solutions</h2>
          <div className='invate_sub_div'>
            <p>You can also send us an email and we’ll get in touch shortly,</p>
            <p>info@seasensesoftwares.com</p>
          </div>
        </div>
        <div className='inavative_pic_add'>
          <img src={inavtive_pic_2} alt="" />
        </div>
      </div>
    </div>
   
<div className='seasense_web_next_level'>
    <div className='seasense_web_next_div'>
        <div className='seasense_web_next_pic_add'>
            <img src={next_pic} alt="" data-aos="zoom-in" data-aos-duration="2000"/>
        </div>
        <div className='seasense_web_next_conts' data-aos="fade-up"  data-aos-duration="2000">
            <h2>Taking Your Research To The Next Level</h2>
            <p>Are you ready to elevate your research to new heights? Our Sea Sense Research assistance services are designed to take your research to the next level, helping you unlock its full potential and make a significant impact in your field. With our expertise and guidance, you can surpass the ordinary and delve into the extraordinary. We provide the necessary support and resources to help you tackle the most challenging aspects of your research, pushing boundaries and driving innovation.Advancing your research requires a strategic approach that combines innovation, collaboration, and continuous learning. Begin by critically assessing your current methods and identifying any gaps or limitations. Setting clear objectives is crucial—know what you want to achieve and prioritize the areas that need improvement.Adopting new technologies, such as AI and advanced data analytics, can greatly enhance the accuracy and scope of your research. Don't hesitate to explore interdisciplinary approaches that could offer fresh perspectives. Collaboration is another key component; engaging with the research community and forming partnerships with experts can provide valuable insights and resources.</p>
            <div className='next_level_btn'>
                <div className='next_level_btn_1'>
                    <button><Link to="/Phdtopicselection" onClick={phd_peoposal}>Click Here</Link></button>
                </div>
                <div className='next_level_arro_pic'>
                    <img src={arror_pic} alt="" className='animate-image'/>
                </div>
            </div>
        </div>
    </div>
</div>
<div className='add_extre_pic_line'>
    <img src={extra_line_pic} alt=""/>
</div>

<div className='seasense_web_tec_1'>
    <div className='seasense_best_div'>
    <h2>WE ARE ALWAYS BEST</h2>
    </div>
<div className='seasense_web_tech_main_div'>
    <div className='seasense_web_tech_div'>
        <div className='seasenseweb_tect_div_conts'>
            <div className='seasense_web_change_place'>
            <div className='seasense_tect_div_pic_add'>
                <img src={tech_pic} alt="" data-aos="zoom-in" data-aos-duration="2000"/>
            </div>
            <div className='seasense_web_cost_div_tech'>
                <h2 data-aos="fade-down">Technology</h2>
                <p data-aos="zoom-in" data-aos-duration="2000">Sea Sense leverages cutting-edge technology to enhance Research support and resources.</p>
            </div>
            </div>
            <div className='seasense_web_change_place'>
            <div className='seasense_tect_div_pic_add'>
                <img src={innovation_pic} alt="" data-aos="zoom-in" data-aos-duration="2000"/>
            </div>
            <div className='seasense_web_cost_div_tech'>
                <h2 data-aos="fade-down">Innovation</h2>
                <p data-aos="zoom-in" data-aos-duration="2000">We implement innovative solutions to streamline and improve the academic research process.</p>
            </div>
            </div>
            <div className='seasense_web_change_place'>
            <div className='seasense_tect_div_pic_add'>
                <img src={intergation_pic} alt="" data-aos="zoom-in" data-aos-duration="2000"/>
            </div>
            <div className='seasense_web_cost_div_tech'>
                <h2 data-aos="fade-down">Integration</h2>
                <p data-aos="zoom-in" data-aos-duration="2000">Our integrated approach combines various tools and methodologies for comprehensive research guidance.</p>
            </div>
            </div>
           
        </div>
    </div>
    <div className='seasense_web_innovation_pic_add'>
        <img src={lens_pic} alt=""  data-aos="fade-down"  data-aos-easing="linear"  data-aos-duration="1500"/>
    </div>
    </div>
</div>


    <div className='tt'>
    <div className='timeline'>
        <div className='seasense_web_ser_div'>
            <h2>Our Service</h2>
        </div>
        <div className='center-line'></div>
        <div className='container left-container'>
            <img src={icon_logo} alt="icon"/>
            <div className='text-box' data-aos="fade-down" data-aos-duration="5000">
                <small>RESEARCH SERVICES</small>
                <p>Sea Sense provides research assistance services to research scholars in various domains, from topic selection to paper acceptance.</p>
                <span className='left-container-arrow'></span>
            </div>
        </div>

        <div className='container right-container'>
            <img src={Email_pic} alt="icon"/>
            <div className='text-box' data-aos="fade-down" data-aos-duration="5000">
                <small>E-Mail SERVICES</small>
                <p>Sea Sense provides research assistance services to research scholars in various domains, from topic selection to paper acceptance.</p>
                <span className='right-container-arrow'></span>
            </div>
        </div>

        <div className='container left-container'>
            <img src={soft_pic} alt="icon"/>
            <div className='text-box' data-aos="fade-down" data-aos-duration="5000">
                <small>SOFTWARE SERVICES</small>
                <p>Sea Sense provides research assistance services to research scholars in various domains, from topic selection to paper acceptance.</p>
                <span className='left-container-arrow'></span>
            </div>
        </div>

        <div className='container right-container'>
            <img src={web_pic} alt="icon"/>
            <div className='text-box' data-aos="fade-down" data-aos-duration="5000">
                <small>WEB HOSTING</small>
                <p>Sea Sense provides research assistance services to research scholars in various domains, from topic selection to paper acceptance.</p>
                <span className='right-container-arrow'></span>
            </div>
        </div>

        <div className='container left-container'>
            <img src={appa_pic} alt="icon"/>
            <div className='text-box' data-aos="fade-down" data-aos-duration="5000">
                <small>APPS MARKETING</small>
                <p>Sea Sense provides research assistance services to research scholars in various domains, from topic selection to paper acceptance.</p>
                <span className='left-container-arrow'></span>
            </div>
        </div>

        <div className='container right-container'>
            <img src={vidroapp_pic} alt="icon"/>
            <div className='text-box' data-aos="fade-down" data-aos-duration="5000">
                <small>VIDEO MARKETING</small>
                <p>Sea Sense provides research assistance services to research scholars in various domains, from topic selection to paper acceptance.</p>
                <span className='right-container-arrow'></span>
            </div>
        </div>
    </div>
</div>


<div className='seasense_advance_code'>
    <div className='seasense_advance_code_1'>
        <div className='seasense_advance_pic' data-aos="zoom-in" data-aos-duration="2000" >
            <img  src={advnace_pic} alt="" preload="auto"/>
        </div>
        <div className='seasense_advance_code_main_div' data-aos="fade-down" data-aos-duration="2000">
            <h2 >ADVANCED CODING SOLUTIONS FOR YOUR PROJECT</h2>
            <p>At SEA SENSE, we specialize in providing high-quality software coding services to meet the diverse needs of our clients. With our team of experienced developers and engineers, we are committed to delivering innovative and customized solutions that leverage the latest technologies.Modular programming allows developers to break down complex problems into smaller, manageable pieces. This approach promotes code reusability, easier debugging, and streamlined collaboration.Implementing regular code reviews helps maintain code quality and knowledge sharing within the team. Peer reviews can catch potential bugs and improve overall code readability.Regularly refactoring code improves its structure without changing its functionality. This practice enhances readability, reduces technical debt, and makes future updates easier.</p>
        </div>
    </div>
</div>

<div className='seasense_vision_main_div'>
      <div className='seasense_vision_div_1'>
        <div className='seasense_vision_div_2'>
          <h2 data-aos="fade-up" data-aos-duration="2000">Best IT-Solution </h2>
            <p data-aos="fade-up" data-aos-duration="2000">Our team heads have rich experience in the field of research for more than 15 years especially in the development of questionnaire, research design, quantitative and qualitative study designs, and statistical analysis. The technical heads will guide you through your research journey and guide you to achieve your Research. There is complete support at every stage from the identification of Research topic to the final document</p>
         
          <br/>

          <div className='seasense_vision_btns'>
            <button  className={activeSection === 'vision' ? 'active' : ''}  onClick={() => handleSectionChange('vision')} data-aos="fade-right" data-aos-duration="2000">Vision</button>
            <button  className={activeSection === 'mission' ? 'active' : ''}  onClick={() => handleSectionChange('mission')} data-aos="fade-right" data-aos-duration="2000">Mission</button>
            <button   className={activeSection === 'goal' ? 'active' : ''}  onClick={() => handleSectionChange('goal')} data-aos="fade-right" data-aos-duration="2000">Goal</button>
          </div>
          {activeSection === 'vision' && (
            <div className='ses_clr_set'>
                <h2 data-aos="zoom-out-up" data-aos-duration="2000">Vision</h2>
              <p data-aos="zoom-out-up" data-aos-duration="2000">Sea Sense aspires to the best research guidance provider in the world through its holistic approach irrespective of subjects, countries, and specializations.</p>
            </div>
          )}

          {activeSection === 'mission' && (
           <div className='ses_clr_set'>
                <h2 data-aos="zoom-out-up" data-aos-duration="2000">Mission</h2>
              <p data-aos="zoom-out-up" data-aos-duration="2000">To achieve this vision, we approach each research through unique methodology and after a lot of discussion between research experts, professors, data management experts, industry professionals and language & technical editors.</p>
            </div>
          )}

          {activeSection === 'goal' && (
            <div className='ses_clr_set'>
                <h2 data-aos="zoom-out-up" data-aos-duration="2000">Goal</h2>
              <p data-aos="zoom-out-up" data-aos-duration="2000">Are you ready to elevate your research to new heights? Our Sea Sense Research assistance services are designed to take your research to the next level, helping you unlock its full potential and make a significant impact in your field.</p>
            </div>
          )}
         
        </div>
        <div className='seasense_mision_pic'>
          <img src={mision_pic} alt="" />
        </div>
      </div>
    </div>

   
  <div className='seasense_research_boll'>
    <div className='seasense_research_boll_1' data-aos="fade-right" data-aos-duration="2000">
        <h2>Seasense Research :</h2>
        <div className='line_seasense_2'></div>
        <p>Welcome to Sea Sense Research, where we empower scholars with expert support and guidance. Our services include research proposal development, literature review assistance, data analysis, manuscript preparation and academic coaching. With a team of experienced researchers, we provide personalized and timely help to enhance the quality and impact of your work. Choose Sea Sense Research for excellence and integrity in academic support. </p>
    </div> 
    <div className='seasense_boll_pic_add'data-aos="fade-down" data-aos-duration="2000" >
        <img src={reserach_pall_1} alt="" className='animate-image'/>
    </div>
</div>


<div className='seasense_extrat_card_div_add_pic'>
    <div className='seasense_extera_cont_div'>
       <div className='seasense_extra_conts_add'>
        <div className='play-button'>
       <h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={"50px"} color='#fff' style={{marginTop:"-30px"}}><path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path></svg></h4>
       </div>
        
        <h2>Call Us Anytime </h2>
        <h1>+91 85 26 700 700</h1>
        <p>Welcome to Sea Sense Research, where we empower scholars with expert support and guidance. Our services include research  development.</p>
        <div className='extr_conts_btn'>
          <button><Link to="/Contact" onClick={phd_peoposal}>Click</Link></button>
        </div>
       </div>
       <div className='extert_seasense_pic_add_cont'>
        <div className='exte_pic_2'>
          <img src={conts_extr_pic_5} alt="" className='animate-image'/>
        </div>
        <img src={conts_extr_pic_4} alt=""/>
       </div>
    </div>
</div>
<div className='tergert_pic_add'>
<div className='seasense_terget_main_div'>
  <div className='seasense_target_div'>
    <div className='seasense_targrt_conts_div'>
      <h2>1000+</h2>
      <p>Happy clients</p>
    </div>
    <div className='seasense_targrt_conts_div'>
      <h2>10,000+</h2>
      <p>Completed Projects</p>
    </div>
    <div className='seasense_targrt_conts_div'>
      <h2>100%</h2>
      <p>Satisfaction Rate</p>
    </div>
    <div className='seasense_targrt_conts_div'>
      <h2>24/7</h2>
      <p>Hours Of Support</p>
    </div>
    
  </div>
</div>
</div>

    <div className='seasense_feedback_main_div'>
 
        <div className='seasense_feedback_div'>
            <div className='seasense_feedback_div_1'>
            <img src={starRatingImage} alt="Star Rating" />
                <h2>{headings[headingIndex]}</h2>
                <p>{reviews[index]}</p>
            </div>
        </div>
    </div>
<div className='seasense_web_form_div'>
    <div className='seasense_web_form_div_1'>
        <div className='seasense_web_form_pic'>
            <img src={form_pic} alt="" />
        </div>
        <div className='seasense_web_full_contet'>
        <div className='seasense_web_text'>
            <h2>Have Any Questions? Let's Answer Them</h2>
        </div>
        <div className='seasense_web_from_full'>
            <input type="text" placeholder='Enter your Name' id="user_name" value={formData.user_name} onChange={handleChange}/>
            <input type="text" placeholder='Enter your Number' id="user_phone" value={formData.user_phone} onChange={handleChange}/>
        </div>
        <div className='seasense_web_from_full'>
            <input type="email" placeholder='Enter your Email' id="user_email" value={formData.user_email} onChange={handleChange}/>
           <select id="service_type" onChange={handleChange}>
           <option   id="service_type" value={formData.service_type}>select</option>
                                <option value="Research Proposal">Research Proposal</option>
                                <option value="Research Paper">Research Paper</option>
                                <option value="Implementation">Implementation</option>
                                <option value="Publication Assistance">Publication Assistance</option>
                                <option value="Polishing">Polishing</option>
                                <option value="Web Hosting">Web Hosting</option>
                                <option value="Email Service">Email Service</option>
                                <option value="SMS Service">SMS Service</option>
                                <option value="Student Management">Student Management</option>
                                <option value="Employee Payroll">Employee Payroll</option>
                                <option value="other">Other</option>
           </select>
        </div>
        <div className='seasense_web_mgs_from'>
            <textarea type="text" placeholder='Enter your Message' id='user_message' value={formData.user_message} onChange={handleChange}/>
        </div>
        {errorMessage && <div className="error-message" style={{ color: 'red' }}>{errorMessage}</div>}
        {successMessage && <div className="success-message" style={{ color: 'red' }}>{successMessage}</div>}
        <div className='seasense_web_form_smt_bts'>
            <button onClick={handleSubmit}>Submit</button>
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

export default Home