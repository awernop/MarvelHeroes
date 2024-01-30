import Button from "../Button/Button";
import classes from "../Button/Button.module.css";
import contentclasses from "./HomeContent.module.css";
import Image from "next/image";
import marvel from "./marvel_heroes.svg"

function HomeContent() {
    return (
        <>
            <div className={contentclasses.section}>
                <div className={contentclasses.leftsection}>
                    <h2 className={contentclasses.h2}><span className={contentclasses.span}>Find</span> all your favorite <span className={contentclasses.span}>Character</span></h2>
                    <p className={contentclasses.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    <Button className={classes.btn} href="/" onClick={() => console.log("я работаю")}>See Character</Button>
                </div>
                <Image src={marvel} width={515} height={557} alt="marvel"/>
            </div>
        </>
    );
}

export default HomeContent;