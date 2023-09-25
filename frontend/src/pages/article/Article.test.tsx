import React from 'react';
import '@testing-library/jest-dom'
import { waitFor } from '@testing-library/react';
import { setupStore } from '../../state/store';
import Article from './index';
import { server } from '../../mocks/api/server'
import { apiSlice } from '../../state/features/api'
import { renderWithProviders } from '../../tests/test-utils';

let store = setupStore({});

let component: any;

describe('App', () => {
    // Establish API mocking before all tests.
    beforeAll(() => {
        server.listen();
    });

    // Reset any request handlers that we may add during the tests,
    // so they don't affect other tests.
    afterEach(() => {
        server.resetHandlers();
        // This is the solution to clear RTK Query cache after each test
        store.dispatch(apiSlice.util.resetApiState());
    });

    // Clean up after the tests are finished.
    afterAll(() => server.close());

    it('Should properly render the DOM tree and display the "article" div', () => {
        const articlePage = renderWithProviders(<Article />)
      	expect(articlePage.getByLabelText('article')).toBeInTheDocument();

    })

    it('Should properly render the DOM tree and display the article title', async () => {
        const articlePage = renderWithProviders(<Article />)
        await waitFor(() => {
            expect(articlePage.getByText('My article title')).toBeInTheDocument();
        })
    })
})