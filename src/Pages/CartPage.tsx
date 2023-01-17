import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeFromCart } from "../Store/CartSlice";
import { RootState } from "../Store/Store";
import { CartProductType } from "../utils/Interface";
export default function CartPage() {
  const { products } = useSelector((state: RootState) => state.cartState);
  const dispatch = useDispatch();

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8">
          {!products.length ? (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4>Cart is empty !</h4>
            </div>
          ) : null}
          {products.map((item: CartProductType, index) => (
            <div key={index} className="row w-100 bg-danger rounded my-2">
              <div className="col-2  align-items-center d-flex">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={item.thumbnail}
                  alt={item.title}
                />
              </div>
              <div className="col-6 justify-content-between align-items-center d-flex">
                <h4>{item.title}</h4>
                <h5>${item.price}</h5>
              </div>
              <div className="col-4 align-items-center d-flex">
                <button className="btn mx-1 btn-success">
                  {item.quantity}
                </button>
                <button
                  onClick={() => dispatch(decrement(item.id))}
                  className="btn mx-1 btn-success"
                >
                  -
                </button>
                <button
                  onClick={() => dispatch(increment(item.id))}
                  className="btn mx-1 btn-success"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="btn mx-1 btn-success"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <div>
            <h4>Total Item: {products.length}</h4>
            <h5>
              Total amount: $
              {products.reduce((sum, current) => sum + current.price, 0)}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
