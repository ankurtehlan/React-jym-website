import React from "react";

export default function Contact() {
    
    return(<div id="contact">
        <h1>CONTACT US</h1>
        <form>
            <input type="text" placeholder="Full Name"  required/>
            <input type="email" placeholder="Type Your E-Mail"  required/>
            <textarea name="message" cols="30" rows="10" placeholder="Write Here....."></textarea>
            <input type="submit" value= 'Send' />
        </form>
    </div>
    )}