from apps.posts.models.post.model import Article

class ArticleService():
    """This class handles querrysets operations for the Article model."""
    
    def get_all_with_tags() -> list[dict] :
        """Get all articles with their tags."""

        articles = Article.objects.all()
        result = []

        for article in articles:
            tags = [tag.__to_dict__() for tag in article.tags.all()]
            user = article.user.username
            dict_article = article.__to_dict__()
            dict_article['tags'] = tags
            dict_article['user'] = user
            result.append(dict_article)

        print(result)

        return result
    