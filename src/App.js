import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout";
import AppHome from "./pages/home/home";
import Tablefilter from "./component/Table";
function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<AppHome />} />
            <Route path="/familytree" element={"Family Tree"} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
