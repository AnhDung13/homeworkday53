import CartPage from "../Page/Cart/CartPage";
import HomePage from "../Page/Home/HomePage";
import ProductDetailPage from "../Page/ProductDetail/ProductDetailPage";

export const routes = [
  {
    path: "/products/page/1",
    component: <HomePage />,
  },
  {
    path: "products/page/:page",
    component: <HomePage />,
  },
  {
    path: "/cart",
    component: <CartPage />,
  },
  {
    path: "/product/:id",
    component: <ProductDetailPage />,
  },
];
