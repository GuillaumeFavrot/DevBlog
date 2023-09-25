import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import PageCounter from './index';
import { updateArticlePage } from '../../../state/features/view';
import '@testing-library/jest-dom'

const mockStore = configureStore([]);

let component: any;

describe('PageCounter', () => {

	const store = mockStore({
		view: {
			articlePage: 1,
			articleTotalPages: 10,
		},
	});

	beforeEach(() => {
		component = render(
			<Provider store={store}>
				<PageCounter />
			</Provider>
		);
	});

	it('should render the current page number', () => {
		const pageNumber = screen.getByText('1');
		expect(pageNumber).toBeInTheDocument();
	});

	it('should dispatch an action to update the page number when a button is clicked', () => {
		const nextButton = screen.getByLabelText('next_page');
		fireEvent.click(nextButton);
		expect(store.getActions()).toEqual([updateArticlePage({ articlePage: 2 })]);
	});
});