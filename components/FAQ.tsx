'use client';

import { useState, useEffect, ReactNode } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import MentayaWidget from './MentayaWidget';

// Helper function to parse HTML tags in strings and convert to JSX
const parseAnswer = (answer: string | ReactNode): ReactNode => {
  if (typeof answer !== 'string') {
    return answer;
  }
  
  // Split by newlines to preserve paragraph breaks
  const paragraphs = answer.split('\n\n');
  
  return paragraphs.map((paragraph, pIndex) => {
    if (!paragraph.trim()) return null;
    
    // Check if paragraph contains <strong> tags
    if (!paragraph.includes('<strong>')) {
      return (
        <p key={pIndex} className={pIndex > 0 ? 'mt-4' : ''}>
          {paragraph}
        </p>
      );
    }
    
    // Parse <strong> tags
    const parts: ReactNode[] = [];
    const strongRegex = /<strong>(.*?)<\/strong>/g;
    let lastIndex = 0;
    let match;
    let key = 0;
    
    while ((match = strongRegex.exec(paragraph)) !== null) {
      // Add text before the tag
      if (match.index > lastIndex) {
        parts.push(paragraph.substring(lastIndex, match.index));
      }
      // Add the strong tag content
      parts.push(<strong key={key++}>{match[1]}</strong>);
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < paragraph.length) {
      parts.push(paragraph.substring(lastIndex));
    }
    
    return (
      <p key={pIndex} className={pIndex > 0 ? 'mt-4' : ''}>
        {parts}
      </p>
    );
  });
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What kind of issues do you help with?",
      answer: "I specialize in supporting ambitious women, eldest daughters, and first-gens through a variety of challenges. My areas of focus include perfectionism, anxiety, OCD, burnout, self-doubt, and family issues. I use CBT (Cognitive Behavioral Therapy) and solution-focused therapy approaches to help you work through the pressure, expectations, and burnout that come with holding everything together. Whether you're dealing with the unique pressures of being the first in your family to navigate certain spaces, the weight of being the eldest daughter, or the constant drive to be perfect, I'm here to help you break free from these patterns and create a life that feels authentic to you.",
      hasWidget: false,
    },
    {
      question: "How much do therapy sessions cost?",
      answer: "My standard rate is $140 per 50-minute session. Payment is due at the time of each session. If you're using an Employee Assistance Program (EAP), we'll discuss those options before starting therapy. I also accept HSA and FSA cards as forms of payment.",
      hasWidget: false,
    },
    {
      question: "Do you take insurance?",
      answer: "I am in-network with UnitedHealthcare for clients located in Texas. At this time, insurance is accepted only for Texas residents.",
      hasWidget: false,
    },
    {
      question: "What if my insurance isn't listed?",
      answer: "If you have a different insurance plan or if you’re located outside of Texas, and I do not accept your insurance, I’m considered out-of-network. This means you’ll pay out of pocket for sessions, but I can provide a superbill (an itemized receipt) that you can submit to your insurance for possible reimbursement.\n\nPlease note: reimbursement is not guaranteed, and it’s your responsibility to verify your out-of-network benefits with your insurance plan. I’m not responsible for whether your insurance accepts or reimburses your claim.\n\nAdditionally, I have partnered with Mentaya to help clients use their out-of-network benefits and potentially save money on therapy. You can use the tool below to check whether you may qualify for reimbursement for my services.",
      hasWidget: true,
    },
    {
      question: "How long are sessions and how often do we meet?",
      answer: "Each session lasts about 50 minutes. Most clients begin with weekly sessions to build consistency, then transition to biweekly or monthly as progress continues. I'll share my professional recommendation after our first session based on your goals, and we can adjust the frequency to fit your needs and budget.",
      hasWidget: false,
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "Please cancel or reschedule at least 24 hours in advance using your SimplePractice client portal. Cancellations made less than 24 hours in advance, or missed appointments, will be charged the full session fee, since that time is reserved just for you.",
      hasWidget: false,
    },
    {
      question: "Do you offer virtual sessions?",
      answer: "Yes! All sessions are held virtually through a secure, HIPAA-compliant platform. You can join from the comfort of your home or any private space within Texas or Florida.",
      hasWidget: false,
    },
    {
      question: "What can I expect in the first session?",
      answer: "Your first session is all about getting to know you. We'll talk about what brings you to therapy, your goals, and what you hope to get out of our work together. It's also a chance for you to see if I'm the right fit for you. You don't need to prepare anything, just come as you are.",
      hasWidget: false,
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Check for hash to open specific FAQ
  useEffect(() => {
    const hash = window.location.hash;
    
    // Find the insurance FAQ index
    const insuranceIndex = faqs.findIndex(
      (faq) => faq.question.toLowerCase().includes('insurance')
    );
    
    if (hash === '#insurance') {
      if (insuranceIndex !== -1) {
        setOpenIndex(insuranceIndex);
        // Scroll to the FAQ after a short delay to ensure it's rendered
        setTimeout(() => {
          const element = document.getElementById(`faq-${insuranceIndex}`);
          if (element) {
            const headerOffset = 180; // Approximate header height + extra spacing
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} id={`faq-${index}`} className="bg-white rounded-lg shadow-sm border border-bark/10 overflow-hidden transition-all duration-200 scroll-mt-32">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-beige transition-colors"
            >
              <h2 className="text-xl md:text-2xl font-serif text-primary pr-8">{faq.question}</h2>
              <ChevronDownIcon
                className={`w-6 h-6 text-secondary shrink-0 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6">
                <div className="text-lg text-secondary leading-relaxed">
                  {parseAnswer(faq.answer)}
                </div>
                {faq.hasWidget && (
                  <div className="mt-6">
                    <MentayaWidget />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Good Faith Estimate Section */}
      <div className="mt-24">
        <h2 className="text-3xl font-serif text-primary mb-6">Good Faith Estimate (No Surprises Act)</h2>
        <div className="space-y-4 text-lg text-secondary leading-relaxed">
          <p>
            You have the right to receive a Good Faith Estimate explaining how much your mental health services will cost. Under federal law, healthcare providers must give patients who don't have insurance or who are not using insurance an estimate of the expected charges for services.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>You can request a Good Faith Estimate before scheduling or at any time during treatment.</li>
            <li>Your estimate will include the cost of each session and how often we plan to meet.</li>
            <li>If you receive a bill that is $400 or more than your Good Faith Estimate, you have the right to dispute it.</li>
          </ul>
          <p>
            For questions or more information about your right to a Good Faith Estimate, visit{' '}
            <a 
              href="https://www.cms.gov/nosurprises" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sage hover:text-olivewood underline transition-colors"
            >
              www.cms.gov/nosurprises
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}