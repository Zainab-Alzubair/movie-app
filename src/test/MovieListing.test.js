import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import MovieListing from '../components/MovieListing/MovieListing';
import store from '../redux/store';

describe('listingRender component tests', () => {
  test('listingRender renderu', () => {
    const listingRender = render(
      <Provider store={store}>
        <BrowserRouter>
          <MovieListing />
        </BrowserRouter>
        ,
      </Provider>,

    );

    expect(listingRender).toMatchSnapshot();
  });
});
