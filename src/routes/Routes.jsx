import CartPage from "../Page/Cart/CartPage";
import HomePage from "../Page/Home/HomePage";

export const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/cart",
    component: <CartPage />,
  },
  {
    path: "/product/:id",
    component: "",
  },
];
