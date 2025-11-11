'use client';

import { useState } from 'react';
import { QuoteIcon } from '@radix-ui/react-icons';

const testimonials = [
	{
		quote: `I’ve been out of therapy for years and I still use the tools Monica taught me. When I first started, I thought therapy was just talking about stress and having someone listen. But with Monica, I realized she was quietly giving me strategies, reframes, and real skills I could actually use in my life.

Her approach is warm, supportive, and human. After every session, I left feeling lighter, more capable, and like I could actually live fully and authentically. I became less anxious, more open, and more confident. Therapy with her was truly pivotal. I used to feel overwhelmed going into a grocery store or getting on a plane, and now I’ve moved to my favorite city, spent nine months abroad, and even got an ESA pup.

I wanted a therapist who understood modern life, my culture, and didn’t need everything explained. Monica is for the girlies. She just gets it. The tools she gives you don’t disappear after therapy ends they stay with you for years.`,
		author: 'A',
	},
	{
		quote: `I came to Monica struggling with anxiety tied to Autism-related symptoms. What stood out immediately was her knowledge, her energy, and how genuinely she shows up. With her, I learned that my uniqueness has strengths, and that needing accommodations is valid.

One of the biggest shifts was learning how to communicate my needs not just with her, but with my family and even my employer. I became confident asking for help and stopped feeling like I had to carry everything alone.

If you show up openly, Monica will meet you with patience, expertise, and real support. You’ll learn more about yourself than you ever thought possible.`,
		author: 'M',
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

				{/* Mobile carousel */}
				<div className='md:hidden'>
					<div className='bg-white p-8 rounded-3xl shadow-sm'>
						<QuoteIcon
							className='w-12 h-12 text-sage mb-6'
							aria-hidden='true'
						/>
						<p className='text-base text-secondary italic leading-relaxed whitespace-pre-line'>
							{showTestimonial.quote}
						</p>
						<p className='text-base text-secondary font-medium mt-6'>
							- {showTestimonial.author}
						</p>
					</div>

					<div className='flex items-center justify-between mt-6'>
						<button
							type='button'
							onClick={handlePrevious}
							className='px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors'
							aria-label='Show previous testimonial'>
							Previous
						</button>
						<div className='flex items-center gap-2'>
							{testimonials.map((_, index) => (
								<button
									key={index}
									type='button'
									onClick={() => setActiveIndex(index)}
									aria-label={`Show testimonial ${index + 1}`}
									className={`h-2 w-8 rounded-full transition-colors ${
										index === activeIndex
											? 'bg-primary'
											: 'bg-primary/30 hover:bg-primary/50'
									}`}
								/>
							))}
						</div>
						<button
							type='button'
							onClick={handleNext}
							className='px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors'
							aria-label='Show next testimonial'>
							Next
						</button>
					</div>
				</div>

				{/* Desktop layout */}
				<div className='hidden md:grid md:grid-cols-2 gap-8'>
					{testimonials.map(({ quote, author }) => (
						<div
							key={author}
							className='bg-white p-10 rounded-3xl shadow-sm flex flex-col h-full'>
							<QuoteIcon
								className='w-12 h-12 text-sage mb-6'
								aria-hidden='true'
							/>
							<p className='text-base text-secondary italic leading-relaxed whitespace-pre-line flex-1'>
								{quote}
							</p>
							<p className='text-base text-secondary font-medium mt-6'>
								- {author}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

