from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, FileResponse, HttpResponse 
from apps.posts.models.service import ArticleService
from json import loads

class article_controller():
    """This class handles the CRUD operations for articles."""
    
    @csrf_exempt
    def read_all(request) -> JsonResponse:
        data = loads(request.body)
        articles = ArticleService.get_all(page=data['page'], lang=data['lang'])
        return JsonResponse(articles, safe=False)
    
    @csrf_exempt
    def read_one(request) -> JsonResponse:
        data = loads(request.body)
        if data['id'] != 0:
            article = ArticleService.get_by_id(id=data['id'], lang=data['lang'])
            return JsonResponse(article, safe=False)
        else:
            return HttpResponse(status=200)

class image_controller():
    """This class handles the image servicing."""

    def get_icon(request):
        image = request.GET.get('q')
        return FileResponse(open(f'assets/icons/{image}', 'rb'))
    
    def get_image(request):
        image = request.GET.get('q')
        return FileResponse(open(f'assets/images/{image}', 'rb'))