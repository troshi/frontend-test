import { render, screen } from '@testing-library/react';
import Header from './index';

test('renders header component', () => {
  render(<Header />);
  const linkElement = screen.getByText(/reddit posts/i);
  expect(linkElement).toBeInTheDocument();
});
