import ListOfPriorities from "./ListOfPriorities"
import TodaysFocus from "./TodaysFocus"
import PositiveAffirmations from "./PositiveAffirmations"
import GratitudeList from "./GratitudeList"

function SelfCarePlanMain() {
	return (
		<div className='h-full mx-2 2xl:grid xl:grid grid-cols-2 grid-rows-3 '>
			<ListOfPriorities />
			<TodaysFocus />
			<PositiveAffirmations />
			<GratitudeList />
		</div>
	)
}

export default SelfCarePlanMain
