'use client';

import Script from 'next/script';
import Button from '@/components/Button';

type ButtonVariant = 'primary' | 'secondary' | 'primary-outline' | 'secondary-outline' | 'primary-ghost' | 'secondary-ghost';

interface SimplePracticeWidgetProps {
	buttonText: string;
	widgetType: string;
	variant?: ButtonVariant;
	channel?: string;
	contact?: boolean;
	className?: string;
	sectionClassName?: string;
}

export default function SimplePracticeWidget({
	buttonText,
	widgetType,
	variant = 'primary-outline',
	channel,
	contact,
	className = '',
	sectionClassName = '',
}: SimplePracticeWidgetProps) {
	const baseDataAttributes = {
		'data-spwidget-scope-id': 'b83fa305-8232-49fb-be6b-314b9da4451a',
		'data-spwidget-scope-uri': 'monica-denais',
		'data-spwidget-application-id':
			'7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b',
		'data-spwidget-type': widgetType,
		'data-spwidget-scope-global': '',
		'data-spwidget-autobind': '',
	};

	const dataAttributes: Record<string, string> = {
		...baseDataAttributes,
	};

	if (channel) {
		dataAttributes['data-spwidget-channel'] = channel;
	}

	if (contact) {
		dataAttributes['data-spwidget-contact'] = '';
	}

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		// Prevent default navigation - let SimplePractice script handle modal opening
		// The data-spwidget-autobind attribute tells the script to automatically bind
		// and open the modal instead of navigating
		e.preventDefault();
	};

	return (
		<>
			<Button
				href='https://monica-denais.clientsecure.me'
				variant={variant}
				className={`spwidget-button ${className}`}
				onClick={handleClick}
				{...dataAttributes}>
				{buttonText}
			</Button>
			<Script
				src='https://widget-cdn.simplepractice.com/assets/integration-1.0.js'
				strategy='afterInteractive'
			/>
		</>
	);
}
