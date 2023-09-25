import { rest } from 'msw'
import {single_full_article_store, multiple_abstract_articles_store} from './data'


export const handlers = [
	rest.post('https://devblog.fakeapi.com/posts/articles/', (req, res, ctx) => {
		// successful response
		return res(ctx.status(200), ctx.json(multiple_abstract_articles_store), ctx.delay(30))
	}),

	rest.post('https://devblog.fakeapi.com/posts/article/', (req, res, ctx) => {
		// successful response
		return res(ctx.status(200), ctx.json(single_full_article_store), ctx.delay(30))
	})
]