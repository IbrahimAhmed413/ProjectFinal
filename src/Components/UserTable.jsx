import "./UserTable.css";
import { useState } from "react";

export function UserTable() {
  const [UserData, setUserData] = useState([
    {
      ID: 1,
      FullName: "Ibrahim Ahmed",
      PhoneNumber: "03431938944",
      Address: "Malikpura",
    },
    {
      ID: 2,
      FullName: "Waqar Ahmed",
      PhoneNumber: "03225067420",
      Address: "USA",
    },
    {
      ID: 3,
      FullName: "Ahmed Khan",
      PhoneNumber: "03355080815",
      Address: "Mansehra",
    },
  ]);

  const [editingUser, setEditingUser] = useState(null);

  // Track the state for adding new user
  const [newUser, setNewUser] = useState({
    FullName: "",
    PhoneNumber: "",
    Address: "",
  });
  const [showAddForm, setShowAddForm] = useState(false); // Track add form visibility

  // Handle deleting a user
  function handleDelete(id) {
    const updatedData = UserData.filter((user) => user.ID !== id);
    setUserData(updatedData);
  }

  // Handle edit button click (populate form with current user data)
  function handleEdit(user) {
    setEditingUser(user);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    const updatedData = UserData.map((user) =>
      user.ID === editingUser.ID ? editingUser : user
    );
    setUserData(updatedData);
    setEditingUser(null); // Clear the edit form after saving
  }

  // Handle input changes for both new user and editing user
  function handleInputChange(e) {
    const { name, value } = e.target;
    if (editingUser) {
      setEditingUser({ ...editingUser, [name]: value });
    } else {
      setNewUser({ ...newUser, [name]: value });
    }
  }

  // Handle new user form submission
  function handleNewUserSubmit(e) {
    e.preventDefault();
    const newID = UserData.length ? UserData[UserData.length - 1].ID + 1 : 1;
    const userToAdd = { ID: newID, ...newUser };
    setUserData([...UserData, userToAdd]);

    // Clear the form after submission
    setNewUser({ FullName: "", PhoneNumber: "", Address: "" });
    setShowAddForm(false); // Hide the add form after submission
  }

  return (
    <>     
      <h2>User Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {UserData.map((item) => (
            <tr key={item.ID}>
              <td>{item.ID}</td>
              <td>{item.FullName}</td>
              <td>{item.PhoneNumber}</td>
              <td>{item.Address}</td>
              <td>
                <button onClick={() => handleDelete(item.ID)}>Delete</button>
              </td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New User Button */}
      <button onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? "Cancel" : "Add New User"}
      </button>

      {/* Conditionally show the Add User form */}
      {showAddForm && (
        <div>
          <h2>Add New User</h2>
          <form onSubmit={handleNewUserSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="FullName"
              value={newUser.FullName}
              onChange={handleInputChange}
              required
            />
            <br />
            <label>Phone Number</label>
            <input
              type="text"
              name="PhoneNumber"
              value={newUser.PhoneNumber}
              onChange={handleInputChange}
              required
            />
            <br />
            <label>Address</label>
            <input
              type="text"
              name="Address"
              value={newUser.Address}
              onChange={handleInputChange}
              required
            />
            <br />
            <button type="submit">Add User</button>
          </form>
        </div>
      )}

      {/* Edit User Form */}
      {editingUser && (
        <div>
          <h2>Edit User</h2>
          <form onSubmit={handleEditSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="FullName"
              value={editingUser.FullName}
              onChange={handleInputChange}
              required
            />
            <br />
            <label>Phone Number</label>
            <input
              type="text"
              name="PhoneNumber"
              value={editingUser.PhoneNumber}
              onChange={handleInputChange}
              required
            />
            <br />
            <label>Address</label>
            <input
              type="text"
              name="Address"
              value={editingUser.Address}
              onChange={handleInputChange}
              required
            />
            <br />
            <button type="submit">Save Changes</button>
          </form>
        </div>
      )}
    </>
  );
}
