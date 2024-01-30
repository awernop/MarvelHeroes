import Button from "../Button/Button";
import classes from "../Button/Button.module.css";
import headerclasses from "./Header.module.css";


function Header() {
    return (
        <>
            <div className={headerclasses.header}>
                <div className={headerclasses.buttons}>
                    <Button className={classes.btn_header} href="/" onClick={() => console.log("я работаю")}>Home</Button>
                    <Button className={classes.btn_header} href="/cards" onClick={() => console.log("я работаю")}>Cards</Button>
                </div>
                <h1 className={headerclasses.h1}>
                    Marvel Heroes
                </h1>
            </div>
        </>
    );
}

export default Header;