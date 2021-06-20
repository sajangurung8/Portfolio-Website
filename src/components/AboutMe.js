import React, {Component} from 'react';
import DisplayHistory from "./DisplayHistory";
import {Link} from 'react-router-dom'
import '../css/App.css';
import {Button, Row, Col} from 'react-bootstrap'

class AboutMe extends Component{
    render(){
      return (
        <>
        <h1>Namaste</h1>
        <p>I am a first generation Nepali American currently residing in Puyallup, Washington. I was fascinated by Computers and Programming languages early in my life. Learning about modern technologies and ways to efficiently solving problem interests me the most. I am also an Active duty Soldier scheduled to transition October of 2021. In the Army I am a Apache Helicopter Mechanic. Although my job in the Army was not related to Computer or programming, I acquired a lot of soft skills during my 6 years of service. Time management, servant leadership, resiliency, troubleshooting are few of the soft skills. Check out my resume under the Resume tab and click the button bellow to read my story.
        </p>
        <Link to="/aboutme/story"><Button variant="dark">My Story</Button></Link><br/><br/>
        <Row>
        <Col><img src="./images/namaste.jpg" height="200px" width="320px"/></Col>
        <Col><h6 className="nam">Namaste is how we greet in Nepal, it is a gesture of welcome and could mean both hello or goodbye. I join both my palms with respect and gratitue for taking your time to browse through my website. Real meaning of Namaste is "I bow to the devine in you".</h6>
        </Col></Row>
        <DisplayHistory/>

        </>
      )
    }
}

export default AboutMe;
