import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ArticleCardComponent from './index';
import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import { AbstractArticle } from '../../../types';

const mockStore = configureStore([]);

describe('ArticleCardComponent', () => {
  let store: any;
  let component: any;

  beforeEach(() => {
    store = mockStore({});
    const article: AbstractArticle = {
        id: 1,
        title: 'Test Article',
        abstract: 'This is a test article',
        tags: [
            {
                name: 'test',
                background_color: '#123456',
                text_color: '#000000'
            }
        ],            
    }
    
    component = render(
      <Provider store={store}>
        <ArticleCardComponent article={article} />
      </Provider>
    );
  });

  it('should render article title and content', () => {
    const title = component.getByLabelText('article-title');
    const content = component.getByLabelText('article-content');
    expect(title.textContent).toBe('Test Article');
    expect(content.textContent).toBe('This is a test article');
  });

  it('should dispatch updateArticleId and updatePage actions on click', () => {
    const container = component.getByLabelText('article');
    fireEvent.click(container);
    const actions = store.getActions();
    expect(actions[0].type).toBe('view/updateArticleId');
    expect(actions[0].payload.articleId).toBe(1);
    expect(actions[1].type).toBe('view/updatePage');
    expect(actions[1].payload.page).toBe('article');
  });
});