import { Box, Container, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Box>{children}</Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainLayout;
