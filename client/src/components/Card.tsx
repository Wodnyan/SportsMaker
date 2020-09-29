import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  CardActionArea,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Dot from "./Dot";

interface Props {
  title: string;
  imgSrc: string;
  description: string;
  date: Date;
  location: string;
}

interface CardImgProps {
  imgSrc: string;
}

const useStyles = makeStyles({
  circle: {
    marginRight: "10px",
    width: "50px",
    height: "50px",
    background: "grey",
    borderRadius: "50%",
  },
  card: {
    marginTop: 10,
  },
});

export const CardImage: React.FC<CardImgProps> = ({ imgSrc }) => {
  const styles = useStyles();
  return (
    <div className={styles.circle}>
      <img className={styles.circle} src={imgSrc} alt="Sport" />
    </div>
  );
};

const Entry: React.FC<Props> = ({
  title,
  description,
  imgSrc,
  date,
  location,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <CardActionArea>
          <Grid container>
            <Grid item>
              <CardImage imgSrc={imgSrc} />
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
