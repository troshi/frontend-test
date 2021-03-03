import React, { useState, useEffect } from 'react';

import {Container, Grid} from '@material-ui/core';

import { Card, ErrorMessage } from '../../components';
import api from '../../utils/api';

export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

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
    <Container>
      <Grid container>
        {posts.map((post)=>
          <Grid item xs={12} md={4}>
            <Card data={post.data} />
          </Grid>
        )}
      </Grid>
    </Container>
  )
}
