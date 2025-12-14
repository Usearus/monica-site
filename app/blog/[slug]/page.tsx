import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import SimplePracticeWidget from '@/components/SimplePracticeWidget';

// Blog posts data
const posts = {
	'eldest-daughter-syndrome': {
		title: 'What is Eldest Daughter Syndrome?',
		date: 'January 15, 2025',
		excerpt:
			'Understanding the unique pressures faced by first-born daughters and how to break free from perfectionism and people-pleasing tendencies.',
		content: `
      <p>If you're a first-born daughter or eldest daughter, you might recognize this pattern: you've always felt responsible for everyone else's well-being, pushed yourself to perfection, and found it nearly impossible to say no when asked for help (even when you desperately need to rest). This is often called "Eldest Daughter Syndrome," and understanding it is the first step toward reclaiming your life.</p>

      <p>Eldest Daughter Syndrome refers to the unique set of pressures and expectations placed on first-born daughters. From an early age, many eldest daughters are unconsciously assigned the role of family mediator, caretaker, and emotional support system. They're often praised for being "responsible," "mature," and "helpful"—labels that, while positive, can create a pattern of over-giving that becomes difficult to break.</p>

      <h2>Common Characteristics</h2>
      <ul>
        <li><strong>Perfectionism:</strong> You hold yourself to impossibly high standards and feel like a failure when you make mistakes.</li>
        <li><strong>People-pleasing:</strong> Saying "no" feels impossible, even when you're overwhelmed or exhausted.</li>
        <li><strong>Emotional caretaking:</strong> You've always been the one everyone turns to with their problems.</li>
        <li><strong>Hyper-independence:</strong> You struggle to ask for help or rely on others, even when you need support.</li>
        <li><strong>Chronic guilt:</strong> You feel guilty when you prioritize yourself or take time to rest.</li>
        <li><strong>Burnout:</strong> Despite being strong and capable, you're constantly exhausted.</li>
      </ul>

      <h2>Why Does This Happen?</h2>
      <p>Many eldest daughters, especially those from immigrant families or first-generation backgrounds, grow up feeling they need to "prove" themselves. Whether it's living up to family expectations, succeeding academically or professionally, or being the "bridge" between family and the outside world, these pressures can create a pattern of striving that never feels like enough.</p>

      <h2>Breaking Free From Eldest Daughter Syndrome</h2>
      <p>The good news? Recognizing these patterns is the first step toward change. Here are some strategies I use with my clients:</p>

      <h3>1. Set Boundaries</h3>
      <p>Boundaries aren't about being selfish—they're about sustainable giving. Start small: practice saying "no" to one thing this week, or ask for help instead of doing everything yourself.</p>

      <h3>2. Redefine "Enough"</h3>
      <p>Perfectionism often comes from an unconscious belief that you need to earn love or approval. Remind yourself: you are enough, exactly as you are, without needing to prove it.</p>

      <h3>3. Release The Role</h3>
      <p>You don't have to be everyone's everything. Allow yourself to step back from the role of family fixer and emotional caretaker. Others can handle their own feelings and problems.</p>

      <h3>4. Practice Self-Compassion</h3>
      <p>When you make a mistake or feel overwhelmed, treat yourself with the same kindness you'd show a friend. You're human, and that's not a flaw—it's your strength.</p>

      <h2>You Don't Have To Do This Alone</h2>
      <p>If you recognize yourself in this description, know that you're not alone, and you don't have to keep carrying this weight. As a first-gen Latina and eldest daughter myself, I understand exactly what this feels like. I help ambitious women like you break free from these patterns so you can create a life that's authentic to you—not one based on meeting everyone else's expectations.</p>

      <p>Therapy can provide a safe space to explore these patterns, understand where they come from, and develop new ways of being that honor both your values and your needs. Together, we can work toward solutions that bring lasting change.</p>
    `,
	},
};

export async function generateStaticParams() {
	return Object.keys(posts).map((slug) => ({
		slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const post = posts[slug as keyof typeof posts];

	if (!post) {
		return {
			title: 'Post Not Found',
		};
	}

	return {
		title: `${post.title} | Monica Denais`,
		description: post.excerpt,
		alternates: {
			canonical: `https://monicadenais.com/blog/${slug}`,
		},
	};
}

export default async function BlogPost({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = posts[slug as keyof typeof posts];

	if (!post) {
		notFound();
	}

	return (
		<>
			<div className='bg-beige px-4 py-8 lg:py-24'>
				<div className='max-w-4xl mx-auto'>
					<Link
						href='/blog'
						className='text-primary hover:text-sage transition-colors mb-8 inline-flex items-center gap-2'>
						<ChevronLeftIcon className='w-5 h-5' />
						Back to blog
					</Link>

					<article className='bg-white p-8 md:p-12 rounded-lg shadow-sm border border-olivewood/10'>
						{slug === 'eldest-daughter-syndrome' && (
							<div className='mb-6 rounded-lg overflow-hidden'>
								<Image
									src='/monica-denais-counseling-north-texas1.jpg'
									alt='Therapy space'
									width={800}
									height={600}
									className='w-full h-auto object-cover rounded-lg'
								/>
							</div>
						)}
						<p className='text-sm text-sage mb-4'>{post.date}</p>
						<h1 className='text-4xl md:text-5xl font-serif text-primary mb-6'>
							{post.title}
						</h1>

						<div
							className='prose prose-lg max-w-none text-primary leading-relaxed'
							dangerouslySetInnerHTML={{ __html: post.content }}
						/>

						<div className='mt-12 pt-8 border-t border-olivewood/20'>
							{/* <Button
								href='/contact'
								variant='secondary'
								asChild>
								Interested in therapy? Let's talk
							</Button> */}
              <SimplePracticeWidget
									buttonText="Interested in therapy? Let's talk"
									widgetType='OAR'
									variant='secondary'
									className='mt-6'
								/>
						</div>
					</article>
				</div>
			</div>
			<Footer />
		</>
	);
}
