import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Markdown from "./Markdown";

interface MainProps {
  posts: ReadonlyArray<string>;
  title: string;
}

const Main = (props: MainProps) => {
  const { posts, title } = props;
  console.log(posts);
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <div className="markdown" key={post.substring(0, 40)}>
          <Markdown fileName={post} />
        </div>
      ))}
    </Grid>
  );
};

export default Main;