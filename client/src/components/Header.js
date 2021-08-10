import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Payments from './Payments';
class Header extends Component {
  renderContent(){
    console.log("log",this.props.auth)
    switch(this.props.auth){
      case null:
        return 
      case false:
        return <li><a href="http://localhost:5000/auth/google">Login with google</a></li>
      default:
        return <><li><Payments /></li>
        <li style={{margin: "0 10px"}}>Credits: {this.props.auth.credits}</li>
        <li><a href="http://localhost:5000/logout">Logout</a></li>
      </>
    }

  }
  render() {
    console.log(this.props)
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth?"/surveys":"/"} className="left brand-logo">
            Emaily
          </Link>
          <ul className="right">
            
            {this.renderContent()}
          
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStatetoProps({auth}){
  return {auth}
}
export default connect(mapStatetoProps)(Header);
