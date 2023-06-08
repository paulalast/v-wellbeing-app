import { useState } from "react"
import MiniSectionHeader from "./MiniSectionHeader"
import Lottie from "lottie-react"
import happyAnimation from "./happy.json"
import inLoveAnimation from "./inlove.json"
import frustratedAnimation from "./frustrated.json"
import cryingAnimation from "./crying.json"
import sleepyAnimation from "./sleepy.json"
import neutralAnimation from "./neutral.json"
import coolAnimation from "./cool.json"

const moodAnimations = [
	{
		id: 0,
		animationData: frustratedAnimation,
		loop: true,
		autoplay: true,
		play: false,
	},
	{
		id: 1,
		animationData: cryingAnimation,
		loop: true,
		autoplay: true,
		play: false,
	},
	{
		id: 2,
		animationData: sleepyAnimation,
		loop: true,
		autoplay: true,
		play: false,
	},
	{
		id: 3,
		animationData: neutralAnimation,
		loop: true,
		autoplay: true,
		play: false,
	},
	{
		id: 4,
		animationData: happyAnimation,
		loop: true,
		autoplay: true,
		play: false,
	},
	{
		id: 5,
		animationData: inLoveAnimation,
		loop: true,
		autoplay: true,
		play: false,
	},
	{
		id: 6,
		animationData: coolAnimation,
		loop: true,
		autoplay: true,
		play: false,
	},
]

function MoodTracker() {
	const [chosenMoodId, setChosenMoodId] = useState(3)
	const handleAnimaClick = id => {
		setChosenMoodId(id === chosenMoodId ? null : id)
	}
	return (
		<>
			<div className='my-4 pb-0 h-fit'>
				<MiniSectionHeader miniTitle='Mood tracker' />
				<div className=' m-2 px-4 rounded-sm 2xl:h-56 bg-tertiary flex justify-self-center justify-center max-lg:flex-wrap sm:h-fit'>
					{moodAnimations.map(animation => (
						<div
							className={`'w-20 m-2 pt-4 max-lg:w-24 transform hover:scale-125 transition duration-300 ease-in-outh-fit ${
								animation.id !== chosenMoodId ? "greyscale" : ""
							}`}
							key={animation.id}
							onClick={() => handleAnimaClick(animation.id)}
						>
							<Lottie animationData={animation.animationData} />
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default MoodTracker
