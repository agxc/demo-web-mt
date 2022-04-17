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
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import userProfile from "assets/images/gregg-portrait.jpg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Professional and reliable"
                    description="Lifetime member of Psy Chi, the national honors society in Psychology. He is certified as a Regression Therapist by the Weiss Institute having trained directly under the best-selling author"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="Education background"
                    description="Bachelors in Psychology from St. EdwardsUniversityin 1994 and his Masters of Education in Counseling and Guidance with honors from TexasStateUniversityin 1996."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="Extensive experiences"
                    description="the fifteenth person in the world to be certified as an IADC therapist by Dr. Allan Botkin through The Center for Grief and Traumatic Loss.  He has completed Level I and Level II trainings in EMDR (Eye Movement Desensitization and Reprocessing) through the EMDR International Association and Level I and Level II certifications in Brainspotting, training directly under Dr. David Grand, the developer of the Brainspotting technique."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Unique delivery"
                    description="Gregg has broken attendance records in venues across the United States, presenting on a variety of topics including: personal growth, regression, grief resolution, the healing power of music and sound, enhancing intuition, trauma and recovery and radical new techniques to speed emotional healing and spiritual growth. "
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={userProfile}
              title="About me"
              description="Gregg Unterberger, M.Ed. is a licensed professional counselor and international workshop presenter with offices in Houston and College Station, Texas. In his private practice, he works with individuals and couples who suffer with depression, anxiety, phobias, grief, relationship issues and plain old garden variety stress."
              action={{
                type: "internal",
                route: "/about",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
