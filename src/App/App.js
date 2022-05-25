import React, { Component } from 'react';
import Reservation_Container from './Reservation_Container';
import Form from './Form';
import { apiCalls } from './apiCalls'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      error: '',
    }
  }

  componentDidMount() {
    apiCalls.getReservations().then(data => this.setState({
      reservations: data
    }))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <Reservation_Container reservations={this.state.reservations} />
      </div>
    )
  }
}

export default App;
