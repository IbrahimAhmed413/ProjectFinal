import { useState } from "react";
import { Link } from "react-router-dom";
import { EditUser } from "./EditUser";
import "./UserTable.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { TableRow } from "@mui/material";
import Button from '@mui/material/Button';

export function UserTable({ userData, setUserData }) {
  const [editingUser, setEditingUser] = useState(null);

  function handleDelete(id) {
    const updatedData = userData.filter((user) => user.ID !== id);
    setUserData(updatedData);
  }

  function handleEdit(user) {
    setEditingUser(user);
  }

  function handleSave(editedUser) {
    const updatedData = userData.map((user) =>
      user.ID === editedUser.ID ? editedUser : user
    );
    setUserData(updatedData);
    setEditingUser(null); // Hide the edit form after saving
  }

  return (
    <>
      <h2>User Table</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableCell>ID</TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableHead>
          <TableBody>
            {userData.map((user) => (
              <TableRow key={user.ID}>
                <TableCell component="th" scope="user">
                  {user.ID}
                </TableCell>
                <TableCell align="right">{user.FullName}</TableCell>
                <TableCell align="right">{user.PhoneNumber}</TableCell>
                <TableCell align="right">{user.Address}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      handleEdit(user);
                    }}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      handleDelete(user.ID);
                    }}
                  >
                    Del
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Show Add New User Button */}
      <Link to="/addUser">
        <button>Add New User</button>
      </Link>

      {/* Conditionally show the Edit User form below the table */}
      {editingUser && <EditUser user={editingUser} onSave={handleSave} />}
    </>
  );
}
