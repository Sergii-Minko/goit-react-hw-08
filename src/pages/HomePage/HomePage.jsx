import css from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Welcome <br />
        to Phonebook
      </h1>
    </div>
  );
};

export default HomePage;
