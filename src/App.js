import React from 'react';
import GitProfile from '@arifszn/gitprofile';
import '@arifszn/gitprofile/dist/style.css';

const config = {
  github: {
    username: 'gladstone-9', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 1, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'gabriel-gladstone-10ba38223/',
    email: 'zwy7ce@gmail.com',
  },
  // resume: {
  //   fileUrl:
  //     'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  // },
  // skills: [
  //   'PHP',
  //   'Laravel',
  //   'JavaScript',
  //   'React.js',
  //   'Node.js',
  //   'Nest.js',
  //   'MySQL',
  //   'PostgreSQL',
  //   'Git',
  //   'Docker',
  //   'PHPUnit',
  //   'CSS',
  //   'Antd',
  //   'Tailwind',
  // ],
  // experiences: [
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'September 2021',
  //     to: 'Present',
  //     companyLink: 'https://example.com',
  //   },
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'July 2019',
  //     to: 'August 2021',
  //     companyLink: 'https://example.com',
  //   },
  // ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  // education: [
  //   {
  //     institution: 'Institution Name',
  //     degree: 'Degree',
  //     from: '2015',
  //     to: '2019',
  //   },
  //   {
  //     institution: 'Institution Name',
  //     degree: 'Degree',
  //     from: '2012',
  //     to: '2014',
  //   },
  // ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'GeoQuest',
      description: 'A community Geocaching site.',
      imageUrl:
        'https://th.bing.com/th/id/OIP.VIrMu53KG7OfWnCVthrXjgHaHT?rs=1&pid=ImgDetMain',
      link: 'https://github.com/gladstone-9/GeoQuest',
    },
    {
      title: 'Spectrum Analyzer Holiday Light Show',
      description:
        'Holiday lights that respond to music based on the measured frequency.',
      imageUrl:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https:%2F%2Fblog.kakaocdn.net%2Fdn%2FbePvUf%2FbtqA8iqrRN3%2F5SScxfitIhZM1KhQR8nhd0%2Fimg.jpg',
      link: 'https://gladstone-9.github.io/SpectrumAnalyzerPrototype_GabrielGladstone.pdf',
    },
    {
      title: 'Electrocardiography (EKG) System',
      description: 'A custom PCB EKG System to measure heartbeats.',
      imageUrl: 'https://m.media-amazon.com/images/I/61DPW4rkncL._SL1500_.jpg',
      link: 'https://drive.google.com/file/d/1nfclblP3kTyFwyu7DOyp_s8mQftGkoJ_/view?usp=sharing',
    },
    {
      title: 'Smart Trash',
      description:
        'A wireless detection system for waste collection using an Arduino IOT microcontroller and Arduino products to alert staff where and when a trash can is full on campus.',
      imageUrl:
        'https://i.pinimg.com/originals/7c/d5/63/7cd563654dbe09f1e59385b42a3ecb7d.png',
      link: 'https://github.com/gladstone-9/gladstone-9.github.io/blob/main/Smart%20Trash_GabrielGladstone.pdf',
    },
    {
      title: 'Restaurant Description Generator',
      description:
        'A Prompt Engineering tool built for the Israeli Startup Vegan Friendly.',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/1985/1985582.png',
      link: 'https://github.com/gladstone-9/VeganFriendly_Fall2023',
    },
    {
      title: 'A.T.M. Finder',
      description: 'A website to help people find the closest ATM.',
      imageUrl:
        'https://static.vecteezy.com/system/resources/previews/000/240/638/original/atm-vector.jpg',
      link: 'https://devpost.com/software/at-this-moment-a-t-m-finder',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,
};

function App() {
  return <GitProfile config={config} />;
}

export default App;
