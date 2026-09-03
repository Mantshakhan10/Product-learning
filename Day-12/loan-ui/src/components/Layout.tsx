import { Link, Outlet } from "react-router";

function Layout() {
  return (
    <>
      <nav className="navbar">
        <h2>Loan Mock UI</h2>

        <div className="nav-links">
          <Link to="/profile">Profile</Link>
          <Link to="/documents">Documents</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/personalInfo">Personal Info</Link>
        </div>
      </nav>

      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;