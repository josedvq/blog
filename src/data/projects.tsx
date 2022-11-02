import React from 'react';
import Link from '@docusaurus/Link';
import {
    Project as ProjectType,
  } from '../types';
  
export const projects: Array<ProjectType> = [
    

    {
      img: '/img/conflab.jpg',
      title: 'The ConfLab Social Interaction Dataset',
      description: <>
        <p>ConfLab is a privacy-sensitive data collection concept and dataset for in-the-wild social interactions. We recorded free interaction of 48 subjects during a networking event at ACM Multimedia 2019. Our capture setup improves upon the data fidelity of prior in-the-wild datasets while retaining privacy sensitivity. We recorded videos from a non-invasive overhead view. Via chest-worn wearable sensors, we recorded body motion (9-axis IMU) low-frequency audio (1250 Hz), and Bluetooth-based proximity.</p>
        
        <p style={{textAlign:'center'}}>
        <Link className="button button--primary" to="https://josedvq.github.io/conflab-web">
            To ConfLab dataset
        </Link>
        </p>

        <p>Our benchmarks tasks showcase some of the open research tasks related to in-the-wild privacy-preserving social data analysis: keypoints detection from overhead camera views (via fine-tuned Mask-RCNN), skeleton-based no-audio speaker detection (vi), and F-formation detection. The ConfLab project resulted in the following publications.</p>
      </>,
      codeLink: 'https://github.com/TUDelft-SPC-Lab/conflab',
      liveLink: 'https://josedvq.github.io/conflab-web',
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
      title: 'Differences in the annotation of laughter across modalities ',
      description: 'Although laughter is well-recognized as a multimodal phenomenon, it is unclear how annotation of laughter differs when done from modalities like video, without access to audio. In this work we take a first step in this direction by asking if and how well laughter can be annotated when only audio, only video (containing full body movement information) or audiovisual modalities are available to annotators. We ask whether annotations of laughter are congruent across modalities, and compare the effect that labeling modality has on machine learning model performance. We compare annotations and models for laughter detection, intensity estimation, and segmentation, three tasks common in previous studies of laughter. Our analysis makes use of more than 4000 annotations acquired from 48 annotators, making use of the Covfee annotation framework.',
      codeLink: 'https://github.com/josedvq/lared-laughter',
      papers: [{
        title: 'Differences in annotation of laughter across modalities',
        authors: 'Jose Vargas-Quiros, Laura Cabrera-Quiros, Catharine Oertel, and Hayley Hung',
        publication: 'Under review',
        url: '',
        date: '2022'
      }]
    },

    {
      img: 'img/covfee.jpg',
      title: 'Covfee: an extensible web framework for continuous-time annotation of human behavior',
      description: <>During my PhD, I developed a web-based, extensible framework for continuous annotation aimed at crowd-sourcing. Our experiments showed that continuous techniques (implemented in Covfee) can save human annotation time with no loss in annotation agreement.
      
      <p style={{textAlign:'center'}}>
        <Link className="button button--primary" to="https://github.com/josedvq/covfee">
            To Covfee docs
        </Link>
      </p>

      </>,
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
      title: 'No-audio speaking status detection in crowded settings via visual pose-based filtering and wearable acceleration',
      description: 'Recognizing who is speaking in a crowded scene is a key challenge towards the understanding of the social interactions going on within it. Unfortunately individual audio recordings are not available in many social interaction datasets due to subject privacy and logistic challenges. However, video and wearable sensors make it possible to recognize speaking in an unobtrusive, privacy-preserving way through body movement information. When considering the video modality, a bounding box is traditionally used in action recognition problems to localize the target subject whose action is to be assessed. However, cross-contamination, occlusion, and the articulated nature of the human body, make bounding boxes unsuitable in crowded scenes. We address this problem via a method making use of articulated body poses for subject localization and in the subsequent speech detection stage. We show that the selection of local features around pose keypoints has a positive effect on generalization performance while also significantly reducing the number of local features considered, making for a more efficient method. Using two in-the-wild datasets with different viewpoints of subjects, we investigate the role of cross-contamination in this effect. We additionally make use of acceleration measured through wearable sensors for the same task, and present a multimodal approach combining both methods.',
      papers: [
        {
          title: 'No-audio speaking status detection in crowded settings via visual pose-based filtering and wearable acceleration',
          authors: 'Jose Vargas-Quiros, Laura Cabrera-Quiros, Hayley Hung',
          // publication: 'NeurIPS 2022 Datasets and Benchmarks Track',
          url: 'https://arxiv.org/abs/2211.00549',
          date: '2019'
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
      title: 'LaRed dataset: a mingling dataset with high-quality individual audio',
      description: 'Recognizing voice activity from human speakers in a multimodal recording is a central task towards the understanding of the social interactions occurring within it. LaRed is an in-the-wild dataset for the study of voice activity from body movement. For ground truth, our dataset contains high-fidelity audio recordings from individual Lavalier microphones worn by subjects in the scene. The dataset also contains automatically-extracted pose tracks and chest-worn accelerometer readings, which provide an indication of overall body movement. We present three baselines for no-audio voice activity detection: a) voice activity detection from video, b) voice activity detection from body acceleration (chest-worn accelerometer), c) voice activity detection from our noisy pose tracks. The LaRed dataset provides the signals and ground truth necessary to evaluate a wide range of methods for voice activity detection from body movements.',
      papers: [{
        title: 'LaRed Dataset: no-audio speaking status detection in a crowded-setting',
        authors: 'Jose Vargas-Quiros, Hayley Hung, and Laura Cabrera-Quiros',
        publication: 'Work in progress',
        date: '2022'
      }]
    },
    {
      title: 'Information-theoretic anomaly detection and authorship attribution in literature (MSc thesis)',
      description: 'KRIMP is an algorithm based on information theory capable of capturing arbitrary length co-occurrence relations between itemsets in a database. KRIMP code tables have shown to be useful models of databases for multiple machine learning tasks including classification and clustering. Cross-compression sizes obtained from KRIMP code tables are a generalization of cross-entropy capable of taking into account such co-occurrence relations. This work focuses on the application of KRIMP cross-compression in two different but overlapping areas. First, an unsupervised anomalous database detection algorithm is presented, capable of taking into account database structure. The algorithm is tested on itemset databases with a significant amount of structure to characterize its behavior and an experiment is performed on text data. Second, the application of KRIMP to natural language is investigated further, in the context of authorship attribution via classification. The KRIMP classifier is a generalization of the Naive Bayes classifier capable of combining frequently co-occurring words or items into itemsets, delivering an appealing comparison between the two algorithms. Different ways of transforming text into itemset form were explored, as well as two different ways of applying Laplace smoothing. Experiments indicated that co-occurrence relations are important for attribution, with KRIMP being more robust and in most cases more accurate on prose text when the complete alphabet is considered and itemsets are created per sentence. The behavior suggests that there is relevant syntactic structure at the sentence level involving punctuation and function words that is captured in KRIMP code tables, and is characteristic of individual authors.',
      papers: [{
        title: 'Information-theoretic anomaly detection and authorship attribution in literature',
        authors: 'Jose Vargas-Quiros',
        publication: 'Universiteit Utrecht',
        url: 'https://josedvq.github.io/msc_thesis.pdf',
        date: '2017'
      }]
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