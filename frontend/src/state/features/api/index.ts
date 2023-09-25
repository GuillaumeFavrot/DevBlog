// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AbstractArticles, Article, ArticlesRequest, ArticleRequest } from '../../../types'


let url = ''
  // If no base URL (or an empty string) is given the main app address will be used. In production this is fine because the main Heroku app address serves the Django app.
  // Since React is also served by Django the correct URL is used.
  // However in development React runs on its own server so we have to specify the address (the Django server address) where requests have to be sent.
  // This section is generic and does not have to be modified.  
if(process.env.NODE_ENV === 'development') {
  url = 'http://127.0.0.1:8000'
} else if (process.env.NODE_ENV === 'test') {
  url = 'https://devblog.fakeapi.com'
}

// Define our single API slice object
export const apiSlice = createApi({
	// The cache reducer expects to be added at `state.api` (already default - this is optional)
	reducerPath: 'api',
	// All of our requests will have URLs starting with '/fakeApi'
	baseQuery: fetchBaseQuery({ baseUrl: url }),

	// The "endpoints" represent operations and requests for this server
	tagTypes: ['Article'],
	endpoints: builder => ({
		
		getArticles: builder.query<AbstractArticles, ArticlesRequest>({
			query: (req) => ({
				url : '/posts/articles/',
				method: 'POST',
				body: req
			}),
			providesTags: ['Article']
		}),

		getArticle: builder.query<Article, ArticleRequest>({ 
			query: (req) => ({
				url : '/posts/article/',
				method: 'POST',
				body: req
		})
		})
	})
})

// Export the auto-generated hooks for the API endpoints
export const { 
  useGetArticlesQuery,
  useGetArticleQuery
} = apiSlice
