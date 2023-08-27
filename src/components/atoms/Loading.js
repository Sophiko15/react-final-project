import { Box, CircularProgress } from "@mui/material"

export const Loading = ({ size = 100 }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
};

export const LoadingWrapper = ({ isLoading, children }) => {
  if (isLoading) {
    return <Loading />;
  }
  
  return children;
};