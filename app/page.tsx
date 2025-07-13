'use client';

import Header from '@/components/Header';
import styles from './page.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface PanelStyle {
  top: string;
  left: string;
  transform: string;
  width: string;
  height: string;
  opacity: number;
}

export default function Home() {
  const [panelStyles, setPanelStyles] = useState<PanelStyle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  // Генерация стилей только на клиенте
  const styles = Array.from({ length: 25 }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    transform: `rotateX(55deg) rotateZ(${Math.random() * 360}deg)`,
    width: `${100 + Math.random() * 150}px`,
    height: `${60 + Math.random() * 100}px`,
    opacity: 0.05 + Math.random() * 0.1,
  }));
  setPanelStyles(styles);
  setIsLoading(false);
}, []);

useEffect(() => {
  if (isLoading) return;

  const elements = document.querySelectorAll(`.${styles.serviceCard}`);
  
  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.fadeInVisible);
        } else {
          entry.target.classList.remove(styles.fadeInVisible);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => {
    el.classList.add(styles.fadeIn);
    observer.observe(el);
  });

  return () => {
    elements.forEach((el) => {
      if (el) {
        observer.unobserve(el);
      }
    });
  };
}, [isLoading, styles.serviceCard, styles.fadeIn, styles.fadeInVisible]);

  return (
    <>
      {isLoading ? (
        <div className={styles.loading}>Загрузка...</div>
      ) : (
        <div className={styles.panelBackground}>
          {panelStyles.map((style, i) => (
            <div key={i} className={styles.panel3D} style={style} />
          ))}
        </div>
      )}

      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            DivineExpertus <span className={styles.team}>TEAM</span>
          </h1>
          <p className={styles.description}>
            Одна из лучших команд по созданию ботов.
          </p>
        </div>

        <div className={styles.cube}>
          <div className={`${styles.cubeFace} ${styles.front}`}>
            <Image 
              src="/DivineExpert.png" 
              alt="Cube Face" 
              width={100} 
              height={100}
              className={styles.cubeImage}
            />
          </div>
          <div className={`${styles.cubeFace} ${styles.back}`}>
            <Image 
              src="/DivineExpert.png" 
              alt="Cube Face" 
              width={100} 
              height={100}
              className={styles.cubeImage}
            />
          </div>
          <div className={`${styles.cubeFace} ${styles.right}`}>
            <Image 
              src="/DivineExpert.png" 
              alt="Cube Face" 
              width={100} 
              height={100}
              className={styles.cubeImage}
            />
          </div>
          <div className={`${styles.cubeFace} ${styles.left}`}>
            <Image 
              src="/DivineExpert.png" 
              alt="Cube Face" 
              width={100} 
              height={100}
              className={styles.cubeImage}
            />
          </div>
          <div className={`${styles.cubeFace} ${styles.top}`}>
            <Image 
              src="/DivineExpert.png" 
              alt="Cube Face" 
              width={100} 
              height={100}
              className={styles.cubeImage}
            />
          </div>
          <div className={`${styles.cubeFace} ${styles.bottom}`}>
            <Image 
              src="/DivineExpert.png" 
              alt="Cube Face" 
              width={100} 
              height={100}
              className={styles.cubeImage}
            />
          </div>
        </div>

        <section id="creations" className={styles.creations}>
          <h2 className={styles.creationsTitle}>Творения</h2>

          <a className={styles.linkService} href='https://discord.com/invite/MeV9RuyQ5c'>
            <div className={`${styles.serviceCard} ${styles.rrbw}`}>
              <div className={styles.cardContent}>
                <h3 className={styles.serviceTitle}>RRBW</h3>
                <p className={styles.serviceDescription}>
                  Соревновательный режим по бедварсу для проектов Revage и MineBlaze.
                </p>
              </div>
              <div className={styles.cardImage}>
                <Image
                  src="/rrbw.png"
                  alt="RRBW"
                  width={280}
                  height={200}
                  className={styles.serviceImage}
                />
              </div>
            </div>
          </a>

          <a className={styles.linkService} href='https://discord.com/invite/zQfZy36CvZ'>
            <div className={`${styles.serviceCard} ${styles.rvstats}`}>
              <div className={styles.cardImage}>
                <Image
                  src="/rvstats.png"
                  alt="Rvstats"
                  width={280}
                  height={200}
                  className={styles.serviceImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.serviceTitle}>Rvstats</h3>
                <p className={styles.serviceDescription}>
                  Дискорд бот, который показывает вашу статистику на сервере Revage.
                </p>
              </div>
            </div>
          </a>

          <a className={styles.linkService} href='https://t.me/rvgs_bot'>
            <div className={`${styles.serviceCard} ${styles.rvgs}`}>
              <div className={styles.cardContent}>
                <h3 className={styles.serviceTitle}>Rvgs_bot</h3>
                <p className={styles.serviceDescription}>
                  Телеграм бот технической поддержки сервера Revage.
                </p>
              </div>
              <div className={styles.cardImage}>
                <Image 
                  src="/rvgs.png" 
                  alt="Rvgs"
                  width={280}
                  height={200}
                  className={styles.serviceImage}
                />
              </div>
            </div>
          </a>
        </section>

        <section id='team' className={styles.teamCard}>
          <h2 className={styles.teamTitle}>Команда</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamWrapper}>
              <div className={styles.teamPerson}>
                <span className={styles.teamName}>Владислав Ююю</span>
                <span className={styles.teamWrapper__span}>
                  <span className={styles.teamRole}>Главный</span>
                  <span>Разработчик</span>
                </span>
              <button 
                className={styles.teamDiscordBtn}
                onClick={() => window.open('https://discordlookup.com/user/995683349098147861', '_blank')}
              >
                <Image 
                  src="/discord.png" 
                  alt="Discord" 
                  width={25} 
                  height={25} 
                  style={{ marginRight: '8px', verticalAlign: 'middle' }}
                  className={styles.whiteDiscordIcon}
                />
                Discord
              </button>
              </div>
              <div className={styles.teamHead}>
                <Image 
                  src="/Kozwoy.png" 
                  alt="Kozwoy"
                  width={120}
                  height={120}
                  className={styles.teamImage}
                />
              </div>
            </div>

            <div className={styles.teamWrapper}>
              <div className={styles.teamPerson}>
                <span className={styles.teamName}>Андрей Менухин</span>
                <span className={styles.teamWrapper__span}>
                  <span className={styles.teamRole}>Главный</span>
                  <span>Разработчик</span>
                </span>
              <button 
                className={styles.teamDiscordBtn}
                onClick={() => window.open('https://discordlookup.com/user/1219972549782405251', '_blank')}
              >
                <Image 
                  src="/discord.png" 
                  alt="Discord" 
                  width={25} 
                  height={25} 
                  style={{ marginRight: '8px', verticalAlign: 'middle' }}
                  className={styles.whiteDiscordIcon}
                />
                Discord
              </button>
              </div>
              <div className={styles.teamHead}>
                <Image 
                  src="/azer163.png" 
                  alt="azer163"
                  width={120}
                  height={120}
                  className={styles.teamImage}
                />
              </div>
            </div>

            <div className={styles.teamWrapper}>
              <div className={styles.teamPerson}>
                <span className={styles.teamName}>Никита Старков</span>
                <span className={styles.teamWrapper__span}>
                  <span className={styles.teamRole}>Технический</span>
                  <span>Администратор</span>
                </span>
              <button 
                className={styles.teamDiscordBtn}
                onClick={() => window.open('https://discordlookup.com/user/1151531052473532457', '_blank')}
              >
                <Image 
                  src="/discord.png" 
                  alt="Discord" 
                  width={25} 
                  height={25} 
                  style={{ marginRight: '8px', verticalAlign: 'middle' }}
                  className={styles.whiteDiscordIcon}
                />
                Discord
              </button>
              </div>
              <div className={styles.teamHead}>
                <Image 
                  src="/jlqr.png" 
                  alt="jlqr"
                  width={120}
                  height={120}
                  className={styles.teamImage}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTitle}>
          <Image 
              src="/logo.png" 
              alt="Logo"
              width={121}
              height={128}
              className={styles.logoImage}
            />
          <h2>© DivineExpertus TEAM</h2>
        </div>
        <div className={styles.footerCreator}>
          <p>design and development site by Kozwoy :3</p>
        </div>
      </footer>
    </>
  );
}