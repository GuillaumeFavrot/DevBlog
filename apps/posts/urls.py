from django.urls import path

from . import views

urlpatterns = [
    path('', views.post_crud_controller.read_all, name='read_all'),
    path('icon/', views.post_crud_controller.get_icon, name='get_icon')
]