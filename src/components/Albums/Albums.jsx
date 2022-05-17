import React from "react";
import Grid from "@mui/material/Grid";
import Album from "./Album/Album";

const Albums = ( {albums}) => {
  return (
    <div>
      <Grid container justify="center" spacing={2}>
        {albums.slice(1,10).map((album) => (
          <Grid item key={album.id} xs={12} sm={6} md={4} lg={3}>
            <Album
              id={album.albumId}
              title={album.title}
              image={album.url}
              imagePlaceholder={album.thumbnailUrl}
            ></Album>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Albums;
