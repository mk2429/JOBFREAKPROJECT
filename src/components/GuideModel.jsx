import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
export default function GuideModal(props) {
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
                    <h2 className='display-6 text-center '>Guide <AlignHorizontalLeftIcon fontSize='4vmin'/></h2>
                        
                        <div style={{ width: "100%" }}>

                            <div  className="d-flex align-items-center flex-column " >
<p style={{textAlign:"center",marginTop:"20px"}}>Our guide section serves as a valuable resource to help you navigate through our products and services effortlessly. Whether you are a new customer or a long-time client, this section provides step-by-step instructions, tips, and best practices to optimize your experience. From installation guides to troubleshooting common issues, we aim to empower you with the knowledge and tools needed to make the most out of our offerings. Additionally, you can find FAQs, video tutorials, and downloadable resources to further assist you. We are here to support you every step of the way.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}























