import {
  Routes,
  Route,
} from "react-router";

import Layout from "./components/Layout";

import Profile from "./pages/Profile";
import Documents from "./pages/Documents";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        <Route
          path="/"
          element={<Profile />}
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
  );
}

export default App;