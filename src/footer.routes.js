// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Mark T",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "Team",
      items: [
        { name: "about us", href: "https://www.google.com/" },
        { name: "freebies", href: "https://www.google.com/" },
        { name: "premium tools", href: "https://www.google.com/" },
        { name: "blog", href: "https://www.google.com/" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "curator", href: "https://www.google.com/" },
        { name: "data analytics", href: "https://iradesign.io/" },
        { name: "bits & snippets", href: "https://www.google.com/" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://www.google.com/" },
        { name: "knowledge center", href: "https://www.google.com/" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.google.com/" },
        { name: "privacy policy", href: "https://www.google.com/" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Website by{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        MT
      </MKTypography>
      .
    </MKTypography>
  ),
};
