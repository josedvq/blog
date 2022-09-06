import React from 'react';
import styles from './project.module.css';
import { TechStacks } from '.';
import {Paper} from './Paper'

export const Project = ({
  img,
  title,
  description,
  codeLink,
  liveLink,
  techstack,
  paper,
  tags
}) => {

  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={img} className={styles.img} alt="dummy img" />
      </div>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>{title}</span>
        </div>
        <span className={styles.description}>{description}</span>

        {paper && 
          <div style={{margin: '1em auto'}}>
            <Paper {...paper} />
          </div>
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