import { useState, useEffect } from "react";
import "./UserTable.css";

export function EditUser({ user, onSave }) {
  const [editUser, setEditUser] = useState(user);

  useEffect(() => {
    setEditUser(user); // Update form when a new user is selected for editing
  }, [user]);

  function handleChange(e) {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(editUser); // Pass the edited user data to the parent component
  }

  if (!editUser) return null; // Don't render if no user is selected for editing

  return (

    <form onSubmit={handleSubmit}>
      <label>Full Name</label>
      <input
        type="text"
        name="FullName"
        value={editUser.FullName}
        onChange={handleChange}
        required
      />
      <br />
      <label>Phone Number</label>
      <input
        type="text"
        name="PhoneNumber"
        value={editUser.PhoneNumber}
        onChange={handleChange}
        required
      />
      <br />
      <label>Address</label>
      <input
        type="text"
        name="Address"
        value={editUser.Address}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Save Changes</button>
    </form>
  );
}
