import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const numItems = items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numItems}</span>
    </button>
  );
};

export default CartButton;
