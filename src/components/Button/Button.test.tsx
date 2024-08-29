import { render, screen } from '@testing-library/react';
import Button from './Button';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

describe('Button', () => {
  it('should render the Button component', () => {
    // arrange/act
    render(<Button onClickHandler={() => {}}>hello</Button>);
    const button = screen.getByRole('button');

    // assert
    expect(button).toBeInTheDocument();
  });

  it('should render the Button children', () => {
    // arrange/act
    render(<Button onClickHandler={() => {}}>hello</Button>);
    const button = screen.getByRole('button');

    // assert
    expect(button).toHaveTextContent('hello');
  });

  it('should call click handler when button clicked', async () => {
    // arrange
    const fn = jest.fn();
    render(<Button onClickHandler={fn}>hello</Button>);
    const button = screen.getByRole('button');

    // act
    await user.click(button);

    //assert
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
