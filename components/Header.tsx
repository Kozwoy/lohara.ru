'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoGroup}>
          <a className='link__home' href='#'>
            <Image 
              src="/logo.png" 
              alt="Logo"
              width={121}
              height={128}
              className={styles.logoImage}
            />
          </a>
          <div className={styles.logoText}>
            <div className={styles.brandName}>DivineExpertus</div>
            <div className={styles.team}>TEAM</div>
          </div>
        </div>

        <nav className={styles.nav}>
          <a 
            href="#creations" 
            className={styles.navLink} 
            onClick={(e) => scrollToSection(e, 'creations')}
          >
            Творения
          </a>
          <Link 
            href="#team" 
            className={styles.navLink} 
            onClick={(e) => scrollToSection(e, 'team')}
          >
            Команда
          </Link>
        </nav>

        <a href='https://pdiddy.ru' className={styles.actionButton}>Стать умнее</a>
      </div>
    </header>
  );
}