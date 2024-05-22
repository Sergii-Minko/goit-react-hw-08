import css from "./HomeForm.module.css";
const HomeForm = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Welcome <br />
        to Phonebook
      </h1>
    </div>
  );
};

export default HomeForm;
