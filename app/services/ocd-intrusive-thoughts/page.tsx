import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import SimplePracticeWidget from '@/components/SimplePracticeWidget';

export const metadata = {
	title: 'OCD & Intrusive Thoughts Therapy | Monica Denais',
	description:
		'Specialized therapy for OCD and intrusive thoughts. Evidence-based treatment for obsessive-compulsive disorder and unwanted thoughts.',
};

export default function OCDIntrusiveThoughts() {
	return (
		<>
			{/* New Hero Section */}
			<section className='bg-beige px-4 py-8 lg:py-24'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid md:grid-cols-2 gap-12 items-center'>
						<div className='space-y-8'>
							<div className='space-y-4'>
								<h1 className='text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-tight'>
									Therapy for OCD &amp; Intrusive Thoughts
								</h1>
								<p className='text-xl md:text-2xl text-secondary italic'>
									For the women whose minds won't let them rest.
								</p>
							</div>
							<div className='space-y-6 text-lg text-secondary leading-relaxed'>
								<p>
									If you're experiencing unwanted, distressing thoughts that
									keep coming back, or if you feel compelled to do certain
									things to relieve anxiety, you might be dealing with OCD or
									intrusive thoughts.
								</p>
								<p className='font-medium'>And the hard part?</p>
								<p>
									These thoughts and behaviors can feel shameful or
									embarrassing, making it hard to talk about them, even though
									they're not your fault.
								</p>
								<p>
									Many of my clients are high-achieving women who've learned to
									hide their struggles. You may be functioning well on the
									surface, but internally dealing with repetitive thoughts or
									compulsive behaviors that take up significant time and energy.
								</p>
								<p className='font-medium text-primary text-xl'>
									You don't have to manage this alone anymore.
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

			{/* Therapy for OCD & Intrusive Thoughts Section */}
			<section className='bg-white px-4 py-16'>
				<div className='max-w-7xl mx-auto'>
					<div className='max-w-4xl mx-auto'>

						<div className='mt-12 mb-8'>
							<h3 className='text-3xl font-serif text-primary mb-6'>
								What OCD and intrusive thoughts can look like
							</h3>
							<ul className='space-y-3 text-lg text-secondary leading-relaxed list-disc'>
								<li>
									Unwanted, distressing thoughts that keep coming back
								</li>
								<li>
									Feeling compelled to perform certain actions or rituals
								</li>
								<li>
									Spending significant time checking, counting, or organizing
								</li>
								<li>
									Avoiding situations or places that trigger intrusive thoughts
								</li>
								<li>
									Mental rituals like repeating phrases or counting in your head
								</li>
								<li>
									Feeling like something bad will happen if you don't complete
									compulsions
								</li>
								<li>
									Knowing your thoughts or behaviors are irrational but feeling
									unable to stop
								</li>
								<li>
									Feeling shame or embarrassment about your thoughts and
									behaviors
								</li>
							</ul>
							<p className='mt-6 text-lg text-secondary leading-relaxed'>
								If this sounds familiar, therapy can help you understand and
								manage OCD and intrusive thoughts using evidence-based
								treatments.
							</p>
						</div>

						<div className='border-t border-bark/20 pt-8 mt-12'>
							<h3 className='text-3xl font-serif text-primary mb-6'>
								How I help
							</h3>
							<p className='text-lg text-secondary leading-relaxed mb-6'>
								I use <strong>Exposure and Response Prevention (ERP)</strong>,{' '}
								<strong>Cognitive Behavioral Therapy (CBT)</strong>, and{' '}
								<strong>Acceptance and Commitment Therapy (ACT)</strong> to help
								you manage OCD and intrusive thoughts effectively.
							</p>

							<div className='space-y-6'>
								<div>
									<h4 className='text-xl font-serif text-primary mb-3'>
										With ERP, you'll learn:
									</h4>
									<ul className='space-y-2 text-lg text-secondary leading-relaxed list-disc'>
										<li>
											How to face your fears gradually in a safe, controlled
											way
										</li>
										<li>
											How to resist compulsions and break the cycle of OCD
										</li>
										<li>
											That anxiety decreases over time when you don't engage in
											compulsive behaviors
										</li>
									</ul>
								</div>

								<div>
									<h4 className='text-xl font-serif text-primary mb-3'>
										With CBT, you'll learn:
									</h4>
									<ul className='space-y-2 text-lg text-secondary leading-relaxed list-disc'>
										<li>
											How to challenge the meaning you assign to intrusive
											thoughts
										</li>
										<li>
											That intrusive thoughts are normal and don't define you
										</li>
										<li>
											Tools to separate yourself from your thoughts
										</li>
									</ul>
								</div>

								<div>
									<h4 className='text-xl font-serif text-primary mb-3'>
										With ACT, you'll learn:
									</h4>
									<ul className='space-y-2 text-lg text-secondary leading-relaxed list-disc'>
										<li>
											How to accept intrusive thoughts without fighting them
										</li>
										<li>
											How to live according to your values despite unwanted
											thoughts
										</li>
										<li>
											How to reduce the power intrusive thoughts have over your
											life
										</li>
									</ul>
								</div>
							</div>

							<p className='mt-8 text-lg text-secondary leading-relaxed italic'>
								Therapy isn't about making the thoughts go away completely.
							</p>
							<p className='text-lg text-secondary leading-relaxed'>
								It's about learning to live with them without letting them control
								your life, and understanding that having an intrusive thought
								doesn't mean you're a bad person or that something bad will
								happen.
							</p>
						</div>

						<div className='mt-12'>
							<h3 className='text-3xl font-serif text-primary mb-6'>
								What changes when you learn to manage OCD and intrusive thoughts
							</h3>
							<ul className='space-y-3 text-lg text-secondary leading-relaxed list-disc'>
								<li>
									You can experience intrusive thoughts without engaging in
									compulsions
								</li>
								<li>You spend less time on rituals and checking behaviors</li>
								<li>
									You feel less shame and embarrassment about your thoughts
								</li>
								<li>
									You can engage in activities you've been avoiding
								</li>
								<li>
									You understand that your thoughts don't define who you are
								</li>
								<li>
									You feel more in control of your life and your responses
								</li>
							</ul>
							<p className='mt-6 text-lg font-medium text-primary'>
								You don't have to be controlled by intrusive thoughts anymore.
								There is another way.
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

