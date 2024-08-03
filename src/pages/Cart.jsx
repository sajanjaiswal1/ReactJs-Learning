import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Cart = () => {
  function createData(particulars, price, quantity, image) {
    return { particulars, price, quantity, image };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6, ""),
    createData("Ice cream sandwich", 237, 9, ""),
    createData("Eclair", 262, 24, ""),
    createData("Cupcake", 305, 67, ""),
    createData("Gingerbread", 356, 5, ""),
  ];

  return (
    <>
      <Box bgcolor={"primary"} p={5}>
        <Typography
          textAlign={"center"}
          color={"secondary.main"}
          fontWeight={"bold"}
          variant="h3"
          sx={{
            textDecoration: "underline",
          }}
        >
          Cart Item
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">S.No.</TableCell>
              <TableCell>Particulars</TableCell>
              <TableCell align="right">Unit Price (Rs.)</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total(Rs.)</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={row.particulars}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{i + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {row.particulars}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.price * row.quantity}</TableCell>
                <TableCell align="right">
                  <Button align="right" variant="contained" endIcon={<DeleteIcon/>}>Remove</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Cart;
