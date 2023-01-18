import React from 'react';
import useSwr from "swr";
import {fetcher} from "../utils/Helpers";


const MyComponent = () => {
    const apiUri = "https://dummyjson.com/products/categories"
    const {data, error,isLoading} = useSwr<string[], Error>(apiUri, fetcher)



    return (
        <div className="row mb-3 gy-3">
            {
                data?.map((item,index)=>{
                    return(
                        <div key={index} className="col-lg-3 col-md-4 col-6">
                            <div
                                style={{
                                background:"tomato",
                                borderRadius:"30px",
                                textAlign:"center",
                                cursor:"pointer",
                                color:"#fff",
                                padding:"2px"
                            }}>
                                <h5>{item}</h5>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default MyComponent;
