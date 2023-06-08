import MiniSectionHeader from "./MiniSectionHeader"

function TodaysFocus({ miniTitle }) {
	const focus = [
		{ id: "focus1", placeholder: "What am I going to focus today..." },
		{ id: "focus2", placeholder: "" },
		{ id: "focus3", placeholder: "" },
		{ id: "focus4", placeholder: "" },
	]
	return (
		<>
		<div className='col-span-1 row-span-1'>
			<MiniSectionHeader miniTitle="Today's focus" />
			<ul className='mx-2 my-2 rounded-sm bg-tertiary flex flex-col'>
				{focus.map(focus => (
					<li className='w-full px-4 flex py-3' key={focus.id}>
						<label htmlFor={focus.id} className='w-full flex pb-2 items-center'>
							<input type='checkbox' id={focus.id} className='ml-1' />
							<input
								type='text'
								id={`${focus.id}text`}
								placeholder={focus.placeholder}
								className='flex-grow ml-3 bg-tertiary font-sans border-b-2 border-dotted border-white tracking-wider italic	'
							/>
						</label>
					</li>
				))}
			</ul>
		</div>
		</>
	)
}
export default TodaysFocus
