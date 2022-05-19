import CssBaseline from "@mui/material/CssBaseline";
import Main from "../Main";
import Footer from "../Footer";
import { HistoryProps } from "../../../utils/Props";
import { useEffect } from "react";
import { Container } from "@mui/material";

const History = (props: HistoryProps) => {
  useEffect(() => {
    localStorage.setItem("page", "history");
  }, []);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        {" "}
        <Main {...props} />
      </Container>
      <Footer />
    </>
  );
};

export default History;
