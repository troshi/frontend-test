import React from 'react';
import {
  Box,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  CardHeader,
  Button,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ReactTimeAgo from 'react-time-ago';

import Modal from "../Modal";
import useStyles from './styles';

export default function MediaCard({data}) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const createdAt = new Date(data.created_utc * 1000);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={handleClickOpen}>
          <CardHeader
            title={data.author}
            subheader={<ReactTimeAgo date={createdAt} locale="en-US" />}
          />
          <Box className={classes.actionArea}>
            <CardMedia
              className={classes.media}
              image={data.thumbnail}
              title={data.title}
            />
            <CardContent className={classes.mediaRight}>
              <Typography variant="body2" color="textSecondary" component="p">
                {data.title}
              </Typography>
            </CardContent>
          </Box>
        </CardActionArea>
        <CardActions>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            startIcon={<DeleteIcon />}
          >
            Dismiss post
          </Button>
          <Typography variant="caption" align="right">
            {data.num_comments} comments
          </Typography>
        </CardActions>
      </Card>
      <Modal
        open={open}
        handleClose={handleClose}
        data={data}
      />
    </>
  );
}
