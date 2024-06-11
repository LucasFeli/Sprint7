import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import StarshipDetails from './StarshipDetails';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
  rest.get('https://swapi.dev/api/starships/:id/', (req, res, ctx) => {
    return res(
      ctx.json({
        name: 'Millennium Falcon',
        model: 'YT-1300 light freighter',
        manufacturer: 'Corellian Engineering Corporation',
        cost_in_credits: '100000',
        length: '34.37',
        max_atmosphering_speed: '1050',
        crew: '4',
        passengers: '6',
        cargo_capacity: '100000',
        consumables: '2 months',
        hyperdrive_rating: '0.5',
        MGLT: '75',
        starship_class: 'Light freighter',
        pilots: [
          'https://swapi.dev/api/people/13/',
          'https://swapi.dev/api/people/14/',
          'https://swapi.dev/api/people/25/',
          'https://swapi.dev/api/people/31/',
        ],
        films: [
          'https://swapi.dev/api/films/1/',
          'https://swapi.dev/api/films/2/',
          'https://swapi.dev/api/films/3/',
        ],
        created: '2014-12-10T16:59:45.094000Z',
        edited: '2014-12-20T21:23:49.880000Z',
        url: 'https://swapi.dev/api/starships/10/',
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders StarshipDetails component', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/starships/10']}>
        <Routes>
          <Route path="/starships/:id" element={<StarshipDetails />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

  expect(await screen.findByText(/Millennium Falcon/i)).toBeInTheDocument();
  expect(screen.getByText(/Model: YT-1300 light freighter/i)).toBeInTheDocument();
  expect(screen.getByText(/Manufacturer: Corellian Engineering Corporation/i)).toBeInTheDocument();
});
