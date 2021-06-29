import { Grid, Typography, Container } from "@material-ui/core";
import Image from "next/image";
import Contact from "../components/contact";
import profilePic from "../public/me.png";

export default function Home() {
  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item>
        <Image
          src={profilePic}
          alt="Picture of the author"
          height={500}
          width={500}
        />
      </Grid>
      <Grid item>
        <Grid container direction="column" justify="space-between" spacing={2}>
          <Grid item>
            <Typography variant="h3">Onkar Deshpande</Typography>
            <Typography variant="h6">
              Researcher, Developer, Tinkerer
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              I like to read, play Age of Empires and most importantly try new
              things!
              <br /> Hope you like this website
            </Typography>
          </Grid>
          <Grid item>
            <Contact />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
