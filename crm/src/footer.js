import React from 'react';
import { Typography, Container, Link } from '@mui/material';

const Footer = () => {
  return (
    <Container component="footer" maxWidth="xl" style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <Typography variant="body2" color="textSecondary" align="center">
        © 2023 Dusk CRM
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        Made with ❤️ by Team Dusk
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        <Link color="inherit" href="#">
          Privacy Policy
        </Link>{' '}
        |{' '}
        <Link color="inherit" href="#">
          Terms of Service
        </Link>
      </Typography>
    </Container>
  );
};

export default Footer;