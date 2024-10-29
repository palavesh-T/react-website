import React, {useState} from 'react';
import MetaTitle from '../components/MetaTitle';
import { Link } from 'react-router-dom';
import "../assete/css/contact.css";
import Header from './Header';
import contsct_vdo_1 from "../assete/contact/sales.gif";
import marketing_vdo from "../assete/contact/marketing 1.webp";
import Footer from './Footer';
import contsct_pic from "../assete/contact/contactnew.mov";
import { ContactusApi } from '../service/Api';
import Scrolltop from './Scrolltop';
 import Whatsapp from './Whatsapp';
const Contact = () => {

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
    
  return (
   <>

<MetaTitle title={"Contact Us | "} description="Find the best place to guide your research works at an affordable price. Visit Sea Sense Software Pvt. Ltd. for PhD guidance."
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
   <div className='seasense_web_contact_main'>
        <video src={contsct_pic} autoPlay loop muted/>  
        <div className="about_content">
    <h1>Contact </h1>
    </div>
         </div>
   <div className='seasense_web_contsct_hed'>
    <h1>Contact Us</h1>
    <h2>Contact Us</h2>
   </div>
   <div className='seasense_contact_web_form'>
    <div className='seasense_contact_web_form_1'>
        <div className='seasense_contact_web_form_2'>
            <h2>Sea Sense Interdisciplinary Research and IT Solution (OPC) Pvt.Ltd.</h2>
            <p>JJ Arcade, Second Floor, Near New Bus Stand</p>
            <p>Marthandam - Kanyakumari District - TamilNadu -629 165, INDIA</p>
            <h1>Phone</h1>
            <p><Link to="tel:8526700700">+91-85 26 700 700</Link></p>
            <p><Link to="tel:04651271057">04651-271057</Link> </p>
            <h1>Email</h1>
            <p><Link to="mailto:info@seasensesoftwares.com">info@seasensesoftwares.com</Link></p>
            <p><Link to="mailto:projectdelivery@seasensesoftwares.com">projectdelivery@seasensesoftwares.com</Link></p>
        </div>
        <div className='seasense_contsct_full_form'>
            <div className='seasense_contct_hed'>
                <h2>Have Any Questions? Let's Answer Them</h2>
                <h1>Seasense Research</h1>
            </div>
          
            <div className='seasense_contsct_form_full_input'>
                <input type="text" placeholder='Name*' id="user_name" value={formData.user_name} onChange={handleChange}/>
                <input type="text" placeholder='Phone*' id="user_phone" value={formData.user_phone} onChange={handleChange}/>
                <input type="Email" placeholder='Email*' id="user_email" value={formData.user_email} onChange={handleChange}/>
                <select id="service_type" onChange={handleChange}>
                <option   id="service_type" value={formData.service_type} >select*</option>
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
                <textarea type="text" placeholder='Message*' id='user_message' value={formData.user_message} onChange={handleChange}></textarea>
            </div>
            {errorMessage && <div className="error-message" style={{ color: 'red' }}>{errorMessage}</div>}
            {successMessage && <div className="success-message" style={{ color: 'red' }}>{successMessage}</div>}
            <div className='seasense_contact_sub_bts'>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    </div>
   </div>

   <div className='seasene_marking_main_div'>
        <div className='seasense_marketing_div'>
            <img src={marketing_vdo} alt=""/>
        </div>
        <div className='marketing_card_conts'>
            <h2>Marketing Office</h2>
            <div className='marketing_sub_card_div'>
                <h1>SEA SENSE TECHNOLOGIES</h1>
                <p>Third Floor, Pulimootil Trade Center</p>
                <p>Alleppey - Kerala -688 001, INDIA</p>
                <h3>Mobile</h3>
                <p><Link to="tel:7402616156">+91-7402616156</Link></p>
            </div>
        </div>
   </div>

   <div className='seasense_contect_sales_main_div'>
    <div className='contsct_sale_div_1'>
       
        <div className='contact_sales_card_div_main'>
        <div className='contact_sub_card_div'>
            <div className='contact_sales_sub_card_div'>
                <h2>Sales Team</h2>
                <h1>Phone Number <em>(Toll Free)</em></h1>
                <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"20px"}}><path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path></svg><Link to="tel:18005726426">1800- 5726 426 (For All Services)</Link></p>
                <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"20px"}}><path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path></svg><Link to="tel:7402616152">+91-7402616152 (For All Services)</Link></p>
                <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"20px"}}><path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path></svg><Link to="tel:7402616156">+91-7402616156 (For All Services)</Link></p>
                <h2>Email</h2>
                <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"20px"}}><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg><Link to="mailto:info@seasensesoftwares.com"> info@seasensesoftwares.com</Link></p>
            </div>
            <div className='contsct_sales_email_card'>
               
            </div>
        </div>
        <div className='contact_support_main_div'>
            <div className='support_card_div'>
                <div className='support_card_div_1'>
                    <h2>Support Team</h2>
                    <h1>Support Center<em>Phone</em></h1>
                    <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"20px"}}><path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path></svg><Link to="tel:18005726426"> 1800 5726 426 (9.30 AM - 7 PM : IST)</Link></p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"20px"}}><path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path></svg><Link to="tel:04651271057"> 04651 - 271057 (9.30 AM - 7 PM : IST)</Link></p>
                    <h2>Email</h2>
                    <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"style={{width:"20px"}}><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg> <Link to="mailto:projectdelivery@seasensesoftwares.com">projectdelivery@seasensesoftwares.com</Link></p>
                </div>
               
            </div>
        </div>
        </div>
        <div className='conatct_sales_card_div'>
           <img src={contsct_vdo_1} alt=""/>
        </div>
    </div>
   </div>
 <Whatsapp/> 
   <Scrolltop/>
   <Footer/>
   </>
  )
}

export default Contact