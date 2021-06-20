import React, {Component} from 'react';
import '../css/App.css';
import Footer from './Footer'
import {Link} from 'react-router-dom'
import {Card, Row, Col, Container, Button, Image} from 'react-bootstrap'
import MyCard from './MyCard'

class Home extends Component{
  render(){
    return(
      <>
      <Container>

       <Row>
        <div><h1>{greet()}!</h1></div>
       </Row>
        <div className="row">
        <Row><section>
        <p>My name is Sajan.<br/> I am a Software Developer based in Puyallup, Washington and Welcome to my website.<br/>
        Browse through this website to learn more about me and my side projects. Also feel free to submit feedbacks and comments using the contact me tab.<br/>
        Thank you for checking out my Website.</p>
        </section>
        <section id="learn">
        <Link to="aboutme"><Button variant="dark">Learn more...</Button></Link>
        </section></Row><br/><section>
      </section>
        </div></Container>
        <br/>
        <Container>
        <section className= "CardContainer">
        <Row className="justify-content-md-center">
        <MyCard AppName="No Hike 2 Reserve" Dis="A full stact website for tracking room reservations for a hotel in Nepal"/>
        <MyCard AppName="It Scrapes!" Dis="A webscraping App using python"/>
        <MyCard AppName="Visalgo" Dis="An WebApp to visualize algorithms in action."/>
        </Row></section>
        </Container><br/><br/>
        <Container><Row><Col><h3>I have experience programming in:</h3></Col>
        </Row><Row>
        <Col><img src="/images/csharp.png" height="60px" width="60px"/></Col>
        <Col><img src="/images/java.png" height="60px" width="60px"/></Col>
<Col><img src="/images/python.png" height="60px" width="60px"/></Col><Col><img src="/images/JavaScript.png" height="60px" width="60px"/></Col>
<Col><img src="/images/html.png" height="60px" width="60px"/></Col><Col><img src="/images/css.png" height="60px" width="60px"/></Col>
        </Row></Container>



      </>
    )
  }
}

function greet(){
  var hour = new Date().getHours();
  var greeting;
  if(hour>=0 && hour <12)
    greeting ="Good Morning";
  else if (hour >= 12 && hour <= 18)
    greeting = "Good Afternoon";
  else
    greeting = "Good Evening"
  return greeting;
}
export default Home;
