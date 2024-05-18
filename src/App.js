import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import AddTask from "./pages/AddTask";
import Filter from "./pages/Filter";
import Inbox from "./pages/Inbox";
import LoginPage from "./pages/Login";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import Upcoming from "./pages/Upcoming";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#a81f00",
          },
          secondary: {
            main: "#19857b",
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/tasks/add"
          element={
            <MainLayout>
              <AddTask />
            </MainLayout>
          }
        />
        <Route
          path="/filter"
          element={
            <MainLayout>
              <Filter />
            </MainLayout>
          }
        />
        <Route
          path="/inbox"
          element={
            <MainLayout>
              <Inbox />
            </MainLayout>
          }
        />
        <Route
          path="/search"
          element={
            <MainLayout>
              <Search />
            </MainLayout>
          }
        />
        <Route
          path="/upcoming"
          element={
            <MainLayout>
              <Upcoming />
            </MainLayout>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
