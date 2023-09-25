import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../state/store';
import Websites from './index';

let component: any;

describe('App', () => {
	beforeEach(() => {
		component = render(
			<Provider store={store}>
				<Websites />
			</Provider>
		);
	});

	it('Should properly render the DOM tree', () => {
		let worksite = component.getAllByLabelText('worksite')[0] as HTMLAnchorElement;
		expect(worksite).toBeInTheDocument();
	});

    it('Should properly render the DOM tree and display the "Home" title', () => {
      	expect(component.getByText('Websites')).toBeInTheDocument();
    })
})