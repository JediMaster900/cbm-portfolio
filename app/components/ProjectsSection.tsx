import Image from 'next/image';

export default function ProjectsSection() {
	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Featured Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					<div key="Looking For Group" className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
						<div className="aspect-video bg-gray-700 relative">
							<Image src={`/lfg.jpg`} alt={`Project Looking For Group`} fill className="object-cover" />
						</div>
						<div className="p-4 sm:p-6">
							<h3 className="text-base sm:text-lg font-semibold text-white mb-2">Looking For Group</h3>
							<p className="text-sm sm:text-base text-gray-300 mb-4">A website that allows students to post projects they want to make and find others with the right skillsets. Created using React and MySQL. </p>
						</div>
					</div>
					<div key="Glave" className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
						<div className="aspect-video bg-gray-700 relative">
							<Image src={`/glave.jpg`} alt={`Project Glave`} fill className="object-cover" />
						</div>
						<div className="p-4 sm:p-6">
							<h3 className="text-base sm:text-lg font-semibold text-white mb-2">Glave</h3>
							<p className="text-sm sm:text-base text-gray-300 mb-4">A site where high school seniors set program goals, make student log entries, track progress, notify mentors, and build a public portfolio. It was created with Python, the Flaskini framework, and PostgreSQL.</p>
							<div className="flex gap-2">
								<a target="_blank" rel="noopener noreferrer" href="https://glave.io/" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
									View Site →
								</a>
							</div>
						</div>
					</div>
					<div key="Sparky" className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
						<div className="aspect-video bg-gray-700 relative">
							<Image src={`/volt.jpg`} alt={`Project Sparky`} fill className="object-cover" />
						</div>
						<div className="p-4 sm:p-6">
							<h3 className="text-base sm:text-lg font-semibold text-white mb-2">Sparky</h3>
							<p className="text-sm sm:text-base text-gray-300 mb-4">A website that allows students to post projects they want to make and find others with the right skillsets. Created using React and MySQL. </p>
						</div>
					</div>
					<div key="Bitter" className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
						<div className="aspect-video bg-gray-700 relative">
							<Image src={`/bitter.jpg`} alt={`Project Bitter`} fill className="object-cover" />
						</div>
						<div className="p-4 sm:p-6">
							<h3 className="text-base sm:text-lg font-semibold text-white mb-2">Bitter</h3>
							<p className="text-sm sm:text-base text-gray-300 mb-4">A Twitter clone created using React, MongoDB, and Mongoose. An exercise of backend skills.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
