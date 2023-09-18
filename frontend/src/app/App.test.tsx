import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import App from './App';

test('Should properly render the DOM tree and display the "Articles" title', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Articles/i)).toBeInTheDocument();
});
