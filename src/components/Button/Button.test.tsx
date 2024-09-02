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

  it('should set correct default classes if none are passed in', async () => {
    // arrange
    const fn = jest.fn();
    render(<Button onClickHandler={fn}>hello</Button>);
    const button = screen.getByRole('button');

    //assert
    expect(button).toHaveClass('btn btn-primary');
  });

  it('should set correct variant class if passed in', async () => {
    // arrange
    const fn = jest.fn();
    render(
      <Button onClickHandler={fn} variant="secondary">
        hello
      </Button>,
    );
    const button = screen.getByRole('button');

    //assert
    expect(button).toHaveClass('btn btn-secondary');
  });

  it('should set correct classname if passed in', async () => {
    // arrange
    const fn = jest.fn();
    render(
      <Button onClickHandler={fn} className="testClass">
        hello
      </Button>,
    );
    const button = screen.getByRole('button');

    //assert
    expect(button).toHaveClass('testClass');
  });

  it('should disable button if loading is true', async () => {
    // arrange
    const fn = jest.fn();
    render(
      <Button onClickHandler={fn} loading={true}>
        hello
      </Button>,
    );
    const button = screen.getByRole('button');

    //assert
    expect(button).toBeDisabled();
  });

  it('should add icon if loading is true', async () => {
    // arrange
    const fn = jest.fn();
    render(
      <Button onClickHandler={fn} loading={true}>
        hello
      </Button>,
    );
    const button = screen.getByRole('button');

    //assert
    expect(button).toHaveTextContent('....');
  });
});
