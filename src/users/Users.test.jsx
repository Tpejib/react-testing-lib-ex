import { render, screen } from '@testing-library/react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import Users from './Users';
import { renderWithRouter } from '../tests/helpers/renderWithRouter';

jest.mock('axios');

describe('TEST USERS', () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
        },
        {
          id: 2,
          name: 'Ervin Howell',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
        },
      ],
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  // test('renders elements', async () => {
  //   axios.get.mockReturnValue(response);
  //   render(<Users />);
  //   const users = await screen.findAllByTestId('user-item');
  //   expect(users.length).toBe(3);
  //   expect(axios.get).toBeCalledTimes(1);
  //   // eslint-disable-next-line testing-library/no-debugging-utils
  //   screen.debug();
  // });

  test('test redirect to details page', async () => {
    axios.get.mockReturnValue(response);
    render(renderWithRouter(<Users />));
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    await userEvent.click(users[0]);
    const detailsPage = screen.getByTestId('user-page');
    expect(detailsPage).toBeInTheDocument();
  });

});
