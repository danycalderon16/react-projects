import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        items.map((item) => (
          <ul key={item.id}>
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                quantity: item.quantity,
                total: item.price * item.quantity,
                price: item.price,
              }}
            />
          </ul>
        ))
      )}
      <p>
        Total: $
        {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </p>
    </Card>
  );
};

export default Cart;
