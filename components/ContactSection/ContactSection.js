'use client';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ContactSection.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ContactSection() {
  const container = useRef();
  const [formData, setFormData] = useState({ name: '', lastName: '', phone: '', country: '', email: '', message: '' });
  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useGSAP(() => {
    gsap.from('.form-title', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
      },
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'bounce.out'
    });

    gsap.from('.contact-form-element', {
      scrollTrigger: {
        trigger: '.form-container',
        start: 'top 75%',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    });

    gsap.from('.last-banner-img', {
      scrollTrigger: {
        trigger: '.image-grid',
        start: 'top 75%',
      },
      opacity: 0,
      scale: 0.9,
      duration: 1.5,
      ease: 'power3.out'
    });

    // Subtle floating animation for the banner
    gsap.to('.last-banner-img', {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, { scope: container });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    };
    try {
      const response = await fetch("https://server-portfolio-beru.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        showModal("Message sent successfully!");
        setFormData({ name: '', lastName: '', phone: '', country: '', email: '', message: '' });
      } else {
        showModal("An error occurred. Please try again later.");
      }
    } catch (error) {
      showModal("An error occurred. Please try again later.");
    }
  };

  const showModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section ref={container}>
      <div className={styles.mainGrid}>
        <div className={`form-container ${styles.formContainer}`}>
          <h2 className={`form-title ${styles.formTitle}`}>
            Send us a message
          </h2>

          <form
            id="contact-form"
            method="POST"
            className={styles.contactForm}
            onSubmit={handleSubmit}
          >
            <div className={`contact-form-element ${styles.inputRow}`}>
              <label className={styles.label}>
                Name*
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} className={styles.input} required />
              </label>
              <label className={styles.label}>
                Last Name*
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className={styles.input} />
              </label>
            </div>

            <div className={`contact-form-element ${styles.inputRow}`}>
              <label className={styles.label}>
                Phone*
                <input type="tel" name="phone" pattern="[0-9]+" value={formData.phone} onChange={handleInputChange} className={styles.inputBlack} required />
              </label>
              <label className={styles.label}>
                Country*
                <input type="text" name="country" value={formData.country} onChange={handleInputChange} className={styles.inputBlack} />
              </label>
            </div>

            <label className={`contact-form-element ${styles.label}`}>
              Email*
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={styles.inputBlackLarge} required />
            </label>
            <label className={`contact-form-element ${styles.label}`}>
              <textarea name="message" value={formData.message} onChange={handleInputChange} className={styles.textarea} placeholder="Your message *" required></textarea>
            </label>
            <button type="submit" className={`contact-form-element ${styles.submitBtn}`}>
              Send
            </button>
          </form>

          {isModalOpen && (
            <div className={styles.modalOverlay}>
              <div className={`${styles.modalContent} ${isModalOpen ? styles.modalScale : ''}`}>
                <p className={styles.modalText}>{modalMessage}</p>
                <div className={styles.modalActions}>
                  <button onClick={closeModal} className={styles.modalBtn}>
                    OK
                  </button>
                </div>
              </div>
              <div className={styles.modalBg} onClick={closeModal}></div>
            </div>
          )}
        </div>

        <div className={`image-grid ${styles.imageGrid}`}>
          <div className={styles.relativeFlex}>
            <div className={styles.lastBannerContainer}>
              <img
                src="/assets/lastbanner.png"
                alt="Banner"
                className={`last-banner-img ${styles.lastBannerImg}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
