import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
export default function ContactModal(props) {
    const MODAL_STYLES= {
        position: "fixed",
        top: "0",
        zIndex: "10",
        height: '100vh',
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
      };


  
 
    return (
        <div style={MODAL_STYLES}>
            <div className=" d-flex justify-content-center align-items-center " style={{minHeight:"85%"}}>
                
                
                <div className='d-flex justify-content-center align-items-center flex-column, mt-5 ' style={{ background: "#F2F2F2", width: "80%", minHeight: "85vh", borderRadius: "30px", position: "relative" }}>
                    <CancelIcon style={{ position: "absolute", top: "15px", right: "15px", color: "black" }} onClick={props.onClose} />

                    <div className="blog-post d-flex justify-content-center align-items-center flex-row flex-wrap w-75"  >
                    <h2 className='display-6 text-center '>Contact <ContactPageIcon fontSize='4vmin'/></h2>
                        
                        <div style={{ width: "100%" }}>

                            <div  className="d-flex align-items-center flex-column " >
<p style={{textAlign:"center",marginTop:"20px"}}>For any inquiries or assistance, please don't hesitate to get in touch with us. You can reach us through the following contact information:

<br/><LocalPhoneIcon/> Phone: +1 123-456-7890
<br/><EmailIcon/> Email: info@example.com
<br/><HomeIcon/>Address: 123 Main Street, City, Country</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}























