import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world.js";
import Tuiter from "./tuiter";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import ProfileScreen from "./screens/profile";
import LoginScreen from "./screens/login";
import Navigation from "./components/nav";

function App() {
  const hello = "Hello World!";

  return (
    <Provider store={store}>
      <div className="container">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/admin"
              element={<AdminScreen />} />
            <Route path="/login"
              element={<LoginScreen />} />
            <Route path="/profile"
              element={<ProfileScreen />} />
          </Routes>
        </Router>
      </div>
    </Provider>

  );
}

export default App;
