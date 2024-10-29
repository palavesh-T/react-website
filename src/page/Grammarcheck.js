import React,{useEffect} from 'react';
import MetaTitle from '../components/MetaTitle';
import Header from './Header';
import "../assete/css/grammer.css";
import grammar_pic_1 from "../assete/Add on service/grammar4.png";
import grammar_pic_2 from "../assete/Add on service/grammer2-removebg-preview.png";
import Footer from './Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import Scrolltop from './Scrolltop';
import grammar_vdo from "../assete/video/add head.mov";
import Whatsapp from './Whatsapp';

const Grammarcheck = () => {
    useEffect(() => {
        AOS.init({
            duration:600,
            delay:300
        });
      }, []);
  return (
    <>
       <MetaTitle title={"ADD-ON-Service | Grammar Checking | "} description="Find the best place to guide your research works at an affordable price. Visit Sea Sense Software Pvt. Ltd. for PhD guidance."
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
    <div className='grammar_main_div'>
    <video src={grammar_vdo} autoPlay loop muted/>
        <div className="about_content">
    <h1>Grammar Checking</h1>
    </div>
    </div>
    <div className='grammar_check_div'>
        <div className='grammar_check_div_1' data-aos="fade-down"data-aos-duration="2000">
            <h2>Grammar Checking</h2>
            <p>Our specialists will find each sentence in a text and look up each word in the dictionary. As well as, an effort to evaluate the sentence in a form that matches grammar check. Specially, we also assist our scholars with this service for the content provided to us by them:</p>
            <h2>Grammar check in Your Research Paper</h2>
            <p>Our experts will look up each word in the dictionary and find each sentence in a document. Also, try to parse the statement into a format that can be checked for grammar.</p>
            <p>If you're an author hoping to get your work published, you'll want to make sure it's well-written and free of embarrassing errors. That is exactly what Editage's high-quality English editing services accomplish. Our professional editors are experienced in recognizing and correcting grammatical and linguistic errors. Like any English proofreading service, we not only work on the obvious problems in your words and sentences, but we will also discover and repair the deeper issues in your writing that could potentially dilute its impact.</p>
        </div>
        <div className='grammer_pic_add'>
            <img src={grammar_pic_1} alt="" data-aos="zoom-in"data-aos-duration="2000"/>
        </div>
    </div>
    <div className='grammer_sub_div'>
        <div className='grammer_sub_div_1'>
            <div className='grammar_sub_div_2' data-aos="fade-down"data-aos-duration="2000">
                <p>Identification and correction of grammar mistakes</p>
                <p>Sentence corrections</p>
                <p>Error in meaning and content</p>
                <p>Paragraphing</p>
            </div>
            <div className='grammar_sub_div_2' data-aos="fade-down"data-aos-duration="2000">
                <p> Punctuation and typographical errors checking</p>
                <p>Provision of style in content and in presentation</p>
              
                <p>Check the flow and meaning of content</p>
            </div>
        </div>
    </div>
    <div className='grammar_last_div'>
        <div className='grammar_last_div_1'>
            <img src={grammar_pic_2} alt="" data-aos="zoom-in"data-aos-duration="2000"/>
        </div>
        <div className='grammar_last_cont_div' data-aos="fade-down"data-aos-duration="2000">
            <h2>Grammar & Spell Checker Benefits You Can Expect</h2>
            <p>There are many different types of spell checkers. At Seasense, we've made our software unique so that it stands out from the rest.</p>
            <p>It’s credible: We regularly test our software to make sure that it is free of flaws and that it is as accurate as possible.</p>
            <p>Advanced correction: Our checker examines text on a variety of levels, from the surface to the deepest semantic depths.</p>
            <p>Authority: Students are increasingly turning to our product because they are pleased with their findings.</p>
            <p>It improves grammar: Our system is designed to point out errors and suggest strategies for correcting them. You can see exactly what is wrong with a statement and avoid future problems.</p>
            <p>It saves time: Our checker works at lightning fast, so you'll have your results and suggestions for corrections in around ten seconds.</p>
        </div>
    </div>
    <div className='grammaer_check_last_div' data-aos="fade-down"data-aos-duration="2000">
        <h2>Grammar check in Your Research Paper</h2>
        <p>Our experts will look up each word in the dictionary and find each sentence in a document. Also, try to parse the statement into a format that can be checked for grammar.</p>
        <p>If you're an author hoping to get your work published, you'll want to make sure it's well-written and free of embarrassing errors. That is exactly what Editage's high-quality English editing services accomplish. Our professional editors are experienced in recognizing and correcting grammatical and linguistic errors. Like any English proofreading service, we not only work on the obvious problems in your words and sentences, but we will also discover and repair the deeper issues in your writing that could potentially dilute its impact.</p>
    </div>
    <Whatsapp/>
    <Scrolltop/>
    <Footer/>
    </>
  )
}

export default Grammarcheck     