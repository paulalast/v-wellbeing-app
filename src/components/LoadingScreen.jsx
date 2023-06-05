import { useEffect, useState } from "react"
import Lottie from "lottie-react"
import bird from "./bird.json"

function LoadingScreen() {
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setLoaded(true)
		}, 3000)
	}, [])

	return (
		<div
			className={`loading-screen w-screen h-screen flex items-center flex-col text-center justify-center bg-secondary ${
				loaded ? "slide-fade-out" : "slide-fade-in"
			}`}
		>
			<h1 className='2xl:text-8xl xl:text-7xl lg:text-6xl md:text-6xl sm:text-5xl max-sm:text-4xl font-serif font-bold text-primary tracking-wide flex flex-col leading-relaxed leading-7	 '>
				<span className='tracking-wider bg-clip-text text-transparent  leading-relaxed	tracking-widest	italic	bg-gradient-to-r from-tertiary to-orange-200 left-slide-fade-in'>
					WellBeing
				</span>

				<span className='tracking-wider italic text-tertiary right-slide-fade-in'>
					App
				</span>
			</h1>
			<div className='p-0 m-0 2xl:w-80 xl:w-60 lg:w-56 md:w-44 sm:w-40 max-sm:w-36'>
				<Lottie
					animationData={bird}
					loop={true}
					autoplay={true}
					controls={false}
				/>
			</div>
		</div>
	)
}

export default LoadingScreen
