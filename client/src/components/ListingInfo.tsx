import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  useMediaQuery,
  Fab,
} from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import { CardImage } from "./Card";
import Dot from "../components/Dot";

interface Props {
  close: () => void;
}

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "50vw",
    marginTop: 10,
    padding: "1em",
    height: "70vh",
    overflowY: "auto",
  },
  bulletPoint: {
    margin: "0 10px",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "200px",
    width: "100%",
    display: "block",
    background: "red",
  },
  closeButton: {
    position: "absolute",
    top: 30,
    right: 30,
  },
  mobile: {
    width: "80%",
    height: "70%",
    overflowY: "auto",
    position: "fixed",
    marginTop: 10,
    padding: "1em",
    background: "grey",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});

const ListingInfo: React.FC<Props> = ({ close }) => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width: 1024px)");
  return (
    <Paper className={matches ? classes.root : classes.mobile}>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item>
              <CardImage imgSrc="https://cdn-images-1.medium.com/max/2000/1*YRINRZFr0E1FRJ4JpizEMw.jpeg" />
            </Grid>
            <Grid item>
              <Typography component="h1" variant="h3">
                This is a Test
              </Typography>
              <Typography>
                {new Date().toLocaleDateString()}-
                {new Date().toLocaleTimeString()}
                <Dot />
                <Typography display="inline">Sfantu Gheorghe</Typography>
              </Typography>
              <Button variant="contained">Contact</Button>
              <Button variant="contained">Save</Button>
            </Grid>
          </Grid>
          {!matches && (
            <Fab
              size="small"
              aria-label="close"
              color="secondary"
              onClick={close}
              className={classes.closeButton}
            >
              <Close />
            </Fab>
          )}
        </CardContent>
      </Card>
      <Box>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex tempora
          vero vitae itaque harum, perspiciatis, enim dignissimos officiis est
          impedit facere similique! Quos et quas hic inventore assumenda vitae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex tempora
          vero vitae itaque harum, perspiciatis, enim dignissimos officiis est
          impedit facere similique! Quos et quas hic inventore assumenda vitae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex tempora
          vero vitae itaque harum, perspiciatis, enim dignissimos officiis est
          impedit facere similique! Quos et quas hic inventore assumenda vitae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex tempora
          vero vitae itaque harum, perspiciatis, enim dignissimos officiis est
          impedit facere similique! Quos et quas hic inventore assumenda vitae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex tempora
          vero vitae itaque harum, perspiciatis, enim dignissimos officiis est
          impedit facere similique! Quos et quas hic inventore assumenda vitae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex tempora
          vero vitae itaque harum, perspiciatis, enim dignissimos officiis est
          impedit facere similique! Quos et quas hic inventore assumenda vitae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex tempora
          vero vitae itaque harum, perspiciatis, enim dignissimos officiis est
          impedit facere similique! Quos et quas hic inventore assumenda vitae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex tempora
          vero vitae itaque harum, perspiciatis, enim dignissimos officiis est
          impedit facere similique! Quos et quas hic inventore assumenda vitae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex tempora
          vero vitae itaque harum, perspiciatis, enim dignissimos officiis est
          impedit facere similique! Quos et quas hic inventore assumenda vitae.
          impedit facere similique! Quos et quas hic inventore assumenda vitae.
          impedit facere similique! Quos et quas hic inventore assumenda vitae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex tempora
          vero vitae itaque harum, perspiciatis, enim dignissimos officiis est
          impedit facere similique! Quos et quas hic inventore assumenda vitae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex tempora
          vero vitae itaque harum, perspiciatis, enim dignissimos officiis est
          impedit facere similique! Quos et quas hic inventore assumenda vitae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex tempora
          vero vitae itaque harum, perspiciatis, enim dignissimos officiis est
          impedit facere similique! Quos et quas hic inventore assumenda vitae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex tempora
          vero vitae itaque harum, perspiciatis, enim dignissimos officiis est
          impedit facere similique! Quos et quas hic inventore assumenda vitae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex tempora
          vero vitae itaque harum, perspiciatis, enim dignissimos officiis est
          impedit facere similique! Quos et quas hic inventore assumenda vitae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex tempora
          vero vitae itaque harum, perspiciatis, enim dignissimos officiis est
          impedit facere similique! Quos et quas hic inventore assumenda vitae.
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography>Experience: Novice</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Type: Outdoors</Typography>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
export default ListingInfo;
