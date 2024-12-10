import {  Grid } from "@mui/material";
import React from "react";
import kuzi from '../assets/photos/kuzi.jpg';
export default function Test() {
  return (
    <Grid container height="100vh">
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <div>
        <div style={{textAlign:'center'}}>LEKELEKEKUM KUZI</div>
        <img src={kuzi} alt="cardPhoto" style={{ height: "100%", width: "100%", maxHeight: 500, maxWidth: 300 }} />
        </div>
      </Grid>
    </Grid>
  );
}
