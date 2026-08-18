import { useEffect, useState } from "react";
import "./App.css";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  async function fetchUsers() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data: User[] = await response.json();

      setUsers(data);
    } catch (error) {
      console.error(error);
      setError("Failed to load users.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="app">
        <h1>User Directory</h1>
        <p>Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <h1>User Directory</h1>
        <p>{error}</p>

        <button onClick={fetchUsers}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>User Directory</h1>

      <h2>Users</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={() => setSelectedUser(user)}>
              {user.name}
            </button>
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div className="user-details">
          <h2>{selectedUser.name}</h2>

          <p>
            <strong>Email:</strong> {selectedUser.email}
          </p>

          <p>
            <strong>Phone:</strong> {selectedUser.phone}
          </p>

          <p>
            <strong>Website:</strong> {selectedUser.website}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;