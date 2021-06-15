import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Typography,
  makeStyles,
  Theme,
  Button,
} from "@material-ui/core";

import NatureImage from "../assets/nature.jpg";

const useStyles = makeStyles((theme: Theme) => ({
  cardMedia: {
    padding: theme.spacing(2),
    paddingBottom: 0,
    boxSizing: "border-box",
  },
  contentText: {
    maxHeight: 120,
    overflow: "hidden",
  },
  showMore: {
    maxHeight: "auto",
    overflow: "none",
  },
  readmoreButton: {
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#4c4c4c",
    color: "#4c4c4c",
  },
}));

const ContentCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const classes = useStyles();
  const [isReadmore, setIsReadmore] = useState(false);

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Content Image"
          height="300"
          image={NatureImage}
          className={classes.cardMedia}
        />
        <CardContent>
          <Typography variant="h6" align="center">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={isReadmore ? classes.showMore : classes.contentText}
          >
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Grid container justify="center">
          <Button
            variant="outlined"
            className={classes.readmoreButton}
            onClick={() => setIsReadmore((value) => !value)}
          >
            Read More
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ContentCard;
