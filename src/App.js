import React from 'react';
import {    HashRouter,  Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'; 
import Home from './page/Home';
import Header from './page/Header';
import Footer from './page/Footer';
import About from './page/About';
import Service from './page/Service';
import Contact from './page/Contact';
import Admin from './Admin/Admin';
import Adminheader from './Admin/Adminheader';
import Changepassword from './Admin/Changepassword';
import Phdtopicselection from './page/Phdtopicselection';
import Researchproposal from './page/Researchproposal';
import ResearchPaperWrite from './page/ResearchPaperWrite';
import Journalassistance from './page/Journalassistance';
import Synopsisprepaation from './page/Synopsisprepaation';
import Thesiswriting from './page/Thesiswriting';
import Matlabdevelopment from './page/Matlabdevelopment';
import Pythondevelopment from './page/Pythondevelopment';
import Javadevelopment from './page/Javadevelopment';
import VLSIdevelopment from './page/VLSIdevelopment';
import Seditdevelopment from './page/Seditdevelopment';
import Ns2ns3development from './page/Ns2ns3development';
import Simulinkdevelopment from './page/Simulinkdevelopment';
import Hfssdevelopment from './page/Hfssdevelopment';
import Plagiarismchecking from './page/Plagiarismchecking';
import Grammarcheck from './page/Grammarcheck';
import Proofreading from './page/Proofreading';
import Language from './page/Language';
import Literaturereview from './page/Literaturereview';
import Whatsapp from './page/Whatsapp';
import Implementation from './page/Implementation';
import Viewdetails from './Admin/Viewdetails';


function App() {
  return (
    <HashRouter>
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
      <Route path="Home" element={<Home/>} />
      <Route path="Header" element={<Header/>} />
      <Route path="Footer" element={<Footer/>} />
      <Route path="About" element={<About/>} />
      <Route path="Service" element={<Service/>} />
      <Route path="Contact" element={<Contact/>} />
      <Route path="Admin" element={<Admin/>} />
      <Route path="Viewdetails" element={<Viewdetails/>} />
      <Route path="Adminheader" element={<Adminheader/>} />
      <Route path="Changepassword" element={<Changepassword/>} />
      <Route path="Phdtopicselection" element={<Phdtopicselection/>} />
      <Route path="Researchproposal" element={<Researchproposal/>} />
      <Route path="ResearchPaperWrite" element={<ResearchPaperWrite/>} />
      <Route path="Journalassistance" element={<Journalassistance/>} />
      <Route path="Synopsisprepaation" element={<Synopsisprepaation/>} />
      <Route path="Thesiswriting" element={<Thesiswriting/>} />
      <Route path="Matlabdevelopment" element={<Matlabdevelopment/>} />
      <Route path="Pythondevelopment" element={<Pythondevelopment/>} />
      <Route path="Javadevelopment" element={<Javadevelopment/>} />
      <Route path="VLSIdevelopment" element={<VLSIdevelopment/>} />
      <Route path="Seditdevelopment" element={<Seditdevelopment/>} />
      <Route path="Ns2ns3development" element={<Ns2ns3development/>} />
      <Route path="Simulinkdevelopment" element={<Simulinkdevelopment/>} />
      <Route path="Hfssdevelopment" element={<Hfssdevelopment/>} />
      <Route path="Plagiarismchecking" element={<Plagiarismchecking/>} />
      <Route path="Grammarcheck" element={<Grammarcheck/>} />
      <Route path="Proofreading" element={<Proofreading/>} />
      <Route path="Language" element={<Language/>} />
      <Route path="Literaturereview" element={<Literaturereview/>} />
      <Route path="Whatsapp" element={<Whatsapp/>} />
      <Route path="Implementation" element={<Implementation/>} />
      </Routes>
      </HelmetProvider>
      </HashRouter>
   
  );
}

export default App;
