import { Link, Outlet } from "react-router";

function Layout() {
  return (
    <div>
      <header>
        <h1>React Router App</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/documents">Documents</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;