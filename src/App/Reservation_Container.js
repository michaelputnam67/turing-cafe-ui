import React from 'react';
import Reservation from './Reservation';
import './reservation_container.css';

const Reservation_Container = ({ reservations }) => {
	const reservationsCurrent = reservations.map((reservation) => {
			return (
				<Reservation reservation={reservation} key={reservation.id} />
			)
		})


	return (
		<div className='resy-container'>
			{reservationsCurrent}
		</div>
	)
}

export default Reservation_Container