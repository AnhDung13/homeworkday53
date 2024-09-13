import { ToastContainer } from "react-toastify";
import HomePage from "./Page/Home/HomePage";
import Routing from "./routes/Routing";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/ReactToastify.min.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/productSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Routing>
        <HomePage />
      </Routing>
      <ToastContainer closeOnClick />
    </>
  );
}

export default App;
