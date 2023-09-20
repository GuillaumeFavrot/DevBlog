from apps.posts.models.post.model import Article

class ArticleService():
    """This class handles querrysets operations for the Article model."""
    
    def get_all() -> list[dict] :
        """Get all articles with their tags."""

        articles = Article.objects.all()
        result = []

        for article in articles:
            dict_article = {
                'title': article.title_fr,
                'content': article.abstract_fr,
                'tags': [tag.__to_dict__() for tag in article.tags.all()]
            }
            result.append(dict_article)

        return result
    