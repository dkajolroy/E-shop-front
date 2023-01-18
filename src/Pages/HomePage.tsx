import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useSwr from "swr";
import Product from "../Components/Product";
import { baseUrl, fetcher } from "../utils/Helpers";
import {ProductInterface, ProductType} from "../utils/Interface";
import InfiniteScroll from "../Components/InfiniteScroll";
import Category from "../Components/Category";
export default function HomePage() {
  const [pagination, setPagination] = useState<{ limit: number; skip: number }>(
    { limit: 12, skip: 0 }
  );

    const [product, setProduct] = useState<ProductType[]>([]);
    const { data, error, isLoading } = useSwr<ProductInterface, Error>(
    baseUrl + `/products?limit=${pagination.limit}&skip=${pagination.skip}`,
    fetcher
  );

    useEffect(() => {
      if (data){
          setProduct(data.products)
      }
    }, [data]);



const callback=()=>{
    setPagination(prevState => ({...prevState,limit:product.length+12}))
}


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
    if (!product&&isLoading) {
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
        <h4>Category</h4>
        <Category/>
      <InfiniteScroll bottomToActionPosition={150} getDataLength={product.length} callback={callback}>
          <div className="row gy-3">
              {product.map((item, index) => {
                  return <Product item={item} key={index} />;
              })}
          </div>
          {
              product&&isLoading?
                  <div
                      style={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "center",
                      }}
                  >
                      <Spinner />
                  </div>:null
          }
      </InfiniteScroll>
    </div>
  );
}
