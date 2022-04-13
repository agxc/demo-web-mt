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
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";

// Images
const team4 = "https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387__340.png";

function AvatarSize() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <MKAvatar src={team4} alt="xs" size="xs" />
            <MKAvatar src={team4} alt="sm" size="sm" />
            <MKAvatar src={team4} alt="md" size="md" />
            <MKAvatar src={team4} alt="lg" size="lg" />
            <MKAvatar src={team4} alt="xl" size="xl" />
            <MKAvatar src={team4} alt="xxl" size="xxl" />
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AvatarSize;
