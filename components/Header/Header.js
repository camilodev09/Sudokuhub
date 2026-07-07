'use client';
import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Header.module.css';

gsap.registerPlugin(useGSAP);

export default function Header() {
  const container = useRef();

  useGSAP(() => {
    gsap.from(container.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <header className={styles.headerx} ref={container}>
      <nav className={styles.container}>
        <div>
          <Link href="/">
            <img
              src="/assets/logoletra.svg"
              alt="Logo"
              className={styles.logo}
            />
          </Link>
        </div>
        <div className={styles.actions}>
          <Link href="https://api.whatsapp.com/send?phone=51970594631&text=Hello,%20I'm%20interested%20in%20your%20products!" className={styles.iconLink} target="_blank" rel="noopener noreferrer">
            <span className={styles.linkText}>WhatsApp</span>
            <i className="fab fa-whatsapp"></i>
          </Link>
          <Link href="tel:+51970594631" className={styles.iconLink}>
            <span className={styles.linkText}>Call Us</span>
            <i className="fas fa-phone"></i>
          </Link>
        </div>
      </nav>
    </header>
  );
}
