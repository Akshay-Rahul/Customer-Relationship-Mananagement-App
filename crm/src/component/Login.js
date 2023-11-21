import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Paper, Grid, Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/AccountCircle';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider  } from './firebase'; 
import image1 from './final.jpg';
import { signInWithPopup } from 'firebase/auth';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert('Login successful');
      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error.message);
      alert('Invalid email or password');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log('Google Sign-In successful:', user);
      navigate('/home');
      // Handle the login logic or redirect the user
    } catch (error) {
      console.error('Error with Google Sign-In:', error);
      // Handle the error
    }
  };

  return (
    <div style={{ backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/413/925/249/minimalism-abstract-pattern-digital-art-wallpaper-preview.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <Container component="main" maxWidth="xs" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
        <img src={image1} alt="Dusk CRM Logo" style={{ width: '260px', height: '60px', marginBottom: '20px', borderRadius: '5%' }} />
        <LoginIcon style={{ fontSize: 50, color: 'black', marginBottom: '20px' }} />
        <Typography component="h1" variant="h5" >
          Login
        </Typography>
        <form style={{ width: '100%', marginTop: 20 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            style={{ marginTop: 20 }}
          >
            Login
          </Button>

          <Button
            type="button"
            fullWidth
            variant="contained"
            
            onClick={handleGoogleSignIn}
            style={{ marginTop: 10 , backgroundColor:"#287BC7"}}
          >
            Sign in with Google
          </Button>

          <Grid container style={{ marginTop: 20 }}>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Don't have an account? <RouterLink to="/register">Register</RouterLink>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
    </div>
  );
};

export default Login;