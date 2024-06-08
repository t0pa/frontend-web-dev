import React from 'react';
import { Container, Grid, Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        padding: '20px 0',
        marginTop: 'auto',
      }}
    >
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              Email: <Link href="mailto:info@example.com" color="inherit">info@example.com</Link>
            </Typography>
            <Typography variant="body2">
              Phone: <Link href="tel:+123456789" color="inherit">+1 234 567 89</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">Facebook</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">Twitter</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">Instagram</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">Privacy Policy</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">Terms of Service</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
