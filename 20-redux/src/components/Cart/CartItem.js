import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { title, quantity, totalPrice, price } = props.item;
  const dispatch = useDispatch();

  const hsndlerClickAdd = () => {
    dispatch(cartActions.add(props.item));
  };

  const hsndlerClickRemove = () => {
    dispatch(cartActions.remove(props.item));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={hsndlerClickRemove}>-</button>
          <button onClick={hsndlerClickAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
