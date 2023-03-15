import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/product.context";
import { CartProvider } from "./contexts/cart-context";

import "./index.scss";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);


// import React from "react";
// import { render } from "react-dom";
// import { BrowserRouter } from "react-router-dom";

// import App from "./App";

// import { UserProvider } from "./contexts/user.context";
// import { ProductsProvider } from "./contexts/product.context";
// import { CartContext } from "./contexts/cart-context";

// import "./index.scss";

// const rootElement = document.getElementById("root");

// render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <UserProvider>
//         <ProductsProvider.Consumer>
//           {(productData) => (
//             <CartContext>
//               <App products={productData} />
//             </CartContext>
//           )}
//         </ProductsProvider.Consumer>
//       </UserProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   rootElement
// );

