import { AppBar, Box, Toolbar, styled } from "@mui/material"
import React, { useState } from "react"
import { Button, Link } from "../atoms"
import { UserIcon } from "./UseIcon"
import { ProductCategories } from "./ProductCategories"
import { CartDrawer } from "./CartDrawer"
import { FiShoppingCart } from "react-icons/fi"
import { SearchBar } from "./SearchBar"
import { AiFillHome } from "react-icons/ai"

const StyledAppar = styled(AppBar)(() => ({
  backgroundColor: "#160358",
  padding: "0 37px 0 30px",
}));

const StyledToolBar = styled(Toolbar)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  paddingTop: 8,
  paddingBottom: 8,
}));

export const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <Box>
      <StyledAppar>
        <StyledToolBar>
          <Link to="/">
          <AiFillHome  size={35} color="#f8f8f8"/>
          </Link>
 <ProductCategories />

          <SearchBar />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: 100,
            }}
          >
            <Button onClick={() => setIsCartOpen(true)}>
              <FiShoppingCart size={35} color="red" />
            </Button>
            <UserIcon />
          </Box>
        </StyledToolBar>
       
      </StyledAppar>
      <CartDrawer isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </Box>
  );
};