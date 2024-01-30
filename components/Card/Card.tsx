import React from "react";
import { useContext } from "react";
import styles from "../Card/Card.module.css";
import herous from "../../assets/herous";
import Image from "next/image";

const Card = (herous: { id: any; src: any; hname: any; }) => {
    const {id, src, hname} = herous;

    return (
        <div className={styles.div__back}>
            <Image src={src} alt=""/>
            <p className={styles.h__tst}>{hname}</p>
        </div>
    )
}

export default Card;