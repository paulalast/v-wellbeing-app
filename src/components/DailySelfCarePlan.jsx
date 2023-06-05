import SectionHeader from "./SectionHeader"
import DailySelfCarePlanMain from "./DailySelfCarePlanMain"

function DailySelfCarePlan() {
	return (
		<div className='2xl:w-1/2 xl:w-1/2 lg:w-1/2 h-full'>
			<SectionHeader
				imgSrc='clock128.png'
				imgAlt='hand-drawn clock icon'
				sectionTitle='Daily Self-Care Plan'
				imgSrc2='pen128.png'
				imgAlt2='hand-drawn pen icon'
			/>
			<DailySelfCarePlanMain />
		</div>
	)
}
export default DailySelfCarePlan

// w-full 2xl:w-1/2 mx-2 my-4 bg-primary border-2 border-white
