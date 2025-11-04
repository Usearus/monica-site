import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import SimplePracticeWidget from '@/components/SimplePracticeWidget';
import { QuoteIcon } from '@radix-ui/react-icons';

export default function Home() {
	return (
		<div className='w-full'>
			{/* Hero Section */}
			<section className='bg-beige px-4 py-8 lg:py-24'>
				<div className='max-w-7xl mx-auto w-full'>
					<div className='grid md:grid-cols-2 gap-12 items-center'>
						{/* Left content */}
						<div className='space-y-6'>
							<h1 className='text-3xl md:text-6xl font-serif text-primary leading-tight'>
								Therapy for anxiety, perfectionism, and overthinking in Texas
								{/* Break Free From Perfectionism & Embrace Confidence */}
							</h1>
							<p className='text-lg text-primary leading-relaxed'>
								{/* As a first-gen Latina and eldest daughter, I know what it feels like to hold everything together for everyone else. As a licensed 
              counselor, I help ambitious women break free from perfectionism and create a life they enjoy. */}
								Online therapy for ambitious women, first gens, and eldest
								daughters struggling with anxiety, intrusive thoughts, and
								burnout, and family pressure. Using cognitive behavioral therapy
								(CBT), acceptance and commitment therapy (ACT), and
								solution-focused strategies.
							</p>
							<p className='text-base text-secondary mt-2'>
								*Sessions available in English and Spanish
							</p>
							<div className='flex flex-wrap gap-4 mt-8'>
								<Button href='#services' variant='secondary'>
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
									variant='primary'
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

			{/* Meet Monica Section */}
			<section className='bg-white px-4 py-16'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid md:grid-cols-2 gap-12 items-center'>
						{/* Left side - image */}
						<div className='relative rounded-lg overflow-hidden'>
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
								therapy in Texas.
							</p>
							<p className='text-lg text-secondary leading-relaxed'>
								My approach is grounded in evidence-based training and real
								lived experience. I don't just teach coping skills I use them, I
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

			{/* What We Specialize In Section */}
			<section
				id='services'
				className='bg-beige px-4 py-8 lg:py-24 scroll-mt-32 md:scroll-mt-20'>
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
								src='/services-1.JPG'
								alt='Monica Denais, Licensed Professional Counselor'
								width={600}
								height={600}
								className='w-full h-auto object-cover rounded-lg'
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Client Testimonies Section */}
			{/* <section className='bg-sage px-4 py-16'>
				<div className='max-w-7xl mx-auto'>
					<h2 className='text-4xl md:text-5xl font-serif text-primary text-center mb-12'>
						Client Testimonies
					</h2>
					<div className='grid md:grid-cols-3 gap-8'>
						<div className='bg-white p-8 rounded-lg shadow-sm'>
							<div className='mb-4'>
								<div className='w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center'>
									<QuoteIcon className='w-6 h-6 text-sage' />
								</div>
							</div>
							<p className='text-lg text-secondary mb-4 italic leading-relaxed'>
								"Testimony from Silvia - coming soon"
							</p>
							<p className='text-sm text-secondary font-medium'>- Silvia</p>
						</div>

						<div className='bg-white p-8 rounded-lg shadow-sm'>
							<div className='mb-4'>
								<div className='w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center'>
									<QuoteIcon className='w-6 h-6 text-sage' />
								</div>
							</div>
							<p className='text-lg text-secondary mb-4 italic leading-relaxed'>
								"Testimony from Iz - coming soon"
							</p>
							<p className='text-sm text-secondary font-medium'>- Iz</p>
						</div>

						<div className='bg-white p-8 rounded-lg shadow-sm'>
							<div className='mb-4'>
								<div className='w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center'>
									<QuoteIcon className='w-6 h-6 text-sage' />
								</div>
							</div>
							<p className='text-lg text-secondary mb-4 italic leading-relaxed'>
								"Testimony from Nyisha - coming soon"
							</p>
							<p className='text-sm text-secondary font-medium'>- Nyisha</p>
						</div>
					</div>
				</div>
			</section> */}

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
