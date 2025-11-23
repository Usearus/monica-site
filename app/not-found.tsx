import Link from 'next/link';
import { Metadata } from 'next';
import Button from '@/components/Button';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
	title: '404 - Page Not Found | Monica Denais',
	description: 'The page you are looking for could not be found. Visit our other spaces or return to the homepage.',
	alternates: {
		canonical: 'https://monicadenais.com/404',
	},
};

export default function NotFound() {
	return (
		<>
			<div className='bg-beige px-4 py-8 lg:py-24 min-h-[60vh] flex items-center'>
				<div className='max-w-4xl mx-auto w-full'>
					<div className='bg-white p-8 md:p-12 rounded-lg shadow-sm border border-olivewood/10'>
						{/* 404 Heading */}
						<div className='text-center mb-8'>
							<h1 className='text-6xl md:text-8xl font-serif text-primary mb-4'>
								404
							</h1>
							<h2 className='text-3xl md:text-4xl font-serif text-primary mb-4'>
								Page not found
							</h2>
						</div>

						{/* Other Spaces Section */}
						<div className='mt-12 pt-12 border-t border-olivewood/20'>
							<p className='text-lg text-secondary leading-relaxed mb-8 text-center max-w-2xl mx-auto'>
								If you're looking for content that may have moved, check out our other platforms where you might find what you're looking for.
							</p>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto'>
								{/* YouTube Channel */}
								<a
									href='https://www.youtube.com/@cafewithmonica'
									target='_blank'
									rel='noopener noreferrer'
									className='group bg-sage/10 border border-sage/30 rounded-lg p-6 hover:bg-sage/20 transition-colors'>
									<div className='flex items-start gap-4'>
										<div className='shrink-0'>
											<svg
												className='w-10 h-10 text-sage group-hover:text-[#7a9570] transition-colors'
												fill='currentColor'
												viewBox='0 0 24 24'
												aria-hidden='true'>
												<path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
											</svg>
										</div>
										<div>
											<h4 className='text-xl font-serif text-primary mb-2 group-hover:text-sage transition-colors'>
												YouTube Channel
											</h4>
											<p className='text-secondary leading-relaxed'>
												Watch videos on therapy, mental health, and breaking free from perfectionism.
											</p>
										</div>
									</div>
								</a>

								{/* Cafe with Monica */}
								<a
									href='https://cafewithmonica.com'
									target='_blank'
									rel='noopener noreferrer'
									className='group bg-sage/10 border border-sage/30 rounded-lg p-6 hover:bg-sage/20 transition-colors'>
									<div className='flex items-start gap-4'>
										<div className='shrink-0'>
											<svg
												className='w-10 h-10 text-sage group-hover:text-[#7a9570] transition-colors'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'
												aria-hidden='true'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth={2}
													d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
												/>
											</svg>
										</div>
										<div>
											<h4 className='text-xl font-serif text-primary mb-2 group-hover:text-sage transition-colors'>
												Cafe with Monica
											</h4>
											<p className='text-secondary leading-relaxed'>
												Visit our other website for more resources, articles, and content.
											</p>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

