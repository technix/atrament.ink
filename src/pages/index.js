import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--3')}>
            <img src="img/atrament-logo.svg" style={{ maxWidth: '200px' }} />
          </div>
          <div className={clsx('col col--9 text--left')}>
            <Heading as="h1" className="hero__title">
              <Translate id="hero.title">{siteConfig.title}</Translate>
            </Heading>
            <p className="hero__subtitle"><Translate id="hero.tagline">{siteConfig.tagline}</Translate></p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/atrament">
                📘 <Translate id="hero.documentation">Documentation</Translate>
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="https://technix.github.io/atrament-web-ui">
                ⏱️ <Translate id="hero.demo">Demo</Translate>
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="https://github.com/technix/atrament-web-ui">
                💻 <Translate id="hero.source">Source</Translate>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
