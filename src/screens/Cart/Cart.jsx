import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity, removeFromCart } from "../../redux/slices/cart.slice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const sum = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div className="cart">
      <div className="cart-container">
        <h2 className="cart-title">Products cart</h2>
        <div className="cart-content">
          <table className="cart-products">
            <thead className="cart-products__sections">
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody className="cart-products__content">
              {products.length === 0 ? (
                <tr>
                  <td colSpan="4" className="empty-cart-message">
                    Your cart is empty
                  </td>
                </tr>
              ) : (
                products.map((product, index) => (
                  <tr key={index}>
                    <td className="cart-product">
                      <div className="product-image">
                        <img src={product.image} alt="" />
                      </div>
                      <div className="product-info">
                        <div className="product-info__name">
                          <p>{product.name}</p>
                        </div>
                        <div className="product-info__params">
                          <div className="product-info__params-color">
                            <p>Color:</p>
                            <span style={{ backgroundColor: product.hexValue, outline: "1px solid #A1A1A1" }}></span>
                          </div>
                          <div className="product-info__params-size">
                            <p>
                              Size: <span>{product.size}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="cart-product__price">
                      <p>{product.price}$</p>
                    </td>
                    <td>
                      <div className="cart-product__quantity">
                        <button onClick={() => dispatch(decrementQuantity(product))} disabled={product.quantity <= 1}>
                          -
                        </button>
                        <p>{product.quantity}</p>
                        <button onClick={() => dispatch(addToCart(product))}>+</button>
                      </div>
                    </td>
                    <td>
                      <div className="cart-product__amount">
                        <p>{product.price * product.quantity}$</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none" onClick={() => dispatch(removeFromCart(product))}>
                          <path
                            d="M1 5H17M2 5L3 17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17L16 5M6 5V2C6 1.73478 6.10536 1.48043 6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1H11C11.2652 1 11.5196 1.10536 11.7071 1.29289C11.8946 1.48043 12 1.73478 12 2V5M7 10L11 14M11 10L7 14"
                            stroke="#ADADAD"
                            stroke-width="1.7"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </td>
                    <div className="cart-products__options">
                      <td className="cart-product__price">
                        <p>{product.price}$</p>
                      </td>
                      <td>
                        <div className="cart-product__quantity">
                          <button onClick={() => dispatch(decrementQuantity(product))} disabled={product.quantity <= 1}>
                            -
                          </button>
                          <p>{product.quantity}</p>
                          <button onClick={() => dispatch(addToCart(product))}>+</button>
                        </div>
                      </td>
                      <td>
                        <div className="cart-product__amount">
                          <p>{product.price * product.quantity}$</p>
                        </div>
                      </td>
                      <td>
                        <div className="cart-product__remove">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none" onClick={() => dispatch(removeFromCart(product))}>
                            <path
                              d="M1 5H17M2 5L3 17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17L16 5M6 5V2C6 1.73478 6.10536 1.48043 6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1H11C11.2652 1 11.5196 1.10536 11.7071 1.29289C11.8946 1.48043 12 1.73478 12 2V5M7 10L11 14M11 10L7 14"
                              stroke="#ADADAD"
                              stroke-width="1.7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </td>
                    </div>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className="cart-total">
            <span className="cart-total__title">Total</span>
            <div className="cart-total__amount">
              <p className="cart-total__text">Sum</p>
              <svg width="138" height="1" viewBox="0 0 138 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="138" y2="0.5" stroke="#D1D1D1" stroke-dasharray="2 2" />
              </svg>
              <span className="cart-total__sum">{sum}$</span>
            </div>
            <button className="cart-total__button">
              <span>Place order</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                  <path
                    d="M15.0303 5.96967C15.3232 6.26256 15.3232 6.73744 15.0303 7.03033L10.2574 11.8033C9.96447 12.0962 9.48959 12.0962 9.1967 11.8033C8.90381 11.5104 8.90381 11.0355 9.1967 10.7426L13.4393 6.5L9.1967 2.25736C8.90381 1.96447 8.90381 1.48959 9.1967 1.1967C9.48959 0.903806 9.96447 0.903806 10.2574 1.1967L15.0303 5.96967ZM0.5 5.75L14.5 5.75V7.25L0.5 7.25L0.5 5.75Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
