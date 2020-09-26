import React from "react";
import { Typography, Card, CardContent, Grid, CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

interface Props {
  title: string;
  imgUrl: string;
  description: string;
  date: Date;
  location: string;
}

const useStyles = makeStyles({
  circle: {
    marginRight: "10px",
    width: "50px",
    height: "50px",
    background: "grey",
    borderRadius: "50%",
  },
  bulletPoint: {
    margin: "0 10px",
  },
});

const Entry: React.FC<Props> = ({
  title,
  description,
  imgUrl,
  date,
  location,
}) => {
  const classes = useStyles();
  const Dot = () => <span className={classes.bulletPoint}>•</span>;
  return (
    <Card>
      <CardContent>
        <CardActionArea>
        <Grid container>
          <Grid item>
            <div className={classes.circle}>
              <img className={classes.circle} src={imgUrl} alt="" />
            </div>
          </Grid>
          <Grid item>
            <Typography component="h1" variant="h3">
              {title}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {description}
            </Typography>
            <Typography>
              {date.toLocaleDateString()}-{date.toLocaleTimeString()}
              <Dot />
              <Typography display="inline">{location}</Typography>
            </Typography>
          </Grid>
        </Grid>

        </CardActionArea>
      </CardContent>
    </Card>
  );
};
export default Entry;
