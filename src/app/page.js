import FuzzyText from './FuzzyText';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <FuzzyText fontSize={100} baseIntensity={0.3}>Salut</FuzzyText>
      <br/>
      <FuzzyText fontSize={30} baseIntensity={0.1}>Comment ça va ?</FuzzyText>
    </div>
  );
}
