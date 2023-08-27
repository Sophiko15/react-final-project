import { Box, Card, CardActions, Grid, styled } from "@mui/material";
import React from "react";
import { Link, Text } from "../../atoms";
import { ProductCardActions } from "./ProductCardActions";
import { useUser } from "../../../hooks";

const StyledImage = styled("img")(() => ({
  objectFit: "cover",
  width: "100%",
  height: "270px",
}));

const StyledInfoContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "20px 20px",
}));

export const ProductCard = ({ product }) => {
  const { _id, name, price, image, brand , category} = product;
  const { userData } = useUser();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ borderRadius: 8 }}>
        <Link
          to={`/products/categories/${category}/${_id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <StyledImage src={image} alt={`${brand} - ${name}`} />
          <StyledInfoContainer>
            <Text>{name}</Text>
            <Text>${price}</Text>
          </StyledInfoContainer>
        </Link>
        <CardActions>
          <ProductCardActions userData={userData} product={product} />
        </CardActions>
      </Card>
    </Grid>
  );
};