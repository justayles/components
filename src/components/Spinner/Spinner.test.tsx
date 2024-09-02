import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

describe('Button', () => {
  it('should render the Spinner component', () => {
    // arrange/act
    render(<Spinner color="white" />);
    const element = screen.getByTestId('spinner');

    // assert
    expect(element).toBeInTheDocument();
  });

  it('should render the Spinner with correct color', () => {
    // arrange/act
    render(<Spinner color="red" />);
    const element = screen.getByTestId('spinner');

    // assert
    expect(element).toHaveClass('red');
  });

  it('should render the Spinner with animation class', () => {
    // arrange/act
    render(<Spinner color="white" />);
    const element = screen.getByTestId('spinner');

    // assert
    expect(element).toHaveClass('animate-spin');
  });
});
