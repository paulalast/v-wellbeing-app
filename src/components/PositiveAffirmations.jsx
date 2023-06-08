import MiniSectionHeader from "./MiniSectionHeader"
import { useState, useEffect } from "react"

function PositiveAffirmations() {
	const [affirmation, setAffirmation] = useState("")

	const fetchNewAffirmation = () => {
		fetch("https://type.fit/api/quotes")
			.then(response => response.json())
			.then(data => {
				const randomIndex = Math.floor(Math.random() * data.length)
				setAffirmation(data[randomIndex].text)
			})
	}

	useEffect(() => {
		fetchNewAffirmation()
	}, [])

	const handleAffirmationChange = e => {
		setAffirmation(e.target.value)
	}

	return (
		<div className='col-span-1 row-span-1'>
			<MiniSectionHeader miniTitle='Positive Affirmations' />
			<div className='relative py-6 p-2 bg-tertiary mx-2'>
				<textarea
					name='text'
					id='affirmations'
					className='resize-none p-2 italic text-center items-center bg-tertiary font-sans text-md flex rounded-sm w-full h-40'
					value={affirmation}
					onChange={handleAffirmationChange}
				></textarea>
				<button className='absolute lotus' onClick={fetchNewAffirmation}>
					<img className='w-14' src='lotus.png' alt='lotus flower' />
				</button>
			</div>
		</div>
	)
}

export default PositiveAffirmations
