import React, {useState, useEffect} from 'react'

//material-ui
import { Card, CardContent, Link, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

//api
import { getNews } from '../../Services/Api'

//helper
import {mapTime, shorten} from '../../helper/functions'

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(1, 2 , 0 ,2),
    borderRadius: "10px !important",
  },
  a: {
      textDecoration: "none !important",

      "&:hover":{
          color: "purple !important",
      },

      [theme.breakpoints.down('md')]: {
        fontSize: "16px",
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: "13px",
      },

  },

  cardContent : {
    display: "flex",
    alignItems: "center",
    paddingBottom:theme.spacing(0),
    color: theme.palette.text.disabled,
    
    [theme.breakpoints.down('md')]: {
      fontSize: "1px",
    },
    "&:last-child" : {
        padding: 0,
    },



  },

  subtitle1: {
    [theme.breakpoints.down('md')]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: "10px !important",
    },
  }
}))

const Item = ({newsId}) => {
    const [news, setNews] = useState({})

    const classes = useStyles()

    useEffect(() => {
        getNews(newsId).then(data => data && data.url && setNews(data))
    }, [])
  return (
    <div>
      {news && news.url ? (
        <Card className={classes.card} sx={{}}>
          <Typography variant="h6">
            <Link className={classes.a} href={news.url}>
              {shorten(news.title)}
            </Link>
          </Typography>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.subtitle1}> by {news.by}</Typography>
            <Typography className={classes.subtitle1} variant='subtitle1'>|</Typography>
            <Typography className={classes.subtitle1}>posted:  {mapTime(news.time)}</Typography>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}

export default Item