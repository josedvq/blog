import React, { useEffect } from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import Icon from '@mui/material/Icon';

const socialDetails = [
  {
    name: 'linkedin',
    classname: 'fab fa-linkedin fa-fw',
    link: 'https://www.linkedin.com/in/josedvq/',
  },
  {
    name: 'github',
    classname: 'fab fa-github fa-fw',
    link: 'https://github.com/josedvq',
  },
  {
    name: 'instagram',
    classname: 'fab fa-instagram fa-fw',
    link: 'https://www.instagram.com/josedvq/',
  },
  {
    name: 'mail',
    classname: 'fa-solid fa-envelope',
    link: 'mailto:josedvq@gmail.com',
  },
];

const getHoverIconColor = (site: string): string => {
  switch (site) {
    case 'linkedin':
      return '#0a66c2';
    case 'github':
      return 'purple';
    case 'youtube':
      return '#c4302b';
    case 'mail':
      return 'brown';
    default:
      return 'blue';
  }
};

export const Socials = () => {
  const { isDarkTheme } = useColorMode();

  return (
    <div>
      {socialDetails.map(cn => {
        return (
          <a
            href={cn.link}
            target="_blank"
            rel="noopener noreferrer"
            key={cn.classname}
          >
            <Icon
              className={cn.classname}
              sx={{
                color: isDarkTheme ? 'white' : 'black',
                fontSize: 30,
                marginTop: 1,
                marginRight: 1,
                '&:hover': {
                  color: `${getHoverIconColor(cn.name)}`,
                },
              }}
            />
          </a>
        );
      })}
    </div>
  );
};