'use client';
import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ConsolesSection.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ConsolesSection() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.console-content', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      },
      opacity: 0,
      x: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section className={styles.consolesSection} ref={container}>
      <div>
        <div className={styles.flexCenter}>
          <img
            src="/assets/banner4.png"
            alt="Feature Image"
            className={styles.bannerImg}
          />
          <div className={styles.absoluteContent}>
            <h2 className={`console-content ${styles.title}`}>
              NEW CONSOLES FOR YOU
            </h2>
            <p className={`console-content ${styles.description}`}>
              Lose yourself in exotic worlds <br />
              where your mission is to save the day.
            </p>
            <div className="console-content">
              <Link href="#" className={styles.actionBtn}>
                Go to Store
                <i className={`fas fa-store ${styles.icon}`}></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
