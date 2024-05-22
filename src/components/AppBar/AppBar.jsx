import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutThunk } from "../../redux/auth/operations";
import css from "./AppBar.module.css";

const AppBar = () => {
  const dispatch = useDispatch();
  return (
    <nav className={css.nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Contacts">Contacts</NavLink>

      <button onClick={() => dispatch(logoutThunk())} className={css.button}>
        Logout
      </button>
    </nav>
  );
};
export default AppBar;
