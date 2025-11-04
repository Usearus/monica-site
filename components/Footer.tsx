import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-olivewood text-primary-inverse px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-serif mb-6">Contact information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-beige mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a 
                    href="mailto:mdenais@monicadenais.com" 
                    className="text-beige hover:text-sage transition-colors underline"
                  >
                    mdenais@monicadenais.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-beige mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium mb-1">Location</p>
                  <p>Telehealth services in Texas (Pending Florida)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours of Operation */}
          <div>
            <h3 className="text-2xl font-serif mb-6 flex items-center gap-2">
              Hours of operation
            </h3>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <p><strong>Monday</strong></p>
                <p>12:00pm - 7:00pm</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <p><strong>Tuesday</strong></p>
                <p>8:00am - 3:00pm</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <p><strong>Wednesday</strong></p>
                <p>Closed</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <p><strong>Thursday</strong></p>
                <p>8:00am - 3:00pm</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <p><strong>Friday</strong></p>
                <p>Closed</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <p><strong>Saturday</strong></p>
                <p>Closed</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <p><strong>Sunday</strong></p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

