import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import OrderPage from "./Pages/OrderPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import UserLayout from "./Layout/UserLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </UserLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
