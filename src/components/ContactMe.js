import React, {Component} from 'react';
import '../css/App.css';
import emailjs from "emailjs-com";
import {Container, Row, Col, Image} from 'react-bootstrap'
import {SiLinkedin} from "react-icons/si"


class ContactMe extends Component{

    render(){
      return (
        <>
        <h1>Contact me</h1>
          <Container>
            <Row><Col><Row><div><Image id="headshot" src="images/hs.jpg" roundedCircle/></div></Row><Row>
            <div className= "message">
              <p>
I am glad you took your precious time to check out my website. My projects are how I am learning about the web and Software Development so I am always open to feedbacks.</p>
<p>Click on this <a href="https://www.linkedin.com/in/sajan-gurung-08/"><SiLinkedin id="lin"/></a> icon to find me on linkedin.</p>
            </div></Row></Col><Col>
        <form onSubmit ={sendEmail}>

        <div className="form-group">
          <label className="exampleInputName2"> Full Name </label>
          <input type="text" placeholder="Your Name" name="name"/>
        </div><br/>
        <div className="form-group">
          <label className="exampleInputEmail">Your Email</label>
          <input type="text" placeholder="Example@email.com" name="contact"/>
        </div><br/>
        <div width="25vh">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Your Message" name="message"/>
          </div><br/>
          <input type="submit" className = "btn btn-primary"value="Submit"></input>

        </form></Col></Row></Container>

        </>
      )
    }
}

function sendEmail(e){
  e.preventDefault();

emailjs.sendForm('service_6d0rr5a', 'email', e.target, 'user_e6qgH31YwraAAInmPoWZ5')
.then((result) => {
    console.log(result.text);
}, (error) => {
    console.log(error.text);
});
e.target.reset();
}

export default ContactMe;
