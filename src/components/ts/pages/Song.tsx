import CssBaseline from "@mui/material/CssBaseline";
import Main from "../Main";
import Footer from "../Footer";
import { SongProps } from "../../../utils/Props";
import { useEffect } from "react";
import { Container } from "@mui/material";

const Song = (props: SongProps) => {
  useEffect(() => {
    localStorage.setItem("page", "song");
  }, []);
  return (
    <div className="Core">
      <CssBaseline />
      <Container maxWidth="lg">
        <Main {...props} />
      </Container>
      <Footer />
    </div>
  );
};

export default Song;
