# Generated by Django 4.2.4 on 2023-09-21 06:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0005_alter_tag_icon'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='header_image',
            field=models.ImageField(blank=True, upload_to='assets/images/'),
        ),
        migrations.AlterField(
            model_name='tag',
            name='icon',
            field=models.ImageField(blank=True, upload_to='assets/icons/'),
        ),
        migrations.AlterField(
            model_name='website',
            name='favicon',
            field=models.ImageField(blank=True, upload_to='assets/icons/'),
        ),
        migrations.AlterField(
            model_name='website',
            name='header_image',
            field=models.ImageField(blank=True, upload_to='assets/images/'),
        ),
    ]