import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import SimplePracticeWidget from '@/components/SimplePracticeWidget';

export const metadata = {
	title: 'Services | Monica Denais',
	description:
		'Explore our comprehensive mental health counselling services including individual, family, children, and teen therapy.',
	alternates: {
		canonical: 'https://monicadenais.com/services',
	},
};

export default function Services() {
	return (
		<>
			{/* New Hero Section */}
			<section className='bg-beige px-4 py-8 lg:py-24'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid md:grid-cols-2 gap-12 items-center'>
						<div className='space-y-8'>
							<div className='space-y-4'>
								<h1 className='text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-tight'>
									Therapy for Anxiety &amp; Overthinking
								</h1>
								<p className='text-xl md:text-2xl text-secondary italic'>
									For the women who can't turn their brain off.
								</p>
							</div>
							<div className='space-y-6 text-lg text-secondary leading-relaxed'>
								<p>
									If your mind is always running, replaying conversations,
									planning for the worst, or worrying about disappointing
									someone, anxiety can feel like a full-time job.
								</p>
								<p className='font-medium'>And the hard part?</p>
								<p>
									Everyone sees you as capable, strong, dependable so it's easy
									to hide how overwhelmed you really are.
								</p>
								<p>
									Many of my clients are ambitious women, eldest daughters, or
									first-generation professionals who carry a lot of
									responsibility. You may be the one holding things together for
									everyone else, but quietly falling apart on the inside.
								</p>
								<p className='font-medium text-primary text-xl'>
									You don't have to push through it alone anymore.
								</p>
							</div>
						</div>
						<div className='relative rounded-lg overflow-hidden w-full max-w-md mx-auto md:ml-auto md:mx-0'>
							<Image
								src='/services-hero.jpg'
								alt='Therapy space with calming decor'
								width={600}
								height={600}
								className='w-full h-auto object-cover rounded-lg'
								priority
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Therapy for Anxiety Section */}
			<section className='bg-white px-4 py-16'>
				<div className='max-w-7xl mx-auto'>
					<div className='max-w-4xl mx-auto'>
						

						<div className='mt-12 mb-8'>
							<h3 className='text-3xl font-serif text-primary mb-6'>
								What anxiety can look like
							</h3>
							<ul className='space-y-3 text-lg text-secondary leading-relaxed list-disc'>
								<li>Constant overthinking and racing thoughts</li>
								<li>Feeling tense, restless, or on edge</li>
								<li>
									Trouble relaxing or sleeping because your mind won't shut off
								</li>
								<li>Second-guessing every decision</li>
								<li>The fear of making a mistake or letting people down</li>
								<li>Being "high-functioning" but emotionally exhausted</li>
								<li>Feeling overwhelmed by family or cultural expectations</li>
							</ul>
							<p className='mt-6 text-lg text-secondary leading-relaxed'>
								If this sounds familiar, therapy can help you learn to respond
								to anxiety instead of getting pulled into it.
							</p>
						</div>

						<div className='border-t border-bark/20 pt-8 mt-12'>
							<h3 className='text-3xl font-serif text-primary mb-6'>
								How I help
							</h3>
							<p className='text-lg text-secondary leading-relaxed mb-6'>
								I integrate <strong>Cognitive Behavioral Therapy (CBT)</strong>,{' '}
								<strong>Acceptance and Commitment Therapy (ACT)</strong>, and{' '}
								<strong>Solution-Focused Therapy</strong> to give you both
								insight and practical tools.
							</p>

							<div className='space-y-6'>
								<div>
									<h4 className='text-xl font-serif text-primary mb-3'>
										With CBT, you'll learn:
									</h4>
									<ul className='space-y-2 text-lg text-secondary leading-relaxed list-disc'>
										<li>How to challenge anxious thought patterns</li>
										<li>Why your brain jumps to worst-case scenarios</li>
										<li>Tools to calm your body and nervous system</li>
									</ul>
								</div>

								<div>
									<h4 className='text-xl font-serif text-primary mb-3'>
										With ACT, you'll learn:
									</h4>
									<ul className='space-y-2 text-lg text-secondary leading-relaxed list-disc'>
										<li>
											How to stop fighting your thoughts and gain control back
										</li>
										<li>How to let go of perfectionism and self-criticism</li>
										<li>
											How to create space between your thoughts and your
											identity
										</li>
									</ul>
								</div>

								<div>
									<h4 className='text-xl font-serif text-primary mb-3'>
										With Solution-Focused strategies, you'll learn:
									</h4>
									<ul className='space-y-2 text-lg text-secondary leading-relaxed list-disc'>
										<li>Real-life coping skills you can use immediately</li>
										<li>Small changes that make a big impact</li>
										<li>
											Confidence in your ability to handle whatever comes next
										</li>
									</ul>
								</div>
							</div>

							<p className='mt-8 text-lg text-secondary leading-relaxed'>
								Therapy isn't about "just thinking positive."
							</p>
							<p className='text-lg text-secondary leading-relaxed'>
								It's about understanding <em>why</em> your brain reacts the way
								it does and learning ways to feel calmer, safer, and more
								grounded.
							</p>
						</div>

						<div className='mt-12'>
							<h3 className='text-3xl font-serif text-primary mb-6'>
								What changes when anxiety loosens its grip
							</h3>
							<ul className='space-y-3 text-lg text-secondary leading-relaxed list-disc'>
								<li>You make decisions without spiraling</li>
								<li>You stop replaying every conversation</li>
								<li>You can rest without guilt</li>
								<li>You feel more confident setting boundaries</li>
								<li>
									You can enjoy your life without carrying everyone's
									expectations
								</li>
							</ul>
							<p className='mt-6 text-lg font-medium text-primary'>
								You don't have to live in your head anymore. There is another
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
						{/* <p>
              If anxiety has been running your life, therapy can help you take the power back.
            </p>
            <p>
              You're not "too sensitive," "too dramatic," or "overreacting."
            </p>
            <p className="font-medium">
              Your feelings make sense and they matter.
            </p> */}
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
