import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Built for Storytellers',
    img: '/img/logo.png',
    description: (
      <>
        Create and publish Ink-based interactive fiction with minimal effort. Focus on writing, not setup.
      </>
    ),
  },
  {
    title: 'Powerful Authoring Features',
    img: '/img/logo.png',
    description: (
      <>
        Use Ink tags and custom markup to control layout and gameplay flow directly from your story script.
      </>
    ),
  },
  {
    title: 'Customizable Look & Feel',
    img: '/img/logo.png',
    description: (
      <>
        Use images, backgrounds, sounds, and video in your story. Add your own themes, fonts, and CSS styles. 
      </>
    ),
  },
  {
    title: 'Debug & Inspect',
    img: '/img/logo.png',
    description: (
      <>
        Built-in debugger helps you explore Ink variables, functions, and flow — right inside your browser.
      </>
    ),
  },
  {
    title: 'Flexible Publishing',
    img: '/img/logo.png',
    description: (
      <>
        Export your story as a progressive web app, a single HTML file, or a desktop executable for Windows, macOS, and Linux.
      </>
    ),
  },
  {
    title: 'For Developers, Too',
    img: '/img/logo.png',
    description: (
      <>
        Extend Ink with JavaScript functions, embed custom UI components, or tweak the Preact-based frontend to build your own features.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} role="img" src={img} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
