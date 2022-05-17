import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import useStyles from "./styles";
import logo from "../../../assets/logo.png";

const Album = ({ title, id }) => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.root} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" className={classes.CardMedia}  image={logo} alt={title} />
        <Typography align="center" variant="body2" color="white">
          {id}
        </Typography>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Album;
