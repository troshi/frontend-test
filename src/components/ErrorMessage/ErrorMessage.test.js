import { render, screen } from '@testing-library/react';
import ErrorMessage from './index';

test('renders an error message', () => {
  render(<ErrorMessage />);
  const linkElement = screen.getByText(/there is an error/i);
  expect(linkElement).toBeInTheDocument();
});
