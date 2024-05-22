import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    dispatch(loginThunk(values));
  };
  return (
    <div className={css.container}>
      <h1 className="">Log in to Phonebook!</h1>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <div className={css.label}>
            <label className={css.label}>
              <span className={css.text}>Email</span>
            </label>
            <Field
              type="email"
              name="email"
              placeholder="email"
              className={css.input}
              required
            />
          </div>
          <div className={css.label}>
            <label className={css.label}>
              <span className={css.text}>Password</span>
            </label>
            <Field
              type="password"
              name="password"
              placeholder="password"
              className={css.input}
              required
            />
          </div>
          <label className={css.textsmall}>
            <Link to="/register">Do not have account? Lets create it!</Link>
          </label>

          <div className={css.container}>
            <button type="submit" className={css.button}>
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
