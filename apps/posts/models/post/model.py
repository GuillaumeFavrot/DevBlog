from django.db import models
from django.db.models.fields.files import ImageField
from django.contrib.auth.models import User
from datetime import datetime
from apps.posts.models.tag.model import Tag
from tinymce import models as tinymce_models


class Post(models.Model):
    """Post model"""
    title_fr: str = models.CharField(max_length=255)
    title_en: str = models.CharField(max_length=255)
    header_image: ImageField = models.ImageField(upload_to='assets/images/', blank=True)
    tags: list[Tag] = models.ManyToManyField(Tag, related_name='%(app_label)s_%(class)s_related')
    user: str = models.ForeignKey(User, related_name='%(app_label)s_%(class)s_related', on_delete=models.PROTECT, limit_choices_to={"is_staff": True})
    content_fr: str = tinymce_models.HTMLField()
    content_en: str = tinymce_models.HTMLField()
    abstract_fr: str = models.TextField(max_length=2550)
    abstract_en: str = models.TextField(max_length=2550)

    class Meta:
        abstract = True

    
    def __str__(self) -> str:
        return self.title_en
                                                                                                                                                              
    def __repr__(self) -> str:
        return
    
    def __to_dict__(self) -> dict:
        return

class Article(Post):
    created_at: datetime = models.DateTimeField(auto_now_add=True)
    updated_at: datetime = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __repr__(self) -> str:
        return f'<Article {self.title_en}>'
    
    def __to_dict__(self) -> dict:
        return {
            'id': self.id,
            'title_fr': self.title_fr,
            'title_en': self.title_en,
            # 'header_image': self.header_image.path,
            'content_fr': self.content_fr,
            'content_en': self.content_en,
            'abstract_fr': self.abstract_fr,
            'abstract_en': self.abstract_en,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }

class Website(Post):
    released_at: datetime = models.DateTimeField()
    favicon: ImageField = models.ImageField(upload_to='assets/icons/', blank=True)
    git_repo: str = models.URLField()
    url: str = models.URLField()

    class Meta:
        ordering = ['-released_at']
