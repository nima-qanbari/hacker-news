import React, { useState, useEffect, useContext } from "react";

//material-ui
import { Button, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

//api
import { getNewsId } from "../../Services/Api";

//context
import { ColorModeContext } from "../../store/ColorContextProvider";

//components
import Item from "../Item/Item";
import Loader from "../Loader/Loader";
import { MaterialUISwitch } from "../Switch/Switch";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "1000px",
    padding: theme.spacing(2, 0, 4, 0),
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    color: theme.palette.warning.main,
    [theme.breakpoints.down('md')]: {
      fontSize: "30px !important",
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: "20px !important",
    },
  },
}));

const Home = () => {
  const [newsIds, setNewsIds] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [visible, setVisible] = useState(10);
  const { toggleMode } = useContext(ColorModeContext);
 

  const classes = useStyles();

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 10);
  };
  useEffect(() => {
    getNewsId().then((data) => setNewsIds(data));
    setTimeout(() => {
      setIsShown(true);
    }, 2000);
  }, []);

  return (
    <Container className={classes.container}>
      <div className={classes.title}>
        <Typography variant="h4" className={classes.logo}>
          Hacker News
        </Typography>
        <MaterialUISwitch onClick={toggleMode} />
      </div>
      <div>
        {newsIds.length === 0 ? (
          <Loader />
        ) : (
          newsIds
            .slice(0, visible)
            .map((newsId) => <Item key={newsId} newsId={newsId} />)
        )}
        {newsIds.length !== 0 && isShown && (
          <Button size="small" color="warning" variant="contained" onClick={showMoreItems}>
            load more
          </Button>
        )}
      </div>
    </Container>
  );
};

export default Home;
