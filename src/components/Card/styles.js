import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "left",
    },
    media: {
      height: 140,
      width: 140,
      flex: 1,
    },
    actionArea: {
      display: "flex",
    },
    mediaRight: {
      flex: 1.5,
    }
  })
);
