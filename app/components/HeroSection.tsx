'use client';

import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<div className="text-center">
				<div className="mb-6 sm:mb-8">
					<Image src="/cbm-photo-head.jpg" alt="Profile Picture" width={120} height={120} unoptimized={true} className="rounded-full scale-125 mx-auto border-4 border-gray-700 shadow-lg" />
				</div>
				<h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Charles B. Mendes</h1>
				<p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">Full Stack Developer</p>
				<p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
					Hi! I&apos;m a full‑stack web developer crafting responsive, scalable applications using modern front‑end frameworks and robust back‑end services to solve real‑world problems and drive user engagement.
				</p>
			</div>
		</section>
	);
}
