import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { HeaderProps } from "../../utils/Props";
import MenuIcon from "@mui/icons-material/Menu";
import {
  createTheme,
  CssBaseline,
  Paper,
  Theme,
  ThemeOptions,
  ThemeProvider,
  Button,
  Menu,
  MenuItem,
  Switch,
} from "@mui/material";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { useState } from "react";

const Header = (props: HeaderProps) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let sections = [
    {
      title: t("home"),
      dest: "home",
      weight: props.page === "home" ? "Bold" : "14px",
    },
    {
      title: t("join"),
      dest: "join",
      weight: props.page === "join" ? "Bold" : "14px",
    },
    {
      title: t("history"),
      dest: "history",
      weight: props.page === "history" ? "Bold" : "14px",
    },
    {
      title: t("song"),
      dest: "song",
      weight: props.page === "song" ? "Bold" : "14px",
    },
    {
      title: t("training"),
      dest: "training",
      weight: props.page === "training" ? "Bold" : "14px",
    },
    {
      title: t("ranking"),
      dest: "ranking",
      weight: props.page === "ranking" ? "Bold" : "14px",
    },
  ];
  const innerThemeOptions: ThemeOptions = {
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            position: "sticky",
            top: "0px",
            marginBottom: "30px",
            zIndex: "10",
            backgroundColor: props.theme.palette.background.default,
            boxShadow:
              props.themeSelected === "dark"
                ? "0 1px 6px 1px rgba(255,255,255,0.25)"
                : "0 1px 6px 1px rgba(0,0,0,0.12)",
          },
        },
      },
    },
  };
  const smallSizeLimit = 1000;
  const nav = () => {
    return sections.map((section, index) => (
      <MenuItem key={section.title}>
        <Link
          color="inherit"
          key={section.title}
          variant="body2"
          fontWeight={section.weight}
          onClick={() => {
            let tempSections = [...sections];
            tempSections.forEach((_element, index) => {
              tempSections[index].weight = "14px";
            });
            tempSections[index].weight = "Bold";
            sections = tempSections;
            props.setPage(section.dest);
          }}
          sx={{ p: 1, flexShrink: 0 }}
          style={{ cursor: "pointer " }}
        >
          {t(section.title as keyof typeof t)}
        </Link>
      </MenuItem>
    ));
  };
  return (
    <>
      <CssBaseline />
      <ThemeProvider
        theme={(theme: Theme) => createTheme(theme, innerThemeOptions)}
      >
        <Paper elevation={5} square>
          <Toolbar
            component="nav"
            variant="dense"
            sx={
              window.innerWidth < smallSizeLimit
                ? { justifyContent: "space-between", overflowX: "auto" }
                : { justifyContent: "space-around", overflowX: "auto" }
            }
          >
            <img
              src="/favicon.ico"
              alt="Club's logo"
              className="favicon"
              style={
                window.innerWidth > window.innerHeight
                  ? { width: "5vw", height: "auto" }
                  : { width: "auto", height: "10vh" }
              }
            />
            {window.innerWidth > smallSizeLimit && nav()}
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ alignItems: "flex-end" }}
            >
              <MenuIcon sx={{ marginRight: "10px" }} />
              Menu
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {window.innerWidth < smallSizeLimit && nav()}
              <MenuItem>
                <LanguageSelector />
              </MenuItem>
              <MenuItem sx={{ flexDirection: "row-reverse" }}>
                <Switch
                  onClick={() => {
                    props.setThemeSelected((theme) =>
                      theme === "light" ? "dark" : "light"
                    );
                  }}
                  checkedIcon={<Brightness3Icon sx={{ marginTop: "-5%" }} />}
                  icon={
                    <BrightnessHighIcon
                      sx={{ color: "#ffc107", marginTop: "-5%" }}
                    />
                  }
                  checked={props.themeSelected === "dark"}
                  size="medium"
                />
              </MenuItem>
            </Menu>
          </Toolbar>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default Header;
