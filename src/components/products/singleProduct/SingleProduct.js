import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchData, useUser } from "../../../hooks";
import { LoadingWrapper, Text } from "../../atoms";
import { Box, styled } from "@mui/material";
import { ProductCardActions } from "../shared/ProductCardActions";

const Container = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-around",

}));

const StyledImage = styled("img")(() => ({
  width: "350px",
  height: "350px",
  objectFit: "cover",

}));

const Description = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",

}));

export const SingleProduct = () => {
  const { id, category } = useParams();
  const { getData, data, loading, error } = useFetchData();
  const { userData } = useUser();

  useEffect(() => {
    getData(`/products/category/${category}/${id}`);
  }, [id, category]);

  const { image, name, brand, description } = data?.product  || {};
  return (
    <LoadingWrapper isLoading={loading}>
      <Container>
        <StyledImage src={image} />
        <Box>
          <Description>
            <Text variant="h4">პროდუქტის დასახელება:</Text>
            <Text variant="h4">{name}</Text>
          </Description>
          <Description>
            <Text variant="h4">ბრენდი:</Text>
            <Text variant="h4">{brand}</Text>
          </Description>

          <Description>
            <Text variant="h4">აღწერა:</Text>
            <Text variant="h4">{description}</Text>
          </Description>
          <ProductCardActions 
          userData={userData} 
          product={data?.product} />
        </Box>
      </Container>
    </LoadingWrapper>
  );
};