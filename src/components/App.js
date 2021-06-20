import React, {Component} from 'react';
import '../css/App.css';
import {Link, Routes, Route} from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import Story from './Story'
import AboutMe from './AboutMe';
import Resume from './Resume';
import ContactMe from './ContactMe';
import Footer from "./Footer";
import {Container,Row, Col} from 'react-bootstrap'
import TimeTree from './TimeTree'

class App extends Component{
  render(){
    return (
      <>
      <Container fluid>
      <Row>
      <nav id="navigation-bar">
        <div>
        <Link className="hyper" to="/">Home</Link>
        <Link className="hyper" to="projects">Projects</Link>
        <Link className="hyper" to="aboutme">About Me</Link>
        <Link className="hyper" to="resume">Resume</Link>
        <Link className="hyper" to="contactme">Contact Me</Link>
        </div><div>
      </div></nav>
      </Row>
      <div id="bg">
      <Row className="justify-content-md-center">
      <div id="render-area">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/contactme" element={<ContactMe/>}/>
        <Route path="aboutme/story" element={<Story/>}/>
      </Routes>
      </div>
      </Row></div></Container>

      </>
    );
  }
}
export default App;
