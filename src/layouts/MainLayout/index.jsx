import { Box, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (
    <Box>
      <Grid container>
        <Grid item xs={3} sx={{ background: "#9D8F8F " }}>
          <Sidebar />
        </Grid>
        <Grid item xs={9} sx={{ background: "#F9F9F9" }}>
          <Box>{children}</Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainLayout;
