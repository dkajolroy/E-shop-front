import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useSwr from "swr";
import Product from "../Components/Product";
import { baseUrl, fetcher } from "../utils/Helpers";
import { ProductInterface } from "../utils/Interface";
export default function HomePage() {
  const [pagination, setPagination] = useState<{ limit: number; skip: number }>(
    { limit: 12, skip: 0 }
  );
  const { data, error, isLoading } = useSwr<ProductInterface, Error>(
    baseUrl + `/products?limit=${pagination.limit}&skip=${pagination.skip}`,
    fetcher
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight > scrollHeight - 5) {
        setPagination((prev) => ({ ...prev, limit: prev.limit + 8 }));
      }
    });
  }, []);

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
    <div className="container my-4">
      <div className="row gy-3">
        {data?.products.map((item, index) => {
          return <Product item={item} key={index} />;
        })}
      </div>
    </div>
  );
}
