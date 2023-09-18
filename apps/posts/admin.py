# Register the models here you want to see in the admin panel.

from django.contrib import admin

from apps.posts.models.post.model import Article, Website
from apps.posts.models.tag.model import Tag

admin.site.register(Article)
admin.site.register(Website)
admin.site.register(Tag)