import React from 'react';
import MetaTitle from '../components/MetaTitle';
import "../assete/css/journal.css";
import Header from './Header';
import jouranl_pic_1 from "../assete/research service/journal1.png";
import journal_pic_2 from "../assete/research service/assistance.jpg";
import Footer from './Footer';
// import AOS from "aos";
// import "aos/dist/aos.css";
import Scrolltop from './Scrolltop';
import journal_vdo from "../assete/video/resech head.mov";
import Whatsapp from './Whatsapp';
const Journalassistance = () => {
    // useEffect(() => {
    //     AOS.init({
    //         duration:600,
    //         delay:300
    //     });
    //   }, []);
  return (
   <>
     <MetaTitle title={"PhD Service | Journal Assistance | "} description="Find the best place to guide your research works at an affordable price. Visit Sea Sense Software Pvt. Ltd. for PhD guidance."
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
    <div className='seasense_journal'>
    <video src={journal_vdo} autoPlay loop muted/>
        <div className="about_content">
    <h1>Journal Assistance</h1>
    </div>

    </div>
    <div className='journal_main_div'>
        <div className='journal_main_div_conts' data-aos="fade-down"data-aos-duration="2000">
            <h2>Journal Assistance</h2>
            <p>Journal Assistance Services, the most popular and most sought-after service of Sea Sense has a worldwide reputation. We are providing Professional Journal Writing format for Engineering, Thesis Writing, Management, Arts & Sciences. To, we undertake services to write the entire content as per the International standard specifications. We also assist in publishing the same content in Scopus journals and other International repute journals or any journal articles of your choice. Sea Sense provides end-to-end solutions in this domain. we are proud to say that we have the established market leaders in the best quality Journal paper writing services for the last four decades.</p>
            <p>Every journal has its structure and set of rules. It is required that the paper be submitted in the format stated. We support the researcher by complying with the requirements and formats of the journal.</p>
            <p>The research results are published in international journals around the world, which is a crucial step in the research process. The majority of them consider researching to be a demanding task. Sea Sense supports you in the publication of your research article in well-known journals and provides crucial assistance.</p>
        </div>
        <div className='jouranl_div_pic'>
            <img src={jouranl_pic_1} alt="" data-aos="zoom-in"data-aos-duration="2000"/>
        </div>
    </div>
    <div className='jouranl_service_div'>
        <div className='jouranl_service_div_1' data-aos="fade-down"data-aos-duration="2000">
            <h2>Our Journal services</h2>
            <p>Our journal finder connects you with specialists in your field who can help you choose the right journal.</p>
            <p>We will check your work thoroughly and, depending on the likelihood ofacceptance, send it to the 3-5 leading journals.</p>
            <p>Sea Sense will scan a broad international database of journals including SCI, SSCI, Web of Science, Scopus and others.</p>
        </div>
    </div>
    <div className='jouranla_feedback'>
        <div className='jouranla_feedback_1'>
            <img src={journal_pic_2} alt="" data-aos="zoom-in"data-aos-duration="2000"/>
        </div>
        <div className='journal_conts_feedback' data-aos="fade-down"data-aos-duration="2000">
            <h2>Our experienced peer reviewers will provide important feedback for your manuscript including</h2>
            <p>The language of the manuscript</p>
            <p>Performance Evaluation</p>
            <p>Publication readiness in its current state and required changes</p>
            <p>Manuscript length based on journal</p>
            <p>Findings and challenges</p>
            <p>Research novelty</p>
        </div>
    </div>
    <div className='journal_sub_div' data-aos="fade-down"data-aos-duration="2000">
        <h2>what Do You Get?</h2>
        <p>Provides a list of 3-5 carefully selected journals, each with more than 10 parameters, so you can choose the ideal journal to publish.</p>
        <p>Offers specific expert commentary on journals that can help improve the quality of your manuscript and / or speed up the publishing process.</p>
        <p>We help applicants publish their original research and survey-based work in Scopus and SCI indexed journals. Scopus and SCI indexed journals are peer-reviewed publications that cover scientific or academic topics to benefit the research community.We help applicants publish their original research and survey-based work in Scopus and SCI indexed journals. Scopus and SCI indexed journals are peer-reviewed publications that cover scientific or academic topics to benefit the research community.</p>
    </div>

    <div className='journal_last_sub_div'>
        <div className='journal_last_sub_div_1'data-aos="fade-down"data-aos-duration="2000">
            <h2>English Language:</h2>
            <p>We help with writing on paper by offering English language aids (grammar, vocabulary, sentence structure and tenses).</p>
        </div>
        <div className='journal_last_sub_div_1' data-aos="fade-down"data-aos-duration="2000">
            <h2>Manuscript:</h2>
            <p>It should contain a title, information about the author, affiliations, abstract, keywords, main text, acknowledgments, references and if applicable, figure / table and additions / supporting information. We help authors to prepare a paper that meets all the requirements for publication in peer-reviewed journals.</p>
        </div>
        <div className='journal_last_sub_div_1' data-aos="fade-down"data-aos-duration="2000">
            <h2>Publishing Ethics:</h2>
            <p>An author's passport to begin the researcher's journey is the publication of an article in an SCI or Scopus indexed journal. It reflects the ability of authors and organizations to produce high quality work. It is therefore important to agree on the publication of ethical guidelines. We support applicants in adhering to the publication ethics by offering a plagiarism check and analyzing the uniqueness of their work.</p>
        </div>
    </div>
    <Whatsapp/>
    <Scrolltop/>
    <Footer/>
   </>
  )
}

export default Journalassistance