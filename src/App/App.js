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

  postReservations = (data) => {
    apiCalls.postReservation(data).then(() => {
      apiCalls.getReservations().then(data => this.setState({
        reservations: data
      }))
    })
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
        <Form postReservations={this.postReservations} />
        <Reservation_Container reservations={this.state.reservations} />
      </div>
    )
  }
}

export default App;
