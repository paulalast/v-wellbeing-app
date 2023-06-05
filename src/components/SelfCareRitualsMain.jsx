import DailyHydration from "./DailyHydration"
import SelfCareChecklist from "./SelfCareChecklist"
import MoodTracker from "./MoodTracker"

function SelfCareRitualsMain() {
	return (
		<div className='min-full mx-2 flex flex-col '>
			<SelfCareChecklist />
			<DailyHydration />
			<MoodTracker />
		</div>
	)
}
export default SelfCareRitualsMain
