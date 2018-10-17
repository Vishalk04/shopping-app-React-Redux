import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OrderList from './containers/OrderList'

class App extends Component {
  render() {
    return (
      <div>
      <OrderList/>
  <hr/>
     <h2>Order Details</h2>
  <hr/>

</div>
    );
  }
}

export default App;
