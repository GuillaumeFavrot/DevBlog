from django.db import models
from django.db.models.fields.files import ImageField

tag_images_storage = 'frontend/public/images/tags/'

class Tag(models.Model):
    icon: ImageField = models.ImageField(upload_to=tag_images_storage, blank=True)
    name: str = models.CharField(max_length=255)
    background_color: str = models.CharField(max_length=255, default='#FFFFFF')
    text_color: str = models.CharField(max_length=255, default='#000000')

    def __str__(self) -> str:
        return self.name
    
    def __to_dict__(self) -> dict:
        return {
            'icon': self.icon.name.replace(tag_images_storage, ''),
            'path': self.icon.path,
            'name': self.name,
            'background_color': self.background_color,
            'text_color': self.text_color
        }
