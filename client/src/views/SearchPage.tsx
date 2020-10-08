import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import Card from "../components/Card";
import Filter from "../components/Filter";
import ListingInfo from "../components/ListingInfo";

const useStyle = makeStyles({
  container: {
    width: "80%",
    margin: "0 auto",
  },
});

const SearchPage = () => {
  const classes = useStyle();
  return (
    <div>
      <Filter />
      <div className={classes.container}>
        <Grid container spacing={1}>
          <Grid item xs>
            <Card
              description="Using this approach in production is discouraged though - the client has to download the entire library, regardless of which components are actually used, affecting performance and bandwidth utilization."
              imgSrc="https://cdn-images-1.medium.com/max/2000/1*YRINRZFr0E1FRJ4JpizEMw.jpeg"
              date={new Date()}
              location="Sfantu Gheorghe"
              title="Basketball"
            />
            <Card
              description="Using this approach in production is discouraged though - the client has to download the entire library, regardless of which components are actually used, affecting performance and bandwidth utilization."
              imgSrc="https://cdn-images-1.medium.com/max/2000/1*YRINRZFr0E1FRJ4JpizEMw.jpeg"
              date={new Date()}
              location="Sfantu Gheorghe"
              title="Basketball"
            />
            <Card
              description="Using this approach in production is discouraged though - the client has to download the entire library, regardless of which components are actually used, affecting performance and bandwidth utilization."
              imgSrc="https://cdn-images-1.medium.com/max/2000/1*YRINRZFr0E1FRJ4JpizEMw.jpeg"
              date={new Date()}
              location="Sfantu Gheorghe"
              title="Basketball"
            />
            <Card
              description="Using this approach in production is discouraged though - the client has to download the entire library, regardless of which components are actually used, affecting performance and bandwidth utilization."
              imgSrc="https://cdn-images-1.medium.com/max/2000/1*YRINRZFr0E1FRJ4JpizEMw.jpeg"
              date={new Date()}
              location="Sfantu Gheorghe"
              title="Basketball"
            />
          </Grid>
          <Grid item>
            <ListingInfo close={() => console.log("I'm Closing")} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default SearchPage;
