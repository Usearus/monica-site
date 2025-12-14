import Link from 'next/link';
import { EnvelopeOpenIcon } from '@radix-ui/react-icons';
import LocationIcon from './LocationIcon';

export default function Footer() {
	return (
		<footer className='bg-olivewood text-primary-inverse px-4 py-16'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid md:grid-cols-2 gap-12'>
					{/* Contact Information */}
					<div>
						<h3 className='text-2xl font-serif mb-6'>Contact information</h3>
						<div className='space-y-4'>
							<div className='flex items-start gap-3'>
								<EnvelopeOpenIcon className='w-5 h-5 text-beige mt-1 shrink-0' />
								<div>
									<p className='font-medium mb-1'>Email</p>
									<a
										href='mailto:info@monicadenais.com'
										className='text-beige hover:text-sage transition-colors underline'>
										info@monicadenais.com
									</a>
								</div>
							</div>
							<div className='flex items-start gap-3'>
								<LocationIcon className='w-5 h-5 text-beige mt-1 shrink-0' />
								<div>
									<p className='font-medium mb-1'>Location</p>
									<p>Telehealth services in Texas (Pending Florida)</p>
								</div>
							</div>
						</div>
					</div>

					{/* Hours of Operation */}
					<div>
						<h3 className='text-2xl font-serif mb-6 flex items-center gap-2'>
							Hours of operation
						</h3>
						<div className='space-y-2'>
							<div className='grid grid-cols-2 gap-4'>
								<p>
									<strong>Monday</strong>
								</p>
								<p>12:00pm - 7:00pm</p>
							</div>
							<div className='grid grid-cols-2 gap-4'>
								<p>
									<strong>Tuesday</strong>
								</p>
								<p>8:00am - 3:00pm</p>
							</div>
							<div className='grid grid-cols-2 gap-4'>
								<p>
									<strong>Wednesday</strong>
								</p>
								<p>Closed</p>
							</div>
							<div className='grid grid-cols-2 gap-4'>
								<p>
									<strong>Thursday</strong>
								</p>
								<p>8:00am - 7:00pm</p>
							</div>
							<div className='grid grid-cols-2 gap-4'>
								<p>
									<strong>Friday</strong>
								</p>
								<p>Closed</p>
							</div>
							<div className='grid grid-cols-2 gap-4'>
								<p>
									<strong>Saturday</strong>
								</p>
								<p>Closed</p>
							</div>
							<div className='grid grid-cols-2 gap-4'>
								<p>
									<strong>Sunday</strong>
								</p>
								<p>Closed</p>
							</div>
						</div>
					</div>
				</div>
				<div className='mt-12 border-t border-beige/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-beige'>
					<p>© 2025 Monica Denais. All rights reserved.</p>
					<Link
						href='/privacy-policy'
						className='hover:text-sage transition-colors underline'>
						Privacy Policy
					</Link>
				</div>
			</div>
		</footer>
	);
}
