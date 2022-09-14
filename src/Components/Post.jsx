import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
const useStyle = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },

  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));

const Post = () => {
  const classes = useStyle();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.pixabay.com/photo/2014/02/13/07/28/security-265130_960_720.jpg"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            What is security
          </Typography>
          <Typography variant="Body2">
            Security for information technology (IT) refers to the methods,
            tools and personnel used to defend an organization's digital assets.
            The goal of IT security is to protect these assets, devices and
            services from being disrupted, stolen or exploited by unauthorized
            users, otherwise known as threat actors. These threats can be
            external or internal and malicious or accidental in both origin and
            nature.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActionArea>
    </Card>
  );
};

export default Post;
