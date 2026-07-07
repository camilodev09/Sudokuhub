'use client';
import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './HeroSection.module.css';

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.banner-img', {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out'
    });

    gsap.from('.hero-element', {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 0.3,
      ease: 'power2.out'
    });
  }, { scope: container });

  return (
    <section className={styles.heroSection} ref={container}>
      <div className={styles.container}>
        <img
          src="/assets/banner.png"
          alt="land center"
          className={`banner-img ${styles.bannerImg}`}
        />
        <div className={styles.absoluteContent}>
          <div className={styles.textContent}>
            <h1 className={`hero-element ${styles.title}`}>
              Unleash <br />
              the Gamer in You!
            </h1>
            <p className={`hero-element ${styles.subtitle}`}>
              Welcome to the most exciting <br />
              video game store <br />
              Get ready to immerse yourself <br />
              in the most anticipated <br />
              video game of the year.
            </p>
          </div>
          <div className={styles.actionsRow}>
            <div className="hero-element">
              <Link href="tel:+51970594631" className={styles.actionBtn}>
                Contact Us
                <i className={`fas fa-chevron-right ${styles.icon}`}></i>
              </Link>
            </div>
            <div className="hero-element">
              <Link href="https://www.creazone.pe" className={styles.actionBtn}>
                Shop Now
                <i className={`fas fa-chevron-right ${styles.icon}`}></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
