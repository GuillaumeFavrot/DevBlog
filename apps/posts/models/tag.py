from django.db import models
from django.db.models.fields.files import ImageField

class Tag(models.Model):
    icon: ImageField = models.ImageField(upload_to='images/', blank=True, height_field=32, width_field=32)
    name: str = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.name