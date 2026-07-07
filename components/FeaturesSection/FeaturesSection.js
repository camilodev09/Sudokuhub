'use client';
import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './FeaturesSection.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FeaturesSection() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.feature-img', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      ease: 'power2.out'
    });

    gsap.from('.feature-content', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 70%',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'back.out(1.7)'
    });
  }, { scope: container });

  return (
    <section className={styles.featuresSection} ref={container}>
      <div className={styles.mainContainer}>
        <div className={styles.flexCenter}>
          <img
            src="/assets/banner2.png"
            alt="Feature Image"
            className={`feature-img ${styles.bannerImg}`}
          />
          <div className={`feature-content ${styles.absoluteContent}`}>
            <h2 className={styles.title}>
              Shop at Sudoku Games
            </h2>
            <p className={styles.description}>
              Looking for the ultimate gaming experience? <br />
              Look no further! Our selection of games <br />
              has something for every type of gamer <br />
              from the hottest new releases to retro classics <br />
              that will take you back in time. <br />
              Get ready to level up your gaming <br />
              with our wide range of titles!
            </p>
            <Link href="#" className={styles.actionBtn}>
              More info
              <i className={`fas fa-info ${styles.icon}`}></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
