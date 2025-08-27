"use client";
import React, { useState } from 'react';

export default function BookingPage() {
	const [form, setForm] = useState({
		route_id: '',
		sacco_id: '',
		direction: 'TO_TOWN',
		road: 'ANY',
		time: '08:00:00',
		busId: '',
		seatNumber: '',
		travelDate: ''
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setError('');
		setSuccess('');
		try {
			const token = localStorage.getItem('matgoToken');
			const res = await fetch('https://f83199766f3e.ngrok-free.app/api/booking', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': token ? `Bearer ${token}` : ''
				},
				body: JSON.stringify(form)
			});
			const data = await res.json();
			if (!res.ok) {
				setError(data.error || 'Booking failed');
			} else {
				setSuccess('Booking successful!');
			}
		} catch (err) {
			setError('Network error');
		}
		setLoading(false);
	};

	return (
		<div style={{ maxWidth: 400, margin: '2rem auto', padding: 20, border: '1px solid #eee', borderRadius: 8 }}>
			<h2>Book a Trip</h2>
			<form onSubmit={handleSubmit}>
				<label>Route ID:<br />
					<input name="route_id" value={form.route_id} onChange={handleChange} required />
				</label><br />
				<label>Sacco ID:<br />
					<input name="sacco_id" value={form.sacco_id} onChange={handleChange} required />
				</label><br />
				<label>Direction:<br />
					<select name="direction" value={form.direction} onChange={handleChange} required>
						<option value="TO_TOWN">TO_TOWN</option>
						<option value="FROM_TOWN">FROM_TOWN</option>
					</select>
				</label><br />
				<label>Road:<br />
					<select name="road" value={form.road} onChange={handleChange} required>
						<option value="ANY">ANY</option>
						<option value="NGONG_RD">NGONG_RD</option>
						<option value="BYPASS">BYPASS</option>
					</select>
				</label><br />
				<label>Time (HH:MM:SS):<br />
					<input name="time" value={form.time} onChange={handleChange} required />
				</label><br />
				<label>Bus ID:<br />
					<input name="busId" value={form.busId} onChange={handleChange} required />
				</label><br />
				<label>Seat Number:<br />
					<input name="seatNumber" value={form.seatNumber} onChange={handleChange} required />
				</label><br />
				<label>Travel Date:<br />
					<input name="travelDate" type="date" value={form.travelDate} onChange={handleChange} required />
				</label><br />
				<button type="submit" disabled={loading}>{loading ? 'Booking...' : 'Book Trip'}</button>
			</form>
			{error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
			{success && <div style={{ color: 'green', marginTop: 10 }}>{success}</div>}
		</div>
	);
}
