import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'User-Friendly Interface',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The M&E Monitor provides an intuitive interface designed for ease of use, allowing users to navigate and manage their projects effortlessly.
      </>
    ),
  },
  {
    title: 'Comprehensive Indicator Tracking',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        With the M $ E Monitor, you can track both quantitative and qualitative progress for your indicators with detailed insights into project outcomes, ensuring you stay on top of your goals.
      </>
    ),
  },
  {
    title: 'Customizable Reporting',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        User M $ E Monitor To Generate customized reports in multiple formats, including PDF, Excel and CSV, to share with stakeholders and support decision-making.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
