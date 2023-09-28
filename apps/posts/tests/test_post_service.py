from django.test import TestCase
from apps.posts.models.post.model import Article
from apps.posts.models.tag.model import Tag
from apps.posts.models.service import ArticleService
from django.contrib.auth.models import User
from django.core.files.uploadedfile import SimpleUploadedFile

class ArticleServiceTestCase(TestCase):
    def setUp(self):
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

        # Create a pair of articles
        self.article1 = Article.objects.create(
            title_en='Test Article 1',
            title_fr='Article de test 1',
            user=self.user,
            abstract_en='This is a test article 1',
            abstract_fr='Ceci est un article de test 1',
            content_en='This is the content of test article 1',
            content_fr='Ceci est le contenu de l\'article de test 1'
        )
        self.article1.header_image.save('test.jpeg', self.image, save=True)

        self.article2 = Article.objects.create(
            title_en='Test Article 2',
            title_fr='Article de test 2',
            user=self.user,
            abstract_en='This is a test article 2',
            abstract_fr='Ceci est un article de test 2',
            content_en='This is the content of test article 2',
            content_fr='Ceci est le contenu de l\'article de test 2'
        )
        self.article2.header_image.save('test.jpeg', self.image, save=True)

    def tearDown(self):
        self.article1.header_image.delete()
        self.article2.header_image.delete()

    def test_get_all(self):
        """Test the get_all method."""
        result = ArticleService.get_all(page=1, lang='en')
        self.assertEqual(result['page'], 1)
        self.assertEqual(result['total_pages'], 1)
        self.assertEqual(len(result['articles']), 2)
        self.assertEqual(result['articles'][0]['title'], 'Test Article 2')
        self.assertEqual(result['articles'][0]['abstract'], 'This is a test article 2')
        self.assertEqual(result['articles'][0]['tags'], [])
        self.assertEqual(result['articles'][1]['title'], 'Test Article 1')
        self.assertEqual(result['articles'][1]['abstract'], 'This is a test article 1')
        self.assertEqual(result['articles'][1]['tags'], [])

    def test_get_by_id(self):
        """Test the get_by_id method."""
        articles = ArticleService.get_all(page=1, lang='fr')
        article = articles['articles'][0]
        result = ArticleService.get_by_id(id=article['id'], lang='fr')
        self.assertEqual(result['title'], 'Article de test 2')
        self.assertEqual(result['content'], 'Ceci est le contenu de l\'article de test 2')
        self.assertEqual(result['user'], 'testuser')
        self.assertEqual(result['created_at'], self.article2.created_at)
        self.assertEqual(result['updated_at'], self.article2.updated_at)