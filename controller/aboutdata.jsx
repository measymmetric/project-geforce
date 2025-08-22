import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';

import { RxDesktop, RxMobile } from 'react-icons/rx';

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="FaHtml5" />,
          <FaCss3 key="FaCss3" />,
          <FaJs key="FaJs" />,
          <SiTypescript key="SiTypescript" />,
          <FaReact key="FaReact" />,
          <SiNextdotjs key="SiNextdotjs" />,
          <FaNodeJs key="FaNodeJs" />,
          <SiTailwindcss key="SiTailwindcss" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma key="FaFigma" />,
          <SiAdobexd key="SiAdobexd" />,
          <SiAdobephotoshop key="SiAdobephotoshop" />,
          <RxDesktop key="RxDesktop" />,
          <RxMobile key="RxMobile" />,
        ],
      },
      {
        title: 'Backend & Database',
        icons: [
          <FaPython key="FaPython" />,
          <FaDatabase key="FaDatabase" />,
          <SiMongodb key="SiMongodb" />,
          <SiPostgresql key="SiPostgresql" />,
          <FaGitAlt key="FaGitAlt" />,
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      { title: 'Webby Awards - Honoree', stage: '2011 - 2012' },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      { title: 'UX/UI Designer - XYZ Company', stage: '2012 - 2023' },
      { title: 'Web Developer - ABC Agency', stage: '2010 - 2012' },
      { title: 'Intern - DEF Corporation', stage: '2008 - 2010' },
    ],
  },
  {
    title: 'credentials',
    info: [
      { title: 'Web Development - ABC University, LA, CA', stage: '2011' },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

export default aboutData;
