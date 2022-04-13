/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

// Images
// import coinbase from "assets/images/logos/gray-logos/logo-coinbase.svg";
// import nasa from "assets/images/logos/gray-logos/logo-nasa.svg";
// import netflix from "assets/images/logos/gray-logos/logo-netflix.svg";
// import pinterest from "assets/images/logos/gray-logos/logo-pinterest.svg";
// import spotify from "assets/images/logos/gray-logos/logo-spotify.svg";
// import vodafone from "assets/images/logos/gray-logos/logo-vodafone.svg";

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        {/* <Grid container spacing={3} sx={{ mb: 12 }}>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={coinbase} alt="coinbase" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasa} alt="nasa" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={netflix} alt="netflix" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={pinterest} alt="pinterest" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={spotify} alt="spotify" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafone} alt="vodafone" width="100%" opacity={0.7} />
          </Grid>
        </Grid> */}
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={1000}
              separator=","
              title="Tables"
              description="Highly optiomised tables holding important business entities"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={125000}
              separator=","
              suffix="+"
              title="Columns"
              description="Columns that convey important business insights"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={30}
              suffix="+"
              title="Staff"
              description="Experienced data modeller who can push the boundaries of data modelling forward"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
