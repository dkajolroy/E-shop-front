import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Store/Store";
import { ProductType } from "../utils/Interface";

export default function CartPage() {
  const { products } = useSelector((state: RootState) => state.cartState);

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8">
          {products.map((item: ProductType) => (
            <div className="row w-100 bg-danger rounded my-2">
              <div className="col-2  align-items-center d-flex">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={item.thumbnail}
                  alt={item.title}
                />
              </div>
              <div className="col-6 align-items-center d-flex">
                <h4>{item.title}</h4>
              </div>
              <div className="col-4 align-items-center d-flex">
                <button className="btn mx-1 btn-success">1</button>
                <button className="btn mx-1 btn-success">-</button>
                <button className="btn mx-1 btn-success">+</button>
                <button className="btn mx-1 btn-success">Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">Total Prices</div>
      </div>
    </div>
  );
}
