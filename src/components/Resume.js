import React, {Component} from 'react';
import '../css/App.css';

class Resume extends Component{
    render(){
      try{
      return (
        <>
        <div>
        <h1>Resume</h1>
        <iframe className="resume-frame" src="https://onedrive.live.com/embed?cid=7E16AB70855633AB&resid=7E16AB70855633AB%21114&authkey=ABHBOhhhPrKU3Sg&em=2" height="700" width="800" frameBorder="0" scrolling="no"></iframe>
        <br/>
        <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          </div>
        </>
      )}catch{
      }
    }

}

export default Resume;
