from apps.posts.models.post.model import Article
from django.core.paginator import Paginator

class ArticleService():
    """This class handles querrysets operations for the Article model."""
    
    def get_all(data) -> dict :
        """Get all articles with their tags."""

        articles = Article.objects.all()

        paginated_articles = Paginator(articles, 5)

        requested_articles = paginated_articles.page(data)

        result = {
            'page': data,
            'total_pages': paginated_articles.num_pages,
            'articles': []
        }

        for article in requested_articles:
            dict_article = {
                'title': article.title_fr,
                'content': article.abstract_fr,
                'tags': [tag.__to_dict__() for tag in article.tags.all()]
            }
            result['articles'].append(dict_article)

        return result
    