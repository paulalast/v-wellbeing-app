import DailyHydration from "./DailyHydration"
import SelfCareChecklist from "./SelfCareChecklist"
import MoodTracker from "./MoodTracker"
import Calendar from "./Calendar"
function SelfCareRitualsMain() {
	return (
		<div className='min-full mx-2 flex flex-col '>
			<SelfCareChecklist />
			<DailyHydration />
			<MoodTracker />
			<Calendar />
		</div>
	)
}
export default SelfCareRitualsMain
