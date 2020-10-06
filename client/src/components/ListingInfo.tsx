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
} from "@material-ui/core";
import { CardImage } from "./Card";
import Dot from "../components/Dot";

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
});

const ListingInfo = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item>
              <CardImage imgSrc="https://cdn-images-1.medium.com/max/2000/1*YRINRZFr0E1FRJ4JpizEMw.jpeg" />
            </Grid>
            <Grid item>
              <Typography component="h1" variant="h3">
                BasketBall
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
      {/* <footer className={classes.footer}></footer */}
    </Paper>
  );
};
export default ListingInfo;
