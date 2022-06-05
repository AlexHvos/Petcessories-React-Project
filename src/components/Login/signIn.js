import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material';
import axios from "axios";
import App from '../../App';
import { BrowserRouter, useNavigate } from "react-router-dom";
import { createRoot } from "react-dom/client";

const theme = createTheme();

function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    /*console.log({
        email: data.get('email'),
        password: data.get('password'),
      });*/
    axios.get('/users.json').then(res => {
      const container = document.getElementById('root');
      const root = createRoot(container);
      const userData = JSON.stringify(res.data);
      const usersList = JSON.parse(userData);
      function checkSignIn(user) {
        return data.get('email') === user.email && data.get('password') === user.password;
      }
      const user = usersList?.find(checkSignIn);
        if (user != undefined) {
          {/*setUser(user)*/};
          navigate('/');
          root.render(<BrowserRouter>
            <App />
          </BrowserRouter>);
        }
    })}
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }

export default SignIn;