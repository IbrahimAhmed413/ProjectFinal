import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function AddUser({ onAdd }) {
  const [newUser, setNewUser] = useState({
    ID: "",
    FullName: "",
    PhoneNumber: "",
    Address: "",
  });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const userToAdd = { ...newUser }; 
    onAdd(userToAdd); 

    // Clear the form and navigate back to UserTable
    setNewUser({ FullName: "", PhoneNumber: "", Address: "" });
    navigate("/UserTable"); // Navigate to the UserTable after adding
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>ID</label>
        <input
        type="text"
        name="ID"
        value={newUser.ID}
        onChange={handleChange}
        required
      />
      <label>Full Name</label>
      <input
        type="text"
        name="FullName"
        value={newUser.FullName}
        onChange={handleChange}
        required
      />
      <br />
      <label>Phone Number</label>
      <input
        type="text"
        name="PhoneNumber"
        value={newUser.PhoneNumber}
        onChange={handleChange}
        required
      />
      <br />
      <label>Address</label>
      <input
        type="text"
        name="Address"
        value={newUser.Address}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Add User</button>
    </form>
  );
}
