import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/App.css';
import {Alert, DropdownButton, Dropdown, Row, Col, Button} from 'react-bootstrap'

class DisplayHistory extends Component{

  constructor(){
    super();
    this.state = {
      myName: 'Sajan Gurung',
      myHistory:[]
    }
  }

  componentDidMount(){
  fetch("./data.json")
    .then(response => response.json())
    .then(result => {
      const history = result.map(item => {
        return item;
      })
      this.setState({
        myHistory: history
      });
    });
  }



  render(){

    const listItems = this.state.myHistory.map(item => {
      return item;
    });


    return(
      <>
      <h3>My past 6 years. </h3>
      <Row className="justify-content-md-center">
      <Col xs lg ="4"><label><strong>Select a year</strong></label></Col>
      <Col xs lg="2"><select className="form-select" id="year" defaultValue="2021">
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="tree">Tree</option>
      </select></Col><Col xs lg="4"><Button variant="dark">Go!</Button></Col>
      <script>

        </script>
      }

      </Row><br/>
      <div id="wid"></div>
      </>
    )
  }
}

export default DisplayHistory;
