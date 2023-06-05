import MiniSectionHeader from "./MiniSectionHeader"
import Lottie from "lottie-react"
import { useState } from "react"
import waterAnimation from "./water1.json"
import emptyAnimation from "./empty.json"
function DailyHydration() {
	const [glasses, setGlasses] = useState([
		{ id: 0, isFilled: false },
		{ id: 1, isFilled: false },
		{ id: 2, isFilled: false },
		{ id: 3, isFilled: false },
		{ id: 4, isFilled: false },
		{ id: 5, isFilled: false },
	])
	const handleClick = id => {
		const newGlasses = glasses.map(glass => {
			if (glass.id === id) {
				return {
					...glass,
					isFilled: !glass.isFilled,
				}
			} else {
				return glass
			}
		})
		setGlasses(newGlasses)
	}

	return (
		<div>
			<MiniSectionHeader miniTitle='Daily Hydration' />
			<div className=' h-fit mx-2 my-1.5 px-4 rounded-sm h-52 bg-tertiary flex justify-self-center justify-center lg:flex-wrap  max-sm:flex-wrap	'>
				{glasses.map(glass => (
					<div
						className=' w-32 p-2 w-full mx-2 flex lg:w-24 md:w-24 max-sm:w-24 justify-items-center '
						key={glass.id}
						onClick={() => handleClick(glass.id)}
					>
						<Lottie
							animationData={glass.isFilled ? waterAnimation : emptyAnimation}
							loop={false}
							autoplay={true}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default DailyHydration
