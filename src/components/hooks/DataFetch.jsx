import React, { useEffect, useState } from "react";
import MyCard from "./Card";
import { Grid } from "@mui/material";
import axios from "axios";

const DataFetch = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((Response) => Response.json())
      .then((result) => setProducts(result))
      .catch((error) => console.log(error));

    // axios
    //   .get(`https://dummyjson.com/products`)
    //   .then((response) => response.data)
    //   .then((result) => setProducts(result.products))
    //   .catch((error) => console.log(error));
  }, []);

  return (
    <Grid container>
      {products.length > 0 &&
        products.map((product) => {
          return <MyCard
            title={product.title}
            description={product.description}
            image={product.image}
          />;
          //return <MyCard key={product.id} title={product.title} description={product.description} images={product.images[0]}/>
        })}
    </Grid>
  );
};

export default DataFetch;
