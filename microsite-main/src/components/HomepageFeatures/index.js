import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import image1 from "@site/static/img/image1.png";
import image2 from "@site/static/img/image2.png";
import image3 from "@site/static/img/image3.png";
import image4 from "@site/static/img/image4.png";

const FeatureList = [
  {
    title: "Centralized Compliance Management",
    ImgSrc: image1,
    description: (
      <>
        Develop EasyReg as a platform to manage compliance requirements
        across multiple security frameworks.
      </>
    ),
  },
  {
    title: "Automated Tracking & Reporting",
    ImgSrc: image2,
    description: (
      <>
        Provide automated tracking and reporting of compliance status to 
        ensure up-to-date insights within EasyReg.
      </>
    ),
  },
  {
    title: "Audit Efficiency",
    ImgSrc: image3,
    description: (
      <>
        Reduce manual efforts in regulatory audits and evidence collection, 
        streamlining compliance processes with EasyReg.
      </>
    ),
  },
  {
    title: "Implementation Transparency",
    ImgSrc: image4,
    description: (
      <>
        Provide a clear and concise overview of the implementation status of 
        a specific norm or regulation for all relevant roles in the process, 
        ensuring visibility through EasyReg.
      </>
    ),
  },
];

function Feature({ ImgSrc, title, description }) {
  return (
    <div className={clsx("col col--12 col-md--6")}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <img 
            src={ImgSrc} 
            alt={title} 
            className={styles.featureImage} 
          />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
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
