import Link from "./link";
import Contact from "./contact";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Container, Grid } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  toolbarTop: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarBottom: {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  main: {
    display: `flex`,
    minHeight: `75vh`,
    flexDirection: `column`,
  },
}));

export default function Layout({ children }: { children: React.ReactNode }) {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Toolbar className={classes.toolbarTop}>
        <Grid container alignItems={"flex-end"} justify={"space-between"}>
          <Link internal href="/" variant="h4">
            OD.
          </Link>
          <Link internal href="/musings" variant="h6">
            Musings
          </Link>
        </Grid>
      </Toolbar>
      <Toolbar />
      <Container component={"main"} className={classes.main}>
        <>{children}</>
      </Container>
      <Toolbar className={classes.toolbarBottom}>
        <Contact />
      </Toolbar>
    </Container>
  );
}
