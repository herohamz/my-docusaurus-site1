import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home(){
  return (
    <Layout
      title="AI Humanoid Guide"
      description="A complete guide to artificial intelligence and humanoid robotics">
      
      {/* HERO SECTION */}
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className={styles.heroTitle}>AI Humanoid Guide</h1>
          <p className={styles.heroSubtitle}>
            Explore how artificial intelligence powers humanoid robots —
            from perception and learning to ethics and future applications.
          </p>

          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              📘 Read the Book
            </Link>
          </div>
        </div>
      </header>

      {/* FEATURES SECTION */}
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">

              <div className="col col--4">
                <h3>🤖 AI Intelligence</h3>
                <p>
                  Learn how humanoid robots use machine learning, neural networks,
                  and decision-making algorithms to think and adapt.
                </p>
              </div>

              <div className="col col--4">
                <h3>🦿 Robotics & Movement</h3>
                <p>
                  Understand humanoid body design, sensors, balance systems,
                  and how robots walk and interact with the physical world.
                </p>
              </div>

              <div className="col col--4">
                <h3>⚖️ Ethics & Future</h3>
                <p>
                  Explore ethical challenges, human-robot interaction,
                  and the future role of humanoids in society.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
