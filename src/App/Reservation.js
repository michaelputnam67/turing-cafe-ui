import React from 'react';
import './reservation.css'

const Reservation = ({ reservation }) => {
	return (
		<div key={reservation.id} className='reservation'>
			<h2 className='name' >{reservation.name}</h2>
			<p className='date' >{reservation.date}</p>
			<p className='time' >{reservation.time}</p>
			<p className='guest-number' >{reservation.number}</p>
			<button className='cancel' >Cancel</button>
		</div>
	)
}

export default Reservation