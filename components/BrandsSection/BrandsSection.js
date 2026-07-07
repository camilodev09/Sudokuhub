'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './BrandsSection.module.css';

gsap.registerPlugin(useGSAP);

export default function BrandsSection() {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.to('.brand-item', {
      xPercent: -100,
      ease: 'none',
      duration: 10,
      repeat: -1,
      stagger: 0,
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0)
      }
    });
  }, { scope: containerRef });

  return (
    <section className={styles.brandsSection}>
      <div className={styles.marqueeContainer} ref={containerRef}>
        <div className={styles.marqueeTrack}>
          {/* Double the elements to create a seamless infinite scroll effect */}
          {[...Array(2)].map((_, i) => (
            <div className={`brand-item ${styles.marqueeGroup}`} key={i}>
              <h3 className={styles.brandText}>PLAYSTATION 5</h3>
              <span className={styles.separator}>✦</span>
              <h3 className={styles.brandText}>XBOX SERIES X</h3>
              <span className={styles.separator}>✦</span>
              <h3 className={styles.brandText}>NINTENDO SWITCH</h3>
              <span className={styles.separator}>✦</span>
              <h3 className={styles.brandText}>PC GAMING</h3>
              <span className={styles.separator}>✦</span>
              <h3 className={styles.brandText}>RAZER</h3>
              <span className={styles.separator}>✦</span>
              <h3 className={styles.brandText}>LOGITECH G</h3>
              <span className={styles.separator}>✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
