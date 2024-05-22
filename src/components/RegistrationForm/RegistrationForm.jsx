import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    dispatch(registerThunk(values));
    console.log(values);
  };
  return (
    <div className={css.container}>
      <h1 className="text-5xl font-bold">Register now!</h1>

      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={css.form}>
            <div className={css.label}>
              <label className={css.label}>
                <span className={css.text}>Name</span>
              </label>
              <Field
                type="text"
                name="name"
                placeholder="name"
                className={css.input}
                required
              />
            </div>
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
              <label className={css.textsmall}>
                <Link to="/login">Already have account? Lets login!</Link>
              </label>
            </div>
            <div className={css.container}>
              <button type="submit" className={css.button}>
                Register
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
