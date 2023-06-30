import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
export default function InfoModal(props) {
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
                    <h2 className='display-6 text-center '>Information <InfoIcon/></h2>
                        
                        <div style={{ width: "100%" }}>

                            <div  className="d-flex align-items-center flex-column " >

                              <p style={{textAlign:"center",marginTop:"20px"}}>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}























