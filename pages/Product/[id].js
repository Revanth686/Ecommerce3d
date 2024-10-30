import React, { useState, useEffect } from "react";
import preview2 from "../../data/Preview2";
import ProductPage from "../../components/ProductPage";

export const config = {
  runtime: "experimental-edge",
};

export default function id({ product }) {
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-5xl">
        Not Found
      </div>
    );
  }
  return (
    <div>
      <ProductPage product={product} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const productId = context.query.id ? context.query.id : null;
  const prod = preview2.find((x) => x.id === Number(productId));
  return {
    props: {
      product: prod ? prod : null,
    },
  };
}
