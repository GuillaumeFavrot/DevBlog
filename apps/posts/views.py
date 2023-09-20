from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, FileResponse  
from apps.posts.models.service import ArticleService

@csrf_exempt
class article_controller():
    """This class handles the CRUD operations for articles."""
    
    def read_all(request) -> JsonResponse:
        articles = ArticleService.get_all()
        return JsonResponse(articles, safe=False)

@csrf_exempt
class image_controller():
    """This class handles the image servicing."""

    def get_tag_icon(request):
        image = request.GET.get('q')
        return FileResponse(open(f'assets/icons/{image}', 'rb'))