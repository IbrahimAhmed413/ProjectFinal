import { useState, useEffect } from "react";
import { TextField, Button, Container, Paper, Typography } from "@mui/material";

export function EditUser({ user, onSave }) {
  const [editUser, setEditUser] = useState(user);

  useEffect(() => {
    setEditUser(user);
  }, [user]);

  function handleChange(e) {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(editUser);
  }

  if (!editUser) return null;

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, mt: 4, borderRadius: 3 }}>
        <Typography component="h1" variant="h5" textAlign="center">
          Edit User
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Full Name"
            name="FullName"
            value={editUser.FullName}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Phone Number"
            name="PhoneNumber"
            value={editUser.PhoneNumber}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Address"
            name="Address"
            value={editUser.Address}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save Changes
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
