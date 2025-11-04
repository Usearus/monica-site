import Footer from '@/components/Footer';
import Button from '@/components/Button';

export const metadata = {
	title: 'About | Monica Denais',
	description:
		'Licensed counselor helping ambitious women break free from perfectionism and embrace confidence. Solution-focused therapy for lasting change.',
};

export default function About() {
	return (
		<>
			<div className='bg-beige px-4 py-8 lg:py-24'>
				<div className='max-w-4xl mx-auto'>
					<h1 className='text-5xl md:text-6xl font-serif text-secondary mb-6'>
						About Monica Denais
					</h1>
					<div className='space-y-6 text-lg text-secondary leading-relaxed'>
						<p>
							Hi, I'm Monica, a Licensed Professional Counselor, eldest
							daughter, and proud first-gen Latina who grew up in a border town
							in Texas where therapy wasn't something people talked about. Like
							many of the women in my family, I learned early on how common it
							is to hold everything together on the outside while quietly
							struggling on the inside.
						</p>
						<p>That lived experience is part of why I became a therapist.</p>
						<p>
							I saw firsthand how stress, perfectionism, and the pressure to
							stay strong affect ambitious women especially first-gens. And I
							know how exhausting it feels to constantly achieve, yet never feel
							satisfied or "enough."
						</p>
						<h2 className='text-3xl font-serif text-secondary mt-12 mb-4'>
							Who I Work With
						</h2>
						<p>
							I specialize in helping high-achieving women and first-gens
							navigate:
						</p>
						<ul className='list-disc list-inside space-y-2 ml-4'>
							<li>High-achieving anxiety</li>
							<li>Perfectionism</li>
							<li>Burnout</li>
							<li>OCD</li>
							<li>Self-doubt and comparison</li>
							<li>The pressure to be "the strong one"</li>
						</ul>
						<p>
							For years, I've provided evidence-based support to first-gen
							women, eldest daughters, and high achievers who navigate invisible
							emotional labor and internal pressure. My work focuses on women
							who juggle cultural expectations, perfectionism, and the pressure
							to succeed often without a roadmap or support.
						</p>
						<h2 className='text-3xl font-serif text-secondary mt-12 mb-4'>
							How I Work
						</h2>
						<p>
							My therapy style is direct, collaborative, and deeply practical.
						</p>
						<p>
							I don't just sit and nod, we actively work together to understand
							your patterns, challenge unhelpful beliefs, and build new coping
							skills that actually fit your real life.
						</p>
						<p>
							You'll find that I mix{' '}
							<strong>CBT, ACT, and Solution-Focused Brief Therapy</strong>,
							along with a bit of humor, compassion, and yes… I will absolutely
							exchange memes or TikToks if it helps me understand your
							experience better.
						</p>
						<h2 className='text-3xl font-serif text-secondary mt-12 mb-4'>
							Virtual Therapy
						</h2>
						<p>
							All sessions are virtual, so you can show up from wherever you
							feel safest whether its at home, your car, or even in comfy
							clothes on your couch. Therapy should fit your life, not make it
							harder. I'm currently licensed in <strong>Texas.</strong>
						</p>
						<h2 className='text-3xl font-serif text-secondary mt-12 mb-4'>
							Why This Work Matters to Me
						</h2>
						<p>
							As a high-achieving eldest daughter, I pushed myself fast and
							hard, hit goals quickly, and still felt unsatisfied. I compared
							myself to others, felt jealous, frustrated, and constantly
							disappointed in myself, even when I was succeeding.
						</p>
						<p>I want more Latinas and more women to know:</p>
						<p>Your worth is not measured by how much you achieve.</p>
						<p>
							Success is only one part of a satisfying life not the whole story.
						</p>
						<h2 className='text-3xl font-serif text-secondary mt-12 mb-4'>
							Outside the Therapy Room
						</h2>
						<p>
							I'm a coffee lover, a Pilates girly, a self-care enthusiast, and a
							fan of a good thriller.
						</p>
						<p>
							I value authenticity, vulnerability, and spaces where people don't
							have to pretend.
						</p>
						<p>
							And if we meet virtually, there's a good chance my schnauzer,{' '}
							<strong>Wilson</strong>, will peek into the frame to say hello.
						</p>
						<p>
							If you're ready to stop carrying everything alone and want support
							that feels honest, practical, and validating, I'd love to connect
							with you.
						</p>
					</div>
				</div>
			</div>

			{/* Ready to feel better - Full Width Section */}
			<section className='bg-sage/10 px-4 py-16 border-t border-sage/20 border-b'>
				<div className='max-w-7xl mx-auto text-center'>
					<h2 className='text-3xl md:text-4xl font-serif text-primary mb-6'>
						Ready to feel better?
					</h2>
					<div className='text-lg text-secondary leading-relaxed'>
						<p className='text-secondary mt-4'>
							<strong>Click below to schedule a free 15-minute consult.</strong>
						</p>
						<Button
							href='https://monica-denais.clientsecure.me/contact-widget'
							target='_blank'
							rel='noopener noreferrer'
							variant='secondary'
							className='mt-4'>
							Book a free consult
						</Button>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
