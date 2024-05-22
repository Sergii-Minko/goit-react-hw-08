import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import { useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/slice";

import css from "./Layout.module.css";

const Layout = () => {
  const username = useSelector(selectUserName);

  return (
    <div>
      <header className={css.header}>
        <h2>PhoneBook of {username}</h2>
        <AppBar />
      </header>

      <Outlet />
    </div>
  );
};
export default Layout;
