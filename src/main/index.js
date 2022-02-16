import "./index.css";
import axios from "axios";
import React from "react";
import react from "react";
function MainPage() {
  const [products, setProducts] = React.useState([]);
  react.useEffect(function () {
    axios
      .get(
        "https://3ae5af13-6c86-40db-b208-b0aba0f43724.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.log("error : ", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>

        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card">
                <div>
                  <img
                    className="product-img"
                    src={product.imageUrl}
                  />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div
                    className="product-seller"
                    src="images/images/icons/avatar.png"
                  >
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
