import { Facebook, GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import { IconButton, Button, Grid } from "@material-ui/core";

export default function Contact() {
  const commonProps = {
    target: "_blank",
    size: "small" as "small",
    color: "secondary" as "secondary",
  };
  return (
    <Grid container justify="center" alignItems="center">
      <Button href="/resume.pdf" variant="contained" {...commonProps}>
        Resume
      </Button>
      <IconButton href="https://www.facebook.com/oddgr8" {...commonProps}>
        <Facebook fontSize="large" />
      </IconButton>
      <IconButton
        href="https://www.instagram.com/onkar_original/"
        {...commonProps}
      >
        <Instagram fontSize="large" />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/onkardeshpande07"
        {...commonProps}
      >
        <LinkedIn fontSize="large" />
      </IconButton>
      <IconButton href="https://github.com/oddgr8" {...commonProps}>
        <GitHub fontSize="large" />
      </IconButton>
    </Grid>
  );
}
