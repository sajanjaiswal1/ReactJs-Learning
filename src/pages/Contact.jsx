import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <>
      <Typography
        variant="h5"
        textAlign="center"
        my={2}
        sx={{ textDecoration: "underline" }}
        color="secondary"
      >
        Contact
      </Typography>
      <Grid container width="80%" margin="auto" backgroundColor="primary">
        <Grid
          item
          xs={12}
          width={"80%"}
          sm={10}
          md={6}
          backgroundColor="primary.light"
          p={4}
          borderRadius={"5px"}
          margin={"auto"}
        >
          <Typography variant="h6" fontSize={"32px"}>
            Evolve Store
          </Typography>
          <Typography variant="h5">
            Mahalaxmisthan, Lagankhel, Lalitpur
          </Typography>
          <Typography variant="body1">Phone No.: 01-9847589</Typography>
          <Typography variant="body1">E-mail: info@evolvestore.com</Typography>
          <Typography variant="body2">Website: www.evolvestore.com</Typography>
        </Grid>
        <Grid
          item
          sx={"12"}
          sm={"10"}
          md={"6"}
          m="auto"
          width={"50%"}
          padding={5}
        //   mb={"-95px"}
        >
          <Box p={5} border={2} borderRadius={3}>
            <Typography variant="h5" sx={{ marginBottom: "2px" }}>
              Contact Form
            </Typography>
            <TextField
              fullWidth
              label="E-mail"
              placeholder="Enter your e-mail here"
              required
              variant="outlined"
              color="warning"
              sx={{ marginBottom: "10px" }}
              size="small"
            />
            <TextField
              fullWidth
              label="Subject"
              placeholder="Enter your subject here"
              required
              variant="outlined"
              color="warning"
              sx={{ marginBottom: "10px" }}
              size="small"
            />
            <TextField
              fullWidth
              label="Body"
              placeholder="Write something"
              required
              variant="outlined"
              color="warning"
              multiline
              rows={3}
              sx={{ marginBottom: "" }}
            />
            <Button variant="contained" fullWidth size="small">
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6630023755!2d85.3208726!3d27.665896300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19000a4f32cf%3A0x53f71813950137ff!2sEvolve%20IT%20Hub%20Nepal!5e0!3m2!1sen!2snp!4v1710645692615!5m2!1sen!2snp"
          width="100%"
          height="300"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </>
  );
};

export default Contact;
