import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";


interface ButtonProps {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    href: string;
    className: string;
}

const Button = ({ children, onClick, href, className }: ButtonProps) => {
    return <Link href={href}><button className={className} onClick={onClick}>{children}</button></Link>
}

export default Button;