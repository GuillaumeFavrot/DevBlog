import React from 'react';
import '@testing-library/jest-dom'
import { waitFor } from '@testing-library/react';
import { setupStore } from '../../../state/store';
import ArticleList from './index';
import { server } from '../../../mocks/api/server'
import { apiSlice } from '../../../state/features/api'
import { renderWithProviders } from '../../../tests/test-utils';

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

    it('Should properly render the DOM tree and display the article list component', () => {
        const articleListPage = renderWithProviders(<ArticleList />)
      	expect(articleListPage.getByLabelText('article-list')).toBeInTheDocument();

    })

    it('Should properly render the DOM tree and display the all articles', async () => {
        const articleListPage = renderWithProviders(<ArticleList />)
        await waitFor(() => {
            expect(articleListPage.getByText('First article title')).toBeInTheDocument();
            expect(articleListPage.getByText('Second article title')).toBeInTheDocument();
            expect(articleListPage.getByText('Third article title')).toBeInTheDocument();
        })
    })
})