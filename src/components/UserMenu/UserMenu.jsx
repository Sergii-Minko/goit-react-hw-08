import { useDispatch } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(logoutThunk())} className={css.button}>
        Logout
      </button>
    </>
  );
};
export default UserMenu;
