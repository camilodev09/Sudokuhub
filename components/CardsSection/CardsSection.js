'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './CardsSection.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CardsSection() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.header-element', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: 'back.out(1.7)'
    });

    gsap.from('.game-card', {
      scrollTrigger: {
        trigger: '.cards-grid',
        start: 'top 85%',
      },
      opacity: 0,
      y: 100,
      rotationY: 45,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section ref={container}>
      <div className={styles.joinContainer}>
        <div className={`header-element ${styles.headerRow}`}>
          <img
            src="/assets/7.svg"
            alt="Feature Image"
            className={styles.headerImg}
          />
          <h2 className={styles.headerTitle}>
            Join the Gaming Revolution
          </h2>
        </div>
        <div className={`cards-grid ${styles.cardsGrid}`}>
          {/* Card 1 */}
          <div className={`game-card ${styles.card}`}>
            <h3 className={styles.cardTitlePurple}>
              <i className="fas fa-gamepad fa-6x"></i>
              Unleash Your Inner <span className={styles.textYellow}>Gamer</span>
            </h3>
            <p className={styles.cardText}>
              “Experience ultimate gaming at our state-of-the-art center. Latest
              games and technology. Join us today!”
            </p>
          </div>
          {/* Card 2 */}
          <div className={`game-card ${styles.card}`}>
            <h3 className={styles.cardTitlePink}>
              <i className="fas fa-users fa-6x"></i>
              <span>
                Get Your <span className={styles.textYellow}>Game</span> On
              </span>
            </h3>
            <p className={styles.cardText}>
              “Hang out with friends and enjoy gaming action at our center. Wide
              variety of games and welcoming atmosphere.”
            </p>
          </div>
          {/* Card 3 */}
          <div className={`game-card ${styles.card}`}>
            <h3 className={styles.cardTitlePurple}>
              <i className="fas fa-trophy fa-5x"></i>
              Level Up Your <br />
              <span className={styles.textYellow}>Gaming</span>
            </h3>
            <p className={styles.cardText}>
              “Take your gaming skills to the next level at our top-notch
              center. Expert staff and latest equipment.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
