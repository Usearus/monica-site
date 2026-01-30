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
		coverType: 'video' as const,
		coverVideo: 'https://www.youtube.com/embed/7GnesLnP7dE',
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
	'out-of-network-therapy-reimbursement-superbill': {
		title: 'Out-of-Network Therapy Reimbursement: How to Submit a Superbill and Get Money Back',
		date: 'January 20, 2025',
		excerpt:
			'Learn how to submit a superbill and get reimbursed for out-of-network therapy sessions. This step-by-step guide helps you understand your insurance benefits and navigate the reimbursement process.',
		coverType: 'image' as const,
		coverImage: '/insurance-reimbursement.jpg',
		content: `
      <p>Finding a therapist you genuinely connect with is one of the most important parts of starting therapy. But what happens when the therapist you want to see is out-of-network with your insurance?</p>

      <p>Most people assume this means nothing will be covered — but that's not true.</p>

      <p>Many insurance plans, especially PPO plans, do reimburse for out-of-network therapy. You simply need to understand how your benefits work, what a superbill is, and how to submit it correctly.</p>

      <p>This guide breaks everything down step-by-step so you can confidently use your insurance benefits while still choosing the therapist who feels right for you.</p>

      <h2>What Does "Out-of-Network" Mean?</h2>
      <p>An out-of-network therapist is a provider who does not have a contracted rate with your insurance company.</p>

      <p>But that does not mean your therapy isn't covered.</p>

      <p>Depending on your plan, you may be eligible for:</p>
      <ul>
        <li>Partial reimbursement</li>
        <li>Reimbursement after meeting your out-of-network deductible</li>
        <li>Higher reimbursement rates with PPO plans</li>
        <li>Coverage for virtual therapy sessions</li>
      </ul>

      <p>Many clients are surprised by how much they can receive back each month once claims are submitted correctly.</p>

      <h2>Step 1: Check Your Out-of-Network Benefits</h2>
      <p>Call the number on the back of your insurance card and ask these exact questions:</p>
      <ol>
        <li>Do I have out-of-network mental health benefits?</li>
        <li>What is my out-of-network deductible, and how much is remaining?</li>
        <li>What percentage do you reimburse once the deductible is met?</li>
        <li>Do you cover CPT codes 90837 or 90834?</li>
        <li>Do you accept a standard superbill for claims?</li>
        <li>How do I submit my superbill (portal, email, or mail)?</li>
      </ol>

      <p>These answers will help you calculate what your out-of-pocket cost could be after reimbursement.</p>

      <h2>Step 2: What Is a Superbill?</h2>
      <p>A superbill is a detailed receipt that includes everything your insurance needs to process a claim. It typically includes:</p>
      <ul>
        <li>Your provider's credentials (license, NPI, etc.)</li>
        <li>Dates of service</li>
        <li>CPT codes</li>
        <li>Diagnosis code (required by insurance)</li>
        <li>Session fees</li>
      </ul>

      <p>Most private practice therapists (including myself) provide superbills monthly or upon request.</p>

      <h2>Step 3: How to Submit a Superbill</h2>
      <p>Once you have your superbill, you can submit it:</p>
      <ul>
        <li>Through your insurance member portal</li>
        <li>Via email (depending on your plan)</li>
        <li>Through the mail</li>
        <li>Or through a reimbursement service like <a href="https://www.mentaya.com/" target="_blank" rel="noopener noreferrer">Mentaya</a></li>
      </ul>

      <p>After submission, reimbursement typically takes 2–6 weeks.</p>

      <h2>Step 4: Make Reimbursement Easier With Mentaya</h2>
      <p>If the insurance process feels overwhelming or time-consuming, <a href="https://www.mentaya.com/" target="_blank" rel="noopener noreferrer">Mentaya</a> can make everything easier.</p>

      <p>Mentaya:</p>
      <ul>
        <li>Submits superbills for you</li>
        <li>Tracks reimbursement progress</li>
        <li>Estimates how much you'll get back</li>
        <li>Resubmits denied claims</li>
        <li>Keeps everything organized in one dashboard</li>
      </ul>

      <p>It takes the administrative burden off your plate and ensures you get the reimbursement you're entitled to without the stress.</p>

      <h2>A Quick Note for North Texas Clients</h2>
      <p>If you live anywhere in North Texas, reimbursement can be especially helpful. Many clients in this region face long commutes, busy schedules, or limited availability within in-network provider lists. Choosing an out-of-network therapist allows you to prioritize a therapeutic fit, flexible scheduling, and specialized care while still using your insurance benefits to reduce the cost. Reimbursement makes high-quality therapy far more accessible for North Texas residents.</p>

      <h2>Is Out-of-Network Therapy Worth It?</h2>
      <p>For many people — yes.</p>

      <p>Once reimbursement begins, out-of-network therapy can feel much more affordable. You may benefit financially if:</p>
      <ul>
        <li>You have a PPO plan</li>
        <li>You've met or are close to meeting your deductible</li>
        <li>You submit superbills consistently</li>
        <li>You use a tool like <a href="https://www.mentaya.com/" target="_blank" rel="noopener noreferrer">Mentaya</a> to streamline claims</li>
      </ul>

      <p>Many clients discover that out-of-network therapy becomes a sustainable and supportive option once benefits start applying.</p>

      <h2>Ready to Begin Therapy?</h2>
      <p>If you're looking for a supportive, grounding space designed for ambitious women navigating stress, transitions, and overwhelm, I'd love to support you.</p>
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
						{post.coverType === 'video' && post.coverVideo && (
							<div className='relative w-full aspect-video mb-6 rounded-lg overflow-hidden border border-olivewood/20 shadow-sm'>
								<iframe
									className='absolute inset-0 h-full w-full'
									src={post.coverVideo}
									title={post.title}
									loading='lazy'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
									referrerPolicy='strict-origin-when-cross-origin'
									allowFullScreen
								/>
							</div>
						)}
						{post.coverType === 'image' && post.coverImage && (
							<div className='mb-6 rounded-lg overflow-hidden'>
								<Image
									src={post.coverImage}
									alt={post.title}
									width={800}
									height={450}
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
