"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

const Header = () => {
  const currentPage = usePathname();
  return (
    <>
      <h1 className={styles.title}>{currentPage}</h1>
      <header className={styles.header}>
        <Link href={"./"}>Home</Link>
        <Link href={"./ranking"}>Ranking</Link>
        <Link href={"./signin"}>Sign-in</Link>
        <Link href={"./signup"}>Sign-up</Link>
        <Link href={"./logout"}>Log out</Link>
      </header>
    </>
  );
};
export default Header;
