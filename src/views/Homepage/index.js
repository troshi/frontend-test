import React, { useState, useEffect } from 'react';

import {Container, Grid} from '@material-ui/core';

import { Card, ErrorMessage } from '../../components';
import api from '../../utils/api';
import useStyles from './styles';

export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const fetchData = async() => {
    setLoading(true);
    setError(false);
    try {
      const response = await api.get('memes/top.json');
      setPosts(response.data.data.children);
    } catch (e) {
      console.error(e);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!loading && error) {
    return <ErrorMessage />;
  }

  console.log("POSTS",posts);

  return (
    <Container className={classes.homepageWrapper}>
      <Grid container spacing={4}>
        {posts.map((post)=>
          <Grid item xs={12} md={4} key={post.data.id}>
            <Card data={post.data} />
          </Grid>
        )}
      </Grid>
    </Container>
  )
}
