'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './StrategyGamesSection.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function StrategyGamesSection() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.strategy-title', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
      },
      opacity: 0,
      scale: 0.5,
      duration: 0.8,
      ease: 'back.out(1.7)'
    });

    gsap.from('.strategy-banner', {
      scrollTrigger: {
        trigger: '.strategy-container',
        start: 'top 75%',
      },
      opacity: 0,
      clipPath: 'inset(100% 0 0 0)',
      duration: 1.2,
      ease: 'power3.out'
    });

    gsap.from('.strategy-content', {
      scrollTrigger: {
        trigger: '.strategy-container',
        start: 'top 60%',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: 'power2.out'
    });
  }, { scope: container });

  return (
    <section ref={container}>
      <div className={styles.container}>
        <h2 className={`strategy-title ${styles.title}`}>
          Real time <br />
          Strategy games
        </h2>

        <div className={`strategy-container ${styles.imageContainer}`}>
          <img
            src="/assets/banner3.png"
            alt="Feature Image"
            className={`strategy-banner ${styles.bannerImg}`}
          />
          <div className={styles.absoluteOverlay}>
            <div className={styles.contentFlex}>
              <div className="strategy-content">
                <div className={styles.textContentBox}>
                  <p className={styles.description}>
                    "Test your intelligence and abilities in challenging battles
                    against NPCs and other players. Face off in a game of wits and
                    skill and prove your worth as the ultimate champion. Will you
                    emerge victorious or fall to defeat? The choice is yours".
                  </p>
                </div>
              </div>
              <div className="strategy-content">
                <div className={styles.logoContainer}>
                  <div className={styles.logoBox}>
                    <p className={styles.logoText}>With support by :</p>
                    <img
                      src="/assets/logoletra.svg"
                      alt="Logo Feature"
                      className={styles.logoImg}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
