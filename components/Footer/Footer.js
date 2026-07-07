'use client';
import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Footer.module.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Footer() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.footer-element', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 95%',
      },
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }, { scope: container });

  return (
    <footer className={styles.footerContainer} ref={container}>
      <div className={styles.gridContainer}>
        <div className="footer-element">
          <div className={styles.textCol}>
            <div className={styles.flexCol}>
              <Link href="https://www.creazone.pe" className={styles.linkText}>
                www.creazone.pe
              </Link>
              <p className={styles.copyrightText}>Copyright © 2021 All rights reserved</p>
            </div>
          </div>
        </div>

        <div className={`footer-element ${styles.iconCol}`}>
          <Link href="https://www.facebook.com/profile.php?id=100065758831949">
            <span className={styles.iconSpan}>
              <i className="fab fa-facebook" style={{ fontSize: '30px' }}></i>
            </span>
          </Link>

          <Link href="https://www.tiktok.com/@creazone.pe?lang=es">
            <span className={styles.iconSpan}>
              <i className="fab fa-tiktok" style={{ fontSize: '30px' }}></i>
            </span>
          </Link>

          <Link href="https://api.whatsapp.com/send?phone=51966301171&text=Hola,%20¿en%20qué%20puedo%20servirte?">
            <span className={styles.iconSpan}>
              <i className="fab fa-whatsapp" style={{ fontSize: '30px' }}></i>
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
