import "antd/dist/antd.css";
import "./App.css";
import MainPageComponent from "./main/index.js";
import {
  Switch,
  Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom"; // eslint-disable-line no-unused-vars
import UploadPage from "./upload";
import ProductPage from "./product";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
function App() {
  const history = useNavigate();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="images/images/icons/logo.png" alt="logo" />
          </Link>
          <button
            size="large"
            onClick={function () {
              history("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품업로드
          </button>
        </div>
      </div>
      <div id="body">
        <Routes>
          <Route exact={true} path={"/"} element={<MainPageComponent />} />

          <Route exact={true} path="/product/:id" element={<ProductPage />} />

          <Route exact={true} path="/upload" element={<UploadPage />} />
        </Routes>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
