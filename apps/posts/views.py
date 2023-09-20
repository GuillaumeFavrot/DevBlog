from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, FileResponse  
from apps.posts.models.service import ArticleService
from json import loads

class article_controller():
    """This class handles the CRUD operations for articles."""
    
    @csrf_exempt
    def read_all(request) -> JsonResponse:
        data = loads(request.body)
        articles = ArticleService.get_all(data)
        return JsonResponse(articles, safe=False)

class image_controller():
    """This class handles the image servicing."""

    def get_tag_icon(request):
        image = request.GET.get('q')
        return FileResponse(open(f'assets/icons/{image}', 'rb'))