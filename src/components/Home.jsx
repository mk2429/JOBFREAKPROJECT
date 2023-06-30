import React from 'react'
import Navbar from './Navbar'
export default function Home() {
    const MODAL_STYLES = {
        position: "fixed",
        top: "0",
        height: '100vh',
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
    };
    return (
        <div>
            <Navbar />
            <div style={MODAL_STYLES}>
                <div className=" d-flex justify-content-center align-items-center " style={{ minHeight: "85%" }}>


                    <div className='d-flex justify-content-center align-items-center flex-column, mt-5 ' style={{ background: "#F2F2F2", width: "80%", minHeight: "85vh", borderRadius: "30px", position: "relative" }}>
                        {/* <CancelIcon style={{ position: "absolute", top: "15px", right: "15px", color: "black" }} onClick={props.onClose} /> */}

                        <div className="blog-post d-flex justify-content-center align-items-center flex-row flex-wrap w-75 bg-info" style={{ padding: "10px", borderRadius: "30px" }} >
                            <h2 className='display-6 text-center '>Home </h2>

                            <div style={{ width: "100%" }}>

                                <div className="d-flex align-items-center flex-column " >
<p style={{ textAlign: "justified", marginTop: "20px" }}>Welcome to our website! This is the home section where you can find information about our company and services. We strive to provide high-quality products and excellent customer service. We take pride in our customer-centric approach and aim to exceed your expectations at every turn. Explore our website to learn more about our wide range of products and services. Feel free to explore the other sections for more details.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
