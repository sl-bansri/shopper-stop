import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import "./App.css";
import ProductDetail from "./components/Product";
import SubCategory from "./components/SubCategory";
import Category from "./components/Category";
import MainCategory from "./components/MainCategory";
import CartPage from "./Pages/Cart";
import { ToastContainer } from "react-toastify";
import WishList from "./Pages/WishList";
import MainLayout from "./Layout/MainLayout";
import AuthRoute from "./components/Auth/ProtectedRoute";
import ScrollToTop from "./ScrollToTop";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/Signup";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        theme="dark"
      />
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <AuthRoute authType="public">
                <HomePage />
              </AuthRoute>
            }
          />
          <Route
            path="/category"
            element={
              <AuthRoute authType="public">
                <MainCategory />
              </AuthRoute>
            }
          />
          <Route
            path="/category/:categoryName"
            element={
              <AuthRoute authType="public">
                <Category />
              </AuthRoute>
            }
          />
          <Route
            path="/category/:categoryName/:subCategoryName"
            element={
              <AuthRoute authType="public">
                <SubCategory />
              </AuthRoute>
            }
          />
          <Route
            path="/category/:categoryName/:subCategoryName/:productId"
            element={
              <>
                <AuthRoute authType="public">
                  <ProductDetail />
                </AuthRoute>
                {/* <ToastContainer /> */}
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <AuthRoute authType="private">
                <CartPage />
              </AuthRoute>
            }
          />
          <Route
            path="/wishlist"
            element={
              <>
                <AuthRoute authType="private">
                  <WishList />
                </AuthRoute>
                {/* <ToastContainer /> */}
              </>
            }
          />
          <>{/* <Search /> */}</>
        </Route>

        <Route
          path="/login"
          element={
            <AuthRoute authType="public">
              <Login />
            </AuthRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthRoute authType="public">
              <SignUp />
            </AuthRoute>
          }
        />
        {/* <Route path="/checkout" element={
          <AuthRoute authType="private"><CheckOut /></AuthRoute>
        } /> */}
      </Routes>
    </Router>
  );
};

export default App;
