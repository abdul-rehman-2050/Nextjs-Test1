
import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoginButton from "./login-btn";
import styles from "../styles/Home.module.css"


interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <LoginButton/>
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}