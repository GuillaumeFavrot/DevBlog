from django.db import models
from django.db.models.fields.files import ImageField

class Tag(models.Model):
    icon: ImageField = models.ImageField(upload_to='frontend/public/images/', blank=True)
    name: str = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.name
    
    def __to_dict__(self) -> dict:
        return {
            'id': self.id,
            'icon': self.icon.path,
            'name': self.name,
        }
