import React from "react";
import { ProductType } from "../utils/Interface";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/CartSlice";
export default function Product({ item }: { item: ProductType }) {
  const dispatch = useDispatch();

  return (
    <div className="col-md-3 col-sm-4 col-6">
      <div style={{ cursor: "pointer" }} className="shadow rounded">
        <Link preventScrollReset={true} to={`/product/${item.id}`}>
          <div style={{ height: "200px" }} className="d-flex">
            <img
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              src={item.thumbnail}
              alt={item.title}
            />
          </div>
          <div className="d-flex flex-column p-2">
            <span>Brand: {item.brand}</span>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              Price: ${item.price}
            </span>
            <h2
              style={{
                fontSize: "16px",
              }}
            >
              {item.title.slice(0, 25)}
              {item.title.length > 20 ? "..." : ""}
            </h2>
          </div>
        </Link>
        <button
          onClick={() => dispatch(addToCart(item))}
          className="btn w-100 btn-success"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
