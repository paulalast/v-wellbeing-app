import MiniSectionHeader from "./MiniSectionHeader"
import { useState } from "react"
function SelfCareChecklist() {
	const [checklist, setChecklist] = useState([
		{ id: "checkitem", value: "Wake up early" },
		{ id: "checkitem2", value: "Healthy breakfast" },
		{ id: "checkitem3", value: "Moment to relax & coffee" },
		{ id: "checkitem4", value: "Daily gratitude list" },
		{ id: "checkitem5", value: "Make plan for the next day" },
		{ id: "checkitem6", value: "" },
		{ id: "checkitem7", value: "" },
		{ id: "checkitem8", value: "" },
		{ id: "checkitem9", value: "" },
		{ id: "checkitem10", value: "" },
	])

	const onInputChange = (id, newValue) => {
		const updatedChecklist = checklist.map(checkitem =>
			checkitem.id === id ? { ...checkitem, value: newValue } : checkitem
		)
		setChecklist(updatedChecklist)
	}
	return (
		<div className=''>
			<MiniSectionHeader miniTitle={"Self-care checklist"} />

			<ul className=' mx-2 my-2 rounded-sm bg-tertiary 2xl:grid xl:grid lg:grid grid-cols-2 grid-rows-5 grid-flow-col gap-0'>
				{checklist.map(checkitem => (
					<li className='w-full px-4 flex py-3 ' key={checkitem.id}>
						<label
							htmlFor={checkitem.id}
							className='w-full flex pb-2 items-center'>
							<input type='checkbox' id={checkitem.id} className='ml-1' />
							<input
								value={checkitem.value}
								type='text'
								id={`${checkitem.id}text`}
								className='flex-grow ml-3 bg-tertiary font-sans border-b-2 border-dotted border-white tracking-wider italic'
								onChange={e => onInputChange(checkitem.id, e.target.value)}
							/>
						</label>
					</li>
				))}
			</ul>
		</div>
	)
}

export default SelfCareChecklist
