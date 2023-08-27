import React from "react";
import { GridContainer, ProductCard } from "../shared";
import { useProduct } from "../../../hooks";
import { LoadingWrapper } from "../../atoms";

export const HomePageProduct = () => {
  const { homePageProducts , isLoading} = useProduct();
  return (
    <LoadingWrapper isLoading={isLoading}>
      <GridContainer>
        {homePageProducts?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))};
      </GridContainer>
    </LoadingWrapper>
  );
};