import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" className="cart">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
        <path
          d="M6.0659 9.02012V4.2979C6.0659 3.54646 6.37498 2.82579 6.92514 2.29443C7.4753 1.76308 8.22147 1.46457 8.99951 1.46457C9.77755 1.46457 10.5237 1.76308 11.0739 2.29443C11.624 2.82579 11.9331 3.54646 11.9331 4.2979V9.02012M3.45597 6.18679H14.544C14.826 6.18676 15.1047 6.24562 15.3609 6.35934C15.6171 6.47306 15.8449 6.63895 16.0285 6.84564C16.2121 7.05232 16.3473 7.29492 16.4248 7.55679C16.5022 7.81866 16.5201 8.09361 16.4773 8.36279L15.2501 16.0619C15.1435 16.731 14.7925 17.3411 14.2604 17.7818C13.7284 18.2226 13.0506 18.4648 12.3497 18.4646H5.64933C4.94859 18.4645 4.27101 18.2222 3.73919 17.7815C3.20738 17.3408 2.85646 16.7308 2.74995 16.0619L1.52272 8.36279C1.47986 8.09361 1.49778 7.81866 1.57524 7.55679C1.65271 7.29492 1.78788 7.05232 1.97151 6.84564C2.15514 6.63895 2.38288 6.47306 2.6391 6.35934C2.89533 6.24562 3.17399 6.18676 3.45597 6.18679Z"
          stroke="black"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div className={`cart-counter ${totalQuantity > 0 ? "visible" : ""}`}>
        {totalQuantity > 0 && <p>{totalQuantity}</p>}
      </div>
    </Link>
  );
};

export default Cart;
