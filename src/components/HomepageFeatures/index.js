import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import {translate} from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './styles.module.css';



const FeatureList = [
  {
    title: translate({message: 'Built for Storytellers', id: 'feature1.title'}),
    img: '/img/icons8-mind-map-100.png',
    description: (
      <Translate id="feature1.description">
        Create and publish Ink-based interactive fiction with minimal effort. Focus on writing, not setup.
      </Translate>
    ),
  },
  {
    title: translate({message: 'Powerful Authoring Features', id: 'feature2.title'}),
    img: '/img/icons8-template-100.png',
    description: (
      <Translate id="feature2.description">
        Use Ink tags and custom markup to control layout and gameplay flow directly from your story script.
      </Translate>
    ),
  },
  {
    title: translate({message: 'Customizable Look & Feel', id: 'feature3.title'}),
    img: '/img/icons8-medium-icons-100.png',
    description: (
      <Translate id="feature3.description">
        Use images, backgrounds, sounds, and video in your story. Add your own themes, fonts, and CSS styles. 
      </Translate>
    ),
  },
  {
    title: translate({message: 'Debug & Inspect', id: 'feature4.title'}),
    img: '/img/icons8-inspect-code-100.png',
    description: (
      <Translate id="feature4.description">
        Built-in debugger helps you explore Ink variables, functions, and flow — right inside your browser.
      </Translate>
    ),
  },
  {
    title: translate({message: 'Flexible Publishing', id: 'feature5.title'}),
    img: '/img/icons8-app-symbol-100.png',
    description: (
      <Translate id="feature5.description">
        Export your story as a progressive web app, a single HTML file, or a desktop executable for Windows, macOS, and Linux.
      </Translate>
    ),
  },
  {
    title: translate({message: 'For Developers, Too', id: 'feature6.title'}),
    img: '/img/icons8-code-100.png',
    description: (
      <Translate id="feature6.description">
        Extend Ink with JavaScript functions, embed custom UI components, or tweak the Preact-based frontend to build your own features.
      </Translate>
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
