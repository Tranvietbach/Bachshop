import React from "react";

// components
import ProductCard from "../components/ProductCard";

export default function Favourite() {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        {[...Array(3)].map((fav: any) => {
          return (
            <div className="w-full md:w-1/4">
              <ProductCard
                id={2}
                image="Iphone"
                title="Iphone"
                description="Iphone 14 max nhập khẩu chính hãng"
                price={2}
                discountPercentage={2}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
