import { useState } from "react";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    console.log({
      name,
      email,
      phone,
    });

    alert("Profile saved successfully!");
  }

  return (
    <div className="card">
      <h1>Profile</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>

        <input
          type="text"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          placeholder="Enter your name"
        />

        <label>Email</label>

        <input
          type="email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
          placeholder="Enter your email"
        />

        <label>Phone</label>

        <input
          type="tel"
          value={phone}
          onChange={(event) =>
            setPhone(event.target.value)
          }
          placeholder="Enter your phone"
        />

        <button type="submit">
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;