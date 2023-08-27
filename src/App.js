import React, { useEffect } from "react";
import RoutesComponent from "./Routes";
import { useUser } from "./hooks";
import { Grid } from "@mui/material";
import { Header } from "./components/header";
import { useDispatch } from "react-redux";
import { fetchCart, fetchHomePageProducts } from "./redux/slice";

const App = () => {
  const { userData } = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomePageProducts());
  }, []);

  useEffect(() => {
    const userId = userData?._id;
    if (userId) {
      dispatch(fetchCart({ userId }));
    }
  }, [userData]);

  return (
    <Grid sx={{ minHeight: "100vh" }}>
      <Grid item>
        <Header />
      </Grid>
      <Grid
        item
        sx={{
          paddingTop: 20,
          minHeight: "100vh",
          width: "100%",
          pb: 10,
          backgroundColor: "f5f5f5,",
        }}
      >
        <RoutesComponent />
      </Grid>
    </Grid>
  );
};

export default App;