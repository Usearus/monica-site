import Link from 'next/link';

export const metadata = {
	title: 'Privacy Policy | Monica Denais',
	description:
		'Learn how Monica Denais Counseling collects, uses, and protects your personal information and health data.',
};

export default function PrivacyPolicy() {
	return (
		<main className='bg-white text-secondary px-4 py-16'>
			<div className='max-w-4xl mx-auto space-y-12'>
				<header className='space-y-4'>
					<h1 className='text-4xl font-serif text-primary'>
						Privacy Policy
					</h1>
					<p className='text-base'>
						Last updated: January 1, 2025
					</p>
					<p className='leading-relaxed'>
						Monica Denais Counseling is committed to safeguarding your privacy.
						This policy explains what information we collect, why we collect it,
						and how it is protected. It applies to information collected through
						this website and during the process of scheduling or receiving
						services.
					</p>
				</header>

				<section className='space-y-4'>
					<h2 className='text-2xl font-serif text-primary'>
						Information We Collect
					</h2>
					<p>
						We collect information that helps us respond to your inquiries and
						deliver counseling services, including:
					</p>
					<ul className='list-disc pl-6 space-y-2'>
						<li>Contact details such as your name, email address, and phone number</li>
						<li>Details shared through consultation or intake forms</li>
						<li>
							Information required for billing, scheduling, or insurance
							purposes
						</li>
					</ul>
					<p>
						Clinical information provided during therapy sessions is protected by
						state and federal privacy laws, including HIPAA regulations.
					</p>
				</section>

				<section className='space-y-4'>
					<h2 className='text-2xl font-serif text-primary'>
						How We Use Your Information
					</h2>
					<p>We use your information to:</p>
					<ul className='list-disc pl-6 space-y-2'>
						<li>Respond to inquiries and schedule appointments</li>
						<li>Provide counseling and related services</li>
						<li>
							Send appointment reminders or share relevant practice updates you
							opt in to receive
						</li>
						<li>
							Maintain records necessary for clinical, legal, or ethical
							requirements
						</li>
					</ul>
					<p>
						We do not sell or share your information for marketing purposes.
					</p>
				</section>

				<section className='space-y-4'>
					<h2 className='text-2xl font-serif text-primary'>
						Cookies and Website Analytics
					</h2>
					<p>
						This website may use cookies or similar technologies to understand
						how visitors interact with our content. You can adjust your browser
						settings to refuse cookies or alert you when cookies are being sent.
					</p>
				</section>

				<section className='space-y-4'>
					<h2 className='text-2xl font-serif text-primary'>
						Third-Party Services
					</h2>
					<p>
						We partner with HIPAA-compliant platforms to handle scheduling,
						telehealth sessions, and secure messaging. These vendors are
						contractually obligated to protect your information and use it only
						for the services they provide on our behalf.
					</p>
				</section>

				<section className='space-y-4'>
					<h2 className='text-2xl font-serif text-primary'>Your Rights</h2>
					<p>You have the right to:</p>
					<ul className='list-disc pl-6 space-y-2'>
						<li>Request access to or a copy of your records</li>
						<li>Ask for corrections to inaccurate information</li>
						<li>Limit how your information is used or shared when legally possible</li>
						<li>Withdraw consent for communications you previously opted into</li>
					</ul>
					<p>
						To exercise these rights, contact us using the information below.
					</p>
				</section>

				<section className='space-y-4'>
					<h2 className='text-2xl font-serif text-primary'>
						Data Security
					</h2>
					<p>
						We take reasonable precautions to protect your information from
						unauthorized access, disclosure, or loss. While no method of
						transmission is completely secure, we maintain safeguards aligned
						with professional and legal standards.
					</p>
				</section>

				<section className='space-y-4'>
					<h2 className='text-2xl font-serif text-primary'>
						Updates to This Policy
					</h2>
					<p>
						We may update this policy periodically to reflect changes in laws or
						our practices. When we make significant updates, we will revise the
						“Last updated” date above.
					</p>
				</section>

				<section className='space-y-4'>
					<h2 className='text-2xl font-serif text-primary'>Contact Us</h2>
					<p>
						If you have questions about this policy or how your information is
						handled, please reach out.
					</p>
					<ul className='space-y-2'>
						<li>
							<strong>Email:</strong>{' '}
							<a
								href='mailto:mdenais@monicadenais.com'
								className='text-primary underline hover:text-sage transition-colors'>
								mdenais@monicadenais.com
							</a>
						</li>
						<li>
							<strong>Mailing Address:</strong> Available upon request for
							active clients
						</li>
					</ul>
					<p>
						You can also review our <Link href='/faqs' className='underline text-primary hover:text-sage transition-colors'>FAQs</Link> for additional information about
						working together.
					</p>
				</section>
			</div>
		</main>
	);
}

