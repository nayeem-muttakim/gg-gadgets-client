import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../HomePage/NavBar/NavBar";

const Main = () => {
  return (
    <Box>
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default Main;
