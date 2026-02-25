import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import About from "./components/About";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import PlaceOrder from "./components/PlaceOrder";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideLayout && <Header />}
      {!hideLayout && <SubHeader />}

      <div className="container">
        {!hideLayout && (
          <h1 className="title">API Product Catalog</h1>
        )}

        <Routes>
          {/* Public */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ProductList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/category/:name"
            element={
              <ProtectedRoute>
                <ProductList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/product/:id"
            element={
              <ProtectedRoute>
                <ProductDetail />
              </ProtectedRoute>
            }
          />

          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route
            path="/place-order"
            element={
              <ProtectedRoute>
                <PlaceOrder />
              </ProtectedRoute>
            }
          />
        </Routes>

        {!hideLayout && <Footer />}
      </div>
    </>
  );
}

export default App;