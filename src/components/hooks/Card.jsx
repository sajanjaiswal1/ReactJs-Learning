import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import ShareIcon from '@mui/icons-material/Share';


const MyCard = ({image,title,description}) => {
  return (
    // <div className='p-5 m-5 border border-amber-400 rounded-md'>
    //     <div>Name:</div>
    //     <div>Address:</div>

    // </div>
    <Grid
            item
            xs={8}
            sm={10}
            md={6}
            lg={4}
            xl={3}
            mx={"auto"}
            p={3}
          >
            <Card sx={{ maxWidth: "345" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ justifyContent: 'space-between' }}>
                  <Button size="small" color="secondary" variant="contained">View More</Button>
                <Button size="small" color="secondary" variant="contained" endIcon={<ShareIcon/>}>
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
  )
}

export default MyCard