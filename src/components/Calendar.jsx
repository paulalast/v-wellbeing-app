import React, { useEffect, useState } from "react"
import MiniSectionHeader from "./MiniSectionHeader"

function Calendar() {
	const API_KEY = "2e2c68f31db01a7a3bc9a418edc1ca3c0eb62b3a"
	const CAL_URL = `https://calendarific.com/api/v2/holidays?&api_key=${API_KEY}&country=US&year=2023`

	const [holiday, setHoliday] = useState("")
	const [description, setDescription] = useState("")
	const [error, setError] = useState(null)
	const [date, setDate] = useState()

	useEffect(() => {
		fetch(CAL_URL)
			.then(res => res.json())
			.then(data => {
				const today = new Date().toISOString().split("T")[0]
				const holidays = data.response.holidays
				const todayHoliday = holidays.find(h => h.date.iso === today)

				if (todayHoliday) {
					setDate(todayHoliday.date.iso)
					setHoliday(todayHoliday.name)
					setDescription(todayHoliday.description)
				} else {
					setDate(today)
					setHoliday("")
					setDescription("")
				}
			})
			.catch(error => {
				setError(error.message)
			})
	}, [])

	return (
		<div className='m-0'>
			<MiniSectionHeader miniTitle={"Calendar"} />
			<div className='h-fit mx-2 pb-2 my-1.5 px-4 rounded-sm h-52 bg-tertiary flex flex-col justify-self-center justify-center align-center'>
				<h3 className='m-1 text-center text-xl tracking-wider'>
					Date:
					<span className='font-black tracking-wider text-secondary'>
						{date}
					</span>
				</h3>
				{holiday ? (
					<>
						<p className='m-1 text-center italic tracking-wider text-xl'>
							Today we are celebrating: 
							<span className='italic font-black text-secondary bg-primary'> 
								{holiday}
							</span>
							!
						</p>
						<div className='m-1 text-center flex justify-center'>
							<p className='text-base italic tracking-wider flex-row'>
								{description}
							</p>
						</div>
					</>
				) : (
					<p className='m-2 text-center text-2xl italic tracking-wider'>
						No holiday today. Enjoy your day!
					</p>
				)}
			</div>
		</div>
	)
}

export default Calendar
