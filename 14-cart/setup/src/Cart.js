import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

const Cart = () => {
  const { cart, total, clearCart } = useGlobalContext();
  const cartItems = cart.map((item) => <CartItem key={item.id} {...item} />);
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>{cartItems}</div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default Cart;
