import React from "react";
import {
  Box,
  makeStyles,
  useMediaQuery,
  useTheme,
  Typography,
  Theme,
  Grid,
} from "@material-ui/core";
import NatureImage from "../assets/nature.jpg";

const useStyles = makeStyles((theme: Theme) => ({
  banner: {
    position: "relative",
    marginBottom: theme.spacing(4),
  },
  image: {
    width: "100vw",
    height: 650,
  },
  imageSizeAuto: {
    width: "100vw",
    height: "auto",
  },
  overlayContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    opacity: "0",
    transition: "opacity 400ms ease-in-out",
    "&:hover": {
      opacity: 0.6,
      transition: "opacity 400ms ease-in-out",
    },
  },
  bannerTitle: {
    color: "#fff",
  },
}));

const Banner = () => {
  const classes = useStyles();
  const theme = useTheme();

  const isScreenBelowMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={classes.banner}>
      <img
        src={NatureImage}
        alt="Nature"
        className={isScreenBelowMd ? classes.imageSizeAuto : classes.image}
      />
      <Box className={classes.overlayContainer}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          className={classes.overlay}
        >
          <Typography
            variant={isScreenBelowMd ? "h5" : "h2"}
            className={classes.bannerTitle}
          >
            Hello Developer
          </Typography>

          <Typography
            variant={isScreenBelowMd ? "subtitle2" : "h6"}
            className={classes.bannerTitle}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
};

export default Banner;
