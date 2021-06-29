import { Quote } from "../lib/musings";
import { Typography, Container, Grid } from "@material-ui/core";
import FormatQuoteOutlinedIcon from "@material-ui/icons/FormatQuoteOutlined";

export default function QuoteComponent({
  data: { content, writer, date },
}: {
  data: Quote;
}) {
  return (
    <Container>
      <Grid container direction="column" justify="center" alignItems="center">
        <FormatQuoteOutlinedIcon fontSize="large" />
        <Typography variant="h4" align="center">
          {content}
        </Typography>
        <Typography variant="subtitle1">{writer}</Typography>
      </Grid>
    </Container>
  );
}
