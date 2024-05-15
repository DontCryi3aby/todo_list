import { Box, Container, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Box>{children}</Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainLayout;
