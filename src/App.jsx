import { useState, useEffect } from "react"
// import "./App.css"
import "./index.css"
import "./checkbox.css"
import LoadingScreen from "./components/LoadingScreen"
import Main from "./components/Main"

function App() {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 3000)
	}, [])

	return (
		<div className='App bg-primary min-w-screen h-full 	'>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<>
					<Main className='bg-primary' />
				</>
			)}
		</div>
	)
}

export default App
