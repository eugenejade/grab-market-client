import "./index.css";
import axios from "axios";
import React from "react";
import react from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { API_URL } from "../config/constants";
dayjs.extend(relativeTime); //relativeTime plugin import후 extend로 dayjs 기능 확장

function MainPage() {
  const [products, setProducts] = React.useState([]);
  react.useEffect(function () {
    axios
      .get(`${API_URL}/products`)
      .then(function (result) {
        console.log("result : ", result);
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.log("error : ", error);
      });
  }, []);

  return (
    <div>
      <div id="banner">
        <img src="images/images/banners/banner1.png" />
      </div>
      <h1>판매되는 상품들</h1>

      <div id="product-list">
        {products.map(function (product, index) {
          return (
            <div className="product-card">
              <Link className="product-link" to={`/product/${product.id}`}>
                <div>
                  <img className="product-img" src={product.imageUrl} />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-footer">
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="images/images/icons/avatar.png"
                      />
                      <span>{product.seller}</span>
                    </div>
                    <span>{dayjs(product.createdAt).fromNow()}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
