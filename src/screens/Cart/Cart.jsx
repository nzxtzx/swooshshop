import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity, removeFromCart } from "../../redux/slices/cart.slice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const sum = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div className="cart">
      <div className="cart-container">
        <h2 className="cart-title">Products cart</h2>
        <div className="cart-content">
          {products.length === 0 ? (
            <div className="cart-empty">
              <svg xmlns="http://www.w3.org/2000/svg" width="79" height="90" viewBox="0 0 79 90" fill="none">
                <path
                  d="M24.8295 40.2222V16.3333C24.8295 12.5319 26.3749 8.88616 29.1257 6.19814C31.8765 3.51012 35.6074 2 39.4976 2C43.3878 2 47.1186 3.51012 49.8694 6.19814C52.6202 8.88616 54.1656 12.5319 54.1656 16.3333V40.2222M11.7799 25.8889H67.2201C68.6301 25.8887 70.0234 26.1865 71.3045 26.7618C72.5856 27.3371 73.7243 28.1763 74.6424 29.2219C75.5606 30.2675 76.2365 31.4947 76.6238 32.8195C77.0111 34.1442 77.1007 35.5351 76.8864 36.8969L70.7503 75.8453C70.2176 79.2301 68.4623 82.3167 65.8022 84.5462C63.1421 86.7758 59.753 88.001 56.2485 88H22.7467C19.243 87.9998 15.855 86.7741 13.196 84.5447C10.5369 82.3152 8.78232 79.2293 8.24975 75.8453L2.11362 36.8969C1.89932 35.5351 1.98889 34.1442 2.37621 32.8195C2.76353 31.4947 3.43942 30.2675 4.35757 29.2219C5.27571 28.1763 6.41438 27.3371 7.69551 26.7618C8.97664 26.1865 10.3699 25.8887 11.7799 25.8889Z"
                  stroke="#211D19"
                  stroke-width="2.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M33.7273 63.899L33.7281 63.898C35.1776 62.2882 37.1434 61.3838 39.1932 61.3838C41.2429 61.3838 43.2088 62.2882 44.6582 63.898L44.6591 63.899M27 53C28.0035 54.0732 29.365 54.6768 30.7841 54.6768C32.2032 54.6768 33.5641 54.0738 34.5677 53.0006M43.8182 53C44.8217 54.0732 46.1832 54.6768 47.6023 54.6768C49.0214 54.6768 50.3823 54.0738 51.3859 53.0006"
                  stroke="#211D19"
                  stroke-width="2.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h4>Your cart is currently empty</h4>
              <p>
                Before you proceed to checkout, you should add some items to your cart. On the <span>"Catalog"</span> page you will find many interesting products.
              </p>
              <Link to="/catalog">
              <button className="cart-empty__button">
                <span>Go to catalog</span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                    <path
                      d="M15.0303 5.96967C15.3232 6.26256 15.3232 6.73744 15.0303 7.03033L10.2574 11.8033C9.96447 12.0962 9.48959 12.0962 9.1967 11.8033C8.90381 11.5104 8.90381 11.0355 9.1967 10.7426L13.4393 6.5L9.1967 2.25736C8.90381 1.96447 8.90381 1.48959 9.1967 1.1967C9.48959 0.903806 9.96447 0.903806 10.2574 1.1967L15.0303 5.96967ZM0.5 5.75L14.5 5.75V7.25L0.5 7.25L0.5 5.75Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
              </Link>
            </div>
          ) : (
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
                {products.map((product, index) => (
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="2" viewBox="0 0 5 2" fill="none">
                              <path d="M0.550781 1.533V0.466995H4.45078V1.533H0.550781Z" fill="#A7A7A7" />
                            </svg>
                          </button>
                          <p>{product.quantity}</p>
                          <button onClick={() => dispatch(addToCart(product))}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none">
                              <path d="M2.92722 5.925V3.533H0.574219V2.467H2.92722V0.0749969H4.07122V2.467H6.42422V3.533H4.07122V5.925H2.92722Z" fill="#A7A7A7" />
                            </svg>
                          </button>
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
                ))}
              </tbody>
            </table>
          )}
          {products.length > 0 && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
