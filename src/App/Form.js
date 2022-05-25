import React, { Component } from 'react'
import './form.css'

export default class Form extends Component {
	constructor () {
		super()
		this.state = {
			name: '',
			numberOfGuests: '',
			date: '',
			time: '',
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}


	render() {
		return (
			<form className='resy-form' onSubmit={(event) => this.props.postReservations(this.state, event)}>
				<input
					type='text'
					name='name'
					value={this.state.name}
					onChange={this.handleChange}
					placeholder='Name'
					required={true}
				/>
				<input
					type='date'
					name='date'
					min='2022-05-25'
					max='2022-12-31'
					value={this.state.date}
					onChange={this.handleChange}
					placeholder='Date (mm/dd)'
					required={true}
				/>
				<input
					type='time'
					name='time'
					value={this.state.time}
					onChange={this.handleChange}
					placeholder='Time'
					pattern="[0-9]{2}:[0-9]{2}"
					required={true}
				/>
				<input
					type='number'
					name='numberOfGuests'
					value={this.state.numberOfGuests}
					onChange={this.handleChange}
					placeholder='Number of Guests'
					required={true}
				/>
				<button type='submit'  >
					Make Reservation
				</button>
			</form>
		)
	}
}

