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
import ReactTimeAgo from 'react-time-ago';

import useStyles from './styles';

export default function MediaCard({data}) {
  const classes = useStyles();
  const createdAt = new Date(data.created_utc * 1000);

  return (
    <Card className={classes.root}>
      <CardActionArea>
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
        <Button size="small" color="primary">
          Dismiss post
        </Button>
        <Typography variant="caption" align="right">
          {data.num_comments} comments
        </Typography>
      </CardActions>
    </Card>
  );
}
