import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('TEST Router', () => {
  test('router links', () => {
    render(
      <MemoryRouter initialEntries={['/dasdasd']}>
        <App />
      </MemoryRouter>,
    );
    // const mainLink = screen.getByTestId('main-link');
    // const aboutLink = screen.getByTestId('about-link');
    //
    // userEvent.click(aboutLink);
    // expect(screen.getByTestId('about-page')).toBeInTheDocument();
    // userEvent.click(mainLink);
    // expect(screen.getByTestId('main-page')).toBeInTheDocument();
    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });

});
