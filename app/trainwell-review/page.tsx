import Footer from '@/components/Footer';
import SimplePracticeWidget from '@/components/SimplePracticeWidget';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
	title:
		'Is Trainwell Worth It? My 2-Year Experience with Virtual Personal Training | Monica Denais',
	description:
		'After 2 years and 256 workouts with Trainwell, here is an honest look at the pros, cons, pricing, and who this virtual personal training app is best for.',
};

export default function TrainwellReviewPage() {
	return (
		<>
			<div className='bg-beige px-4 py-8 lg:py-24'>
				<div className='max-w-4xl mx-auto'>
					<article className='bg-white p-8 md:p-12 rounded-lg shadow-sm border border-olivewood/10'>
						<p className='text-sm text-sage mb-4'>March 19, 2025</p>
						<h1 className='text-4xl md:text-5xl font-serif text-primary mb-6'>
							Is Trainwell Worth It? My 2-Year Experience with Virtual Personal
							Training
						</h1>
						<div className='relative w-full aspect-video mb-8 rounded-lg overflow-hidden border border-olivewood/20 shadow-sm'>
							<iframe
								className='absolute inset-0 h-full w-full'
								src='https://www.youtube.com/embed/La-D2XBjUas'
								title='I used a virtual personal trainer for 2 years | Trainwell honest review'
								loading='lazy'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								referrerPolicy='strict-origin-when-cross-origin'
								allowFullScreen
							/>
						</div>
						<div className='prose prose-lg max-w-none text-primary leading-relaxed'>
							<h2>I Used Trainwell for 2 Years: My Honest Review</h2>
							<p>
								If you are searching for a{' '}
								<a
									href='https://go.trainwell.net/CafeWithMonica'
									target='_blank'
									rel='noopener noreferrer'
									className='text-sage font-medium underline underline-offset-4 decoration-sage hover:text-primary transition-colors'>
									Trainwell review
								</a>{' '}
								to see if it is worth your time and money, you are in the right
								place. I have been using Trainwell (formerly known as CoPilot
								Fitness) for over two years, completing 256 workouts across 611
								days. As a therapist and content creator with a busy schedule, I
								needed a flexible virtual personal trainer that would keep me
								accountable. After testing it extensively, I am sharing my
								honest, unsponsored review of Trainwell—the pros, cons, and
								whether it is a good fit for you. If you are considering a
								virtual personal trainer, this guide will help you decide
								whether{' '}
								<a
									href='https://go.trainwell.net/CafeWithMonica'
									target='_blank'
									rel='noopener noreferrer'
									className='text-sage font-medium underline underline-offset-4 decoration-sage hover:text-primary transition-colors'>
									Trainwell
								</a>{' '}
								is the right choice.
							</p>

							<h2>What is Trainwell?</h2>
							<p>
								Trainwell is a virtual personal training app that connects you
								with a certified fitness coach who customizes workouts based on
								your goals, equipment, and experience level. Unlike free workout
								plans or generic fitness apps, Trainwell provides a human
								connection, which can be a game-changer for people who need
								personalized motivation.
							</p>

							<h2>Why I Chose Trainwell Over Other Fitness Apps</h2>
							<p>
								When I started my fitness journey, I relied on free YouTube
								workouts and even tried Beachbody (which I do not personally
								recommend). However, I wanted something tailored to my needs and
								flexible with my unpredictable schedule. Going to the gym felt
								intimidating, and hiring an in-person trainer was out of my
								budget.
							</p>
							<p>Trainwell stood out because:</p>
							<ul className='space-y-2 text-base text-secondary leading-relaxed list-disc pl-5'>
								<li>
									It allows you to <b>choose a coach</b> that fits your
									communication style (supportive, tough-love, etc.).
								</li>
								<li>
									It works with <b>your available equipment</b> (or no equipment
									at all).
								</li>
								<li>
									It is <b>more affordable</b> than in-person personal training.
								</li>
								<li>
									It keeps workouts <b>consistent and adaptable</b>—something
									crucial for people balancing a busy schedule. Whether you are
									a beginner or advanced,{' '}
									<a
										href='https://go.trainwell.net/CafeWithMonica'
										target='_blank'
										rel='noopener noreferrer'
										className='text-sage font-medium underline underline-offset-4 decoration-sage hover:text-primary transition-colors'>
										Trainwell
									</a>{' '}
									tailors your workouts to different life stages.
								</li>
							</ul>

							<h2>How Trainwell Works</h2>
							<h3>1. Getting Started</h3>
							<ul className='space-y-2 text-base text-secondary leading-relaxed list-disc pl-5'>
								<li>
									Download the app and{' '}
									<b>answer questions about your fitness goals</b>.
								</li>
								<li>
									Get <b>matched with a coach </b>based on your preferences.
								</li>
								<li>
									Schedule a <b>40-minute onboarding call</b> to discuss your
									goals, challenges, and workout preferences.
								</li>
							</ul>

							<h3>2. Custom Workouts and Coaching</h3>
							<ul className='space-y-2 text-base text-secondary leading-relaxed list-disc pl-5'>
								<li>
									Your coach <b>designs a 4-week personalized program</b> that
									progresses over time.
								</li>
								<li>
									You can <b>adjust workout time, intensity, and focus areas</b>{' '}
									(for example, strength, mobility, endurance).
								</li>
								<li>
									<b>Switching coaches is easy and conflict-free</b>—I changed
									coaches four times to match different seasons of my life.
								</li>
							</ul>

							<h2>What I Love About Trainwell</h2>
							<ul className='space-y-3 text-base text-secondary leading-relaxed list-none'>
								<li className='flex items-start gap-3'>
									<span aria-hidden='true'>✅</span>
									<div>
										<strong>Flexibility to Fit My Busy Schedule</strong>
										<p className='mt-1'>
											I can <b>push workouts forward by a day</b> if needed,
											though I wish I could reschedule them further without
											needing my coach&apos;s help.
										</p>
									</div>
								</li>
								<li className='flex items-start gap-3'>
									<span aria-hidden='true'>✅</span>
									<div>
										<strong>Custom Workouts for Home or Gym</strong>
										<p className='mt-1'>
											Whether you own weights or just have a yoga mat, the app
											<b>adjusts workouts to your equipment</b>.
										</p>
									</div>
								</li>
								<li className='flex items-start gap-3'>
									<span aria-hidden='true'>✅</span>
									<div>
										<strong>Human Connection and Accountability</strong>
										<p className='mt-1'>
											Your <b>trainer's voice</b> guides you through workouts,
											making it feel <b>like a real coaching session</b>. They
											also check in with you, keeping you motivated.
										</p>
									</div>
								</li>
								<li className='flex items-start gap-3'>
									<span aria-hidden='true'>✅</span>
									<div>
										<strong>Spotify Integration for Workouts</strong>
										<p className='mt-1'>
											You can <b>play your own music during workouts</b>, which
											is a huge plus for me.
										</p>
									</div>
								</li>
								<li className='flex items-start gap-3'>
									<span aria-hidden='true'>✅</span>
									<div>
										<strong>Easy Coach Switching</strong>
										<p className='mt-1'>
											If your trainer is not the right fit or you want to change
											goals, <b>switching is just one click away</b>.
										</p>
									</div>
								</li>
								<li className='flex items-start gap-3'>
									<span aria-hidden='true'>✅</span>
									<div>
										<strong>Apple Watch and Fitness Tracker Integration</strong>
										<p className='mt-1'>
											The <b>app syncs with smartwatches</b> (Apple Watch,
											Google Watch, etc.) to track your movements and ensure
											proper form.
										</p>
									</div>
								</li>
							</ul>

							<h2>Limitations and Cons of Trainwell</h2>
							<ul className='space-y-3 text-base text-secondary leading-relaxed list-none'>
								<li className='flex items-start gap-3'>
									<span aria-hidden='true'>❌</span>
									<div>
										<strong>Can Only Push Workouts One Day</strong>
										<p className='mt-1'>
											You can <b>move a workout one day forward in the app</b>,
											but if you need a longer delay, you have to message your
											coach.
										</p>
									</div>
								</li>
								<li className='flex items-start gap-3'>
									<span aria-hidden='true'>❌</span>
									<div>
										<strong>Does Not Track External Workouts Well</strong>
										<p className='mt-1'>
											If you do a <b>Pilates class or outdoor run</b>, it will
											not count toward your workout streak, which can be
											frustrating.
										</p>
									</div>
								</li>
								<li className='flex items-start gap-3'>
									<span aria-hidden='true'>❌</span>
									<div className='space-y-2'>
										<strong>Higher Price Point</strong>
										<span className='block'>
											<b>1-month plan:</b> $150 per month
											<br />
											<b>3-month plan:</b> $297 upfront ($99 per month
											equivalent)
											<br />
											<b>Annual plan:</b> lower per-month cost
										</span>
										<p>
											Trainwell often offers discounts, especially during{' '}
											<b>Black Friday</b> and other seasonal promotions. If you
											are considering signing up, check for{' '}
											<a
												href='https://go.trainwell.net/CafeWithMonica'
												target='_blank'
												rel='noopener noreferrer'
												className='text-sage font-medium underline underline-offset-4 decoration-sage hover:text-primary transition-colors'>
												current offers here
											</a>{' '}
											. They also have a <b>two-week free trial</b> if you want
											to test it first.
										</p>
									</div>
								</li>
							</ul>

							<h2>Who Should Use Trainwell?</h2>
							<p>
								This option is <b>perfect if you:</b>
							</p>
							<ul className='space-y-2 text-base text-secondary leading-relaxed list-disc pl-5'>
								<li>
									Want a <b>personal trainer without gym intimidation</b>.
								</li>
								<li>
									Need <b>accountability to stay consistent</b>.
								</li>
								<li>
									Prefer{' '}
									<b>
										customized workouts based on your schedule and equipment
									</b>
									.
								</li>
								<li>
									Like having a <b>real human trainer guiding you</b>.
								</li>
							</ul>
							<p>It may not be for you if:</p>
							<ul className='space-y-2 text-base text-secondary leading-relaxed list-disc pl-5'>
								<li>
									You prefer <b>fully independent workouts</b>.
								</li>
								<li>
									You need <b>detailed meal plans or nutritional coaching</b>{' '}
									(Trainwell focuses only on fitness).
								</li>
							</ul>

							<h2>My Results Using Trainwell</h2>
							<p>
								Before Trainwell, I struggled with sticking to a fitness
								routine. I started prioritizing sustainable habits over quick
								fixes. While the app alone did not lead to weight loss, pairing
								it with a calorie deficit helped me lose 20 pounds over time.
							</p>
							<p>
								More importantly, Trainwell changed my mindset about movement—it
								became a tool for me to build consistency and confidence in my
								fitness journey. Whether you are looking to get stronger,
								establish a routine, or simply stay active,{' '}
								<a
									href='https://go.trainwell.net/CafeWithMonica'
									target='_blank'
									rel='noopener noreferrer'
									className='text-sage font-medium underline underline-offset-4 decoration-sage hover:text-primary transition-colors'>
									Trainwell
								</a>{' '}
								can be a valuable resource. I stopped seeing workouts as
								punishment and started enjoying movement as part of my self-care
								routine.
							</p>
							<div className='my-8'>
								<Image
									src='/monica-trainwell.png'
									alt='Before and after using the Trainwell fitness app'
									width={1200}
									height={720}
									className='w-full h-auto rounded-lg border border-olivewood/20 shadow-sm'
								/>
							</div>

							<h2>Final Verdict: Is Trainwell Worth It?</h2>
							<p>
								YES, I highly recommend Trainwell. It is an excellent tool for
								anyone looking for a flexible, supportive, and personalized
								virtual fitness experience. It is especially valuable for those
								who want human accountability without the high cost of in-person
								training.
							</p>
							<p>
								If you are interested,{' '}{' '}
								<a
									href='https://go.trainwell.net/CafeWithMonica'
									target='_blank'
									rel='noopener noreferrer'
									className='text-sage font-medium underline underline-offset-4 decoration-sage hover:text-primary transition-colors'>
									try Trainwell with a 2-week free trial
								</a>{' '}
								and see how it fits into your fitness journey, and see if it
								works for you!
							</p>
							<p>
								👉{' '}
								<a
									href='https://go.trainwell.net/CafeWithMonica'
									target='_blank'
									rel='noopener noreferrer'
									className='text-sage font-medium underline underline-offset-4 decoration-sage hover:text-primary transition-colors'>
									Sign up for Trainwell here
								</a>{' '}
							</p>
							<p>
								Have you tried Trainwell? Let me know your experience in the
								comments below!
							</p>
							<p className='italic text-secondary'>
								This post may contain affiliate links; if so, I may earn a
								commission when you make a purchase through links on my site at
								no additional cost to you.
							</p>
						</div>

						<div className='mt-12 pt-8 border-t border-olivewood/20'>
							<SimplePracticeWidget
								buttonText="Interested in therapy? Let's talk"
								widgetType='OAR'
								variant='secondary'
								className='mt-6'
							/>
						</div>
					</article>
				</div>
			</div>
			<Footer />
		</>
	);
}
