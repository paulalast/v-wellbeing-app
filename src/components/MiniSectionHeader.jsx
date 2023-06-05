function MiniSectionHeader({ miniTitle }) {
	return (
		<div className="w-auto mx-2 my-2 rounded-sm bg-secondary flex justify-center items-center">
			<h1 className='uppercase 2xl:text-xl max-2xl:text-xl max-md:text-xs py-2 font-serif text-tertiary tracking-widest font-bold'>
				{miniTitle}
			</h1>
		</div>
	)
}
export default MiniSectionHeader
