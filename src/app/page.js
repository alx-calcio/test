import FuzzyText from './FuzzyText';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <FuzzyText fontSize={100} baseIntensity={0.3} enableHover={true} hoverIntensity={0.9}>Salut</FuzzyText>
      <br/>
      <FuzzyText fontSize={30} baseIntensity={0.3} enableHover={true} hoverIntensity={0.9}>Comment ça va ?</FuzzyText>
    </div>
  );
}
