import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';

export function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const correctUsername = 'ibrahim';
    const correctPassword = 'chalog';

    if (userName === correctUsername && password === correctPassword) {
      navigate('/UserTable');
    } else {
      console.log('Invalid Username or Password');
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, mt: 4, borderRadius: 3 }}>
        <Typography component="h1" variant="h5" textAlign="center">
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
