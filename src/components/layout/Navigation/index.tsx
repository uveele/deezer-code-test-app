import { NavLink } from "react-router-dom"
import classes from './styles.module.css';
import avatar from '@/assets/avatar.svg';

const arrNav = [
  { to: '/', text: 'Home' },
  { to: '/discover', text: 'Discover' },
  { to: '/recents', text: 'Recents' },
  { to: '/library', text: 'Library' },
]

const Navigation = () => {

    return (
      <nav className={classes.navigation}>
        <ul>
          {
            arrNav.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  {item.text}
                </NavLink>
              </li>
            ))
          }
          <li className={classes.avatarOption}>
            <NavLink
               to={'/profile'}>
              <img src={avatar} alt="User's avatar" className={classes.avatar} />
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
  
  export default Navigation;