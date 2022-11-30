import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('TEST APP', () => {
  test('renders elements', () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i);
    const btnElem = screen.getByRole('button');
    const inputElem = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(btnElem).toBeInTheDocument();
    expect(inputElem).toBeInTheDocument();
    expect(inputElem).toMatchSnapshot();
  });
  test('renders elements 2', async () => {
    render(<App />);
    // const helloWorldElem = screen.queryByText(/hello2 world/i);
    // expect(helloWorldElem).toBeNull()
    const helloWorldElem = await screen.findByText(/Hello world/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(helloWorldElem).toHaveStyle({ color: 'red' });
  });

  test('Toggle btn', () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn');
    const inputElem = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn);
    expect(screen.getByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  test('Input elem', () => {
    render(<App />);
    const inputElem = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId('input-elem')).toContainHTML('');
    // fireEvent.input(inputElem, {
    //   target: { value: '123' },
    // });
    userEvent.type(inputElem, '123')
    expect(screen.queryByTestId('input-elem')).toContainHTML('123');
  });

});
