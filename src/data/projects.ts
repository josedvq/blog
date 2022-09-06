import {
    Project as ProjectType,
  } from '../types';
  
export const projects: Array<ProjectType> = [
    {
      img: 'img/covfee.jpg',
      title: 'Covfee: an extensible web framework for continuous-time annotation of human behavior',
      description: 'During my PhD, I developed a web-based, extensible framework for continuous annotation aimed at crowd-sourcing. Our experiments showed that continuous techniques (implemented in Covfee) can save human annotation time with no loss in annotation agreement.',
      codeLink: 'https://github.com/josedvq/covfee',
      liveLink: 'https://josedvq.github.io/covfee/',
      paper: {
        title: 'Covfee: an extensible web framework for continuous-time annotation of human behavior',
        authors: 'Jose Vargas-Quiros, Stephanie Tan, Chirag Raman, Laura Cabrera-Quiros, and Hayley Hung',
        publication: 'Understanding Social Behavior in Dyadic and Small Group Interactions, Proceedings of Machine Learning Research',
        url: 'https://proceedings.mlr.press/v173/vargas-quiros22a.html',
        date: '2022'
      }
    },

    {
      img: 'img/conflab.jpg',
      title: 'The ConfLab Social Interaction Dataset',
      description: 'A privacy-sensitive data collection concept and dataset for in-the-wild social interactions. We recorded free interaction of 48 subjects during a networking event at ACM Multimedia 2019. Our capture setup improves upon the data fidelity of prior in-the-wild datasets while retaining privacy sensitivity. We recorded videos from a non-invasive overhead view. Via chest-worn wearable sensors, we recorded body motion (9-axis IMU) low-frequency audio (1250 Hz), and Bluetooth-based proximity. Our benchmarks showcase some of the open research tasks related to in-the-wild privacy-preserving social data analysis: keypoints detection from overhead camera views, skeleton-based no-audio speaker detection, and F-formation detection. ',
      codeLink: 'https://github.com/TUDelft-SPC-Lab/conflab',
      liveLink: 'https://data.4tu.nl/collections/ConfLab_A_Rich_Multimodal_Multisensor_Dataset_of_Free-Standing_Social_Interactions_In-the-Wild/6034313',
      paper: {
        title: 'ConfLab: A Data Collection Concept, Dataset, and Benchmark for Machine Analysis of Free-Standing Social Interactions in the Wild',
        authors: 'Chirag Raman, Jose Vargas-Quiros, Stephanie Tan, Ekin Gedik, Ashraful Islam, and Hayley Hung',
        url: 'https://doi.org/10.48550/arXiv.2205.05177',
        date: '2022'
      }
    },
    {
      img: 'img/kanji.png',
      title: 'Kanji To Hiragana',
      description:
        'User can input kanji and the kanji will be transformed to hiragana',
      codeLink: 'https://github.com/djamaile/kanji-to-hiragana/',
      liveLink: 'https://djamaile.github.io/kanji-to-hiragana/',
      techstack: ['ReactJS'],
    },
    {
      img: 'img/anatoken.png',
      title: 'AnaToken',
      description:
        'Developed an application that runs on the Ethereum blockchain to help address plastic waste problems in Ghana. The plan is to take this project and further develop it in the upcoming hackathon of odyssey',
      codeLink: 'https://github.com/anatoken',
      liveLink: '',
      techstack: ['ReactJS', 'Solidity', 'Ethereum'],
    },
    {
      img: 'img/djamaile-light.png',
      title: 'Portfolio',
      description: 'Personal portfolio',
      codeLink: 'https://github.com/djamaile/portfolio',
      liveLink: 'djamaile.dev',
      techstack: ['ReactJS', 'TypeScript'],
    },
  ];