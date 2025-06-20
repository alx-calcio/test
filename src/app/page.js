import FuzzyText from './FuzzyText';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <FuzzyText fontSize={150} baseIntensity={0.3} enableHover={true} hoverIntensity={0.9}>Salut</FuzzyText>
      <FuzzyText fontSize={70} baseIntensity={0.3} enableHover={true} hoverIntensity={0.9}>Comment ça va ?</FuzzyText>
    </div>
  );
}
