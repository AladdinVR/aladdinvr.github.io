import * as React from "react";
import Grid from "@mui/material/Grid";
import MuiMarkdown from "mui-markdown";
import { MainProps } from "../../utils/Props";
import { useTranslation } from "react-i18next";

const Main = (props: MainProps) => {
  const { i18n } = useTranslation();
  return (
    <Grid item xs={12} md={8}>
      <MuiMarkdown
        children={props[i18n.language.slice(0, 2) as keyof typeof props]}
      />
    </Grid>
  );
};

export default Main;
