import React from 'react';
import "../assete/css/whatsapp.css";
import { Link } from 'react-router-dom';
import what_logo from "../assete/whtasapp/whatsapp_3670051.png";

const Whatsapp = () => {
  return (
   <>
    <div className='whatsapp_float' >
    <Link to="https://wa.me/8526700700">
        <img src={what_logo} alt="" style={{width:"50px"}} className='whatsapp_float_btn'></img>
    </Link>
</div>
   </>
  )
}

export default Whatsapp