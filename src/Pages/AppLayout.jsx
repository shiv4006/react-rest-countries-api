/* eslint-disable no-unused-vars */
import { Header } from "../Components/Header"
import { Footer } from "../Components/Footer"
import { Outlet, useNavigation } from "react-router";
import { ThemeContext, ThemeProvider } from "../ContextAPI";
import styles from './AppLayout.module.css'

export const AppLayout = () => {

  const navigation = useNavigation();
  // console.log(navigation);

  const theme = localStorage.getItem('theme');
  // console.log(theme);

  if (navigation.state === "loading") {
    return (
      <div className={`${styles.loading} ${theme === 'dark' ? styles.active : ''}`}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );

}