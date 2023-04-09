// import necessary react testing library helpers
import {render, fireEvent, screen} from '@testing-library/react';
// import the Counter component
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialValue = screen.getByText('0')
  expect(initialValue).toBeInTheDocument()
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText('+'))
  const value = screen.getByText('1')
  expect(value).toBeInTheDocument
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText('-'))
  const value = screen.getByText('-1')
  expect(value).toBeInTheDocument 
});
