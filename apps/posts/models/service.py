from apps.posts.models.post.model import Article
from django.core.paginator import Paginator

images_storage = 'assets/images/'

class ArticleService():
    """This class handles querrysets operations for the Article model."""
    
    def get_all(page: int, lang: str) -> dict :
        """Get all articles with their tags."""

        print('page: ', page)
        print('lang: ', lang)

        articles = Article.objects.all()

        paginated_articles = Paginator(articles, 5)

        requested_articles = paginated_articles.page(page)

        result = {
            'page': page,
            'total_pages': paginated_articles.num_pages,
            'articles': []
        }

        for article in requested_articles:
            dict_article = {
                'id': article.id,
                'title': article.title_fr if lang == 'fr' else article.title_en,
                'abstract': article.abstract_fr if lang == 'fr' else article.abstract_en,
                'tags': [tag.__to_dict__() for tag in article.tags.all()]
            }
            result['articles'].append(dict_article)

        return result
    
    def get_by_id(id: int, lang: str) -> Article:
        """Get an article by its id."""

        print('id: ', id)
        print('lang: ', lang)

        article = Article.objects.get(id=id)

        result = {
            'title': article.title_fr if lang == 'fr' else article.title_en,
            'content': article.content_fr if lang == 'fr' else article.content_en,
            'header_image': article.header_image.name.replace(images_storage, ''),
            'user': article.user.username,
            'created_at': article.created_at,
            'updated_at': article.updated_at,
        }

        return result