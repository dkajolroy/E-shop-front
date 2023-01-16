import React from "react";
import { useParams } from "react-router-dom";
import { baseUrl, fetcher } from "../utils/Helpers";
import { ProductType } from "../utils/Interface";
import useSwr from "swr";
import { Spinner } from "react-bootstrap";

export default function ViewProductPage() {
  const { id } = useParams();
  const { data, error, isLoading } = useSwr<ProductType, Error>(
    baseUrl + `/products/${id}`,
    fetcher
  );
  if (error) {
    return (
      <div
        style={{
          display: "flex",
          height: "80vh",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Something Error</h2>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          height: "80vh",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container ">
      <div className="my-4">
        <div className="row">
          <div className="col-md-6">
            <div
              style={{
                width: "90%",
                margin: "0 auto",
              }}
            >
              <img
                style={{
                  height: "300px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                src={data?.thumbnail}
                alt={data?.title}
              />
              <div className="row my-2 gx-2">
                {data?.images.map((item, index) => {
                  return (
                    <div
                      style={{
                        height: "60px",
                      }}
                      key={index}
                      className="col"
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        src={item}
                        alt="product"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h4>{data?.title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
