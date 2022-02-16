import "./App.css";
import MainPageComponent from "./main/index.js";
import { Switch, Router, Route, Routes } from "react-router-dom"; // eslint-disable-line no-unused-vars
import UploadPage from "./upload";
import ProductPage from "./product";
function App() {
  return (
    <div>
      <Routes>
        <Route exact={true} path={"/"} element={<MainPageComponent />} />

        <Route exact={true} path="/product/:id" element={<ProductPage />} />

        <Route exact={true} path="/upload" element={<UploadPage />} />
      </Routes>
    </div>
  );
}

export default App;
