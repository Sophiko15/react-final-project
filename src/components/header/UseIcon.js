import { Avatar, Box, IconButton, Menu, MenuItem, styled } from "@mui/material"
import React, { useState } from "react"
import { Button } from "../atoms"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../hooks"
import { getUserInitials, isUserAdmin } from "../../helpers/utils"
import { useDispatch } from "react-redux"
import { logout, setSelecdetProduct } from "../../redux/slice"

const StyledBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: 10,
}));

export const UserIcon = () => {
  const { userData } = useUser();
  const [anchor, setAnchor] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
        <Avatar>{getUserInitials(userData)}</Avatar>
      </IconButton>

      <Menu
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={() => {
          setAnchor(null);
        }}
      >
        <StyledBox>
          {!userData && (
            <>
              <MenuItem>
                <Button onClick={() => navigate("/login")}>login</Button>
              </MenuItem>
              <MenuItem>
                <Button onClick={() => navigate("/register")}>register</Button>
              </MenuItem>
            </>
          )}
          {userData && (
            <MenuItem>
              <Button
                onClick={() => {
                  navigate("/");
                  dispatch(logout());
                }}
              >
                logout
              </Button>
            </MenuItem>
          )}
          {isUserAdmin(userData) && (
            <MenuItem>
              <Button
                onClick={() => {
                  dispatch(setSelecdetProduct(null)); // Clear selected product
                  navigate("/products/new");
                }}
              >
                add product
              </Button>
            </MenuItem>
          )}
        </StyledBox>
      </Menu>
    </Box>
  );
};