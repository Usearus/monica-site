import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import SimplePracticeWidget from '@/components/SimplePracticeWidget';

export const metadata = {
	title: 'Burnout & Perfectionism Therapy | Monica Denais',
	description:
		'Specialized therapy for burnout and perfectionism. Help for high-achieving women who are exhausted from trying to be perfect.',
};

export default function BurnoutPerfectionism() {
	return (
		<>
			{/* New Hero Section */}
			<section className='bg-beige px-4 py-8 lg:py-24'>
				<div className='max-w-4xl mx-auto'>
					<div className='text-center mb-8'>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-6 leading-tight'>
							Therapy for Burnout & Perfectionism
						</h1>
						<p className='text-xl md:text-2xl text-secondary italic'>
							For the women who can't stop pushing themselves.
						</p>
					</div>
					<div className='space-y-6 text-lg text-secondary leading-relaxed'>
						<p>
							If you're constantly setting impossibly high standards for
							yourself, working until you're exhausted, and still feeling like
							you're not doing enough, you might be experiencing burnout and
							perfectionism.
						</p>
						<p className='font-medium'>And the hard part?</p>
						<p>
							You've been praised for your high standards and your ability to
							get things done, so it's hard to recognize when those same
							qualities are actually hurting you.
						</p>
						<p>
							Many of my clients are ambitious women, eldest daughters, or
							first-generation professionals who learned early on that their
							worth was tied to their achievements. You may be the one who
							excels at everything, but quietly struggling with the constant
							pressure to maintain that standard.
						</p>
						<p className='font-medium text-primary text-xl'>
							You don't have to push through it alone anymore.
						</p>
					</div>
				</div>
			</section>

			{/* Therapy for Burnout & Perfectionism Section */}
			<section className='bg-white px-4 py-16'>
				<div className='max-w-7xl mx-auto'>
					<div className='max-w-4xl mx-auto'>

						<div className='mt-12 mb-8'>
							<h3 className='text-3xl font-serif text-primary mb-6'>
								What burnout and perfectionism can look like
							</h3>
							<ul className='space-y-3 text-lg text-secondary leading-relaxed list-disc'>
								<li>Feeling exhausted even after rest or time off</li>
								<li>Setting goals so high that you can never really meet them</li>
								<li>
									Procrastinating because you're afraid of not doing something
									perfectly
								</li>
								<li>Feeling like nothing you do is ever "good enough"</li>
								<li>Comparing yourself to others constantly</li>
								<li>Struggling to delegate or ask for help</li>
								<li>
									Feeling guilty when you're not working or being productive
								</li>
								<li>
									Losing interest in things that used to bring you joy
								</li>
							</ul>
							<p className='mt-6 text-lg text-secondary leading-relaxed'>
								If this sounds familiar, therapy can help you break free from the
								cycle of perfectionism and find a healthier relationship with
								achievement and rest.
							</p>
						</div>

						<div className='border-t border-bark/20 pt-8 mt-12'>
							<h3 className='text-3xl font-serif text-primary mb-6'>
								How I help
							</h3>
							<p className='text-lg text-secondary leading-relaxed mb-6'>
								I integrate <strong>Cognitive Behavioral Therapy (CBT)</strong>,{' '}
								<strong>Acceptance and Commitment Therapy (ACT)</strong>, and{' '}
								<strong>Solution-Focused Therapy</strong> to help you understand
								where your perfectionism comes from and create new patterns.
							</p>

							<div className='space-y-6'>
								<div>
									<h4 className='text-xl font-serif text-primary mb-3'>
										With CBT, you'll learn:
									</h4>
									<ul className='space-y-2 text-lg text-secondary leading-relaxed list-disc'>
										<li>
											How to identify and challenge perfectionistic thought
											patterns
										</li>
										<li>
											The connection between your beliefs about achievement and
											your self-worth
										</li>
										<li>
											Tools to set realistic goals and celebrate progress
										</li>
									</ul>
								</div>

								<div>
									<h4 className='text-xl font-serif text-primary mb-3'>
										With ACT, you'll learn:
									</h4>
									<ul className='space-y-2 text-lg text-secondary leading-relaxed list-disc'>
										<li>
											How to accept imperfection without losing your drive
										</li>
										<li>
											How to separate your identity from your achievements
										</li>
										<li>
											How to rest and take breaks without feeling guilty
										</li>
									</ul>
								</div>

								<div>
									<h4 className='text-xl font-serif text-primary mb-3'>
										With Solution-Focused strategies, you'll learn:
									</h4>
									<ul className='space-y-2 text-lg text-secondary leading-relaxed list-disc'>
										<li>
											Practical ways to balance achievement with self-care
										</li>
										<li>
											How to set boundaries around work and responsibilities
										</li>
										<li>
											Confidence in your ability to succeed without burning out
										</li>
									</ul>
								</div>
							</div>

							<p className='mt-8 text-lg text-secondary leading-relaxed italic'>
								Therapy isn't about lowering your standards or giving up on your
								goals.
							</p>
							<p className='text-lg text-secondary leading-relaxed'>
								It's about learning to achieve in ways that don't drain you, and
								recognizing that your worth isn't measured by how much you
								accomplish.
							</p>
						</div>

						<div className='mt-12'>
							<h3 className='text-3xl font-serif text-primary mb-6'>
								What changes when you let go of perfectionism
							</h3>
							<ul className='space-y-3 text-lg text-secondary leading-relaxed list-disc'>
								<li>You can rest without feeling guilty</li>
								<li>You set realistic goals and actually achieve them</li>
								<li>You celebrate progress instead of focusing on flaws</li>
								<li>You can delegate and ask for help when needed</li>
								<li>
									You find joy and satisfaction in your work and life again
								</li>
								<li>
									You understand that your worth isn't tied to your
									achievements
								</li>
							</ul>
							<p className='mt-6 text-lg font-medium text-primary'>
								You don't have to burn out to prove your worth. There is another
								way.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Ready to feel better - Full Width Section */}
			<section className='bg-sage/10 px-4 py-16 border-t border-sage/20 border-b'>
				<div className='max-w-7xl mx-auto text-center'>
					<h2 className='text-3xl md:text-4xl font-serif text-primary mb-6'>
						Ready to feel better?
					</h2>
					<div className='text-lg text-secondary leading-relaxed'>
						<p className='text-secondary mt-4'>
							<strong>Click below to schedule a free 15-minute consult.</strong>
						</p>
						{/* <Button
							href='https://monica-denais.clientsecure.me/contact-widget'
							target='_blank'
							rel='noopener noreferrer'
							variant='secondary'
							className='mt-4'>
							Book a free consult
						</Button> */}
						<SimplePracticeWidget
									buttonText='Book a free consult'
									widgetType='OAR'
									variant='secondary'
									className='mt-6'
								/>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}

