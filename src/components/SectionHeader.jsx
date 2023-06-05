function SectionHeader({ sectionTitle, imgAlt, imgSrc, imgSrc2, imgAlt2 }) {
	return (
		<div className='h-30 flex flex-row justify-evenly items-center py-2 px-8 border-b-2'>
			<img src={imgSrc} alt={imgAlt} className='w-16 h-16 object-contain' />
			<h1 className='font-serif px-4 2xl:text-4xl md:text-3xl sm:text-2xl text-grey tracking-wide uppercase'>
				{sectionTitle}
			</h1>
			<img src={imgSrc2} alt={imgAlt2} className='w-16 h-16 object-contain' />
		</div>
	)
}
export default SectionHeader
