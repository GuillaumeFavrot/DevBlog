import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../state/store';
import Articles from './index';

let component: any;

describe('Articles', () => {
    beforeEach(() => {
        component = render(
            <Provider store={store}>
                <Articles />
            </Provider>
        );
    });

    it('Should properly render the DOM tree and display the "Articles" title', () => {
      	expect(component.getByText(/Articles/i)).toBeInTheDocument();
    });
})