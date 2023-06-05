import MiniSectionHeader from "./MiniSectionHeader"

function GratitudeList(miniTitle) {
	const gratitudes = [
		{ id: "gratitude1", placeholder: "I'm grateful for..." },
		{ id: "gratitude2", placeholder: "" },
		{ id: "gratitude3", placeholder: "" },
		{ id: "gratitude4", placeholder: "" },
		{ id: "gratitude5", placeholder: "" },
	]

	return (
		<div className='col-span-2 row-span-1'>
			<MiniSectionHeader miniTitle='Gratitude List' />

			<ul className=' mx-2  rounded-sm bg-tertiary flex flex-col'>
				{gratitudes.map(gratitude => (
					<li className='w-full px-4 flex py-2'>
						<input
							type='text'
							id={`${gratitude.id}text`}
							placeholder={gratitude.placeholder}
							className='flex-grow ml-3 bg-tertiary font-sans border-b-2 border-dotted border-white tracking-wider italic'
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default GratitudeList
