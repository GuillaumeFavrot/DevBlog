from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
from apps.posts.models.post import Article, Website 
from json import loads

@csrf_exempt
class post_crud_controller():
    """This class handles the CRUD operations for articles."""
    
    def read_all(request) -> JsonResponse:
        posts = Article.objects.all()
        posts_list = [item.__to_dict__() for item in list(posts)]
        return JsonResponse(posts_list, safe=False)