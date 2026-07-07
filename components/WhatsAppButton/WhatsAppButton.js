'use client';
import Link from 'next/link';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  const phoneNumber = '51966301171';
  const encodedMessage = encodeURIComponent('I want more information. I´m interested.');
  const href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <Link href={href} className={styles.whatsappBtn} target="_blank" rel="noopener noreferrer">
      <span className={styles.iconSpan}>
        <i className="fab fa-whatsapp"></i>
      </span>
    </Link>
  );
}
