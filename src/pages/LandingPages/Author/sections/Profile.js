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
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/gregg-portrait.jpg";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Gregg Unterberger" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Gregg Unterberger</MKTypography>
                <MKButton variant="outlined" color="info" size="small">
                  Placeholder
                </MKButton>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                <div>
                  <span>Hello!</span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <span>Thank you for coming to visit my website. What brings you here?&nbsp;</span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <span>
                    Maybe you`ve come here because you feel sad or low, like somehow your life isn’t
                    working out for you. Perhaps you been through some painful life changes here
                    lately - a divorce, you’ve lost your job, or someone you love has died. Some
                    come here because they feel haunted by the echoes of their past: unkind parents,
                    fights with brothers and sisters, bullied at school, painful breakups. Sadly,
                    many have experience horrible, unimaginable traumas.&nbsp;
                  </span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <span>
                    Maybe, just maybe, it’s even worse and you’ve wondered whether you even want to
                    be alive.&nbsp;
                  </span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <span>Let’s face it, life can be really, really cruel sometimes.&nbsp;</span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <span>
                    <em>It can help to have the right person on your team.&nbsp;</em>
                  </span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <span>
                    My name is Gregg Unterberger, and for the last twenty years or so, I have worked
                    as a license professional counselor, helping people just like you.&nbsp;
                  </span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <span>You really don’t have to do this alone, you know?&nbsp;</span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <span>
                    As a counselor, I practice a form of therapy called&nbsp;
                    <em>systematic eclecticism</em>. I know, a real mouthful, right? All that means
                    is I am trained in a broad number of orientations. I have lots and lots of tools
                    in my toolkit, not just one or two, so I can tailor my approach&nbsp;
                    <em>especially for you! &nbsp;</em>
                  </span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <span>
                    I have band-aids for broken hearts, bad moods and anxious minds that can begin
                    to help right away! And I practice powerful therapies that may resolve trauma
                    and horrible childhood memories more quickly than traditional blah-blah-blah
                    talk therapy…a few of the technologies I have pioneered myself.&nbsp; I actually
                    lecture internationally on many of my techniques.&nbsp;
                  </span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <span>
                    My clients tell me they like me because I do my work with my head AND my heart.
                    I really try to listen and understand. And I think humor has a role to play in
                    healing, too.&nbsp;
                  </span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <span>
                    I have had offices in both College Station and Georgetown (North Austin) Texas,
                    for years. But since we are in the middle of a pandemic, I see my clients
                    exclusively online on a secure, encrypted confidential platform for now.&nbsp;
                  </span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <span>
                    For my new clients I offer a “risk-free” initial hour-long appointment: If you
                    don’t feel like I am a good fit for your needs (or don’t like my beard, lol) you
                    won’t pay a dime and we will shake hands and part friends. You literally have
                    nothing to lose but a few minutes of your time.&nbsp;
                  </span>
                </div>
                <div>&nbsp;</div>
                <br />
                <MKTypography
                  component="a"
                  href="#"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  More about me <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
