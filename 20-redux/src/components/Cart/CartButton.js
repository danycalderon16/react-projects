import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const { items } = useSelector((state) => state.cart);

  const numItems = items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{numItems}</span>
    </button>
  );
};

export default CartButton;
