import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Header from '../components/Header/Header';
import store from '../redux/store';

describe('Header component tests', () => {
  test('Header renderu', () => {
    const header = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(header).toMatchSnapshot();
  });
});
