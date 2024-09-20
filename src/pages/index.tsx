import Hero from "@/components/fragments/Hero";
import FeaturedProduct from "@/components/fragments/NewProduct";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Hero/>
      <h1 className="text-center text-2xl font-bold mb-5 text-slate-600">New Products</h1>
      <FeaturedProduct/>
    </React.Fragment>
  );
}
