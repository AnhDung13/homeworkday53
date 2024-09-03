import { ToastContainer } from "react-toastify";
import HomePage from "./Page/Home/HomePage";
import Routing from "./routes/Routing";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/ReactToastify.min.css";
function App() {
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
