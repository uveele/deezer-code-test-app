import { Outlet } from "react-router-dom"
import Header from "../Header"
import classes from './styles.module.css';

const MainLayout = () => {

  return (
    <>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout;