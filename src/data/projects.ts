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
      papers: [
        {
          title: 'Covfee: an extensible web framework for continuous-time annotation of human behavior',
          authors: 'Jose Vargas-Quiros, Stephanie Tan, Chirag Raman, Laura Cabrera-Quiros, and Hayley Hung',
          publication: 'Understanding Social Behavior in Dyadic and Small Group Interactions, Proceedings of Machine Learning Research',
          url: 'https://proceedings.mlr.press/v173/vargas-quiros22a.html',
          date: '2022'
        }
      ]
    },

    {
      img: 'img/conflab.jpg',
      title: 'The ConfLab Social Interaction Dataset',
      description: 'A privacy-sensitive data collection concept and dataset for in-the-wild social interactions. We recorded free interaction of 48 subjects during a networking event at ACM Multimedia 2019. Our capture setup improves upon the data fidelity of prior in-the-wild datasets while retaining privacy sensitivity. We recorded videos from a non-invasive overhead view. Via chest-worn wearable sensors, we recorded body motion (9-axis IMU) low-frequency audio (1250 Hz), and Bluetooth-based proximity. Our benchmarks showcase some of the open research tasks related to in-the-wild privacy-preserving social data analysis: keypoints detection from overhead camera views, skeleton-based no-audio speaker detection, and F-formation detection. ',
      codeLink: 'https://github.com/TUDelft-SPC-Lab/conflab',
      liveLink: 'https://data.4tu.nl/collections/ConfLab_A_Rich_Multimodal_Multisensor_Dataset_of_Free-Standing_Social_Interactions_In-the-Wild/6034313',
      papers: [
        {
          title: 'ConfLab: A Data Collection Concept, Dataset, and Benchmark for Machine Analysis of Free-Standing Social Interactions in the Wild',
          authors: 'Chirag Raman*, Jose Vargas-Quiros*, Stephanie Tan*, Ekin Gedik, Ashraful Islam, and Hayley Hung',
          publication: 'NeurIPS 2022 Datasets and Benchmarks Track',
          url: 'https://doi.org/10.48550/arXiv.2205.05177',
          date: '2022'
        },
        {
          title: 'Multimodal Data Collection for Social Interaction Analysis In-the-Wild',
          authors: 'Hayley Hung, Chirag Raman, Ekin Gedik, Stephanie Tan and Jose Vargas',
          publication: 'MM \'19 - Proceedings of the 27th ACM International Conference on Multimedia',
          url: 'https://dl-acm-org.tudelft.idm.oclc.org/doi/10.1145/3343031.3351320',
          date: '2019'
        }
      ]
    },
    {
      title: 'Attraction and body movement in speed dates',
      description: 'We present a study of attraction in the dyadic speed date setting. The study made use of accelerometer information (from chest-worn accelerometers) from 398 dyadic speed dates to analyze the relationship between body movement and self-reported affiliative goals related to attraction. Through machine learning experiments designed to capture individual and pairwise body movement information, we investigated the predictive power of body movement information towards attraction estimation. In particular, the pairwise features used in our study were designed to capture synchrony, mimicry and convergence information.',
      papers: [
        {
          title: 'Individual and joint body movement assessed by wearable sensing as a predictor of attraction in speed dates',
          authors: 'Jose Vargas-Quiros, Oyku Kacap, Hayley Hung, Laura Cabrera-Quiros',
          publication: 'IEEE Transactions on Affective Computing',
          url: 'https://ieeexplore.ieee.org/document/9662986',
          date: '2021'
        },
        {
          title: 'Estimating Romantic, Social, and Sexual Attraction by Quantifying Bodily Coordination using Wearable Sensors',
          authors: 'Oyku Kacap, Jose Vargas-Quiros, Hayley Hung',
          publication: 'International Conference on Affective Computing and Intelligent Interaction Workshops and Demos (ACIIW)',
          url: 'https://ieeexplore.ieee.org/document/8925137',
          date: '2019'
        }
      ]
    },
    {
      title: 'Differences in the annotation of laughter across modalities ',
      description: 'Although laughter is well-recognized as a multimodal phenomenon, it is unclear how annotation of laughter differs when done from modalities like video, without access to audio. In this work we take a first step in this direction by asking if and how well laughter can be annotated when only audio, only video (containing full body movement information) or audiovisual modalities are available to annotators. We ask whether annotations of laughter are congruent across modalities, and compare the effect that labeling modality has on machine learning model performance. We compare annotations and models for laughter detection, intensity estimation, and segmentation, three tasks common in previous studies of laughter. Our analysis makes use of more than 4000 annotations acquired from 48 annotators, making use of the Covfee annotation framework.',
      papers: [{
        title: 'Differences in annotation of laughter across modalities',
        authors: 'Jose Vargas-Quiros, Laura Cabrera-Quiros, Catharine Oertel, and Hayley Hung',
        date: '2022'
      }]
    },
    {
      title: 'LaRed dataset: a mingling dataset with high-quality individual audio',
      description: 'Recognizing voice activity from human speakers in a multimodal recording is a central task towards the understanding of the social interactions occurring within it. LaRed is an in-the-wild dataset for the study of voice activity from body movement. For ground truth, our dataset contains high-fidelity audio recordings from individual Lavalier microphones worn by subjects in the scene. The dataset also contains automatically-extracted pose tracks and chest-worn accelerometer readings, which provide an indication of overall body movement. We present three baselines for no-audio voice activity detection: a) voice activity detection from video, b) voice activity detection from body acceleration (chest-worn accelerometer), c) voice activity detection from our noisy pose tracks. The LaRed dataset provides the signals and ground truth necessary to evaluate a wide range of methods for voice activity detection from body movements.',
      paper: {
        title: 'LaRed Dataset: no-audio speaking status detection in a crowded-setting',
        authors: 'Jose Vargas-Quiros, Hayley Hung, and Laura Cabrera-Quiros',
        date: '2022'
      }
    }
    // {
    //   title: 'Attraction and body movement in speed dates',
    //   description: 'My Master\'s thesis on information-theoretical approaches to anomaly detection and authorship attribution using the KRIMP algorithm',
    //   paper: {
    //     title: 'ConfLab: A Data Collection Concept, Dataset, and Benchmark for Machine Analysis of Free-Standing Social Interactions in the Wild',
    //     authors: 'Chirag Raman, Jose Vargas-Quiros, Stephanie Tan, Ekin Gedik, Ashraful Islam, and Hayley Hung',
    //     publication: 'Transactions on Affective Computing',
    //     url: 'https://doi.org/10.48550/arXiv.2205.05177',
    //     date: '2022'
    //   }
    // }
  ];