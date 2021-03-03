import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { ErrorOutline } from '@material-ui/icons';

import useStyles from './styles';

export default function ErrorMessage() {
  const classes = useStyles();
  return (
    <Container maxWidth='sm'>
      <Box display='flex' justifyContent='center' flexDirection='column'>
        <p className={classes.errorIcon}>
          <ErrorOutline />
        </p>
        <Typography variant='h5' align='center' color='secondary'>
          Hubo un error, por favor vuelva a intentarlo.
        </Typography>
      </Box>
    </Container>
  );
}
