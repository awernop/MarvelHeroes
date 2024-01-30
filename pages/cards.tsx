import styles from "../styles/Cards.module.css";
import Header from "@/components/Header/Header";
import herous from "../assets/herous";
import Card from "@/components/Card/Card";
import { useState } from "react";

const runSearch = (query: string) => {
  if(!query){
      return herous;
  }

  const lowerCaseQuery = query.toLowerCase();

  return herous.filter((hero) => 
  hero.hname.toLowerCase().includes(lowerCaseQuery))
};

export default function Home() {
  const [hero, setHero] = useState(herous);

  const handleChange = (event: { target: { value: string; }; }) => {
    const foundHero = runSearch(event.target.value);
    setHero(foundHero);
};

  return (
    <div className={styles.main}>
      <Header />
      <p className={styles.p__txt}>Marvel characters</p>
      <input type="text" placeholder="Find" className={styles.input} onChange={handleChange}/>
      <div className={styles.list}>
            {hero.map((hero) => 
            (<Card key = {hero.id} {...hero}/>
            ))}
        </div>
    </div>
  );
}
