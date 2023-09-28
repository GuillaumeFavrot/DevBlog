from django.test import TestCase
from django.contrib.auth.models import User
from django.core.files.uploadedfile import SimpleUploadedFile
from django.utils import timezone
from apps.posts.models.tag.model import Tag
from apps.posts.models.post.model import Article, Website


class PostModelTestCase(TestCase):
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


        # Create a website
        self.website = Website.objects.create(
            title_fr='Mon site en français',
            title_en='My website in English',
            user=self.user,
            content_fr='<p>Contenu en français</p>',
            content_en='<p>Content in English</p>',
            abstract_fr='Résumé en français',
            abstract_en='Abstract in English',
            released_at=timezone.now(),
            favicon='favicon.ico',
            git_repo='https://github.com/testuser/testrepo',
            url='https://testwebsite.com'
        )

        # Add tags and image to the website
        self.website.tags.add(self.tag1, self.tag2)
        self.website.header_image.save('test.jpeg', self.image, save=True)

    def tearDown(self):
        self.article.header_image.delete()
        self.website.header_image.delete()

    def test_article_str(self):
        self.assertEqual(str(self.article), 'My title in English')

    def test_article_tags(self):
        self.assertEqual(self.article.tags.count(), 2)
        self.assertIn(self.tag1, self.article.tags.all())
        self.assertIn(self.tag2, self.article.tags.all())