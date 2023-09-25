from django.urls import path

from . import views

urlpatterns = [
    path('articles/', views.article_controller.read_all, name='read_all'),
    path('article/', views.article_controller.read_one, name='read_one'),
    path('icons/', views.image_controller.get_icon, name='get_icon'),
    path('images/', views.image_controller.get_image, name='get_image')
]