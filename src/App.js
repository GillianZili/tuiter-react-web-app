import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import ProfileScreen from "./screens/profile-screen";
import LoginScreen from "./screens/login-screen";
import RegisterScreen from "./screens/register-screen.js";
import Navigation from "./navigation.js";
import authReducer from "./reducers/auth-reducer.js";
import Tuiter from "./tuiter";

function App() {
  const store = configureStore({
    reducer: { user: authReducer },
  });

  return (
    <Provider store={store}>
      <div className="container">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/login"
              element={<LoginScreen />} />
            <Route path="/profile"
              element={<ProfileScreen />} />
            <Route path="/tuiter/*"
              element={<Tuiter />} />
            <Route path="/register"
              element={<RegisterScreen />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>

  );
}

export default App;