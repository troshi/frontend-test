import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  CircularProgress,
  Dialog,
  IconButton,
  Typography
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import { Img } from 'react-image';
import ReactPlayer from 'react-player'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Modal({
  open,
  handleClose,
  data,
}) {

  return (
    <Dialog onClose={handleClose} aria-labelledby="post-render" open={open}>
      <DialogTitle id="post-render" onClose={handleClose}>
        {data.author}
      </DialogTitle>
      <DialogContent dividers>
        {data.is_video ?
          <ReactPlayer
            url={data.media.reddit_video.fallback_url}
            controls
            width="100%"
          />
          : <Img src={data.url} loader={<CircularProgress />} width="100%" />
        }
        <Typography gutterBottom>
          {data.title}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
