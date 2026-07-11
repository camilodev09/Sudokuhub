'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const TESTIMONIALS = [
  {
    name: 'Alex "Viper" Chen',
    role: 'Pro VALORANT Player',
    text: 'The latency in the LAN Zone is literally zero. The 240Hz monitors and RTX 4070s give you a massive competitive advantage. Sudoku is my second home.',
    avatar: '/assets/testimonials/alex_viper_chen.jpg'
  },
  {
    name: 'Sarah "Nova" Jenkins',
    role: 'Twitch Streamer',
    text: 'I bought all the components for my new streaming PC at their store. The tech advice was God-tier and the hardware performs spectacularly.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Team Overclock',
    role: 'CS2 Champions',
    text: 'We do our bootcamps here before the majors. The atmosphere, ergonomic chairs, and internet connection are simply unmatched in the city.',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  }
];

export default function CommunityTestimonialsSection() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.testimonial-card', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      },
      scale: 0.9,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-graphite relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cian/5 blur-[120px] rounded-full pointer-events-none transform translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-syne font-extrabold text-white uppercase tracking-tighter px-2 md:px-0">
            Community <span className="text-tactical">Voices</span>
          </h2>
          <p className="text-cyber font-inter mt-4 max-w-2xl mx-auto">
            Join hundreds of pro gamers and enthusiasts who already trust Sudoku Prime to take their game to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="testimonial-card bg-carbon border border-white/10 p-8 rounded-sm relative group hover:border-cian/50 transition-colors duration-500">
              <i className="fas fa-quote-right absolute top-6 right-6 text-4xl text-white/5 group-hover:text-cian/20 transition-colors duration-500"></i>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-tactical">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <h4 className="text-white font-orbitron font-bold">{t.name}</h4>
                  <p className="text-cian text-sm font-inter">{t.role}</p>
                </div>
              </div>
              
              <p className="text-cyber font-inter leading-relaxed italic">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
