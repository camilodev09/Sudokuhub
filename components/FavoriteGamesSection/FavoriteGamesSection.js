'use client';
import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './FavoriteGamesSection.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FavoriteGamesSection() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.fav-banner', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      opacity: 0,
      scale: 1.1,
      duration: 1.5,
      ease: 'power2.out'
    });

    gsap.from('.fav-content', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 60%',
      },
      opacity: 0,
      x: 100,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section className={styles.section} ref={container}>
      <div className={styles.flexCenter}>
        <img
          src="/assets/banner55.png"
          alt="Feature Image"
          className={`fav-banner ${styles.bannerImg}`}
        />
        <div className={styles.absoluteContainer}>
          <div className={styles.contentBox}>
            <h2 className={`fav-content ${styles.title}`}>
              favorite games
            </h2>
            <p className={`fav-content ${styles.take}`}>
              ¡Take your gaming skills to the next level at our <br />
              top-notch gaming center!
            </p>
            <div className={`fav-content ${styles.actionContainer}`}>
              <Link href="#" className={styles.actionBtn}>
                See More
                <i className={`fas fa-chevron-right ${styles.icon}`}></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
