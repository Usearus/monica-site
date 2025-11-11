'use client';

import { useState } from 'react';
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	QuoteIcon,
} from '@radix-ui/react-icons';

const testimonials = [
	{
		quote: `I’ve been out of therapy for years and I still use the tools Monica taught me. When I first started, I thought therapy was just talking about stress and having someone listen. But with Monica, I realized she was quietly giving me strategies, reframes, and real skills I could actually use in my life.

Her approach is warm, supportive, and human. After every session, I left feeling lighter, more capable, and like I could actually live fully and authentically. I became less anxious, more open, and more confident. Therapy with her was truly pivotal. I used to feel overwhelmed going into a grocery store or getting on a plane, and now I’ve moved to my favorite city, spent nine months abroad, and even got an ESA pup.

I wanted a therapist who understood modern life, my culture, and didn’t need everything explained. Monica is for the girlies. She just gets it. The tools she gives you don’t disappear after therapy ends they stay with you for years.`,
		author: 'A (Previous Client)',
	},
	{
		quote: `I came to Monica struggling with anxiety tied to Autism-related symptoms. What stood out immediately was her knowledge, her energy, and how genuinely she shows up. With her, I learned that my uniqueness has strengths, and that needing accommodations is valid.

One of the biggest shifts was learning how to communicate my needs not just with her, but with my family and even my employer. I became confident asking for help and stopped feeling like I had to carry everything alone.

If you show up openly, Monica will meet you with patience, expertise, and real support. You’ll learn more about yourself than you ever thought possible.`,
		author: 'M (Previous Client)',
	},
	{
		quote: `I reached out to Monica because I felt like I’d hit a wall. I was drawn to her as a woman of color who would understand my experiences. She’s incredibly kind, but she also asks the hard questions that help you grow.

The biggest thing I learned was that a lot of the things I told myself weren’t actually true. Now I can analyze my thoughts before accepting them as facts about myself, other people, or situations. Monica supported me through some of my hardest seasons, and I don’t think I would’ve pushed through the same way without her.

If you want to change, and you’re willing to be challenged but supported the entire time, take the leap and work with Monica.`,
		author: 'S (Previous Client)',
	},
];

export default function Testimonials() {
	const [activeIndex, setActiveIndex] = useState(0);

	const showTestimonial = testimonials[activeIndex];

	const handlePrevious = () => {
		setActiveIndex((prev) =>
			prev === 0 ? testimonials.length - 1 : prev - 1,
		);
	};

	const handleNext = () => {
		setActiveIndex((prev) =>
			prev === testimonials.length - 1 ? 0 : prev + 1,
		);
	};

	return (
		<section className='bg-sage-light px-4 py-16'>
			<div className='max-w-7xl mx-auto'>
				<h2 className='text-4xl md:text-5xl font-serif text-primary text-center mb-12'>
					Client Testimonials
				</h2>

				<div className='max-w-4xl mx-auto'>
					<div className='relative md:px-16'>
						<button
							type='button'
							onClick={handlePrevious}
							className='hidden md:flex group absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border border-olivewood bg-beige text-primary transition-colors shadow-sm hover:bg-olivewood hover:text-primary-inverse'
							aria-label='Show previous testimonial'>
							<ChevronLeftIcon className='h-6 w-6 transition-colors duration-200 group-hover:text-primary-inverse' />
						</button>

						<div className='bg-white p-8 md:p-12 rounded-3xl shadow-sm'>
							<QuoteIcon
								className='w-12 h-12 text-sage mb-6'
								aria-hidden='true'
							/>
							<p className='text-base md:text-lg text-secondary italic leading-relaxed whitespace-pre-line'>
								{showTestimonial.quote}
							</p>
							<p className='text-base text-secondary font-medium mt-6'>
								- {showTestimonial.author}
							</p>
						</div>

						<button
							type='button'
							onClick={handleNext}
							className='hidden md:flex group absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border border-olivewood bg-beige text-primary transition-colors shadow-sm hover:bg-olivewood hover:text-primary-inverse'
							aria-label='Show next testimonial'>
							<ChevronRightIcon className='h-6 w-6 transition-colors duration-200 group-hover:text-primary-inverse' />
						</button>
					</div>

					<div className='mt-8 flex flex-col items-center gap-4 md:hidden'>
						<div className='flex items-center justify-center gap-2'>
							{testimonials.map((_, index) => {
								const isActive = index === activeIndex;
								return (
									<button
										key={index}
										type='button'
										onClick={() => setActiveIndex(index)}
										aria-label={`Show testimonial ${index + 1}`}
										aria-current={isActive}
										className={`h-2 rounded-full transition-all ${
											isActive
												? 'w-10 bg-primary'
												: 'w-6 bg-primary/30 hover:bg-primary/50'
										}`}
									/>
								);
							})}
						</div>
						<div className='flex items-center justify-center gap-4'>
							<button
								type='button'
								onClick={handlePrevious}
								className='w-32 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors'
								aria-label='Show previous testimonial'>
								<ChevronLeftIcon className='h-5 w-5' />
								<span>Previous</span>
							</button>
							<button
								type='button'
								onClick={handleNext}
								className='w-32 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors'
								aria-label='Show next testimonial'>
								<span>Next</span>
								<ChevronRightIcon className='h-5 w-5' />
							</button>
						</div>
					</div>

					<div className='hidden md:flex items-center justify-center gap-3 mt-8'>
						{testimonials.map((_, index) => {
							const isActive = index === activeIndex;
							return (
								<button
									key={index}
									type='button'
									onClick={() => setActiveIndex(index)}
									aria-label={`Show testimonial ${index + 1}`}
									aria-current={isActive}
									className={`h-2 rounded-full transition-all ${
										isActive
											? 'w-12 bg-primary'
											: 'w-7 bg-primary/30 hover:bg-primary/50'
									}`}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

