import { Grid, Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineDot,
  TimelineSeparator,
  TimelineItem,
  TimelineOppositeContent,
  TimelineContent,
} from "@material-ui/lab";
import Image from "next/image";
import Contact from "../components/contact";
import profilePic from "../public/me.png";
import rubrikIcon from "../public/rubrik_icon.png";
import iitbLogo from "../public/iitb_logo.png";
import { useStyles } from "../components/layout";
import { TimelineTitle, TimelineDetails } from "../components/timeline";

function AboutMe() {
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

function History() {
  return (
    <Grid container direction="column" justify="space-between">
      <Grid item>
        <Typography variant="h4" align="center">
          A little bit about me
        </Typography>
      </Grid>
      <Grid item>
        <Timeline>
          <TimelineTitle
            date="June 2021-Present"
            title="Rubrik India"
            subtitle="Software developer"
            icon={<Image src={rubrikIcon} alt="" />}
          />
          <TimelineDetails
            title="AWS Cloudnative Protection"
            content="Protect and maintain various cloudnative
        workloads with minimal overhead"
          />
          <TimelineDetails
            title="Automatic Tag Based Protection"
            content="End to End Development of a crucial feature"
          />
          <TimelineTitle
            date="2017-2021"
            title="IIT Bombay"
            subtitle="Computer Science and Engineering"
            icon={<Image src={iitbLogo} alt="" />}
          />
          <TimelineItem>
            <TimelineOppositeContent />
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent />
          </TimelineItem>
        </Timeline>
      </Grid>
    </Grid>
  );
}


function Projects() {
  return (
    <Grid container direction="column" justify="space-between">
      Projects
    </Grid>
  );
}

export default function Home() {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item className={classes.section}>
        <AboutMe />
      </Grid>
      <Grid item className={classes.section}>
        <History />
      </Grid>
      <Grid item className={classes.section}>
        <Projects />
      </Grid>
    </Grid>
  );
}
