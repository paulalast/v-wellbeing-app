import DailySelfCarePlan from "./DailySelfCarePlan"
import SelfCareRituals from "./SelfCareRituals"

function Main() {
	return (
		<div className='flex 2xl:flex-row xl:flex-row lg:flex-row flex-col p-6'>
			<DailySelfCarePlan />
			<SelfCareRituals />
			
		</div>
	)
}

export default Main


