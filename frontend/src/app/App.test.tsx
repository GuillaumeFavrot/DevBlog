import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import App from './App';

let component: any;

describe('App', () => {
	beforeEach(() => {
		component = render(
			<Provider store={store}>
				<App />
			</Provider>
		);
	});

	it('Should properly render the DOM tree', () => {
		let worksite = component.getAllByLabelText('worksite')[0] as HTMLAnchorElement;
		expect(worksite).toBeInTheDocument();
	});
})