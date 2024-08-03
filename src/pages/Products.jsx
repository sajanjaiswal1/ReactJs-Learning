import {
  BookmarkBorderOutlined,
  BookmarkOutlined,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  Radio,
  RadioGroup,
  Rating,
  Typography,
  CardActions,
  Box,
} from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import React from "react";
import MyCard from "../components/hooks/Card";

const Products = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={3} p={4}>
          <Typography
            variant="h2"
            color={"secondary"}
            sx={{ textDecoration: "underline", fontWeight: "bold" }}
          >
            Deals
          </Typography>
          <Link href={"#"} underline="hover" fontSize={20} display={"block"}>
            Daily Deals
          </Link>
          <Link href={"#"} underline="hover" fontSize={20} display={"block"}>
            Most Popular
          </Link>
          <Link href={"#"} underline="hover" fontSize={20} display={"block"}>
            Flash Sale
          </Link>

          <Typography
            variant="h4"
            color={"secondary"}
            sx={{ textDecoration: "underline", fontWeight: "bold" }}
            marginTop={3}
          >
            Category
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="All"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              }
              label="Mobile"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<BookmarkBorderOutlined />}
                  checkedIcon={<BookmarkOutlined />}
                />
              }
              label="Mobiles"
            />
            <FormControlLabel control={<Checkbox />} label="Laptops" />
            <FormControlLabel control={<Checkbox />} label="Acessories" />
            <FormControlLabel control={<Checkbox />} label="Home Appliances" />
            <FormControlLabel control={<Checkbox />} label="Hardware" />
          </FormGroup>

          <Typography
            variant="h4"
            color={"secondary"}
            sx={{ textDecoration: "underline", fontWeight: "bold" }}
            marginTop={3}
          >
            Prices
          </Typography>
          <FormControl>
            {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="prices"
              defaultValue="02"
            >
              <FormControlLabel
                value="01"
                control={<Radio />}
                label="Below Rs. 1000"
              />
              <FormControlLabel
                value="02"
                control={<Radio />}
                label="Rs.1000-Rs.10000"
              />
              <FormControlLabel
                value="03"
                control={<Radio />}
                label="Rs.10000-Rs.50000"
              />
              <FormControlLabel
                value="04"
                control={<Radio />}
                label="Rs.50000-Rs.100000"
              />
              <FormControlLabel
                value="05"
                control={<Radio />}
                label="Above Rs.100000"
              />
            </RadioGroup>
          </FormControl>

          <Typography
            variant="h4"
            color={"secondary"}
            sx={{ textDecoration: "underline", fontWeight: "bold" }}
            marginTop={3}
          >
            Avg. Customer Review
          </Typography>
          <Link sx={{ display: "flex", flexDirection: "column" }} href={"#"}>
            <Rating value={1} readOnly />
            <Rating value={2} disabled />
            <Rating defaultValue={4.5} precision={0.5} />
            <Rating value={4} size="large" />
            <Rating value={5} />
          </Link>
        </Grid>



        <Grid item xs={12} sm={6} md={8} lg={9} container>
          <MyCard image="./img (8).jpg" title='abc' description={'this is description...'}/>
          <MyCard image="./img (8).jpg" title='abc' description={'this is description...'}/>
          <MyCard image="./img (8).jpg" title='abc' description={'this is description...'}/>
          <MyCard image="./img (8).jpg" title='abc' description={'this is description...'}/>
          <MyCard image="./img (8).jpg" title='abc' description={'this is description...'}/>
          <MyCard image="./img (8).jpg" title='abc' description={'this is description...'}/>
          <MyCard image="./img (8).jpg" title='abc' description={'this is description...'}/>
          
        </Grid>
      </Grid>
    </>
  );
};

export default Products;









