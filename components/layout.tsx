import Link from "./link";
import Contact from "./contact";
import { makeStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  Container,
  Grid,
  Divider,
  Typography,
} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  section: {
    display: `flex`,
    minHeight: `75vh`,
    flexDirection: `column`,
  },
}));

export default function Layout({ children }: { children: React.ReactNode }) {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Toolbar>
        <Grid container alignItems={"flex-end"} justify={"space-between"}>
          <Link internal href="/" variant="h4">
            OD.
          </Link>
          <Link internal href="/musings" variant="h6">
            Musings
          </Link>
        </Grid>
      </Toolbar>
      <Divider variant="middle" />
      <Toolbar />
      <Container component={"main"} className={classes.section}>
        <>{children}</>
      </Container>
      <Divider variant="middle" />
      <Toolbar>
        <Grid container justify="center" alignItems="center" direction="column">
          {/* <Grid item>
            <Typography variant="h6">
              Liked what you saw? Get in touch
            </Typography>
          </Grid> */}
          <Grid item>
            <Contact />
          </Grid>
        </Grid>
      </Toolbar>
    </Container>
  );
}
