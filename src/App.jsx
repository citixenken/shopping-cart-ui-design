import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <ProductList /> */}
          {/* <Product /> */}
          {/* <Register /> */}
          {/* <Login /> */}
          {/* <Cart /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
