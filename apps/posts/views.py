from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from apps.posts.models.service import ArticleService

@csrf_exempt
class post_crud_controller():
    """This class handles the CRUD operations for articles."""
    
    def read_all(request) -> JsonResponse:
        articles = ArticleService.get_all()
        return JsonResponse(articles, safe=False)