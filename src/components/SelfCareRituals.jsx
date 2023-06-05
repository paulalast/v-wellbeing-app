import SectionHeader from "./SectionHeader"
import SelfCareRitualsMain from "./SelfCareRitualsMain"
function SelfCareRituals() {
	return (
		<div className='2xl:w-1/2 xl:w-1/2 lg:w-1/2 h-full'>
			<SectionHeader
				imgSrc='cake128.png'
				imgAlt='hand-draw cake icon'
				sectionTitle='Self-care rituals'
				imgSrc2='lipstick128.png'
				imgAlt2='hand-draw lipstick icon'
			/>
			<SelfCareRitualsMain />
		</div>
	)
}
export default SelfCareRituals

// /w-full 2xl:w-1/2 mx-2 my-4 bg-primary border-2 border-white
