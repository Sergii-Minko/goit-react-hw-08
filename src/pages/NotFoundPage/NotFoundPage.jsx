import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <img
        src="https://www.artzstudio.com/content/images/wordpress/2020/05/404-error-not-found-page-lost.png"
        width={1000}
        alt="Not Found"
      />
      <Link to="/">Home</Link>
    </div>
  );
};
export default NotFoundPage;
