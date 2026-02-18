import Link from 'next/link';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export const metadata = {
	title: 'Provider Referrals | Monica Denais',
	description:
		'Refer patients for telehealth psychotherapy services. Monica Denais provides evidence-based therapy for adults in Texas and Florida.',
	alternates: {
		canonical: 'https://monicadenais.com/referral',
	},
};

export default function ReferralPage() {
	return (
		<>
			{/* Hero - Professional, provider-focused */}
			<section className='bg-beige px-4 py-8 lg:py-20 border-b border-bark/10'>
				<div className='max-w-4xl mx-auto'>
					<p className='text-sage font-medium uppercase tracking-wider text-sm mb-4'>
						For Healthcare Providers
					</p>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-tight mb-6'>
						Provider Referrals
					</h1>
					<p className='text-xl text-secondary leading-relaxed max-w-3xl'>
						Thank you for your interest in referring patients for therapy
						services. Monica Denais provides telehealth psychotherapy for
						adults across Texas and Florida, with a clinical focus on women
						experiencing anxiety, burnout, chronic stress, and life transitions.
					</p>
					<p className='text-lg text-secondary leading-relaxed mt-4 max-w-3xl'>
						As a bilingual Latina therapist, Monica also provides culturally
						responsive care and language-accessible support for individuals who
						value identity-informed treatment.
					</p>
				</div>
			</section>

			{/* How to Refer a Patient */}
			<section className='bg-sage-light px-4 py-24'>
				<div className='max-w-7xl mx-auto'>
					<h2 className='text-5xl font-serif text-primary mb-2 text-center'>
						How to Refer a Patient
					</h2>
					<p className='text-lg text-secondary leading-relaxed mb-10 text-center'>
						You may refer patients in any of the following ways:
					</p>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
						{/* Option 1 */}
						<div className='bg-white rounded-3xl border border-bark/10 p-6 shadow-sm flex flex-col'>
							<h3 className='text-xl font-serif text-primary mb-2'>
								Option 1 — Direct online referral form
							</h3>
							<p className='text-secondary leading-relaxed mb-4 grow'>
								Submit a referral request and we will follow up with the patient
								directly.
							</p>
							<Button
								href='https://forms.clickup.com/8683638/f/8903p-35034/70NDA29SA2IZQN68QS'
								target='_blank'
								rel='noopener noreferrer'
								variant='secondary'>
								Submit provider referral
							</Button>
						</div>

						{/* Option 2 */}
						<div className='bg-white rounded-3xl border border-bark/10 p-6 shadow-sm flex flex-col'>
							<h3 className='text-xl font-serif text-primary mb-2'>
								Option 2 — Provide patient with scheduling link
							</h3>
							<p className='text-secondary leading-relaxed mb-4 grow'>
								Patients may self-schedule or request a consultation.
							</p>
							<Button
								href='https://monica-denais.clientsecure.me/'
								target='_blank'
								rel='noopener noreferrer'
								variant='secondary'>
								Schedule appointment
							</Button>
						</div>

						{/* Option 3 */}
						<div className='bg-white rounded-3xl border border-bark/10 p-6 shadow-sm flex flex-col'>
							<h3 className='text-xl font-serif text-primary mb-2'>
								Option 3 — Fax a referral
							</h3>
							<p className='text-secondary leading-relaxed mb-4 grow'>
								Referrals may be faxed securely to{' '}
								<a
									href='tel:+14692429748'
									className='text-sage hover:text-olivewood underline transition-colors'>
									469-242-9748
								</a>
								. Please include patient contact information and reason for
								referral if available.
							</p>
							<Button
								href='https://drive.google.com/file/d/1-YVX9rRLub81xcFlHgfS8JhCHHoOj4Dp/view?usp=drive_link'
								target='_blank'
								rel='noopener noreferrer'
								variant='secondary'>
								Download referral form
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Who I Work With */}
			<section className='bg-white px-4 py-16'>
				<div className='max-w-4xl mx-auto'>
					<h2 className='text-3xl font-serif text-primary mb-6 mt-16'>
						Who I Work With
					</h2>
					<p className='text-lg text-secondary leading-relaxed mb-6'>
						<strong className='text-primary'>Adults (18+)</strong> experiencing:
					</p>
					<ul className='list-disc list-inside space-y-2 text-lg text-secondary leading-relaxed ml-4 mb-8'>
						<li>Generalized anxiety and chronic stress</li>
						<li>Burnout and work-related overwhelm</li>
						<li>Panic symptoms and emotional dysregulation</li>
						<li>Intrusive thoughts and OCD-related concerns</li>
						<li>Perfectionism and high self-pressure</li>
						<li>Life transitions and adjustment challenges</li>
						<li>Stress related to hormonal or chronic health conditions</li>
					</ul>
					<p className='text-lg text-secondary leading-relaxed font-medium text-primary mb-2'>
						Primary populations served:
					</p>
					<ul className='list-disc list-inside space-y-1 text-lg text-secondary leading-relaxed ml-4'>
						<li>Women in their 20s, 30s, 40s</li>
						<li>Latina women and first-generation professionals</li>
					</ul>
				</div>
			</section>

			{/* Treatment Approach */}
			<section className='bg-white px-4 py-16'>
				<div className='max-w-4xl mx-auto'>
					<h2 className='text-3xl font-serif text-primary mb-6'>
						Treatment Approach
					</h2>
					<p className='text-lg text-secondary leading-relaxed mb-6'>
						Evidence-based, practical, and skills-focused psychotherapy.
					</p>
					<p className='text-lg text-secondary leading-relaxed mb-4 font-medium text-primary'>
						Modalities include:
					</p>
					<ul className='list-disc list-inside space-y-2 text-lg text-secondary leading-relaxed ml-4 mb-4'>
						<li>Cognitive Behavioral Therapy (CBT)</li>
						<li>Acceptance and Commitment Therapy (ACT)</li>
						<li>Exposure and Response Prevention (ERP)</li>
						<li>Solution-Focused Therapy</li>
					</ul>
					<p className='text-lg text-secondary leading-relaxed'>
						All services are provided via secure telehealth.
					</p>
				</div>
			</section>

			{/* Insurance & Payment */}
			<section className='bg-white px-4 py-16'>
				<div className='max-w-4xl mx-auto'>
					<h2 className='text-3xl font-serif text-primary mb-6'>
						Insurance & Payment
					</h2>
					<p className='text-lg text-secondary leading-relaxed mb-4 font-medium text-primary'>
						In-network with:
					</p>
					<ul className='list-disc list-inside space-y-1 text-lg text-secondary leading-relaxed ml-4 mb-6'>
						<li>UnitedHealthcare</li>
						<li>Aetna</li>
					</ul>
					<p className='text-lg text-secondary leading-relaxed mb-2'>
						Out-of-network:
					</p>
					<p className='text-lg text-secondary leading-relaxed'>
						Superbills available for reimbursement
					</p>
					<p className='text-sm text-secondary/80 mt-4 italic'>
						*In-network status may change; please contact provider for most
						current in-network status.
					</p>
				</div>
			</section>

			{/* Coordination of Care */}
			<section className='bg-white px-4 py-16'>
				<div className='max-w-4xl mx-auto'>
					<h2 className='text-3xl font-serif text-primary mb-6'>
						Coordination of Care
					</h2>
					<p className='text-lg text-secondary leading-relaxed'>
						With appropriate patient authorization, coordination of care is
						welcomed. Communication with referring providers may include
						treatment updates and collaborative care planning. Please send over
						an ROI if coordination of care is needed.
					</p>
				</div>
			</section>
			<Footer />
		</>
	);
}
