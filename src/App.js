import "./App.css";
import Banner from "./Banner";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Register/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import CreateAccount from "./Register/CreateAccount";
import Payments from "./Payments";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Footer from "./Footer";

import Shop from "./Shop/Shop";
import Checkout from "./Shop/Checkout";
import Nutrition from "./Nutrition/Nutrition";
import Training from "./Training/Training";
import Transformation from "./Training/Transformation";
import Blog from "./ContentsInBlog/Blog";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Contents from "./MainPage/Contents";

const promise = loadStripe(
  "pk_test_51NdcKWH7oeKd7wcygoWL1szZmEOCjUXbKbPvBqoJAZ9fQQraVX7EEgedZeXYQ1QnQGeRafcBz1uNsaD4sYEbtnVs00SwUCTLU7"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <div>
                <Login />
              </div>
            }
          />
          <Route
            path="/login/createAccount"
            element={
              <div>
                <CreateAccount />
              </div>
            }
          />
          <Route
            path="/training"
            element={
              <div>
                <Header />
                <Training />
                <Footer />
              </div>
            }
          />
          <Route
            path="/transformation"
            element={
              <div>
                <Transformation />
                <Footer />
              </div>
            }
          />
          <Route
            path="/nutrition"
            element={
              <div>
                <Header />
                <Nutrition />
                <Footer />
              </div>
            }
          />
          <Route
            path="/gallery"
            element={
              <div>
                <Header />
                <Gallery />
                <Footer />
              </div>
            }
          />

          <Route
            path="/shop"
            element={
              <div>
                <Header />
                <Shop />
                <Footer />
              </div>
            }
          />
          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <Elements stripe={promise}>
                  <Checkout />
                </Elements>
                <Footer />
              </div>
            }
          />
          <Route
            path="/blog"
            element={
              <div>
                <Header />
                <Blog />
                <Footer />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div>
                <Header />
                <Contact />
                <Footer />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Banner />
                <Elements stripe={promise}>
                  <Contents />
                </Elements>
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
