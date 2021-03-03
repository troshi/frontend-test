import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    errorIcon: {
      textAlign: 'center',
      fontSize: '10rem',
      color: theme.palette.warning.light,
    },
  })
);
