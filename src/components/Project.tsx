import React from 'react';
import styles from './project.module.css';
import { TechStacks } from '.';
import {Paper} from './Paper'
import {useColorMode} from '@docusaurus/theme-common';


export const Project = ({
  img,
  title,
  description,
  codeLink,
  liveLink,
  techstack,
  papers,
  tags
}) => {

  const { isDarkTheme } = useColorMode();

  return (
    <section className={styles.container}>
      {img && 
      <div className={styles.imgContainer}>
        <img src={img} className={styles.img} alt="dummy img" />
      </div>}
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>{title}</span>
        </div>
        <span className={styles.description}>{description}</span>

        {papers && 
          papers.map(paper=>{
            return <div style={{margin: '1em auto'}}>
              <Paper {...paper} />
            </div>
          })
          
        }
          
        

        <div className={styles.linkContainer}>
          {codeLink ? (
            <a
              style={{
                marginRight: '.7rem',
                marginLeft: '-.7rem',
                padding: '.5rem .7rem',
              }}
              href={codeLink}
              target="_blank"
            >
              Code
            </a>
          ) : (
            <></>
          )}
          {liveLink ? (
            <a
              style={{
                marginRight: '.7rem',
                marginLeft: '-.7rem',
                padding: '.5rem .7rem',
              }}
              href={liveLink}
              target="_blank"
            >
              Live
            </a>
          ) : (
            <></>
          )}
        </div>
        {techstack &&
          <TechStacks stack={techstack} />
        }
      </div>
    </section>
  );
};