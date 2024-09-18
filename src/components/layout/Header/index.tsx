import { Link } from 'react-router-dom';
import deezerLogo from '@/assets/deezer-logo.svg';
import classes from './styles.module.css';
import SearchBar from '@/components/discover/SearchBar';
import Navigation from '../Navigation';

const Header = () => {
  return (
    <div className={classes.headerWrapper}>
      <header>
        <Link to="/">
          <img src={deezerLogo} alt="deezer's logo" className={classes.logo} />
        </Link>
        <section className={classes.searchBarWrapper}>
          <SearchBar />
        </section>
        <Navigation />
      </header>
    </div>
  )
}

export default Header;