import { useState } from "react";
import { TextField, Button, Container, Paper, Typography } from '@mui/material';
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

    setNewUser({ ID: "", FullName: "", PhoneNumber: "", Address: "" });
    navigate("/UserTable");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, mt: 4, borderRadius: 3 }}>
        <Typography component="h1" variant="h5" textAlign="center">
          Add User
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="ID"
            name="ID"
            value={newUser.ID}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Full Name"
            name="FullName"
            value={newUser.FullName}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Phone Number"
            name="PhoneNumber"
            value={newUser.PhoneNumber}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Address"
            name="Address"
            value={newUser.Address}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add User
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
