'use client';
import { useState } from 'react';

export default function LanPage() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [pcs, setPcs] = useState(1);
  const [success, setSuccess] = useState(false);

  const handleReservation = (e) => {
    e.preventDefault();
    if (date && time && pcs) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-carbon overflow-hidden">
      
      {/* Hero with Reservation Widget */}
      <div className="relative w-full h-[90vh] flex flex-col md:flex-row items-center justify-between px-4 md:px-16 pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/80 to-transparent"></div>
        <div className="absolute inset-0 bg-cian/10 mix-blend-color"></div>

        {/* Left Content */}
        <div className="relative z-10 max-w-2xl text-left md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-syne font-extrabold text-cian uppercase tracking-tighter drop-shadow-2xl px-2 md:px-0">PREMIUM LAN ZONE</h1>
          <p className="mt-6 text-xl font-inter text-white opacity-90 leading-relaxed">
            Experience true performance. 50+ stations equipped with NVIDIA RTX 4070, Zowie 240Hz monitors, and premium ergonomic chairs. Zero lag.
          </p>
        </div>

        {/* Right Widget */}
        <div className="relative z-10 w-full md:w-[400px] glass-panel p-8 rounded-sm shadow-2xl mt-8 md:mt-0">
          <h2 className="text-2xl font-orbitron text-cian mb-6 text-center uppercase tracking-widest">Book Your PC</h2>
          
          <form onSubmit={handleReservation} className="flex flex-col gap-4">
            <div>
              <label className="block text-cyber font-inter text-sm mb-1 uppercase tracking-wider">Date</label>
              <input 
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-black/50 border border-cyber/30 rounded-sm px-4 py-3 text-white font-mono focus:border-cian focus:outline-none transition-colors"
                required
              />
            </div>
            
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-cyber font-inter text-sm mb-1 uppercase tracking-wider">Time</label>
                <select 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-black/50 border border-cyber/30 rounded-sm px-4 py-3 text-white font-mono focus:border-cian focus:outline-none transition-colors"
                  required
                >
                  <option value="" disabled>Select</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="18:00">06:00 PM</option>
                  <option value="22:00">10:00 PM (Overnight)</option>
                </select>
              </div>
              <div className="w-1/2">
                <label className="block text-cyber font-inter text-sm mb-1 uppercase tracking-wider">PC Count</label>
                <input 
                  type="number" 
                  min="1" 
                  max="10"
                  value={pcs}
                  onChange={(e) => setPcs(e.target.value)}
                  className="w-full bg-black/50 border border-cyber/30 rounded-sm px-4 py-3 text-white font-mono focus:border-cian focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <button type="submit" className="mt-4 w-full bg-cian text-carbon font-orbitron font-bold text-lg px-6 py-4 rounded-sm uppercase tracking-widest hover:shadow-glow-cian transition-all duration-300 transform hover:-translate-y-1">
              {success ? 'Booking Confirmed!' : 'Confirm Booking'}
            </button>
          </form>
        </div>
      </div>

      {/* Tournaments Section */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        <h2 className="text-3xl font-syne text-white uppercase mb-12 border-l-4 border-cian pl-4">Upcoming Tournaments</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            { title: 'VALORANT MASTERS LIMA', date: 'Friday 19, 18:00', prize: '$1,500 USD', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3' },
            { title: 'CS2 WEEKEND BRAWL', date: 'Saturday 20, 15:00', prize: '$500 USD', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3' },
          ].map((tourney, idx) => (
            <div key={idx} className="glass-panel flex flex-col md:flex-row overflow-hidden group">
              <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden bg-black">
                <img src={tourney.img} alt={tourney.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-cian/20 mix-blend-color"></div>
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <h3 className="text-2xl font-orbitron text-cian mb-2">{tourney.title}</h3>
                <p className="text-white font-inter mb-1"><i className="far fa-calendar-alt text-cyber mr-2"></i>{tourney.date}</p>
                <p className="text-tactical font-mono font-bold text-lg mb-6"><i className="fas fa-trophy text-tactical mr-2"></i>Prize Pool: {tourney.prize}</p>
                <button className="self-start border border-cian text-cian hover:bg-cian hover:text-carbon font-inter font-bold px-6 py-2 rounded-sm uppercase tracking-wide transition-colors duration-300">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
