import React from 'react';

function Contactus() {
    return (
        <>  
            <div  style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "40px" }}><b>Contact US</b></h2>
            <br />
            <h2 style={{ paddingLeft:"15px",paddingRight:"15px",fontSize:"25px", color: "#5E585A" }}>
                We know that choosing the right institute or a career path can be a difficult and tiring process, and that's why
                we're here for you. Contact us to ask any questions, we'll respond over email as soon as possible!
            </h2>
            </div>
            <br />
            <div style={{ textAlign: "center" }}>
                <center><img style={{width: "90px"}} src="https://www.masaischool.com/images/contact/mail.svg" alt="mail" /></center>
                <h2 style={{ fontSize: "30px" }}><b>Write to us at</b></h2>
                <a href="mailto:admissions@masaischool.com" style={{ fontSize: "30px" }}>admissions@masaischool.com</a>
            </div>
            <hr style={{ fontSize: "10px" }} />
        </>
    );
}

export default Contactus;
