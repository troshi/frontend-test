import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Homepage from '../../views/Homepage';
import { fetchRedditPosts } from "../../utils/actions";
import Header from '../Header';

export default function App(props) {
  const dispatch = useDispatch();
  const actionData = useSelector(state => state.app, []) || [];

  console.log("ACTION", actionData);
  useEffect(() => {
    dispatch(fetchRedditPosts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Homepage />
    </>
  );
}
