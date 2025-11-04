'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
	Crosshair2Icon,
	HamburgerMenuIcon,
	Cross2Icon,
} from '@radix-ui/react-icons';
import Button from '@/components/Button';

export default function Header() {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Services', href: '/services' },
		{ name: 'FAQs', href: '/faqs' },
		{ name: 'Blog', href: '/blog' },
		{
			name: 'Contact',
			href: 'https://monica-denais.clientsecure.me/contact-widget',
			external: true,
		},
	];

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<header className='sticky top-0 z-50 w-full bg-white shadow-sm'>
			{/* Top info bar */}
			<div className='bg-olivewood text-primary-inverse py-3 px-4'>
				<div className='max-w-7xl mx-auto flex flex-row justify-between items-center text-sm gap-2'>
					<div>
						In-Person & Virtual Counselling & Psychotherapy Services Available
					</div>
					<div className='flex items-center gap-1 shrink-0'>
						<Crosshair2Icon className='w-4 h-4' />
						<span>Plano, TX</span>
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
						{navItems.map((item) => (
							<li key={item.href}>
								{item.external ? (
									<a
										href={item.href}
										target='_blank'
										rel='noopener noreferrer'
										className={`transition-colors hover:text-sage ${
											pathname === item.href
												? 'border-b-2 border-olivewood pb-1'
												: ''
										}`}>
										{item.name}
									</a>
								) : (
									<Link
										href={item.href}
										className={`transition-colors hover:text-sage ${
											pathname === item.href
												? 'border-b-2 border-olivewood pb-1'
												: ''
										}`}>
										{item.name}
									</Link>
								)}
							</li>
						))}
					</ul>

					<Button
						href='https://monica-denais.clientsecure.me/contact-widget'
						target='_blank'
						rel='noopener noreferrer'
						variant='primary-outline'
						className='hidden md:inline-block'>
						Book free consult
					</Button>
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
							{navItems.map((item) => (
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
							<li className='pt-4'>
								<Button
									href='https://monica-denais.clientsecure.me/contact-widget'
									target='_blank'
									rel='noopener noreferrer'
									variant='primary-outline'
									className='w-full text-center'
									onClick={closeMenu}>
									Book free consult
								</Button>
							</li>
						</ul>
					</div>
				</div>
			</>
		</header>
	);
}
