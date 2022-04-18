import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "../Header";
import Home from "../../pages/Home";
import About from "../../pages/About";
import ProductDetails from "../../pages/ProductDetails";
import "./app.css";

const App = () => (
  <BrowserRouter>
    <main>
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product-details" element={<ProductDetails />} />
        </Routes>
      </div>
    </main>
  </BrowserRouter>
);

export default App;