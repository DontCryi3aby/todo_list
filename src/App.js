import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import AddTask from "./pages/AddTask";
import Filter from "./pages/Filter";
import Inbox from "./pages/Inbox";
import Upcoming from "./pages/Upcoming";
import Search from "./pages/Search";
import "./App.css";
import LoginPage from "./pages/Login";

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

export default App;
