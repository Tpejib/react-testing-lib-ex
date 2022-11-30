import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderTestApp } from '../../tests/renderTestApp';

describe('Counter test', () => {
  test('Test buttons', () => {
    renderTestApp(null, {
      initialState: {
        counter: {
          value: 10,
        },
      },
      route: '/',
    });

    const incrementBtn = screen.getByTestId('increment-btn');
    const decrementBtn = screen.getByTestId('decrement-btn');

    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    userEvent.click(incrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });
});