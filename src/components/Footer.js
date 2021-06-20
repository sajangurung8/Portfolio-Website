import '../css/App.css';
import React, {Component} from 'react';


class Footer extends Component{

  render(){
    return(
      <><footer>
      <h6>© Copyright {new Date().getFullYear()}. All rights reserved.</h6>
      <h5>Sajan Gurung
</h5></footer>
      </>
    )
  }
}

export default Footer;
