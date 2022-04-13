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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/LandingPages/AboutUs/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

import ContactImage from "assets/images/examples/blog2.jpg";
// Images
const bgImage =
  "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
// const ContactImage =
//   "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

function AboutUs() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "default",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              This is a React demo website for MT
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              It is super quick and easy to create the site.
            </MKTypography>
            <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              Demo button
            </MKButton>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              [Placeholder]
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#">
                <i className="fab fa-google-plus" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Featuring />
        <Information />
        <Team />
        <Newsletter />
      </Card>

      <Grid container item>
        <MKBox
          width="100%"
          bgColor="white"
          borderRadius="xl"
          shadow="xl"
          mb={6}
          sx={{ overflow: "hidden" }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              lg={5}
              position="relative"
              px={0}
              sx={{
                backgroundImage: ({
                  palette: { gradients },
                  functions: { rgba, linearGradient },
                }) =>
                  `${linearGradient(
                    rgba(gradients.dark.main, 0.8),
                    rgba(gradients.dark.state, 0.8)
                  )}, url(${ContactImage})`,
                backgroundSize: "cover",
              }}
            >
              <MKBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="100%"
              >
                <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                  <MKTypography variant="h3" color="white" mb={1}>
                    Contact Information
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                    Fill up the form and our Team will get back to you within 24 hours.
                  </MKTypography>
                  <MKBox display="flex" p={1}>
                    <MKTypography variant="button" color="white">
                      <i className="fas fa-phone" />
                    </MKTypography>
                    <MKTypography
                      component="span"
                      variant="button"
                      color="white"
                      opacity={0.8}
                      ml={2}
                      fontWeight="regular"
                    >
                      (+40) 772 100 200
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" color="white" p={1}>
                    <MKTypography variant="button" color="white">
                      <i className="fas fa-envelope" />
                    </MKTypography>
                    <MKTypography
                      component="span"
                      variant="button"
                      color="white"
                      opacity={0.8}
                      ml={2}
                      fontWeight="regular"
                    >
                      MT@canberra.com
                    </MKTypography>
                  </MKBox>
                  <MKBox display="flex" color="white" p={1}>
                    <MKTypography variant="button" color="white">
                      <i className="fas fa-map-marker-alt" />
                    </MKTypography>
                    <MKTypography
                      component="span"
                      variant="button"
                      color="white"
                      opacity={0.8}
                      ml={2}
                      fontWeight="regular"
                    >
                      17 Marcus Clark, Canberra
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={3}>
                    <MKButton variant="text" color="white" size="large" iconOnly>
                      <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />
                    </MKButton>
                    <MKButton variant="text" color="white" size="large" iconOnly>
                      <i className="fab fa-twitter" style={{ fontSize: "1.25rem" }} />
                    </MKButton>
                    <MKButton variant="text" color="white" size="large" iconOnly>
                      <i className="fab fa-dribbble" style={{ fontSize: "1.25rem" }} />
                    </MKButton>
                    <MKButton variant="text" color="white" size="large" iconOnly>
                      <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                    </MKButton>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Grid>
            <Grid item xs={12} lg={7}>
              <MKBox component="form" p={2} method="post">
                <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                  <MKTypography variant="h2" mb={1}>
                    Say Hi!
                  </MKTypography>
                  <MKTypography variant="body1" color="text" mb={2}>
                    Let&apos;s talk about anything data!
                  </MKTypography>
                </MKBox>
                <MKBox pt={0.5} pb={3} px={3}>
                  <Grid container>
                    <Grid item xs={12} pr={1} mb={6}>
                      <MKInput
                        variant="standard"
                        label="My name is"
                        placeholder="Full Name"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} pr={1} mb={6}>
                      <MKInput
                        variant="standard"
                        label="I'm looking for"
                        placeholder="What you love"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} pr={1} mb={6}>
                      <MKInput
                        variant="standard"
                        label="Your message"
                        placeholder="I want to say that..."
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        multiline
                        rows={6}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    md={6}
                    justifyContent="flex-end"
                    textAlign="right"
                    ml="auto"
                  >
                    <MKButton variant="gradient" color="info">
                      Send Message
                    </MKButton>
                  </Grid>
                </MKBox>
              </MKBox>
            </Grid>
          </Grid>
        </MKBox>
      </Grid>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
