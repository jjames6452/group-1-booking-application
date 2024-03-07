import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SignIn from "./pages/SignIn";
import Offers from "./components/Offers";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Offers
                title="Fly away to your dream"
                description="Get inspired, compare and book flights with more flexibility"
                buttonTxt="Search for flights"
                imageUrl="https://res.cloudinary.com/drvv53jnw/image/upload/v1709669054/offer_kteeei.jpg"
              />
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <p>Search Page</p>
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
