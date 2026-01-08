import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import SimplePracticeWidget from '@/components/SimplePracticeWidget';
import Testimonials from '@/components/Testimonials';

export default function Home() {
	return (
		<div className='w-full'>
			{/* Hero Section */}
			<section className='bg-beige px-4 py-12 lg:py-32'>
				<div className='max-w-7xl mx-auto w-full'>
					<div className='grid md:grid-cols-2 gap-12 items-center'>
						{/* Left content */}
						<div className='space-y-6'>
							<h1 className='text-3xl md:text-5xl font-serif text-primary leading-tight'>
								Therapy for anxiety, perfectionism, and burnout in Texas & Florida
								{/* Break Free From Perfectionism & Embrace Confidence */}
							</h1>
							<p className='text-lg text-primary leading-relaxed'>
								{/* As a first-gen Latina and eldest daughter, I know what it feels like to hold everything together for everyone else. As a licensed 
              counselor, I help ambitious women break free from perfectionism and create a life they enjoy. */}
								Online therapy for ambitious women, first gens, and eldest
								daughters struggling with anxiety, intrusive thoughts,
								burnout, and family pressure. Using cognitive behavioral therapy
								(CBT), acceptance and commitment therapy (ACT), and
								solution-focused strategies.
							</p>
							<p className='text-lg text-primary mt-2'>
								*Sessions available in English and Spanish
							</p>
							<div className='flex flex-wrap gap-4 mt-8'>
								<Button href='#services-overview' variant='secondary-outline'>
									View services
								</Button>
								{/* <Button
									href='https://monica-denais.clientsecure.me/contact-widget'
									target='_blank'
									rel='noopener noreferrer'
									variant='primary'>
									Free consultation
								</Button> */}
								<SimplePracticeWidget
									buttonText='Book free consult'
									widgetType='OAR'
									variant='secondary'
									className='hidden md:inline-block'
								/>
							</div>
						</div>

						{/* Right side - image */}
						<div className='hidden md:block relative rounded-lg overflow-hidden'>
							<Image
								src='/homepage-hero-2.jpg'
								alt='Three women laughing together'
								width={600}
								height={600}
								className='w-full h-auto object-cover rounded-lg'
								priority
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Insurances Accepted Section */}
			<section className='bg-sage-light px-4 py-12'>
				<div className='max-w-7xl mx-auto text-center space-y-10'>
					<div className='space-y-4'>
						<p className='uppercase tracking-[0.3em] text-sm text-secondary'>
							Insurances Accepted
						</p>
					</div>
					<div className='flex flex-wrap justify-center items-center gap-8 md:gap-12'>
						{/* Aetna */}
						<div className='h-20 w-full max-w-[200px] flex items-center justify-center p-4'>
							<Image
								src='/insurances/Aetna_logo..png'
								alt='Aetna'
								width={200}
								height={80}
								className='w-full h-auto object-contain grayscale'
							/>
						</div>
						{/* United Healthcare */}
						<div className='h-20 w-full max-w-[200px] flex items-center justify-center p-4'>
							<Image
								src='/insurances/United-Healthcare-Logo.png'
								alt='United Healthcare'
								width={200}
								height={80}
								className='w-full h-auto object-contain grayscale'
							/>
						</div>
						{/* Placeholder slots for future insurances - hidden for now */}
						{/* <div className='h-20 w-full max-w-[200px] flex items-center justify-center p-4'>
							<Image
								src='/insurances/insurance-2.png'
								alt='Insurance 2'
								width={200}
								height={80}
								className='w-full h-auto object-contain'
							/>
						</div>
						<div className='h-20 w-full max-w-[200px] flex items-center justify-center p-4'>
							<Image
								src='/insurances/insurance-3.png'
								alt='Insurance 3'
								width={200}
								height={80}
								className='w-full h-auto object-contain'
							/>
						</div>
						<div className='h-20 w-full max-w-[200px] flex items-center justify-center p-4'>
							<Image
								src='/insurances/insurance-4.png'
								alt='Insurance 4'
								width={200}
								height={80}
								className='w-full h-auto object-contain'
							/>
						</div>
						<div className='h-20 w-full max-w-[200px] flex items-center justify-center p-4'>
							<Image
								src='/insurances/insurance-5.png'
								alt='Insurance 5'
								width={200}
								height={80}
								className='w-full h-auto object-contain'
							/>
						</div> */}
					</div>
				</div>
			</section>

			{/* Meet Monica Section */}
			<section className='bg-white px-4  py-12 lg:py-32'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid md:grid-cols-2 gap-12 items-center'>
						{/* Left side - image */}
						<div className='relative rounded-lg overflow-hidden w-full max-w-md mx-auto md:mx-0 md:mr-auto'>
							<Image
								src='/monica-about.jpg'
								alt='Monica Denais, Licensed Professional Counselor'
								width={600}
								height={400}
								className='w-full h-auto object-cover rounded-lg'
							/>
						</div>

						{/* Right side - content */}
						<div className='space-y-6'>
							<h2 className='text-4xl md:text-5xl font-serif text-primary'>
								Meet Monica Denais, Licensed Professional Counselor
							</h2>
							<p className='text-lg text-secondary leading-relaxed'>
								I'm a Licensed Professional Counselor and first-gen Latina who
								deeply understands the pressure to perform, succeed, and hold
								everything together on your own.
							</p>
							<p className='text-lg text-secondary leading-relaxed'>
								For the past six years, I've specialized in supporting ambitious
								women, eldest daughters, and first-gens through anxiety,
								perfectionism, burnout, and self-doubt all through virtual
								therapy.
							</p>
							<p className='text-lg text-secondary leading-relaxed'>
								My approach is grounded in evidence-based training and real
								lived experience. I don't just teach coping skills. I use them, I
								study them, and I help clients apply them in practical,
								meaningful ways.
							</p>
							<p className='text-lg text-secondary leading-relaxed font-medium'>
								If you're ready for a space where you don't have to be "the
								strong one," you're in the right place.
							</p>
							<Button href='/about' variant='secondary' asChild>
								Learn more about me
							</Button>
						</div>
					</div>
				</div>
			</section>


			{/* Featured On Section */}
			<section className='bg-white px-4 pb-32'>
				<div className='max-w-7xl mx-auto text-center space-y-10'>
					<div className='space-y-4'>
						<p className='uppercase tracking-[0.3em] text-sm text-secondary'>
							Featured On
						</p>
						{/* <h2 className='text-3xl md:text-4xl font-serif text-primary'>
							Trusted by media and communities that champion mental health
						</h2> */}
					</div>
					<div className='grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center'>
						<Link
							href='https://www.womenshealthmag.com/relationships/a36652423/how-to-be-vulnerable-in-a-relationship/'
							target='_blank'
							rel='noopener noreferrer'
							className='h-20 w-full max-w-[200px] flex items-center justify-center p-4 transition-opacity hover:opacity-80'>
							<Image
								src='/brands/Womens-Health-Logo.png'
								alt="Women's Health logo"
								width={200}
								height={80}
								className='w-full h-auto object-contain'
							/>
						</Link>
						<Link
							href='https://byloftie.com/blogs/how-to-sleep/a-therapist-s-guide-to-a-sustainable-sleep-routine?srsltid=AfmBOorDtn-v75WhpZMCf2h2fS3iVoYuJ6AwYbPckdlFAPEi5DPgre7i'
							target='_blank'
							rel='noopener noreferrer'
							className='h-20 w-full max-w-[200px] flex items-center justify-center p-4 transition-opacity hover:opacity-80'>
							<Image
								src='/brands/loftie-logo_2000x.webp'
								alt='Loftie logo'
								width={200}
								height={80}
								className='w-full h-auto object-contain'
							/>
						</Link>
						<Link
							href='https://www.businessinsider.com/how-to-talk-to-non-black-family-race-therapist-tips-2020-6'
							target='_blank'
							rel='noopener noreferrer'
							className='h-20 w-full max-w-[200px] flex items-center justify-center p-4 transition-opacity hover:opacity-80'>
							<Image
								src='/brands/Insider-Logo-2021.png'
								alt='Insider logo'
								width={200}
								height={80}
								className='w-full h-auto object-contain'
							/>
						</Link>
						<Link
							href='https://www.yahoo.com/lifestyle/therapist-explains-why-stress-cleaning-225852267.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAHBM6vW8WAzbrQAPHKdiqcL-ljjkSN4LFmtFZfHAWNOtkgrpunhhatweMfzciDihn9xK9nx3ge_XhkEJRf1UMZ9pYos3eUl_pSvbpwbtELhbIbzsdrZxwN3Rep9kTx93w4vo6ZokI8U-rwZOpDEKNkJGg8OidfP2fUVlATAoxwgK'
							target='_blank'
							rel='noopener noreferrer'
							className='h-20 w-full max-w-[200px] flex items-center justify-center p-4 transition-opacity hover:opacity-80'>
							<Image
								src='/brands/website_yahoolife.webp'
								alt='Yahoo Life logo'
								width={200}
								height={80}
								className='w-full h-auto object-contain'
							/>
						</Link>
						<Link
							href='https://medium.com/authority-magazine/monica-denais-on-how-to-get-past-your-perfectionism-and-just-do-it-3e03fbcd8493'
							target='_blank'
							rel='noopener noreferrer'
							className='h-20 w-full max-w-[200px] flex items-center justify-center p-4 transition-opacity hover:opacity-80 col-span-2 md:col-span-1 justify-self-center'>
							<Image
								src='/brands/Medium-Wordmark-Black.png'
								alt='Medium logo'
								width={200}
								height={80}
								className='w-full h-auto object-contain'
							/>
						</Link>
					</div>
				</div>
			</section>
			
			{/* What We Specialize In Section */}
			<section className='bg-beige px-4 py-12 lg:py-32 scroll-mt-32 md:scroll-mt-20'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid md:grid-cols-2 gap-12 items-center'>
						{/* Left side - content */}
						<div className='space-y-6'>
							<h2 className='text-4xl md:text-5xl font-serif text-primary'>
								What I Specialize In
							</h2>
							<p className='text-lg text-secondary leading-relaxed'>
								I help first gen ambitious women and eldest daughters navigate
								the emotional weight of responsibility, perfectionism, and
								cultural expectations. Using CBT, ACT, and solution-focused
								therapy, we work together to untangle the stress, overthinking,
								and silent pressure you've been carrying for years.
							</p>

							<div>
								<ul className='space-y-2 text-lg text-secondary leading-relaxed list-disc'>
									<li>Anxiety, overthinking, and constant worry</li>
									<li>
										OCD and intrusive thoughts that feel impossible to shut off
									</li>
									<li>
										Burnout from work, caregiving, school, or responsibilities
										at home
									</li>
									<li>Perfectionism and the fear of disappointing others</li>
									<li>Family conflict or feeling "stuck in the middle"</li>
									<li>
										The pressure of being the first to do everything (first-gen
										stress)
									</li>
									<li>
										Trouble setting boundaries or saying "no" without guilt
									</li>
									<li>
										Emotional exhaustion from always being the reliable one
									</li>
									<li>
										Self-doubt, low self-esteem, or never feeling "good enough"
									</li>
									<li>Life transitions and identity changes</li>
								</ul>
							</div>

							{/* <Button
								href='https://monica-denais.clientsecure.me/contact-widget'
								target='_blank'
								rel='noopener noreferrer'
								variant='secondary'
								className='mt-6'>
								Book a session
							</Button> */}
							<SimplePracticeWidget
								buttonText='Book a session'
								widgetType='OAR'
								variant='secondary'
								className='mt-2'
							/>
						</div>

						{/* Right side - image */}
						<div className='hidden md:block relative rounded-lg overflow-hidden'>
							<Image
								src='/monica-denais-counseling-north-texas3.jpg'
								alt='Monica Denais, Licensed Professional Counselor'
								width={600}
								height={600}
								className='w-full h-auto object-cover rounded-lg'
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Services Overview Section */}
			<section
				id='services-overview'
				className='bg-white px-4 py-12 lg:py-32 scroll-mt-32 md:scroll-mt-24'>
				<div className='max-w-7xl mx-auto'>
					<div className='text-center mb-12 space-y-4'>
						<h2 className='text-4xl md:text-5xl font-serif text-primary'>
							Services I Offer
						</h2>
						{/* <p className='text-lg text-secondary max-w-2xl mx-auto leading-relaxed'>
							Explore focused support tailored for ambitious women navigating
							anxiety, perfectionism, and intrusive thoughts. Each path offers
							evidence-based care designed to meet you where you are.
						</p> */}
					</div>
					<div className='grid gap-8 md:grid-cols-3'>
						<div className='rounded-3xl border border-sage/30 bg-sage/10 p-8 flex flex-col'>
							<h3 className='text-2xl font-serif text-primary mb-4'>
								Therapy for Anxiety &amp; Overthinking
							</h3>
							<p className='text-secondary leading-relaxed flex-1'>
								Build calm, confidence, and compassionate self-talk so you can
								step out of constant worry and into a steadier life.
							</p>
							<Button
								href='/services'
								variant='secondary'
								className='mt-8 w-fit justify-start'>
								Break free from overthinking
							</Button>
						</div>
						<div className='rounded-3xl border border-sage/30 bg-sage/10 p-8 flex flex-col'>
							<h3 className='text-2xl font-serif text-primary mb-4'>
								Therapy for Burnout &amp; Perfectionism
							</h3>
							<p className='text-secondary leading-relaxed flex-1'>
								Release impossible standards, set grounding boundaries, and find
								a sustainable pace that honors both your drive and your rest.
							</p>
							<Button
								href='/services/burnout-perfectionism'
								variant='secondary'
								className='mt-8 w-fit justify-start'>
								Breakthrough burnout
							</Button>
						</div>
						<div className='rounded-3xl border border-sage/30 bg-sage/10 p-8 flex flex-col'>
							<h3 className='text-2xl font-serif text-primary mb-4'>
								Therapy for OCD &amp; Intrusive Thoughts
							</h3>
							<p className='text-secondary leading-relaxed flex-1'>
								Work through evidence-based strategies, including ERP, to break
								the cycle of intrusive thoughts and compulsions with care.
							</p>
							<Button
								href='/services/ocd-intrusive-thoughts'
								variant='secondary'
								className='mt-8 w-fit justify-start'>
								Overcome intrusive thoughts
							</Button>
						</div>
					</div>
				</div>
			</section>


			<Testimonials />
			<section className='bg-sage/10 px-4 py-12 lg:py-32 border-t border-sage/20 border-b'>
				<div className='max-w-7xl mx-auto text-center'>
					<h2 className='text-3xl md:text-4xl font-serif text-primary mb-6'>
						Ready to take the next step? 👇
					</h2>
					<div className='text-lg text-secondary leading-relaxed'>
						<p className='text-secondary mt-4'>
							<strong>Click below to schedule a free 15-minute consult.</strong>
						</p>
						<SimplePracticeWidget
							buttonText='Book a free consult'
							widgetType='OAR'
							variant='secondary'
							className='mt-6'
						/>
					</div>
				</div>
			</section>

			{/* <SimplePracticeWidget
				buttonText='Contact'
				widgetType='Contact form'
				channel='embedded_widget'
				contact={true}
				variant='primary-ghost'
			/> */}

			<Footer />
		</div>
	);
}
