import {
  Routes,
  Route,
} from "react-router";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import { BrowserRouter } from "react-router";

import Profile from "./pages/Profile";
import Documents from "./pages/Documents";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
        <BrowserRouter>

    <Routes>
      <Route element={<Layout />}>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/documents"
          element={<Documents />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Route>
    </Routes>
      </BrowserRouter>
  );
}

export default App;