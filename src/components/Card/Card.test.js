import { render, screen } from '@testing-library/react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import Card from './index';

TimeAgo.addDefaultLocale(en);

test('renders a card component', () => {
  render(<Card data={{
    created_utc: 1615262713,
    author: "A dude",
    thumbnail: "https://picsum.photos/200",
    title: "Some title",
    num_comments: 1,
  }} />);
  const linkElement = screen.getByText(/dismiss post/i);
  expect(linkElement).toBeInTheDocument();
});
