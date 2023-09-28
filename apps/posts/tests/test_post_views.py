from django.test import TestCase, Client
from django.contrib.auth.models import User
from django.core.files.uploadedfile import SimpleUploadedFile
from django.utils import timezone
from apps.posts.models.tag.model import Tag
from apps.posts.models.post.model import Article, Website


from json import dumps

class ArticleControllerTestCase(TestCase):
    def setUp(self):
        self.client = Client()

        # Create a user
        self.user = User.objects.create_user(
            username='testuser',
            password='testpass'
        )

        # Create an image
        self.image = SimpleUploadedFile(
            name='test.jpeg',
            content=open('apps/posts/tests/test_assets/test.jpeg', 'rb').read(),
            content_type='image/jpg'
        )

        # Create a few tags
        self.tag1 = Tag.objects.create(name='django')
        self.tag2 = Tag.objects.create(name='python')

        # Create an article
        self.article = Article.objects.create(
            title_fr='Mon titre en français',
            title_en='My title in English',
            user=self.user,
            content_fr='<p>Contenu en français</p>',
            content_en='<p>Content in English</p>',
            abstract_fr='Résumé en français',
            abstract_en='Abstract in English'
        )

        # Add tags and image to the article
        self.article.tags.add(self.tag1, self.tag2)
        self.article.header_image.save('test.jpeg', self.image, save=True)
    
    def tearDown(self):
        self.article.header_image.delete()
    
    def test_read_all(self):
        response = self.client.post('/posts/articles/', dumps({'page': 1, 'lang': 'en'}), content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Abstract in English')
    
    def test_read_one(self):
        response = self.client.post('/posts/article/', dumps({'id': 1, 'lang': 'fr'}), content_type='application/json')
        self.assertEqual(response.status_code, 200)
        print(response)
        # self.assertContains(response, '<p>Content in English</p>')

    
