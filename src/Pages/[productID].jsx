import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../data/products";
import NumberCounter from "../../utilities/NumberCounter";


const productPage = () => {
  const { productID } = useParams();
  const [product, setproduct] = useState({});
  const [notfound, setnotfound] = useState(false);
  const [loading, setloading] = useState(true);
  const [quantity, setquantity] = useState(second);

  useEffect(() => {
    if (productID) {
      let index = PRODUCTS.findIndex((product) => product.id == productID);
      if (index > -1) {
        setproduct(PRODUCTS[index]);
      } else {
        setnotfound(true);
      }
      setloading(false);
    }
  }, [productID]);

  const updateQuantity = (newQuantity) => {
    setquantity(newQuantity)
  }

  if (notfound) {
    return <div>Product not found</div>;
  }

  if (loading) {
    <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-screen-lg mx-auto my-6">
      {product && (
        <>
          {PRODUCTS.map((product, index) => {
            <>
            <div className="col-span-2">
              <div className="border rounded border-slate-300 flex items-center justify-center">
                <img
                  key={index}
                  src={product.imgUrl}
                  alt=""
                  className="md:h-[350px] md:w-[270px] h-[270px] w-[230px] object-contain"
                  objectfit="cover"
                  srcset=""
                />
              </div>
            </div>

            <div className="col-span-3 flex flex-col justify-between">
                <div className="product-info">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                </div>
            </div>

            <div className="product-controls flex flex-row items-end">
                <NumberCounter quantity={quantity} updateQuantity={updateQuantity}/>
                <button>ADD TO CART</button>
            </div>

            </>

          })}
        </>
      )}
    </div>
  );
};

export default productPage;
