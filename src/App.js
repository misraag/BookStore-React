import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import ProductDescription from "./pages/shop/ProductDescription";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router basename="/BookStore-React">
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<ProductDescription/>} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
