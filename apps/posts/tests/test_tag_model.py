from django.test import TestCase
from django.core.files.uploadedfile import SimpleUploadedFile
from apps.posts.models.tag.model import Tag

class TagModelTest(TestCase):
    def setUp(self):
        self.tag = Tag.objects.create(
            name='Test Tag',
            background_color='#FFFFFF',
            text_color='#000000'
        )
        self.icon = SimpleUploadedFile(
            name='test.jpeg',
            content=open('apps/posts/tests/test_assets/test.jpeg', 'rb').read(),
            content_type='image/jpg'
        )
        self.tag.icon.save('test.jpeg', self.icon, save=True)

    def tearDown(self):
        self.tag.icon.delete()

    def test_str(self):
        self.assertEqual(str(self.tag), 'Test Tag')

    def test_to_dict(self):
        expected_dict = {
            'icon': 'test.jpeg',
            'path': self.tag.icon.path,
            'name': 'Test Tag',
            'background_color': '#FFFFFF',
            'text_color': '#000000'
        }
        self.assertDictEqual(self.tag.__to_dict__(), expected_dict)

    def test_icon_upload(self):
        self.assertTrue(self.tag.icon.name.startswith('assets/icons/'))
        self.assertTrue(self.tag.icon.name.endswith('.jpeg'))
        self.assertTrue(self.tag.icon.path.endswith('.jpeg'))