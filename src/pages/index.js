import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Avatar from '@mui/material/Avatar';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';
import { Socials } from '../components'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>

      <div className="container">
        <div className={styles.myContainer}>
          <Avatar alt="Jose Vargas"
                className={styles.heroAvatar}
                src={useBaseUrl('/img/me2.jpg')}
                sx={{ width: 150, height: 150, m: 2 }}/>
          <div className={styles.heroContainer}>
            
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className='container'>
          <iframe src="https://lightwidget.com/widgets/a3b4deb0856b5733b1db34153b5c37ca.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style={{width:'100%', border:0, overflow:'hidden'}}></iframe>
        </div>
      </main>
    </Layout>
  );
}
