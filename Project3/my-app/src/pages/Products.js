import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const Products = () => {
  return (
    <Box sx={{ pt: 2 }}> {/* Add padding top here */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/images/1.jpg"
              alt="Product 1"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Product 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of Product 1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/images/2.jpg"
              alt="Product 2"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Product 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of Product 2
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/images/3.jpg"
              alt="Product 3"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Product 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of Product 3
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/images/4.jpg"
              alt="Product 4"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Product 4
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of Product 4
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/images/5.jpg"
              alt="Product 5"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Product 5
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of Product 5
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/images/6.jpg"
              alt="Product 6"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Product 6
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of Product 6
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;
