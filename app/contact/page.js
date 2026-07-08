'use client';

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen bg-carbon">
      <div className="container mx-auto px-4 py-16 h-full flex items-center">
        
        <div className="glass-panel w-full flex flex-col md:flex-row overflow-hidden border tech-border">
          
          {/* Left Column: Interactive Map Placeholder (Cyber styled) */}
          <div className="w-full md:w-1/2 h-[250px] sm:h-[400px] md:h-[600px] relative bg-black flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
            <div className="absolute w-64 h-64 border border-cian/30 rounded-full animate-ping opacity-20"></div>
            <div className="absolute w-32 h-32 border border-cian/50 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-cian rounded-full shadow-glow-cian"></div>
            </div>
            
            {/* Real map iframe goes here, masked with CSS to fit the theme */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15609.927237936166!2d-77.0396025!3d-12.0792193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8e658b456e7%3A0x6e26cf8d4bbdb1f8!2sLima%2C%20Peru!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" 
              className="absolute inset-0 w-full h-full opacity-40 mix-blend-luminosity hover:opacity-80 transition-opacity duration-500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="absolute bottom-4 left-4 bg-carbon/90 border border-cian px-4 py-2 font-mono text-cian text-sm">
              SUDOKU HQ LOCATION
            </div>
          </div>

          {/* Right Column: Contact Info */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-16 flex flex-col justify-center bg-gradient-to-br from-graphite to-carbon relative">
            <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none"></div>
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-syne font-extrabold text-white tracking-tighter uppercase mb-8 md:mb-12 px-2 md:px-0">
              Conecta con <br/><span className="text-cian">Nosotros</span>
            </h1>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-carbon border border-cyber/30 rounded-sm flex items-center justify-center text-tactical text-xl shrink-0">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3 className="text-white font-orbitron uppercase text-lg mb-1">HQ Address</h3>
                  <p className="text-cyber font-inter leading-relaxed">Av. Arenales 1234, Lince<br/>Cyber Plaza, Piso 4, Local 402<br/>Lima, Perú</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-carbon border border-cyber/30 rounded-sm flex items-center justify-center text-tactical text-xl shrink-0">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h3 className="text-white font-orbitron uppercase text-lg mb-1">Comms</h3>
                  <p className="text-cyber font-mono">+51 970 594 631</p>
                  <p className="text-cyber font-mono">support@sudokugames.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-carbon border border-cyber/30 rounded-sm flex items-center justify-center text-tactical text-xl shrink-0">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h3 className="text-white font-orbitron uppercase text-lg mb-1">Operaciones</h3>
                  <p className="text-cyber font-inter">Lun - Sab: 10:00 AM - 10:00 PM</p>
                  <p className="text-cyber font-inter text-cian">Domingo: Torneos y Amanecidas</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4 relative z-10">
              <a href="#" className="w-12 h-12 bg-cian text-carbon hover:bg-white hover:shadow-glow-cian transition-all duration-300 rounded-sm flex items-center justify-center text-xl">
                <i className="fab fa-discord"></i>
              </a>
              <a href="https://api.whatsapp.com/send?phone=51970594631" target="_blank" rel="noreferrer" className="w-12 h-12 bg-tactical text-carbon hover:bg-white hover:shadow-glow-tactical transition-all duration-300 rounded-sm flex items-center justify-center text-xl">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-white text-carbon hover:bg-tactical transition-all duration-300 rounded-sm flex items-center justify-center text-xl">
                <i className="fab fa-instagram"></i>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
