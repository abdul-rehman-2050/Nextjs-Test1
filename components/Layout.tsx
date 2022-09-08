
import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Home.module.css"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from "./navbar";



interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
    <Header />
    <Navbar/>
    <Container>
      <Box sx={{ my: 1 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
      <main className={styles.main}>{children}</main>
      </Box>
      
      </Container>
      <Footer />
      </>
  )
}