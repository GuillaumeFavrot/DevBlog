from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, FileResponse  
from apps.posts.models.service import ArticleService
from json import loads

class article_controller():
    """This class handles the CRUD operations for articles."""
    
    @csrf_exempt
    def read_all(request) -> JsonResponse:
        data = loads(request.body)
        print(data)
        articles = ArticleService.get_all(page=data['page'], lang=data['lang'])
        return JsonResponse(articles, safe=False)
    
    @csrf_exempt
    def read_one(request) -> JsonResponse:
        data = loads(request.body)
        article = ArticleService.get_by_id(id=data['id'], lang=data['lang'])
        return JsonResponse(article, safe=False)

class image_controller():
    """This class handles the image servicing."""

    def get_tag_icon(request):
        image = request.GET.get('q')
        return FileResponse(open(f'assets/icons/{image}', 'rb'))