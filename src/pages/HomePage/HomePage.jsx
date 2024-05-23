import DocumentTitle from "../../components/Title";
import css from "./HomePage.module.css";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to Phonebook</h1>
        <p className={css.link}>
          <NavLink to="/register" className={css.span}>
            Sing Up Now
          </NavLink>{" "}
          or{" "}
          <NavLink to="/login" className={css.span}>
            Already have an account?
          </NavLink>{" "}
        </p>
      </div>
    </>
  );
}
