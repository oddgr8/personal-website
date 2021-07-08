import { Grid, Typography, Icon } from "@material-ui/core";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineOppositeContent,
} from "@material-ui/lab";
import { DatasetJsonLd } from "next-seo";
import Image from "next/image";
import rubrikIcon from "../public/rubrik_icon.png";

export function TimelineTitle({
  date,
  title,
  subtitle,
  icon,
}: {
  date: string;
  title: string;
  subtitle: string;
  icon: any;
}) {
  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="subtitle1">{date}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <Icon fontSize="large">{icon}</Icon>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h4">{title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{subtitle}</Typography>
          </Grid>
        </Grid>
      </TimelineContent>
    </TimelineItem>
  );
}

export function TimelineDetails({
  title,
  content,
}: {
  title: string;
  content: any;
}) {
  return (
    <TimelineItem>
      <TimelineOppositeContent />
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h6">{title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{content}</Typography>
          </Grid>
        </Grid>
      </TimelineContent>
    </TimelineItem>
  );
}
