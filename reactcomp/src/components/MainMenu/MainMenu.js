import React, { Component } from 'react';
import { Link } from 'react-router-dom'


import { connect } from "react-redux";
import { updateUser } from "../../dux/reducer";
import Log from '../Log/Log';
import {
  Nav,
  Navbar,
  NavItem,
} from "react-bootstrap";


class MainMenu extends Component {
   constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        value: ""
      };
    }
  

    handleChange(e) {
      this.setState({ value: e.target.value });
    }

   render() {
      return (
        <div>
          <ul>
            <li><Link to="/shop">Shop</Link> </li>
            <li><Link to="/log">Log</Link> </li>
            <li><Link to="/cart">Cart</Link> </li>
          </ul>
        </div>
    );
   }
}

function mapStateToProps(state) {
   const { user } = state;
   return { user };
 }
 
 export default connect(mapStateToProps, { updateUser }) (MainMenu);

