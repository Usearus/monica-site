'use client';

import Link from 'next/link';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
	HamburgerMenuIcon,
	Cross2Icon,
} from '@radix-ui/react-icons';
import Button from '@/components/Button';
import SimplePracticeWidget from './SimplePracticeWidget';
import LocationIcon from './LocationIcon';
import ScheduleIcon from './ScheduleIcon';

export default function Header() {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isServicesHovered, setIsServicesHovered] = useState(false);

	const navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'FAQs', href: '/faqs' },
		{ name: 'Blog', href: '/blog' },
		{
			name: 'Contact',
			href: 'https://monica-denais.clientsecure.me/contact-widget',
			external: true,
		},
	];

	const servicesItems = [
		{ name: 'Anxiety & overthinking', href: '/services' },
		{
			name: 'Burnout & perfectionism',
			href: '/services/burnout-perfectionism',
		},
		{
			name: 'OCD & Intrusive thoughts',
			href: '/services/ocd-intrusive-thoughts',
		},
	];

	const closeMenu = () => setIsMenuOpen(false);

	const isServicesActive =
		pathname === '/services' ||
		pathname === '/services/burnout-perfectionism' ||
		pathname === '/services/ocd-intrusive-thoughts';

	return (
		<header className='sticky top-0 z-50 w-full bg-white shadow-sm'>
			{/* Top info bar */}
			<div className='bg-olivewood text-primary-inverse py-3 px-4'>
				<div className='max-w-7xl mx-auto flex flex-row justify-between items-center text-sm gap-2'>
					<p className='text-balance'>
						Online therapy available in English and Spanish
					</p>
					<div className='flex items-center gap-1 shrink-0'>
						<LocationIcon className='w-4 h-4' />
						<span>Serving Texas residents</span>
					</div>
				</div>
			</div>

			{/* Main navigation */}
			<nav className='px-4 py-6'>
				<div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
					<div className='flex items-center justify-between w-full md:w-auto'>
						<Link href='/' className='text-3xl font-serif text-primary'>
							Monica Denais
						</Link>

						{/* Hamburger button - mobile only */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='md:hidden p-2 text-primary'
							aria-label='Toggle menu'>
							{isMenuOpen ? (
								<Cross2Icon className='w-6 h-6' />
							) : (
								<HamburgerMenuIcon className='w-6 h-6' />
							)}
						</button>
					</div>

					{/* Desktop navigation */}
					<ul className='hidden md:flex flex-wrap items-center gap-6 text-sm font-medium text-primary'>
						{/* Home */}
						{navItems.slice(0, 1).map((item) => (
							<li key={item.href} className='flex items-center'>
								{item.external ? (
									<a
										href={item.href}
										target='_blank'
										rel='noopener noreferrer'
										className={`inline-block transition-colors hover:text-sage border-b-2 pb-1 ${
											pathname === item.href
												? 'border-olivewood'
												: 'border-transparent'
										}`}>
										{item.name}
									</a>
								) : (
									<Link
										href={item.href}
										className={`inline-block transition-colors hover:text-sage border-b-2 pb-1 ${
											pathname === item.href
												? 'border-olivewood'
												: 'border-transparent'
										}`}>
										{item.name}
									</Link>
								)}
							</li>
						))}
						{/* Services Dropdown */}
						<li className='relative flex items-center'>
							<div
								className='relative'
								onMouseEnter={() => setIsServicesHovered(true)}
								onMouseLeave={() => setIsServicesHovered(false)}>
								<button
									className={`inline-block transition-colors hover:text-sage border-b-2 pb-1 ${
										isServicesActive ? 'border-olivewood' : 'border-transparent'
									}`}>
									Services
								</button>
								{isServicesHovered && (
									<div className='absolute top-full left-0 pt-2 w-64 z-50'>
										<ul className='bg-white shadow-lg border border-bark/20 rounded-md py-2'>
											{servicesItems.map((item) => (
												<li key={item.href}>
													<Link
														href={item.href}
														className={`block px-4 py-2 text-sm transition-colors hover:bg-sage/10 ${
															pathname === item.href
																? 'bg-sage/10 text-primary font-medium'
																: 'text-primary'
														}`}>
														{item.name}
													</Link>
												</li>
											))}
										</ul>
									</div>
								)}
							</div>
						</li>
						{/* Rest of nav items (About, FAQs, Blog, Contact) */}
						{navItems.slice(1).map((item) => (
							<li key={item.href} className='flex items-center'>
								{item.external ? (
									<a
										href={item.href}
										target='_blank'
										rel='noopener noreferrer'
										className={`inline-block transition-colors hover:text-sage border-b-2 pb-1 ${
											pathname === item.href
												? 'border-olivewood'
												: 'border-transparent'
										}`}>
										{item.name}
									</a>
								) : (
									<Link
										href={item.href}
										className={`inline-block transition-colors hover:text-sage border-b-2 pb-1 ${
											pathname === item.href
												? 'border-olivewood'
												: 'border-transparent'
										}`}>
										{item.name}
									</Link>
								)}
							</li>
						))}
					</ul>

					{/* <Button
						href='https://monica-denais.clientsecure.me/contact-widget'
						target='_blank'
						rel='noopener noreferrer'
						variant='primary-outline'
						className='hidden md:inline-block'>
						Book free consult
					</Button> */}

					<div className='hidden md:block'>
						<SimplePracticeWidget
							buttonText='Book free consult'
							widgetType='OAR'
							variant='primary-outline'
						/>
					</div>
				</div>
			</nav>

			{/* Mobile menu modal */}
			<>
				{/* Overlay */}
				<div
					className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
						isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
					}`}
					onClick={closeMenu}
				/>
				{/* Modal */}
				<div
					className={`fixed inset-y-0 left-0 w-3/4 bg-white shadow-lg z-50 md:hidden transition-transform duration-300 ease-in-out ${
						isMenuOpen ? 'translate-x-0' : '-translate-x-full'
					}`}>
					<div className='p-6 pt-20'>
						<ul className='space-y-6'>
							{/* Home */}
							{navItems.slice(0, 1).map((item) => (
								<li key={item.href}>
									{item.external ? (
										<a
											href={item.href}
											target='_blank'
											rel='noopener noreferrer'
											onClick={closeMenu}
											className={`block text-xl font-medium text-primary transition-colors hover:text-sage ${
												pathname === item.href
													? 'border-l-4 border-olivewood pl-2'
													: 'pl-2'
											}`}>
											{item.name}
										</a>
									) : (
										<Link
											href={item.href}
											onClick={closeMenu}
											className={`block text-xl font-medium text-primary transition-colors hover:text-sage ${
												pathname === item.href
													? 'border-l-4 border-olivewood pl-2'
													: 'pl-2'
											}`}>
											{item.name}
										</Link>
									)}
								</li>
							))}
							{/* Services Dropdown - Mobile */}
							<li>
								<div className='text-xl font-medium text-primary pl-2 mb-2'>
									Services
								</div>
								<ul className='ml-4 space-y-3'>
									{servicesItems.map((item) => (
										<li key={item.href}>
											<Link
												href={item.href}
												onClick={closeMenu}
												className={`block text-lg text-primary transition-colors hover:text-sage ${
													pathname === item.href
														? 'border-l-4 border-olivewood pl-2 font-medium'
														: 'pl-2'
												}`}>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</li>
							{/* Rest of nav items (About, FAQs, Blog, Contact) */}
							{navItems.slice(1).map((item) => (
								<li key={item.href}>
									{item.external ? (
										<a
											href={item.href}
											target='_blank'
											rel='noopener noreferrer'
											onClick={closeMenu}
											className={`block text-xl font-medium text-primary transition-colors hover:text-sage ${
												pathname === item.href
													? 'border-l-4 border-olivewood pl-2'
													: 'pl-2'
											}`}>
											{item.name}
										</a>
									) : (
										<Link
											href={item.href}
											onClick={closeMenu}
											className={`block text-xl font-medium text-primary transition-colors hover:text-sage ${
												pathname === item.href
													? 'border-l-4 border-olivewood pl-2'
													: 'pl-2'
											}`}>
											{item.name}
										</Link>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
			</>

			{/* Mobile FAB - Book free consult */}
			<div className='fixed bottom-6 right-6 md:hidden z-50'>
				<a
					href='https://monica-denais.clientsecure.me'
					className='bg-bark hover:bg-olivewood text-white rounded-full w-14 h-14 flex items-center justify-center shadow-2xl transition-colors'
					data-spwidget-scope-id='b83fa305-8232-49fb-be6b-314b9da4451a'
					data-spwidget-scope-uri='monica-denais'
					data-spwidget-application-id='7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b'
					data-spwidget-type='OAR'
					data-spwidget-scope-global=''
					data-spwidget-autobind=''
					onClick={(e) => e.preventDefault()}
					aria-label='Book free consult'>
					<ScheduleIcon className='w-6 h-6 text-white' />
				</a>
				<Script
					src='https://widget-cdn.simplepractice.com/assets/integration-1.0.js'
					strategy='afterInteractive'
				/>
			</div>
		</header>
	);
}
