import styles from "../styles/Home.module.css";
import classes from "../components/Button/Button.module.css"
import Header from "@/components/Header/Header";
import HomeContent from "../components/HomeContent/HomeContent";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <HomeContent />
    </div>
  );
}
