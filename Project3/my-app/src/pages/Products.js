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
                3D printer max
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our fastest 3D printer
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
                Hollow 3D printer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Vibrant colors
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
                Green 3D plastic
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Durable
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
                3D printer x-Series
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Best quality overall
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
                Blue 3D plastic
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Vibrant colors
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
                Dark Green plastic
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Best color 
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;
