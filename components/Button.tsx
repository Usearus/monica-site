import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'primary-outline' | 'secondary-outline' | 'primary-ghost' | 'secondary-ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	asChild?: boolean;
	href?: string;
	target?: string;
	rel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
	primary: 'bg-bark hover:bg-olivewood text-white transition-colors',
	secondary: 'bg-sage hover:bg-[#7a9570] text-white transition-colors',
	'primary-outline':
		'border border-olivewood bg-beige text-primary hover:bg-olivewood hover:text-primary-inverse transition-colors',
	'secondary-outline':
		'border border-sage bg-transparent text-sage hover:bg-sage hover:text-white transition-colors',
	'primary-ghost': 'bg-transparent text-primary hover:bg-bark/10 transition-colors',
	'secondary-ghost': 'bg-transparent text-sage hover:bg-sage/10 transition-colors',
};

export default function Button({
	variant = 'primary',
	children,
	className = '',
	asChild = false,
	href,
	target,
	rel,
	onClick,
	...props
}: ButtonProps) {
	const baseStyles = 'inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed';

	const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

	if (asChild && href) {
		return (
			<Link
				href={href}
				target={target}
				rel={rel}
				className={combinedClassName}
			>
				{children}
			</Link>
		);
	}

	if (href) {
		return (
			<a
				href={href}
				target={target}
				rel={rel}
				className={combinedClassName}
			>
				{children}
			</a>
		);
	}

	return (
		<button className={combinedClassName} onClick={onClick} {...props}>
			{children}
		</button>
	);
}

